/**
 * W40K Army Builder — Death Guard (10th Edition)
 *
 * Datasheets from Codex: Death Guard. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const deathGuard = {
        id: "death-guard",
        name: "Death Guard",
        icon: "\u2620\uFE0F",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Nurgle's Gift", flavour: "", text: "" }
        ],
        detachments: [],
        units: [
                {
                        "id": "dg-biologus-putrifier",
                        "name": "Biologus Putrifier",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hyper blight grenades",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Injector pistol",
                                                "range": "3\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plague knives",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Foul Infusion",
                                        "Extraction of Fresh Disease"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Biologus Putrifier"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Biologus Putrifier This model is equipped with: hyper blight grenades; injector pistol; plague knives."
                },
                {
                        "id": "dg-daemon-prince-of-nurgle",
                        "name": "Daemon Prince of Nurgle",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 12,
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
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death Guard Defenders",
                                        "Fevered Strategist",
                                        "Miasma of Pestilence"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Daemon Prince of Nurgle This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "dg-daemon-prince-of-nurgle-with-wings",
                        "name": "Daemon Prince of Nurgle with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
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
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Horrifying Visage",
                                        "Enfeebling Miasma"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Daemon Prince With Wings"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Daemon Prince of Nurgle with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "dg-foul-blightspawn",
                        "name": "Foul Blightspawn",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plague sprayer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                                "ws": "3+",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blinding Spray",
                                        "Putrefying Stink"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Foul Blightspawn"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Foul Blightspawn This model is equipped with: plague sprayer; close combat weapon."
                },
                {
                        "id": "dg-great-unclean-one",
                        "name": "Great Unclean One",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 12,
                                "sv": "5+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plague flail",
                                                "range": "6\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Putrid vomit",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 5,
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
                                                "name": "Bileblade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Bilesword – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Bilesword – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Doomsday bell",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Reverberating Summons"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Feel No Pain 6+"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Nurgle",
                                        "Nurgle’s Rot"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Great Unclean One"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Great Unclean One This model is equipped with: plague flail; putrid vomit; bilesword. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-icon-bearer",
                        "name": "Icon Bearer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "5+",
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
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plague knife",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unclean Icon",
                                        "Blessed Icon of Disease"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Icon Bearer"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Icon Bearer This model is equipped with: boltgun; plague knife."
                },
                {
                        "id": "dg-lord-of-contagion",
                        "name": "Lord of Contagion",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Manreaper – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Manreaper – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vector of Disease",
                                        "Unholy Resilience"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Lord Of Contagion"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Blightlord Terminators; Deathshroud Terminators.",
                        "compositionText": "1 Lord of Contagion This model is equipped with: manreaper."
                },
                {
                        "id": "dg-lord-of-poxes",
                        "name": "Lord of Poxes",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
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
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Great plague blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gift of Poxes",
                                        "Shroud of Disease"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Lord Of Poxes"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Lord of Poxes This model is equipped with: plasma pistol; great plague blade."
                },
                {
                        "id": "dg-lord-of-virulence",
                        "name": "Lord of Virulence",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin plague spewer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Virulent Aura",
                                        "Blight Bombardment"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Lord Of Virulence"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Blightlord Terminators; Deathshroud Terminators.",
                        "compositionText": "1 Lord of Virulence This model is equipped with: twin plague spewer; power fist."
                },
                {
                        "id": "dg-malignant-plaguecaster",
                        "name": "Malignant Plaguecaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
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
                                                        "Lethal Hits",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plague Wind – witchfire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plague Wind – focused witchfire",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Hazardous",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Corrupted staff",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gift of Contagion",
                                        "Pestilent Fallout"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Nurgle",
                                "Malignant Plaguecaster"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Plague Marines; Poxwalkers.",
                        "compositionText": "1 Malignant Plaguecaster This model is equipped with: bolt pistol; Plague Wind; corrupted staff."
                },
                {
                        "id": "dg-mortarion",
                        "name": "Mortarion",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 380
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "5+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lantern",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Pistol",
                                                        "Sustained Hits D3"
                                                ]
                                        },
                                        {
                                                "name": "Rotwind",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Silence – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Silence – sweep",
                                                "range": "Melee",
                                                "a": 15,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of the Death Guard",
                                        "Host of Plagues"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Fly",
                                "Epic Hero",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Primarch",
                                "Mortarion"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Mortarion – EPIC HERO This model is equipped with: Lantern; Rotwind; Silence. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-noxious-blightbringer",
                        "name": "Noxious Blightbringer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cursed plague bell",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sickening Vitality",
                                        "Tocsin of Misery"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Noxious Blightbringer"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Plague Marines; Poxwalkers.",
                        "compositionText": "1 Noxious Blightbringer This model is equipped with: plasma pistol; cursed plague bell."
                },
                {
                        "id": "dg-plague-surgeon",
                        "name": "Plague Surgeon",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
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
                                                        "Lethal Hits",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Balesword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tainted Narthecium",
                                        "Inflamed Infections"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Plague Surgeon"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Plague Surgeon This model is equipped with: bolt pistol; balesword."
                },
                {
                        "id": "dg-rotigus",
                        "name": "Rotigus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 265
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 12,
                                "sv": "5+",
                                "w": 22,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Streams of brackish filth",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gnarlrod – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Gnarlrod – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Feel No Pain 6+"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Virulent Blessing",
                                        "Deluge of Nurgle"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Rotigus"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Rotigus – EPIC HERO This model is equipped with: streams of brackish filth; gnarlrod. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-tallyman",
                        "name": "Tallyman",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Malicious Calculations",
                                        "Sevenfold Chant"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Tallyman"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Tallyman This model is equipped with: plasma pistol; close combat weapon."
                },
                {
                        "id": "dg-typhus",
                        "name": "Typhus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lakrimae – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Lakrimae – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Destroyer Hive",
                                        "Eater Plague"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Epic Hero",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Typhus"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Blightlord Terminators; Deathshroud Terminators; Poxwalkers.",
                        "compositionText": "1 Typhus – EPIC HERO This model is equipped with: Lakrimae."
                },
                {
                        "id": "dg-plague-marines",
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
                                "Death Guard"
                        ],
                        "compositionText": "1 Plague Champion 4-9 Plague Marines Every model is equipped with: boltgun; plague knives."
                },
                {
                        "id": "dg-plaguebearers",
                        "name": "Plaguebearers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Plaguesword",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Infected Outbreak",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Plaguebearers"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Plagueridden 9 Plaguebearers Every model is equipped with: plaguesword."
                },
                {
                        "id": "dg-chaos-rhino",
                        "name": "Chaos Rhino",
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
                                                "name": "Combi-bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Transport",
                                "Dedicated Transport",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 DEATH GUARD INFANTRY models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "dg-miasmic-malignifier",
                        "name": "Miasmic Malignifier",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Miasmic gouts",
                                                "range": "9\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Putrescent Fog",
                                        "Diseased Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Nurgle",
                                "Miasmic Malignifier"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Miasmic Malignifier This model is equipped with: miasmic gouts."
                },
                {
                        "id": "dg-defiler",
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
                                                "name": "Ectoplasma destructor",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
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
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hades battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
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
                                                "keywords": [
                                                        "Lethal Hits"
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
                                                "name": "Heavy missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
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
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
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
                                                        "Lethal Hits",
                                                        "Sustained Hits 1"
                                                ]
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
                                                        "Lethal Hits",
                                                        "Melta 2"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                        },
                                        {
                                                "name": "Shearing claws – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shearing claws – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Barrage of Filth"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-beasts-of-nurgle",
                        "name": "Beasts of Nurgle",
                        "role": "infantry",
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
                                "m": "6\"",
                                "t": 9,
                                "sv": "6+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Putrid appendages",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 6,
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
                                        "Deadly Demise 1",
                                        "Deep Strike",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grotesque Regeneration"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Beasts Of Nurgle"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1-2 Beasts of Nurgle Every model is equipped with: putrid appendages."
                },
                {
                        "id": "dg-blightlord-terminators",
                        "name": "Blightlord Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 115
                                },
                                {
                                        "models": 5,
                                        "cost": 185
                                },
                                {
                                        "models": 10,
                                        "cost": 370
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
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
                                                "name": "Combi-bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
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
                                                "name": "Bubotic blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
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
                                                "name": "Flail of corruption",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blistering Fusillade"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Blightlord Terminators"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Blightlord Champion 2-9 Blightlord Terminators Every model is equipped with: combi-bolter; bubotic blade."
                },
                {
                        "id": "dg-chaos-land-raider",
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
                                                        "Lethal Hits",
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
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
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
                                "Nurgle",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 DEATH GUARD INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "dg-chaos-predator-annihilator",
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
                                                        "Lethal Hits",
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
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Sustained Hits 1"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Metalophagic Infection"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Predator Annihilator"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Predator Annihilator This model is equipped with: Predator twin lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-chaos-predator-destructor",
                        "name": "Chaos Predator Destructor",
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
                                                        "Lethal Hits",
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
                                                        "Lethal Hits",
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
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hail of Corrosive Disease"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Predator Destructor"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Predator Destructor This model is equipped with: predator autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
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
                                        "Deadly Demise 1",
                                        "Feel No Pain 5+",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lethal Ichor"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Nurgle",
                                "Chaos Spawn"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "dg-deathshroud-terminators",
                        "name": "Deathshroud Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 160
                                },
                                {
                                        "models": 6,
                                        "cost": 320
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plaguespurt gauntlet",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Manreaper – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Manreaper – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Silent Bodyguard",
                                        "Death Approaches",
                                        "Icon of Despair"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Deathshroud Terminators"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Deathshroud Champion 2-5 Deathshroud Terminators Every model is equipped with: plaguespurt gauntlet; manreaper."
                },
                {
                        "id": "dg-foetid-bloat-drone",
                        "name": "Foetid Bloat-drone",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plaguespitter",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fleshmower",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plague probe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hovering Death"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Foetid Bloat-Drone"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Foetid Bloat-drone This model is equipped with: fleshmower; plague probe."
                },
                {
                        "id": "dg-foetid-bloat-drone-with-heavy-blight-launcher",
                        "name": "Foetid Bloat-drone with Heavy Blight Launcher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy blight launcher",
                                                "range": "36\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plague probe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Explosive Blight"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Foetid Bloat-Drone With Heavy Blight Launcher"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Foetid Bloat-drone This model is equipped with: heavy blight launcher; plague probe."
                },
                {
                        "id": "dg-helbrute",
                        "name": "Helbrute",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                        "Lethal Hits",
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
                                                        "Melta 2",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked",
                                                        "Lethal Hits"
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
                                                        "Lethal Hits",
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
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Diseased Malice",
                                        "Froth-spattered Frenzy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Nurgle",
                                "Helbrute"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Helbrute This model is equipped with: multi-melta; Helbrute fist; close combat weapon."
                },
                {
                        "id": "dg-myphitic-blight-hauler",
                        "name": "Myphitic Blight-hauler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                },
                                {
                                        "models": 2,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bile spurt",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                                        "Melta 2",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gnashing maw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tank Hunters"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Myphitic Blight-Hauler"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1-2 Myphitic Blight-hulers Every model is equipped with: bile spurt; missile launcher; multi-melta; gnashing maw."
                },
                {
                        "id": "dg-nurglings",
                        "name": "Nurglings",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 40
                                },
                                {
                                        "models": 6,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Diseased claws and teeth",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "5+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mischief Makers"
                                ]
                        },
                        "keywords": [
                                "Swarm",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Nurglings"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "3-6 Nurgling Swarms Every model is equipped with: diseased claws and teeth."
                },
                {
                        "id": "dg-plague-drones",
                        "name": "Plague Drones",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 115
                                },
                                {
                                        "models": 6,
                                        "cost": 230
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 8,
                                "sv": "6+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death’s heads",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Foul mouthparts",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plaguesword",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death’s Heads",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Plague Drones"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Plaguebringer 2-5 Plague Drones Every model is equipped with: death’s heads; foul mouthparts; plaguesword."
                },
                {
                        "id": "dg-plagueburst-crawler",
                        "name": "Plagueburst Crawler",
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
                                "sv": "2+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Entropy cannon",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Heavy slugger",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plagueburst mortar",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plaguespitter",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Rothail volley gun",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Rapid Fire 3"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spore-laced Shock Waves"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Plagueburst Crawler"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Plagueburst Crawler This model is equipped with: 2 entropy cannons; heavy slugger; Plagueburst mortar; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-poxwalkers",
                        "name": "Poxwalkers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Improvised weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Curse of the Walking Pox"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Nurgle",
                                "Poxwalkers"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "10-20 Poxwalkers Every model is equipped with: improvised weapon."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(deathGuard);
})();
