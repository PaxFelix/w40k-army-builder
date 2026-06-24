/**
 * W40K Army Builder — Chaos Daemons (10th Edition)
 *
 * Datasheets from Codex: Chaos Daemons. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const cd = {
        id: "chaos-daemons",
        name: "Chaos Daemons",
        icon: "👹",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Shadow of Chaos", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Daemonic Incursion",
                flavour: "",
                rule: { name: "Warp Rifts", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "A'rgath, the King of Blades", cost: 20, restriction: "KHORNE LEGIONES DAEMONICA model only.", text: "" },
                    { name: "Soulstealer", cost: 15, restriction: "SLAANESH LEGIONES DAEMONICA model only.", text: "" },
                    { name: "The Endless Gift", cost: 30, restriction: "NURGLE LEGIONES DAEMONICA model only.", text: "" },
                    { name: "The Everstave", cost: 25, restriction: "TZEENTCH LEGIONES DAEMONICA model only.", text: "" },
                ],
                stratagems: [
                    { name: "Corrupt Realspace", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Warp Surge", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Draught of Terror", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Denizens of the Warp", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "The Realm of Chaos", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Daemonic Invulnerability", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Shadow Legion",
                flavour: "",
                rule: { name: "Thralls of the First Prince", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Leaping Shadows", cost: 25, restriction: "SHADOW LEGION model only.", text: "" },
                    { name: "Mantle of Gloom (Aura)", cost: 20, restriction: "SHADOW LEGION model only.", text: "" },
                    { name: "Fade to Darkness", cost: 30, restriction: "SHADOW LEGION model only.", text: "" },
                    { name: "Malice Made Manifest", cost: 25, restriction: "SHADOW LEGION model only.", text: "" },
                ],
                stratagems: [
                    { name: "Spiteful Demise", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Channelled Wrath", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Death Denied", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Encroaching Darkness", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Shade Path", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Binding Shadow", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Blood Legion",
                flavour: "",
                rule: { name: "Murdercall", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Slaughterthirst (Aura)", cost: 25, restriction: "LEGIONES DAEMONICA KHORNE model only.", text: "" },
                    { name: "Fury's Cage", cost: 20, restriction: "LEGIONES DAEMONICA KHORNE MONSTER model only.", text: "" },
                    { name: "Brazenmaw", cost: 15, restriction: "LEGIONES DAEMONICA KHORNE model only.", text: "" },
                    { name: "Gateway Unto Damnation", cost: 10, restriction: "LEGIONES DAEMONICA KHORNE MONSTER model only.", text: "" },
                ],
                stratagems: [
                    { name: "Wrath Undeniable", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Gore-hungry Onslaught", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Skulls Beget Blood", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Blood Begets Skulls", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fools' Flight", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Sheathed in Brass", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Legion of Excess",
                flavour: "",
                rule: { name: "Beguiling Aura", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "False Majesty (Aura)", cost: 30, restriction: "LEGIONES DAEMONICA SLAANESH model only.", text: "" },
                    { name: "Dreaming Crown (Aura)", cost: 30, restriction: "LEGIONES DAEMONICA SLAANESH model only.", text: "" },
                    { name: "Avatar of Perfection", cost: 15, restriction: "LEGIONES DAEMONICA SLAANESH MONSTER model only.", text: "" },
                    { name: "Soul Glutton", cost: 10, restriction: "LEGIONES DAEMONICA SLAANESH MONSTER model only.", text: "" },
                ],
                stratagems: [
                    { name: "Thieves of Pain", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Archagonists", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Sensory Excruciation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Phantasmal Longing", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cavalcade of Blades", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Overwhelming Excess", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Plague Legion",
                flavour: "",
                rule: { name: "Melancholic Miasma", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Cankerblight", cost: 15, restriction: "LEGIONES DAEMONICA NURGLE model only.", text: "" },
                    { name: "Maggot Maws", cost: 15, restriction: "LEGIONES DAEMONICA NURGLE model only.", text: "" },
                    { name: "Droning Shroud (Aura)", cost: 35, restriction: "LEGIONES DAEMONICA NURGLE MONSTER model only.", text: "" },
                    { name: "Font of Spores (Aura)", cost: 20, restriction: "LEGIONES DAEMONICA NURGLE MONSTER model only.", text: "" },
                ],
                stratagems: [
                    { name: "Seeping Virulence", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fever Visions", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Foetid Resurgence", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rot and Renewal", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Murkshadows", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Plague of Woes", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Scintillating Legion",
                flavour: "",
                rule: { name: "Fates in Flux", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Inescapable Eye", cost: 10, restriction: "LEGIONES DAEMONICA TZEENTCH model only.", text: "" },
                    { name: "Infernal Puppeteer", cost: 25, restriction: "LEGIONES DAEMONICA TZEENTCH MONSTER model only.", text: "" },
                    { name: "Neverblade", cost: 20, restriction: "LEGIONES DAEMONICA TZEENTCH MONSTER model only.", text: "" },
                    { name: "Improbable Shield (Aura)", cost: 30, restriction: "LEGIONES DAEMONICA TZEENTCH model only.", text: "" },
                ],
                stratagems: [
                    { name: "Impossible Eclipse", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Pyrogenesis", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Flickering Reality", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fateborne Nightmares", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ficklefire", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Delirium Unmade", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "cd-belakor",
                        "name": "Be’lakor",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 375
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Betraying Shades – witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Betraying Shades – focused witchfire",
                                                "range": "18\"",
                                                "a": 12,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "The Blade of Shadows – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "The Blade of Shadows – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Stealth"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Wreathed in Shadows",
                                        "Pall of Despair",
                                        "Shadow Lord",
                                        "The Dark Master",
                                        "Shadow Form"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Be’lakor"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Be’lakor – EPIC HERO This model is equipped with: Betraying Shades; the Blade of Shadows. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "cd-bloodmaster",
                        "name": "Bloodmaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Blade of blood",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bloodmaster",
                                        "A Gory Path"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodmaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Bloodletters.",
                        "compositionText": "1 Bloodmaster This model is equipped with: blade of blood."
                },
                {
                        "id": "cd-bloodthirster",
                        "name": "Bloodthirster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 305
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bloodflail",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Hellfire breath",
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
                                                "name": "Lash of Khorne",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Axe of Khorne – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D3+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Axe of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 16,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great axe of Khorne – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great axe of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Khorne",
                                        "Relentless Carnage",
                                        "Greater Daemon of Khorne"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodthirster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Bloodthirster This model is equipped with: hellfire breath; great axe of Khorne DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-changecaster",
                        "name": "Changecaster",
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
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arcane Fireball – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Arcane Fireball – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
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
                                                "name": "Herald combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Changecaster",
                                        "Storm of Mutating Sorcery"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Changecaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following units: Blue Horrors; Pink Horrors.",
                        "compositionText": "1 Changecaster This model is equipped with: Arcane Fireball; Herald combat weapon."
                },
                {
                        "id": "cd-contorted-epitome",
                        "name": "Contorted Epitome",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Coiled tentacles",
                                                "range": "Melee",
                                                "a": "D6",
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Ravaging claws",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swallow Energy",
                                        "Horrible Fascination"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Slaanesh",
                                "Contorted Epitome"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Contorted Epitome This model is equipped with: coiled tentacles; ravaging claws."
                },
                {
                        "id": "cd-daemon-prince-of-chaos",
                        "name": "Daemon Prince of Chaos",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Lord",
                                        "Prince of Darkness",
                                        "Unholy Vigour"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince Of Chaos"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Daemon Prince of Chaos This model is equipped with: infernal cannon; hellforged weapons. DAEMONIC ALLEGIANCE When you select this model to include in your army, you must select one of the following keywords for it to gain: KHORNE TZEENTCH NURGLE SLAANESH The keyword you select will also affect some of this model’s characteristics, as stated overleaf."
                },
                {
                        "id": "cd-daemon-prince-of-chaos-with-wings",
                        "name": "Daemon Prince of Chaos with Wings",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Malefic Destruction",
                                        "Harbinger of Death"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince Of Chaos With Wings"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Daemon Prince of Chaos with Wings This model is equipped with: infernal cannon; hellforged weapons. DAEMONIC ALLEGIANCE When you select this model to include in your army, you must select one of the following keywords for it to gain: KHORNE TZEENTCH NURGLE SLAANESH The keyword you select will also affect some of this model’s characteristics, as stated overleaf."
                },
                {
                        "id": "cd-epidemius",
                        "name": "Epidemius",
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
                                "sv": "6+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Balesword and Nurgling attendants",
                                                "range": "Melee",
                                                "a": "D6+3",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blessed by the Plague God",
                                        "Tally of Pestilence"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Epidemius"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Epidemius – EPIC HERO This model is equipped with: balesword and Nurgling attendants."
                },
                {
                        "id": "cd-exalted-flamer",
                        "name": "Exalted Flamer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fire of Tzeentch – blue fire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Fire of Tzeentch – pink fire",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flamer mouths",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blazing Warpfire",
                                        "Flames of Change"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Exalted Flamer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Flamers.",
                        "compositionText": "1 Exalted Flamer This model is equipped with: Fire of Tzeentch; Flamer mouths."
                },
                {
                        "id": "cd-fateskimmer",
                        "name": "Fateskimmer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 7,
                                "sv": "6+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arcane Fireball – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Arcane Fireball – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
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
                                                "name": "Herald combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Screamer bites",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fateskimmer",
                                        "Rider of the Immaterial Winds"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Fateskimmer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Screamers.",
                        "compositionText": "1 Fateskimmer This model is equipped with: Arcane Fireball; Herald combat weapon; Screamer bites."
                },
                {
                        "id": "cd-fluxmaster",
                        "name": "Fluxmaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arcane Fireball – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Arcane Fireball – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
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
                                                "name": "Herald combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fluxmaster",
                                        "Altered Reality"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Fluxmaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following units: Blue Horrors; Pink Horrors.",
                        "compositionText": "1 Fluxmaster This model is equipped with: Arcane Fireball; Herald combat weapon."
                },
                {
                        "id": "cd-great-unclean-one",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Nurgle",
                                        "Daemon Lord of Nurgle",
                                        "Nurgle’s Rot"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Great Unclean One"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Great Unclean One This model is equipped with: plague flail; putrid vomit; bilesword. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-horticulous-slimux",
                        "name": "Horticulous Slimux",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Acidic maw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Lopping shears",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Beast Handler",
                                        "Seed the Garden of Nurgle"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Horticulous Slimux"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Beasts of Nurgle.",
                        "compositionText": "1 Horticulous Slimux – EPIC HERO This model is equipped with: acidic maw; lopping shears."
                },
                {
                        "id": "cd-infernal-enrapturess",
                        "name": "Infernal Enrapturess",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heartstring lyre – cacophonous melody",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Heartstring lyre – euphonic blast",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ravaging claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Harmonic Alignment",
                                        "Discordant Disruption"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Infernal Enrapturess"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Infernal Enrapturess This model is equipped with: heartstring lyre; ravaging claws."
                },
                {
                        "id": "cd-kairos-fateweaver",
                        "name": "Kairos Fateweaver",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 295
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "6+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal Gateway – witchfire",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gateway – focused witchfire",
                                                "range": "24\"",
                                                "a": "D3+6",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Staff of Tomorrow",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "2D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Tzeentch",
                                        "One Head Looks Forward",
                                        "One Head Looks Back"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Kairos Fateweaver"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Kairos Fateweaver – EPIC HERO This model is equipped with: Infernal Gateway; Staff of Tomorrow. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-karanak",
                        "name": "Karanak",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Scalding roar",
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
                                                "name": "Soul-rending fangs",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Character 3+",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pack Leader",
                                        "Prey of the Blood God",
                                        "Brass Collar of Bloody Vengeance"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Karanak"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Flesh Hounds.",
                        "compositionText": "1 Karanak – EPIC HERO This model is equipped with: scalding roar; soul-rending fangs; Brass Collar of Bloody Vengeance."
                },
                {
                        "id": "cd-keeper-of-secrets",
                        "name": "Keeper of Secrets",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 240
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 10,
                                "sv": "5+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Living whip",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Phantasmagoria – witchfire",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Phantasmagoria – focused witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ritual knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Snapping claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Witstealer sword",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Slaanesh",
                                        "Mesmerising Form",
                                        "Greater Daemon of Slaanesh",
                                        "Shining Aegis"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Keeper Of Secrets"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Keeper of Secrets This model is equipped with: Phantasmagoria; snapping claws; witstealer sword. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-lord-of-change",
                        "name": "Lord of Change",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 285
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "6+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Rod of sorcery",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Bolt of Change – witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Bolt of Change – focused witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Baleful sword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Staff of Tzeentch",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Tzeentch",
                                        "Master of Magicks",
                                        "Greater Daemon of Tzeentch"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Lord Of Change"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Lord of Change This model is equipped with: Bolt of Change; staff of Tzeentch. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-poxbringer",
                        "name": "Poxbringer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Foul balesword",
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
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Poxbringer",
                                        "Feculent Despair"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Poxbringer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Poxbringer This model is equipped with: foul balesword."
                },
                {
                        "id": "cd-rendmaster-on-blood-throne",
                        "name": "Rendmaster on Blood Throne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Attendants’ hellblades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Blade of blood",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blood Throne",
                                        "Champion Slayer"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Rendmaster On Blood Throne"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Rendmaster on Blood Throne This model is equipped with: attendants’ hellblades; blade of blood."
                },
                {
                        "id": "cd-rotigus",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Nurgle",
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
                                "Daemon",
                                "Nurgle",
                                "Rotigus"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Rotigus – EPIC HERO This model is equipped with: streams of brackish filth; gnarlrod. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-shalaxi-helbane",
                        "name": "Shalaxi Helbane",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 340
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lash of Slaanesh",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Pavane of Slaanesh – witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Pavane of Slaanesh – focused witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Hazardous",
                                                        "Devastating Wounds",
                                                        "Psychic",
                                                        "Sustained Hits 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Snapping claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Soulpiercer",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Slaanesh",
                                        "No Prey Can Evade",
                                        "Monarch of the Hunt"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Shalaxi Helbane"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Shalaxi Helbane – EPIC HERO This model is equipped with: lash of Slaanesh; Pavane of Slaanesh; snapping claws; soulpiercer. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-skarbrand",
                        "name": "Skarbrand",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 305
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bellow of endless fury",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 8,
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
                                                "name": "Slaughter and Carnage – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Slaughter and Carnage – sweep",
                                                "range": "Melee",
                                                "a": 16,
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
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Khorne",
                                        "Rage Embodied",
                                        "Murderlust"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skarbrand"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Skarbrand – EPIC HERO This model is equipped with: bellow of endless fury; Slaughter and Carnage. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, add 2 to the Attacks characteristic of this model’s Slaughter and Carnage."
                },
                {
                        "id": "cd-skullmaster",
                        "name": "Skullmaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Blade of blood",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Juggernaut’s bladed horn",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance"
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Skullmaster’s Fury",
                                        "Devastating Charge"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skullmaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Bloodcrushers.",
                        "compositionText": "1 Skullmaster This model is equipped with: blade of blood; Juggernaut’s bladed horn."
                },
                {
                        "id": "cd-skulltaker",
                        "name": "Skulltaker",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "The Slayer Sword",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Decapitations",
                                        "Skulls for Khorne"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skulltaker"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Bloodletters.",
                        "compositionText": "1 Skulltaker – EPIC HERO This model is equipped with: the Slayer Sword."
                },
                {
                        "id": "cd-sloppity-bilepiper",
                        "name": "Sloppity Bilepiper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Marotter",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Jolly Gutpipes",
                                        "Disease of Mirth"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Sloppity Bilepiper"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Sloppity Bilepiper This model is equipped with: marotter."
                },
                {
                        "id": "cd-spoilpox-scrivener",
                        "name": "Spoilpox Scrivener",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Disgusting sneezes",
                                                "range": "6\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plaguesword and distended maw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Keep Counting!",
                                        "Meet Your Quota!"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Spoilpox Scrivener"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Spoilpox Scrivener This model is equipped with: disgusting sneezes; plaguesword and distended maw."
                },
                {
                        "id": "cd-syllesske",
                        "name": "Syll’esske",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 6,
                                "sv": "6+",
                                "w": 9,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cacophonic choir – witchfire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Cacophonic choir – focused witchfire",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Devastating Wounds",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Scourging whip",
                                                "range": "9\"",
                                                "a": 6,
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
                                                "name": "Axe of Dominion",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Scourging whip",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Prince of Slaanesh",
                                        "Delightful Agonies"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Syll’esske"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Syll’Esske – EPIC HERO This model is equipped with: Cacophonic Choir; scourging whip; Axe of Dominion."
                },
                {
                        "id": "cd-the-blue-scribes",
                        "name": "The Blue Scribes",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 6,
                                "ld": "8+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Sharp quills",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "5+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "P’tarix’s Sorcerous Syphon",
                                        "Xirat’p’s Sorcerous Barrages"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "The Blue Scribes"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 The Blue Scribes – EPIC HERO This model is equipped with: sharp quills."
                },
                {
                        "id": "cd-the-changeling",
                        "name": "The Changeling",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal Flames – witchfire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Flames – focused witchfire",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Hazardous",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "The Trickster’s Staff",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Formless Horror",
                                        "Mischief and Confusion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "The Changeling"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 The Changeling – EPIC HERO This model is equipped with: Infernal Flames; the Trickster’s Staff."
                },
                {
                        "id": "cd-the-masque-of-slaanesh",
                        "name": "The Masque of Slaanesh",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Serrated claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Fights First",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Eternal Dance",
                                        "Dazzling Acrobatics"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "The Masque Of Slaanesh"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 The Masque of Slaanesh – EPIC HERO This model is equipped with: serrated claws."
                },
                {
                        "id": "cd-tormentbringer",
                        "name": "Tormentbringer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Seeker tongues",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Slashing claws",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tormentbringer",
                                        "Hysterical Frenzy"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Tormentbringer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Hellflayers.",
                        "compositionText": "1 Tormentbringer This model is equipped with: lashes of torment; Seeker tongues; slashing claws."
                },
                {
                        "id": "cd-tranceweaver",
                        "name": "Tranceweaver",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ravaging claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tranceweaver",
                                        "Symphony of Pain"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Tranceweaver"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Tranceweaver This model is equipped with: ravaging claws."
                },
                {
                        "id": "cd-bloodletters",
                        "name": "Bloodletters",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hellblade",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bane of Cowards",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodletters"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Bloodreaper 9 Bloodletters Every model is equipped with: hellblade."
                },
                {
                        "id": "cd-blue-horrors",
                        "name": "Blue Horrors",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Coruscating Blue Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Coruscating Yellow Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blue claws",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Yellow claws",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Deep Strike",
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Split",
                                        "Sullen Malevolence",
                                        "Exploding Horrors"
                                ]
                        },
                        "keywords": [
                                "Legiones Daemonica"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "10 Blue Horrors Every Blue Horror is equipped with: Coruscating Blue Flames; blue claws. Every Brimstone Horror added to this unit using the Split ability is equipped with: Coruscating Yellow Flames; yellow claws. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, CHAOS, DAEMON, TZEENTCH, HORRORSBLUE HORRORS: BLUEBRIMSTONE HORRORS: BRIMSTONE: FACTION"
                },
                {
                        "id": "cd-daemonettes",
                        "name": "Daemonettes",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Slashing claws",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Fights First"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Horrifying Beauty",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Daemonettes"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Alluress 9 Daemonettes Every model is equipped with: slashing claws."
                },
                {
                        "id": "cd-nurglings",
                        "name": "Nurglings",
                        "role": "battleline",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mischief Makers"
                                ]
                        },
                        "keywords": [
                                "Swarm",
                                "Battleline",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Nurglings"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "3-6 Nurgling Swarms Every model is equipped with: diseased claws and teeth."
                },
                {
                        "id": "cd-pink-horrors",
                        "name": "Pink Horrors",
                        "role": "infantry",
                        "points": [
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
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Coruscating Pink Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Coruscating Blue Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Coruscating Yellow Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Pink claws",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Blue claws",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Yellow claws",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Split",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Legiones Daemonica"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "10 Pink Horrors Every Pink Horror is equipped with: Coruscating Pink Flames; pink claws. Every Blue Horror added to this unit using the Split ability is equipped with: Coruscating Blue Flames; blue claws. Every Brimstone Horror added to this unit using the Split ability is equipped with: Coruscating Yellow Flames; yellow claws. HORRORS ARE PINK. HORRORS ARE BLUE. WHEREONCE THERE WAS ONE, NOW THERE ARE TWO. If, at any point, this unit contains no PINK HORROR models, use the BLUE HORRORS datasheet for this unit. Designer’s Note: While this unit contains one or more PINK HORROR models, the Sullen Malevolence and Exploding Horrors abilities from the BLUE HORRORS datasheet do not apply to this unit. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, CHAOS, DAEMON, TZEENTCH, HORRORSPINK HORRORS: PINKBLUE HORRORS: BLUEBRIMSTONE HORRORS: BRIMSTONE: FACTION"
                },
                {
                        "id": "cd-plaguebearers",
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
                                        "The Shadow of Chaos"
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
                                "Daemon",
                                "Nurgle",
                                "Plaguebearers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Plagueridden 9 Plaguebearers Every model is equipped with: plaguesword."
                },
                {
                        "id": "cd-feculent-gnarlmaw",
                        "name": "Feculent Gnarlmaw",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 9,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Shroud of Flies",
                                        "Diseased Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Feculent Gnarlmaw"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Feculent Gnarlmaw This model is equipped with: nothing."
                },
                {
                        "id": "cd-skull-altar",
                        "name": "Skull Altar",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 12,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Shadow of Khorne",
                                        "Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skull Altar"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Skull Altar This model is equipped with: nothing."
                },
                {
                        "id": "cd-beasts-of-nurgle",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grotesque Regeneration"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Beasts Of Nurgle"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1-2 Beasts of Nurgle Every model is equipped with: putrid appendages."
                },
                {
                        "id": "cd-bloodcrushers",
                        "name": "Bloodcrushers",
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
                                "m": "10\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hellblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Juggernaut’s bladed horn",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brass Stampede",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodcrushers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Bloodhunter 2-5 Bloodcrushers Every model is equipped with: hellblade; Juggernaut’s bladed horn."
                },
                {
                        "id": "cd-burning-chariot",
                        "name": "Burning Chariot",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "7+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fire of Tzeentch – blue fire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Fire of Tzeentch – pink fire",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flamer mouths",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Screamer bites",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+",
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Eldritch Flames"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Burning Chariot"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Burning Chariot This model is equipped with: Fire of Tzeentch; Flamer mouths; Screamer bites."
                },
                {
                        "id": "cd-fiends",
                        "name": "Fiends",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 95
                                },
                                {
                                        "models": 6,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Barbed tail and dissecting claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Soporific Musk"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Fiends"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Blissbringer 2-5 Fiends Every model is equipped with: barbed tail and dissecting claws."
                },
                {
                        "id": "cd-flamers",
                        "name": "Flamers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                },
                                {
                                        "models": 6,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flickering Flames",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flamer mouths",
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bounding Leaps"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Flamers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Pyrocaster 2-5 Flamers Every model is equipped with: Flickering Flames; Flamer mouths."
                },
                {
                        "id": "cd-flesh-hounds",
                        "name": "Flesh Hounds",
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
                                "sv": "7+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Burning roar",
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
                                                "name": "Gore-drenched fangs",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hunters from the Warp",
                                        "Collar of Khorne"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Flesh Hounds"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Gore Hound 4-9 Flesh Hounds The Gore Hound is equipped with: burning roar; gore-drenched fangs; collar of Khorne. Every Flesh Hound is equipped with: gore-drenched fangs; collar of Khorne."
                },
                {
                        "id": "cd-hellflayers",
                        "name": "Hellflayers",
                        "role": "mounted",
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
                                "m": "14\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Seeker tongues",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Slashing claws",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cutting Down the Foe"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Hellflayers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1-2 Hellflayers Every model is equipped with: lashes of torment; Seeker tongues; slashing claws."
                },
                {
                        "id": "cd-plague-drones",
                        "name": "Plague Drones",
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
                                        "The Shadow of Chaos"
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
                                "Daemon",
                                "Nurgle",
                                "Plague Drones"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Plaguebringer 2-5 Plague Drones Every model is equipped with: death’s heads; foul mouthparts; plaguesword."
                },
                {
                        "id": "cd-screamers",
                        "name": "Screamers",
                        "role": "infantry",
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
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lamprey bite",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Slashing Dive"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Screamers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "3-6 Screamers Every model is equipped with: lamprey bite."
                },
                {
                        "id": "cd-seekers",
                        "name": "Seekers",
                        "role": "mounted",
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
                                "m": "14\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lashing tongue",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Slashing claws",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unholy Speed",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Seekers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Heartseeker 4-9 Seekers Every model is equipped with: lashing tongue; slashing claws."
                },
                {
                        "id": "cd-skull-cannon",
                        "name": "Skull Cannon",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Skull cannon",
                                                "range": "48\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Attendants’ hellblades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Biting maw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Skulls of the Fallen"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skull Cannon"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Skull Cannon This model is equipped with: skull cannon; attendants’ hellblades; biting maw."
                },
                {
                        "id": "cd-soul-grinder",
                        "name": "Soul Grinder",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Harvester cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Torrent of burning blood",
                                                "range": "12\"",
                                                "a": "2D6",
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
                                                "name": "Phlegm bombardment",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Scream of despair",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Warp gaze",
                                                "range": "48\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Iron claw",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpclaw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Warpsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Soul Grinder"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Soul Grinder This model is equipped with: harvester cannon; iron claw; warpsword. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(cd);
})();
