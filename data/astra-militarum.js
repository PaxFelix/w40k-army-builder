/**
 * W40K Army Builder — Astra Militarum (10th Edition)
 *
 * Datasheets from Codex: Astra Militarum. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const astraMilitarum = {
        id: "astra-militarum",
        name: "Astra Militarum",
        icon: "\uD83D\uDEE1\uFE0F",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Born Soldiers", flavour: "", text: "" }
        ],
        detachments: [],
        units: [
                {
                        "id": "am-cadian-castellan",
                        "name": "Cadian Castellan",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
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
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
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
                                        },
                                        {
                                                "name": "Power weapon",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Senior Officer",
                                        "Get Back in the Fight"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Officer",
                                "Cadian Castellan"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Kasrkin.",
                        "compositionText": "1 Cadian Castellan This model is equipped with: laspistol; chainsword."
                },
                {
                        "id": "am-cadian-command-squad",
                        "name": "Cadian Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cadia Stands!",
                                        "Master Vox",
                                        "Medi-pack",
                                        "Regimental Standard"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Cadian Shock Troops.",
                        "compositionText": "1 Cadian Commander 4 Cadian Veteran Guardsmen The Cadian Commander is equipped with: laspistol; chainsword. 1 Cadian Veteran Guardsman is equipped with: las pistol; chainsword. 1 other Cadian Veteran Guardsman is equipped with: lasgun; master vox; close combat weapon. 1 other Cadian Veteran Guardsman is equipped with: lasgun; medi-pack; close combat weapon. 1 other Cadian Veteran Guardsman is equipped with: lasgun; regimental standard; close combat weapon."
                },
                {
                        "id": "am-catachan-command-squad",
                        "name": "Catachan Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                        },
                                        {
                                                "name": "Sniper rifle",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gung-ho Command",
                                        "Master Vox",
                                        "Medi-pack",
                                        "Regimental Standard"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Catachan Jungle Fighters.",
                        "compositionText": "1 Catachan Commander 4 Veteran Guardsmen The Catachan Commander is equipped with: laspistol; close combat weapon. Every Veteran Guardsman is equipped with: lasgun; laspistol; close combat weapon."
                },
                {
                        "id": "am-commissar",
                        "name": "Commissar",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 30
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
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
                                                "s": 4,
                                                "ap": -2,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Summary Execution",
                                        "Political Overwatch"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Officer",
                                "Commissar"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Commissar This model is equipped with: bolt pistol; chainsword."
                },
                {
                        "id": "am-commissar-graves",
                        "name": "Commissar Graves",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chiron gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Prefectus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
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
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Enforcer crew",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Power sword and Manus Mortis",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mechanised Spearhead",
                                        "Brutal Disciplinarian",
                                        "Aquiline Prow"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Squadron",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Commissar Graves"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Commissar Graves – EPIC HERO This model is equipped with: 1 chiron gatling cannon; 2 Prefectus heavy stubbers; 1 power sword and Manus Mortis; 1 Enforcer crew; 1 armoured hull; 1 aquiline prow."
                },
                {
                        "id": "am-commissar-graves-on-foot",
                        "name": "Commissar Graves on Foot",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
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
                                                "bs": "2+",
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
                                                "name": "Power sword and Manus Mortis",
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Icon of Discipline",
                                        "Brutal Disciplinarian"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Commissar Graves On Foot"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Commissar Graves on Foot – EPIC HERO This model is equipped with: 1 bolt pistol; 1 power sword and Manus Mortis."
                },
                {
                        "id": "am-commissar-yarrick",
                        "name": "Commissar Yarrick",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bale Eye",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3+1",
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                                "name": "Power klaw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Will of Iron",
                                        "Hero of Hades Hive"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Commissar Yarrick"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Commissar Yarrick – EPIC HERO This model is equipped with: 1 storm bolter; 1 laspistol; 1 Bale Eye; 1 power klaw; 1 power sword."
                },
                {
                        "id": "am-gaunts-ghosts",
                        "name": "Gaunt’s Ghosts",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bragg’s autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
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
                                                "name": "Corbec’s hot-shot lascarbine",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Larkin’s long-las",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 4,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Lascarbine",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Rawne’s lascarbine",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gaunt’s chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Straight silver knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mkoll’s straight silver knife",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tanith Camo-cloaks",
                                        "Covert Stealth Team"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ibram Gaunt 5 Tanith Ghosts Ibram Gaunt is equipped with: bolt pistol; Gaunt’s chainsword. 1 Tanith Ghost is equipped with: Corbec’s hot-shot lascarbine; straight silver knife. 1 Tanith Ghost is equipped with: Rawne’s lascarbine; straight silver knife. 1 Tanith Ghost is equipped with: Larkin’s long-las; straight silver knife. 1 Tanith Ghost is equipped with: Bragg’s autocannon; straight silver knife. 1 Tanith Ghost is equipped with: lascarbine; Mkoll’s straight silver knife. ORDERS This unit’s OFFICER can issue up to 2 Orders to REGIMENT or GAUNT’S GHOSTS units. KEYWORDS – ALL MODELS: INFANTRY, GRENADES, IMPERIUM, GAUNT’S GHOSTSIBRAM GAUNT: CHARACTER, EPIC HERO, OFFICER FACTION"
                },
                {
                        "id": "am-krieg-command-squad",
                        "name": "Krieg Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 65
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Trench club",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grim Determination",
                                        "Master Vox",
                                        "Alchemyk Counteragents",
                                        "Regimental Standard",
                                        "Servo-scribes",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Krieg Combat Engineers; Death Korps of Krieg.",
                        "compositionText": "1 Lord Commissar 5 Veteran Guardsmen The Lord Commissar is equipped with: laspistol; power weapon. One Veteran Guardsman is equipped with: laspistol; chainsword. One Veteran Guardsman is equipped with: laspistol; close combat weapon; alchemyk counteragents; servo-scribes. One Veteran Guardsman is equipped with: lasgun; close combat weapon; master vox. One Veteran Guardsman is equipped with: lasgun; close combat weapon; regimental standard. One Veteran Guardsman is equipped with: boltgun; close combat weapon."
                },
                {
                        "id": "am-leman-russ-commander",
                        "name": "Leman Russ Commander",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 235
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolisher battle cannon",
                                                "range": "24\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Eradicator nova cannon",
                                                "range": "36\"",
                                                "a": "D3+6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Executioner plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Executioner plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Exterminator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 4",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Punisher gatling cannon",
                                                "range": "24\"",
                                                "a": 20,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Leman Russ battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Vanquisher battle cannon",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vox-net",
                                        "Death Befitting An Officer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Smoke",
                                "Squadron",
                                "Imperium",
                                "Officer",
                                "Leman Russ Commander"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Commander This model is equipped with: lascannon; Leman Russ battle cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. ORDERS This OFFICER can issue up to 2 Orders to SQUADRON units."
                },
                {
                        "id": "am-lord-marshal-dreir",
                        "name": "Lord Marshal Dreir",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sabre of Sacrifice",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Savage claws",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Feel No Pain 6+"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tough to Kill",
                                        "Leading the Charge"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Officer",
                                "Lord Marshal Dreir"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Death Riders.",
                        "compositionText": "1 Lord Marshal Dreir – EPIC HERO This model is equipped with: laspistol; Sabre of Sacrifice; savage claws."
                },
                {
                        "id": "am-lord-solar-leontus",
                        "name": "Lord Solar Leontus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Sol’s Righteous Gaze",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Conquest",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Konstantin’s hooves",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Lord Solar",
                                        "The Collegiate Astrolex"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Lord Solar Leontus"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Attilan Rough Riders; Cadian Shock Troops; Catachan Jungle Fighters; Death Riders; Kasrkin; Krieg Combat Engineers; Death Korps of Krieg.",
                        "compositionText": "1 Lord Solar Leontus – EPIC HERO This model is equipped with: Sol’s Righteous Gaze; Conquest; Konstantin’s hooves."
                },
                {
                        "id": "am-militarum-tempestus-command-squad",
                        "name": "Militarum Tempestus Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hot-shot lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Tempestus dagger",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tempestor Prime",
                                        "Medi-pack",
                                        "Regimental Standard",
                                        "Command Rod",
                                        "Master Vox"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Tempestus Scions.",
                        "compositionText": "1 Tempestor Prime 4 Tempestus Scions The Tempestor Prime is equipped with: bolt pistol; Tempestus dagger. Every Tempestus Scion is equipped with: hot-shot lasgun; close combat weapon."
                },
                {
                        "id": "am-ministorum-priest",
                        "name": "Ministorum Priest",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 35
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Holy pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Zealot’s vindictor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Zealot’s vindictor",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "War Hymns",
                                        "Holy Piety"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Ministorum Priest"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Ministorum Priest This model is equipped with: zealot’s vindictor."
                },
                {
                        "id": "am-nork-deddog",
                        "name": "Nork Deddog",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ripper gun",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Huge knife",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Ogryn Bodyguard",
                                        "Thunderous Head-butt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Loyal Protector",
                                "Ogryn",
                                "Nork Deddog"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Nork Deddog – EPIC HERO This model is equipped with: ripper gun; huge knife."
                },
                {
                        "id": "am-ogryn-bodyguard",
                        "name": "Ogryn Bodyguard",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Grenadier gauntlet",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ripper gun",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bullgryn maul",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Huge knife",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ripper gun",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Ogryn Bodyguard",
                                        "Brute Shield",
                                        "Slabshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Loyal Protector",
                                "Ogryn",
                                "Bodyguard"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ogryn Bodyguard This model is equipped with: ripper gun; close combat weapon; huge knife."
                },
                {
                        "id": "am-primaris-psyker",
                        "name": "Primaris Psyker",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Maelstrom – witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Maelstrom – focused witchfire",
                                                "range": "18\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
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
                                                "a": 3,
                                                "ws": "4+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Malign Wardings",
                                        "Psychic Barrier"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Imperium",
                                "Primaris Psyker"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Primaris Psyker This model is equipped with: laspistol; Psychic Maelstrom; force weapon."
                },
                {
                        "id": "am-rogal-dorn-commander",
                        "name": "Rogal Dorn Commander",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 290
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "7+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigator gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Coaxial autocannon",
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
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Oppressor cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Pulveriser cannon",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Twin battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
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
                                                "s": 7,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vox-net",
                                        "Called Shots"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Smoke",
                                "Squadron",
                                "Imperium",
                                "Officer",
                                "Rogal Dorn Commander"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Rogal Dorn Tank Commander This model is equipped with: castigator gatling cannon; heavy stubber; twin battle cannon; armoured tracks. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. ORDERS This OFFICER can issue up to 2 Orders to SQUADRON units."
                },
                {
                        "id": "am-sly-marbo",
                        "name": "Sly Marbo",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ripper pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Envenomed blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "One-man Army",
                                        "Like Fighting a Shadow"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Sly Marbo"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Sly Marbo – EPIC HERO This model is equipped with: ripper pistol; envenomed blade. LONER This model cannot be selected as your WARLORD."
                },
                {
                        "id": "am-tech-priest-enginseer",
                        "name": "Tech-Priest Enginseer",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Enginseer axe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Servo-arm",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Enginseer",
                                        "Omnissiah’s Blessing",
                                        "Vengeance for the Omnissiah"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Tech-Priest Enginseer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Death Korps of Krieg.",
                        "compositionText": "1 Tech-Priest Enginseer This model is equipped with: Mechanicus pistol; Enginseer axe; servo-arm."
                },
                {
                        "id": "am-ursula-creed",
                        "name": "Ursula Creed",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Duty and Vengeance",
                                                "range": "12\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power weapon",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord Castellan",
                                        "Tactical Genius"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Ursula Creed"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Kasrkin.",
                        "compositionText": "1 Ursula Creed – EPIC HERO This model is equipped with: Duty and Vengeance; power weapon."
                },
                {
                        "id": "am-cadian-shock-troops",
                        "name": "Cadian Shock Troops",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 120
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                        },
                                        {
                                                "name": "Sergeant's autogun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Shock Troops",
                                        "Vox-caster"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Grenades",
                                "Regiment",
                                "Platoon",
                                "Cadian",
                                "Cadian Shock Troops"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Shock Trooper Sergeant and 9 Shock Troopers OR 2 Shock Trooper Sergeants and 18 Shock Troopers Every Shock Trooper Sergeant is equipped with: laspistol; chainsword. Every Shock Trooper is equipped with: lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-catachan-jungle-fighters",
                        "name": "Catachan Jungle Fighters",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 120
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
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Jungle Fighters",
                                        "Vox-caster"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Regiment",
                                "Grenades",
                                "Imperium",
                                "Platoon",
                                "Catachan Jungle Fighters"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Jungle Fighter Sergeant and 9 Jungle Fighters OR 2 Jungle Fighter Sergeants and 18 Jungle Fighters Every Jungle Fighter Sergeant is equipped with: laspistol; close combat weapon. Every Jungle Fighter is equipped with: lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-death-korps-of-krieg",
                        "name": "Death Korps of Krieg",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 145
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                                "name": "Long-las",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Grim Demeanour",
                                        "Vox-caster",
                                        "Death Korps Medi-pack"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Grenades",
                                "Regiment",
                                "Platoon",
                                "Death Korps Of Krieg"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Death Korps Watchmaster and 9 Death Korps Troopers OR 2 Death Korps Watchmasters and 18 Death Korps Troopers Every Death Korps Watchmaster is equipped with: laspistol; chainsword. Every Death Korps Trooper is equipped with: lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-centaur-rsv",
                        "name": "Centaur RSV",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Pintle-mounted heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
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
                                        "Firing Deck 12"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rapid Strike Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Smoke",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Centaur Rsv"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Centaur RSV This model is equipped with: 1 pintle-mounted heavy stubber; 1 armoured hull. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-chimera",
                        "name": "Chimera",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Lasgun array",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6"
                                                ]
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                        "Mobile Command Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Chimera"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Chimera This model is equipped with: multi-laser; heavy bolter; lasgun array; armoured tracks. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-taurox",
                        "name": "Taurox",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Taurox"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Taurox This model is equipped with: twin autocannon; armoured tracks. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-taurox-prime",
                        "name": "Taurox Prime",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
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
                                        },
                                        {
                                                "name": "Taurox battle cannon",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Taurox gatling cannon",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Taurox missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Taurox missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Twin-Linked"
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
                                                "name": "Twin Taurox hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
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
                                        "Transport Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Taurox Prime"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Taurox Prime This model is equipped with: Taurox battle cannon; twin Taurox hot-shot volley gun; armoured tracks. TRANSPORT This model has a transport capacity of 12 MILITARUM TEMPESTUS INFANTRY or ASTRA MILITARUM INFANTRY CHARACTER models."
                },
                {
                        "id": "am-aegis-defence-line",
                        "name": "Aegis Defence Line",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 12,
                                "sv": "2+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Emplacement Platform",
                                        "Reinforced Cover",
                                        "Defence Line",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Imperium",
                                "Aegis Defence Line"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Aegis Defence Line DEPLOYMENT When this model is set up, it will consist of 1 platform section, up to 5 shield sections, up to 2 broken shield sections, and up to 2 end sections. All sections must be connected to each other to form a continuous defence line; the two broken shield sections can be placed either at the end of the defence line, or in the middle of it such that both are within 1/2\" of each other (in this case, these two sections count as being connected to each other). All the sections that have been set up are then treated as a single model for all rules purposes."
                },
                {
                        "id": "am-armoured-sentinels",
                        "name": "Armoured Sentinels",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                },
                                {
                                        "models": 2,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Sentinel chainsaw",
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
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Mobile Hunter-killers"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Squadron",
                                "Armoured Sentinels"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1-2 Armoured Sentinels Every model is equipped with: multi-laser; close combat weapon."
                },
                {
                        "id": "am-artillery-team",
                        "name": "Artillery Team",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "3\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy mortar",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "5+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy quad launcher",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
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
                                                "name": "Multiple rocket launcher",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "5+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Siege cannon",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crew close combat weapons",
                                                "range": "Melee",
                                                "a": 3,
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Remorseless Barrage"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Artillery",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Artillery Team"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Artillery Team This model is equipped with: heavy mortar; lasgun; crew close combat weapons."
                },
                {
                        "id": "am-attilan-rough-riders",
                        "name": "Attilan Rough Riders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Goad lance",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Hunting lance – frag tip",
                                                "range": "Melee",
                                                "a": "D6",
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Hunting lance – melta tip",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Lance"
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
                                                "name": "Steed’s hooves",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Horsemasters"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Attilan Rough Riders"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Rough Rider Sergeant 4-9 Rough Riders Every model is equipped with: lasgun; laspistol; hunting lance; steed’s hooves."
                },
                {
                        "id": "am-baneblade",
                        "name": "Baneblade",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baneblade cannon",
                                                "range": "72\"",
                                                "a": "3D6",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Coaxial autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Demolisher cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rolling Fortress"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Baneblade"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Baneblade This model is equipped with: Baneblade cannon; coaxial autocannon; demolisher cannon; heavy stubber; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-banehammer",
                        "name": "Banehammer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 420
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Tremor cannon",
                                                "range": "36\"",
                                                "a": "2D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Deadly Demise D6+2",
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Tremor Quake"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Transport",
                                "Banehammer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Banehammer This model is equipped with: 2 lascannons; tremor cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 26 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-banesword",
                        "name": "Banesword",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Quake cannon",
                                                "range": "72\"",
                                                "a": "D6+6",
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 4,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Armour Obliteration"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Banesword"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Banesword This model is equipped with: 2 lascannons; quake cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-basilisk",
                        "name": "Basilisk",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Earthshaker cannon",
                                                "range": "240\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                        "Earthshaker Rounds"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Basilisk"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Basilisk This model is equipped with: earthshaker cannon; heavy bolter; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-bullgryn-squad",
                        "name": "Bullgryn Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 100
                                },
                                {
                                        "models": 6,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Grenadier gauntlet",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bullgryn maul",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Wall of Muscle",
                                        "Brute Shield",
                                        "Slabshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Ogryn",
                                "Bullgryn Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Bullgryn Bone ‘ead 2-5 Bullgryns Every model is equipped with: grenadier gauntlet; close combat weapon; slabshield."
                },
                {
                        "id": "am-cadian-heavy-weapons-squad",
                        "name": "Cadian Heavy Weapons Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
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
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Mortar",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Weapons team close combat weapons",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Covering Fire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Cadian Heavy Weapons Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "3 Heavy Weapons Teams Every model is equipped with: heavy bolter; laspistol; weapons team close combat weapons. EMBARKING While embarked within a TRANSPORT, each model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models’ weapons for the purposes of the Firing Deck ability."
                },
                {
                        "id": "am-cadian-recon-squad",
                        "name": "Cadian Recon Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autostubber",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
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
                                                "name": "Long-las",
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
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
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
                                                "bs": "5+",
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Independent Operatives",
                                        "Vox-caster",
                                        "Vox-relay Beacon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Cadian Recon Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Recon Sergeant model 9 Recon Trooper models Each model is equipped with: lasgun; close combat weapon."
                },
                {
                        "id": "am-catachan-heavy-weapons-squad",
                        "name": "Catachan Heavy Weapons Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
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
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "5+",
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
                                                "bs": "5+",
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
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Mortar",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Weapons team close combat weapons",
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
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Bring it Down!"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Catachan Heavy Weapons Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "3 Heavy Weapons Teams Every model is equipped with: heavy bolter; lasgun; weapons team close combat weapons. EMBARKING While embarked within a TRANSPORT, each model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models’ weapons for the purposes of the Firing Deck ability."
                },
                {
                        "id": "am-death-riders",
                        "name": "Death Riders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death Rider lascarbine",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Frag lance",
                                                "range": "Melee",
                                                "a": "D6",
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Power sabre",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Steed's savage claws",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Screening Line"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Death Riders"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ridemaster 4-9 Death Riders Every model is equipped with: Death Rider lascarbine; frag lance; power sabre; steed’s savage claws."
                },
                {
                        "id": "am-deathstrike",
                        "name": "Deathstrike",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Deathstrike missile",
                                                "range": "N/A",
                                                "a": "2D6",
                                                "bs": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "One Shot",
                                                        "Plasma Warhead"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Deathstrike Missile",
                                        "Designate Target",
                                        "Adjust Target"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Deathstrike"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Deathstrike This model is equipped with: heavy bolter; Deathstrike missile; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-doomhammer",
                        "name": "Doomhammer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 415
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Magma cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast",
                                                        "Melta 6"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Deadly Demise D6+2",
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Close-range Titan Killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Transport",
                                "Doomhammer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Doomhammer This model is equipped with: 2 lascannons; magma cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 26 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-field-ordnance-battery",
                        "name": "Field Ordnance Battery",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "3\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bombast field gun",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
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
                                                "name": "Laspistol",
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
                                                "name": "Malleus rocket launcher",
                                                "range": "48\"",
                                                "a": "D6+6",
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battery close combat weapons",
                                                "range": "Melee",
                                                "a": 3,
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rearm, Reload, Fire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Artillery",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Field Ordnance Battery"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "2 Ordnance Teams Every model is equipped with: malleus rocket launcher; lasgun; laspistol; battery close combat weapons."
                },
                {
                        "id": "am-hellhammer",
                        "name": "Hellhammer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 420
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Coaxial autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Demolisher cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hellhammer cannon",
                                                "range": "30\"",
                                                "a": "4D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Close-quarters Warfare"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Hellhammer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Hellhammer This model is equipped with: coaxial autocannon; demolisher cannon; heavy stubber; Hellhammer cannon; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-hellhound",
                        "name": "Hellhound",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chem cannon",
                                                "range": "12\"",
                                                "a": "D6+1",
                                                "bs": "N/A",
                                                "s": 2,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Inferno cannon",
                                                "range": "18\"",
                                                "a": "2D6",
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
                                                "name": "Melta cannon",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast",
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Flush Them Out"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Hellhound"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Hellhound This model is equipped with: heavy flamer; inferno cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-hippogriff-afv",
                        "name": "Hippogriff AFV",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                },
                                {
                                        "models": 2,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chiron gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 3"
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
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Melta cannon",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2"
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
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Vigilator cannon",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
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
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Convoy Escort Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Smoke",
                                "Squadron",
                                "Hippogriff Afv"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1-2 Hippogriff AFV Every model is equipped with: 1 vigilator cannon; 1 heavy stubber; 1 armoured hull."
                },
                {
                        "id": "am-hydra",
                        "name": "Hydra",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Hydra autocannon",
                                                "range": "72\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Fly 2+",
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
                                        "Flak Battery"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Hydra"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Hydra This model is equipped with: heavy bolter; Hydra autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-kasrkin",
                        "name": "Kasrkin",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hot-shot lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot marksman rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Warrior Elite",
                                        "Vox-caster",
                                        "Melta Mine"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Kasrkin"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Kasrkin Sergeant 9 Kasrkin Troopers The Kasrkin Sergeant is equipped with: hot-shot laspistol; chainsword. Every Kasrkin Trooper is equipped with: hot-shot lasgun; close combat weapon."
                },
                {
                        "id": "am-krieg-combat-engineers",
                        "name": "Krieg Combat Engineers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 10,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
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
                                                "name": "Combat shotgun",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
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
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Trench club",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Grenadiers",
                                        "Remote Mine",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Smoke",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Krieg Combat Engineers"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Krieg Engineer Watchmaster 4-9 Krieg Combat Engineers Every model is equipped with: autopistol; trench club."
                },
                {
                        "id": "am-krieg-heavy-weapons-squad",
                        "name": "Krieg Heavy Weapons Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Krieg heavy flamer",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
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
                                                "name": "Twin Krieg heavy stubber",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Rapid Fire 3",
                                                        "Twin-Linked"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Final Duty"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Krieg Heavy Weapons Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "3 Heavy Weapons Gunners 1 Fire Coordinator Each Heavy Weapons Gunner is equipped with: lascannon; laspistol; close combat weapon. The Fire Coordinator is equipped with: laspistol; close combat weapon. EMBARKING While embarked within a TRANSPORT, each Heavy Weapons Gunner model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models’ weapons for the purposes of the Firing Deck ability."
                },
                {
                        "id": "am-leman-russ-battle-tank",
                        "name": "Leman Russ Battle Tank",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Leman Russ battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Armoured Spearhead"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Battle Tank"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Battle Tank This model is equipped with: lascannon; Leman Russ battle cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-demolisher",
                        "name": "Leman Russ Demolisher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolisher battle cannon",
                                                "range": "24\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Line-breaker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Demolisher"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Demolisher This model is equipped with: demolisher battle cannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-eradicator",
                        "name": "Leman Russ Eradicator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eradicator nova cannon",
                                                "range": "36\"",
                                                "a": "D3+6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Urban Warfare"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Eradicator"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Eradicator This model is equipped with: eradicator nova cannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-executioner",
                        "name": "Leman Russ Executioner",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Executioner plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Executioner plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Gung-ho Executioners"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Executioner"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Executioner This model is equipped with: executioner plasma cannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-exterminator",
                        "name": "Leman Russ Exterminator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exterminator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 4",
                                                        "Twin-Linked"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Withering Hail"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Exterminator"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Exterminator This model is equipped with: exterminator autocannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-punisher",
                        "name": "Leman Russ Punisher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Punisher gatling cannon",
                                                "range": "24\"",
                                                "a": 20,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Mow Down the Enemy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Punisher"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Punisher This model is equipped with: lascannon; punisher gatling cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-vanquisher",
                        "name": "Leman Russ Vanquisher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Vanquisher battle cannon",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Tank-killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Vanquisher"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Vanquisher This model is equipped with: lascannon; vanquisher battle cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-manticore",
                        "name": "Manticore",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Storm eagle rockets",
                                                "range": "120\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast",
                                                        "Indirect Fire"
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
                                        "Furious Barrage"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Manticore"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Manticore This model is equipped with: heavy bolter; storm eagle rockets; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-ogryn-squad",
                        "name": "Ogryn Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 60
                                },
                                {
                                        "models": 6,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ripper gun",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ripper gun",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Point-blank Barrage"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Ogryn",
                                "Ogryn Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ogryn Bone ‘ead 2-5 Ogryns Every model is equipped with: ripper gun."
                },
                {
                        "id": "am-ratlings",
                        "name": "Ratlings",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 10,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 2,
                                "sv": "6+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tankstopper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 2,
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Shoot Sharp and Scarper",
                                        "Ratling Battlemutt",
                                        "Designer’s Note",
                                        "Demolition Gear"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Ratlings"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "5-10 Ratlings Every model is equipped with: sniper rifle; close combat weapon."
                },
                {
                        "id": "am-rogal-dorn-battle-tank",
                        "name": "Rogal Dorn Battle Tank",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 260
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "7+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigator gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Coaxial autocannon",
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
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Oppressor cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Pulveriser cannon",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Twin battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
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
                                                "s": 7,
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
                                        "Ablative Plating"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Rogal Dorn Battle Tank"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Rogal Dorn Battle Tank This model is equipped with: castigator gatling cannon; heavy stubber; twin battle cannon; armoured tracks. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-scout-sentinels",
                        "name": "Scout Sentinels",
                        "role": "vehicle",
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
                                "m": "10\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Sentinel chainsaw",
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
                                        "Deadly Demise 1",
                                        "Scouts 9\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Daring Recon"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Squadron",
                                "Scout Sentinels"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1-2 Scout Sentinels Every model is equipped with: multi-laser; close combat weapon."
                },
                {
                        "id": "am-shadowsword",
                        "name": "Shadowsword",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 410
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Volcano cannon",
                                                "range": "96\"",
                                                "a": "D3+1",
                                                "bs": "4+",
                                                "s": 24,
                                                "ap": -5,
                                                "d": 12,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Titan-killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Titanic",
                                "Imperium",
                                "Shadowsword"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Shadowsword This model is equipped with: 2 lascannons; twin heavy bolter; 2 twin heavy flamers; volcano cannon; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-stormlord",
                        "name": "Stormlord",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 430
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Vulcan mega-bolter",
                                                "range": "48\"",
                                                "a": 20,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                        "Deadly Demise D6+2",
                                        "Firing Deck 12"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Mount Up!"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Transport",
                                "Stormlord"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Stormlord This model is equipped with: 2 heavy stubbers; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; vulcan mega-bolter; armoured tracks DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 40 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-stormsword",
                        "name": "Stormsword",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 465
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Stormsword siege cannon",
                                                "range": "48\"",
                                                "a": "D6+6",
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Concussive Wave"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Titanic",
                                "Imperium",
                                "Stormsword"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Stormsword This model is equipped with: 2 lascannons; Stormsword siege cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-tempestus-aquilons",
                        "name": "Tempestus Aquilons",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Hot-shot lascarbine",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot long-las",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Sentry flamer",
                                                "range": "12\"",
                                                "a": "D6+3",
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
                                                "name": "Sentry grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3+3",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Sentry grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Sentry hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
                                                ]
                                        },
                                        {
                                                "name": "Melta carbine",
                                                "range": "10\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma carbine – standard",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Plasma carbine – supercharge",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Precision Drop",
                                        "Servo-sentry"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Militarum Tempestus",
                                "Tempestus Aquilons"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Tempestor Aquilon 9 Tempestus Aquilons The Tempestor Aquilon is equipped with: hot-shot lascarbine; sentry flamer; close combat weapon. Every Tempestus Aquilon is equipped with: hot-shot lascarbine; close combat weapon."
                },
                {
                        "id": "am-tempestus-scions",
                        "name": "Tempestus Scions",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 70
                                },
                                {
                                        "models": 10,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hot-shot lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Storm Troopers",
                                        "Vox-caster"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Militarum Tempestus",
                                "Tempestus Scions"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Tempestor 4-9 Tempestus Scions The Tempestor is equipped with: hot-shot laspistol; chainsword. Every Tempestus Scion is equipped with: hot-shot lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-valkyrie",
                        "name": "Valkyrie",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Hellstrike missiles",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Anti-Fly 2+"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multiple rocket pod",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
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
                                        "Deadly Demise D6",
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Airborne Insertion"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Imperium",
                                "Transport",
                                "Valkyrie"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Valkyrie This model is equipped with: hellstrike missiles; multi-laser; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-wyvern",
                        "name": "Wyvern",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Wyvern quad stormshard mortar",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
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
                                        "Suppression Bombardment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Wyvern"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Wyvern This model is equipped with: heavy bolter; Wyvern quad stormshard mortar; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-avenger-strike-fighter",
                        "name": "Avenger Strike Fighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger bolt cannon",
                                                "range": "36\"",
                                                "a": 10,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fiery Vengeance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Imperium",
                                "Avenger Strike Fighter"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Avenger Strike Fighter This model is equipped with: Avenger bolt cannon; heavy stubber; 2 lascannons; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-cyclops-demolition-vehicle",
                        "name": "Cyclops Demolition Vehicle",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 25
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Demolition Charges",
                                        "Unstable Payload"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Cyclops Demolition Vehicle"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Cyclops Demolition Vehicle This model is equipped with: nothing. COMPACT This model can embark within an ASTRA MILITARUM TRANSPORT model as if it were an Infantry model. If it does, it takes up the space of 7 models."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(astraMilitarum);
})();
