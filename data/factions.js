/**
 * W40K Army Builder - Faction & Unit Data (assembler)
 *
 * This file provides the data layer with edition switching support.
 * Each edition has its own faction list and unit datasheets.
 *
 * DATA STRUCTURE:
 * - DATA[edition].factions = array of faction objects
 * - Each faction has an id, name, icon, and a units array
 * - Each unit is a full datasheet with stats, weapons, abilities, and points
 *
 * FACTION MODULES:
 * Large factions live in their own file (e.g. data/black-templars.js) and
 * self-register into the global `window.W40K_FACTIONS` registry. Those module
 * scripts MUST be loaded BEFORE this file in index.html. This assembler then
 * merges any registered factions into DATA below.
 */

const DATA = {
    "10th": {
        factions: [
            {
                id: "space-marines",
                name: "Space Marines",
                icon: "⚔️",
                allegiance: "Imperium",
                units: [
                    {
                        id: "intercessors",
                        name: "Intercessor Squad",
                        role: "battleline",
                        points: [{ models: 5, cost: 90 }, { models: 10, cost: 180 }],
                        stats: { m: "6\"", t: 4, sv: "3+", w: 2, ld: "6+", oc: 2 },
                        weapons: {
                            ranged: [
                                { name: "Bolt Rifle", range: "24\"", a: 2, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Assault", "Heavy"] },
                                { name: "Auto Bolt Rifle", range: "24\"", a: 3, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Assault"] },
                                { name: "Stalker Bolt Rifle", range: "36\"", a: 1, bs: "3+", s: 4, ap: -2, d: 2, keywords: ["Heavy"] }
                            ],
                            melee: [
                                { name: "Close Combat Weapon", range: "Melee", a: 3, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                            ]
                        },
                        abilities: {
                            core: ["Oath of Moment"],
                            faction: [],
                            other: ["Objective Secured"]
                        },
                        keywords: ["Infantry", "Battleline", "Grenades", "Imperium", "Tacticus", "Intercessor Squad"],
                        factionKeywords: ["Adeptus Astartes"],
                        composition: { min: 5, max: 10 }
                    },
                    {
                        id: "captain-terminator",
                        name: "Captain in Terminator Armour",
                        role: "character",
                        points: [{ models: 1, cost: 95 }],
                        stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "6+", oc: 1 },
                        weapons: {
                            ranged: [
                                { name: "Storm Bolter", range: "24\"", a: 2, bs: "2+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 2"] },
                                { name: "Combi-weapon", range: "24\"", a: 1, bs: "2+", s: 4, ap: 0, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] }
                            ],
                            melee: [
                                { name: "Power Weapon", range: "Melee", a: 5, ws: "2+", s: 5, ap: -2, d: 1, keywords: [] },
                                { name: "Relic Weapon", range: "Melee", a: 5, ws: "2+", s: 5, ap: -2, d: 2, keywords: [] },
                                { name: "Thunder Hammer", range: "Melee", a: 4, ws: "3+", s: 8, ap: -2, d: 2, keywords: ["Devastating Wounds"] }
                            ]
                        },
                        abilities: {
                            core: ["Deep Strike", "Leader", "Oath of Moment"],
                            faction: [],
                            other: ["Rites of Battle: Once per battle round, one unit from your army can re-roll a Hit, Wound, Damage, or saving throw."]
                        },
                        keywords: ["Infantry", "Character", "Grenades", "Imperium", "Terminator", "Captain"],
                        factionKeywords: ["Adeptus Astartes"],
                        composition: { min: 1, max: 1 }
                    },
                    {
                        id: "terminators",
                        name: "Terminator Squad",
                        role: "infantry",
                        points: [{ models: 5, cost: 200 }, { models: 10, cost: 400 }],
                        stats: { m: "5\"", t: 5, sv: "2+", w: 3, ld: "6+", oc: 1 },
                        weapons: {
                            ranged: [
                                { name: "Storm Bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 2"] },
                                { name: "Assault Cannon", range: "24\"", a: 6, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Devastating Wounds"] },
                                { name: "Cyclone Missile Launcher - Frag", range: "36\"", a: "2D6", bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Blast"] },
                                { name: "Cyclone Missile Launcher - Krak", range: "36\"", a: 2, bs: "3+", s: 9, ap: -2, d: "D6", keywords: [] }
                            ],
                            melee: [
                                { name: "Power Fist", range: "Melee", a: 3, ws: "3+", s: 8, ap: -2, d: 2, keywords: [] },
                                { name: "Power Weapon", range: "Melee", a: 4, ws: "3+", s: 5, ap: -2, d: 1, keywords: [] }
                            ]
                        },
                        abilities: {
                            core: ["Deep Strike", "Oath of Moment"],
                            faction: [],
                            other: ["Fury of the First: Each time a model in this unit makes an attack, re-roll a Wound roll of 1."]
                        },
                        keywords: ["Infantry", "Grenades", "Imperium", "Terminator", "Terminator Squad"],
                        factionKeywords: ["Adeptus Astartes"],
                        composition: { min: 5, max: 10 }
                    },
                    {
                        id: "redemptor-dreadnought",
                        name: "Redemptor Dreadnought",
                        role: "vehicle",
                        points: [{ models: 1, cost: 210 }],
                        stats: { m: "8\"", t: 10, sv: "2+", w: 12, ld: "6+", oc: 4 },
                        weapons: {
                            ranged: [
                                { name: "Macro Plasma Incinerator", range: "36\"", a: "D6+1", bs: "3+", s: 9, ap: -3, d: 2, keywords: ["Blast", "Hazardous"] },
                                { name: "Heavy Onslaught Gatling Cannon", range: "24\"", a: 12, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Devastating Wounds"] },
                                { name: "Icarus Rocket Pod", range: "24\"", a: "D3", bs: "3+", s: 8, ap: -1, d: 2, keywords: ["Anti-Fly 2+"] },
                                { name: "Onslaught Gatling Cannon", range: "24\"", a: 8, bs: "3+", s: 5, ap: 0, d: 1, keywords: [] },
                                { name: "Storm Bolters", range: "24\"", a: 2, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 2"] }
                            ],
                            melee: [
                                { name: "Redemptor Fist", range: "Melee", a: 5, ws: "3+", s: 12, ap: -2, d: 3, keywords: [] }
                            ]
                        },
                        abilities: {
                            core: ["Deadly Demise D3", "Oath of Moment"],
                            faction: [],
                            other: ["Duty Eternal: Reduce all damage by 1 (minimum 1)."]
                        },
                        keywords: ["Vehicle", "Walker", "Smoke", "Imperium", "Redemptor Dreadnought"],
                        factionKeywords: ["Adeptus Astartes"],
                        composition: { min: 1, max: 1 }
                    }
                ]
            },
            {
                id: "orks",
                name: "Orks",
                icon: "🪓",
                allegiance: "Xenos",
                units: [
                    {
                        id: "boyz",
                        name: "Boyz",
                        role: "battleline",
                        points: [{ models: 10, cost: 75 }, { models: 20, cost: 150 }],
                        stats: { m: "6\"", t: 5, sv: "5+", w: 1, ld: "7+", oc: 2 },
                        weapons: {
                            ranged: [
                                { name: "Slugga", range: "12\"", a: 1, bs: "5+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] },
                                { name: "Shoota", range: "18\"", a: 2, bs: "5+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 1"] }
                            ],
                            melee: [
                                { name: "Choppa", range: "Melee", a: 3, ws: "3+", s: 4, ap: -1, d: 1, keywords: [] },
                                { name: "Big Choppa", range: "Melee", a: 3, ws: "3+", s: 7, ap: -1, d: 2, keywords: [] },
                                { name: "Power Klaw", range: "Melee", a: 3, ws: "4+", s: 9, ap: -2, d: 2, keywords: [] }
                            ]
                        },
                        abilities: {
                            core: ["Waaagh!"],
                            faction: [],
                            other: ["'Ere We Go: You can re-roll Advance and Charge rolls made for this unit."]
                        },
                        keywords: ["Infantry", "Battleline", "Mob", "Boyz"],
                        factionKeywords: ["Orks"],
                        composition: { min: 10, max: 20 }
                    },
                    {
                        id: "warboss",
                        name: "Warboss",
                        role: "character",
                        points: [{ models: 1, cost: 70 }],
                        stats: { m: "6\"", t: 5, sv: "4+", w: 6, ld: "6+", oc: 1 },
                        weapons: {
                            ranged: [
                                { name: "Kombi-weapon", range: "24\"", a: 1, bs: "5+", s: 4, ap: 0, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] }
                            ],
                            melee: [
                                { name: "Big Choppa", range: "Melee", a: 6, ws: "2+", s: 7, ap: -1, d: 2, keywords: [] },
                                { name: "Power Klaw", range: "Melee", a: 5, ws: "3+", s: 10, ap: -2, d: 2, keywords: [] }
                            ]
                        },
                        abilities: {
                            core: ["Leader", "Waaagh!"],
                            faction: [],
                            other: ["Might is Right: This model's melee attacks have the [DEVASTATING WOUNDS] ability."]
                        },
                        keywords: ["Infantry", "Character", "Grenades", "Warboss"],
                        factionKeywords: ["Orks"],
                        composition: { min: 1, max: 1 }
                    }
                ]
            },
            {
                id: "necrons",
                name: "Necrons",
                icon: "💀",
                allegiance: "Xenos",
                units: [
                    {
                        id: "warriors",
                        name: "Necron Warriors",
                        role: "battleline",
                        points: [{ models: 10, cost: 110 }, { models: 20, cost: 220 }],
                        stats: { m: "5\"", t: 4, sv: "4+", w: 1, ld: "7+", oc: 2 },
                        weapons: {
                            ranged: [
                                { name: "Gauss Flayer", range: "24\"", a: 2, bs: "4+", s: 4, ap: 0, d: 1, keywords: ["Lethal Hits", "Rapid Fire 1"] },
                                { name: "Gauss Reaper", range: "12\"", a: 2, bs: "4+", s: 5, ap: -2, d: 1, keywords: ["Assault"] }
                            ],
                            melee: [
                                { name: "Close Combat Weapon", range: "Melee", a: 1, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] }
                            ]
                        },
                        abilities: {
                            core: ["Reanimation Protocols"],
                            faction: [],
                            other: ["Their Number is Legion: Each time this unit's Reanimation Protocols activate, models regain D3 wounds instead of D3 wounds for each model."]
                        },
                        keywords: ["Infantry", "Battleline", "Necron Warriors"],
                        factionKeywords: ["Necrons"],
                        composition: { min: 10, max: 20 }
                    }
                ]
            },
            {
                id: "aeldari",
                name: "Aeldari",
                icon: "🌀",
                allegiance: "Xenos",
                units: []
            },
            {
                id: "chaos-space-marines",
                name: "Chaos Space Marines",
                icon: "🔥",
                allegiance: "Chaos",
                units: []
            },
            {
                id: "death-guard",
                name: "Death Guard",
                icon: "☠️",
                allegiance: "Chaos",
                units: []
            },
            {
                id: "tyranids",
                name: "Tyranids",
                icon: "🦠",
                allegiance: "Xenos",
                units: []
            },
            {
                id: "astra-militarum",
                name: "Astra Militarum",
                icon: "🛡️",
                allegiance: "Imperium",
                units: []
            },
            {
                id: "tau-empire",
                name: "T'au Empire",
                icon: "🎯",
                allegiance: "Xenos",
                units: []
            },
            {
                id: "custodes",
                name: "Adeptus Custodes",
                icon: "👑",
                allegiance: "Imperium",
                units: []
            }
        ]
    },
    "11th": {
        factions: [
            {
                id: "space-marines",
                name: "Space Marines",
                icon: "⚔️",
                allegiance: "Imperium",
                units: []
            },
            {
                id: "orks",
                name: "Orks",
                icon: "🪓",
                allegiance: "Xenos",
                units: []
            },
            {
                id: "necrons",
                name: "Necrons",
                icon: "💀",
                allegiance: "Xenos",
                units: []
            }
        ]
    }
};

/**
 * Merge faction modules that self-registered into window.W40K_FACTIONS.
 *
 * Each module pushes a full faction object onto window.W40K_FACTIONS[edition].
 * If a faction with the same id already exists in DATA for that edition it is
 * replaced (modules win), otherwise it is appended. This lets us keep large
 * factions (Black Templars, Thousand Sons, ...) in dedicated files without
 * bloating this assembler.
 */
(function mergeFactionModules() {
    "use strict";
    const registry = (typeof window !== "undefined" && window.W40K_FACTIONS) || null;
    if (!registry) {
        return;
    }

    Object.keys(registry).forEach(function (edition) {
        if (!DATA[edition]) {
            DATA[edition] = { factions: [] };
        }
        const target = DATA[edition].factions;
        registry[edition].forEach(function (faction) {
            const existingIndex = target.findIndex(function (f) {
                return f.id === faction.id;
            });
            if (existingIndex >= 0) {
                target[existingIndex] = faction;
            } else {
                target.push(faction);
            }
        });
    });
})();

/**
 * Black Templars is a Space Marines Chapter. Its characters can lead the shared
 * Adeptus Astartes battleline / infantry squads, but those datasheets live in
 * the Space Marines faction (other Chapters bundle them too). Copy the squads
 * Black Templars Leaders reference into the Black Templars faction so leader
 * attachment works in the army builder. Uses the already-verified Space Marines
 * datasheets — no duplicated hand-entry.
 */
(function shareSquadsWithBlackTemplars() {
    "use strict";
    const ed = DATA["10th"];
    if (!ed || !ed.factions) {
        return;
    }
    const sm = ed.factions.find(function (f) { return f.id === "space-marines"; });
    const bt = ed.factions.find(function (f) { return f.id === "black-templars"; });
    if (!sm || !bt) {
        return;
    }
    const SHARED_SQUADS = [
        "Assault Intercessor Squad", "Bladeguard Veteran Squad", "Company Heroes",
        "Desolation Squad", "Devastator Squad", "Hellblaster Squad", "Infernus Squad",
        "Intercessor Squad", "Sternguard Veteran Squad", "Tactical Squad"
    ];
    const have = new Set(bt.units.map(function (u) { return u.name; }));
    SHARED_SQUADS.forEach(function (name) {
        if (have.has(name)) {
            return;
        }
        const src = sm.units.find(function (u) { return u.name === name; });
        if (src) {
            bt.units.push(JSON.parse(JSON.stringify(src)));
        }
    });
})();
