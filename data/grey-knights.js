/**
 * W40K Army Builder — Grey Knights (10th Edition)
 *
 * Datasheets from Codex: Grey Knights. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const gk = {
        id: "grey-knights",
        name: "Grey Knights",
        icon: "⚜️",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Teleport Assault", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Brotherhood Strike",
                flavour: "",
                rule: { name: "Fury of Titan", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Banishing Wave (Psychic)", cost: 20, restriction: "GREY KNIGHTS model only." },
                    { name: "Blinding Aura", cost: 10, restriction: "GREY KNIGHTS model only." },
                    { name: "Purity of Purpose", cost: 15, restriction: "GREY KNIGHTS model only." },
                    { name: "Tome of Forbidden Ways", cost: 25, restriction: "GREY KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Truesilver Channelling", cp: 2, type: "Strategic Ploy" },
                    { name: "Combat Manifestation", cp: 1, type: "Epic Deed" },
                    { name: "Purgation Pattern", cp: 1, type: "Battle Tactic" },
                    { name: "Duty Unending", cp: 1, type: "Strategic Ploy" },
                    { name: "Shining Veil", cp: 1, type: "Battle Tactic" },
                    { name: "Expeditious Exit", cp: 2, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Hallowed Conclave",
                flavour: "",
                rule: { name: "Duty Before All", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eye of the Augurium", cost: 25, restriction: "GREY KNIGHTS model only." },
                    { name: "Inescapable Judgement (Psychic)", cost: 20, restriction: "GREY KNIGHTS model only." },
                    { name: "Sanctic Reaper", cost: 15, restriction: "GREY KNIGHTS TERMINATOR model only." },
                    { name: "Nemesis Rounds", cost: 10, restriction: "GREY KNIGHTS TERMINATOR model only." },
                ],
                stratagems: [
                    { name: "Giants of the Battlefield", cp: 1, type: "Battle Tactic" },
                    { name: "Unending Fidelity", cp: 1, type: "Strategic Ploy" },
                    { name: "Point-blank Purgation", cp: 1, type: "Strategic Ploy" },
                    { name: "Grind Them Underfoot", cp: 1, type: "Strategic Ploy" },
                    { name: "Precognitive Strategies", cp: 1, type: "Strategic Ploy" },
                    { name: "Shining Resolve", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Banishers",
                flavour: "",
                rule: { name: "Channelled Force", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Sigil of the Hunt", cost: 10, restriction: "GREY KNIGHTS model only." },
                    { name: "The Ephemeral Tome", cost: 15, restriction: "GREY KNIGHTS INFANTRY model only." },
                    { name: "The Sixty-sixth Seal", cost: 25, restriction: "GREY KNIGHTS model only." },
                    { name: "Pyresoul (Psychic)", cost: 20, restriction: "GREY KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Hexwrought Reprisal", cp: 1, type: "Epic Deed" },
                    { name: "Warding Chant", cp: 1, type: "Epic Deed" },
                    { name: "Chaos Bane", cp: 1, type: "Epic Deed" },
                    { name: "Celerity", cp: 1, type: "Epic Deed" },
                    { name: "Circle of Sanctuary", cp: 1, type: "Epic Deed" },
                    { name: "Shadow of Anarch", cp: 1, type: "Epic Deed" },
                ]
            },
            {
                name: "Sanctic Spearhead",
                flavour: "",
                rule: { name: "Mailed Fist", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Driven by Duty", cost: 10, restriction: "GREY KNIGHTS WALKER model only." },
                    { name: "Quickening Foci", cost: 15, restriction: "GREY KNIGHTS INFANTRY model only." },
                    { name: "Sigil of Exigence", cost: 30, restriction: "GREY KNIGHTS model only." },
                    { name: "Spiritus Machina", cost: 25, restriction: "GREY KNIGHTS INFANTRY model only." },
                ],
                stratagems: [
                    { name: "Truesilver Will", cp: 1, type: "Epic Deed" },
                    { name: "Abominus-class Targets", cp: 1, type: "Battle Tactic" },
                    { name: "Armoured Aegis", cp: 1, type: "Strategic Ploy" },
                    { name: "Redoubled Assault", cp: 1, type: "Strategic Ploy" },
                    { name: "Force Wave", cp: 1, type: "Strategic Ploy" },
                    { name: "Argent Wrath", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Augurium Task Force",
                flavour: "",
                rule: { name: "Prescient Redeployment", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Grimoire of Conjunctions", cost: 10, restriction: "GREY KNIGHTS model only." },
                    { name: "Shield of Prophecy", cost: 20, restriction: "GREY KNIGHTS model only." },
                    { name: "A Foot in the Future", cost: 15, restriction: "GREY KNIGHTS model only." },
                    { name: "Doomseer's Amulet", cost: 25, restriction: "GREY KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Aggressive Anticipation", cp: 1, type: "Battle Tactic" },
                    { name: "Appointed Hour", cp: 1, type: "Battle Tactic" },
                    { name: "Forewarned Evasion", cp: 1, type: "Epic Deed" },
                    { name: "Necessary End", cp: 1, type: "Epic Deed" },
                    { name: "Redirected Strike", cp: 1, type: "Epic Deed" },
                    { name: "Mirage of Echoes", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Warpbane Task Force",
                flavour: "",
                rule: { name: "Hallowed Ground", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Mandulian Reliquary", cost: 20, restriction: "GREY KNIGHTS model only." },
                    { name: "Radiant Champion", cost: 15, restriction: "GREY KNIGHTS INFANTRY model only." },
                    { name: "Phial of the Abyss", cost: 25, restriction: "GREY KNIGHTS INFANTRY model only." },
                    { name: "Paragon of Sanctity", cost: 10, restriction: "GREY KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Sanctified Kill Zone", cp: 1, type: "Battle Tactic" },
                    { name: "Flames of Sanctity", cp: 1, type: "Strategic Ploy" },
                    { name: "Hallowed Beacon", cp: 1, type: "Battle Tactic" },
                    { name: "Fires of Covenant", cp: 1, type: "Battle Tactic" },
                    { name: "Aegis Eternal", cp: 1, type: "Battle Tactic" },
                    { name: "Repelling Sphere", cp: 1, type: "Battle Tactic" },
                ]
            }
        ],
        units: [
                {
                        "id": "gk-brother-captain",
                        "name": "Brother-captain",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hammerhand",
                                        "Eye of Judgement"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Terminator",
                                "Imperium",
                                "Brother-Captain"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Brother-Captain This model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-brotherhood-champion",
                        "name": "Brotherhood Champion",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Clarion of Haste",
                                        "Inspiring Exemplar"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Brotherhood Champion"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Purgation Squad; Strike Squad.",
                        "compositionText": "1 Brotherhood Champion This model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-brotherhood-chaplain",
                        "name": "Brotherhood Chaplain",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 5,
                                "ld": "5+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crozius arcanum",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Zealous Path",
                                        "Litanies of Sanctity"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Terminator",
                                "Imperium",
                                "Brotherhood Chaplain"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Brotherhood Chaplain This model is equipped with: storm bolter; crozius arcanum."
                },
                {
                        "id": "gk-brotherhood-librarian",
                        "name": "Brotherhood Librarian",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-weapon",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Vortex of Doom",
                                                "range": "18\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctic Hood",
                                        "Haloed in Soulfire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Terminator",
                                "Psyker",
                                "Imperium",
                                "Brotherhood Librarian"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Brotherhood Librarian This model is equipped with: Nemesis force weapon; Vortex of Doom."
                },
                {
                        "id": "gk-brotherhood-techmarine",
                        "name": "Brotherhood Techmarine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Forge bolter",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Grav-pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian power axe",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Servo-arms",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Techmarine",
                                        "Blessing of the Omnissiah",
                                        "Guardians of the Machine"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Brotherhood Techmarine"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Purgation Squad; Purifier Squad; Strike Squad.",
                        "compositionText": "1 Brotherhood Techmarine This model is equipped with: forge bolter; grav-pistol; Omnissian power axe; servo-arm."
                },
                {
                        "id": "gk-castellan-crowe",
                        "name": "Castellan Crowe",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Purifying Flame",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Black Blade of Antwyr",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Champion of the Order of Purifiers",
                                        "Foresight"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Castellan Crowe"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following unit: Purifier Squad.",
                        "compositionText": "1 Castellan Crowe – EPIC HERO This model is equipped with: Purifying Flame; storm bolter; Black Blade of Antwyr."
                },
                {
                        "id": "gk-grand-master",
                        "name": "Grand Master",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 7,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warrior Strategist",
                                        "Might of Titan"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Terminator",
                                "Imperium",
                                "Grand Master"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Grand Master This model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-grand-master-in-nemesis-dreadknight",
                        "name": "Grand Master in Nemesis Dreadknight",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 225
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 13,
                                "ld": "6+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fragstorm grenade launcher",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Gatling psilencer",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy incinerator",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Heavy psycannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Sublimator",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4",
                                                        "Psychic",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dreadfists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis daemon greathammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis flail",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis mace",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Character 2+",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Surge of Wrath",
                                        "Warrior Strategist"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Walker",
                                "Psyker",
                                "Imperium",
                                "Grand Master In Nemesis Dreadknight"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Grand Master in Nemesis Dreadknight This model is equipped with: dreadfists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "gk-grand-master-voldus",
                        "name": "Grand Master Voldus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 7,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Searing Purity",
                                                "range": "12\"",
                                                "a": "D3+1",
                                                "bs": "2+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Malleus Argyrum",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctuary",
                                        "Hammer Aflame"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Terminator",
                                "Imperium",
                                "Grand Master Voldus"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Grand Master Voldus – EPIC HERO This model is equipped with: Searing Purity; storm bolter; Malleus Argyrum."
                },
                {
                        "id": "gk-venerable-dreadnought",
                        "name": "Venerable Dreadnought",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Heavy plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dreadnought combat weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Guidance of the Ancients"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Character",
                                "Psyker",
                                "Smoke",
                                "Imperium",
                                "Venerable Dreadnought"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Venerable Dreadnought This model is equipped with: assault cannon; storm bolter; Dreadnought combat weapon."
                },
                {
                        "id": "gk-brotherhood-terminator-squad",
                        "name": "Brotherhood Terminator Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 150
                                },
                                {
                                        "models": 5,
                                        "cost": 185
                                },
                                {
                                        "models": 8,
                                        "cost": 300
                                },
                                {
                                        "models": 10,
                                        "cost": 375
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Force Edge",
                                        "Ancient’s Banner",
                                        "Apothecary’s Narthecium"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Psyker",
                                "Terminator",
                                "Grenades",
                                "Imperium",
                                "Brotherhood Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Justicar 3-9 Terminators Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-strike-squad",
                        "name": "Strike Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 120
                                },
                                {
                                        "models": 10,
                                        "cost": 240
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctifying Ritual"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Strike Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Justicar 4-9 Grey Knights Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-razorback",
                        "name": "Razorback",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fire Focus"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Imperium",
                                "Razorback"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Razorback This model is equipped with: twin heavy bolter; armoured tracks. TRANSPORT This model has a transport capacity of 6 GREY KNIGHTS INFANTRY models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "gk-rhino",
                        "name": "Rhino",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Truesilver Aegis"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Imperium",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Rhino This model is equipped with: storm bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 GREY KNIGHTS INFANTRY models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "gk-interceptor-squad",
                        "name": "Interceptor Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                },
                                {
                                        "models": 10,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Personal Teleporters"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Interceptor Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Interceptor Justicar 4-9 Interceptors Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-land-raider",
                        "name": "Land Raider",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "6+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Godhammer lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Imperium",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Land Raider This model is equipped with: 2 godhammer lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 GREY KNIGHTS INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-land-raider-crusader",
                        "name": "Land Raider Crusader",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "6+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Hurricane bolter",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Grenades",
                                "Imperium",
                                "Land Raider",
                                "Crusader"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Land Raider Crusader This model is equipped with: 2 hurricane bolters; twin assault cannon; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 16 GREY KNIGHTS INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-land-raider-redeemer",
                        "name": "Land Raider Redeemer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "6+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flamestorm cannon",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Grenades",
                                "Imperium",
                                "Land Raider",
                                "Redeemer"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Land Raider Redeemer This model is equipped with: 2 flamestorm cannons; twin assault cannon; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 GREY KNIGHTS INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-nemesis-dreadknight",
                        "name": "Nemesis Dreadknight",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 13,
                                "ld": "6+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Gatling psilencer",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy incinerator",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Heavy psycannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dreadfists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis daemon greathammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Indomitable Spirit"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Psyker",
                                "Imperium",
                                "Nemesis Dreadknight"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Nemesis Dreadknight This model is equipped with: dreadfists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "gk-paladin-squad",
                        "name": "Paladin Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 180
                                },
                                {
                                        "models": 5,
                                        "cost": 225
                                },
                                {
                                        "models": 8,
                                        "cost": 360
                                },
                                {
                                        "models": 10,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Attuned Onslaught",
                                        "Ancient’s Banner",
                                        "Apothecary's Narthecium"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Terminator",
                                "Grenades",
                                "Imperium",
                                "Paladin Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Paragon 3-9 Paladins Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-purgation-squad",
                        "name": "Purgation Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 115
                                },
                                {
                                        "models": 10,
                                        "cost": 230
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Persecution"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Purgation Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Purgator Justicar 4-9 Purgators Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-purifier-squad",
                        "name": "Purifier Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                },
                                {
                                        "models": 10,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Purifying Flame",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctity of Purpose"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Purifier Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Knight of the Flame 4-9 Purifiers Every model is equipped with: Purifying Flame; storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-stormhawk-interceptor",
                        "name": "Stormhawk Interceptor",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Icarus stormcannon",
                                                "range": "48\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Las-talon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Skyhammer missile launcher",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Interceptor"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Smoke",
                                "Imperium",
                                "Stormhawk Interceptor"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Stormhawk Interceptor This model is equipped with: las-talon; skyhammer missile launcher; twin assault cannon; armoured hull."
                },
                {
                        "id": "gk-stormraven-gunship",
                        "name": "Stormraven Gunship",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 280
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hurricane bolter",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Stormstrike missile launcher",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy plasma cannon – standard",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Armoured Resilience"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Transport",
                                "Fly",
                                "Imperium",
                                "Stormraven Gunship"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Stormraven Gunship This model is equipped with: 2 stormstrike missile launchers; twin assault cannon; typhoon missile launcher; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 GREY KNIGHTS INFANTRY models and 1 GREY KNIGHTS VENERABLE DREADNOUGHT model. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-stormtalon-gunship",
                        "name": "Stormtalon Gunship",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Skyhammer missile launcher",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Strafing Run"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Imperium",
                                "Stormtalon Gunship"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Stormtalon Gunship This model is equipped with: skyhammer missile launcher; twin assault cannon; armoured hull."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(gk);
})();
