/**
 * W40K Army Builder - Core Application
 * 
 * State management, navigation, rendering, army building, save/load.
 * All ability text, weapon profiles, and rules are displayed verbatim — no abbreviations.
 */

// ─── STATE ─────────────────────────────────────────────────────────────────────
const state = {
    edition: "10th",
    currentView: "factions",
    currentFaction: null,
    currentUnit: null,
    army: {
        name: "New Army List",
        faction: null,
        edition: "10th",
        pointsLimit: 2000,
        units: [] // { unitRef, selectedModelCount, id }
    },
    nextUnitId: 1
};

// ─── DOM REFS ──────────────────────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
    navToggle: $("#nav-toggle"),
    sidebar: $("#sidebar"),
    editionSelect: $("#edition-select"),
    mainContent: $("#main-content"),
    factionGrid: $("#faction-grid"),
    unitList: $("#unit-list"),
    unitSearch: $("#unit-search"),
    roleFilter: $("#role-filter"),
    factionTitle: $("#faction-title"),
    datasheetTitle: $("#datasheet-title"),
    datasheetContent: $("#datasheet-content"),
    armyPoints: $("#army-points"),
    pointsLimit: $("#points-limit"),
    armyValidation: $("#army-validation"),
    armyList: $("#army-list"),
    savedLists: $("#saved-lists"),
    modalOverlay: $("#modal-overlay"),
    modalTitle: $("#modal-title"),
    modalContent: $("#modal-content"),
    modalClose: $("#modal-close"),
    backToFactions: $("#back-to-factions"),
    backToUnits: $("#back-to-units"),
    btnAddUnit: $("#btn-add-unit"),
    btnSaveArmy: $("#btn-save-army"),
    btnClearArmy: $("#btn-clear-army"),
    rulesFactionSelect: $("#rules-faction-select"),
    rulesContent: $("#rules-content"),
    globalSearch: $("#global-search"),
    globalSearchResults: $("#global-search-results")
};

// ─── INITIALIZATION ────────────────────────────────────────────────────────────
function init() {
    bindEvents();
    loadArmyFromStorage();
    renderFactions();
    showView("factions");
}

// ─── EVENT BINDING ─────────────────────────────────────────────────────────────
function bindEvents() {
    // Navigation
    dom.navToggle.addEventListener("click", () => {
        dom.sidebar.classList.toggle("open");
    });

    $$(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = e.target.dataset.view;
            setActiveNav(e.target);
            dom.sidebar.classList.remove("open");
            if (view === "factions") showView("factions");
            else if (view === "rules") { renderRulesView(); showView("rules"); }
            else if (view === "army") showView("army");
            else if (view === "saved") { renderSavedLists(); showView("saved"); }
        });
    });

    // Edition switch
    dom.editionSelect.addEventListener("change", (e) => {
        state.edition = e.target.value;
        state.army.edition = e.target.value;
        renderFactions();
        showView("factions");
    });

    // Faction Rules selector
    dom.rulesFactionSelect.addEventListener("change", renderRulesContent);

    // Back buttons
    dom.backToFactions.addEventListener("click", () => showView("factions"));
    dom.backToUnits.addEventListener("click", () => showView("units"));

    // Unit filters
    dom.unitSearch.addEventListener("input", renderUnits);
    dom.roleFilter.addEventListener("change", renderUnits);

    // Army actions
    dom.btnAddUnit.addEventListener("click", openAddUnitModal);
    dom.btnSaveArmy.addEventListener("click", saveArmy);
    dom.btnClearArmy.addEventListener("click", clearArmy);
    dom.pointsLimit.addEventListener("change", (e) => {
        state.army.pointsLimit = parseInt(e.target.value) || 2000;
        renderArmyView();
    });

    // Modal
    dom.modalClose.addEventListener("click", closeModal);
    dom.modalOverlay.addEventListener("click", (e) => {
        if (e.target === dom.modalOverlay) closeModal();
    });

    // Global unit search (header) — searches every faction in the current edition
    dom.globalSearch.addEventListener("input", runGlobalSearch);
    dom.globalSearch.addEventListener("focus", () => {
        if (dom.globalSearch.value.trim().length >= 2) runGlobalSearch();
    });
    dom.globalSearch.addEventListener("keydown", onGlobalSearchKey);

    // Close sidebar on outside click (mobile)
    document.addEventListener("click", (e) => {
        if (dom.sidebar.classList.contains("open") &&
            !dom.sidebar.contains(e.target) &&
            e.target !== dom.navToggle) {
            dom.sidebar.classList.remove("open");
        }
        // Close the global-search dropdown when clicking elsewhere
        if (!e.target.closest(".global-search")) closeGlobalSearch();
    });
}

// ─── NAVIGATION ────────────────────────────────────────────────────────────────
function setActiveNav(activeLink) {
    $$(".nav-link").forEach(l => l.classList.remove("active"));
    activeLink.classList.add("active");
}

function showView(viewName) {
    state.currentView = viewName;
    $$(".view").forEach(v => v.classList.remove("active"));
    $(`#view-${viewName}`).classList.add("active");

    if (viewName === "factions") applyFactionAccent(null);
    if (viewName === "army") renderArmyView();
}

// Tints faction-scoped views (units, datasheet, rules, army) with the
// selected faction's signature colour via a body[data-faction] hook.
// Passing a falsy id clears the accent back to the default Imperial brass.
function applyFactionAccent(id) {
    if (id) document.body.dataset.faction = id;
    else document.body.removeAttribute("data-faction");
}

// ─── FACTION RULES VIEW ────────────────────────────────────────────────────────
// Populates the faction selector (only factions that have rules), then renders
// the selected faction's army rules, detachments, enhancements and stratagems.
// All text is shown verbatim — nothing is abbreviated or summarised.
function renderRulesView() {
    const factions = getFactions().filter(f =>
        (Array.isArray(f.armyRules) && f.armyRules.length > 0) ||
        (Array.isArray(f.detachments) && f.detachments.length > 0)
    );

    if (factions.length === 0) {
        dom.rulesFactionSelect.innerHTML = "";
        dom.rulesContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📜</div>
                <div class="empty-state-text">No faction rules available for this edition yet</div>
            </div>`;
        return;
    }

    // Preserve current selection if still valid, otherwise default to the
    // currently browsed faction or the first available one.
    const previous = dom.rulesFactionSelect.value;
    const preferredId = factions.some(f => f.id === previous)
        ? previous
        : (state.currentFaction && factions.some(f => f.id === state.currentFaction.id)
            ? state.currentFaction.id
            : factions[0].id);

    dom.rulesFactionSelect.innerHTML = factions
        .map(f => `<option value="${f.id}"${f.id === preferredId ? " selected" : ""}>${escapeHtml(f.name)}</option>`)
        .join("");

    renderRulesContent();
}

function renderRulesContent() {
    const factionId = dom.rulesFactionSelect.value;
    const faction = getFactions().find(f => f.id === factionId);
    if (!faction) {
        dom.rulesContent.innerHTML = "";
        return;
    }

    applyFactionAccent(faction.id);

    let html = `<h3 class="rules-faction-name">${escapeHtml(faction.name)}</h3>`;

    // ── Army Rules ──
    if (Array.isArray(faction.armyRules) && faction.armyRules.length > 0) {
        html += `<div class="rules-block"><h4 class="rules-block-title">Army Rules</h4>`;
        faction.armyRules.forEach(rule => {
            html += `<div class="rule-card">`;
            html += `<div class="rule-name">${escapeHtml(rule.name)}</div>`;
            if (rule.flavour) html += `<p class="rule-flavour">${escapeHtml(rule.flavour)}</p>`;
            if (rule.text) html += `<p class="rule-text">${nl2br(escapeHtml(rule.text))}</p>`;
            if (Array.isArray(rule.vows)) {
                rule.vows.forEach(vow => {
                    html += `<div class="sub-rule"><strong>${escapeHtml(vow.name)}:</strong> ${nl2br(escapeHtml(vow.text))}</div>`;
                });
            }
            html += `</div>`;
        });
        html += `</div>`;
    }

    // ── Detachments ──
    if (Array.isArray(faction.detachments) && faction.detachments.length > 0) {
        html += `<div class="rules-block"><h4 class="rules-block-title">Detachments</h4>`;
        faction.detachments.forEach(det => {
            html += `<div class="detachment-card">`;
            html += `<div class="detachment-name">${escapeHtml(det.name)}</div>`;
            if (det.flavour) html += `<p class="rule-flavour">${escapeHtml(det.flavour)}</p>`;

            // Detachment rule
            if (det.rule) {
                html += `<div class="rule-card">`;
                html += `<div class="rule-name">${escapeHtml(det.rule.name)}</div>`;
                if (det.rule.flavour) html += `<p class="rule-flavour">${escapeHtml(det.rule.flavour)}</p>`;
                if (det.rule.text) html += `<p class="rule-text">${nl2br(escapeHtml(det.rule.text))}</p>`;
                if (det.rule.restrictions) html += `<p class="rule-restrictions"><strong>Restrictions:</strong> ${nl2br(escapeHtml(det.rule.restrictions))}</p>`;
                html += `</div>`;
            }

            // Enhancements
            if (Array.isArray(det.enhancements) && det.enhancements.length > 0) {
                html += `<div class="enh-block"><h5 class="enh-title">Enhancements</h5>`;
                det.enhancements.forEach(enh => {
                    html += `<div class="enh-card">`;
                    html += `<div class="enh-head"><span class="enh-name">${escapeHtml(enh.name)}</span><span class="enh-cost">${enh.cost} pts</span></div>`;
                    if (enh.restriction) html += `<div class="enh-restriction">${escapeHtml(enh.restriction)}</div>`;
                    if (enh.flavour) html += `<p class="rule-flavour">${escapeHtml(enh.flavour)}</p>`;
                    html += `<p class="rule-text">${nl2br(escapeHtml(enh.text))}</p>`;
                    html += `</div>`;
                });
                html += `</div>`;
            }

            // Stratagems
            if (Array.isArray(det.stratagems) && det.stratagems.length > 0) {
                html += `<div class="strat-block"><h5 class="strat-title">Stratagems</h5>`;
                det.stratagems.forEach(strat => {
                    html += `<div class="strat-card">`;
                    html += `<div class="strat-head"><span class="strat-name">${escapeHtml(strat.name)}</span><span class="strat-cp">${escapeHtml(String(strat.cp))}CP</span></div>`;
                    if (strat.type) html += `<div class="strat-type">${escapeHtml(strat.type)}</div>`;
                    if (strat.flavour) html += `<p class="rule-flavour">${escapeHtml(strat.flavour)}</p>`;
                    if (strat.when) html += `<p class="strat-line"><strong>WHEN:</strong> ${escapeHtml(strat.when)}</p>`;
                    if (strat.target) html += `<p class="strat-line"><strong>TARGET:</strong> ${escapeHtml(strat.target)}</p>`;
                    if (strat.effect) html += `<p class="strat-line"><strong>EFFECT:</strong> ${escapeHtml(strat.effect)}</p>`;
                    if (strat.restrictions) html += `<p class="strat-line"><strong>RESTRICTIONS:</strong> ${escapeHtml(strat.restrictions)}</p>`;
                    html += `</div>`;
                });
                html += `</div>`;
            }

            html += `</div>`;
        });
        html += `</div>`;
    }

    dom.rulesContent.innerHTML = html;
}

// Convert newlines in verbatim rules text to <br> for faithful display.
function nl2br(text) {
    return String(text).replace(/\n/g, "<br>");
}

// ─── FACTIONS VIEW ─────────────────────────────────────────────────────────────
function getFactions() {
    return DATA[state.edition]?.factions || [];
}

function renderFactions() {
    const factions = getFactions();
    dom.factionGrid.innerHTML = factions.map(f => `
        <div class="faction-card" data-faction-id="${f.id}">
            <div class="faction-icon">${f.icon}</div>
            <div class="faction-name">${f.name}</div>
            <div class="faction-count">${f.units.length} unit${f.units.length !== 1 ? 's' : ''}</div>
        </div>
    `).join("");

    // Bind clicks
    dom.factionGrid.querySelectorAll(".faction-card").forEach(card => {
        card.addEventListener("click", () => {
            const factionId = card.dataset.factionId;
            state.currentFaction = factions.find(f => f.id === factionId);
            applyFactionAccent(factionId);
            dom.factionTitle.textContent = state.currentFaction.name;
            renderUnits();
            showView("units");
        });
    });
}

// ─── GLOBAL UNIT SEARCH ────────────────────────────────────────────────────────
// Live, cross-faction unit lookup driven from the header search box. Matches on
// unit name and keywords across every faction in the current edition; selecting a
// result jumps straight to that unit's datasheet.
const GS_MAX_RESULTS = 40;

function runGlobalSearch() {
    const raw = dom.globalSearch.value.trim();
    const q = raw.toLowerCase();
    const box = dom.globalSearchResults;

    if (q.length < 2) {
        closeGlobalSearch();
        return;
    }

    const results = [];
    getFactions().forEach(faction => {
        faction.units.forEach(unit => {
            const nameMatch = unit.name.toLowerCase().includes(q);
            const kwMatch = !nameMatch && (unit.keywords || []).some(k => k.toLowerCase().includes(q));
            if (nameMatch || kwMatch) results.push({ faction, unit, nameMatch });
        });
    });

    results.sort((a, b) => {
        const aStarts = a.unit.name.toLowerCase().startsWith(q);
        const bStarts = b.unit.name.toLowerCase().startsWith(q);
        if (aStarts !== bStarts) return aStarts ? -1 : 1;
        if (a.nameMatch !== b.nameMatch) return a.nameMatch ? -1 : 1;
        return a.unit.name.localeCompare(b.unit.name);
    });

    if (results.length === 0) {
        box.innerHTML = `<div class="gs-empty">No units match “${escapeHtml(raw)}”</div>`;
        box.classList.remove("hidden");
        return;
    }

    const shown = results.slice(0, GS_MAX_RESULTS);
    box.innerHTML = shown.map(r => {
        const pts = (r.unit.points || []).map(p => `${p.cost}pts`).join(" / ");
        return `
            <button class="gs-result" data-faction-id="${r.faction.id}" data-unit-id="${r.unit.id}">
                <span class="gs-result-icon">${r.faction.icon || ""}</span>
                <span class="gs-result-main">
                    <span class="gs-result-name">${highlightMatch(r.unit.name, q)}</span>
                    <span class="gs-result-meta">${escapeHtml(r.faction.name)} · ${capitalize(r.unit.role)}</span>
                </span>
                <span class="gs-result-pts">${pts}</span>
            </button>`;
    }).join("") + (results.length > shown.length
        ? `<div class="gs-more">+${results.length - shown.length} more — keep typing to narrow</div>`
        : "");

    box.classList.remove("hidden");
    box.querySelectorAll(".gs-result").forEach(btn => {
        btn.addEventListener("click", () => openUnitFromSearch(btn.dataset.factionId, btn.dataset.unitId));
    });
}

function highlightMatch(text, q) {
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0, idx)) +
        `<mark class="gs-hl">${escapeHtml(text.slice(idx, idx + q.length))}</mark>` +
        escapeHtml(text.slice(idx + q.length));
}

function onGlobalSearchKey(e) {
    const items = [...dom.globalSearchResults.querySelectorAll(".gs-result")];
    if (e.key === "Escape") {
        closeGlobalSearch();
        dom.globalSearch.blur();
        return;
    }
    if (!items.length) return;
    let cur = items.findIndex(el => el.classList.contains("gs-active"));
    if (e.key === "ArrowDown") {
        e.preventDefault();
        setGsActive(items, cur < 0 ? 0 : (cur + 1) % items.length);
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setGsActive(items, cur <= 0 ? items.length - 1 : cur - 1);
    } else if (e.key === "Enter") {
        e.preventDefault();
        (items[cur] || items[0]).click();
    }
}

function setGsActive(items, idx) {
    items.forEach(el => el.classList.remove("gs-active"));
    const el = items[idx];
    if (el) {
        el.classList.add("gs-active");
        el.scrollIntoView({ block: "nearest" });
    }
}

function closeGlobalSearch() {
    dom.globalSearchResults.classList.add("hidden");
    dom.globalSearchResults.innerHTML = "";
}

function openUnitFromSearch(factionId, unitId) {
    const faction = getFactions().find(f => f.id === factionId);
    if (!faction) return;
    const unit = faction.units.find(u => u.id === unitId);
    if (!unit) return;

    state.currentFaction = faction;
    state.currentUnit = unit;
    applyFactionAccent(factionId);
    dom.factionTitle.textContent = faction.name;
    dom.unitSearch.value = "";
    dom.roleFilter.value = "all";
    renderUnits();
    renderDatasheet();
    showView("datasheet");

    dom.globalSearch.value = "";
    closeGlobalSearch();
    dom.globalSearch.blur();
}

// ─── UNIT BROWSER VIEW ─────────────────────────────────────────────────────────
function renderUnits() {
    if (!state.currentFaction) return;

    const search = dom.unitSearch.value.toLowerCase();
    const role = dom.roleFilter.value;

    let units = state.currentFaction.units;

    if (search) {
        units = units.filter(u =>
            u.name.toLowerCase().includes(search) ||
            u.keywords.some(k => k.toLowerCase().includes(search))
        );
    }

    if (role !== "all") {
        units = units.filter(u => u.role === role);
    }

    if (units.length === 0) {
        dom.unitList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-text">No units found</div>
            </div>
        `;
        return;
    }

    dom.unitList.innerHTML = units.map(u => {
        const pointsDisplay = u.points.map(p => `${p.cost}pts (${p.models})`).join(" / ");
        return `
            <div class="unit-card" data-unit-id="${u.id}">
                <div class="unit-card-info">
                    <div class="unit-card-name">${u.name}${u.isAlly ? ` <span class="ally-badge">Ally</span>` : ""}</div>
                    <div class="unit-card-meta">${capitalize(u.role)} · ${u.keywords.slice(0, 3).join(", ")}</div>
                </div>
                <div class="unit-card-actions">
                    <span class="unit-card-points">${pointsDisplay}</span>
                    <button class="btn-add-to-army" data-unit-id="${u.id}" title="Add to army">+</button>
                </div>
            </div>
        `;
    }).join("");

    // Click card to view datasheet
    dom.unitList.querySelectorAll(".unit-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn-add-to-army")) return;
            const unitId = card.dataset.unitId;
            state.currentUnit = state.currentFaction.units.find(u => u.id === unitId);
            renderDatasheet();
            showView("datasheet");
        });
    });

    // Add to army buttons
    dom.unitList.querySelectorAll(".btn-add-to-army").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const unitId = btn.dataset.unitId;
            const unit = state.currentFaction.units.find(u => u.id === unitId);
            addUnitToArmy(unit);
        });
    });
}

// ─── DATASHEET VIEW ────────────────────────────────────────────────────────────
// Resolves the full verbatim description for an ability name. Lookup order:
//   1. the unit's own inline `abilityText` map (e.g. Orks),
//   2. the shared UNIT_ABILITY_TEXT registry, keyed by the unit's normalised
//      name (uppercase, base-size suffix stripped) so Space Marine chapters can
//      reuse the shared Codex datasheets,
//   3. the ABILITY_GLOSSARY for Core/Faction abilities (matching the exact name
//      or its base name once a trailing value such as "6+", "2D6", "11" or "9\""
//      is stripped).
// Returns null when no description is known.
function normUnitName(name) {
    return normTypo(name).replace(/\s*\(.*?\)\s*$/, "").replace(/\s+/g, " ").trim().toUpperCase();
}

// Normalises typography (curly quotes/dashes) to ASCII so a lookup is never
// defeated by differing quote styles between the faction modules and the
// generated UNIT_ABILITY_TEXT registry.
function normTypo(s) {
    return String(s || "")
        .replace(/[\u2018\u2019\u201B\u2032]/g, "'")
        .replace(/[\u201C\u201D\u2033]/g, '"')
        .replace(/[\u2013\u2014\u2212]/g, "-");
}

// Many chapters add equipment/mount variants of a base datasheet (e.g. "Captain
// on Bike", "Ancient in Terminator Armour") that have no Wahapedia datasheet of
// their own but share the base unit's abilities verbatim. When the exact unit
// key is absent, fall back to progressively stripped base names so those shared
// abilities still resolve. Returns the original name plus any base candidates.
const UNIT_VARIANT_SUFFIXES = [
    / IN TERMINATOR ARMOUR$/, / IN ALLARUS TERMINATOR ARMOUR$/, / IN GRAVIS ARMOUR$/,
    / IN PHOBOS ARMOUR$/, / IN REIVER ARMOUR$/, / WITH JUMP PACKS?$/, / WITH COMBI-WEAPON$/,
    / ON BIKE$/, / ON THUNDERWOLF$/, / ON DAWNEAGLE JETBIKE$/, / ON DISC OF TZEENTCH$/,
    / WITH WINGS$/, / WITH BOLT RIFLES$/, / WITH STORM SHIELDS$/
];
function unitNameCandidates(norm) {
    const out = [norm];
    let cur = norm;
    for (let i = 0; i < 3; i++) {
        let changed = false;
        for (const re of UNIT_VARIANT_SUFFIXES) {
            if (re.test(cur)) { cur = cur.replace(re, "").trim(); out.push(cur); changed = true; break; }
        }
        if (!changed) break;
    }
    return out;
}

function abilityDescription(name, unit) {
    if (unit && unit.abilityText && unit.abilityText[name]) return unit.abilityText[name];

    const key = normTypo(name).toLowerCase();
        const keyNP = key.replace(/\s*\(.*?\)\s*$/, "").trim();
        const registry = window.UNIT_ABILITY_TEXT || {};
        if (unit && unit.name) {
            for (const cand of unitNameCandidates(normUnitName(unit.name))) {
                const unitMap = registry[cand];
                if (!unitMap) continue;
                if (unitMap[name]) return unitMap[name];
                for (const k in unitMap) {
                    const kk = normTypo(k).toLowerCase();
                    if (kk === key) return unitMap[k];
                    if (kk.replace(/\s*\(.*?\)\s*$/, "").trim() === keyNP) return unitMap[k];
                }
            }
        }

    const glossary = window.ABILITY_GLOSSARY || {};
    if (glossary[name]) return glossary[name];
    for (const k in glossary) {
        if (normTypo(k).toLowerCase() === key) return glossary[k];
    }
    const stripNum = s => s.replace(/\s+(D?[0-9]+\+[0-9]+|[0-9]*D[0-9]+|[0-9]+D?[0-9]*\+?|D[0-9]+|[0-9]+["'])$/i, "").trim();
    const base = stripNum(name);
    if (base !== name && glossary[base]) return glossary[base];
    const noParen = name.replace(/\s*\(.*?\)\s*$/, "").trim();
    if (noParen !== name) {
        if (glossary[noParen]) return glossary[noParen];
        const npKey = normTypo(noParen).toLowerCase();
        for (const k in glossary) {
            if (normTypo(k).toLowerCase() === npKey) return glossary[k];
        }
        const npBase = stripNum(noParen);
        if (npBase !== noParen && glossary[npBase]) return glossary[npBase];
    }
    // Global registry fallback: a shared named ability (e.g. Vanquish the Foe,
    // Huskarl to the Jarl) often appears on several units with identical text but
    // the current unit may not be keyed in the registry. Only reached after the
    // unit-specific and glossary lookups fail, so per-unit variants win first.
    for (const cand in registry) {
        const m = registry[cand];
        if (m[name]) return m[name];
        for (const k in m) {
            const kk = normTypo(k).toLowerCase();
            if (kk === key || kk.replace(/\s*\(.*?\)\s*$/, "").trim() === keyNP) return m[k];
        }
    }
    return null;
}

// Renders one labelled group of abilities. Each ability is either a plain string
// (keyword-style, shown as a tag) or an object { name, text } whose full verbatim
// text is shown beneath a bold name — nothing is abbreviated or truncated.
// When a description is available for a tag (from the unit or glossary), the tag
// becomes an interactive tooltip trigger (hover on desktop, tap on touch).
function renderAbilityGroup(label, abilities, unit) {
    if (!abilities || abilities.length === 0) return "";

    // Structural fragments that leaked in during datasheet extraction; not real abilities.
    const NOISE = /^(designer.?s note|legends datasheet|forge world datasheet|deployment|transport:.*)$/i;
    const tagItems = abilities.filter(a => typeof a === "string" && !NOISE.test(normTypo(a).trim()));
    const textItems = abilities.filter(a => a && typeof a === "object");

    let out = `<div style="margin-bottom:0.6rem;"><strong style="color:var(--color-text-muted);font-size:0.8rem;">${label}:</strong>`;

    if (tagItems.length > 0) {
        out += `<div class="ability-list">${tagItems.map(a => {
            const desc = abilityDescription(a, unit);
            if (desc) {
                return `<span class="ability-tag has-tip" tabindex="0" role="button" aria-label="${escapeHtml(a)}. Activate for description." data-tip="${escapeHtml(desc)}">${escapeHtml(a)}<span class="tip-ind" aria-hidden="true">?</span></span>`;
            }
            return `<span class="ability-tag">${escapeHtml(a)}</span>`;
        }).join("")}</div>`;
    }

    if (textItems.length > 0) {
        out += `<div style="margin-top:0.3rem;">${textItems.map(a => `
            <p style="font-size:0.85rem;margin-bottom:0.5rem;line-height:1.45;">
                <strong>${escapeHtml(a.name)}:</strong> ${escapeHtml(a.text)}
            </p>`).join("")}</div>`;
    }

    out += `</div>`;
    return out;
}

// Minimal HTML escaping so verbatim rules text (which may contain < > & ") renders safely.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderDatasheet() {
    const unit = state.currentUnit;
    if (!unit) return;

    dom.datasheetTitle.textContent = unit.name;

    let html = "";

    // Allied unit banner — units fielded from an allied army (e.g. Tzeentch
    // Daemons fighting alongside the Thousand Sons) are flagged with `isAlly`.
    if (unit.isAlly) {
        const allyLabel = (unit.factionKeywords && unit.factionKeywords.length > 0)
            ? unit.factionKeywords[0]
            : "Allied";
        html += `<div class="datasheet-section ally-note">
            <strong>Allied unit:</strong> ${escapeHtml(allyLabel)}
        </div>`;
    }

    // Stats bar(s). A unit may expose multiple profiles via `statLines`
    // (e.g. a Sword Brother vs a Neophyte). Otherwise fall back to `stats`.
    const statLines = (Array.isArray(unit.statLines) && unit.statLines.length > 0)
        ? unit.statLines
        : [Object.assign({ name: "" }, unit.stats)];

    html += `<div class="datasheet-section">
        <h3>Unit Profile</h3>
        ${statLines.map(line => `
            ${line.name ? `<div class="stat-line-name">${escapeHtml(line.name)}</div>` : ""}
            <div class="stat-bar">
                <div class="stat-item"><div class="stat-label">M</div><div class="stat-value">${line.m}</div></div>
                <div class="stat-item"><div class="stat-label">T</div><div class="stat-value">${line.t}</div></div>
                <div class="stat-item"><div class="stat-label">Sv</div><div class="stat-value">${line.sv}</div></div>
                <div class="stat-item"><div class="stat-label">W</div><div class="stat-value">${line.w}</div></div>
                <div class="stat-item"><div class="stat-label">Ld</div><div class="stat-value">${line.ld}</div></div>
                <div class="stat-item"><div class="stat-label">OC</div><div class="stat-value">${line.oc}</div></div>
            </div>
        `).join("")}
        ${unit.invuln ? `<div class="invuln-save"><strong>Invulnerable Save:</strong> ${escapeHtml(unit.invuln)}</div>` : ""}
        ${unit.baseSize ? `<div class="base-size">Base size: ${escapeHtml(unit.baseSize)}</div>` : ""}
    </div>`;

    // Ranged Weapons
    const rangedWeapons = (unit.weapons && unit.weapons.ranged) || [];
    if (rangedWeapons.length > 0) {
        html += `<div class="datasheet-section">
            <h3>Ranged Weapons</h3>
            <div style="overflow-x:auto;">
            <table class="weapon-table">
                <thead><tr>
                    <th>Weapon</th><th>Range</th><th>A</th><th>BS</th><th>S</th><th>AP</th><th>D</th><th>Keywords</th>
                </tr></thead>
                <tbody>
                    ${rangedWeapons.map(w => `<tr>
                        <td class="weapon-name">${w.name}</td>
                        <td>${w.range}</td>
                        <td>${w.a}</td>
                        <td>${w.bs}</td>
                        <td>${w.s}</td>
                        <td>${w.ap}</td>
                        <td>${w.d}</td>
                        <td>${w.keywords.join(", ") || "—"}</td>
                    </tr>`).join("")}
                </tbody>
            </table>
            </div>
        </div>`;
    }

    // Melee Weapons
    const meleeWeapons = (unit.weapons && unit.weapons.melee) || [];
    if (meleeWeapons.length > 0) {
        html += `<div class="datasheet-section">
            <h3>Melee Weapons</h3>
            <div style="overflow-x:auto;">
            <table class="weapon-table">
                <thead><tr>
                    <th>Weapon</th><th>Range</th><th>A</th><th>WS</th><th>S</th><th>AP</th><th>D</th><th>Keywords</th>
                </tr></thead>
                <tbody>
                    ${meleeWeapons.map(w => `<tr>
                        <td class="weapon-name">${w.name}</td>
                        <td>${w.range}</td>
                        <td>${w.a}</td>
                        <td>${w.ws}</td>
                        <td>${w.s}</td>
                        <td>${w.ap}</td>
                        <td>${w.d}</td>
                        <td>${w.keywords.join(", ") || "—"}</td>
                    </tr>`).join("")}
                </tbody>
            </table>
            </div>
        </div>`;
    }

    // Abilities - all text rendered in full, no truncation.
    // Each ability may be a plain string (keyword-style) or an object { name, text }
    // so that the full verbatim rules text is preserved and displayed.
    html += `<div class="datasheet-section">
        <h3>Abilities</h3>`;

    html += renderAbilityGroup("CORE", unit.abilities.core, unit);
    html += renderAbilityGroup("FACTION", unit.abilities.faction, unit);
    html += renderAbilityGroup("WARGEAR", unit.abilities.wargear, unit);
    html += renderAbilityGroup("ABILITIES", unit.abilities.other, unit);

    html += `</div>`;

    // Keywords - full list, no truncation
    html += `<div class="datasheet-section">
        <h3>Keywords</h3>
        <div class="ability-list">${unit.keywords.map(k => `<span class="ability-tag">${k}</span>`).join("")}</div>
    </div>`;

    // Faction Keywords
    html += `<div class="datasheet-section">
        <h3>Faction Keywords</h3>
        <div class="ability-list">${unit.factionKeywords.map(k => `<span class="ability-tag">${k}</span>`).join("")}</div>
    </div>`;

    // Points
    html += `<div class="datasheet-section">
        <h3>Points</h3>
        <div style="font-size:0.9rem;">
            ${unit.points.map(p => `<span style="margin-right:1rem;">${p.models} model${p.models > 1 ? 's' : ''}: <strong>${p.cost} pts</strong></span>`).join("")}
        </div>
    </div>`;

    // Wargear Options — full verbatim list, no truncation.
    if (Array.isArray(unit.wargearOptions) && unit.wargearOptions.length > 0) {
        html += `<div class="datasheet-section">
            <h3>Wargear Options</h3>
            <ul class="wargear-list">
                ${unit.wargearOptions.map(o => `<li>${escapeHtml(o)}</li>`).join("")}
            </ul>
        </div>`;
    }

    // Composition — prefer the full verbatim text when present, else model range.
    html += `<div class="datasheet-section">
        <h3>Unit Composition</h3>
        ${unit.compositionText
            ? `<p class="composition-text">${escapeHtml(unit.compositionText)}</p>`
            : `<p style="font-size:0.85rem;">${unit.composition.min}–${unit.composition.max} models</p>`}
    </div>`;

    // Leader — which units this model/unit can attach to or be led by.
    if (unit.leaderText) {
        html += `<div class="datasheet-section">
            <h3>Leader</h3>
            <p class="leader-text">${escapeHtml(unit.leaderText)}</p>
        </div>`;
    }

    // Transport — transport capacity for vehicles that can carry other units.
    if (unit.transport) {
        html += `<div class="datasheet-section">
            <h3>Transport</h3>
            <p class="transport-text">${escapeHtml(unit.transport)}</p>
        </div>`;
    }

    // Add to army button at bottom
    html += `<div style="margin-top:1.5rem;">
        <button class="btn btn-primary" id="datasheet-add-btn">+ Add to Army</button>
    </div>`;

    dom.datasheetContent.innerHTML = html;

    // Bind add button
    $("#datasheet-add-btn").addEventListener("click", () => {
        addUnitToArmy(unit);
    });
}

// ─── ARMY BUILDER ──────────────────────────────────────────────────────────────
function addUnitToArmy(unit) {
    // If no faction set, assign it
    if (!state.army.faction) {
        state.army.faction = state.currentFaction.id;
    }

    // Default to minimum model count
    const defaultPoints = unit.points[0];

    state.army.units.push({
        id: state.nextUnitId++,
        unitRef: unit,
        selectedModelCount: defaultPoints.models,
        points: defaultPoints.cost,
        factionId: state.currentFaction.id
    });

    saveArmyToStorage();
    showToast(`${unit.name} added to army`);
}

function removeUnitFromArmy(armyUnitId) {
    // If a leader was attached to this unit, detach it so it returns to the list.
    state.army.units.forEach(u => { if (u.attachedTo === armyUnitId) delete u.attachedTo; });
    state.army.units = state.army.units.filter(u => u.id !== armyUnitId);
    if (state.army.units.length === 0) {
        state.army.faction = null;
    }
    saveArmyToStorage();
    renderArmyView();
}

function getArmyTotalPoints() {
    return state.army.units.reduce((sum, u) => sum + u.points, 0);
}

// ─── LEADER / BODYGUARD LOGIC ──────────────────────────────────────────────────
// A "Leader" is any unit whose datasheet lists the units it can be attached to
// (parsed verbatim from its leaderText). The bodyguard relationship is matched by
// unit name. When a leader joins a unit it becomes part of that unit and its
// abilities/auras apply to the combined squad — that is surfaced in the UI.

// Phrases that signal an ability affects the whole led unit (a "buff" to flag).
const LEADER_BUFF_RE = /while this model is leading|while it.?s leading|models in (this|that) unit|this model.?s unit|that unit (have|has|gain|can|are)|its unit|bearer.?s unit|add \d+ to the objective control/i;

// Parse the list of unit names a leader can attach to, from its leaderText.
function parseLeaderTargets(ref) {
    if (!ref || !ref.leaderText) return [];
    const lt = ref.leaderText;
    const idx = lt.toLowerCase().indexOf("attached to");
    if (idx < 0) return [];
    let rest = lt.slice(idx + "attached to".length);
    const colon = rest.indexOf(":");
    if (colon >= 0 && colon < 60) rest = rest.slice(colon + 1);
    // Keep only the unit-list clause — drop trailing explanatory prose that
    // follows the first sentence break (e.g. "…Tactical Squad. You can attach…").
    const sentenceEnd = rest.search(/\.\s/);
    if (sentenceEnd >= 0) rest = rest.slice(0, sentenceEnd);
    // Remove parenthetical wargear clarifications so an inner " or " can't be
    // mistaken for a unit separator (e.g. "Ironkin Steeljacks (… or …)").
    rest = rest.replace(/\(.*?\)/g, "").replace(/\.\s*$/, "").trim();
    return rest
        .split(/[;,]| and (?=[A-Z])| or (?=[A-Z])/)
        .map(s => s.replace(/^the following units?:?/i, "").replace(/\*/g, "").replace(/\s+/g, " ").trim().toLowerCase())
        .filter(Boolean);
}

function isLeaderUnit(ref) {
    return parseLeaderTargets(ref).length > 0;
}

function canLead(leaderRef, bodyRef) {
    if (!leaderRef || !bodyRef) return false;
    const name = (bodyRef.name || "").toLowerCase();
    const kws = (bodyRef.keywords || []).map(k => k.toLowerCase());
    return parseLeaderTargets(leaderRef).some(t =>
        // Exact unit name, or a weapon-variant datasheet ("Ironkin Steeljacks with …").
        name === t ||
        name.startsWith(t + " with ") ||
        // Keyword-based Leader abilities ("Can be attached to WOLFKIN."), including
        // the "<KEYWORD> units" phrasing.
        kws.includes(t) ||
        kws.includes(t.replace(/\s+units?$/, ""))
    );
}

// The leader army-unit currently attached to a given bodyguard, or null.
function getAttachedLeader(bodyArmyUnit) {
    return state.army.units.find(u => u.attachedTo === bodyArmyUnit.id) || null;
}

// Bodyguard army-units in the list this leader could join (unled, not a leader).
function eligibleBodyguardsFor(leaderArmyUnit) {
    if (!isLeaderUnit(leaderArmyUnit.unitRef) || leaderArmyUnit.attachedTo) return [];
    return state.army.units.filter(b =>
        b.id !== leaderArmyUnit.id &&
        !isLeaderUnit(b.unitRef) &&
        !getAttachedLeader(b) &&
        canLead(leaderArmyUnit.unitRef, b.unitRef)
    );
}

// Unattached leader army-units in the list that could join this bodyguard.
function eligibleLeadersFor(bodyArmyUnit) {
    if (getAttachedLeader(bodyArmyUnit)) return [];
    return state.army.units.filter(l =>
        l.id !== bodyArmyUnit.id &&
        isLeaderUnit(l.unitRef) &&
        !l.attachedTo &&
        canLead(l.unitRef, bodyArmyUnit.unitRef)
    );
}

// The leader's own abilities (excluding universal core ones) that join the unit.
function leaderAbilityNames(ref) {
    const ab = ref.abilities || {};
    const skip = new Set(["leader", "oath of moment"]);
    const names = [];
    ["faction", "wargear", "other"].forEach(g =>
        (ab[g] || []).forEach(a => {
            const n = typeof a === "string" ? a : (a && a.name);
            if (n && !skip.has(n.toLowerCase().trim())) names.push(n);
        })
    );
    return [...new Set(names)];
}

function attachLeader(leaderId, bodyId) {
    const leader = state.army.units.find(u => u.id === leaderId);
    const body = state.army.units.find(u => u.id === bodyId);
    if (!leader || !body) return;
    if (!canLead(leader.unitRef, body.unitRef)) return;
    if (getAttachedLeader(body)) return;
    leader.attachedTo = bodyId;
    saveArmyToStorage();
    renderArmyView();
    showToast(`${leader.unitRef.name} now leads ${body.unitRef.name}`);
}

function detachLeader(leaderId) {
    const leader = state.army.units.find(u => u.id === leaderId);
    if (!leader) return;
    delete leader.attachedTo;
    saveArmyToStorage();
    renderArmyView();
}

function renderArmyView() {
    const total = getArmyTotalPoints();
    const limit = state.army.pointsLimit;

    applyFactionAccent(state.army.faction || (state.currentFaction && state.currentFaction.id));

    dom.armyPoints.textContent = `${total} pts`;
    dom.armyPoints.classList.toggle("over-limit", total > limit);
    dom.pointsLimit.value = limit;

    // Validation
    renderValidation(total, limit);

    // Army units list
    if (state.army.units.length === 0) {
        dom.armyList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚔️</div>
                <div class="empty-state-text">No units added yet. Browse factions to add units.</div>
            </div>
        `;
        return;
    }

    // Attached leaders render nested inside their squad, not at the top level.
    const topLevel = state.army.units.filter(u => !u.attachedTo);

    dom.armyList.innerHTML = topLevel.map(u => {
        const leader = getAttachedLeader(u);
        return leader ? renderLedSquad(u, leader) : renderArmyEntry(u);
    }).join("");

    bindArmyControls();
}

// A standalone army unit (with attach controls when relevant).
function renderArmyEntry(u) {
    const ref = u.unitRef;
    const leaderBadge = isLeaderUnit(ref) ? `<span class="leader-badge">★ Leader</span>` : "";

    let controls = "";
    if (isLeaderUnit(ref)) {
        const targets = eligibleBodyguardsFor(u);
        if (targets.length) {
            controls = `<select class="leader-attach-select role-filter" data-leader-id="${u.id}">
                <option value="">★ Attach to unit…</option>
                ${targets.map(b => `<option value="${b.id}">${escapeHtml(b.unitRef.name)}</option>`).join("")}
            </select>`;
        } else {
            controls = `<span class="attach-note">No eligible unit in army to lead</span>`;
        }
    } else {
        const leaders = eligibleLeadersFor(u);
        if (leaders.length) {
            controls = `<select class="bodyguard-attach-select role-filter" data-bodyguard-id="${u.id}">
                <option value="">+ Attach leader…</option>
                ${leaders.map(l => `<option value="${l.id}">${escapeHtml(l.unitRef.name)} (${l.points} pts)</option>`).join("")}
            </select>`;
        }
    }

    return `
        <div class="army-unit-card">
            <div class="army-unit-info">
                <div class="army-unit-name">${escapeHtml(ref.name)}${leaderBadge}</div>
                <div class="army-unit-meta">${capitalize(ref.role)} · ${u.selectedModelCount} model${u.selectedModelCount > 1 ? 's' : ''}</div>
                ${controls ? `<div class="attach-row">${controls}</div>` : ""}
            </div>
            <div class="army-unit-actions">
                ${renderModelCountSelector(u)}
                <span class="army-unit-points">${u.points} pts</span>
                <button class="btn-remove-unit" data-army-unit-id="${u.id}" title="Remove">&times;</button>
            </div>
        </div>`;
}

// A bodyguard unit with an attached leader, shown as one combined squad.
function renderLedSquad(body, leader) {
    const b = body.unitRef;
    const l = leader.unitRef;
    const squadPts = body.points + leader.points;

    const buffs = leaderAbilityNames(l).map(n => {
        const desc = abilityDescription(n, l);
        const isBuff = desc && LEADER_BUFF_RE.test(desc);
        if (desc) {
            return `<span class="ability-tag has-tip${isBuff ? " unit-buff" : ""}" tabindex="0" role="button" aria-label="${escapeHtml(n)}. Activate for description." data-tip="${escapeHtml(desc)}">${escapeHtml(n)}<span class="tip-ind" aria-hidden="true">?</span></span>`;
        }
        return `<span class="ability-tag">${escapeHtml(n)}</span>`;
    }).join("");

    return `
        <div class="army-squad">
            <div class="army-unit-card squad-body">
                <div class="army-unit-info">
                    <div class="army-unit-name">${escapeHtml(b.name)}</div>
                    <div class="army-unit-meta">${capitalize(b.role)} · ${body.selectedModelCount} model${body.selectedModelCount > 1 ? 's' : ''} · <span class="squad-total">Squad ${squadPts} pts</span></div>
                </div>
                <div class="army-unit-actions">
                    ${renderModelCountSelector(body)}
                    <span class="army-unit-points">${body.points} pts</span>
                    <button class="btn-remove-unit" data-army-unit-id="${body.id}" title="Remove unit">&times;</button>
                </div>
            </div>
            <div class="leader-attached">
                <div class="leader-line">
                    <span class="leader-icon">★</span>
                    <span class="leader-led">Led by <strong>${escapeHtml(l.name)}</strong></span>
                    <span class="army-unit-points">${leader.points} pts</span>
                    <button class="btn-detach-leader" data-leader-id="${leader.id}" title="Detach leader">Detach</button>
                    <button class="btn-remove-unit" data-army-unit-id="${leader.id}" title="Remove leader">&times;</button>
                </div>
                ${buffs ? `<div class="leader-buffs">
                    <div class="buffs-label">Joins the unit — abilities now in effect <span class="buff-key">(✦ = applies to the whole unit)</span>:</div>
                    <div class="ability-list">${buffs}</div>
                </div>` : ""}
            </div>
        </div>`;
}

function bindArmyControls() {
    // Remove buttons
    dom.armyList.querySelectorAll(".btn-remove-unit").forEach(btn => {
        btn.addEventListener("click", () => {
            removeUnitFromArmy(parseInt(btn.dataset.armyUnitId));
        });
    });

    // Model count selectors
    dom.armyList.querySelectorAll(".model-count-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
            const armyUnitId = parseInt(e.target.dataset.armyUnitId);
            const models = parseInt(e.target.value);
            const armyUnit = state.army.units.find(u => u.id === armyUnitId);
            if (armyUnit) {
                const pointsEntry = armyUnit.unitRef.points.find(p => p.models === models);
                if (pointsEntry) {
                    armyUnit.selectedModelCount = models;
                    armyUnit.points = pointsEntry.cost;
                    saveArmyToStorage();
                    renderArmyView();
                }
            }
        });
    });

    // Attach a leader to a unit (from the leader's control)
    dom.armyList.querySelectorAll(".leader-attach-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
            const leaderId = parseInt(e.target.dataset.leaderId);
            const bodyId = parseInt(e.target.value);
            if (bodyId) attachLeader(leaderId, bodyId);
        });
    });

    // Attach a leader to a unit (from the unit's control)
    dom.armyList.querySelectorAll(".bodyguard-attach-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
            const bodyId = parseInt(e.target.dataset.bodyguardId);
            const leaderId = parseInt(e.target.value);
            if (leaderId) attachLeader(leaderId, bodyId);
        });
    });

    // Detach buttons
    dom.armyList.querySelectorAll(".btn-detach-leader").forEach(btn => {
        btn.addEventListener("click", () => {
            detachLeader(parseInt(btn.dataset.leaderId));
        });
    });
}


function renderModelCountSelector(armyUnit) {
    if (armyUnit.unitRef.points.length <= 1) return "";
    const options = armyUnit.unitRef.points.map(p =>
        `<option value="${p.models}" ${p.models === armyUnit.selectedModelCount ? "selected" : ""}>${p.models} models</option>`
    ).join("");
    return `<select class="model-count-select role-filter" data-army-unit-id="${armyUnit.id}" style="width:auto;padding:0.3rem 0.4rem;font-size:0.8rem;">${options}</select>`;
}

function renderValidation(total, limit) {
    const msgs = [];

    if (total > limit) {
        msgs.push({ type: "error", hazard: true, text: `Over points limit by ${total - limit} pts` });
    } else if (total === 0) {
        msgs.push({ type: "warning", text: "Army is empty" });
    } else {
        msgs.push({ type: "success", text: `${limit - total} pts remaining` });
    }

    // Check battleline requirement (basic: need at least 1 battleline in 1000+ pts games)
    if (limit >= 1000) {
        const hasBattleline = state.army.units.some(u => u.unitRef.role === "battleline");
        if (!hasBattleline && state.army.units.length > 0) {
            msgs.push({ type: "warning", text: "No Battleline unit in army" });
        }
    }

    // Check character without bodyguard (basic validation)
    const characters = state.army.units.filter(u => u.unitRef.role === "character");
    if (characters.length > 0 && state.army.units.length === characters.length) {
        msgs.push({ type: "warning", text: "Army contains only Characters — consider adding other units" });
    }

    dom.armyValidation.innerHTML = msgs.map(m =>
        `<div class="validation-msg ${m.type}${m.hazard ? " hazard" : ""}">${m.text}</div>`
    ).join("");
}

// ─── ADD UNIT MODAL ────────────────────────────────────────────────────────────
function openAddUnitModal() {
    const factions = getFactions();
    dom.modalTitle.textContent = "Add Unit";

    let html = `<div style="margin-bottom:1rem;">
        <select id="modal-faction-select" class="role-filter" style="width:100%;margin-bottom:0.75rem;">
            ${factions.map(f => `<option value="${f.id}" ${f.id === state.army.faction ? "selected" : ""}>${f.name} (${f.units.length} units)</option>`).join("")}
        </select>
        <input type="text" id="modal-unit-search" class="unit-search" placeholder="Search units..." style="width:100%;">
    </div>
    <div id="modal-unit-list"></div>`;

    dom.modalContent.innerHTML = html;
    dom.modalOverlay.classList.remove("hidden");

    renderModalUnits();

    $("#modal-faction-select").addEventListener("change", renderModalUnits);
    $("#modal-unit-search").addEventListener("input", renderModalUnits);
}

function renderModalUnits() {
    const factionId = $("#modal-faction-select").value;
    const search = ($("#modal-unit-search")?.value || "").toLowerCase();
    const factions = getFactions();
    const faction = factions.find(f => f.id === factionId);

    if (!faction) return;

    let units = faction.units;
    if (search) {
        units = units.filter(u => u.name.toLowerCase().includes(search));
    }

    const container = $("#modal-unit-list");
    if (units.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-text">No units available</div></div>`;
        return;
    }

    container.innerHTML = units.map(u => {
        const pts = u.points[0].cost;
        return `<div class="unit-card" style="margin-bottom:0.4rem;" data-faction-id="${factionId}" data-unit-id="${u.id}">
            <div class="unit-card-info">
                <div class="unit-card-name">${u.name}</div>
                <div class="unit-card-meta">${capitalize(u.role)}</div>
            </div>
            <span class="unit-card-points">${pts} pts</span>
        </div>`;
    }).join("");

    container.querySelectorAll(".unit-card").forEach(card => {
        card.addEventListener("click", () => {
            const fId = card.dataset.factionId;
            const uId = card.dataset.unitId;
            const f = factions.find(f => f.id === fId);
            const unit = f.units.find(u => u.id === uId);
            state.currentFaction = f;
            addUnitToArmy(unit);
            closeModal();
            renderArmyView();
        });
    });
}

function closeModal() {
    dom.modalOverlay.classList.add("hidden");
}

// ─── SAVE / LOAD ───────────────────────────────────────────────────────────────
const STORAGE_KEY = "w40k-army-lists";
const CURRENT_ARMY_KEY = "w40k-current-army";

function saveArmyToStorage() {
    const saveData = {
        name: state.army.name,
        faction: state.army.faction,
        edition: state.army.edition,
        pointsLimit: state.army.pointsLimit,
        units: state.army.units.map(u => ({
            id: u.id,
            unitId: u.unitRef.id,
            factionId: u.factionId,
            selectedModelCount: u.selectedModelCount,
            points: u.points,
            attachedTo: u.attachedTo || null
        }))
    };
    localStorage.setItem(CURRENT_ARMY_KEY, JSON.stringify(saveData));
}

function loadArmyFromStorage() {
    try {
        const saved = localStorage.getItem(CURRENT_ARMY_KEY);
        if (!saved) return;

        const data = JSON.parse(saved);
        state.army.name = data.name || "New Army List";
        state.army.faction = data.faction;
        state.army.edition = data.edition || "10th";
        state.army.pointsLimit = data.pointsLimit || 2000;
        state.edition = data.edition || "10th";
        dom.editionSelect.value = state.edition;
        dom.pointsLimit.value = state.army.pointsLimit;

        // Resolve unit references
        const factions = DATA[state.edition]?.factions || [];
        state.army.units = [];
        let maxId = 0;

        for (const saved of data.units) {
            const faction = factions.find(f => f.id === saved.factionId);
            if (!faction) continue;
            const unitRef = faction.units.find(u => u.id === saved.unitId);
            if (!unitRef) continue;

            state.army.units.push({
                id: saved.id,
                unitRef,
                selectedModelCount: saved.selectedModelCount,
                points: saved.points,
                factionId: saved.factionId,
                ...(saved.attachedTo ? { attachedTo: saved.attachedTo } : {})
            });
            if (saved.id > maxId) maxId = saved.id;
        }
        state.nextUnitId = maxId + 1;
    } catch (e) {
        console.error("Failed to load army:", e);
    }
}

function saveArmy() {
    const name = prompt("Army list name:", state.army.name);
    if (!name) return;

    state.army.name = name;

    const lists = getSavedLists();
    const saveEntry = {
        id: Date.now(),
        name: name,
        faction: state.army.faction,
        edition: state.army.edition,
        pointsLimit: state.army.pointsLimit,
        totalPoints: getArmyTotalPoints(),
        unitCount: state.army.units.length,
        savedAt: new Date().toISOString(),
        units: state.army.units.map(u => ({
            id: u.id,
            unitId: u.unitRef.id,
            factionId: u.factionId,
            selectedModelCount: u.selectedModelCount,
            points: u.points,
            attachedTo: u.attachedTo || null
        }))
    };

    lists.push(saveEntry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    showToast(`"${name}" saved`);
}

function getSavedLists() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
}

function loadSavedList(listId) {
    const lists = getSavedLists();
    const list = lists.find(l => l.id === listId);
    if (!list) return;

    state.edition = list.edition || "10th";
    state.army.name = list.name;
    state.army.faction = list.faction;
    state.army.edition = list.edition;
    state.army.pointsLimit = list.pointsLimit;
    dom.editionSelect.value = state.edition;
    dom.pointsLimit.value = state.army.pointsLimit;

    const factions = DATA[state.edition]?.factions || [];
    state.army.units = [];
    let maxId = 0;

    for (const saved of list.units) {
        const faction = factions.find(f => f.id === saved.factionId);
        if (!faction) continue;
        const unitRef = faction.units.find(u => u.id === saved.unitId);
        if (!unitRef) continue;

        // Preserve stored ids when present so leader attachments stay linked;
        // fall back to sequential ids for older saved lists without ids.
        const id = saved.id != null ? saved.id : (maxId + 1);
        if (id > maxId) maxId = id;
        state.army.units.push({
            id,
            unitRef,
            selectedModelCount: saved.selectedModelCount,
            points: saved.points,
            factionId: saved.factionId,
            ...(saved.attachedTo ? { attachedTo: saved.attachedTo } : {})
        });
    }
    state.nextUnitId = maxId + 1;
    saveArmyToStorage();
    showView("army");
    showToast(`"${list.name}" loaded`);
}

function deleteSavedList(listId) {
    if (!confirm("Delete this saved army list?")) return;
    let lists = getSavedLists();
    lists = lists.filter(l => l.id !== listId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    renderSavedLists();
}

function clearArmy() {
    if (state.army.units.length === 0) return;
    if (!confirm("Clear current army list?")) return;
    state.army.units = [];
    state.army.faction = null;
    state.army.name = "New Army List";
    saveArmyToStorage();
    renderArmyView();
}

// ─── SAVED LISTS VIEW ──────────────────────────────────────────────────────────
function renderSavedLists() {
    const lists = getSavedLists();

    if (lists.length === 0) {
        dom.savedLists.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-text">No saved army lists yet</div>
            </div>
        `;
        return;
    }

    dom.savedLists.innerHTML = lists.map(l => {
        const date = new Date(l.savedAt).toLocaleDateString();
        return `
            <div class="saved-list-card">
                <div class="saved-list-info">
                    <h3>${l.name}</h3>
                    <div class="saved-list-meta">${l.edition} Edition · ${l.totalPoints}/${l.pointsLimit} pts · ${l.unitCount} units · ${date}</div>
                </div>
                <div class="saved-list-actions">
                    <button class="btn btn-secondary btn-load-list" data-list-id="${l.id}">Load</button>
                    <button class="btn btn-danger btn-delete-list" data-list-id="${l.id}">Delete</button>
                </div>
            </div>
        `;
    }).join("");

    dom.savedLists.querySelectorAll(".btn-load-list").forEach(btn => {
        btn.addEventListener("click", () => loadSavedList(parseInt(btn.dataset.listId)));
    });

    dom.savedLists.querySelectorAll(".btn-delete-list").forEach(btn => {
        btn.addEventListener("click", () => deleteSavedList(parseInt(btn.dataset.listId)));
    });
}

// ─── UTILITIES ─────────────────────────────────────────────────────────────────
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showToast(msg) {
    const toast = document.createElement("div");
    toast.style.cssText = `
        position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);
        background:var(--color-bg-card);color:var(--color-text);
        padding:0.7rem 1.2rem;border-radius:var(--radius);
        border:1px solid var(--color-gold-dim);font-size:0.85rem;
        box-shadow:var(--shadow);z-index:5000;
        animation:fadeInUp 0.3s ease;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s";
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Toast animation
const style = document.createElement("style");
style.textContent = `@keyframes fadeInUp { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
document.head.appendChild(style);

// ─── ABILITY TOOLTIPS ────────────────────────────────────────────────────────
// A single shared tooltip element shows the verbatim description for any ability
// tag flagged with `.has-tip`. It works with a mouse (hover), keyboard (focus)
// and touch (tap to toggle), is viewport-aware so it never spills off-screen,
// and dismisses on outside tap, Escape, scroll-away or resize.
(function setupAbilityTooltips() {
    let tipEl = null;
    let activeTag = null;
    let pinned = false; // true when opened by click/focus (sticky until dismissed)

    function ensureEl() {
        if (!tipEl) {
            tipEl = document.createElement("div");
            tipEl.className = "ability-tooltip";
            tipEl.setAttribute("role", "tooltip");
            document.body.appendChild(tipEl);
        }
        return tipEl;
    }

    function position(tag) {
        const el = tipEl;
        const rect = tag.getBoundingClientRect();
        const margin = 10;
        el.style.maxWidth = Math.min(window.innerWidth - 2 * margin, 360) + "px";
        // Measure after sizing.
        const tw = el.offsetWidth;
        const th = el.offsetHeight;
        let left = rect.left + rect.width / 2 - tw / 2;
        left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));
        let top = rect.top - th - 8;
        if (top < margin) top = rect.bottom + 8; // flip below if no room above
        el.style.left = Math.round(left) + "px";
        el.style.top = Math.round(top) + "px";
    }

    function show(tag) {
        const text = tag.getAttribute("data-tip");
        if (!text) return;
        const el = ensureEl();
        el.textContent = text;
        el.classList.add("visible");
        activeTag = tag;
        position(tag);
    }

    function hide() {
        if (tipEl) tipEl.classList.remove("visible");
        activeTag = null;
        pinned = false;
    }

    document.addEventListener("mouseover", (e) => {
        const tag = e.target.closest && e.target.closest(".ability-tag.has-tip");
        if (tag && !pinned) show(tag);
    });
    document.addEventListener("mouseout", (e) => {
        const tag = e.target.closest && e.target.closest(".ability-tag.has-tip");
        if (tag && !pinned) hide();
    });
    document.addEventListener("focusin", (e) => {
        const tag = e.target.closest && e.target.closest(".ability-tag.has-tip");
        if (tag) { show(tag); pinned = true; }
    });
    document.addEventListener("focusout", (e) => {
        const tag = e.target.closest && e.target.closest(".ability-tag.has-tip");
        if (tag) hide();
    });
    document.addEventListener("click", (e) => {
        const tag = e.target.closest && e.target.closest(".ability-tag.has-tip");
        if (tag) {
            e.preventDefault();
            if (activeTag === tag && pinned) { hide(); }
            else { show(tag); pinned = true; }
        } else if (pinned) {
            hide();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hide();
    });
    window.addEventListener("scroll", () => { if (activeTag) position(activeTag); }, true);
    window.addEventListener("resize", () => { if (activeTag) position(activeTag); });
})();

// ─── START ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", init);
