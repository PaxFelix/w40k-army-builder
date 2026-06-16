/**
 * W40K Army Builder — Drukhari (10th Edition)
 *
 * Datasheets from Codex: Drukhari. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const dru = {
        id: "drukhari",
        name: "Drukhari",
        icon: "🗡️",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Power From Pain", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Realspace Raiders",
                flavour: "",
                rule: { name: "Alliance of Agony", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Dark Vitality", cost: 25, restriction: "DRUKHARI model only." },
                    { name: "Labyrinthine Cunning", cost: 25, restriction: "ARCHON model only." },
                    { name: "Eye of Spite", cost: 15, restriction: "SUCCUBUS model only." },
                    { name: "Crucible of Malediction", cost: 20, restriction: "HAEMONCULUS model only." },
                ],
                stratagems: [
                    { name: "Insensible to Pain", cp: 2, type: "Battle Tactic" },
                    { name: "Fighting Shadows", cp: 1, type: "Battle Tactic" },
                    { name: "Instinctive Spite", cp: 1, type: "Battle Tactic" },
                    { name: "Dark Harvest", cp: 1, type: "Strategic Ploy" },
                    { name: "Eager for the Kill", cp: 1, type: "Battle Tactic" },
                    { name: "Raid and Fade", cp: 2, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Skysplinter Assault",
                flavour: "",
                rule: { name: "Rain of Cruelty", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Phantasmal Smoke", cost: 15, restriction: "DRUKHARI model only." },
                    { name: "Sadistic Fulcrum", cost: 15, restriction: "DRUKHARI model only." },
                    { name: "Spiteful Raider", cost: 10, restriction: "DRUKHARI model only." },
                    { name: "Nightmare Shroud", cost: 20, restriction: "DRUKHARI model only." },
                ],
                stratagems: [
                    { name: "Vicious Blades", cp: 1, type: "Strategic Ploy" },
                    { name: "Wraithlike Retreat", cp: 1, type: "Strategic Ploy" },
                    { name: "Pounce on the Prey", cp: 1, type: "Strategic Ploy" },
                    { name: "Skyborne Annihilation", cp: 1, type: "Battle Tactic" },
                    { name: "Swooping Mockery", cp: 1, type: "Strategic Ploy" },
                    { name: "Night Shield", cp: 1, type: "Wargear" },
                ]
            },
            {
                name: "Spectacle of Spite",
                flavour: "",
                rule: { name: "Combat Drugs", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Pharmacophex", cost: 15, restriction: "SUCCUBUS model only." },
                    { name: "Chronoshard", cost: 15, restriction: "SUCCUBUS model only." },
                    { name: "Periapt of Torments", cost: 25, restriction: "SUCCUBUS model only." },
                    { name: "Morghenna's Curse", cost: 20, restriction: "SUCCUBUS model only." },
                ],
                stratagems: [
                    { name: "Berserk Fugue", cp: 2, type: "Strategic Ploy" },
                    { name: "Deadly Debut", cp: 1, type: "Battle Tactic" },
                    { name: "Feigned Weakness", cp: 1, type: "Strategic Ploy" },
                    { name: "Preternatural Agility", cp: 1, type: "Strategic Ploy" },
                    { name: "A Challenge Met", cp: 2, type: "Battle Tactic" },
                    { name: "Acrobatic Display", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Covenite Coterie",
                flavour: "",
                rule: { name: "Stitchflesh Abominations", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Master Regenesist", cost: 25, restriction: "HAEMONCULUS model only." },
                    { name: "Master Nemesine", cost: 5, restriction: "HAEMONCULUS model only." },
                    { name: "Master Artisan", cost: 20, restriction: "HAEMONCULUS model only." },
                    { name: "Master Repugnomancer (Aura)", cost: 15, restriction: "HAEMONCULUS model only." },
                ],
                stratagems: [
                    { name: "Postmortality", cp: 1, type: "Epic Deed" },
                    { name: "Symphony of Suffering", cp: 1, type: "Epic Deed" },
                    { name: "Poisoner's Art", cp: 1, type: "Epic Deed" },
                    { name: "Distillers of Fear", cp: 2, type: "Strategic Ploy" },
                    { name: "Connoisseurs of Pain", cp: 1, type: "Battle Tactic" },
                    { name: "Enfolding Nightmare", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Kabalite Cartel",
                flavour: "",
                rule: { name: "Murderous Agenda", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Leechbite Plate", cost: 5, restriction: "ARCHON model only." },
                    { name: "Webway Awl", cost: 25, restriction: "ARCHON model only." },
                    { name: "Informant Network", cost: 30, restriction: "ARCHON model only." },
                    { name: "Towering Arrogance", cost: 20, restriction: "ARCHON model only." },
                ],
                stratagems: [
                    { name: "Double-cross", cp: 1, type: "Strategic Ploy" },
                    { name: "Taken Alive", cp: 1, type: "Battle Tactic" },
                    { name: "Tailored Toxins", cp: 1, type: "Epic Deed" },
                    { name: "Enemies Without Number", cp: 1, type: "Epic Deed" },
                    { name: "Making a Point", cp: 1, type: "Battle Tactic" },
                    { name: "Deadly Deceivers", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Reaper's Wager",
                flavour: "",
                rule: { name: "Callous Competition", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Archraider", cost: 15, restriction: "HARLEQUINS or DRUKHARI model only." },
                    { name: "Webway Walker", cost: 15, restriction: "HARLEQUINS or DRUKHARI model only." },
                    { name: "Reaper's Cowl", cost: 25, restriction: "HARLEQUINS model only." },
                    { name: "Conductor of Torment", cost: 20, restriction: "DRUKHARI model only." },
                ],
                stratagems: [
                    { name: "Malicious Frenzy", cp: 1, type: "Battle Tactic" },
                    { name: "Fateful Role", cp: 1, type: "Strategic Ploy" },
                    { name: "Murderer's Circus", cp: 1, type: "Battle Tactic" },
                    { name: "Shorten the Odds", cp: 1, type: "Strategic Ploy" },
                    { name: "Scintillating Tempo", cp: 1, type: "Strategic Ploy" },
                    { name: "Dance Macabre", cp: 2, type: "Strategic Ploy" },
                ]
            }
        ],
        units: [
                {
                        "id": "dru-archon",
                        "name": "Archon",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Agoniser",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Huskblade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Master-crafted power weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hatred Eternal",
                                        "Overlord",
                                        "Devious Mastermind",
                                        "Shadowfield",
                                        "Soul Trap"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Character",
                                "Aeldari",
                                "Archon"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following units: Hand of the Archon; Incubi; Kabalite Warriors.",
                        "compositionText": "1 Archon This model is equipped with: splinter pistol; huskblade; shadowfield."
                },
                {
                        "id": "dru-drazhar",
                        "name": "Drazhar",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Executioner’s demiklaives – single blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Executioner’s demiklaives – dual blades",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Master of Blades",
                                        "Onslaught",
                                        "Silent Executioner"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Blades For Hire",
                                "Drazhar"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Incubi.",
                        "compositionText": "1 Drazhar – EPIC HERO This model is equipped with: Executioner’s demiklaives."
                },
                {
                        "id": "dru-haemonculus",
                        "name": "Haemonculus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Stinger pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Haemonculus tools and scissorhands",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fleshcraft",
                                        "Fear Incarnate",
                                        "Pain Adept"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Haemonculus Covens",
                                "Character",
                                "Aeldari",
                                "Haemonculus"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Wracks.",
                        "compositionText": "1 Haemonculus This model is equipped with: stinger pistol; Haemonculus tools and scissorhands."
                },
                {
                        "id": "dru-lady-malys",
                        "name": "Lady Malys",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lady’s Blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Razor fan",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Archon of the Poisoned Tongue",
                                        "Precognisant",
                                        "Mind Like a Steel Trap"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Character",
                                "Aeldari",
                                "Archon",
                                "Epic Hero",
                                "Lady Malys"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following units: Hand of the Archon; Incubi; Kabalite Warriors.",
                        "compositionText": "1 Lady Malys – EPIC HERO This model is equipped with: Lady’s Blade; razor fan."
                },
                {
                        "id": "dru-lelith-hesperax",
                        "name": "Lelith Hesperax",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lelith’s blades",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brides of Death",
                                        "Blur of Blades",
                                        "Thrilling Spectacle"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Wych Cult",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Succubus",
                                "Lelith Hesperax"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Wyches.",
                        "compositionText": "1 Lelith Hesperax – EPIC HERO This model is equipped with: Lelith’s blades."
                },
                {
                        "id": "dru-succubus",
                        "name": "Succubus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Archite glaive and agoniser",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lithe Agility",
                                        "Storm of Blades",
                                        "Bloody Spectacle"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Wych Cult",
                                "Character",
                                "Aeldari",
                                "Succubus"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Wyches.",
                        "compositionText": "1 Succubus This model is equipped with: Archite glaive and agoniser."
                },
                {
                        "id": "dru-kharseth",
                        "name": "Kharseth",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dread of the Deep Void",
                                                "range": "24\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast",
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Waystave",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aethersense",
                                        "Fury of the Void"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Anhrathe",
                                "Kharseth"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Kharseth – EPIC HERO This model is equipped with: Dread of the Deep Void; Waystave."
                },
                {
                        "id": "dru-prince-yriel",
                        "name": "Prince Yriel",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eye of Wrath",
                                                "range": "6\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Spear of Twilight",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Piratical Hero",
                                        "Prince of Corsairs"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Character",
                                "Epic Hero",
                                "Anhrathe",
                                "Prince Yriel"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Prince Yriel – EPIC HERO This model is equipped with: Eye of Wrath; shuriken pistol; Spear of Twilight."
                },
                {
                        "id": "dru-kabalite-warriors",
                        "name": "Kabalite Warriors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sadistic Raiders",
                                        "Cruel Enforcers",
                                        "Kabalite Icon",
                                        "Phantasm Grenade Launcher"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Battleline",
                                "Aeldari",
                                "Kabalite Warriors"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Sybarite 9 Kabalite Warriors Every model is equipped with: splinter rifle; close combat weapon."
                },
                {
                        "id": "dru-wracks",
                        "name": "Wracks",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 8,
                                        "cost": 100
                                },
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hexrifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Liquifier gun",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ossefactor",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Stinger pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Torturer’s tools",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Twin torturer’s tools",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Experimental Enhancements",
                                        "Torturer’s Craft"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Haemonculus Covens",
                                "Aeldari",
                                "Wracks"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Acothyst 4-9 Wracks Every model is equipped with: twin torturer’s tools."
                },
                {
                        "id": "dru-wyches",
                        "name": "Wyches",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gladiatorial weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hekatarii blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic Gladiators",
                                        "No Escape"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Wych Cult",
                                "Aeldari",
                                "Wyches"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Hekatrix 9 Wyches Every model is equipped with: splinter pistol; Hekatarii blade."
                },
                {
                        "id": "dru-corsair-voidreavers",
                        "name": "Corsair Voidreavers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                },
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Wraithcannon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Reavers of the Void",
                                        "Mistshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Anhrathe",
                                "Corsair Voidreavers"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "1 Voidreaver Felarch 4-9 Corsair Voidreavers Every model is equipped with: shuriken pistol; power sword; close combat weapon."
                },
                {
                        "id": "dru-raider",
                        "name": "Raider",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes and chainsnares",
                                                "range": "Melee",
                                                "a": "D3+3",
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Deep Strike",
                                        "Firing Deck 11"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Splinter Racks",
                                        "Vanguard of the Dark City"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Aeldari",
                                "Raider"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Raider This model is equipped with: dark lance; bladevanes and chainsnares. TRANSPORT This model has a transport capacity of 11 DRUKHARI INFANTRY models (excluding JUMP PACK models)."
                },
                {
                        "id": "dru-venom",
                        "name": "Venom",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Deep Strike",
                                        "Firing Deck 6",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment",
                                        "Aerialists"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Aeldari",
                                "Venom"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Venom This model is equipped with: splinter cannon; twin splinter rifle; bladevanes. TRANSPORT This model has a transport capacity of 6 DRUKHARI INFANTRY models (excluding JUMP PACK models). Before the battle, at the start of the Declare Battle Formations step, you can select one KABALITE WARRIORS, HAND OF THE ARCHON or WYCHES unit from your army that has not already been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units]. One of these units must start the battle embarked within this model; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "dru-cronos",
                        "name": "Cronos",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                },
                                {
                                        "models": 2,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Spirit syphon",
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
                                                "name": "Spirit vortex",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Spirit-leech tentacles",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pain Parasite",
                                        "Pain Engine",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Haemonculus Covens",
                                "Fly",
                                "Aeldari",
                                "Cronos"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1-2 Cronos Every Cronos is equipped with: spirit syphon; spirit-leech tentacles."
                },
                {
                        "id": "dru-hand-of-the-archon",
                        "name": "Hand of the Archon",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Shardcarbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Stinger pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pain sculptors",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Razorflail",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assassins’ Poisons",
                                        "Archon’s Will",
                                        "Kabalite Icon",
                                        "Phantasm Grenade Launcher",
                                        "Stimm-needler"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Aeldari",
                                "Grenades",
                                "Hand Of The Archon"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Kabalite Archsybarite 9 Kabalite Agents Every model is equipped with: splinter rifle; close combat weapon. ARCHON’S RETINUE If this unit has a Leader unit attached to it during the Declare Battle Formations step, that Leader unit gains the Scouts 7\" ability."
                },
                {
                        "id": "dru-hellions",
                        "name": "Hellions",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pods",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellglaive",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Lance",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Stunclaw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Lance",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Battlefield Butchery",
                                        "Skyboard Evasion",
                                        "Phantasm Grenade Launcher"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Fly",
                                "Aeldari",
                                "Wych Cult",
                                "Hellions"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Helliarch 4-9 Hellions Every model is equipped with: splinter pods; hellglaive."
                },
                {
                        "id": "dru-incubi",
                        "name": "Incubi",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                },
                                {
                                        "models": 10,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Demiklaives – single blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Demiklaives – dual blades",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Klaive",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Decapitating Strikes",
                                        "Tormentors",
                                        "Incubi Shrine Token",
                                        "Designer's Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Blades For Hire",
                                "Incubi"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Klaivex 4-9 Incubi Every model is equipped with: klaive."
                },
                {
                        "id": "dru-mandrakes",
                        "name": "Mandrakes",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baleblast",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Devastating Wounds",
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Glimmersteel blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fade Away",
                                        "Shade Weavers"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Blades For Hire",
                                "Mandrakes"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Nightfiend 4-9 Mandrakes Every model is equipped with: baleblast; glimmersteel blade."
                },
                {
                        "id": "dru-ravager",
                        "name": "Ravager",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Agonising Suppression",
                                        "Eradicate the Foe"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Kabal",
                                "Fly",
                                "Aeldari",
                                "Ravager"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Ravager This model is equipped with: 3 dark lances; bladevanes. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time it makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dru-razorwing-jetfighter",
                        "name": "Razorwing Jetfighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark Lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Razorwing missiles – monoscythe missiles",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Razorwing missiles – neurotoxin missiles",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Razorwing missiles – shatterfield missiles",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladed wings",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Nowhere to Run",
                                        "Ground Attack Craft"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Aeldari",
                                "Razorwing Jetfighter"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Razorwing Jetfighter This model is equipped with: 2 dark lances; Razorwing missiles; twin splinter rifle; bladed wings."
                },
                {
                        "id": "dru-reavers",
                        "name": "Reavers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 70
                                },
                                {
                                        "models": 6,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "16\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Heat lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Matchless Swiftness",
                                        "Eviscerating Fly-by",
                                        "Cluster Caltrops",
                                        "Grav-talon"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Wych Cult",
                                "Fly",
                                "Aeldari",
                                "Reavers"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Arena Champion 2-5 Reavers Every model is equipped with: splinter pistol; splinter rifle; bladevanes."
                },
                {
                        "id": "dru-scourges-with-heavy-weapons",
                        "name": "Scourges with Heavy Weapons",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Haywire blaster",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Heat lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Heavy",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Shardcarbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Winged Strike",
                                        "Airborne Evasion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Grenades",
                                "Jump Pack",
                                "Aeldari",
                                "Blades For Hire",
                                "Scourges",
                                "Scourges With Heavy Weapons"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Solarite 4 Scourges The Solarite is equipped with: shardcarbine; close combat weapon. Every Scourge is equipped with: splinter cannon; close combat weapon."
                },
                {
                        "id": "dru-scourges-with-shardcarbines",
                        "name": "Scourges with Shardcarbines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shardcarbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swooping Descent",
                                        "Murderous Crossfire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Grenades",
                                "Jump Pack",
                                "Aeldari",
                                "Blades For Hire",
                                "Scourges",
                                "Scourges With Shardcarbines"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Solarite 4 Scourges The Solarite is equipped with: shardcarbine; close combat weapon."
                },
                {
                        "id": "dru-talos",
                        "name": "Talos",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                },
                                {
                                        "models": 2,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Stinger pod",
                                                "range": "24\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin haywire blaster",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heat lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin liquifier gun",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chain-flails",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Macro-scalpel",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Talos gauntlet",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Talos ichor injector",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mindless Killing Machines",
                                        "Devoted to Pain",
                                        "Torture Device"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Haemonculus Covens",
                                "Fly",
                                "Aeldari",
                                "Talos"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1-2 Talos Every model is equipped with: twin splinter cannon; 2 macro-scalpels."
                },
                {
                        "id": "dru-voidraven-bomber",
                        "name": "Voidraven Bomber",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 245
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 0
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark scythe",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Void lance",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Voidraven missiles – implosion missiles",
                                                "range": "48\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Voidraven missiles – shatterfield missiles",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladed wings",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Nowhere to Hide",
                                        "Void Mine"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Aeldari",
                                "Voidraven Bomber"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Voidraven Bomber This model is equipped with: 2 void lances; bladed wings. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dru-corsair-skyreavers",
                        "name": "Corsair Skyreavers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Assault",
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
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Corsair blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Raid and Run"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Anhrathe",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Corsair Skyreavers"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "1 Skyreaver Felarch 4-9 Skyreavers Every model is equipped with: shuriken pistol; Corsair blade."
                },
                {
                        "id": "dru-corsair-voidscarred",
                        "name": "Corsair Voidscarred",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 80
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Executioner",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Long rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Wraithcannon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paired Hekatarii blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Witch staff",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Piratical Raiders",
                                        "Channeller Stones",
                                        "Faolchú",
                                        "Mistshield"
                                ]
                        },
                        "keywords": [
                                "Drukhari",
                                "Asuryani"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "This unit can contain a maximum of 10 models. 1 Voidscarred Felarch 4-9 Corsair Voidscarred 0-1 Shade Runner 0-1 Soul Weaver 0-1 Way Seeker Every Corsair Voidscarred and Voidscarred Felarch is equipped with: shuriken pistol; power sword; close combat weapon. A Shade Runner is equipped with: shuriken pistol; paired Hekatarii blades. A Soul Weaver is equipped with: shuriken pistol; power sword; channeller stones. A Way Seeker is equipped with: shuriken pistol; Executioner; witch staff. KEYWORDS – ALL MODELS: INFANTRY, AELDARI, GRENADES, ANHRATHE, CORSAIR VOIDSCARREDWAY SEEKER: PSYKER FACTION"
                },
                {
                        "id": "dru-starfangs",
                        "name": "Starfangs",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                },
                                {
                                        "models": 2,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Starfang grenade launcher",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Wraithbone hull",
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
                                        "Deadly Demise 1",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hallucinogen Grenades"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Anhrathe",
                                "Fly",
                                "Smoke",
                                "Grenades",
                                "Starfangs"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "1-2 Starfangs Every model is equipped with: disintegrator cannon; Starfang grenade launcher; wraithbone hull."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(dru);
})();
