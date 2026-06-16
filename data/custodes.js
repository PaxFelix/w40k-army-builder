/**
 * W40K Army Builder — Adeptus Custodes (10th Edition)
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

    const custodes = {
        id: "custodes",
        name: "Adeptus Custodes",
        icon: "\uD83D\uDC51",
        allegiance: "Imperium",
        flavour: "",

        // ─── ARMY RULES (names only — fill in text from your codex) ──────────
        armyRules: [
            {
                name: "Martial Ka\u2019tah",
                flavour: "",
                text: ""
            }
        ],

        // ─── DETACHMENTS (names only — fill in rule/strat/enhancement text) ──
        detachments: [
            {
                name: "Talons of the Emperor",
                flavour: "",
                rule: { name: "Revered Companions", flavour: "", text: "", restrictions: "" },
                enhancements: [],
                stratagems: []
            },
            {
                name: "Shield Host",
                flavour: "",
                rule: { name: "Martial Mastery", flavour: "", text: "", restrictions: "" },
                enhancements: [],
                stratagems: []
            },
            {
                name: "Null Maiden Vigil",
                flavour: "",
                rule: { name: "Creeping Dread", flavour: "", text: "", restrictions: "" },
                enhancements: [],
                stratagems: []
            },
            {
                name: "Auric Champions",
                flavour: "",
                rule: { name: "Assemblage of Might", flavour: "", text: "", restrictions: "" },
                enhancements: [],
                stratagems: []
            },
            {
                name: "Solar Spearhead",
                flavour: "",
                rule: { name: "Auric Armour", flavour: "", text: "", restrictions: "" },
                enhancements: [],
                stratagems: []
            },
            {
                name: "Lions of the Emperor",
                flavour: "",
                rule: { name: "Against All Odds", flavour: "", text: "", restrictions: "" },
                enhancements: [],
                stratagems: []
            }
        ],

        // ─── UNITS ───────────────────────────────────────────────────────────
        units: [
            {
                id: "custodes-aleya",
                name: "Aleya",
                role: "character",
                points: [{ models: 1, cost: 65 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "4", ld: "6+", oc: "1" },
                invuln: "5+",
                baseSize: "32mm",
                weapons: {
                    melee: [
                        { name: "Somnus", range: "Melee", a: "4", ws: "2+", s: "6", ap: "-3", d: "3", keywords: ["Anti-Psyker 5+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 5+", "Leader", "Scouts 6\""],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Tactical Perception", "Tenacious Spirit", "Daughter of the Abyss"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Aleya (Epic Hero)",
                leaderText: "Can be attached to Prosecutors, Vigilators or Witchseekers.",
                keywords: ["Infantry", "Character", "Epic Hero", "Imperium", "Anathema Psykana", "Aleya"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-blade-champion",
                name: "Blade Champion",
                role: "character",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "6", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    melee: [
                        { name: "Vaultswords \u2013 Behemor", range: "Melee", a: "6", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Precision"] },
                        { name: "Vaultswords \u2013 Hurricanus", range: "Melee", a: "9", ws: "2+", s: "5", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] },
                        { name: "Vaultswords \u2013 Victus", range: "Melee", a: "5", ws: "2+", s: "6", ap: "-3", d: "3", keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Swift Onslaught", "Martial Inspiration"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Blade Champion",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Imperium", "Blade Champion"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-knight-centura",
                name: "Knight-Centura",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "4", ld: "6+", oc: "1" },
                invuln: "5+",
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Master-crafted boltgun", range: "24\"", a: "1", bs: "2+", s: "4", ap: "0", d: "2", keywords: ["Rapid Fire 1"] },
                        { name: "Witchseeker flamer", range: "12\"", a: "D6", bs: "N/A", s: "4", ap: "0", d: "1", keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "3", ws: "2+", s: "3", ap: "0", d: "1", keywords: [] },
                        { name: "Executioner greatblade", range: "Melee", a: "3", ws: "2+", s: "5", ap: "-2", d: "2", keywords: ["Anti-Psyker 5+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader", "Scouts 6\""],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Seeker\u2019s Instincts", "Daughter of the Abyss", "Corner the Quarry"]
                },
                wargearOptions: [
                    "The executioner greatblade can be replaced with one of the following: 1 master-crafted boltgun and 1 close combat weapon; or 1 Witchseeker flamer and 1 close combat weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Knight-Centura",
                leaderText: "Can be attached to Prosecutors, Vigilators or Witchseekers.",
                keywords: ["Infantry", "Character", "Imperium", "Anathema Psykana", "Knight-Centura"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-shield-captain",
                name: "Shield-Captain",
                role: "character",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "6", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Pyrithite spear", range: "12\"", a: "1", bs: "2+", s: "9", ap: "-4", d: "D6", keywords: ["Melta 2"] },
                        { name: "Sentinel blade", range: "12\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault", "Pistol"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "6", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Pyrithite spear", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Sentinel blade", range: "Melee", a: "7", ws: "2+", s: "6", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Praesidium Shield"],
                    other: ["Master of the Stances", "Strategic Mastery"]
                },
                wargearOptions: [
                    "The guardian spear can be replaced with one of the following: 1 castellan axe; 1 sentinel blade; 1 sentinel blade and 1 praesidium shield; or 1 pyrithite spear and 1 praesidium shield."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Shield-Captain",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Imperium", "Shield-Captain"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-shield-captain-allarus",
                name: "Shield-Captain in Allarus Terminator Armour",
                role: "character",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "5\"", t: "7", sv: "2+", w: "7", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Balistus grenade launcher", range: "18\"", a: "D6", bs: "2+", s: "4", ap: "-1", d: "1", keywords: ["Blast"] },
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "6", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Auramite and Adamantine", "Strategic Mastery"]
                },
                wargearOptions: [
                    "The guardian spear can be replaced with 1 castellan axe."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Shield-Captain in Allarus Terminator Armour",
                leaderText: "Can be attached to Allarus Custodians.",
                keywords: ["Infantry", "Character", "Terminator", "Imperium", "Shield-Captain"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-shield-captain-dawneagle",
                name: "Shield-Captain on Dawneagle Jetbike",
                role: "character",
                points: [{ models: 1, cost: 150 }],
                stats: { m: "12\"", t: "7", sv: "2+", w: "8", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "75 x 42mm",
                weapons: {
                    ranged: [
                        { name: "Vertus hurricane bolter", range: "18\"", a: "3", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Rapid Fire 3", "Twin-linked"] },
                        { name: "Salvo launcher", range: "24\"", a: "1", bs: "2+", s: "10", ap: "-3", d: "D6+1", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Interceptor lance", range: "Melee", a: "6", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Sweeping Advance", "Strategic Mastery"]
                },
                wargearOptions: [
                    "The salvo launcher can be replaced with 1 Vertus hurricane bolter."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Shield-Captain on Dawneagle Jetbike",
                leaderText: "Can be attached to Vertus Praetors.",
                keywords: ["Mounted", "Character", "Fly", "Imperium", "Dawneagle Jetbike", "Shield-Captain"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-trajann-valoris",
                name: "Trajann Valoris",
                role: "character",
                points: [{ models: 1, cost: 140 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "7", ld: "5+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Eagle\u2019s Scream", range: "24\"", a: "2", bs: "2+", s: "5", ap: "-2", d: "3", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Watcher\u2019s Axe", range: "Melee", a: "6", ws: "2+", s: "10", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Feel No Pain 5+", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Captain-General", "Moment Shackle", "Supreme Commander"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Trajann Valoris (Epic Hero)",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Epic Hero", "Imperium", "Trajann Valoris"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-valerian",
                name: "Valerian",
                role: "character",
                points: [{ models: 1, cost: 110 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "6", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Gnosis", range: "24\"", a: "3", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Gnosis", range: "Melee", a: "7", ws: "2+", s: "8", ap: "-3", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Feel No Pain 6+", "Leader"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Golden Laurels", "Hero of Lion\u2019s Gate"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Valerian (Epic Hero)",
                leaderText: "Can be attached to Custodian Guard or Custodian Wardens.",
                keywords: ["Infantry", "Character", "Epic Hero", "Imperium", "Shield-Captain", "Valerian"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-custodian-guard",
                name: "Custodian Guard",
                role: "battleline",
                points: [{ models: 4, cost: 160 }, { models: 5, cost: 200 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Sentinel blade", range: "12\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault", "Pistol"] }
                    ],
                    melee: [
                        { name: "Guardian spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Misericordia", range: "Melee", a: "5", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] },
                        { name: "Sentinel blade", range: "Melee", a: "5", ws: "2+", s: "6", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Praesidium Shield", "Vexilla"],
                    other: ["Stand Vigil", "Sentinel Storm"]
                },
                wargearOptions: [
                    "Any number of models can each have their guardian spear replaced with 1 sentinel blade and 1 praesidium shield.",
                    "1 model\u2019s guardian spear can be replaced with 1 vexilla and 1 misericordia, or 1 vexilla, 1 misericordia and 1 praesidium shield."
                ],
                composition: { min: 4, max: 5 },
                compositionText: "4-5 Custodian Guard",
                keywords: ["Infantry", "Battleline", "Imperium", "Custodian Guard"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-allarus-custodians",
                name: "Allarus Custodians",
                role: "infantry",
                points: [{ models: 2, cost: 110 }, { models: 3, cost: 165 }, { models: 5, cost: 275 }, { models: 6, cost: 330 }],
                stats: { m: "5\"", t: "7", sv: "2+", w: "4", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Balistus grenade launcher", range: "18\"", a: "D6", bs: "2+", s: "4", ap: "-1", d: "1", keywords: ["Blast"] },
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "4", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Misericordia", range: "Melee", a: "5", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Vexilla"],
                    other: ["Slayers of Tyrants", "From Golden Light"]
                },
                wargearOptions: [
                    "Any number of models can each have their guardian spear replaced with 1 castellan axe.",
                    "1 model\u2019s guardian spear can be replaced with 1 vexilla and 1 misericordia."
                ],
                composition: { min: 2, max: 6 },
                compositionText: "2-6 Allarus Custodians",
                keywords: ["Infantry", "Terminator", "Imperium", "Allarus Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-custodian-wardens",
                name: "Custodian Wardens",
                role: "infantry",
                points: [{ models: 4, cost: 210 }, { models: 5, cost: 260 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Castellan axe", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] },
                        { name: "Guardian spear", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Castellan axe", range: "Melee", a: "4", ws: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Guardian spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Vexilla"],
                    other: ["Resolute Will", "Living Fortress"]
                },
                wargearOptions: [
                    "Any number of models can each have their guardian spear replaced with 1 castellan axe.",
                    "1 model can be equipped with 1 vexilla."
                ],
                composition: { min: 4, max: 5 },
                compositionText: "4-5 Custodian Wardens",
                keywords: ["Infantry", "Imperium", "Custodian Wardens"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-prosecutors",
                name: "Prosecutors",
                role: "infantry",
                points: [{ models: 4, cost: 40 }, { models: 5, cost: 50 }, { models: 9, cost: 75 }, { models: 10, cost: 85 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "1", ld: "6+", oc: "2" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Boltgun", range: "24\"", a: "1", bs: "3+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 1"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "2", ws: "3+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Purity of Execution"]
                },
                composition: { min: 4, max: 10 },
                compositionText: "1 Prosecutor Sister Superior and 3-9 Prosecutors",
                leaderText: "Can be led by Aleya or Knight-Centura.",
                keywords: ["Infantry", "Imperium", "Anathema Psykana", "Prosecutors"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-vigilators",
                name: "Vigilators",
                role: "infantry",
                points: [{ models: 4, cost: 45 }, { models: 5, cost: 55 }, { models: 9, cost: 90 }, { models: 10, cost: 100 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "1", ld: "6+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    melee: [
                        { name: "Executioner greatblade", range: "Melee", a: "2", ws: "3+", s: "5", ap: "-2", d: "2", keywords: ["Anti-Psyker 5+", "Devastating Wounds"] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Deft Parry"]
                },
                composition: { min: 4, max: 10 },
                compositionText: "1 Vigilator Sister Superior and 3-9 Vigilators",
                leaderText: "Can be led by Aleya or Knight-Centura.",
                keywords: ["Infantry", "Imperium", "Anathema Psykana", "Vigilators"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-witchseekers",
                name: "Witchseekers",
                role: "infantry",
                points: [{ models: 4, cost: 45 }, { models: 5, cost: 55 }, { models: 9, cost: 90 }, { models: 10, cost: 100 }],
                stats: { m: "6\"", t: "3", sv: "3+", w: "1", ld: "6+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Witchseeker flamer", range: "12\"", a: "D6", bs: "N/A", s: "4", ap: "0", d: "1", keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "2", ws: "3+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Scouts 6\""],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Sanctified Flames"]
                },
                composition: { min: 4, max: 10 },
                compositionText: "1 Witchseeker Sister Superior and 3-9 Witchseekers",
                leaderText: "Can be led by Aleya or Knight-Centura.",
                keywords: ["Infantry", "Imperium", "Anathema Psykana", "Witchseekers"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-sagittarum-custodians",
                name: "Sagittarum Custodians",
                role: "infantry",
                points: [{ models: 5, cost: 225 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Adrastus bolt caliver", range: "36\"", a: "3", bs: "2+", s: "5", ap: "-1", d: "2", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Misericordia", range: "Melee", a: "4", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Saturation Volleys", "Disintegration Beams"]
                },
                composition: { min: 5, max: 5 },
                compositionText: "5 Sagittarum Custodians",
                keywords: ["Infantry", "Imperium", "Sagittarum Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-custodian-guard-adrasite-pyrithite",
                name: "Custodian Guard with Adrasite and Pyrithite Spears",
                role: "infantry",
                points: [{ models: 5, cost: 250 }],
                stats: { m: "6\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Adrasite spear", range: "18\"", a: "1", bs: "2+", s: "5", ap: "-2", d: "3", keywords: [] },
                        { name: "Pyrithite spear", range: "12\"", a: "1", bs: "2+", s: "9", ap: "-4", d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Adrasite spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Pyrithite spear", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Stand Vigil", "No Foe Shall Stand"]
                },
                wargearOptions: [
                    "Any number of models can each have their adrasite spear replaced with 1 pyrithite spear."
                ],
                composition: { min: 5, max: 5 },
                compositionText: "5 Custodian Guard with Adrasite and Pyrithite Spears",
                keywords: ["Infantry", "Imperium", "Custodian Guard with Adrasite and Pyrithite Spears"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-venatari-custodians",
                name: "Venatari Custodians",
                role: "infantry",
                points: [{ models: 3, cost: 165 }, { models: 6, cost: 330 }],
                stats: { m: "10\"", t: "6", sv: "2+", w: "3", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Kinetic destroyer", range: "12\"", a: "2", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Pistol", "Sustained Hits 1"] },
                        { name: "Venatari lance", range: "24\"", a: "2", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Assault"] }
                    ],
                    melee: [
                        { name: "Tarsis buckler", range: "Melee", a: "5", ws: "2+", s: "5", ap: "-2", d: "1", keywords: [] },
                        { name: "Venatari lance", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    wargear: ["Tarsis Buckler"],
                    other: ["Strike from the Skies", "Swooping Dive"]
                },
                wargearOptions: [
                    "Any number of models can each have their Venatari lance replaced with 1 kinetic destroyer and 1 tarsis buckler."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Venatari Custodians",
                keywords: ["Infantry", "Fly", "Jump Pack", "Imperium", "Venatari Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-aquilon-custodians",
                name: "Aquilon Custodians",
                role: "infantry",
                points: [{ models: 3, cost: 195 }, { models: 6, cost: 390 }],
                stats: { m: "5\"", t: "7", sv: "2+", w: "4", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Infernus firepike", range: "12\"", a: "D6", bs: "N/A", s: "6", ap: "-1", d: "1", keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Lastrum storm bolter", range: "24\"", a: "2", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Twin adrathic destructor", range: "18\"", a: "1", bs: "2+", s: "6", ap: "-2", d: "3", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Solerite power gauntlet", range: "Melee", a: "5", ws: "2+", s: "8", ap: "-2", d: "2", keywords: [] },
                        { name: "Solerite power talon", range: "Melee", a: "7", ws: "2+", s: "7", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Heavy Assault Infantry", "From Golden Light"]
                },
                wargearOptions: [
                    "Any number of models can each have their lastrum storm bolter replaced with 1 infernus firepike or 1 twin adrathic destructor.",
                    "Any number of models can each have their solerite power gauntlet replaced with 1 solerite power talon."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Aquilon Custodians",
                keywords: ["Infantry", "Terminator", "Imperium", "Aquilon Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-vertus-praetors",
                name: "Vertus Praetors",
                role: "mounted",
                points: [{ models: 2, cost: 150 }, { models: 3, cost: 225 }],
                stats: { m: "12\"", t: "7", sv: "2+", w: "5", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "75 x 42mm",
                weapons: {
                    ranged: [
                        { name: "Salvo launcher", range: "24\"", a: "1", bs: "2+", s: "10", ap: "-3", d: "D6+1", keywords: ["Twin-linked"] },
                        { name: "Vertus hurricane bolter", range: "18\"", a: "3", bs: "2+", s: "4", ap: "-1", d: "2", keywords: ["Rapid Fire 3", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Interceptor lance", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Turbo-boost", "Quicksilver Execution"]
                },
                wargearOptions: [
                    "Any number of models can each have their salvo launcher replaced with 1 Vertus hurricane bolter."
                ],
                composition: { min: 2, max: 3 },
                compositionText: "2-3 Vertus Praetors",
                leaderText: "Can be led by Shield-Captain on Dawneagle Jetbike.",
                keywords: ["Mounted", "Fly", "Imperium", "Vertus Praetors"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-agamatus-custodians",
                name: "Agamatus Custodians",
                role: "mounted",
                points: [{ models: 3, cost: 225 }, { models: 6, cost: 450 }],
                stats: { m: "12\"", t: "6", sv: "2+", w: "4", ld: "6+", oc: "2" },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Adrathic devastator", range: "18\"", a: "1", bs: "2+", s: "7", ap: "-2", d: "3", keywords: [] },
                        { name: "Lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] },
                        { name: "Twin las-pulsar", range: "24\"", a: "2", bs: "2+", s: "9", ap: "-1", d: "2", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Interceptor lance", range: "Melee", a: "5", ws: "2+", s: "7", ap: "-2", d: "2", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Turbo-boost", "Implacable Vanguard"]
                },
                wargearOptions: [
                    "Any number of models can each have their lastrum bolt cannon replaced with 1 adrathic devastator or 1 twin las-pulsar."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Agamatus Custodians",
                keywords: ["Mounted", "Fly", "Imperium", "Agamatus Custodians"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-anathema-psykana-rhino",
                name: "Anathema Psykana Rhino",
                role: "transport",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "12\"", t: "9", sv: "3+", w: "10", ld: "6+", oc: "2" },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Hunter-killer missile", range: "48\"", a: "1", bs: "2+", s: "14", ap: "-3", d: "D6", keywords: ["One Shot"] },
                        { name: "Storm bolter", range: "24\"", a: "2", bs: "3+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 2"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Firing Deck 2"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Daughters of the Abyss", "Self Repair", "Transport: 12 Anathema Psykana Infantry models"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 hunter-killer missile."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Anathema Psykana Rhino",
                keywords: ["Vehicle", "Transport", "Dedicated Transport", "Smoke", "Imperium", "Anathema Psykana", "Rhino"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-venerable-contemptor-dreadnought",
                name: "Venerable Contemptor Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 170 }],
                stats: { m: "6\"", t: "9", sv: "2+", w: "10", ld: "6+", oc: "3" },
                invuln: "5+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Combi-bolter", range: "24\"", a: "2", bs: "2+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Kheres-pattern assault cannon", range: "24\"", a: "6", bs: "2+", s: "7", ap: "-1", d: "1", keywords: ["Devastating Wounds"] },
                        { name: "Multi-melta", range: "18\"", a: "2", bs: "2+", s: "9", ap: "-4", d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Contemptor combat weapon", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Unyielding Ancient"]
                },
                wargearOptions: [
                    "This model\u2019s multi-melta can be replaced with 1 Kheres-pattern assault cannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Venerable Contemptor Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Venerable Contemptor Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-venerable-land-raider",
                name: "Venerable Land Raider",
                role: "vehicle",
                points: [{ models: 1, cost: 220 }],
                stats: { m: "10\"", t: "12", sv: "2+", w: "16", ld: "6+", oc: "5" },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Godhammer lascannon", range: "48\"", a: "2", bs: "2+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "Hunter-killer missile", range: "48\"", a: "1", bs: "2+", s: "14", ap: "-3", d: "D6", keywords: ["One Shot"] },
                        { name: "Storm bolter", range: "24\"", a: "2", bs: "2+", s: "4", ap: "0", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Twin heavy bolter", range: "36\"", a: "3", bs: "2+", s: "5", ap: "-1", d: "2", keywords: ["Sustained Hits 1", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: "6", ws: "4+", s: "8", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Assault Ramp", "Damaged: 1-5 wounds remaining", "Transport: 6 Adeptus Custodes Infantry models"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Venerable Land Raider",
                keywords: ["Vehicle", "Transport", "Smoke", "Imperium", "Venerable Land Raider"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-ares-gunship",
                name: "Ares Gunship",
                role: "vehicle",
                points: [{ models: 1, cost: 580 }],
                stats: { m: "20+\"", t: "12", sv: "2+", w: "22", ld: "6+", oc: "0" },
                invuln: "5+",
                baseSize: "160mm",
                weapons: {
                    ranged: [
                        { name: "Arachnus heavy blaze cannon", range: "36\"", a: "4", bs: "2+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "Arachnus magna-blaze cannon", range: "48\"", a: "3", bs: "2+", s: "18", ap: "-4", d: "D6+6", keywords: [] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "9", ws: "4+", s: "9", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Hover"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Infernus Firebombs", "Damaged: 1-7 wounds remaining"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Ares Gunship",
                keywords: ["Vehicle", "Aircraft", "Fly", "Imperium", "Ares Gunship"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-caladius-grav-tank",
                name: "Caladius Grav-tank",
                role: "vehicle",
                points: [{ models: 1, cost: 215 }],
                stats: { m: "10\"", t: "11", sv: "2+", w: "14", ld: "6+", oc: "4" },
                invuln: "5+",
                baseSize: "170 x 109mm",
                weapons: {
                    ranged: [
                        { name: "Twin arachnus heavy blaze cannon", range: "48\"", a: "4", bs: "2+", s: "12", ap: "-3", d: "D6+2", keywords: ["Twin-linked"] },
                        { name: "Twin iliastus accelerator cannon", range: "48\"", a: "4", bs: "2+", s: "10", ap: "-1", d: "3", keywords: ["Rapid Fire 4", "Twin-linked"] },
                        { name: "Twin lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "4", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Advanced Firepower", "Damaged: 1-5 wounds remaining"]
                },
                wargearOptions: [
                    "This model\u2019s twin iliastus accelerator cannon can be replaced with 1 twin arachnus heavy blaze cannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Caladius Grav-tank",
                keywords: ["Vehicle", "Fly", "Imperium", "Caladius Grav-tank"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-contemptor-achillus-dreadnought",
                name: "Contemptor-Achillus Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 155 }],
                stats: { m: "6\"", t: "9", sv: "2+", w: "10", ld: "6+", oc: "3" },
                invuln: "5+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Achillus dreadspear", range: "12\"", a: "1", bs: "2+", s: "9", ap: "-2", d: "3", keywords: [] },
                        { name: "Infernus incinerator", range: "12\"", a: "D6", bs: "N/A", s: "6", ap: "-1", d: "1", keywords: ["Torrent", "Ignores Cover"] },
                        { name: "Lastrum storm bolter", range: "24\"", a: "2", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Rapid Fire 2"] },
                        { name: "Twin adrathic destructor", range: "18\"", a: "1", bs: "2+", s: "6", ap: "-2", d: "3", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Achillus dreadspear", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-2", d: "D6+1", keywords: ["Lance"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Dread Foe"]
                },
                wargearOptions: [
                    "This model\u2019s 2 lastrum storm bolters can be replaced with combinations of infernus incinerators and/or twin adrathic destructors."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Contemptor-Achillus Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Contemptor-Achillus Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-contemptor-galatus-dreadnought",
                name: "Contemptor-Galatus Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 165 }],
                stats: { m: "6\"", t: "9", sv: "2+", w: "10", ld: "6+", oc: "3" },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Galatus warblade", range: "12\"", a: "D6", bs: "N/A", s: "6", ap: "-1", d: "1", keywords: ["Ignores Cover", "Torrent", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Galatus warblade", range: "Melee", a: "8", ws: "2+", s: "8", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Galatus Shield"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Contemptor-Galatus Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Contemptor-Galatus Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-coronus-grav-carrier",
                name: "Coronus Grav-carrier",
                role: "vehicle",
                points: [{ models: 1, cost: 200 }],
                stats: { m: "12\"", t: "12", sv: "2+", w: "16", ld: "6+", oc: "5" },
                invuln: "5+",
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Twin arachnus blaze cannon", range: "24\"", a: "8", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Devastating Wounds", "Twin-linked"] },
                        { name: "Twin lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "6", ws: "4+", s: "8", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Fire Support", "Damaged: 1-5 wounds remaining", "Transport: 8 Adeptus Custodes Infantry models"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Coronus Grav-carrier",
                keywords: ["Vehicle", "Transport", "Fly", "Imperium", "Coronus Grav-carrier"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-orion-assault-dropship",
                name: "Orion Assault Dropship",
                role: "vehicle",
                points: [{ models: 1, cost: 690 }],
                stats: { m: "20+\"", t: "12", sv: "2+", w: "22", ld: "6+", oc: "0" },
                invuln: "5+",
                baseSize: "160mm",
                weapons: {
                    ranged: [
                        { name: "Arachnus heavy blaze cannon", range: "36\"", a: "4", bs: "2+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "Spiculus heavy bolt launcher", range: "36\"", a: "D6+6", bs: "2+", s: "7", ap: "-1", d: "2", keywords: ["Blast"] },
                        { name: "Twin lastrum bolt cannon", range: "36\"", a: "3", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "9", ws: "4+", s: "9", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Hover"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Assault Dropship", "Damaged: 1-7 wounds remaining", "Transport: 12 Adeptus Custodes Infantry models (or 1 Dreadnought, reducing capacity to 6)"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Orion Assault Dropship",
                keywords: ["Vehicle", "Transport", "Aircraft", "Fly", "Imperium", "Orion Assault Dropship"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-pallas-grav-attack",
                name: "Pallas Grav-attack",
                role: "vehicle",
                points: [{ models: 1, cost: 105 }],
                stats: { m: "12\"", t: "8", sv: "2+", w: "9", ld: "6+", oc: "2" },
                invuln: "5+",
                baseSize: "105 x 70mm",
                weapons: {
                    ranged: [
                        { name: "Twin arachnus blaze cannon", range: "24\"", a: "8", bs: "2+", s: "5", ap: "-1", d: "1", keywords: ["Devastating Wounds", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Merciless Hunter"]
                },
                composition: { min: 1, max: 1 },
                compositionText: "1 Pallas Grav-attack",
                keywords: ["Vehicle", "Fly", "Imperium", "Pallas Grav-attack"],
                factionKeywords: ["Adeptus Custodes"]
            },
            {
                id: "custodes-telemon-heavy-dreadnought",
                name: "Telemon Heavy Dreadnought",
                role: "vehicle",
                points: [{ models: 1, cost: 225 }],
                stats: { m: "8\"", t: "10", sv: "2+", w: "12", ld: "6+", oc: "4" },
                invuln: "4+",
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Arachnus storm cannon", range: "24\"", a: "12", bs: "2+", s: "6", ap: "-1", d: "1", keywords: ["Devastating Wounds"] },
                        { name: "Iliastus accelerator culverin", range: "48\"", a: "4", bs: "2+", s: "9", ap: "-1", d: "3", keywords: [] },
                        { name: "Spiculus bolt launcher", range: "36\"", a: "D6+3", bs: "2+", s: "5", ap: "0", d: "1", keywords: ["Blast"] },
                        { name: "Twin plasma projector", range: "12\"", a: "D3", bs: "N/A", s: "7", ap: "-2", d: "1", keywords: ["Torrent", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured feet", range: "Melee", a: "5", ws: "2+", s: "7", ap: "0", d: "1", keywords: [] },
                        { name: "Telemon caestus", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-2", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Martial Ka\u2019tah"],
                    other: ["Guardian Eternal", "Devoted to Destruction", "Damaged: 1-4 wounds remaining"]
                },
                wargearOptions: [
                    "This model\u2019s 2 iliastus accelerator culverins can be replaced with combinations of arachnus storm cannons and/or Telemon caestus and twin plasma projectors."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Telemon Heavy Dreadnought",
                keywords: ["Vehicle", "Walker", "Imperium", "Telemon Heavy Dreadnought"],
                factionKeywords: ["Adeptus Custodes"]
            }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(custodes);
})();
