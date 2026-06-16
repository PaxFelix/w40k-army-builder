/**
 * W40K Army Builder — Aeldari (10th Edition)
 *
 * Asuryani (Craftworlds), Harlequins and Ynnari datasheets from Codex: Aeldari.
 * Names-only abilities/rules; stats, weapons, points and keywords are factual
 * game data. Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const aeldari = {
        id: "aeldari",
        name: "Aeldari",
        icon: "\uD83C\uDF00",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Strands of Fate", flavour: "", text: "" }
        ],
        detachments: [],
        units: [
                {
                        "id": "ae-asurmen",
                        "name": "Asurmen",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
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
                                "ranged": [
                                        {
                                                "name": "Bloody Twins",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sword of Asur",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tactical Acumen",
                                        "Hand of Asuryan"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Asurmen"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Dire Avengers.",
                        "compositionText": "1 Asurmen – EPIC HERO This model is equipped with: Bloody Twins; Sword of Asur."
                },
                {
                        "id": "ae-autarch",
                        "name": "Autarch",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death spinner",
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
                                        },
                                        {
                                                "name": "Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Dragon fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starswarm",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
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
                                                "name": "Banshee blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion chainsword",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Star glaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Superlative Strategist",
                                        "Path of Command"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Grenades",
                                "Autarch"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Dark Reapers; Dire Avengers; Fire Dragons; Guardian Defenders; Howling Banshees; Storm Guardians; Striking Scorpions.",
                        "compositionText": "1 Autarch This model is equipped with: shuriken pistol; star glaive."
                },
                {
                        "id": "ae-autarch-wayleaper",
                        "name": "Autarch Wayleaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death spinner",
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
                                        },
                                        {
                                                "name": "Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Dragon fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starswarm",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
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
                                                "name": "Banshee blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion chainsword",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Star glaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Indomitable Strength of Will",
                                        "Path of Command"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Autarch Wayleaper"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Swooping Hawks; Warp Spiders.",
                        "compositionText": "1 Autarch Wayleaper This model is equipped with: shuriken pistol; star glaive."
                },
                {
                        "id": "ae-avatar-of-khaine",
                        "name": "Avatar of Khaine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 280
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "The Wailing Doom",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Sustained Hits D3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "The Wailing Doom – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "The Wailing Doom – sweep",
                                                "range": "Melee",
                                                "a": 12,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Molten Form",
                                        "The Bloody-Handed"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Daemon",
                                "Avatar Of Khaine"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Avatar of Khaine – EPIC HERO This model is equipped with: the Wailing Doom DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-baharroth",
                        "name": "Baharroth",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fury of the Tempest",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Shining Blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cloudstrider",
                                        "Cry of the Wind"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Baharroth"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Swooping Hawks.",
                        "compositionText": "1 Baharroth – EPIC HERO This model is equipped with: Fury of the Tempest; Shining Blade."
                },
                {
                        "id": "ae-death-jester",
                        "name": "Death Jester",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
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
                                "ranged": [
                                        {
                                                "name": "Shrieker cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Jester’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death is Not Enough",
                                        "Cruel Amusement",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Death Jester"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Death Jester This model is equipped with: shrieker cannon; Jester’s blade; flip belt."
                },
                {
                        "id": "ae-eldrad-ulthran",
                        "name": "Eldrad Ulthran",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mind War",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Anti-Character 4+",
                                                        "Precision",
                                                        "Psychic"
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
                                                "name": "Staff of Ulthamar and witchblade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Diviner of Futures",
                                        "Doom"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Psyker",
                                "Farseer",
                                "Eldrad Ulthran"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Guardian Defenders; Storm Guardians; Warlock Conclave.",
                        "compositionText": "1 Eldrad Ulthran – EPIC HERO This model is equipped with: Mind War; shuriken pistol; Staff of Ulthamar and witchblade."
                },
                {
                        "id": "ae-farseer",
                        "name": "Farseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
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
                                                "name": "Eldritch Storm",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Branching Fates",
                                        "Guide"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Farseer"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Guardian Defenders; Storm Guardians; Warlock Conclave.",
                        "compositionText": "1 Farseer This model is equipped with: Eldritch Storm; shuriken pistol; witchblade."
                },
                {
                        "id": "ae-farseer-skyrunner",
                        "name": "Farseer Skyrunner",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eldritch Storm",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
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
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Branching Fates",
                                        "Misfortune"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Aeldari",
                                "Fly",
                                "Psyker",
                                "Farseer",
                                "Farseer Skyrunner"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Windriders.",
                        "compositionText": "1 Farseer Skyrunner This model is equipped with: Eldritch Storm; shuriken pistol; twin shuriken catapult; witchblade."
                },
                {
                        "id": "ae-fuegan",
                        "name": "Fuegan",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
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
                                "ranged": [
                                        {
                                                "name": "Searsong – beam",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 1",
                                                        "Sustained Hits 2"
                                                ]
                                        },
                                        {
                                                "name": "Searsong – lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 6"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fire Axe",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Burning Lance",
                                        "Unquenchable Resolve"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Fuegan"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Fire Dragons.",
                        "compositionText": "1 Fuegan – EPIC HERO This model is equipped with: Searsong; Fire Axe."
                },
                {
                        "id": "ae-jain-zar",
                        "name": "Jain Zar",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Silent Death",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blade of Destruction",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Whirling Death",
                                        "Storm of Silence"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Jain Zar"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Howling Banshees.",
                        "compositionText": "1 Jain Zar – EPIC HERO This model is equipped with: Silent Death; Blade of Destruction."
                },
                {
                        "id": "ae-kharseth",
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
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Kharseth – EPIC HERO This model is equipped with: Dread of the Deep Void; Waystave."
                },
                {
                        "id": "ae-lhykhis",
                        "name": "Lhykhis",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Brood Twain",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Spider’s Fangs",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Weaverender",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Empyric Ambush",
                                        "Whispering Web"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Lhykhis"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Warp Spiders.",
                        "compositionText": "1 Lhykhis – EPIC HERO This model is equipped with: Brood Twain; Spider’s Fangs; Weaverender."
                },
                {
                        "id": "ae-maugan-ra",
                        "name": "Maugan Ra",
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
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Maugetar",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Maugetar",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Harvester of Souls",
                                        "Face of Death"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Maugan Ra"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Dark Reapers.",
                        "compositionText": "1 Maugan Ra This model is equipped with: Maugetar."
                },
                {
                        "id": "ae-prince-yriel",
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
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Prince Yriel – EPIC HERO This model is equipped with: Eye of Wrath; shuriken pistol; Spear of Twilight."
                },
                {
                        "id": "ae-shadowseer",
                        "name": "Shadowseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
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
                                "ranged": [
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
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
                                                "name": "Miststave",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
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
                                        "Leader",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fog of Dreams",
                                        "Treacherous Illusion",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Grenades",
                                "Shadowseer"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "leaderText": "This model can be attached to the following unit: Troupe.",
                        "compositionText": "1 Shadowseer This model is equipped with: shuriken pistol; miststave; flip belt."
                },
                {
                        "id": "ae-solitaire",
                        "name": "Solitaire",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "12\"",
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
                                                "name": "Solitaire weapons",
                                                "range": "Melee",
                                                "a": 9,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blitz",
                                        "Blur of Movement",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Solitaire"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Solitaire – EPIC HERO This model is equipped with: Solitaire weapons, flip belt."
                },
                {
                        "id": "ae-spiritseer",
                        "name": "Spiritseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spiritseer",
                                        "Spirit Mark",
                                        "Tears of Isha"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Spiritseer"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Spiritseer This model is equipped with: shuriken pistol; witch staff."
                },
                {
                        "id": "ae-the-visarch",
                        "name": "The Visarch",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "8\"",
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
                                                "name": "Asu-var – quicksilver stance",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        },
                                        {
                                                "name": "Asu-var – duellist stance",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Asu-var – mythic stance",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Epic Hero 2+",
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Way of the Blade",
                                        "Yvraine’s Champion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "The Visarch"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred; Guardian Defenders; Storm Guardians; Ynnari Incubi; Ynnari Kabalite Warriors; Ynnari Wyches.",
                        "compositionText": "1 Visarch – EPIC HERO This model is equipped with: Asu-var."
                },
                {
                        "id": "ae-the-yncarne",
                        "name": "The Yncarne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 260
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Swirling soul energy",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vilith-zhar – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Vilith-zhar – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -4,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Inevitable Death",
                                        "Ethereal Form"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Fly",
                                "Psyker",
                                "Daemon",
                                "The Yncarne"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Yncarne – EPIC HERO This model is equipped with: swirling soul energy; Vilith-zhar."
                },
                {
                        "id": "ae-troupe-master",
                        "name": "Troupe Master",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
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
                                "ranged": [
                                        {
                                                "name": "Fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
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
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
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
                                                "name": "Harlequin’s special weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Troupe Master’s blade",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Choreographer of War",
                                        "Cegorach’s Favour",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Grenades",
                                "Troupe Master"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "leaderText": "This model can be attached to the following unit: Troupe.",
                        "compositionText": "1 Troupe Master This model is equipped with: shuriken pistol; Troupe Master’s blade; flip belt."
                },
                {
                        "id": "ae-warlock",
                        "name": "Warlock",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Destructor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Runes of Fortune",
                                        "Psychic Communion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Warlock"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Guardian Defenders; Storm Guardians.",
                        "compositionText": "1 Warlock This model is equipped with: Destructor; shuriken pistol; witchblade."
                },
                {
                        "id": "ae-ynnari-archon",
                        "name": "Ynnari Archon",
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
                                                "name": "Huskblade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Overlord",
                                        "Reborn Mastermind",
                                        "Shadow Field"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Archon"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following units: Ynnari Incubi; Ynnari Kabalite Warriors.",
                        "compositionText": "1 Archon This model is equipped with: splinter pistol; huskblade; shadow field."
                },
                {
                        "id": "ae-ynnari-succubus",
                        "name": "Ynnari Succubus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
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
                                                "name": "Succubus weapons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Storm of Blades",
                                        "Empowered by Death"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Succubus"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Ynnari Wyches.",
                        "compositionText": "1 Succubus This model is equipped with: Succubus weapons."
                },
                {
                        "id": "ae-yvraine",
                        "name": "Yvraine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
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
                                "ranged": [
                                        {
                                                "name": "Storm of Whispers",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Kha-vir",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -3,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Word of the Phoenix",
                                        "Herald of Ynnead"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Psyker",
                                "Yvraine"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred; Guardian Defenders; Storm Guardians; Ynnari Incubi; Ynnari Kabalite Warriors; Ynnari Wyches.",
                        "compositionText": "1 Yvraine – EPIC HERO This model is equipped with: Storm of Whispers; Kha-vir."
                },
                {
                        "id": "ae-corsair-voidreavers",
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
                                "Asuryani"
                        ],
                        "compositionText": "1 Voidreaver Felarch 4-9 Corsair Voidreavers Every model is equipped with: shuriken pistol; power sword; close combat weapon."
                },
                {
                        "id": "ae-guardian-defenders",
                        "name": "Guardian Defenders",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 100
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
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fleet of Foot",
                                        "Crewed Platform"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Guardians",
                                "Guardian Defenders"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "10 Guardian Defenders 1 Heavy Weapon Platform Every Guardian Defender is equipped with: shuriken catapult; close combat weapon. The Heavy Weapon Platform is equipped with: shuriken cannon; close combat weapon."
                },
                {
                        "id": "ae-storm-guardians",
                        "name": "Storm Guardians",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 11,
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
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stormblades",
                                        "Crewed Platform",
                                        "Serpent Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Guardians",
                                "Storm Guardians"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "10 Storm Guardians 1 Serpent’s Scale Platform Every Storm Guardian is equipped with: shuriken pistol; close combat weapon. The Serpent’s Scale Platform is equipped with: close combat weapon; Serpent shield."
                },
                {
                        "id": "ae-ynnari-kabalite-warriors",
                        "name": "Ynnari Kabalite Warriors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
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
                                                "name": "Sybarite weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sadistic Raiders",
                                        "Phantasm Grenade Launcher"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Kabalite Warriors"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Sybarite 9 Kabalite Warriors Every model is equipped with: splinter rifle; close combat weapon."
                },
                {
                        "id": "ae-ynnari-wyches",
                        "name": "Ynnari Wyches",
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
                                "ld": "6+",
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
                                                "name": "Hekatarii blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "No Escape"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Wyches"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Hekatrix 9 Wyches Every model is equipped with: splinter pistol; Hekatarii blade."
                },
                {
                        "id": "ae-starweaver",
                        "name": "Starweaver",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deadly Demise 1",
                                        "Firing Deck 6"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Embarkation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Fly",
                                "Starweaver"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Starweaver This model is equipped with: 2 shuriken cannons; close combat weapon. TRANSPORT This model has a transport capacity of 6 HARLEQUINS INFANTRY models."
                },
                {
                        "id": "ae-wave-serpent",
                        "name": "Wave Serpent",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Twin missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Wave Serpent Shield"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Wave Serpent"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wave Serpent This model is equipped with: twin shuriken cannon; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 AELDARI INFANTRY models. Each WRAITH CONSTRUCT model takes the space of 2 models. It cannot transport JUMP PACK models or YNNARI models (excluding ASURYANI, YVRAINE and THE VISARCH models)."
                },
                {
                        "id": "ae-ynnari-raider",
                        "name": "Ynnari Raider",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 10,
                                "ld": "6+",
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
                                                "s": 5,
                                                "ap": -2,
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
                                                "ap": 0,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aethersails"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Raider"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Raider This model is equipped with: dark lance; bladevanes. TRANSPORT This model has a transport capacity of 11 models from the following units: THE VISARCH, YNNARI ARCHON, YNNARI INCUBI, YNNARI KABALITE WARRIORS, YNNARI SUCCUBUS, YNNARI WYCHES, YVRAINE"
                },
                {
                        "id": "ae-ynnari-venom",
                        "name": "Ynnari Venom",
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
                                "ld": "6+",
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
                                                        "Rapid Fire 1",
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
                                                "ap": 0,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lithe Embarkation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Venom"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Venom This model is equipped with: splinter cannon; twin splinter rifle; bladevanes. TRANSPORT This model has a transport capacity of 6 models from the following units: THE VISARCH, YNNARI ARCHON, YNNARI INCUBI, YNNARI KABALITE WARRIORS, YNNARI SUCCUBUS, YNNARI WYCHES, YVRAINE. Before the battle, at the start of the Declare Battle Formations step, you can select one YNNARI KABALITE WARRIORS or YNNARI WYCHES unit from your army that has not already been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "ae-corsair-skyreavers",
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
                                "Asuryani"
                        ],
                        "compositionText": "1 Skyreaver Felarch 4-9 Skyreavers Every model is equipped with: shuriken pistol; Corsair blade."
                },
                {
                        "id": "ae-corsair-voidscarred",
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
                                "Asuryani"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "This unit can contain a maximum of 10 models. 1 Voidscarred Felarch 4-9 Corsair Voidscarred 0-1 Shade Runner 0-1 Soul Weaver 0-1 Way Seeker Every Corsair Voidscarred and Voidscarred Felarch is equipped with: shuriken pistol; power sword; close combat weapon. A Shade Runner is equipped with: shuriken pistol; paired Hekatarii blades. A Soul Weaver is equipped with: shuriken pistol; power sword; channeller stones. A Way Seeker is equipped with: shuriken pistol; Executioner; witch staff. KEYWORDS – ALL MODELS: INFANTRY, AELDARI, GRENADES, ANHRATHE, CORSAIR VOIDSCARREDWAY SEEKER: PSYKER FACTION"
                },
                {
                        "id": "ae-crimson-hunter",
                        "name": "Crimson Hunter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse laser",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Skyhunter"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Aircraft",
                                "Aspect Warrior",
                                "Crimson Hunter"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Crimson Hunter This model is equipped with: 2 starcannons; pulse laser; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-d-cannon-platform",
                        "name": "D-cannon Platform",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "D-cannon",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Support Weapon",
                                        "Structural Collapse"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Support Weapon",
                                "D-Cannon Platform"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 D-cannon Platform This model is equipped with: D-cannon; shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-dark-reapers",
                        "name": "Dark Reapers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                },
                                {
                                        "models": 10,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starswarm",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
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
                                                        "Ignores Cover",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Tempest launcher",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Inescapable Accuracy",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Aspect Warriors",
                                "Dark Reapers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Dark Reaper Exarch 4-9 Dark Reapers Every model is equipped with: Reaper launcher; close combat weapon."
                },
                {
                        "id": "ae-dire-avengers",
                        "name": "Dire Avengers",
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
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger shuriken catapult",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
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
                                                "name": "Diresword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power glaive",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bladestorm",
                                        "Shimmershield",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warriors",
                                "Dire Avengers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Dire Avenger Exarch 4-9 Dire Avengers Every model is equipped with: Avenger shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-falcon",
                        "name": "Falcon",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Pulse laser",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Fly",
                                "Falcon"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Falcon This model is equipped with: pulse laser; scatter laser; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 6 AELDARI INFANTRY models. Each WRAITH CONSTRUCT model takes the space of 2 models. It cannot transport JUMP PACK models or YNNARI models (excluding ASURYANI, YVRAINE and THE VISARCH models)."
                },
                {
                        "id": "ae-fire-dragons",
                        "name": "Fire Dragons",
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
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Dragon fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Dragon’s breath flamer",
                                                "range": "12\"",
                                                "a": "D6+2",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Exarch’s Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 6"
                                                ]
                                        },
                                        {
                                                "name": "Firepike",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
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
                                                "name": "Dragon axe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assured Destruction",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warriors",
                                "Fire Dragons"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Fire Dragon Exarch 4-9 Fire Dragons The Fire Dragon Exarch is equipped with: Exarch’s Dragon fusion gun; close combat weapon. Every Fire Dragon is equipped with: Dragon fusion gun; close combat weapon."
                },
                {
                        "id": "ae-fire-prism",
                        "name": "Fire Prism",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Prism cannon – dispersed pulse",
                                                "range": "60\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Prism cannon – focused lances",
                                                "range": "60\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": [
                                                        "Linked Fire"
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
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crystal Matrix"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Fire Prism"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Fire Prism This model is equipped with: prism cannon; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-hemlock-wraithfighter",
                        "name": "Hemlock Wraithfighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 155
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy D-scythe",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": 2,
                                                "keywords": [
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Mindshock Pod"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Aircraft",
                                "Psyker",
                                "Wraith Construct",
                                "Hemlock Wraithfighter"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Hemlock Wraithfighter This model is equipped with: 2 heavy D-scythes; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-howling-banshees",
                        "name": "Howling Banshees",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 95
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "name": "Triskele",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Banshee blade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Executioner",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Mirrorswords",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Triskele",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Aspect Warriors",
                                "Howling Banshees"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Howling Banshee Exarch 4-9 Howling Banshees Every model is equipped with: shuriken pistol; Banshee blade."
                },
                {
                        "id": "ae-night-spinner",
                        "name": "Night Spinner",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Doomweaver",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
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
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Monofilament Web"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Night Spinner"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Night Spinner This model is equipped with: doomweaver; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-rangers",
                        "name": "Rangers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 55
                                },
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Path of the Outcast"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Rangers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "5-10 Rangers Every model is equipped with: long rifle; shuriken pistol; close combat weapon."
                },
                {
                        "id": "ae-shadow-weaver-platform",
                        "name": "Shadow Weaver Platform",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Shadow weaver",
                                                "range": "48\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Support Weapon",
                                        "Monofilament Snare"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Support Weapon",
                                "Shadow Weaver Platform"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Shadow Weaver Platform This model is equipped with: shadow weaver; shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-shining-spears",
                        "name": "Shining Spears",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 110
                                },
                                {
                                        "models": 6,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Laser lance",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault"
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
                                                "name": "Star lance",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Laser lance",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Monster 3+",
                                                        "Anti-Vehicle 3+",
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Paragon sabre",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Star lance",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Monster 3+",
                                                        "Anti-Vehicle 3+",
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Extreme Mobility",
                                        "Shimmershield"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Aspect Warriors",
                                "Shining Spears"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Shining Spear Exarch 2-5 Shining Spears Every model is equipped with: laser lance; twin shuriken catapult."
                },
                {
                        "id": "ae-shroud-runners",
                        "name": "Shroud Runners",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 80
                                },
                                {
                                        "models": 6,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Long rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Scouts 9\"",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Target Acquisition"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Shroud Runners"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "3-6 Shroud Runners Every model is equipped with: long rifle; scatter laser; shuriken pistol; close combat weapon."
                },
                {
                        "id": "ae-skyweavers",
                        "name": "Skyweavers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 95
                                },
                                {
                                        "models": 4,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Skyweaver haywire cannon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Star bolas",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Zephyrglaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic Grace"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Smoke",
                                "Skyweavers"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "2-4 Skyweavers Every model is equipped with: shuriken cannon; star bolas; close combat weapon."
                },
                {
                        "id": "ae-starfangs",
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
                                "Asuryani"
                        ],
                        "compositionText": "1-2 Starfangs Every model is equipped with: disintegrator cannon; Starfang grenade launcher; wraithbone hull."
                },
                {
                        "id": "ae-striking-scorpions",
                        "name": "Striking Scorpions",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 150
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
                                "ranged": [
                                        {
                                                "name": "Chainsabres",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Twin-Linked"
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
                                                "name": "Biting blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Chainsabres",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion’s claw",
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
                                        "Infiltrators",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mandiblasters",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Aspect Warriors",
                                "Striking Scorpions"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Striking Scorpion Exarch 4-9 Striking Scorpions The Striking Scorpion Exarch is equipped with: shuriken pistol; Scorpion chainsword; Scorpion’s claw. Every Striking Scorpion is equipped with: shuriken pistol; Scorpion chainsword."
                },
                {
                        "id": "ae-swooping-hawks",
                        "name": "Swooping Hawks",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 95
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exarch’s lasblaster",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hawk’s talon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Lasblaster",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Sunpistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits",
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grenade Pack Flyover",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Aspect Warriors",
                                "Swooping Hawks"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Swooping Hawk Exarch 4-9 Swooping Hawks The Swooping Hawk Exarch is equipped with: Hawk’s talon; close combat weapon. Every Swooping Hawk is equipped with: lasblaster; close combat weapon."
                },
                {
                        "id": "ae-troupe",
                        "name": "Troupe",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 6,
                                        "cost": 100
                                },
                                {
                                        "models": 11,
                                        "cost": 190
                                },
                                {
                                        "models": 12,
                                        "cost": 205
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Harlequin’s blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Harlequin’s special weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dance of Death",
                                        "Hero’s Prowess",
                                        "Villain’s Doom",
                                        "Trickster’s Grace",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Grenades",
                                "Troupe"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Lead Player 4-11 Players Every model is equipped with: shuriken pistol; Harlequin’s blade, flip belt."
                },
                {
                        "id": "ae-vibro-cannon-platform",
                        "name": "Vibro Cannon Platform",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Vibro cannon",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 2,
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Support Weapon",
                                        "Sonic Destruction"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Support Weapon",
                                "Vibro Cannon Platform"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Vibro Cannon Platform This model is equipped with: vibro cannon; shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-voidweaver",
                        "name": "Voidweaver",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Prismatic cannon – dispersed pulse",
                                                "range": "24\"",
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
                                                "name": "Prismatic cannon – focused lances",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": []
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
                                                "name": "Voidweaver haywire cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deadly Demise 1",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Polychromatic Camouflage"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Voidweaver"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Voidweaver This model is equipped with: 2 shuriken cannons; Voidweaver haywire cannon; close combat weapon."
                },
                {
                        "id": "ae-vypers",
                        "name": "Vypers",
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
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
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
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Harassment Fire"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Vypers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1-2 Vypers Every model is equipped with: shuriken cannon; bright lance; wraithbone hull."
                },
                {
                        "id": "ae-war-walkers",
                        "name": "War Walkers",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "War Walker feet",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crystalline Targeting"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Walker",
                                "War Walkers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1-2 War Walkers Every model is equipped with: 2 shuriken cannons; War Walker feet."
                },
                {
                        "id": "ae-warlock-conclave",
                        "name": "Warlock Conclave",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 55
                                },
                                {
                                        "models": 4,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Destructor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Protect",
                                        "Psychic Communion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Psyker",
                                "Warlocks",
                                "Warlock Conclave"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "2-4 Warlocks Every model is equipped with: Destructor; shuriken pistol; witchblade."
                },
                {
                        "id": "ae-warlock-skyrunners",
                        "name": "Warlock Skyrunners",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                },
                                {
                                        "models": 2,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Destructor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Runes of Battle",
                                        "Psychic Communion"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Psyker",
                                "Warlocks",
                                "Warlock Skyrunners"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1-2 Warlock Skyrunners Every model is equipped with: Destructor; shuriken pistol; twin shuriken catapult; witchblade."
                },
                {
                        "id": "ae-warp-spiders",
                        "name": "Warp Spiders",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 105
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death spinner",
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
                                        },
                                        {
                                                "name": "Death weavers",
                                                "range": "6\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Exarch’s death spinner",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Spinneret rifle",
                                                "range": "18\"",
                                                "a": "D6",
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
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Powerblade array",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Powerblades",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Flickerjump",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Aspect Warriors",
                                "Warp Spiders"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Warp Spider Exarch 4-9 Warp Spiders The Warp Spider Exarch is equipped with: Exarch’s death spinner; close combat weapon. Every Warp Spider is equipped with: death spinner; close combat weapon."
                },
                {
                        "id": "ae-windriders",
                        "name": "Windriders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 80
                                },
                                {
                                        "models": 6,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "14\"",
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
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swift Demise"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Windriders"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "3-6 Windriders Every model is equipped with: twin shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-wraithblades",
                        "name": "Wraithblades",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ghostaxe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ghostswords",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Malevolent Souls",
                                        "Psychic Guidance",
                                        "Forceshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Wraith Construct",
                                "Wraithblades"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "5 Wraithblades Every model is equipped with: ghostswords."
                },
                {
                        "id": "ae-wraithguard",
                        "name": "Wraithguard",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Wraithcannon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "D-scythe",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "War Construct",
                                        "Psychic Guidance"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Wraith Construct",
                                "Wraithguard"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "5 Wraithguard Every model is equipped with: wraithcannon; close combat weapon."
                },
                {
                        "id": "ae-wraithknight",
                        "name": "Wraithknight",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 435
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy wraithcannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 20,
                                                "ap": -4,
                                                "d": "2D6",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Suncannon",
                                                "range": "48\"",
                                                "a": "D6+4",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Titanic Strides",
                                        "Point-blank Devastation",
                                        "Scattershield"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Titanic",
                                "Towering",
                                "Aeldari",
                                "Walker",
                                "Wraith Construct",
                                "Wraithknight"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wraithknight This model is equipped with: suncannon; titanic feet; scattershield. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-wraithknight-with-ghostglaive",
                        "name": "Wraithknight with Ghostglaive",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 420
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy wraithcannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 20,
                                                "ap": -4,
                                                "d": "2D6",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Titanic ghostglaive – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Titanic ghostglaive – sweep",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Titanic Agility",
                                        "Scattershield"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Titanic",
                                "Towering",
                                "Aeldari",
                                "Walker",
                                "Wraith Construct",
                                "Wraithknight With Ghostglaive"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wraithknight with Ghostglaive This model is equipped with: titanic ghostglaive; scattershield. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-wraithlord",
                        "name": "Wraithlord",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 10,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
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
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ghostglaive – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ghostglaive – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Wraithbone fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fated Hero",
                                        "Psychic Guidance"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Aeldari",
                                "Walker",
                                "Wraith Construct",
                                "Wraithlord"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wraithlord This model is equipped with: 2 shuriken catapults; wraithbone fists."
                },
                {
                        "id": "ae-ynnari-incubi",
                        "name": "Ynnari Incubi",
                        "role": "infantry",
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
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                                "ap": -1,
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
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tormentors"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Incubi"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Klaivex 4-9 Incubi Every model is equipped with: klaive."
                },
                {
                        "id": "ae-ynnari-reavers",
                        "name": "Ynnari Reavers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                },
                                {
                                        "models": 6,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "16\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "6+",
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
                                                "name": "Agoniser",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Eviscerating Fly-by",
                                        "Cluster Caltrops",
                                        "Grav-talon"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Reavers"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Arena Champion 2-5 Reavers Every model is equipped with: splinter pistol; splinter rifle; bladevanes."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(aeldari);
})();
