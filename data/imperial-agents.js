/**
 * W40K Army Builder — Imperial Agents (10th Edition)
 *
 * Datasheets from Codex: Imperial Agents. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ia = {
        id: "imperial-agents",
        name: "Imperial Agents",
        icon: "🕵️",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Sanctioned Operatives", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Ordo Xenos Alien Hunters",
                flavour: "",
                rule: { name: "Deathwatch Mission Tactics", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Amulet of Auto-Chastisement", cost: 25, restriction: "WATCH MASTER model only.", text: "" },
                    { name: "Beacon Angelis", cost: 30, restriction: "WATCH MASTER model only.", text: "" },
                    { name: "Blackweave Shroud", cost: 15, restriction: "AGENTS OF THE IMPERIUM model only.", text: "" },
                    { name: "Universal Anathema", cost: 10, restriction: "AGENTS OF THE IMPERIUM model only.", text: "" },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Adaptive Tactics", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hellfire Rounds", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dragonfire Rounds", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Kraken Rounds", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rapid Tactical Relocation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Ordo Hereticus Purgation Force",
                flavour: "",
                rule: { name: "Root Out Heresy", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Ignis Judicium", cost: 10, restriction: "INQUISITOR or MINISTORUM PRIEST model only.", text: "" },
                    { name: "Liber Heresius", cost: 10, restriction: "INQUISITOR or MINISTORUM PRIEST model only.", text: "" },
                    { name: "No Escape (Aura)", cost: 25, restriction: "INQUISITOR model only.", text: "" },
                    { name: "Witch Hunter", cost: 15, restriction: "INQUISITOR or MINISTORUM PRIEST model only.", text: "" },
                ],
                stratagems: [
                    { name: "Stun Grenades", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dispense Justice", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Inviolate Jurisdiction", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Execution Order", cp: 2, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Line of Fire", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Exact Punishment", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Ordo Malleus Daemon Hunters",
                flavour: "",
                rule: { name: "Destroy the Daemonic", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Daemon Slayer", cost: 10, restriction: "INQUISITOR model only.", text: "" },
                    { name: "Formidable Resolve", cost: 5, restriction: "INQUISITOR model only.", text: "" },
                    { name: "Gift of the Prescient", cost: 20, restriction: "INQUISITOR model only.", text: "" },
                    { name: "Grimoire of True Names (Aura)", cost: 10, restriction: "INQUISITOR model only.", text: "" },
                ],
                stratagems: [
                    { name: "Ritual of Warding", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rites of Exorcism", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Steel Heart", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Truesilver Armour", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hexagrammic Wards", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Psybolt Ammunition", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Imperialis Fleet",
                flavour: "",
                rule: { name: "At All Costs", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Clandestine Operation", cost: 15, restriction: "AGENTS OF THE IMPERIUM model only.", text: "" },
                    { name: "Combat Landers", cost: 10, restriction: "VOIDFARERS model only.", text: "" },
                    { name: "Digital Weapons", cost: 10, restriction: "AGENTS OF THE IMPERIUM model only.", text: "" },
                    { name: "Fleetmaster", cost: 20, restriction: "VOIDFARERS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Violent Acquisition", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Masters of the Void", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Close-quarters Barrage", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Emperor's Will", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Displacer Field", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Selfless Bodyguard", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Veiled Blade Elimination Force",
                flavour: "",
                rule: { name: "Extremis Sanction", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Decoy Targets", cost: 40, restriction: "CALLIDUS ASSASSIN models only.", text: "" },
                    { name: "Esoteric Explosives", cost: 40, restriction: "CULEXUS ASSASSIN models only.", text: "" },
                    { name: "Intraneural Biotech", cost: 35, restriction: "EVERSOR ASSASSIN models only.", text: "" },
                    { name: "Micromelta Rounds", cost: 45, restriction: "VINDICARE ASSASSIN models only.", text: "" },
                ],
                stratagems: [
                    { name: "Prime Target", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hyperstimms", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Will-sapping Salvo", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Orbital Oversight", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Blind Grenades", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ensnaring Trap", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ia-callidus-assassin",
                        "name": "Callidus Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Neural shredder",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Phase sword and poison blades",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -4,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Fights First",
                                        "Infiltrators",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic Escape",
                                        "Lord of Deceit"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officio Assassinorum",
                                "Callidus Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Callidus Assassin – EPIC HERO This model is equipped with: neural shredder; phase sword and poison blades. SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-culexus-assassin",
                        "name": "Culexus Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Animus speculum",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Assault",
                                                        "Precision",
                                                        "Psychic Assassin"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Life-draining touch",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Etheric Emergence",
                                        "Abomination",
                                        "Soulless Horror"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Officio Assassinorum",
                                "Culexus Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Culexus Assassin – EPIC HERO This model is equipped with: animus speculum; life-draining touch. SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-eversor-assassin",
                        "name": "Eversor Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Executioner pistol",
                                                "range": "12\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Pistol",
                                                        "Precision",
                                                        "Sustained Hits 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power sword and neuro gauntlet",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Precision",
                                                        "Sustained Hits 3"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Lone Operative",
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Frenzon",
                                        "Overkill"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Officio Assassinorum",
                                "Eversor Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Eversor Assassin – EPIC HERO This model is equipped with: executioner pistol; power sword and neuro gauntlet. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent) SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-inquisitor",
                        "name": "Inquisitor",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Combi-weapon",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Shock Wave",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Inquisitorial melee weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Power of the Rosette",
                                        "Blessed Wardings",
                                        "Psychic Gifts"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Inquisitor"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Grey Knights Terminator Squad; Imperial Navy Breachers; Inquisitorial Agents; Sanctifiers; Sisters of Battle Squad; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor This model is equipped with: bolt pistol; Inquisitorial melee weapon; blessed wardings. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-inquisitor-coteaz",
                        "name": "Inquisitor Coteaz",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
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
                                        },
                                        {
                                                "name": "Psychic Blast",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Daemon 4+",
                                                        "Anti-Infantry 5+",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis daemon hammer",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Malefic Wardings",
                                        "Spy Network",
                                        "Glovodan Psyber-eagle",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Imperium",
                                "Ordo Malleus",
                                "Inquisitor",
                                "Coteaz"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Grey Knights Terminator Squad; Imperial Navy Breachers; Inquisitorial Agents; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor Coteaz – EPIC HERO This model is equipped with: bolt pistol; Psychic Blast; Nemesis daemon hammer; Glovodan psyber-eagle. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-inquisitor-draxus",
                        "name": "Inquisitor Draxus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dirgesinger",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Assault",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Tempest",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Xenos Hunter",
                                        "Psychic Veil"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Inquisitor",
                                "Draxus"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Imperial Navy Breachers; Inquisitorial Agents; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor Draxus – EPIC HERO This model is equipped with: Dirgesinger; Psychic Tempest; power fist. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-inquisitor-greyfax",
                        "name": "Inquisitor Greyfax",
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
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigation",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Character 4+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Condemnor stake",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Master-crafted power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Authority of the Inquisition",
                                        "Psyoculum",
                                        "No Mercy"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Ordo Hereticus",
                                "Inquisitor",
                                "Greyfax"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Imperial Navy Breachers; Inquisitorial Agents; Sanctifiers; Sisters of Battle Squad; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Inquisitor Greyfax – EPIC HERO This model is equipped with: Castigation; condemnor stake; master-crafter power sword."
                },
                {
                        "id": "ia-inquisitor-kroyle",
                        "name": "Inquisitor Kroyle",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Jindarii tox-cycler",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 2+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Stubcarbine",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Butcher blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Garralisk's claws and teeth",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 5,
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
                                        "Lone Operative",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "On My Signal, Fire!",
                                        "Tox-cycler"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Grenades",
                                "Ordo Xenos",
                                "Inquisitor",
                                "Kroyle"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Inquisitor Kroyle – EPIC HERO This model is equipped with: Jindarii tox-cycler; stubcarbine; butcher blade; Garralisk’s claws and teeth. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-ministorum-priest",
                        "name": "Ministorum Priest",
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
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Zealot's vindictor",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Holy Hatred",
                                        "Zealot"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Ordo Hereticus",
                                "Ministorum Priest"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Exaction Squad; Imperial Navy Breachers; Inquisitorial Agents; Sanctifiers; Sisters of Battle Squad; Subductor Squad; Vigilant Squad.",
                        "compositionText": "1 Ministorum Priest This model is equipped with: zealot’s vindictor."
                },
                {
                        "id": "ia-navigator",
                        "name": "Navigator",
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Force-orb cane",
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
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gaze into the Empyrean",
                                        "Third Eye"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Imperium",
                                "Voidfarers",
                                "Navigator"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Imperial Navy Breachers; Voidsmen-at-arms.",
                        "compositionText": "1 Navigator This model is equipped with: laspistol; force-orb cane. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-rogue-trader-entourage",
                        "name": "Rogue Trader Entourage",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 75
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dartmask",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Household pistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol",
                                                        "Devastating Wounds"
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
                                                "name": "Voltaic pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
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
                                                "name": "Death Cult power blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Monomolecular cane-rapier",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Backroom Deals",
                                        "Warrant of Trade",
                                        "Healing Serum"
                                ]
                        },
                        "keywords": [
                                "Agents Of The Imperium"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Imperial Navy Breachers; Voidsmen-at-arms.",
                        "compositionText": "1 Rogue Trader 1 Death Cult Assassin 1 Lectro-Maester 1 Rejuvenat Adept The Rogue Trader is equipped with: household pistol; monomolecular cane-rapier. The Death Cult Assassin is equipped with: dartmask; Death Cult power blade. The Lectro-Maester is equipped with: voltaic pistol; close combat weapon. The Rejuvenat Adept is equipped with: laspistol; close combat weapon; healing serum. 4 models (AGENTS OF THE IMPERIUM Detachment) 4 models (Assigned Agent)"
                },
                {
                        "id": "ia-vindicare-assassin",
                        "name": "Vindicare Assassin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exitus pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Exitus rifle",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3+3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Heavy",
                                                        "Ignores Cover",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vindicare combat knife",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Deadshot",
                                        "Shieldbreaker"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Smoke",
                                "Imperium",
                                "Officio Assassinorum",
                                "Vindicare Assassin"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Vindicare Assassin – EPIC HERO This model is equipped with: exitus pistol; exitus rifle; Vindicare combat knife. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent) SHADOW ASSIGNMENT This model cannot be selected to be your WARLORD. If your army faction is AGENTS OF THE IMPERIUM, then during the Declare Battle Formations step, you can replace this model with a different OFFICIO ASSASSINORUM model, provided the total points value of the new model does not exceed the points value of the model it replaced. Your army cannot include duplicates of the same model (i.e. after replacing a model with this rule, your army cannot have more than 1 VINDICARE ASSASSIN, it cannot have more than 1 CULEXUS ASSASSIN, it cannot have more than 1 EVERSOR ASSASSIN and it cannot have more than 1 CALLIDUS ASSASSIN)."
                },
                {
                        "id": "ia-watch-captain-artemis",
                        "name": "Watch Captain Artemis",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hellfire Extremis",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Master-crafted power weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tactical Instinct",
                                        "Unstoppable Champion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Deathwatch",
                                "Watch Captain Artemis"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Aquila Kill Team; Deathwatch Kill Team.",
                        "compositionText": "1 Watch Captain Artemis This model is equipped with: Hellfire Extremis; master-crafted power weapon."
                },
                {
                        "id": "ia-watch-master",
                        "name": "Watch Master",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
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
                                                "name": "Vigil spear",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vigil spear",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Strategic Knowledge",
                                        "Rites of Battle"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Deathwatch",
                                "Watch Master"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "leaderText": "This model can be attached to the following units: Aquila Kill Team; Deathwatch Kill Team.",
                        "compositionText": "1 Watch Master This model is equipped with: vigil spear. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent)"
                },
                {
                        "id": "ia-aquila-kill-team",
                        "name": "Aquila Kill Team",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
                                },
                                {
                                        "models": 10,
                                        "cost": 200
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
                                                "name": "Astartes grenade launcher – frag",
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
                                                "name": "Astartes grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                        "Pistol",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Deathwatch marksman bolt carbine",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Frag cannon",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Lethal Hits",
                                                        "Rapid Fire D3"
                                                ]
                                        },
                                        {
                                                "name": "Hellstorm bolt rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Heavy",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Infernus heavy bolter – heavy bolter",
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
                                                "name": "Infernus heavy bolter – heavy flamer",
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
                                                "name": "Plasma incinerator – standard",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma incinerator – supercharge",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Hazardous",
                                                        "Heavy"
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
                                                "name": "Special-issue bolt pistol",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Precision",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Stalker bolt rifle",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Lethal Hits",
                                                        "Precision"
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
                                                "name": "Combat knife",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Heavy thunder hammer",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Xenophase blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death to the Alien",
                                        "Kill Team",
                                        "Designer’s Note",
                                        "Astartes Shield"
                                ]
                        },
                        "keywords": [
                                "Agents Of The Imperium"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Kill Team Sergeant 1 Gravis Veteran 3 Deathwatch Veterans OR 1 Kill Team Sergeant 2 Gravis Veterans 7 Deathwatch Veterans The Kill Team Sergeant is equipped with: plasma pistol; power weapon. Each Gravis Veteran is equipped with: infernus heavy bolter; bolt pistol; close combat weapon. For every 5 models in the unit, 1 Deathwatch Veteran is equipped with: stalker bolt rifle; bolt pistol; close combat weapon. For every 5 models in the unit, 1 Deathwatch Veteran is equipped with: bolt pistol; heavy thunder hammer. For every 5 models in the unit, 1 Deathwatch Veteran is equipped with: Deathwatch marksman bolt carbine; special-issue bolt pistol; close combat weapon. If the unit contains 10 models, 1 Deathwatch Veteran is equipped with: special-issue bolt pistol; xenophase blade. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, GRENADES, IMPERIUM, ORDO XENOS, RETINUE, DEATHWATCH, AQUILA KILL TEAMKILL TEAM SERGEANT AND DEATHWATCH VETERANS: TACTICUSGRAVIS VETERANS: GRAVIS FACTION"
                },
                {
                        "id": "ia-deathwatch-kill-team",
                        "name": "Deathwatch Kill Team",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
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
                                                "name": "Frag cannon",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Rapid Fire D3"
                                                ]
                                        },
                                        {
                                                "name": "Infernus heavy bolter – heavy bolter",
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
                                                "name": "Infernus heavy bolter – heavy flamer",
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
                                                "name": "Stalker-pattern boltgun",
                                                "range": "24\"",
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
                                                "name": "Deathwatch shotgun",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Black Shield blades",
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
                                                "name": "Deathwatch thunder hammer",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Xenophase blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death to the Alien",
                                        "Astartes Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Imperium",
                                "Ordo Xenos",
                                "Retinue",
                                "Deathwatch",
                                "Kill Team"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Watch Sergeant 4-9 Deathwatch Veterans Every model is equipped with: boltgun; power weapon. 10 models (AGENTS OF THE IMPERIUM Detachment) 10 models (Assigned Agent)"
                },
                {
                        "id": "ia-imperial-navy-breachers",
                        "name": "Imperial Navy Breachers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
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
                                                "name": "Demolition charge",
                                                "range": "6\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Hazardous",
                                                        "One Shot"
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
                                                "name": "Navis heavy shotgun",
                                                "range": "12\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Navis las-volley",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Navis shotgun",
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
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
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
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainfist",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 3+"
                                                ]
                                        },
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Breaching Team",
                                        "Gheistskull",
                                        "CAT Unit",
                                        "Designer’s Note",
                                        "Endurant Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Smoke",
                                "Imperium",
                                "Voidfarers",
                                "Retinue",
                                "Imperial Navy Breachers"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Navis Sergeant-at-Arms 9 Navis Armsmen The Navis Sergeant-at-Arms is equipped with: Navis shotgun; close combat weapon. One Navis Armsman is equipped with: Navis las-volley; close combat weapon. One other Navis Armsman is equipped with: Navis heavy shotgun; close combat weapon; endurant shield. Every other model is equipped with: Navis shotgun; close combat weapon."
                },
                {
                        "id": "ia-vigilant-squad",
                        "name": "Vigilant Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 11,
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arbites combat shotgun",
                                                "range": "18\"",
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
                                                "name": "Arbites grenade launcher – frag",
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
                                                "name": "Arbites grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Arbites shotpistol",
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
                                                "name": "Executioner shotgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Precision"
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
                                                "name": "Webber",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Devastating Wounds",
                                                        "Torrent"
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
                                                "name": "Mechanical bite",
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
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Merciless Judgement",
                                        "Nuncio Aquila",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Adeptus Arbites",
                                "Vigilant Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Proctor-Vigilant 9 Vigilants 1 Cyber-mastiff Every Proctor-Vigilant and Vigilant is equipped with: Arbites combat shotgun; Arbites shotpistol; close combat weapon. The Cyber-mastiff is equipped with: mechanical bite."
                },
                {
                        "id": "ia-imperial-rhino",
                        "name": "Imperial Rhino",
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Self Repair"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Imperial Rhino"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Imperial Rhino This model is equipped with: storm bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 AGENTS OF THE IMPERIUM INFANTRY models. It cannot transport TERMINATOR or OFFICIO ASSASSINORUM models."
                },
                {
                        "id": "ia-inquisitorial-chimera",
                        "name": "Inquisitorial Chimera",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
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
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Inquisitorial Chimera"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Inquisitorial Chimera This model is equipped with: multi-laser; heavy bolter; lasgun array; armoured tracks. TRANSPORT This model has a transport capacity of 13 INQUISITOR INFANTRY and INQUISITORIAL AGENT models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "ia-sisters-of-battle-immolator",
                        "name": "Sisters of Battle Immolator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
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
                                        "Assigned Agents"
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
                                "Ordo Hereticus",
                                "Immolator"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Immolator This model is equipped with: heavy bolter; immolation flamers; armoured tracks. 1 model (AGENTS OF THE IMPERIUM Detachment) 1 model (Assigned Agent) TRANSPORT This model has a transport capacity of 6 ORDO HERETICUS INFANTRY models. At the start of the Declare Battle Formations step, you can select one SISTERS OF BATTLE SQUAD from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "ia-corvus-blackstar",
                        "name": "Corvus Blackstar",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
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
                                                "name": "Blackstar rocket launcher",
                                                "range": "30\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                                "name": "Stormstrike missile launcher",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
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
                                        "Hover",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blackstar Cluster Launcher",
                                        "Auspex Array",
                                        "Infernum Halo-launcher"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Transport",
                                "Imperium",
                                "Ordo Xenos",
                                "Retinue",
                                "Deathwatch",
                                "Corvus Blackstar"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Corvus Blackstar This model is equipped with: 2 Blackstar rocket launchers; twin assault cannon; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 DEATHWATCH INFANTRY models."
                },
                {
                        "id": "ia-exaction-squad",
                        "name": "Exaction Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 90
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
                                                "name": "Arbites combat shotgun",
                                                "range": "18\"",
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
                                                "name": "Arbites grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Arbites grenade launcher – frag",
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
                                                "name": "Arbites shotpistol",
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
                                                "name": "Executioner shotgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Precision"
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
                                                "name": "Webber",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Devastating Wounds",
                                                        "Torrent"
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
                                                "name": "Excruciator maul",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mechanical bite",
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
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Imperial Law",
                                        "Arbites Medi-kit",
                                        "Nuncio Aquila",
                                        "Designer’s Note",
                                        "Soulguilt Scanner"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Adeptus Arbites",
                                "Exaction Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Proctor-Exactant 9 Exaction Vigilants 1 Cyber-mastiff Every Proctor-Exactant and Exaction Vigilant is equipped with: Arbites combat shotgun; Arbites shotpistol; close combat weapon. The Cyber-mastiff is equipped with: mechanical bite."
                },
                {
                        "id": "ia-grey-knights-terminator-squad",
                        "name": "Grey Knights Terminator Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 190
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hammerhand",
                                        "Ancient’s Banner",
                                        "Narthecium"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Terminator",
                                "Grenades",
                                "Imperium",
                                "Ordo Malleus",
                                "Requisitioned",
                                "Grey Knights Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Terminator Justicar 4 Grey Knights Terminators Every model is equipped with: storm bolter; Nemesis force weapon. 5 models (AGENTS OF THE IMPERIUM Detachment) 5 models (Assigned Agent) Rites of Teleportation If one or more INQUISITOR units are attached to this unit during the Declare Battle formations step, models in those units have the Deep Strike ability."
                },
                {
                        "id": "ia-inquisitorial-agents",
                        "name": "Inquisitorial Agents",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 50
                                },
                                {
                                        "models": 12,
                                        "cost": 100
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
                                                "name": "Agent firearm",
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
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
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
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Agent melee weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Eviscerator",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Mystic stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Loyal Henchmen",
                                        "Tome-skull",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Inquisitorial Agents"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "5-10 Inquisitorial Agents 1-2 Gun Servitors* *This unit can only contain 2 Gun Servitors if it also contains 10 Inquisitorial Agents. Every Inquisitorial Agent is equipped with: agent firearm; agent melee weapon. Every Gun Servitor is equipped with: heavy bolter; agent melee weapon. 6 models (AGENTS OF THE IMPERIUM Detachment) 12 models (AGENTS OF THE IMPERIUM Detachment) 6 models (Assigned Agent) 12 models (Assigned Agent) INQUISITORIAL HENCHMEN If your Army Faction is not AGENTS OF THE IMPERIUM, then for each INQUISITOR unit you include in your army, you can include one INQUISITORIAL AGENTS unit in your army that does not count towards the number of RETINUE units your army can include (see Assigned Agents)."
                },
                {
                        "id": "ia-sanctifiers",
                        "name": "Sanctifiers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 9,
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
                                        "Assigned Agents"
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
                                "Retinue",
                                "Sanctifiers"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Miraculist 1 Salvationist 1 Death Cult Assassin 2 Missionaries 4 Sanctifiers The Miraculist is equipped with: holy fire; burning hands. The Salvationist is equipped with: close combat weapon; Salvationist medikit. The Death Cult Assassin is equipped with: Death Cult blades. 1 Missionary is equipped with: plasma gun; Sanctifier melee weapon. 1 Missionary is equipped with: Ministorum flamer; Sanctifier melee weapon. Every Sanctifier is equipped with: Ministorum hand flamer; Sanctifier melee weapon."
                },
                {
                        "id": "ia-sisters-of-battle-squad",
                        "name": "Sisters of Battle Squad",
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
                                                "name": "Plasma pistol - standard",
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
                                                "name": "Plasma pistol - supercharge",
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
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
                                                "ap": -1,
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
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Defenders of the Faith",
                                        "Incensor Cherub",
                                        "Designer’s Note",
                                        "Simulacrum Imperials"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Ordo Hereticus",
                                "Requisitioned",
                                "Sisters Of Battle Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Sister Superior 9 Battle Sisters Every model is equipped with: bolt pistol; boltgun; close combat weapon. 10 models (AGENTS OF THE IMPERIUM Detachment) 10 models (Assigned Agent)"
                },
                {
                        "id": "ia-subductor-squad",
                        "name": "Subductor Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 85
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arbites shotpistol",
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
                                                "name": "Mechanical bite",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Shock maul",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dedication to Duty",
                                        "Nuncio Aquila",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retinue",
                                "Adeptus Arbites",
                                "Subductor Squad"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Proctor-Subductor 9 Subductors 1 Cyber-mastiff Every Proctor-Subductor and Subductor is equipped with: Arbites shotpistol; shock maul. The Cyber-mastiff is equipped with: mechanical bite. 11 models (AGENTS OF THE IMPERIUM Detachment) 11 models (Assigned Agent)"
                },
                {
                        "id": "ia-voidsmen-at-arms",
                        "name": "Voidsmen-at-arms",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 50
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Artificer shotgun",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
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
                                                "name": "Voidsman rotor cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
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
                                                "name": "Vicious bite",
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
                                "core": [],
                                "faction": [
                                        "Assigned Agents"
                                ],
                                "wargear": [],
                                "other": [
                                        "Masters of Close Confines"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Voidfarers",
                                "Retinue",
                                "Voidsmen-At-Arms"
                        ],
                        "factionKeywords": [
                                "Agents Of The Imperium"
                        ],
                        "compositionText": "1 Voidmaster 4 Voidsmen 1 Canid The Voidmaster is equipped with: artificer shotgun; laspistol; close combat weapon. One Voidsman is equipped with: laspistol; Voidsman rotor cannon; close combat weapon. Every other Voidsman is equipped with: lasgun; laspistol; close combat weapon. The Canid is equipped with: vicious bite. 6 models (AGENTS OF THE IMPERIUM Detachment) 6 models (Assigned Agent) NAVY BODYGUARD If your Army Faction is not AGENTS OF THE IMPERIUM, then for each VOIDFARERS CHARACTER unit you include in your army, you can include one VOIDSMEN-AT-ARMS unit in your army that does not count towards the number of RETINUE units your army can include (see Assigned Agents)"
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ia);
})();
