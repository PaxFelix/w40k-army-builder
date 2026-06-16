/**
 * W40K Army Builder — Adepta Sororitas (10th Edition)
 *
 * Datasheets from Codex: Adepta Sororitas. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const as = {
        id: "adepta-sororitas",
        name: "Adepta Sororitas",
        icon: "⛪",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Acts of Faith", flavour: "", text: "" }
        ],
        detachments: [],
        units: [
                {
                        "id": "as-aestred-thurga-and-agathae-dolan",
                        "name": "Aestred Thurga and Agathae Dolan",
                        "role": "character",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 4,
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
                                                "name": "Blade of Vigil",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Scribe’s staff",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Auto-Tapestry of the Emperor’s Judgement",
                                        "Recount the Deeds of the Saints"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Aestred Thurga",
                                "Agathae Dolan"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Aestred Thurga – EPIC HERO 1 Agathae Dolan – EPIC HERO Aestred Thurga is equipped with: bolt pistol; Blade of Vigil. Agathae Dolan is equipped with: bolt pistol; scribe’s staff."
                },
                {
                        "id": "as-canoness",
                        "name": "Canoness",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
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
                                                "name": "Brazier of holy fire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "One Shot",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
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
                                                "name": "Blessed blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hallowed Chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sacred Command",
                                        "The Emperor’s Grace",
                                        "Null Rod",
                                        "Rod of Office"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Canoness"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Canoness This model is equipped with: bolt pistol; hallowed chainsword."
                },
                {
                        "id": "as-canoness-with-jump-pack",
                        "name": "Canoness with jump pack",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
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
                                                "name": "Blessed halberd",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Holy Eviscerator",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sacred Command",
                                        "Divine Deliverance"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Canoness"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Seraphim Squad; Zephyrim Squad.",
                        "compositionText": "1 Canoness With Jump Pack This model is equipped with: blessed halberd."
                },
                {
                        "id": "as-daemonifuge",
                        "name": "Daemonifuge",
                        "role": "character",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 5,
                                "ld": "7+",
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
                                                "name": "Sanctity",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Chaos 2+",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "The Outcast’s Weapons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Fights First",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Holy Judgement",
                                        "Mysterious Saviours"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Daemonifuge"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Ephrael Stern – EPIC HERO 1 Kyganil of the Bloody Tears – EPIC HERO Ephrael Stern is equipped with: bolt pistol; Sanctity. Kyganil of the Bloody Tears is equipped with: the Outcast’s Weapons."
                },
                {
                        "id": "as-dialogus",
                        "name": "Dialogus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 3,
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
                                                "name": "Dialogus staff",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Laud Hailer",
                                        "Stirring Rhetoric"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Dialogus"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Dialogus This model is equipped with: bolt pistol; Dialogus staff."
                },
                {
                        "id": "as-dogmata",
                        "name": "Dogmata",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "6+",
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
                                                "name": "Mace of the righteous",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Executioner of Heretics",
                                        "Unflinching Determination"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Imperium",
                                "Dogmata"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad.",
                        "compositionText": "1 Dogmata This model is equipped with: bolt pistol; mace of the righteous."
                },
                {
                        "id": "as-hospitaller",
                        "name": "Hospitaller",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
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
                                                "name": "Chirurgeon’s tools",
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
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Medicus Ministorum",
                                        "Sacred Healing"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Hospitaller"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Hospitaller This model is equipped with: bolt pistol; chirurgeon’s tools."
                },
                {
                        "id": "as-imagifier",
                        "name": "Imagifier",
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
                                "sv": "3+",
                                "w": 3,
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
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Litany of Deeds",
                                        "Stanchion of Holy Martyrs"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Imperium",
                                "Imagifier"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad.",
                        "compositionText": "1 Imagifier This model is equipped with: bolt pistol; boltgun; close combat weapon."
                },
                {
                        "id": "as-intranzia-fraye",
                        "name": "Intranzia Fraye",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Melta missile array",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Mace of Saint Praxedes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Throne of Blame",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 6,
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
                                        "Deadly Demise 1",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Denunciation",
                                        "Judged for Execution"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Character",
                                "Penitent",
                                "Epic Hero",
                                "Intranzia Fraye"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Intranzia Fraye – EPIC HERO This model is equipped with: 2 heavy bolters, 2 Ministorum heavy flamers; 1 melta missile array; 1 Mace of Saint Praxedes; 1 Throne of Blame."
                },
                {
                        "id": "as-junith-eruita",
                        "name": "Junith Eruita",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin Ministorum heavy flamer",
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
                                                "name": "Mace of Castigation",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deadly Demise 1",
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Pulpit of Saint Holline’s Basilica",
                                        "Fiery Conviction"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Fly",
                                "Epic Hero",
                                "Imperium",
                                "Junith Eruita"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Junith Eruita – EPIC HERO This model is equipped with: twin Ministorum heavy flamer; Mace of Castigation."
                },
                {
                        "id": "as-ministorum-priest",
                        "name": "Ministorum Priest",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
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
                                                "name": "Power Weapon",
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
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Smiting",
                                        "Zealot"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Penitent",
                                "Ministorum Priest"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Arco-flagellants; Battle Sisters Squad; Celestian Insidiants; Dominion Squad; Sanctifiers; Sisters Novitiate Squad; Holy Mission.",
                        "compositionText": "1 Preacher This model is equipped with: zealot’s vindictor."
                },
                {
                        "id": "as-morvenn-vahl",
                        "name": "Morvenn Vahl",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fidelis",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Paragon missile launcher – prioris",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paragon missile launcher – sanctorum",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "2+",
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
                                                "name": "Lance of Illumination – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Lance of Illumination – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
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
                                        "Deadly Demise 1",
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Abbess Sanctorum",
                                        "Righteous Repugnance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Morvenn Vahl"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following unit: Paragon Warsuits.",
                        "compositionText": "1 Morvenn Vahl – EPIC HERO This model is equipped with: Fidelis; Paragon missile launcher; Lance of Illumination."
                },
                {
                        "id": "as-palatine",
                        "name": "Palatine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
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
                                                "name": "Palatine blade",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fury of the Righteous",
                                        "Rapturous Blows"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Palatine"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Palatine This model is equipped with: bolt pistol; Palatine blade."
                },
                {
                        "id": "as-saint-celestine",
                        "name": "Saint Celestine",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 150
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
                                                "name": "The Ardent Blade",
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
                                        },
                                        {
                                                "name": "The Ardent Blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Healing Tears",
                                        "Lifewards",
                                        "Miraculous Intervention"
                                ]
                        },
                        "keywords": [
                                "Adepta Sororitas"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Seraphim Squad; Zephyrim Squad.",
                        "compositionText": "1 Celestine – EPIC HERO 2 Geminae Superia Saint Celestine is equipped with: the Ardent Blade. Each Geminae Superia is equipped with: bolt pistol; power weapon."
                },
                {
                        "id": "as-triumph-of-saint-katherine",
                        "name": "Triumph of Saint Katherine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 235
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistols",
                                                "range": "12\"",
                                                "a": 6,
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
                                                "name": "Relic weapons",
                                                "range": "Melee",
                                                "a": 18,
                                                "ws": "2+",
                                                "s": 5,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Relics of the Matriarchs",
                                        "Solemn Procession"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Triumph Of Saint Katherine"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following unit: Battle Sisters Squad.",
                        "compositionText": "1 Triumph of Saint Katherine – EPIC HERO This model is equipped with: bolt pistols; relic weapons."
                },
                {
                        "id": "as-battle-sisters-squad",
                        "name": "Battle Sisters Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Artificer-crafted storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
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
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
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
                                                "name": "Ministorum flamer",
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
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cherub",
                                        "Designer’s Note",
                                        "Defenders of the Faith",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Battleline",
                                "Imperium",
                                "Battle Sisters Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Sister Superior 9 Battle Sisters Every model is equipped with: bolt pistol; boltgun; close combat weapon."
                },
                {
                        "id": "as-immolator",
                        "name": "Immolator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Immolation flamers",
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
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 2",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Purge and Cleanse"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Immolator"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Immolator This model is equipped with: heavy bolter; immolation flamers; armoured tracks. TRANSPORT This model has a transport capacity of 6 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the TRIUMPH OF SAINT KATHERINE. At the start of the Declare Battle Formations step, you can select one BATTLE SISTERS SQUAD, DOMINION SQUAD or SISTERS NOVITIATE SQUAD from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units. If you are splitting a unit that has the Cherub ability, only one of the new units can use that ability during the battle – make a note of which of the new units this will be). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "as-sororitas-rhino",
                        "name": "Sororitas Rhino",
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
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
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
                                "faction": [
                                        "Acts of Faith"
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
                                "Imperium",
                                "Sororitas Rhino"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Sororitas Rhino This model is equipped with: storm bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the TRIUMPH OF SAINT KATHERINE."
                },
                {
                        "id": "as-arco-flagellants",
                        "name": "Arco-flagellants",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 45
                                },
                                {
                                        "models": 10,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 2,
                                "ld": "8+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Arco-flails",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Extremis Trigger Word"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Penitent",
                                "Arco-Flagellants"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "3-10 Arco-flagellants Every model is equipped with: arco-flails."
                },
                {
                        "id": "as-castigator",
                        "name": "Castigator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
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
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigator autocannons",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 4",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Castigator battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rites of Castigation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Castigator"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Castigator This model is equipped with: Castigator autocannons; 3 heavy bolters; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "as-celestian-insidiants",
                        "name": "Celestian Insidiants",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Condemnor bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
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
                                                "name": "Blessed sword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Null mace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Virge of admonition",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rituale Nullificatus",
                                        "Virtue of Intolerance",
                                        "Simulacrum Imperialis",
                                        "Denuncia Oratory"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Celestian Insidiants"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Celestian Insidiant Superior 9 Celestian Insidiants Each model is equipped with: condemnor bolt pistol; null mace."
                },
                {
                        "id": "as-celestian-sacresants",
                        "name": "Celestian Sacresants",
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
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
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
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                                "name": "Anointed halberd",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Hallowed mace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Spear of the faithful",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sworn Protectors"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Celestian Sacresants"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Sacresant Superior 4-9 Celestian Sacresants Every model is equipped with: bolt pistol; hallowed mace."
                },
                {
                        "id": "as-dominion-squad",
                        "name": "Dominion Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Artificer-crafted storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 2"
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
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 1"
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
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
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
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cherub",
                                        "Designer’s Note",
                                        "Righteous Awareness",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Dominion Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Dominion Superior 9 Dominions Every model is equipped with: bolt pistol; boltgun; close combat weapon. Holy Vanguard If this unit has a Leader unit attached to it during the Declare Battle Formations step and this unit starts the battle embarked within a TRANSPORT, that Leader unit gains the Scouts 6\" ability."
                },
                {
                        "id": "as-exorcist",
                        "name": "Exorcist",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 210
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
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exorcist conflagration rockets",
                                                "range": "36\"",
                                                "a": "3D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Exorcist missile launcher",
                                                "range": "36\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Indirect Fire"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Devastating Refrain"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Exorcist"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Exorcist This model is equipped with: Exorcist missile launcher; heavy bolter; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "as-mortifiers",
                        "name": "Mortifiers",
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
                                "m": "8\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Mortifier flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
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
                                                "name": "Penitent buzz-blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Penitent flail",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent buzz-blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent flails",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Anguish of the Unredeemed",
                                        "Anchorite Sarcophagus"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Penitent",
                                "Mortifiers"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1-2 Mortifiers Every model is equipped with: 2 heavy bolters; twin penitent buzz-blades."
                },
                {
                        "id": "as-paragon-warsuits",
                        "name": "Paragon Warsuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
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
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Paragon grenade launchers",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Paragon storm bolters",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Paragon war blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paragon war mace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Paragons"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Grenades",
                                "Imperium",
                                "Paragon Warsuits"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Paragon Superior 2 Paragons Every model is equipped with: bolt pistol; heavy bolter; Paragon storm bolters; Paragon war blade."
                },
                {
                        "id": "as-penitent-engines",
                        "name": "Penitent Engines",
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
                                "m": "8\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Penitent flamers",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Penitent buzz-blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Penitent flail",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent buzz-blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent flails",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Endless Suffering"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Penitent",
                                "Penitent Engines"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1-2 Penitent Engines Every model is equipped with: penitent flamers; twin penitent buzz-blades."
                },
                {
                        "id": "as-repentia-squad",
                        "name": "Repentia Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
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
                                                "name": "Neural whips",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Penitent eviscerator",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Overseer of Redemption"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Penitent",
                                "Repentia Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Repentia Superior 4-9 Sisters Repentia The Repentia Superior is equipped with: bolt pistol; neural whips. Each Sister Repentia is equipped with: penitent eviscerator."
                },
                {
                        "id": "as-retributor-squad",
                        "name": "Retributor Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
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
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
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
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cherubs",
                                        "Designer’s Note",
                                        "Storm of Retribution"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retributor Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Retributor Superior 4 Retributors The Retributor Superior is equipped with: bolt pistol; boltgun; close combat weapon. Each Retributor is equipped with: bolt pistol; heavy bolter; close combat weapon."
                },
                {
                        "id": "as-sanctifiers",
                        "name": "Sanctifiers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 9,
                                        "cost": 110
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Holy fire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "One Shot",
                                                        "Torrent"
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
                                                "name": "Ministorum flamer",
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
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
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
                                                "name": "Burning hands",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
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
                                                "name": "Death Cult blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Sanctifier melee weapon",
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
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ministorum Sermon",
                                        "Cherub",
                                        "Designer’s Note",
                                        "Salvationist Medikit",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Sanctifiers"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Miraculist 1 Salvationist 1 Death Cult Assassin 2 Missionaries 4 Sanctifiers The Miraculist is equipped with: holy fire; burning hands. The Salvationist is equipped with: close combat weapon; Salvationist medikit. The Death Cult Assassin is equipped with: Death Cult blades. 1 Missionary is equipped with: plasma gun; Sanctifier melee weapon. 1 Missionary is equipped with: Ministorum flamer; Sanctifier melee weapon. Every Sanctifier is equipped with: Ministorum hand flamer; Sanctifier melee weapon."
                },
                {
                        "id": "as-seraphim-squad",
                        "name": "Seraphim Squad",
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
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Angelic Ascent"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Seraphim Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Seraphim Superior 4-9 Seraphim Every model is equipped with: 2 bolt pistols; close combat weapon."
                },
                {
                        "id": "as-sisters-novitiate-squad",
                        "name": "Sisters Novitiate Squad",
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
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
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
                                                "name": "Autogun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
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
                                                "name": "Ministorum flamer",
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
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Novitiate melee weapons",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
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
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Impetuous Fervour",
                                        "Sacred Banner",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Sisters Novitiate Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Novitiate Superior 9 Sisters Novitiate The Novitiate Superior is equipped with: bolt pistol; boltgun; close combat weapon. Each Sister Novitiate is equipped with: autopistol; autogun; close combat weapon."
                },
                {
                        "id": "as-zephyrim-squad",
                        "name": "Zephyrim Squad",
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
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Embodied Prophecy",
                                        "Sacred Banner"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Zephyrim Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Zephyrim Superior 4-9 Zephyrim Every model is equipped with: bolt pistol; power weapon."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(as);
})();
