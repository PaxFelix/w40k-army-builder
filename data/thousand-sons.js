/**
 * W40K Army Builder — Thousand Sons (10th Edition)
 *
 * DATA SCOPE: This module contains only short factual game data — points,
 * model counts, statlines (M/T/Sv/W/Ld/OC), weapon profiles (range, attacks,
 * skill, strength, AP, damage) and keyword labels. Ability, detachment,
 * stratagem and enhancement entries are stored as NAMES ONLY; their rules text
 * is intentionally left for the army owner to fill in from their own codex.
 *
 * This module self-registers into the global W40K_FACTIONS registry, which
 * data/factions.js assembles into the final DATA object.
 */
(function () {
    "use strict";

    const thousandSons = {
        id: "thousand-sons",
        name: "Thousand Sons",
        icon: "\uD83D\uDD2E",
        allegiance: "Chaos",
        flavour: "",

        // ─── ARMY RULES (names only — fill in text from your codex) ──────────
        armyRules: [
            {
                name: "Cabal of Sorcerers",
                flavour: "",
                text: ""
            }
        ],

        // ─── DETACHMENTS (names only — fill in rule/strat/enhancement text) ──
        detachments: [
            {
                name: "Grand Coven",
                flavour: "",
                rule: { name: "Kindred Sorcery", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Lord of Forbidden Lore", cost: 20, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Incandaeum", cost: 15, restriction: "EXALTED SORCERER model only.", text: "" },
                    { name: "Umbralefic Crystal", cost: 20, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Eldritch Vortex of E'taph", cost: 35, restriction: "THOUSAND SONS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Psychic Dominion", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Destined by Fate", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Egotistical Power", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Desecration of Worlds", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Arcane Focus", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Devastating Sorcery", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Changehost of Deceit",
                flavour: "",
                rule: { name: "Infernal Pacts", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Nethershriek Mind-eater", cost: 10, restriction: "THOUSAND SONS or LORD OF CHANGE model only.", text: "" },
                    { name: "Diabolic Savant", cost: 20, restriction: "THOUSAND SONS INFANTRY model only.", text: "" },
                    { name: "Duplicitous Malediction", cost: 15, restriction: "THOUSAND SONS or LORD OF CHANGE model only.", text: "" },
                    { name: "Tome of True Names", cost: 20, restriction: "THOUSAND SONS INFANTRY model only.", text: "" },
                ],
                stratagems: [
                    { name: "Sulphurous Veil", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Deceptive Glamour", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ethereal Phantasm", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fractal Disjunction", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Chronosorcerous Bleed", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Glimmershift Portal", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Warpmeld Pact",
                flavour: "",
                rule: { name: "Warpmeld Sacrifice", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Warpmeld Dagger", cost: 10, restriction: "TZAANGOR SHAMAN model only.", text: "" },
                    { name: "Diamond of Distortion", cost: 20, restriction: "TZAANGOR SHAMAN model only.", text: "" },
                    { name: "Bray Lord", cost: 15, restriction: "SORCERER or INFERNAL MASTER model only.", text: "" },
                    { name: "Flowing Flesh", cost: 10, restriction: "TZAANGOR SHAMAN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Gift of Change", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Warped Vicissitude", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Deranged Ferocity", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Blessed Transmutations", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Touched by Tzeentch", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Twisted Mirage", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Rubricae Phalanx",
                flavour: "",
                rule: { name: "All Is Dust", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Risen Rubricae", cost: 30, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Arcane Thralls (Aura)", cost: 5, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Lord of the Rubricae", cost: 15, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "The Stave Abominus", cost: 20, restriction: "THOUSAND SONS INFANTRY model only.", text: "" },
                ],
                stratagems: [
                    { name: "Ardent Automata", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Inexorable Advance", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Infernal Fusillade", cp: 2, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Revenge of the Rubricae", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Implacable Guardians", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unwavering Phalanx", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Warpforged Cabal",
                flavour: "",
                rule: { name: "Warpfire Infusion", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Warp Syphon", cost: 5, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "The Perplexing Cloak", cost: 20, restriction: "THOUSAND SONS INFANTRY model only.", text: "" },
                    { name: "Biomechanical Mutation", cost: 15, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Warp-cursed Runemaster", cost: 10, restriction: "THOUSAND SONS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Hex-marked Armour", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Mutate Landscape", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cyberspirit Machinations", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Malevolent Animus", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ensorcelled Infusion", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Warpflame Gargoyles", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Hexwarp Thrallband",
                flavour: "",
                rule: { name: "Flow of Magic", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Arcane Might", cost: 20, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Empowered Manifestation", cost: 20, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Empyric Onslaught", cost: 25, restriction: "THOUSAND SONS model only.", text: "" },
                    { name: "Noctilith Mantle", cost: 15, restriction: "THOUSAND SONS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Warding Hex", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Wrath of the Doomed", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Strands of Time", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Through the Veil", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Scouring Warpflame", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Kaleidoscopic Tempest", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],

        // ─── UNITS ───────────────────────────────────────────────────────────
        units: [
            {
                id: "ts-magnus-the-red",
                name: "Magnus the Red",
                role: "monster",
                points: [{ models: 1, cost: 435 }],
                stats: { m: "14\"", t: 11, sv: "2+", w: 16, ld: "5+", oc: 6 },
                invuln: "4+",
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Gaze of Magnus", range: "24\"", a: "3D3", bs: "2+", s: 11, ap: -2, d: 3, keywords: ["Devastating Wounds", "Psychic"] },
                        { name: "Tzeentch's Firestorm", range: "24\"", a: "D6+3", bs: "2+", s: 6, ap: -1, d: 2, keywords: ["Blast", "Ignores Cover", "Psychic"] }
                    ],
                    melee: [
                        { name: "Blade of Magnus – strike", range: "Melee", a: 7, ws: "2+", s: 16, ap: -3, d: 3, keywords: ["Devastating Wounds", "Psychic"] },
                        { name: "Blade of Magnus – sweep", range: "Melee", a: 14, ws: "2+", s: 8, ap: -1, d: 2, keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Impossible Form", "Time Flux", "Supreme Commander", "Unearthly Power", "Lord of the Planet of the Sorcerers", "Damaged: 1-6 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Magnus the Red. This model is equipped with: Gaze of Magnus; Tzeentch's Firestorm; blade of Magnus.",
                keywords: ["Monster", "Character", "Epic Hero", "Fly", "Daemon", "Primarch", "Psyker", "Chaos", "Tzeentch", "Magnus the Red"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-ahriman",
                name: "Ahriman",
                role: "character",
                points: [{ models: 1, cost: 100 }],
                stats: { m: "10\"", t: 4, sv: "3+", w: 6, ld: "6+", oc: 2 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Inferno bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Transmogrifying Blast", range: "18\"", a: "D6+1", bs: "2+", s: 6, ap: -1, d: "D3", keywords: ["Blast", "Psychic"] }
                    ],
                    melee: [
                        { name: "Black Staff of Ahriman", range: "Melee", a: 5, ws: "2+", s: 7, ap: -1, d: 3, keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Scryer of Fates", "Arch-Sorcerer of Tzeentch"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Ahriman. This model is equipped with: inferno bolt pistol; Transmogrifying Blast; Black Staff of Ahriman.",
                leaderText: "This model can be attached to the following units: Rubric Marines; Tzaangor Enlightened; Tzaangor Enlightened with Fatecaster Greatbows.",
                keywords: ["Infantry", "Mounted", "Character", "Epic Hero", "Fly", "Psyker", "Chaos", "Tzeentch", "Ahriman"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-infernal-master",
                name: "Infernal Master",
                role: "character",
                points: [{ models: 1, cost: 95 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                invuln: "5+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Inferno bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Fires of the Abyss – witchfire", range: "18\"", a: "D6", bs: "N/A", s: 6, ap: -2, d: 1, keywords: ["Psychic", "Torrent"] },
                        { name: "Fires of the Abyss – focused witchfire", range: "18\"", a: "2D6", bs: "N/A", s: 6, ap: -2, d: 1, keywords: ["Hazardous", "Psychic", "Torrent"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 4, ws: "3+", s: 6, ap: -1, d: "D3", keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Malefic Maelstrom", "Glimpse of Eternity"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Infernal Master. This model is equipped with: inferno bolt pistol; Fires of the Abyss; force weapon.",
                leaderText: "This model can be attached to the following unit: Rubric Marines.",
                keywords: ["Infantry", "Character", "Grenades", "Psyker", "Chaos", "Tzeentch", "Infernal Master"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-exalted-sorcerer",
                name: "Exalted Sorcerer",
                role: "character",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 5, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Astral Blast", range: "18\"", a: "D6", bs: "2+", s: 6, ap: -2, d: "D3", keywords: ["Blast", "Devastating Wounds", "Psychic"] },
                        { name: "Inferno bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 5, ws: "2+", s: 6, ap: -1, d: "D3", keywords: ["Psychic"] },
                        { name: "Prosperine khopesh", range: "Melee", a: 4, ws: "2+", s: 5, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Arcane Shield", "Rebind Rubricae"]
                },
                wargearOptions: ["This model can be equipped with 1 Prosperine khopesh."],
                composition: { min: 1, max: 1 },
                compositionText: "1 Exalted Sorcerer. This model is equipped with: Astral Blast; inferno bolt pistol; force weapon.",
                leaderText: "This model can be attached to the following unit: Rubric Marines.",
                keywords: ["Infantry", "Character", "Grenades", "Psyker", "Chaos", "Tzeentch", "Exalted Sorcerer"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-sorcerer",
                name: "Sorcerer",
                role: "character",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                invuln: "5+",
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Inferno bolt pistol", range: "12\"", a: 1, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Pandaemonic Delusion", range: "24\"", a: 6, bs: "3+", s: 5, ap: -1, d: 1, keywords: ["Psychic", "Sustained Hits 3"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 4, ws: "3+", s: 6, ap: -1, d: "D3", keywords: ["Psychic"] },
                        { name: "Prosperine khopesh", range: "Melee", a: 3, ws: "3+", s: 5, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Empyric Guidance", "Twisted Sorceries"]
                },
                wargearOptions: ["This model can be equipped with 1 Prosperine khopesh."],
                composition: { min: 1, max: 1 },
                compositionText: "1 Sorcerer. This model is equipped with: inferno bolt pistol; Pandaemonic Delusion; force weapon.",
                leaderText: "This model can be attached to the following unit: Rubric Marines.",
                keywords: ["Infantry", "Character", "Psyker", "Grenades", "Chaos", "Tzeentch", "Sorcerer"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-sorcerer-in-terminator-armour",
                name: "Sorcerer in Terminator Armour",
                role: "character",
                points: [{ models: 1, cost: 85 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 5, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Gaze of Hate", range: "18\"", a: 3, bs: "3+", s: 4, ap: -3, d: 2, keywords: ["Anti-Monster 4+", "Anti-Vehicle 4+", "Devastating Wounds", "Psychic"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Inferno combi-weapon", range: "24\"", a: 1, bs: "4+", s: 4, ap: -2, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 5, ws: "3+", s: 6, ap: -1, d: "D3", keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Empyric Guidance", "Marked by Fate"]
                },
                wargearOptions: ["This model's inferno combi-bolter can be replaced with 1 inferno combi-weapon."],
                composition: { min: 1, max: 1 },
                compositionText: "1 Sorcerer in Terminator Armour. This model is equipped with: Gaze of Hate; inferno combi-bolter; force weapon.",
                leaderText: "This model can be attached to the following unit: Scarab Occult Terminators.",
                keywords: ["Infantry", "Character", "Psyker", "Terminator", "Chaos", "Tzeentch", "Sorcerer"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-tzaangor-shaman",
                name: "Tzaangor Shaman",
                role: "character",
                points: [{ models: 1, cost: 60 }],
                stats: { m: "10\"", t: 4, sv: "5+", w: 4, ld: "7+", oc: 2 },
                invuln: "5+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Baleful Devolution", range: "18\"", a: "D6", bs: "3+", s: 9, ap: 0, d: 1, keywords: ["Blast", "Devastating Wounds", "Psychic"] }
                    ],
                    melee: [
                        { name: "Force stave", range: "Melee", a: 3, ws: "3+", s: 5, ap: -1, d: "D3", keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Bestial Prophet", "Sacrificial Blessing"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Tzaangor Shaman. This model is equipped with: Baleful Devolution; force stave.",
                leaderText: "This model can be attached to the following units: Tzaangor Enlightened; Tzaangor Enlightened with Fatecaster Greatbows; Tzaangors.",
                keywords: ["Infantry", "Mounted", "Character", "Fly", "Psyker", "Chaos", "Tzeentch", "Mutant", "Tzaangor Shaman"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-tzaangor-enlightened",
                name: "Tzaangor Enlightened",
                role: "mounted",
                points: [{ models: 3, cost: 45 }, { models: 6, cost: 90 }],
                stats: { m: "10\"", t: 4, sv: "5+", w: 2, ld: "7+", oc: 2 },
                invuln: "5+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Autopistol", range: "12\"", a: 1, bs: "4+", s: 3, ap: 0, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Chainsword", range: "Melee", a: 6, ws: "4+", s: 4, ap: 0, d: 1, keywords: ["Precision"] },
                        { name: "Divining spear", range: "Melee", a: 3, ws: "4+", s: 5, ap: -1, d: 2, keywords: ["Lance", "Precision"] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: [],
                    wargear: [],
                    other: ["Prophesied Doom"]
                },
                wargearOptions: ["Any number of models can each have their divining spear replaced with 1 autopistol and 1 chainsword."],
                composition: { min: 3, max: 6 },
                compositionText: "1 Aviarch and 2-5 Enlightened. Every model is equipped with: divining spear.",
                keywords: ["Mounted", "Fly", "Chaos", "Tzeentch", "Mutant", "Tzaangor Enlightened"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-rubric-marines",
                name: "Rubric Marines",
                role: "battleline",
                points: [{ models: 5, cost: 100 }, { models: 10, cost: 190 }],
                invuln: "5+",
                baseSize: "32mm",
                statLines: [
                    { name: "Rubric Marine", m: "6\"", t: 4, sv: "3+", w: 2, ld: "7+", oc: 2 },
                    { name: "Aspiring Sorcerer", m: "6\"", t: 4, sv: "3+", w: 3, ld: "6+", oc: 2 }
                ],
                stats: { m: "6\"", t: 4, sv: "3+", w: 2, ld: "7+", oc: 2 },
                weapons: {
                    ranged: [
                        { name: "Inferno bolt pistol", range: "12\"", a: 1, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Inferno boltgun", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: [] },
                        { name: "Malefic Curse", range: "24\"", a: 3, bs: "3+", s: 4, ap: -3, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Psychic"] },
                        { name: "Soulreaper cannon", range: "24\"", a: 6, bs: "3+", s: 6, ap: -2, d: 1, keywords: ["Devastating Wounds"] },
                        { name: "Warpflame pistol", range: "12\"", a: "D6", bs: "N/A", s: 4, ap: 0, d: 1, keywords: ["Ignores Cover", "Pistol", "Torrent"] },
                        { name: "Warpflamer", range: "12\"", a: "D6", bs: "N/A", s: 4, ap: 0, d: 1, keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 3, ws: "3+", s: 5, ap: -2, d: 2, keywords: ["Psychic"] },
                        { name: "Close combat weapon", range: "Melee", a: 2, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Cabal of Sorcerers (Aspiring Sorcerer only)"],
                    wargear: ["Icon of Flame"],
                    other: ["Bringers of Change"]
                },
                wargearOptions: [
                    "The Aspiring Sorcerer's inferno bolt pistol can be replaced with 1 warpflame pistol.",
                    "1 Rubric Marine's inferno boltgun can be replaced with 1 soulreaper cannon.",
                    "Any number of Rubric Marines can each have their inferno boltgun replaced with 1 warpflamer.",
                    "1 Rubric Marine can be equipped with 1 icon of flame."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "1 Aspiring Sorcerer and 4-9 Rubric Marines. The Aspiring Sorcerer is equipped with: inferno bolt pistol; Malefic Curse; force weapon. Every Rubric Marine is equipped with: inferno boltgun; close combat weapon.",
                keywords: ["Infantry", "Battleline", "Chaos", "Tzeentch", "Rubricae", "Rubric Marines"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-scarab-occult-terminators",
                name: "Scarab Occult Terminators",
                role: "infantry",
                points: [{ models: 5, cost: 180 }, { models: 10, cost: 360 }],
                invuln: "4+",
                baseSize: "40mm",
                statLines: [
                    { name: "Scarab Occult Terminator", m: "5\"", t: 5, sv: "2+", w: 3, ld: "7+", oc: 1 },
                    { name: "Scarab Occult Sorcerer", m: "5\"", t: 5, sv: "2+", w: 4, ld: "6+", oc: 1 }
                ],
                stats: { m: "5\"", t: 5, sv: "2+", w: 3, ld: "7+", oc: 1 },
                weapons: {
                    ranged: [
                        { name: "Heavy warpflamer", range: "12\"", a: "D6", bs: "N/A", s: 5, ap: -2, d: 1, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Hellfyre missile rack", range: "36\"", a: 2, bs: "3+", s: 10, ap: -2, d: 3, keywords: [] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Malefic Curse", range: "24\"", a: 3, bs: "3+", s: 4, ap: -3, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Psychic"] },
                        { name: "Soulreaper cannon", range: "24\"", a: 6, bs: "3+", s: 6, ap: -2, d: 1, keywords: ["Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 3, ws: "3+", s: 6, ap: -2, d: 2, keywords: ["Psychic"] },
                        { name: "Prosperine khopesh", range: "Melee", a: 4, ws: "3+", s: 6, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Cabal of Sorcerers (Scarab Occult Sorcerer only)"],
                    wargear: [],
                    other: ["Rites of Coalescence"]
                },
                wargearOptions: [
                    "The Scarab Occult Sorcerer's inferno combi-bolter can be replaced with 1 Prosperine khopesh.",
                    "For every 5 models in this unit, 1 Scarab Occult Terminator's inferno combi-bolter can be replaced with one of the following: 1 heavy warpflamer; 1 soulreaper cannon.",
                    "For every 5 models in this unit, 1 Scarab Occult Terminator can be equipped with 1 hellfyre missile rack."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "1 Scarab Occult Sorcerer and 4-9 Scarab Occult Terminators. The Scarab Occult Sorcerer is equipped with: inferno combi-bolter; Malefic Curse; force weapon. Every Scarab Occult Terminator is equipped with: inferno combi-bolter; Prosperine khopesh.",
                keywords: ["Infantry", "Terminator", "Chaos", "Tzeentch", "Rubricae", "Scarab Occult"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-tzaangors",
                name: "Tzaangors",
                role: "infantry",
                points: [{ models: 10, cost: 70 }, { models: 20, cost: 160 }],
                stats: { m: "6\"", t: 4, sv: "6+", w: 1, ld: "7+", oc: 1 },
                invuln: "6+",
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Autopistol", range: "12\"", a: 1, bs: "4+", s: 3, ap: 0, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Chainsword", range: "Melee", a: 3, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Tzaangor blades", range: "Melee", a: 2, ws: "4+", s: 5, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Scouts 6\""],
                    faction: [],
                    wargear: ["Brayhorn", "Herd Banner"],
                    other: ["Ambushing Hunters"]
                },
                wargearOptions: [
                    "Any number of models can each have their Tzaangor blades replaced with 1 autopistol and 1 chainsword.",
                    "1 Tzaangor not equipped with a herd banner can be equipped with 1 brayhorn.",
                    "1 Tzaangor not equipped with a brayhorn can be equipped with 1 herd banner."
                ],
                composition: { min: 10, max: 20 },
                compositionText: "1 Twistbray and 9-19 Tzaangors. Every model is equipped with: Tzaangor blades.",
                keywords: ["Infantry", "Chaos", "Tzeentch", "Mutant", "Tzaangors"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-chaos-spawn",
                name: "Chaos Spawn",
                role: "infantry",
                points: [{ models: 2, cost: 65 }],
                stats: { m: "8\"", t: 5, sv: "4+", w: 4, ld: "7+", oc: 1 },
                invuln: "5+",
                baseSize: "50mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Hideous mutations", range: "Melee", a: "D6+2", ws: "4+", s: 5, ap: -1, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 5+"],
                    faction: [],
                    wargear: [],
                    other: ["Regenerating Monstrosities"]
                },
                wargearOptions: ["None"],
                composition: { min: 2, max: 2 },
                compositionText: "2 Chaos Spawn. Every model is equipped with: hideous mutations.",
                keywords: ["Beast", "Chaos", "Tzeentch", "Mutant", "Chaos Spawn"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-mutalith-vortex-beast",
                name: "Mutalith Vortex Beast",
                role: "monster",
                points: [{ models: 1, cost: 170 }],
                stats: { m: "10\"", t: 10, sv: "4+", w: 13, ld: "6+", oc: 4 },
                invuln: "5+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Warp vortex – blast", range: "24\"", a: "D6+3", bs: "3+", s: 9, ap: -2, d: 2, keywords: ["Blast"] },
                        { name: "Warp vortex – beam", range: "36\"", a: 1, bs: "3+", s: 18, ap: -3, d: "D6+6", keywords: ["Devastating Wounds"] },
                        { name: "Warp vortex – torrent", range: "18\"", a: "2D6", bs: "N/A", s: 6, ap: -1, d: 1, keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Betentacled maw", range: "Melee", a: 15, ws: "3+", s: 7, ap: 0, d: 1, keywords: [] },
                        { name: "Mutalith claws", range: "Melee", a: 5, ws: "3+", s: 10, ap: -2, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Feel No Pain 5+"],
                    faction: [],
                    wargear: [],
                    other: ["Mutating Vortex", "Immaterial Flare", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Mutalith Vortex Beast. This model is equipped with: warp vortex; betentacled maw; Mutalith claws.",
                keywords: ["Monster", "Chaos", "Tzeentch", "Mutant", "Mutalith Vortex Beast"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-lord-of-change",
                name: "Lord of Change",
                role: "monster",
                points: [{ models: 1, cost: 285 }],
                stats: { m: "12\"", t: 10, sv: "6+", w: 18, ld: "6+", oc: 5 },
                invuln: "4+",
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Rod of sorcery", range: "18\"", a: 6, bs: "2+", s: 8, ap: -1, d: 2, keywords: ["Psychic"] },
                        { name: "Bolt of Change – witchfire", range: "18\"", a: 9, bs: "2+", s: 9, ap: -1, d: 1, keywords: ["Psychic"] },
                        { name: "Bolt of Change – focused witchfire", range: "18\"", a: 9, bs: "2+", s: 9, ap: -2, d: 3, keywords: ["Hazardous", "Psychic"] }
                    ],
                    melee: [
                        { name: "Baleful sword", range: "Melee", a: 3, ws: "3+", s: 7, ap: -2, d: 3, keywords: ["Extra Attacks"] },
                        { name: "Staff of Tzeentch", range: "Melee", a: 5, ws: "3+", s: 6, ap: -1, d: 3, keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike"],
                    faction: ["Pact of Sorcery"],
                    wargear: [],
                    other: ["Daemon Lord of Tzeentch", "Master of Magicks", "Damaged: 1-6 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model can be equipped with one of the following: 1 rod of sorcery; 1 baleful sword."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Lord of Change. This model is equipped with: Bolt of Change; staff of Tzeentch.",
                keywords: ["Monster", "Character", "Fly", "Psyker", "Chaos", "Daemon", "Tzeentch", "Summoned", "Lord of Change"],
                factionKeywords: ["Scintillating Legions"],
                isAlly: true
            },
            {
                id: "ts-daemon-prince-of-tzeentch",
                name: "Daemon Prince of Tzeentch",
                role: "monster",
                points: [{ models: 1, cost: 180 }],
                stats: { m: "9\"", t: 10, sv: "2+", w: 10, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Dark Blessing", range: "24\"", a: 9, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Ignores Cover", "Psychic", "Sustained Hits 1"] },
                        { name: "Infernal cannon", range: "24\"", a: 3, bs: "2+", s: 5, ap: -2, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Hellforged weapons – strike", range: "Melee", a: 6, ws: "2+", s: 8, ap: -2, d: 3, keywords: ["Devastating Wounds", "Psychic"] },
                        { name: "Hellforged weapons – sweep", range: "Melee", a: 12, ws: "2+", s: 6, ap: -1, d: 1, keywords: ["Devastating Wounds", "Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Servile Pawns", "Glamour of Tzeentch"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Daemon Prince of Tzeentch. This model is equipped with: Dark Blessing; infernal cannon; hellforged weapons.",
                keywords: ["Monster", "Character", "Daemon", "Psyker", "Chaos", "Tzeentch", "Daemon Prince"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-daemon-prince-of-tzeentch-with-wings",
                name: "Daemon Prince of Tzeentch with Wings",
                role: "monster",
                points: [{ models: 1, cost: 170 }],
                stats: { m: "13\"", t: 9, sv: "2+", w: 10, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Dark Blessing", range: "24\"", a: 9, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Ignores Cover", "Psychic", "Sustained Hits 1"] },
                        { name: "Infernal cannon", range: "24\"", a: 3, bs: "2+", s: 5, ap: -2, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Hellforged weapons – strike", range: "Melee", a: 6, ws: "2+", s: 8, ap: -2, d: 3, keywords: ["Devastating Wounds", "Psychic"] },
                        { name: "Hellforged weapons – sweep", range: "Melee", a: 12, ws: "2+", s: 6, ap: -1, d: 1, keywords: ["Devastating Wounds", "Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Deep Strike"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Hunter of Souls", "Aetherstride"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Daemon Prince of Tzeentch with Wings. This model is equipped with: Dark Blessing; infernal cannon; hellforged weapons.",
                keywords: ["Monster", "Character", "Daemon", "Fly", "Psyker", "Chaos", "Tzeentch", "Daemon Prince"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-exalted-sorcerer-on-disc",
                name: "Exalted Sorcerer on Disc of Tzeentch",
                role: "character",
                points: [{ models: 1, cost: 100 }],
                stats: { m: "10\"", t: 4, sv: "3+", w: 6, ld: "6+", oc: 2 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Arcane Fire", range: "18\"", a: "D6", bs: "N/A", s: 6, ap: -2, d: "D3", keywords: ["Ignores Cover", "Psychic", "Torrent"] },
                        { name: "Inferno bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Force weapon", range: "Melee", a: 5, ws: "2+", s: 6, ap: -1, d: "D3", keywords: ["Psychic"] },
                        { name: "Prosperine khopesh", range: "Melee", a: 4, ws: "2+", s: 5, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Cabal of Sorcerers"],
                    wargear: [],
                    other: ["Illusions of Tzeentch", "Binding Tendrils"]
                },
                wargearOptions: ["This model can be equipped with 1 Prosperine khopesh."],
                composition: { min: 1, max: 1 },
                compositionText: "1 Exalted Sorcerer on Disc of Tzeentch. This model is equipped with: Arcane Fire; inferno bolt pistol; force weapon.",
                leaderText: "This model can be attached to one of the following units: Rubric Marines; Tzaangor Enlightened; Tzaangor Enlightened with Fatecaster Greatbows.",
                keywords: ["Infantry", "Mounted", "Character", "Fly", "Grenades", "Psyker", "Chaos", "Tzeentch", "Exalted Sorcerer"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-chaos-rhino",
                name: "Chaos Rhino",
                role: "vehicle",
                points: [{ models: 1, cost: 90 }],
                stats: { m: "12\"", t: 9, sv: "3+", w: 10, ld: "6+", oc: 2 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Havoc launcher", range: "48\"", a: "D6", bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Inferno combi-weapon", range: "24\"", a: 1, bs: "4+", s: 4, ap: -2, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Firing Deck 2"],
                    faction: [],
                    wargear: [],
                    other: ["Sorcerous Support"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 havoc launcher.",
                    "This model's inferno combi-bolter can be replaced with 1 inferno combi-weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chaos Rhino. This model is equipped with: inferno combi-bolter; armoured tracks.",
                transport: "This model has a transport capacity of 12 Thousand Sons Infantry models. It cannot transport Terminator models.",
                keywords: ["Vehicle", "Transport", "Dedicated Transport", "Smoke", "Chaos", "Tzeentch", "Rhino"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-chaos-land-raider",
                name: "Chaos Land Raider",
                role: "vehicle",
                points: [{ models: 1, cost: 220 }],
                stats: { m: "10\"", t: 12, sv: "2+", w: 16, ld: "6+", oc: 5 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Havoc launcher", range: "48\"", a: "D6", bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Inferno combi-weapon", range: "24\"", a: 1, bs: "4+", s: 4, ap: -2, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] },
                        { name: "Soulshatter lascannon", range: "48\"", a: 2, bs: "3+", s: 12, ap: -3, d: "D6+1", keywords: [] },
                        { name: "Twin inferno heavy bolter", range: "36\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Sustained Hits 1", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: 6, ws: "4+", s: 8, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: [],
                    wargear: [],
                    other: ["Assault Ramp", "Damaged: 1-5 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 havoc launcher.",
                    "This model's inferno combi-bolter can be replaced with 1 inferno combi-weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chaos Land Raider. This model is equipped with: 2 soulshatter lascannons; twin inferno heavy bolter; armoured tracks.",
                transport: "This model has a transport capacity of 14 Thousand Sons Infantry models. Each Terminator model takes up the space of 2 models.",
                keywords: ["Vehicle", "Transport", "Smoke", "Chaos", "Tzeentch", "Land Raider"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-chaos-predator-annihilator",
                name: "Chaos Predator Annihilator",
                role: "vehicle",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "10\"", t: 10, sv: "3+", w: 11, ld: "6+", oc: 3 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Predator twin lascannon", range: "48\"", a: 1, bs: "3+", s: 14, ap: -3, d: "D6+1", keywords: ["Twin-linked"] },
                        { name: "Havoc launcher", range: "48\"", a: "D6", bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Inferno combi-weapon", range: "24\"", a: 1, bs: "4+", s: 4, ap: -2, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] },
                        { name: "Inferno heavy bolter", range: "36\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Sustained Hits 1"] },
                        { name: "Lascannon", range: "48\"", a: 1, bs: "3+", s: 12, ap: -3, d: "D6+1", keywords: [] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: 3, ws: "4+", s: 8, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: [],
                    wargear: [],
                    other: ["Ensorcelled Annihilation", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model's 2 lascannons can be replaced with 2 inferno heavy bolters.",
                    "This model can be equipped with 1 havoc launcher.",
                    "This model can be equipped with 1 inferno combi-bolter or 1 inferno combi-weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chaos Predator Annihilator. This model is equipped with: Predator twin lascannon; armoured tracks.",
                keywords: ["Vehicle", "Smoke", "Chaos", "Tzeentch", "Predator Annihilator"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-chaos-predator-destructor",
                name: "Chaos Predator Destructor",
                role: "vehicle",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "10\"", t: 10, sv: "3+", w: 11, ld: "6+", oc: 3 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Predator autocannon", range: "48\"", a: 4, bs: "3+", s: 9, ap: -1, d: 3, keywords: ["Rapid Fire 2"] },
                        { name: "Havoc launcher", range: "48\"", a: "D6", bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Inferno combi-weapon", range: "24\"", a: 1, bs: "4+", s: 4, ap: -2, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] },
                        { name: "Inferno heavy bolter", range: "36\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Sustained Hits 1"] },
                        { name: "Lascannon", range: "48\"", a: 1, bs: "3+", s: 12, ap: -3, d: "D6+1", keywords: [] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: 3, ws: "4+", s: 8, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: [],
                    wargear: [],
                    other: ["Ensorcelled Destruction", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model can be equipped with 2 lascannons or 2 inferno heavy bolters.",
                    "This model can be equipped with 1 havoc launcher.",
                    "This model can be equipped with 1 inferno combi-bolter or 1 inferno combi-weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chaos Predator Destructor. This model is equipped with: Predator autocannon; armoured tracks.",
                keywords: ["Vehicle", "Smoke", "Chaos", "Tzeentch", "Predator Destructor"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-chaos-vindicator",
                name: "Chaos Vindicator",
                role: "vehicle",
                points: [{ models: 1, cost: 185 }],
                stats: { m: "9\"", t: 11, sv: "2+", w: 11, ld: "6+", oc: 3 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Demolisher cannon", range: "24\"", a: "D6+3", bs: "3+", s: 14, ap: -3, d: "D6", keywords: ["Blast"] },
                        { name: "Havoc launcher", range: "48\"", a: "D6", bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Inferno combi-weapon", range: "24\"", a: 1, bs: "4+", s: 4, ap: -2, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: [],
                    wargear: [],
                    other: ["Siege Shield", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 havoc launcher.",
                    "This model can be equipped with 1 inferno combi-bolter or 1 inferno combi-weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chaos Vindicator. This model is equipped with: demolisher cannon; armoured tracks.",
                keywords: ["Vehicle", "Smoke", "Chaos", "Tzeentch", "Vindicator"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-defiler",
                name: "Defiler",
                role: "vehicle",
                points: [{ models: 1, cost: 250 }],
                stats: { m: "12\"", t: 11, sv: "3+", w: 18, ld: "6+", oc: 5 },
                invuln: "5+",
                baseSize: "160mm",
                weapons: {
                    ranged: [
                        { name: "Ectoplasma destructor", range: "36\"", a: "D6", bs: "3+", s: 12, ap: -3, d: 3, keywords: ["Blast"] },
                        { name: "Excruciator cannon", range: "36\"", a: 6, bs: "3+", s: 6, ap: -2, d: 2, keywords: [] },
                        { name: "Hades battle cannon", range: "48\"", a: "D6+3", bs: "3+", s: 10, ap: -1, d: 3, keywords: ["Blast"] },
                        { name: "Hades lascannon", range: "48\"", a: 2, bs: "3+", s: 12, ap: -3, d: "D6+1", keywords: [] },
                        { name: "Heavy baleflamer", range: "12\"", a: "D6+3", bs: "N/A", s: 7, ap: -2, d: 2, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Heavy missile launcher – krak", range: "48\"", a: 2, bs: "3+", s: 10, ap: -2, d: "D6+1", keywords: [] },
                        { name: "Heavy missile launcher – frag", range: "48\"", a: "2D6", bs: "3+", s: 5, ap: -1, d: 1, keywords: ["Blast"] },
                        { name: "Heavy reaper autocannon", range: "48\"", a: 4, bs: "3+", s: 9, ap: -2, d: 3, keywords: ["Devastating Wounds", "Sustained Hits 1"] },
                        { name: "Pyraflux magma cutters", range: "12\"", a: 2, bs: "3+", s: 10, ap: -4, d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Electroscourge", range: "Melee", a: 5, ws: "3+", s: 12, ap: -2, d: 2, keywords: ["Extra Attacks", "Sustained Hits 2"] },
                        { name: "Shearing claws – strike", range: "Melee", a: 5, ws: "3+", s: 16, ap: -3, d: "D6+1", keywords: [] },
                        { name: "Shearing claws – sweep", range: "Melee", a: 10, ws: "3+", s: 6, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Feel No Pain 6+"],
                    faction: [],
                    wargear: [],
                    other: ["Scuttling Walker", "Destroyer of Futures", "Damaged: 1-6 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model's heavy baleflamer can be replaced with 1 heavy reaper autocannon.",
                    "This model's heavy missile launcher can be replaced with 1 ectoplasma destructor or 1 hades lascannon.",
                    "This model's 2 excruciator cannons can be replaced with 2 pyraflux magma cutters."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Defiler. This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; shearing claws.",
                keywords: ["Vehicle", "Walker", "Chaos", "Tzeentch", "Daemon", "Defiler"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-forgefiend",
                name: "Forgefiend",
                role: "vehicle",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "8\"", t: 10, sv: "3+", w: 12, ld: "6+", oc: 3 },
                invuln: "5+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Ectoplasma cannon", range: "36\"", a: "D3", bs: "3+", s: 10, ap: -3, d: 3, keywords: ["Blast"] },
                        { name: "Hades autocannon", range: "36\"", a: 6, bs: "3+", s: 8, ap: -2, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Forgefiend claws", range: "Melee", a: 3, ws: "3+", s: 6, ap: 0, d: 1, keywords: [] },
                        { name: "Forgefiend jaws", range: "Melee", a: 5, ws: "3+", s: 7, ap: 0, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: [],
                    wargear: [],
                    other: ["Blazing Salvoes", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model's 2 Hades autocannons can be replaced with 2 ectoplasma cannons."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Forgefiend. This model is equipped with: 2 Hades autocannons; Forgefiend jaws.",
                keywords: ["Vehicle", "Walker", "Daemon", "Chaos", "Tzeentch", "Forgefiend"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-helbrute",
                name: "Helbrute",
                role: "vehicle",
                points: [{ models: 1, cost: 110 }],
                stats: { m: "8\"", t: 9, sv: "2+", w: 8, ld: "6+", oc: 3 },
                invuln: "5+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Heavy flamer", range: "12\"", a: "D6", bs: "N/A", s: 5, ap: -2, d: 1, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Helbrute plasma cannon", range: "36\"", a: "D3", bs: "3+", s: 8, ap: -3, d: 3, keywords: ["Blast", "Hazardous"] },
                        { name: "Inferno combi-bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: -2, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Missile launcher – frag", range: "48\"", a: "D6", bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Missile launcher – krak", range: "48\"", a: 1, bs: "3+", s: 9, ap: -2, d: "D6", keywords: [] },
                        { name: "Multi-melta", range: "18\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] },
                        { name: "Twin autocannon", range: "48\"", a: 2, bs: "3+", s: 9, ap: -2, d: 3, keywords: ["Twin-linked"] },
                        { name: "Twin inferno heavy bolter", range: "36\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Sustained Hits 1", "Twin-linked"] },
                        { name: "Twin lascannon", range: "48\"", a: 1, bs: "3+", s: 12, ap: -3, d: "D6+1", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 5, ws: "3+", s: 6, ap: 0, d: 1, keywords: [] },
                        { name: "Helbrute fist", range: "Melee", a: 5, ws: "3+", s: 12, ap: -2, d: 3, keywords: [] },
                        { name: "Helbrute hammer", range: "Melee", a: 5, ws: "4+", s: 14, ap: -3, d: "D6+1", keywords: [] },
                        { name: "Power scourge", range: "Melee", a: 8, ws: "3+", s: 7, ap: -1, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: [],
                    wargear: [],
                    other: ["Terrifying Assault", "Devoted to Destruction"]
                },
                wargearOptions: [
                    "This model's missile launcher can be replaced with 1 twin lascannon, 1 twin autocannon or 1 twin inferno heavy bolter.",
                    "This model's multi-melta can be replaced with 1 helbrute plasma cannon, 1 heavy flamer or 1 inferno combi-bolter.",
                    "This model's close combat weapon can be replaced with 1 Helbrute fist, 1 Helbrute hammer or 1 power scourge."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Helbrute. This model is equipped with: missile launcher; multi-melta; close combat weapon.",
                keywords: ["Vehicle", "Walker", "Chaos", "Tzeentch", "Helbrute"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-heldrake",
                name: "Heldrake",
                role: "vehicle",
                points: [{ models: 1, cost: 215 }],
                stats: { m: "20+\"", t: 9, sv: "3+", w: 12, ld: "6+", oc: 0 },
                invuln: "5+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Baleflamer", range: "12\"", a: "D6+3", bs: "N/A", s: 6, ap: -2, d: 2, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Hades autocannon", range: "36\"", a: 6, bs: "3+", s: 8, ap: -2, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Heldrake claws", range: "Melee", a: 5, ws: "3+", s: 7, ap: -1, d: 2, keywords: ["Anti-Fly 2+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Hover"],
                    faction: [],
                    wargear: [],
                    other: ["Flame-wreathed", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model's Hades autocannon can be replaced with 1 baleflamer."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Heldrake. This model is equipped with: Hades autocannon; Heldrake claws.",
                keywords: ["Vehicle", "Aircraft", "Fly", "Daemon", "Chaos", "Tzeentch", "Heldrake"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-maulerfiend",
                name: "Maulerfiend",
                role: "vehicle",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "10\"", t: 10, sv: "3+", w: 12, ld: "6+", oc: 3 },
                invuln: "5+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Magma cutter", range: "6\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Lasher tendrils", range: "Melee", a: 6, ws: "3+", s: 7, ap: -1, d: 1, keywords: ["Extra Attacks"] },
                        { name: "Maulerfiend fists", range: "Melee", a: 6, ws: "3+", s: 14, ap: -2, d: "D6+1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: [],
                    wargear: [],
                    other: ["Snarling Protector", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model's lasher tendrils can be replaced with 1 magma cutter."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Maulerfiend. This model is equipped with: lasher tendrils; Maulerfiend fists.",
                keywords: ["Vehicle", "Walker", "Daemon", "Chaos", "Tzeentch", "Maulerfiend"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-sekhetar-robots",
                name: "Sekhetar Robots",
                role: "vehicle",
                points: [{ models: 2, cost: 80 }, { models: 4, cost: 160 }],
                stats: { m: "8\"", t: 6, sv: "3+", w: 4, ld: "7+", oc: 1 },
                invuln: "5+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Heavy warpflamer", range: "12\"", a: "D6", bs: "N/A", s: 5, ap: -2, d: 1, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Hellfyre missile rack", range: "36\"", a: 2, bs: "4+", s: 10, ap: -2, d: 3, keywords: [] },
                        { name: "Pyreflux meltagun", range: "12\"", a: 1, bs: "4+", s: 10, ap: -4, d: "D6", keywords: ["Melta 2"] },
                        { name: "Warpflame projector", range: "12\"", a: "D3", bs: "N/A", s: 3, ap: -1, d: 1, keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 3, ws: "4+", s: 5, ap: 0, d: 1, keywords: [] },
                        { name: "Power claw", range: "Melee", a: 3, ws: "4+", s: 10, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Infiltrators", "Stealth"],
                    faction: [],
                    wargear: [],
                    other: ["Prophetic Sentinels"]
                },
                wargearOptions: [
                    "Any model's heavy warpflamer and close combat weapon can be replaced with 1 hellfyre missile rack and 1 power claw, or 1 pyreflux meltagun and 1 power claw."
                ],
                composition: { min: 2, max: 4 },
                compositionText: "This unit contains 2 Sekhetar Robots. It can include 2 additional Sekhetar Robots (4 models total). Every model is equipped with: heavy warpflamer; warpflame projector; close combat weapon.",
                keywords: ["Vehicle", "Walker", "Chaos", "Tzeentch", "Sekhetar Robots"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-tzaangor-enlightened-greatbows",
                name: "Tzaangor Enlightened with Fatecaster Greatbows",
                role: "mounted",
                points: [{ models: 3, cost: 55 }, { models: 6, cost: 110 }],
                stats: { m: "10\"", t: 4, sv: "5+", w: 2, ld: "7+", oc: 2 },
                invuln: "5+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Fatecaster greatbow", range: "30\"", a: 2, bs: "4+", s: 5, ap: -2, d: 2, keywords: ["Ignores Cover", "Lethal Hits", "Precision"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 2, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: [],
                    wargear: [],
                    other: ["Malign Trickery"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 6 },
                compositionText: "1 Aviarch and 2 Tzaangor Enlightened. It can include 3 additional Tzaangor Enlightened (6 models total). Every model is equipped with: fatecaster greatbow; close combat weapon.",
                keywords: ["Mounted", "Fly", "Chaos", "Tzeentch", "Mutant", "Tzaangor Enlightened", "Tzaangor Enlightened with Fatecaster Greatbows"],
                factionKeywords: ["Thousand Sons"]
            },
            {
                id: "ts-kairos-fateweaver",
                name: "Kairos Fateweaver",
                role: "monster",
                points: [{ models: 1, cost: 295 }],
                stats: { m: "12\"", t: 10, sv: "6+", w: 20, ld: "6+", oc: 5 },
                invuln: "4+",
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Infernal Gateway – witchfire", range: "24\"", a: "D6+3", bs: "2+", s: 9, ap: -2, d: "D3", keywords: ["Blast", "Indirect Fire", "Psychic"] },
                        { name: "Infernal Gateway – focused witchfire", range: "24\"", a: "D3+6", bs: "2+", s: 9, ap: -2, d: 3, keywords: ["Blast", "Hazardous", "Indirect Fire", "Psychic"] }
                    ],
                    melee: [
                        { name: "Staff of Tomorrow", range: "Melee", a: 5, ws: "3+", s: 8, ap: -2, d: "2D3", keywords: ["Psychic"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike"],
                    faction: ["Pact of Sorcery"],
                    wargear: [],
                    other: ["One Head Looks Forward", "Damaged: 1-7 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Kairos Fateweaver. This model is equipped with: Infernal Gateway; Staff of Tomorrow.",
                keywords: ["Monster", "Character", "Epic Hero", "Fly", "Psyker", "Chaos", "Daemon", "Tzeentch", "Summoned", "Kairos Fateweaver"],
                factionKeywords: ["Scintillating Legions"],
                isAlly: true
            },
            {
                id: "ts-pink-horrors",
                name: "Pink Horrors",
                role: "battleline",
                points: [{ models: 10, cost: 115 }],
                statLines: [
                    { name: "Pink Horror", m: "6\"", t: 3, sv: "7+", w: 1, ld: "7+", oc: 1 },
                    { name: "Blue Horror / Brimstone Horror", m: "6\"", t: 3, sv: "7+", w: 1, ld: "8+", oc: 0 }
                ],
                invuln: "4+",
                baseSize: "32mm / 25mm",
                weapons: {
                    ranged: [
                        { name: "Coruscating pink flames", range: "18\"", a: 2, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Pistol", "Psychic"] },
                        { name: "Coruscating blue flames", range: "18\"", a: 2, bs: "4+", s: 3, ap: -1, d: 1, keywords: ["Pistol", "Psychic"] },
                        { name: "Coruscating yellow flames", range: "18\"", a: 2, bs: "5+", s: 2, ap: -1, d: 1, keywords: ["Pistol", "Psychic"] }
                    ],
                    melee: [
                        { name: "Pink claws", range: "Melee", a: 1, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Blue claws", range: "Melee", a: 1, ws: "5+", s: 3, ap: 0, d: 1, keywords: [] },
                        { name: "Yellow claws", range: "Melee", a: 2, ws: "5+", s: 2, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Pact of Sorcery"],
                    wargear: ["Daemonic Icon", "Instrument of Chaos"],
                    other: ["Split"]
                },
                wargearOptions: [
                    "1 Pink Horror can be equipped with 1 daemonic icon.",
                    "1 Pink Horror can be equipped with 1 instrument of Chaos."
                ],
                composition: { min: 10, max: 10 },
                compositionText: "10 Pink Horrors. Every Pink Horror is equipped with: coruscating pink flames; pink claws.",
                keywords: ["Infantry", "Battleline", "Chaos", "Daemon", "Tzeentch", "Summoned", "Horrors", "Pink", "Blue", "Brimstone"],
                factionKeywords: ["Scintillating Legions"],
                isAlly: true
            },
            {
                id: "ts-blue-horrors",
                name: "Blue Horrors",
                role: "battleline",
                points: [{ models: 10, cost: 90 }],
                stats: { m: "6\"", t: 3, sv: "7+", w: 1, ld: "8+", oc: 0 },
                invuln: "4+",
                baseSize: "25mm",
                weapons: {
                    ranged: [
                        { name: "Coruscating blue flames", range: "18\"", a: 2, bs: "4+", s: 3, ap: -1, d: 1, keywords: ["Pistol", "Psychic"] },
                        { name: "Coruscating yellow flames", range: "18\"", a: 2, bs: "5+", s: 2, ap: -1, d: 1, keywords: ["Pistol", "Psychic"] }
                    ],
                    melee: [
                        { name: "Blue claws", range: "Melee", a: 1, ws: "5+", s: 3, ap: 0, d: 1, keywords: [] },
                        { name: "Yellow claws", range: "Melee", a: 2, ws: "5+", s: 2, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Infiltrators"],
                    faction: ["Pact of Sorcery"],
                    wargear: [],
                    other: ["Split", "Sullen Malevolence", "Exploding Horrors"]
                },
                wargearOptions: ["None"],
                composition: { min: 10, max: 10 },
                compositionText: "10 Blue Horrors. Every Blue Horror is equipped with: coruscating blue flames; blue claws.",
                keywords: ["Infantry", "Battleline", "Chaos", "Daemon", "Tzeentch", "Summoned", "Horrors", "Blue", "Brimstone"],
                factionKeywords: ["Scintillating Legions"],
                isAlly: true
            },
            {
                id: "ts-flamers",
                name: "Flamers",
                role: "infantry",
                points: [{ models: 3, cost: 65 }, { models: 6, cost: 130 }],
                stats: { m: "9\"", t: 4, sv: "7+", w: 3, ld: "7+", oc: 1 },
                invuln: "4+",
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Flickering flames", range: "12\"", a: "D6", bs: "N/A", s: 4, ap: -1, d: 1, keywords: ["Ignores Cover", "Psychic", "Torrent"] }
                    ],
                    melee: [
                        { name: "Flamer mouths", range: "Melee", a: 3, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Pact of Sorcery"],
                    wargear: [],
                    other: ["Bounding Leaps"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 6 },
                compositionText: "1 Pyrocaster and 2 Flamers. It can include 3 additional Flamers (6 models total). Every model is equipped with: flickering flames; flamer mouths.",
                keywords: ["Infantry", "Fly", "Chaos", "Daemon", "Tzeentch", "Summoned", "Flamers"],
                factionKeywords: ["Scintillating Legions"],
                isAlly: true
            },
            {
                id: "ts-screamers",
                name: "Screamers",
                role: "mounted",
                points: [{ models: 3, cost: 80 }, { models: 6, cost: 160 }],
                stats: { m: "14\"", t: 4, sv: "6+", w: 3, ld: "7+", oc: 1 },
                invuln: "4+",
                baseSize: "32mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Lamprey bite", range: "Melee", a: 3, ws: "3+", s: 6, ap: -2, d: 2, keywords: ["Anti-Monster 4+", "Anti-Vehicle 4+"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Pact of Sorcery"],
                    wargear: [],
                    other: ["Slashing Dive"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 6 },
                compositionText: "3 Screamers. It can include 3 additional Screamers (6 models total). Every model is equipped with: lamprey bite.",
                keywords: ["Beast", "Fly", "Chaos", "Daemon", "Tzeentch", "Summoned", "Screamers"],
                factionKeywords: ["Scintillating Legions"],
                isAlly: true
            }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(thousandSons);
})();
