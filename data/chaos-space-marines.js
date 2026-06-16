/**
 * W40K Army Builder — Chaos Space Marines (10th Edition)
 *
 * Datasheets from Codex: Chaos Space Marines. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const chaosSpaceMarines = {
        id: "chaos-space-marines",
        name: "Chaos Space Marines",
        icon: "\uD83D\uDD25",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Dark Pacts", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Veterans of the Long War",
                flavour: "",
                rule: { name: "Focus of Hatred", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eager for Vengeance", cost: 20 },
                    { name: "Eye of Abaddon", cost: 15 },
                    { name: "Mark of Legend", cost: 10 },
                    { name: "Warmaster's Gift", cost: 15, restriction: "CHAOS LORD model only." },
                ],
                stratagems: [
                    { name: "Endless Ire", cp: 2, type: "Epic Deed" },
                    { name: "Contemptuous Disregard", cp: 1, type: "Battle Tactic" },
                    { name: "Bringers of Despair", cp: 2, type: "Epic Deed" },
                    { name: "Black Crusade", cp: 1, type: "Strategic Ploy" },
                    { name: "Let the Galaxy Burn", cp: 1, type: "Battle Tactic" },
                    { name: "Millennia of Experience", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Deceptors",
                flavour: "",
                rule: { name: "Masters of Misdirection", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Cursed Fang", cost: 10, restriction: "HERETIC ASTARTES INFANTRY model only." },
                    { name: "Falsehood", cost: 10 },
                    { name: "Shroud of Obfuscation", cost: 15, restriction: "HERETIC ASTARTES INFANTRY model only." },
                    { name: "Soul Link", cost: 5, restriction: "HERETIC ASTARTES INFANTRY model only." },
                ],
                stratagems: [
                    { name: "Detonator", cp: 1, type: "Wargear" },
                    { name: "From All Sides", cp: 1, type: "Battle Tactic" },
                    { name: "Pick Them Off", cp: 1, type: "Battle Tactic" },
                    { name: "Coils of Deception", cp: 1, type: "Strategic Ploy" },
                    { name: "Relentless Pursuit", cp: 1, type: "Strategic Ploy" },
                    { name: "Scrambled Coordinates", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Renegade Raiders",
                flavour: "",
                rule: { name: "Raiders and Reavers", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Despot's Claim", cost: 15, restriction: "HERETIC ASTARTES model only." },
                    { name: "Dread Reaver", cost: 15, restriction: "HERETIC ASTARTES model only." },
                    { name: "Mark of the Hound", cost: 25, restriction: "HERETIC ASTARTES model only." },
                    { name: "Tyrant's Lash", cost: 20, restriction: "HERETIC ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Unfailingly Obdurate", cp: 1, type: "Battle Tactic" },
                    { name: "Scour and Seize", cp: 1, type: "Battle Tactic" },
                    { name: "Opportunistic Raiders", cp: 1, type: "Strategic Ploy" },
                    { name: "Warpcharged Engines", cp: 1, type: "Wargear" },
                    { name: "Ruinous Raid", cp: 1, type: "Battle Tactic" },
                    { name: "Reavers' Haste", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Dread Talons",
                flavour: "",
                rule: { name: "Terror Descends (Aura)", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eater of Dread", cost: 15, restriction: "HERETIC ASTARTES model only." },
                    { name: "Night's Shroud", cost: 20 },
                    { name: "Warp-fuelled Thrusters", cost: 20, restriction: "JUMP PACK CHAOS LORD model only." },
                    { name: "Willbreaker", cost: 10, restriction: "HERETIC ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Depthless Cruelty", cp: 1, type: "Battle Tactic" },
                    { name: "Bloody Example", cp: 1, type: "Epic Deed" },
                    { name: "Pitiless Hunters", cp: 1, type: "Battle Tactic" },
                    { name: "Relentless Terror", cp: 1, type: "Strategic Ploy" },
                    { name: "Screaming Descent", cp: 1, type: "Strategic Ploy" },
                    { name: "Merciless Pursuit", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Fellhammer Siege-host",
                flavour: "",
                rule: { name: "Iron Fortitude", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Bastion Plate", cost: 10 },
                    { name: "Iron Artifice", cost: 10, restriction: "HERETIC ASTARTES INFANTRY model only." },
                    { name: "Ironbound Enmity", cost: 15, restriction: "HERETIC ASTARTES model only." },
                    { name: "Warp Tracer", cost: 20, restriction: "HERETIC ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Persistent Assailants", cp: 1, type: "Battle Tactic" },
                    { name: "Brutal Attrition", cp: 1, type: "Epic Deed" },
                    { name: "Pitiless Cannonade", cp: 1, type: "Battle Tactic" },
                    { name: "Point-blank Destruction", cp: 1, type: "Battle Tactic" },
                    { name: "Steadfast Determination", cp: 1, type: "Strategic Ploy" },
                    { name: "Siegecraft", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Pactbound Zealots",
                flavour: "",
                rule: { name: "Marks of Chaos", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eye of Tzeentch", cost: 15, restriction: "HERETIC ASTARTES TZEENTCH model only." },
                    { name: "Intoxicating Elixir", cost: 15, restriction: "HERETIC ASTARTES SLAANESH model only." },
                    { name: "Orbs of Unlife", cost: 15, restriction: "HERETIC ASTARTES NURGLE model only." },
                    { name: "Talisman of Burning Blood", cost: 15, restriction: "HERETIC ASTARTES KHORNE model only." },
                ],
                stratagems: [
                    { name: "Eye of the Gods", cp: 1, type: "Epic Deed" },
                    { name: "Eternal Hate", cp: 1, type: "Strategic Ploy" },
                    { name: "Profane Zeal", cp: 1, type: "Battle Tactic" },
                    { name: "Skinshift", cp: 1, type: "Epic Deed" },
                    { name: "Torpefying Refrain", cp: 1, type: "Strategic Ploy" },
                    { name: "Festering Miasma", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Chaos Cult",
                flavour: "",
                rule: { name: "Desperate Devotion", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Amulet of Tainted Vigour", cost: 20, restriction: "DARK APOSTLE model only." },
                    { name: "Cultist's Brand", cost: 20, restriction: "DARK APOSTLE or DAMNED model only." },
                    { name: "Incendiary Goad", cost: 15, restriction: "DARK APOSTLE or DAMNED model only." },
                    { name: "Warped Foresight", cost: 10, restriction: "DARK APOSTLE or DAMNED model only." },
                ],
                stratagems: [
                    { name: "Chosen for Glory", cp: 1, type: "Battle Tactic" },
                    { name: "Selfless Demise", cp: 1, type: "Strategic Ploy" },
                    { name: "Infernal Sacrifice", cp: 1, type: "Battle Tactic" },
                    { name: "Crazed Focus", cp: 1, type: "Battle Tactic" },
                    { name: "Reckless Haste", cp: 1, type: "Strategic Ploy" },
                    { name: "Mortal Thralls", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Soulforged Warpack",
                flavour: "",
                rule: { name: "Debt to the Soul Forge", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Forge's Blessing", cost: 20, restriction: "HERETIC ASTARTES model only." },
                    { name: "Invigorated Mechatendrils", cost: 15, restriction: "WARPSMITH model only." },
                    { name: "Tempting Addendum", cost: 25, restriction: "HERETIC ASTARTES model only." },
                    { name: "Soul Harvester", cost: 15, restriction: "HERETIC ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Desperate Pledge", cp: 1, type: "Battle Tactic" },
                    { name: "Glut of Souls", cp: 1, type: "Strategic Ploy" },
                    { name: "Daemonic Possession", cp: 1, type: "Epic Deed" },
                    { name: "Unstoppable Rampage", cp: 1, type: "Strategic Ploy" },
                    { name: "Predatory Pursuit", cp: 1, type: "Strategic Ploy" },
                    { name: "Feeding Frenzy", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Cabal of Chaos",
                flavour: "",
                rule: { name: "Empyric Wellspring", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Touched by the Warp", cost: 10 },
                    { name: "Eyes of Z'desh", cost: 25, restriction: "HERETIC ASTARTES model only." },
                    { name: "Mind Blade", cost: 25, restriction: "PSYKER model only." },
                    { name: "Infernal Avatar", cost: 20 },
                ],
                stratagems: [
                    { name: "Baleful Blessing", cp: 1, type: "Epic Deed" },
                    { name: "No Rest in Death", cp: 1, type: "Strategic Ploy" },
                    { name: "Mutation's Curse", cp: 1, type: "Strategic Ploy" },
                    { name: "Soulseekers", cp: 1, type: "Strategic Ploy" },
                    { name: "Unholy Haste", cp: 1, type: "Epic Deed" },
                    { name: "Shroud of Chaos", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Creations of Bile",
                flavour: "",
                rule: { name: "Experimental Augmentations", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Surgical Precision", cost: 10, restriction: "HERETIC ASTARTES model (excluding DAMNED models) only." },
                    { name: "Living Carapace", cost: 15, restriction: "CHAOS LORD model only." },
                    { name: "Helm of All-seeing", cost: 25, restriction: "HERETIC ASTARTES INFANTRY model (excluding DAMNED models) only." },
                    { name: "Prime Test Subject", cost: 35, restriction: "HERETIC ASTARTES INFANTRY model (excluding DAMNED models) only." },
                ],
                stratagems: [
                    { name: "Monstrous Visages", cp: 1, type: "Strategic Ploy" },
                    { name: "Masters Are Watching", cp: 1, type: "Strategic Ploy" },
                    { name: "Specimens for the Spider", cp: 2, type: "Strategic Ploy" },
                    { name: "Delayed Mutations", cp: 2, type: "Strategic Ploy" },
                    { name: "Diabolic Regeneration", cp: 1, type: "Strategic Ploy" },
                    { name: "Autostimulants", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Nightmare Hunt",
                flavour: "",
                rule: { name: "Terror Made Manifest", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Greyveil Hex", cost: 25, restriction: "CHAOS LORD model only." },
                    { name: "Warp-fuelled Thrusters", cost: 20, restriction: "CHAOS LORD JUMP PACK model only." },
                    { name: "Terrorglut Parasite", cost: 20, restriction: "HERETIC ASTARTES model only." },
                    { name: "Sorrowscent Vulture", cost: 35, restriction: "CHAOS LORD JUMP PACK model only." },
                ],
                stratagems: [
                    { name: "Talons Sunk Deep", cp: 1, type: "" },
                    { name: "Prey on the Weak", cp: 1, type: "" },
                    { name: "Sadistic Display", cp: 1, type: "" },
                    { name: "Malicious Surge", cp: 1, type: "" },
                    { name: "Relentless Terror", cp: 1, type: "" },
                    { name: "Horrific Incursion", cp: 1, type: "" },
                ]
            },
            {
                name: "Huron's Marauders",
                flavour: "",
                rule: { name: "Tyrannical Motivation", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Voice of the Tyrant", cost: 25 },
                    { name: "Raid Leader", cost: 20 },
                    { name: "Dread Reputation", cost: 25 },
                    { name: "Eager for Bloodshed", cost: 30, restriction: "HERETIC ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Hardened Killers", cp: 1, type: "Battle Tactic" },
                    { name: "At the Tyrant's Command", cp: 1, type: "Strategic Ploy" },
                    { name: "Seize the Prize", cp: 1, type: "Battle Tactic" },
                    { name: "Reavers' Flurry", cp: 1, type: "Battle Tactic" },
                    { name: "To the Favoured the Spoils", cp: 1, type: "Strategic Ploy" },
                    { name: "Encircling Surge", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Renegade Warband",
                flavour: "",
                rule: { name: "Slaves to None", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Weaponised Hatred", cost: 35, restriction: "HERETIC ASTARTES model only." },
                    { name: "Eyes of the Hunter", cost: 15, restriction: "HERETIC ASTARTES model only." },
                    { name: "Fratricidal Trophies", cost: 5, restriction: "HERETIC ASTARTES TERMINATOR model only." },
                    { name: "Empyric Symbiote", cost: 15, restriction: "HERETIC ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Never Outgunned", cp: 1, type: "Epic Deed" },
                    { name: "Vengeful Destruction", cp: 1, type: "Battle Tactic" },
                    { name: "Undying Hatred", cp: 1, type: "Strategic Ploy" },
                    { name: "Renegade Claim", cp: 1, type: "Strategic Ploy" },
                    { name: "Corrupted Munitions", cp: 1, type: "Battle Tactic" },
                    { name: "Reavers' Reaction", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Warpstrike Champions",
                flavour: "",
                rule: { name: "Warp Portals", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Infernal Fulgurite", cost: 20 },
                    { name: "Eye of the Warp", cost: 15, restriction: "HERETIC ASTARTES model with the Deep Strike ability only." },
                    { name: "Akshur's Binding Runes", cost: 20, restriction: "HERETIC ASTARTES model with the Deep Strike ability only." },
                    { name: "Tzagulla", cost: 25, restriction: "HERETIC ASTARTES model with the Deep Strike ability only." },
                ],
                stratagems: [
                    { name: "Empyric Dislocation", cp: 1, type: "Battle Tactic" },
                    { name: "Armour of Corruption", cp: 2, type: "Strategic Ploy" },
                    { name: "Warp Flicker", cp: 1, type: "Strategic Ploy" },
                    { name: "Warp-tainted", cp: 1, type: "Strategic Ploy" },
                    { name: "Siegebreaker Strike", cp: 1, type: "Strategic Ploy" },
                    { name: "Portal of Spite", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Cult of the Arkifane",
                flavour: "",
                rule: { name: "Soul Forge Boons", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Wyredjinn", cost: 25 },
                    { name: "Cybinfernal Font", cost: 20 },
                    { name: "Mark of the Soul Forges", cost: 20 },
                    { name: "Crown of Worms", cost: 15, restriction: "WARPSMITH model only." },
                ],
                stratagems: [
                    { name: "Touch of the Arkifane", cp: 1, type: "Battle Tactic" },
                    { name: "Balefire Boon", cp: 1, type: "Battle Tactic" },
                    { name: "Soul-tally Offering", cp: 2, type: "Battle Tactic" },
                    { name: "Biomechanoid Regeneration", cp: 1, type: "Epic Deed" },
                    { name: "Forge-fire Surge", cp: 1, type: "Strategic Ploy" },
                    { name: "Unholy Fortitude", cp: 1, type: "Strategic Ploy" },
                ]
            }
        ],
        units: [
                {
                        "id": "csm-abaddon-the-despoiler",
                        "name": "Abaddon the Despoiler",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 9,
                                "ld": "5+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Talon of Horus",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Drach’nyen",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Talon of Horus",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Warmaster",
                                        "Dark Destiny"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Terminator",
                                "Chaos Undivided",
                                "Chaos",
                                "Abaddon The Despoiler"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminator Squad; Chosen.",
                        "compositionText": "1 Abaddon the Despoiler – EPIC HERO This model is equipped with: Talon of Horus; Drach’nyen."
                },
                {
                        "id": "csm-chaos-lord",
                        "name": "Chaos Lord",
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
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainblade",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Daemon hammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Chaos",
                                        "Chance for Glory"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Chaos Lord"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Chaos Lord This model is equipped with: plasma pistol; daemon hammer."
                },
                {
                        "id": "csm-chaos-lord-in-terminator-armour",
                        "name": "Chaos Lord in Terminator Armour",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
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
                                                "name": "Combi-bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Combi-weapon",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainfist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 3+"
                                                ]
                                        },
                                        {
                                                "name": "Exalted weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Chaos",
                                        "Formidably Resilient"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Chaos Lord",
                                "Terminator",
                                "Chaos Lord In Terminator Armour"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Chaos Terminator Squad.",
                        "compositionText": "1 Chaos Lord in Terminator Armour This model is equipped with: combi-bolter; exalted weapon."
                },
                {
                        "id": "csm-chaos-lord-with-jump-pack",
                        "name": "Chaos Lord with Jump Pack",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin lightning claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Chaos",
                                        "Cruel Hunter"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Chaos",
                                "Chaos Lord"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Raptors.",
                        "compositionText": "1 Chaos Lord This model is equipped with: bolt pistol; accursed weapon."
                },
                {
                        "id": "csm-cultist-firebrand",
                        "name": "Cultist Firebrand",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Balefire pike",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fiery Faith",
                                        "Cursed Flames"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Cultist Firebrand"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Cultist Mob.",
                        "compositionText": "1 Cultist Firebrand This model is equipped with: balefire pike, close combat weapon."
                },
                {
                        "id": "csm-cypher",
                        "name": "Cypher",
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
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cypher’s bolt pistol",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Cypher’s plasma pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cypher’s bolt pistol",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Cypher’s plasma pistol",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Agent of Discord",
                                        "Guns Blazing"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Fallen",
                                "Cypher"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Cypher – EPIC HERO This model is equipped with: Cypher’s bolt pistol; Cypher’s plasma pistol."
                },
                {
                        "id": "csm-dark-apostle",
                        "name": "Dark Apostle",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "5+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed crozius",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dark Zealotry",
                                        "Demagogue",
                                        "Malign Sacrifice"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Chosen; Cultist Mob; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Dark Apostle 2 Dark Disciples The Dark Apostle is equipped with: bolt pistol; accursed crozius. Every Dark Disciple is equipped with: close combat weapon."
                },
                {
                        "id": "csm-dark-commune",
                        "name": "Dark Commune",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Warp Curse – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Warp Curse – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Psychic",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Commune blade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Commune stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Faithful Flock",
                                        "Dark Ritual",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Cultist Mob.",
                        "compositionText": "1 Cult Demagogue 1 Mindwitch 1 Iconarch 2 Blessed Blades The Cult Demagogue is equipped with: autopistol; Commune stave. The Mindwitch is equipped with: Warp Curse; close combat weapon. The Iconarch is equipped with: autopistol; close combat weapon; Chaos icon. Every Blessed Blade is equipped with: Commune blade."
                },
                {
                        "id": "csm-fabius-bile",
                        "name": "Fabius Bile",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Xyclos Needler",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chirurgeon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Rod of Torment",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Surgeon Acolyte’s tools",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Enhanced Warriors",
                                        "Surgeon Acolyte",
                                        "Chirurgeon"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Chosen; Cultist Mob; Legionaries; Red Corsairs Raiders.",
                        "compositionText": "1 Fabius Bile – EPIC HERO 1 Surgeon Acolyte Fabius Bile is equipped with: Xyclos Needler; Chirurgeon; Rod of Torment. The Surgeon Acolyte is equipped with: Surgeon Acolyte’s tools."
                },
                {
                        "id": "csm-haarken-worldclaimer",
                        "name": "Haarken Worldclaimer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Helspear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Sustained Hits D3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Herald’s Talon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Helspear",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance",
                                                        "Sustained Hits D3"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Head Taker",
                                        "Herald of the Apocalypse"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Jump Pack",
                                "Chaos",
                                "Chaos Undivided",
                                "Haarken Worldclaimer"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Raptors.",
                        "compositionText": "1 Haarken Worldclaimer – EPIC HERO This model is equipped with: Helspear; Herald’s Talon."
                },
                {
                        "id": "csm-heretic-astartes-daemon-prince",
                        "name": "Heretic Astartes Daemon Prince",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dark Blessing",
                                        "Ascended Daemon",
                                        "Lord of Chaos"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Heretic Astartes Daemon Prince This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "csm-heretic-astartes-daemon-prince-with-wings",
                        "name": "Heretic Astartes Daemon Prince with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Destruction",
                                        "Flying Horror"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince With Wings"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Heretic Astartes Daemon Prince with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "csm-huron-blackheart",
                        "name": "Huron Blackheart",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tyrant’s Claw heavy flamer",
                                                "range": "12\"",
                                                "a": "D6+2",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Tyrant’s Claw and exalted power weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Badab",
                                        "Hamadrya’s Knowledge"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Chaos Undivided",
                                "Huron Blackheart"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminator Squad; Chosen; Legionaries; Masters of the Maelstrom; Red Corsairs Raiders.",
                        "compositionText": "1 Huron Blackheart – EPIC HERO This model is equipped with: Tyrant’s Claw heavy flamer; Tyrant’s Claw and exalted power weapon."
                },
                {
                        "id": "csm-kravek-morne",
                        "name": "Kravek Morne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
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
                                                "name": "Baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Last Argument and power fist",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Servo-harness",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Anti-Vehicle 2+"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Headlong Destruction",
                                        "Architect of Ruin"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Chaos Undivided",
                                "Terminator",
                                "Kravek Morne"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminator Squad; Mutilators; Obliterators.",
                        "compositionText": "1 Kravek Morne – EPIC HERO This model is equipped with: baleflamer; combi-bolter; servo-harness; Last Argument and power fist."
                },
                {
                        "id": "csm-lord-discordant-on-helstalker",
                        "name": "Lord Discordant on Helstalker",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Helstalker autocannon",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Magma cutter",
                                                "range": "6\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladed limbs",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Impaler chainglaive",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Techno-virus injector",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 2+",
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Corrupt Machine Spirits",
                                        "Spirit Thief"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Lord Discordant"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Lord Discordant on Helstalker This model is equipped with: bolt pistol; Helstalker autocannon; techno-virus injector; bladed limbs; impaler chainglaive."
                },
                {
                        "id": "csm-master-of-executions",
                        "name": "Master of Executions",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Axe of dismemberment",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warp-sighted Butcher",
                                        "Trophy Taker"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Master Of Executions"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Master of Executions This model is equipped with: bolt pistol; axe of dismemberment."
                },
                {
                        "id": "csm-master-of-possession",
                        "name": "Master of Possession",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Rite of Possession – witchfire",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Pistol",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Rite of Possession – focused witchfire",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Hazardous",
                                                        "Pistol",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Staff of possession",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonkin",
                                        "Sacrificial Dagger"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Master Of Possession"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Possessed; Red Corsairs Raiders.",
                        "compositionText": "1 Master of Possession This model is equipped with: bolt pistol; Rite of Possession; staff of possession."
                },
                {
                        "id": "csm-red-corsairs-reave-captain",
                        "name": "Red Corsairs Reave-Captain",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power maul",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brutal Raider",
                                        "Raider’s Due"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Red Corsairs Reave-Captain"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Red Corsairs Reave-Captain This model is equipped with: bolt pistol; power sword."
                },
                {
                        "id": "csm-sorcerer",
                        "name": "Sorcerer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gaze – witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gaze – focused witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Prescience",
                                        "Gift of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Chaos",
                                "Sorcerer"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Sorcerer This model is equipped with: bolt pistol; Infernal Gaze; force weapon."
                },
                {
                        "id": "csm-sorcerer-in-terminator-armour",
                        "name": "Sorcerer in Terminator Armour",
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
                                                "name": "Combi-bolter",
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
                                                "name": "Infernal Gaze – witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gaze – focused witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warptime",
                                        "Death Hex",
                                        "Chaos Familiar"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Terminator",
                                "Sorcerer In Terminator Armour"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Chaos Terminator Squad.",
                        "compositionText": "1 Sorcerer in Terminator Armour This model is equipped with: combi-bolter; Infernal Gaze; force weapon."
                },
                {
                        "id": "csm-traitor-enforcer",
                        "name": "Traitor Enforcer",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ogryn weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brutal Example",
                                        "Mutated Bodyguard"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Traitor Guardsmen Squad.",
                        "compositionText": "1 Traitor Enforcer 1 Traitor Ogryn The Traitor Enforcer is equipped with: bolt pistol; power fist. The Traitor Ogryn is equipped with: Ogryn weapons."
                },
                {
                        "id": "csm-vashtorr-the-arkifane",
                        "name": "Vashtorr the Arkifane",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 175
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Vashtorr’s claw",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vashtorr’s hammer – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Vashtorr’s hammer – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unholy Mechanisms",
                                        "Reorder Reality",
                                        "Indentured Daemon Engines"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Vashtorr The Arkifane"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Vashtorr the Arkifane – EPIC HERO This model is equipped with: Vashtorr’s claw; Vashtorr’s hammer. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-warpsmith",
                        "name": "Warpsmith",
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
                                                "name": "Flamer tendril",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Torrent",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Melta tendril",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Forge weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warpsmith",
                                        "Master of Mechanisms",
                                        "Enrage Machine Spirits"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Warpsmith"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Havocs; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Warpsmith This model is equipped with: flamer tendril; melta tendril; plasma pistol; forge weapon."
                },
                {
                        "id": "csm-cultist-mob",
                        "name": "Cultist Mob",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 50
                                },
                                {
                                        "models": 20,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Brutal assault weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "For the Dark Gods"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Cultist Mob"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Cultist Champion 9-19 Chaos Cultists Every model is equipped with: autopistol; brutal assault weapon."
                },
                {
                        "id": "csm-legionaries",
                        "name": "Legionaries",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                },
                                {
                                        "models": 10,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Balefire tome",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Havoc autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Reaper chaincannon",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Heavy melee weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Veterans of the Long War",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Grenades",
                                "Legionaries"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Aspiring Champion 4-9 Legionaries Every model is equipped with: bolt pistol; boltgun; close combat weapon."
                },
                {
                        "id": "csm-khorne-berzerkers",
                        "name": "Khorne Berzerkers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 180
                                },
                                {
                                        "models": 20,
                                        "cost": 360
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainblade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Khornate eviscerator",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blood Surge",
                                        "Icon of Khorne"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Khorne",
                                "Berzerkers"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, World Eaters"
                        ],
                        "compositionText": "1 Khorne Berzerker Champion 9-19 Khorne Berzerkers Every model is equipped with: bolt pistol; chainblade."
                },
                {
                        "id": "csm-plague-marines",
                        "name": "Plague Marines",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 95
                                },
                                {
                                        "models": 7,
                                        "cost": 130
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blight launcher",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plague belcher",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plague spewer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bubotic weapons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Heavy plague weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plague knives",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Infused with the Blessings of Nurgle",
                                        "Icon of Despair"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Plague Marines"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, Death Guard"
                        ],
                        "compositionText": "1 Plague Champion 4-9 Plague Marines Every model is equipped with: boltgun; plague knives."
                },
                {
                        "id": "csm-rubric-marines",
                        "name": "Rubric Marines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Inferno bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Inferno boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Malefic Curse",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Soulreaper cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Warpflame pistol",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Warpflamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Cabal of Sorcerers (Aspiring Sorcerer only)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bringers of Change",
                                        "Icon of Flame"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes",
                                "Thousand Sons"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, Thousand Sons"
                        ],
                        "compositionText": "1 Aspiring Sorcerer 4-9 Rubric Marines The Aspiring Sorcerer is equipped with: inferno bolt pistol; Malefic Curse; force weapon. Every Rubric Marine is equipped with: inferno boltgun; close combat weapon. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, CHAOS, TZEENTCH, RUBRICAE, RUBRIC MARINESASPIRING SORCERER ONLY: PSYKER FACTION"
                },
                {
                        "id": "csm-chaos-rhino",
                        "name": "Chaos Rhino",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
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
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Self Repair"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Chaos",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 HERETIC ASTARTES INFANTRY models. It cannot transport TERMINATOR, JUMP PACK, MUTILATORS, OBLITERATOR or POSSESSED models."
                },
                {
                        "id": "csm-noctilith-crown",
                        "name": "Noctilith Crown",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lashing warp energies",
                                                "range": "6\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Malevolent Locus",
                                        "Malign Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Noctilith Crown"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Noctilith Crown This model is equipped with: lashing warp energies."
                },
                {
                        "id": "csm-accursed-cultists",
                        "name": "Accursed Cultists",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 8,
                                        "cost": 90
                                },
                                {
                                        "models": 16,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Blasphemous appendages",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hideous mutations",
                                                "range": "Melee",
                                                "a": "D6+2",
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Accursed Horde"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Damned",
                                "Accursed Cultists"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "3-6 Torments 5-10 Mutants Every Torment is equipped with: hideous mutations. Every Mutant is equipped with: blasphemous appendages."
                },
                {
                        "id": "csm-chaos-bikers",
                        "name": "Chaos Bikers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 70
                                },
                                {
                                        "models": 6,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
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
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Outmanoeuvre",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Chaos",
                                "Chaos Bikers"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Biker Champion 2-5 Chaos Bikers Every model is equipped with: bolt pistol; combi-bolter; close combat weapon."
                },
                {
                        "id": "csm-chaos-land-raider",
                        "name": "Chaos Land Raider",
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
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Soulshatter lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Chaos",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 HERETIC ASTARTES INFANTRY models (excluding OBLITERATOR and JUMP PACK models). Each POSSESSED, MUTILATORS and TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "csm-chaos-predator-annihilator",
                        "name": "Chaos Predator Annihilator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Predator twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Annihilator"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Predator Annihilator"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Predator Annihilator This model is equipped with: Predator twin lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-chaos-predator-destructor",
                        "name": "Chaos Predator Destructor",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Predator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Destructor"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Predator Destructor"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Predator Destructor This model is equipped with: Predator autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hideous mutations",
                                                "range": "Melee",
                                                "a": "D6+2",
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mind-breaking Mutations"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Chaos Spawn"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "csm-chaos-terminator-squad",
                        "name": "Chaos Terminator Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 180
                                },
                                {
                                        "models": 10,
                                        "cost": 360
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
                                                "name": "Combi-bolter",
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
                                                "name": "Reaper autocannon",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Chainfist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 3+"
                                                ]
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Despoilers"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Terminator",
                                "Chaos Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Terminator Champion 4-9 Chaos Terminators Every model is equipped with: combi-bolter; accursed weapon."
                },
                {
                        "id": "csm-chaos-vindicator",
                        "name": "Chaos Vindicator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 11,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Demolisher cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Siege Shield"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Vindicator"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Vindicator This model is equipped with: demolisher cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-chosen",
                        "name": "Chosen",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Chosen Marauders",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Chosen"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chosen Champion 4-9 Chosen Every model is equipped with: boltgun; bolt pistol; accursed weapon."
                },
                {
                        "id": "csm-defiler",
                        "name": "Defiler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hades battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma destructor",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Excruciator cannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Magma cutters",
                                                "range": "12\"",
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
                                                "name": "Heavy baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Hades lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy reaper autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Shearing claws – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Shearing claws – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Electroscourge",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Daemonforge"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-fellgor-beastmen",
                        "name": "Fellgor Beastmen",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Corrupted stave",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Corrupted stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Great weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bestial Raiders"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Fellgor Beastmen"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Fellgor Champion 9 Fellgor Beastmen The Fellgor Champion is equipped with: bolt pistol; chainsword. Every Fellgor Beastman is equipped with: autopistol; close combat weapon."
                },
                {
                        "id": "csm-forgefiend",
                        "name": "Forgefiend",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ectoplasma cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Hades autocannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured limbs",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Forgefiend jaws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Ordnance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Forgefiend"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Forgefiend This model is equipped with: 2 Hades autocannons; Forgefiend jaws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-havocs",
                        "name": "Havocs",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Havoc autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Havoc heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Havoc lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Havoc missile launcher – frag",
                                                "range": "48\"",
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
                                                "name": "Havoc missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Havoc reaper chaincannon",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stabilisation Talons"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Havocs"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Havoc Champion 4 Havocs The Havoc Champion is equipped with: flamer; Astartes chainsword. 2 Havocs are equipped with: Havoc autocannon; close combat weapon. 2 Havocs are equipped with: Havoc lascannon; close combat weapon."
                },
                {
                        "id": "csm-helbrute",
                        "name": "Helbrute",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Helbrute plasma cannon",
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
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
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
                                                "name": "Missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
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
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Helbrute fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Helbrute hammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power scourge",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dark Ascension",
                                        "Devoted to Destruction"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Helbrute"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Helbrute This model is equipped with: missile launcher; multi-melta; close combat weapon"
                },
                {
                        "id": "csm-heldrake",
                        "name": "Heldrake",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 205
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Hades autocannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Heldrake claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 2+",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Hover"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Airborne Predator"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Chaos",
                                "Daemon",
                                "Heldrake"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Heldrake This model is equipped with: Hades autocannon; Heldrake claws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-khorne-lord-of-skulls",
                        "name": "Khorne Lord of Skulls",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 13,
                                "sv": "3+",
                                "w": 24,
                                "ld": "6+",
                                "oc": 8
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemongore cannon",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Gorestorm cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Hades gatling cannon",
                                                "range": "48\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Ichor cannon",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Skullhurler",
                                                "range": "60\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Great cleaver of Khorne – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great cleaver of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 15,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Plough Through the Enemy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Towering",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Lord Of Skulls"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Khorne Lord of Skulls This model is equipped with: gorestorm cannon; Hades gatling cannon; great cleaver of Khorne. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-masters-of-the-maelstrom",
                        "name": "Masters of the Maelstrom",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Absolvor bolt pistol",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Londaxi maimer",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Mind Wrench",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Axe of Ending",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Character 2+",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Bionic gauntlet",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Force stave",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Power sabre",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reductor array",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Choice Samples",
                                        "Fleet Command",
                                        "Plunder"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Garreon the Corpsemaster – EPIC HERO 1 Garlon Souleater – EPIC HERO 1 Katar Garrix – EPIC HERO 1 Captain Sargotta – EPIC HERO 1 The Enforcer – EPIC HERO Garreon the Corpsemaster is equipped with: absolvor bolt pistol; reductor array. Garlon Souleater is equipped with: Mind Wrench; force stave. Katar Garrix is equipped with: bolt pistol; Axe of Ending. Captain Sargotta is equipped with: laspistol; power sabre. The Enforcer is equipped with: Londaxi maimer; bionic gauntlet. KEYWORDS – OTHER MODELS: INFANTRY, EPIC HERO, GRENADES, CHAOS, CHAOS UNDIVIDED, MASTERS OF THE MAELSTROMGARLON SOULEATER: PSYKER FACTION"
                },
                {
                        "id": "csm-maulerfiend",
                        "name": "Maulerfiend",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Magma cutters",
                                                "range": "6\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Lasher tendrils",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Maulerfiend fists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Siege Crawler"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Maulerfiend"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Maulerfiend This model is equipped with: lasher tendrils; Maulerfiend fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-mutilators",
                        "name": "Mutilators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Fleshmetal weapons - clawed sweeps",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Fleshmetal weapons - rending strikes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Fleshmetal weapons - thunderous blows",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crushing Charge"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Daemon",
                                "Mutilators"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "3 Mutilators Every model is equipped with: 1 fleshmetal weapons."
                },
                {
                        "id": "csm-nemesis-claw",
                        "name": "Nemesis Claw",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 110
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Nostraman chainblade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Nostraman chainglaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Stealth"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Visions of Suffering",
                                        "Voice Eater"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Chaos",
                                "Grenades",
                                "Nemesis Claw"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Visionary 4-9 Legionaries The Visionary is equipped with: bolt pistol; Nostraman chainblade. Each Legionary is equipped with: bolt pistol; boltgun; close combat weapon. ATTACHED UNIT If a CHARACTER unit from your army with the Leader ability (excluding EPIC HEROes) can be attached to a LEGIONARIES unit, it can be attached to this unit instead."
                },
                {
                        "id": "csm-obliterators",
                        "name": "Obliterators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fleshmetal guns – focused malice",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Fleshmetal guns – ruinous salvo",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Fleshmetal guns – warp hail",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crushing fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warp Rift Firepower"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Daemon",
                                "Obliterators"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "2 Obliterators Every model is equipped with: fleshmetal guns; crushing fists."
                },
                {
                        "id": "csm-possessed",
                        "name": "Possessed",
                        "role": "infantry",
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
                                "m": "9\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hideous mutations",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unholy Bloodshed",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Daemon",
                                "Possessed"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Possessed Champion 4-9 Possessed Every model is equipped with: hideous mutations."
                },
                {
                        "id": "csm-raptors",
                        "name": "Raptors",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 110
                                },
                                {
                                        "models": 10,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Heavy melee weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mutations",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fearsome",
                                        "Terrifying Assault"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Packs",
                                "Grenades",
                                "Chaos",
                                "Raptors"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Raptor Champion 4-9 Raptors Every model is equipped with: bolt pistol; Astartes chainsword."
                },
                {
                        "id": "csm-red-corsairs-raiders",
                        "name": "Red Corsairs Raiders",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 110
                                },
                                {
                                        "models": 10,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaver’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Trophy Takers"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Red Corsairs Raiders"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Red Corsairs Raider Champion 4-9 Red Corsairs Raiders Each model is equipped with: boltgun; bolt pistol; reaver’s blade."
                },
                {
                        "id": "csm-traitor-guardsmen-squad",
                        "name": "Traitor Guardsmen Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Corrupted pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Cultist grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Cultist grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cultist sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Twisted Defence Force"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Traitor Guardsmen Squad"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Traitor Sergeant 9 Traitor Guardsmen The Traitor Sergeant is equipped with: corrupted pistol; close combat weapon. Every Traitor Guardsman is equipped with: lasgun; close combat weapon."
                },
                {
                        "id": "csm-venomcrawler",
                        "name": "Venomcrawler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 9,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Excruciator cannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Soulflayer tendrils and claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Soul Eater"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Venomcrawler"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Venomcrawler This model is equipped with: 2 excruciator cannons; soulflayer tendrils and claws."
                },
                {
                        "id": "csm-warp-talons",
                        "name": "Warp Talons",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                },
                                {
                                        "models": 10,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Warp claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warp Strike"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Packs",
                                "Grenades",
                                "Chaos",
                                "Daemon",
                                "Warp Talons"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Warp Talon Champion 4-9 Warp Talons Every model is equipped with: warp claws."
                },
                {
                        "id": "csm-noise-marines",
                        "name": "Noise Marines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blastmaster – single frequency",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Blastmaster – varied frequency",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Sonic blaster",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Terrifying Crescendo"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Slaanesh",
                                "Noise Marines"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, Emperor’s Children"
                        ],
                        "compositionText": "1 Disharmonist 5 Noise Marines Every model is equipped with: sonic blaster; close combat weapon."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(chaosSpaceMarines);
})();
