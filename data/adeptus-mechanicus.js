/**
 * W40K Army Builder — Adeptus Mechanicus (10th Edition)
 *
 * Datasheets from Codex: Adeptus Mechanicus. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const admech = {
        id: "adeptus-mechanicus",
        name: "Adeptus Mechanicus",
        icon: "⚙️",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Doctrina Imperatives", flavour: "", text: "" }
        ],
        detachments: [],
        units: [
                {
                        "id": "admech-thulia-ghuld",
                        "name": "Thulia Ghuld",
                        "role": "character",
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
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Jericho-class conversion resonator – titanic impact",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Jericho-class conversion resonator – shockwave",
                                                "range": "24\"",
                                                "a": "D6+2",
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Rod of the War Forge – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Rod of the War Forge – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rod of the War Forge",
                                        "Mechanicus Bodyguard",
                                        "Cybernetic Augmentation",
                                        "Secutor of Olympus"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Thulia Ghuld"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archmagos Terminus Thulia Ghuld – EPIC HERO This model is equipped with: Jericho-class conversion resonator; Rod of the War Forge. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "admech-belisarius-cawl",
                        "name": "Belisarius Cawl",
                        "role": "character",
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
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Solar atomiser",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Arc scourge",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Cawl’s Omnissian axe",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mechadendrite hive",
                                                "range": "Melee",
                                                "a": "2D6",
                                                "ws": "3+",
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Canticles of the Omnissiah",
                                        "Mechanicus Bodyguard",
                                        "Self-repair Mechanisms"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Tech-Priest",
                                "Cult Mechanicus",
                                "Belisarius Cawl"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Belisarius Cawl – EPIC HERO This model is equipped with: solar atomiser; arc scourge; Cawl’s Omnissian axe; mechadendrite hive. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "admech-cybernetica-datasmith",
                        "name": "Cybernetica Datasmith",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 35
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Battle Protocols",
                                        "Protector Protocol",
                                        "Conqueror Protocol",
                                        "Aegis Protocol"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Legio Cybernetica",
                                "Tech-Priest",
                                "Cybernetica Datasmith"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following unit: Kastelan Robots.",
                        "compositionText": "1 Cybernetica Datasmith This model is equipped with: Mechanicus pistol; power fist."
                },
                {
                        "id": "admech-skitarii-marshal",
                        "name": "Skitarii Marshal",
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
                                "sv": "4+",
                                "w": 3,
                                "ld": "6+",
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Control stave",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Control Edict",
                                        "Servo-skull Uplink"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Skitarii",
                                "Marshal"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Skitarii Marshal This model is equipped with: Mechanicus pistol; control stave."
                },
                {
                        "id": "admech-sydonian-skatros",
                        "name": "Sydonian Skatros",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 4,
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Radium jezzail",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Skatros transuranic arquebus",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sydonian feet",
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
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dread Snipers",
                                        "Achillan Eye"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Skitarii",
                                "Sydonian",
                                "Skatros"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Sydonian Skatros This model is equipped with: Mechanicus pistol; radium jezzail; Sydonian feet. SYDONIAN SENTINEL This model cannot be your WARLORD"
                },
                {
                        "id": "admech-tech-priest-dominus",
                        "name": "Tech-priest Dominus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eradication ray – dissipated",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Eradication ray – focused",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Macrostubber",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor serpenta",
                                                "range": "18\"",
                                                "a": 1,
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
                                                "name": "Volkite blaster",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian axe",
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
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of the Machine Cult",
                                        "Data-spike"
                                ]
                        },
                        "keywords": [
                                "Imperium",
                                "Infantry",
                                "Character",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Dominus"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Tech-Priest Dominus This model is equipped with: macrostubber; volkite blaster; Omnissian axe."
                },
                {
                        "id": "admech-tech-priest-enginseer",
                        "name": "Tech-priest Enginseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian axe",
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Enginseer",
                                        "Omnissiah’s Blessing",
                                        "Vengeance for the Omnissiah"
                                ]
                        },
                        "keywords": [
                                "Imperium",
                                "Infantry",
                                "Character",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Enginseer"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Tech-Priest Enginseer This model is equipped with: Mechanicus pistol; Omnissian axe; servo-arm."
                },
                {
                        "id": "admech-tech-priest-manipulus",
                        "name": "Tech-priest Manipulus",
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
                                "sv": "2+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Magnarail lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Transonic cannon",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian staff",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Galvanic Field",
                                        "Defend the Divine Work"
                                ]
                        },
                        "keywords": [
                                "Imperium",
                                "Infantry",
                                "Character",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Manipulus"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Tech-Priest Manipulus This model is equipped with: magnarail lance; Omnissian staff."
                },
                {
                        "id": "admech-technoarcheologist",
                        "name": "Technoarcheologist",
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
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Servo-arc claw",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Seekers of Divine Arcana",
                                        "Cogitative Instincts"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Cult Mechanicus",
                                "Tech-Priest",
                                "Technoarcheologist"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "leaderText": "This model can be attached to the following units: Hastarii Exterminators; Hastarii Fusiliers; Corpuscarii Electro-priests; Fulgurite Electro-priests; Kataphron Breachers; Kataphron Destroyers; Servitor Battleclade; Skitarii Rangers; Skitarii Vanguard.",
                        "compositionText": "1 Technoarcheologist This model is equipped with: Mechanicus pistol; servo-arc claw."
                },
                {
                        "id": "admech-skitarii-rangers",
                        "name": "Skitarii Rangers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Arc rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Galvanic rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma caliver – standard",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma caliver – supercharge",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Transuranic arquebus",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Alpha combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
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
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Objective Scouted",
                                        "Enhanced data-tether",
                                        "Omnispex"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Skitarii",
                                "Rangers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skitarii Ranger Alpha 9 Skitarii Rangers Every model is equipped with: galvanic rifle; close combat weapon."
                },
                {
                        "id": "admech-skitarii-vanguard",
                        "name": "Skitarii Vanguard",
                        "role": "battleline",
                        "points": [
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
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Arc rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma caliver – standard",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma caliver – supercharge",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Radium carbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Transuranic arquebus",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Alpha combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rad-saturation",
                                        "Enhanced data-tether",
                                        "Omnispex"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Skitarii",
                                "Vanguard"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skitarii Vanguard Alpha 9 Skitarii Vanguard Every model is equipped with: radium carbine; close combat weapon."
                },
                {
                        "id": "admech-skorpius-dunerider",
                        "name": "Skorpius Dunerider",
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
                                "w": 11,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber array",
                                                "range": "36\"",
                                                "a": 9,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 9",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Firing Deck 2"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Broad Spectrum Data-tether",
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Skitarii",
                                "Smoke",
                                "Skorpius Dunerider"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skorpius Dunerider This model is equipped with: cognis heavy stubber array; armoured hull. TRANSPORT This model has a transport capacity of 12 ADEPTUS MECHANICUS INFANTRY models. It cannot transport JUMP PACK, KATAPHRON or SYDONIAN SKATROS models."
                },
                {
                        "id": "admech-hastarii-exterminators",
                        "name": "Hastarii Exterminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 135
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hastarii arc blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Eradication caster – dissipated",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Eradication caster – focused",
                                                "range": "15\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close-combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Broad-spectrum Targeting Augurs"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Hastarii",
                                "Exterminators"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Hastarii Exterminator Alpha 4 Hastarii Exterminators The Hastarii Exterminator Alpha is equipped with: Hastarii arc blaster; eradication caster; power weapon. Every Hastarii Exterminator is equipped with: Hastarii arc blaster; eradication caster; close combat weapon."
                },
                {
                        "id": "admech-hastarii-fusiliers",
                        "name": "Hastarii Fusiliers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Neutron fusil",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hastarii phosphor blaster",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close-combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Monocular Targeting Helms"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Hastarii",
                                "Fusiliers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Hastarii Fusilier Alpha 4 Hastarii Fusiliers The Hastarii Fusilier Alpha is equipped with: neutron fusil; Hastarii phosphor blaster; power weapon. Every Hastarii Fusiller is equipped with: neutron fusil; Hastarii phosphor blaster; close combat weapon."
                },
                {
                        "id": "admech-archaeopter-fusilave",
                        "name": "Archaeopter Fusilave",
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
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber array",
                                                "range": "36\"",
                                                "a": 9,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 9",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Hover"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bomb Rack",
                                        "Chaff Launcher",
                                        "Command Uplink"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Imperium",
                                "Skitarii",
                                "Archaeopter Fusilave"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archaeopter Fusilave This model is equipped with: cognis heavy stubber array; armoured hull; command uplink."
                },
                {
                        "id": "admech-archaeopter-stratoraptor",
                        "name": "Archaeopter Stratoraptor",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy phosphor blaster",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin cognis lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Hover"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Strafing Run",
                                        "Chaff Launcher",
                                        "Command Uplink"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Imperium",
                                "Skitarii",
                                "Archaeopter Stratoraptor"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archaeopter Stratoraptor This model is equipped with: 2 cognis heavy stubbers; 2 heavy phosphor blasters; twin cognis lascannon; armoured hull; command uplink."
                },
                {
                        "id": "admech-archaeopter-transvector",
                        "name": "Archaeopter Transvector",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber array",
                                                "range": "36\"",
                                                "a": 9,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 9",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Deep Strike",
                                        "Hover"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aerial Deployment",
                                        "Chaff Launcher",
                                        "Command Uplink"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Transport",
                                "Fly",
                                "Imperium",
                                "Skitarii",
                                "Archaeopter Transvector"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Archaeopter Transvector This model is equipped with: cognis heavy stubber array; armoured hull; command uplink. TRANSPORT This model has a transport capacity of 11 SKITARII INFANTRY or TECH-PRIEST INFANTRY models. It cannot transport JUMP PACK or KATAPHRON models."
                },
                {
                        "id": "admech-corpuscarii-electro-priests",
                        "name": "Corpuscarii Electro-priests",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                },
                                {
                                        "models": 10,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "6\"",
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
                                                "name": "Electrostatic gauntlets",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Electrostatic gauntlets",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Electro-shock"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Corpuscarii",
                                "Electro-Priests"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "5-10 Corpuscarii Electro-Priests Every model is equipped with: electrostatic gauntlets."
                },
                {
                        "id": "admech-fulgurite-electro-priests",
                        "name": "Fulgurite Electro-priests",
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
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Electroleech stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Electro-infusion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Electro-Priests",
                                "Fulgurite"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "5-10 Fulgurite Electro-Priests Every model is equipped with: electroleech stave."
                },
                {
                        "id": "admech-ironstrider-ballistarii",
                        "name": "Ironstrider Ballistarii",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                },
                                {
                                        "models": 3,
                                        "cost": 255
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin cognis autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin cognis lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ironstrider feet",
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Elevated Strider",
                                        "Broad Spectrum Data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Skitarii",
                                "Ironstrider Ballistarii"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1-3 Ironstrider Ballistarii Every model is equipped with: twin cognis autocannon; Ironstrider feet."
                },
                {
                        "id": "admech-kastelan-robots",
                        "name": "Kastelan Robots",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 180
                                },
                                {
                                        "models": 4,
                                        "cost": 360
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy phosphor blaster",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Incendine combustor",
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
                                                "name": "Kastelan phosphor blaster",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin Kastelan phosphor blaster",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Kastelan fist",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Kastelan fist",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Robotic Bodyguard",
                                        "Repulsor Grid"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Legio Cybernetica",
                                "Kastelan Robots"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "2-4 Kastelan Robots Every model is equipped with: incendine combustor; twin Kastelan fist."
                },
                {
                        "id": "admech-kataphron-breachers",
                        "name": "Kataphron Breachers",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy arc rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Torsion cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Arc claw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+"
                                                ]
                                        },
                                        {
                                                "name": "Hydraulic claw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Breaching Command"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Kataphron",
                                "Breachers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "3-6 Kataphron Breachers Every model is equipped with: heavy arc rifle; arc claw."
                },
                {
                        "id": "admech-kataphron-destroyers",
                        "name": "Kataphron Destroyers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 105
                                },
                                {
                                        "models": 6,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis flamer",
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
                                                "name": "Heavy grav-cannon",
                                                "range": "30\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 2+"
                                                ]
                                        },
                                        {
                                                "name": "Kataphron plasma culverin – standard",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Kataphron plasma culverin – supercharge",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor blaster",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
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
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sentinel Directives"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Cult Mechanicus",
                                "Kataphron",
                                "Destroyers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "3-6 Kataphron Destroyers Every model is equipped with: heavy grav-cannon; phosphor blaster; close combat weapon."
                },
                {
                        "id": "admech-onager-dunecrawler",
                        "name": "Onager Dunecrawler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 155
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cognis heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Daedalus missile launcher",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Eradication beamer – dissipated",
                                                "range": "36\"",
                                                "a": "3D3",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Eradication beamer – focused",
                                                "range": "18\"",
                                                "a": "3D3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Neutron laser",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Icarus array",
                                                "range": "48\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 4+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin Onager heavy phosphor blaster",
                                                "range": "36\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dunecrawler legs",
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Emanatus Force Field",
                                        "Scuttling Walker",
                                        "Broad spectrum data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Skitarii",
                                "Smoke",
                                "Onager Dunecrawler"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Onager Dunecrawler This model is equipped with: eradication beamer; Dunecrawler legs. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "admech-pteraxii-skystalkers",
                        "name": "Pteraxii Skystalkers",
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
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette blaster",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Flechette carbine",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Taser goad",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ride the Thermals"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Pack",
                                "Grenades",
                                "Imperium",
                                "Skitarii",
                                "Pteraxii",
                                "Skystalkers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Pteraxii Skystalker Alpha 4-9 Pteraxii Skystalkers The Pteraxii Skystalker Alpha model is equipped with: flechette blaster; taser goad. Every Pteraxii Skystalker model is equipped with: flechette carbine; close combat weapon."
                },
                {
                        "id": "admech-pteraxii-sterylizors",
                        "name": "Pteraxii Sterylizors",
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
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette blaster",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor torch",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Pteraxii talons",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Taser goad",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Searing Conflagration"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Pack",
                                "Imperium",
                                "Skitarii",
                                "Pteraxii",
                                "Sterylizors"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Pteraxii Sterylizor Alpha 4-9 Pteraxii Sterylizors The Pteraxii Sterylizor Alpha model is equipped with: flechette blaster; Pteraxii talons; taser goad. Every Pteraxii Sterylizor model is equipped with: phosphor torch; Pteraxii talons."
                },
                {
                        "id": "admech-serberys-raiders",
                        "name": "Serberys Raiders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 60
                                },
                                {
                                        "models": 6,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Galvanic carbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cavalry sabre and clawed limbs",
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
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tactica Obliqua",
                                        "Enhanced data-tether"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Imperium",
                                "Skitarii",
                                "Serberys Raiders"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Serberys Raider Alpha 2-5 Serberys Raiders The Serberys Raider Alpha model is equipped with: Mechanicus pistol; galvanic carbine; cavalry sabre and clawed limbs. Every Serberys Raider model is equipped with: galvanic carbine; cavalry sabre and clawed limbs."
                },
                {
                        "id": "admech-serberys-sulphurhounds",
                        "name": "Serberys Sulphurhounds",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 55
                                },
                                {
                                        "models": 6,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor blast carbine",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Sulphur breath",
                                                "range": "9\"",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cavalry arc maul",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Clawed limbs",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Line-breakers"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Imperium",
                                "Skitarii",
                                "Serberys Sulphurhounds"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Serberys Sulphurhound Alpha 2-5 Serberys Sulphurhounds The Serberys Sulphurhound Alpha model is equipped with: Mechanicus pistol; sulphur breath; cavalry arc maul; clawed limbs. Every Serberys Sulphurhound model is equipped with: 2 phosphor pistols; sulphur breath; clawed limbs."
                },
                {
                        "id": "admech-servitor-battleclade",
                        "name": "Servitor Battleclade",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 9,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
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
                                                "name": "Heavy arc rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
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
                                                "name": "Incendine igniter",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
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
                                                "name": "Phosphor blaster",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dataspikes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Servo-claw",
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
                                "core": [],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Network Override"
                                ]
                        },
                        "keywords": [
                                "Adeptus Mechanicus"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Servitor Underseer 2 Gun Servitors 6 Combat Servitors The Servitor Underseer is equipped with: Mechanicus pistol; dataspikes. 1 Gun Servitor is equipped with: heavy arc rifle; servo-claw. 1 Gun Servitor is equipped with: heavy bolter; servo-claw. Every Combat Servitor is equipped with: phosphor blaster; servo-claw. KEYWORDS – ALL MODELS: INFANTRY, IMPERIUM, CULT MECHANICUS, SERVITOR BATTLECLADEUNDERSEER: TECH-PRIEST FACTION"
                },
                {
                        "id": "admech-sicarian-infiltrators",
                        "name": "Sicarian Infiltrators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 155
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette blaster",
                                                "range": "12\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Stubcarbine",
                                                "range": "12\"",
                                                "a": 3,
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
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Taser goad",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Voices in the Code",
                                        "Neurostatic Interference"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Sicarian",
                                "Infiltrators"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Sicarian Infiltrator Princeps 4-9 Sicarian Infiltrators Every model is equipped with: stubcarbine; power weapon."
                },
                {
                        "id": "admech-sicarian-ruststalkers",
                        "name": "Sicarian Ruststalkers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 80
                                },
                                {
                                        "models": 10,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Transonic blades",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Transonic blades and chordclaw",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Transonic razor and chordclaw",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Optimised Gait"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Skitarii",
                                "Sicarian",
                                "Ruststalkers"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Sicarian Ruststalker Princeps 4-9 Sicarian Ruststalkers Every model is equipped with: transonic razor and chordclaw."
                },
                {
                        "id": "admech-skorpius-disintegrator",
                        "name": "Skorpius Disintegrator",
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
                                "sv": "2+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Belleros energy cannon",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Cognis heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Disruptor missile launcher",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Ferrumite cannon",
                                                "range": "48\"",
                                                "a": 3,
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
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Broad Spectrum Data-tether",
                                        "Blistering Salvoes"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Skitarii",
                                "Smoke",
                                "Skorpius Disintegrator"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1 Skorpius Disintegrator This model is equipped with: belleros energy cannon; 3 cognis heavy stubbers; disruptor missile launcher; armoured hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "admech-sydonian-dragoons-with-radium-jezzails",
                        "name": "Sydonian Dragoons with Radium Jezzails",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                },
                                {
                                        "models": 2,
                                        "cost": 100
                                },
                                {
                                        "models": 3,
                                        "cost": 150
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Phosphor serpenta",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Radium jezzail",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ironstrider feet",
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
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Focused Hunters",
                                        "Broad Spectrum Data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Skitarii",
                                "Sydonian",
                                "Dragoons With Radium Jezzails"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1-3 Sydonian Dragoons Every model is equipped with: phosphor serpenta; radium jezzail; Ironstrider feet."
                },
                {
                        "id": "admech-sydonian-dragoons-with-taser-lances",
                        "name": "Sydonian Dragoons with Taser Lances",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                },
                                {
                                        "models": 2,
                                        "cost": 130
                                },
                                {
                                        "models": 3,
                                        "cost": 195
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Phosphor serpenta",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Taser lance",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Walker 2+",
                                                        "Lance",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Doctrina Imperatives"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dynamic Efficiency",
                                        "Broad Spectrum Data-tether"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Skitarii",
                                "Sydonian",
                                "Dragoons With Taser Lances"
                        ],
                        "factionKeywords": [
                                "Adeptus Mechanicus"
                        ],
                        "compositionText": "1-3 Sydonian Dragoons Every model is equipped with: phosphor serpenta; taser lance."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(admech);
})();
