/**
 * W40K Army Builder -- Salamanders (10th Edition)
 *
 * DATA SCOPE: This module contains only short factual game data -- points,
 * model counts, statlines (M/T/Sv/W/Ld/OC), weapon profiles (range, attacks,
 * skill, strength, AP, damage) and keyword labels. Ability, detachment,
 * stratagem and enhancement entries are stored as NAMES ONLY; their rules text
 * is intentionally left for the army owner to fill in from their own codex.
 *
 * The Salamanders field the shared Codex: Space Marines datasheets (carrying
 * the ADEPTUS ASTARTES faction keyword) plus their two unique characters,
 * Adrax Agatone and Vulkan He'stan.
 *
 * This module self-registers into the global W40K_FACTIONS registry, which
 * data/factions.js assembles into the final DATA object.
 */
(function () {
    "use strict";

    const salamanders = {
        id: "salamanders",
        name: "Salamanders",
        icon: "\uD83D\uDD25",
        allegiance: "Imperium",
        chapter: "Salamanders",
        flavour: "",

        // ARMY RULES (names only -- fill in text from your codex)
        armyRules: [
            { name: "Oath of Moment", flavour: "", text: "" }
        ],

        // DETACHMENTS (names only -- fill in rule/strat/enhancement text)
        detachments: [
            {
                name: "Gladius Task Force",
                flavour: "",
                rule: { name: "Combat Doctrines", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Artificer Armour", cost: 10, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "The Honour Vehement", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Adept of the Codex", cost: 20, restriction: "CAPTAIN model only." },
                    { name: "Fire Discipline", cost: 25, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Only in Death Does Duty End", cp: 2, type: "Epic Deed" },
                    { name: "Honour the Chapter", cp: 1, type: "Battle Tactic" },
                    { name: "Adaptive Strategy", cp: 1, type: "Strategic Ploy" },
                    { name: "Storm of Fire", cp: 1, type: "Battle Tactic" },
                    { name: "Squad Tactics", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Anvil Siege Force",
                flavour: "",
                rule: { name: "Shield of the Imperium", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Indomitable Fury", cost: 20, restriction: "GRAVIS model only." },
                    { name: "Fleet Commander", cost: 15, restriction: "CAPTAIN model only." },
                    { name: "Stoic Defender", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Architect of War", cost: 25, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Rigid Discipline", cp: 1, type: "Strategic Ploy" },
                    { name: "Not One Backwards Step", cp: 1, type: "Strategic Ploy" },
                    { name: "No Threat Too Great", cp: 2, type: "Battle Tactic" },
                    { name: "Battle Drill Recall", cp: 1, type: "Battle Tactic" },
                    { name: "Hail of Vengeance", cp: 2, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Ironstorm Spearhead",
                flavour: "",
                rule: { name: "Armoured Wrath", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Target Augury Web", cost: 30, restriction: "TECHMARINE model only." },
                    { name: "The Flesh is Weak", cost: 10, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Adept of the Omnissiah", cost: 35, restriction: "TECHMARINE model only." },
                    { name: "Master of Machine War", cost: 20, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Unbowed Conviction", cp: 1, type: "Battle Tactic" },
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Mercy Is Weakness", cp: 2, type: "Battle Tactic" },
                    { name: "Vengeful Animus", cp: 1, type: "Epic Deed" },
                    { name: "Ancient Fury", cp: 1, type: "Epic Deed" },
                    { name: "Power of the Machine Spirit", cp: 1, type: "Epic Deed" },
                ]
            },
            {
                name: "Firestorm Assault Force",
                flavour: "",
                rule: { name: "Close-range Eradication", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Champion of Humanity", cost: 10, restriction: "TACTICUS model only." },
                    { name: "War-tempered Artifice", cost: 25, restriction: "ADEPTUS ASTARTES INFANTRY model only." },
                    { name: "Forged in Battle", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Adamantine Mantle", cost: 20, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Crucible of Battle", cp: 1, type: "Battle Tactic" },
                    { name: "Rapid Embarkation", cp: 1, type: "Strategic Ploy" },
                    { name: "Immolation Protocols", cp: 2, type: "Battle Tactic" },
                    { name: "Onslaught of Fire", cp: 1, type: "Battle Tactic" },
                    { name: "Burning Vengeance", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Stormlance Task Force",
                flavour: "",
                rule: { name: "Lightning Assault", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Fury of the Storm", cost: 25, restriction: "ADEPTUS ASTARTES MOUNTED model only." },
                    { name: "Portents of Wisdom", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Feinting Withdrawal", cost: 10, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Hunter's Instincts", cost: 25, restriction: "ADEPTUS ASTARTES MOUNTED model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Blitzing Fusillade", cp: 1, type: "Battle Tactic" },
                    { name: "Full Throttle", cp: 2, type: "Wargear" },
                    { name: "Shock Assault", cp: 1, type: "Battle Tactic" },
                    { name: "Ride Hard, Ride Fast", cp: 1, type: "Battle Tactic" },
                    { name: "Wind-swift Evasion", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Vanguard Spearhead",
                flavour: "",
                rule: { name: "Shadow Masters", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "The Blade Driven Deep", cost: 25, restriction: "ADEPTUS ASTARTES INFANTRY model only." },
                    { name: "Ghostweave Cloak", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Execute and Redeploy", cost: 20, restriction: "PHOBOS model only." },
                    { name: "Shadow War Veteran", cost: 30, restriction: "PHOBOS model only." },
                ],
                stratagems: [
                    { name: "A Deadly Prize", cp: 1, type: "Wargear" },
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Surgical Strikes", cp: 2, type: "Battle Tactic" },
                    { name: "Strike from the Shadows", cp: 1, type: "Battle Tactic" },
                    { name: "Calculated Feint", cp: 1, type: "Strategic Ploy" },
                    { name: "Guerrilla Tactics", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "1st Company Task Force",
                flavour: "",
                rule: { name: "Extremis-level Threat", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "The Imperium's Sword", cost: 25, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Fear Made Manifest (Aura)", cost: 30, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Rites of War", cost: 10, restriction: "ADEPTUS ASTARTES TERMINATOR model only." },
                    { name: "Iron Resolve", cost: 15, restriction: "ADEPTUS ASTARTES TERMINATOR model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Heroes of the Chapter", cp: 1, type: "Battle Tactic" },
                    { name: "Terrifying Proficiency", cp: 1, type: "Strategic Ploy" },
                    { name: "Duty and Honour", cp: 1, type: "Strategic Ploy" },
                    { name: "Orbital Teleportarium", cp: 1, type: "Strategic Ploy" },
                    { name: "Legendary Fortitude", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Librarius Conclave",
                flavour: "",
                rule: { name: "Psychic Disciplines", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Prescience", cost: 25 },
                    { name: "Celerity", cost: 30, restriction: "ADEPTUS ASTARTES PSYKER model only." },
                    { name: "Obfuscation", cost: 20, restriction: "ADEPTUS ASTARTES PSYKER model only." },
                    { name: "Fusillade", cost: 35, restriction: "ADEPTUS ASTARTES PSYKER model only." },
                ],
                stratagems: [
                    { name: "Sensory Assault", cp: 1, type: "Strategic Ploy" },
                    { name: "Armour of Contempt", cp: 1, type: "Strategic Ploy" },
                    { name: "Fiery Shield", cp: 1, type: "Strategic Ploy" },
                    { name: "Iron Arm", cp: 1, type: "Strategic Ploy" },
                    { name: "Assail", cp: 1, type: "Strategic Ploy" },
                    { name: "Prescient Precision", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Bastion Task Force",
                flavour: "",
                rule: { name: "Interlocking Tactics", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eye of the Primarch", cost: 10, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Hero of the Chapter", cost: 20, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Blades of Valour", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Bombast Omnivox", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Codex Discipline", cp: 1, type: "Battle Tactic" },
                    { name: "Guided Disruption", cp: 1, type: "Strategic Ploy" },
                    { name: "Light of Vengeance", cp: 1, type: "Battle Tactic" },
                    { name: "Shock Bombardment", cp: 1, type: "Strategic Ploy" },
                    { name: "Angels Defiant", cp: 1, type: "Battle Tactic" },
                    { name: "Heresy Undone", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Orbital Assault Force",
                flavour: "",
                rule: { name: "Rapid-drop Deployment", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Laurels of Thunder", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Veteran of the Vanguard", cost: 20, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Orbital Uplink Reliquary", cost: 25, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Dedicated Gunship", cost: 15, restriction: "ADEPTUS ASTARTES TERMINATOR model only." },
                ],
                stratagems: [
                    { name: "Suppression Strafing", cp: 1, type: "Strategic Ploy" },
                    { name: "Tactical Decapitation", cp: 1, type: "Battle Tactic" },
                    { name: "Shock Onslaught", cp: 1, type: "Strategic Ploy" },
                    { name: "Auto-sense Coordination", cp: 1, type: "Battle Tactic" },
                    { name: "Blind Screen", cp: 1, type: "Strategic Ploy" },
                    { name: "Onward for the Emperor", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Ceramite Sentinels",
                flavour: "",
                rule: { name: "Adaptive Defence", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Honour Indefatigable", cost: 25, restriction: "GRAVIS model only." },
                    { name: "Castellum Omnivox", cost: 20, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Spy-skull Data Link", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Defensive Mastery", cost: 25, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Unyielding Might", cp: 1, type: "Battle Tactic" },
                    { name: "Priority Strike", cp: 2, type: "Battle Tactic" },
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Stand to the End", cp: 1, type: "Epic Deed" },
                    { name: "Augmented Targeting", cp: 1, type: "Battle Tactic" },
                    { name: "Evasive Repositioning", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Armoured Speartip",
                flavour: "",
                rule: { name: "Rapid Deployment", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Liberator", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Tip of the Spear", cost: 40, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Shock Deployment", cost: 20, restriction: "ADEPTUS ASTARTES TERMINATOR or GRAVIS model only." },
                    { name: "Armoured Commander", cost: 25, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Machine Wrath", cp: 1, type: "Epic Deed" },
                    { name: "Armour of Contempt", cp: 1, type: "Strategic Ploy" },
                    { name: "Rapid Embarkation", cp: 1, type: "Wargear" },
                    { name: "Ceramite Sledgehammer", cp: 1, type: "Strategic Ploy" },
                    { name: "Advanced Deployment", cp: 1, type: "Strategic Ploy" },
                    { name: "Purgation Doctrine", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Headhunter Task Force",
                flavour: "",
                rule: { name: "Target Sighted", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Redoubtable Machine Spirit", cost: 25, restriction: "ADEPTUS ASTARTES VEHICLE model only." },
                    { name: "Gunnery Honours", cost: 20, restriction: "ADEPTUS ASTARTES VEHICLE model only." },
                    { name: "Firestorm Coordinators", cost: 20, restriction: "ADEPTUS ASTARTES VEHICLE model only." },
                    { name: "Astartes Tank Ace (Aura)", cost: 40, restriction: "ADEPTUS ASTARTES VEHICLE model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Strategic Ploy" },
                    { name: "Target Weak Point", cp: 1, type: "Battle Tactic" },
                    { name: "Kill Shot", cp: 1, type: "Battle Tactic" },
                    { name: "Rapid Gunnery", cp: 1, type: "Strategic Ploy" },
                    { name: "Reactive Repositioning", cp: 1, type: "Strategic Ploy" },
                    { name: "Machine Vengeance", cp: 1, type: "Epic Deed" },
                ]
            },
            {
                name: "Forgefather's Seekers",
                flavour: "",
                rule: { name: "Vulkan's Quest", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Immolator", cost: 10, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "War-tempered Artifice", cost: 25, restriction: "ADEPTUS ASTARTES INFANTRY model only." },
                    { name: "Forged in Battle", cost: 15, restriction: "ADEPTUS ASTARTES model only." },
                    { name: "Adamantine Mantle", cost: 20, restriction: "ADEPTUS ASTARTES model only." },
                ],
                stratagems: [
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic" },
                    { name: "Crucible of Battle", cp: 1, type: "Battle Tactic" },
                    { name: "Wrathful Inferno", cp: 1, type: "Strategic Ploy" },
                    { name: "Immolation Protocols", cp: 2, type: "Battle Tactic" },
                    { name: "Burning Vengeance", cp: 1, type: "Battle Tactic" },
                    { name: "Blazing Earth", cp: 1, type: "Strategic Ploy" },
                ]
            }
        ],

        // UNITS
        units: [
            {
                "id": "salamanders-adrax-agatone",
                "name": "Adrax Agatone",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 85
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "2+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Drakkis",
                            "range": "12\"",
                            "a": "D6+3",
                            "bs": "N/A",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Malleus Noctum",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "10",
                            "ap": "-2",
                            "d": "3",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Unto the Anvil",
                        "Lord of the Pyroclasts"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Adrax Agatone \u2013 EPIC HERO",
                "leaderText": "Can be attached to Assault Intercessor Squad, Bladeguard Veteran Squad, Company Heroes, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Epic Hero",
                    "Imperium",
                    "Tacticus",
                    "Captain",
                    "Adrax Agatone"
                ],
                "factionKeywords": [
                    "Adeptus Astartes",
                    "Salamanders"
                ]
            },
            {
                "id": "salamanders-ancient",
                "name": "Ancient",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 50
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt Pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Assault",
                                "Heavy"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Astartes Banner",
                        "Unbreakable Duty"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt rifle and close combat weapon can be replaced with 1 power weapon."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Ancient",
                "leaderText": "Can be attached to Assault Intercessor Squad, Desolation Squad, Devastator Squad, Hellblaster Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Ancient"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-ancient-in-terminator-armour",
                "name": "Ancient in Terminator Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "5",
                    "sv": "2+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Chainfist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 3+"
                            ]
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin lightning claws",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
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
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Terminator Storm Shield"
                    ],
                    "other": [
                        "Astartes Banner",
                        "Keep the Banner High"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s power fist can be replaced with one of the following:",
                    "1 chainfist",
                    "1 close combat weapon",
                    "1 power weapon",
                    "1 thunder hammer",
                    "This model\u2019s storm bolter and power fist can be replaced with one of the following:",
                    "1 twin lightning claws",
                    "1 thunder hammer and 1 Terminator storm shield"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Ancient in Terminator Armour",
                "leaderText": "Can be attached to Terminator Assault Squad, Terminator Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Imperium",
                    "Terminator",
                    "Ancient"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-apothecary",
                "name": "Apothecary",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 50
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Absolvor bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Reductor pistol",
                            "range": "3\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-4",
                            "d": "2",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Narthecium",
                        "Gene-seed Recovery"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Apothecary",
                "leaderText": "Can be attached to Assault Intercessor Squad, Desolation Squad, Devastator Squad, Hellblaster Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Apothecary"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-apothecary-biologis",
                "name": "Apothecary Biologis",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 70
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "6",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Absolvor bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Surgical Precision",
                        "Vivispectrum"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Apothecary Biologis",
                "leaderText": "Can be attached to Aggressor Squad, Eradicator Squad, Heavy Intercessor Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Imperium",
                    "Gravis",
                    "Apothecary",
                    "Biologis"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-bladeguard-ancient",
                "name": "Bladeguard Ancient",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 45
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Astartes Banner",
                        "Deeds of Heroism"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Bladeguard Ancient",
                "leaderText": "Can be attached to Bladeguard Veteran Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Ancient",
                    "Bladeguard Ancient"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-captain",
                "name": "Captain",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 80
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Master-crafted bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Neo-volkite pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "5",
                            "ap": "0",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol - supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
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
                            "a": "6",
                            "ws": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Relic Shield"
                    ],
                    "other": [
                        "Rites of Battle",
                        "Finest Hour"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol, master-crafted bolter and close combat weapon can be replaced with one of the following:",
                    "1 heavy bolt pistol and 1 power fist",
                    "1 heavy bolt pistol and 1 master-crafted power weapon",
                    "1 neo-volkite pistol and 1 power fist",
                    "1 neo-volkite pistol and 1 master-crafted power weapon",
                    "1 plasma pistol and 1 power fist",
                    "1 plasma pistol and 1 master-crafted power weapon",
                    "1 heavy bolt pistol, 1 master-crafted power weapon and 1 relic shield",
                    "This model\u2019s close combat weapon can be replaced with one of the following:",
                    "1 master-crafted power weapon",
                    "1 power fist"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Captain",
                "leaderText": "Can be attached to Assault Intercessor Squad, Bladeguard Veteran Squad, Company Heroes, Hellblaster Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Captain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-captain-in-gravis-armour",
                "name": "Captain in Gravis Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 80
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "6",
                    "sv": "3+",
                    "w": "6",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Boltstorm gauntlet",
                            "range": "12\"",
                            "a": "3",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Master-crafted heavy bolt rifle",
                            "range": "30\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "5",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Assault",
                                "Heavy"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Relic blade",
                            "range": "Melee",
                            "a": "2",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Extra Attacks"
                            ]
                        },
                        {
                            "name": "Relic chainsword",
                            "range": "Melee",
                            "a": "3",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Extra Attacks"
                            ]
                        },
                        {
                            "name": "Relic fist",
                            "range": "Melee",
                            "a": "1",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Rites of Battle",
                        "Refuse to Yield"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s master-crafted heavy bolt rifle and master-crafted power weapon can be replaced with:",
                    "1 boltstorm gauntlet, 1 power fist and 1 relic chainsword",
                    "1 boltstorm gauntlet, 1 power fist and 1 relic blade",
                    "1 boltstorm gauntlet, 1 power fist and 1 relic fist"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Captain in Gravis Armour",
                "leaderText": "Can be attached to Aggressor Squad, Eradicator Squad, Heavy Intercessor Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Gravis",
                    "Captain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-captain-in-phobos-armour",
                "name": "Captain in Phobos Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 70
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Instigator bolt carbine",
                            "range": "24\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Precision"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Combat knife",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Infiltrators",
                        "Leader",
                        "Stealth"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Rites of Battle",
                        "Master of Deceit"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Captain in Phobos Armour",
                "leaderText": "Can be attached to Eliminator Squad, Incursor Squad, Infiltrator Squad, Reiver Squad, Scout Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Phobos",
                    "Captain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-captain-in-terminator-armour",
                "name": "Captain in Terminator Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 95
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "5",
                    "sv": "2+",
                    "w": "6",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "50mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Relic fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Relic weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Rites of Battle",
                        "The Imperium\u2019s Sword"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s storm bolter can be replaced with 1 combi-weapon",
                    "This model\u2019s relic weapon can be replaced with 1 relic fist"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Captain in Terminator Armour",
                "leaderText": "Can be attached to Terminator Assault Squad, Terminator Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Imperium",
                    "Terminator",
                    "Captain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-captain-with-jump-pack",
                "name": "Captain with Jump Pack",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "7",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Relic weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Relic Shield"
                    ],
                    "other": [
                        "Angel\u2019s Wrath",
                        "Rites of Battle"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s heavy bolt pistol can be replaced with one of the following:",
                    "1 plasma pistol",
                    "1 hand flamer",
                    "This model\u2019s Astartes chainsword can be replaced with one of the following:",
                    "1 power fist",
                    "1 relic weapon",
                    "This model\u2019s heavy bolt pistol and Astartes chainsword can be replaced with 1 thunder hammer and 1 relic shield.",
                    "If this model is equipped with a heavy bolt pistol and an Astartes chainsword, it can be equipped with 1 relic shield. This model\u2019s heavy bolt pistol and Astartes chainsword cannot be replaced."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Captain with Jump Pack",
                "leaderText": "Can be attached to Assault Intercessors With Jump Packs, Vanguard Veteran Squad With Jump Packs.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Jump Pack",
                    "Fly",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Captain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-chaplain",
                "name": "Chaplain",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 60
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "5+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Absolvor bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Crozius arcanum",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "6",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Litany of Hate",
                        "Spiritual Leader"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Chaplain",
                "leaderText": "Can be attached to Assault Intercessor Squad, Bladeguard Veteran Squad, Hellblaster Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Chaplain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-chaplain-in-terminator-armour",
                "name": "Chaplain in Terminator Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "5",
                    "sv": "2+",
                    "w": "5",
                    "ld": "5+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Crozius arcanum",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "6",
                            "ap": "-1",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Relic Shield"
                    ],
                    "other": [
                        "Litany of Hate",
                        "Recitation of Faith"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s storm bolter can be replaced with 1 relic shield."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Chaplain in Terminator Armour",
                "leaderText": "Can be attached to Terminator Assault Squad, Terminator Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Imperium",
                    "Terminator",
                    "Chaplain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-chaplain-on-bike",
                "name": "Chaplain on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "5",
                    "ld": "5+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "90 x 52mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Absolvor bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Twin bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Crozius arcanum",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "6",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Litany of Hate",
                        "Catechism of Fire"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Chaplain on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Chaplain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-chaplain-with-jump-pack",
                "name": "Chaplain with Jump Pack",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "5+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Inferno pistol",
                            "range": "6\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-4",
                            "d": "D3",
                            "keywords": [
                                "Melta 2",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Crozius arcanum",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "6",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Litany of Hate",
                        "Exhortation of Rage"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol can be replaced with one of the following:",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 hand flamer",
                    "1 inferno pistol",
                    "1 plasma pistol",
                    "1 storm bolter",
                    "1 power fist"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Chaplain with Jump Pack",
                "leaderText": "Can be attached to Assault Intercessors With Jump Packs, Vanguard Veteran Squad With Jump Packs.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Jump Pack",
                    "Fly",
                    "Imperium",
                    "Chaplain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-judiciar",
                "name": "Judiciar",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 70
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "5+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Absolvor bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Executioner relic blade",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "7",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Tempormortis",
                        "Silent Fury"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Judiciar",
                "leaderText": "Can be attached to Assault Intercessor Squad, Bladeguard Veteran Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Imperium",
                    "Tacticus",
                    "Judiciar"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-librarian",
                "name": "Librarian",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 65
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Smite \u2013 witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Smite \u2013 focused witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "-2",
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
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Psychic Hood",
                        "Mental Fortress (Psychic)"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Librarian",
                "leaderText": "Can be attached to Assault Intercessor Squad, Desolation Squad, Devastator Squad, Hellblaster Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Psyker",
                    "Imperium",
                    "Tacticus",
                    "Librarian"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-librarian-in-phobos-armour",
                "name": "Librarian in Phobos Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 70
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Smite \u2013 witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Smite \u2013 focused witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "-2",
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
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Psychic"
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Psychic Hood",
                        "Shrouding (Psychic)"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Librarian in Phobos Armour",
                "leaderText": "Can be attached to Eliminator Squad, Incursor Squad, Infiltrator Squad, Reiver Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Psyker",
                    "Imperium",
                    "Phobos",
                    "Librarian"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-librarian-in-terminator-armour",
                "name": "Librarian in Terminator Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "5",
                    "sv": "2+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Smite \u2013 witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Smite \u2013 focused witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "-2",
                            "d": "D3",
                            "keywords": [
                                "Devastating Wounds",
                                "Hazardous",
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Force weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Psychic Hood",
                        "Veil of Time (Psychic)"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with one of the following:",
                    "1 combi-weapon",
                    "1 storm bolter"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Librarian in Terminator Armour",
                "leaderText": "Can be attached to Terminator Assault Squad, Terminator Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Psyker",
                    "Imperium",
                    "Terminator",
                    "Librarian"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-lieutenant",
                "name": "Lieutenant",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 55
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Master-crafted bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Neo-volkite pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "5",
                            "ap": "0",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
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
                            "a": "5",
                            "ws": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Storm Shield"
                    ],
                    "other": [
                        "Tactical Precision",
                        "Target Priority"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s master-crafted bolter can be replaced with one of the following:",
                    "1 plasma pistol",
                    "1 master-crafted power weapon",
                    "1 power fist",
                    "This model\u2019s bolt pistol, master-crafted bolter and close combat weapon can be replaced with 1 neo volkite pistol, 1 master-crafted power weapon and 1 storm shield.",
                    "This model\u2019s bolt pistol can be replaced with 1 heavy bolt pistol.",
                    "This model\u2019s close combat weapon can be replaced with one of the following:",
                    "1 master-crafted power weapon",
                    "1 power fist"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Lieutenant",
                "leaderText": "Can be attached to Assault Intercessor Squad, Bladeguard Veteran Squad, Company Heroes, Hellblaster Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Lieutenant"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-lieutenant-in-phobos-armour",
                "name": "Lieutenant in Phobos Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 55
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Master-crafted scoped bolt carbine",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "2",
                            "keywords": []
                        }
                    ],
                    "melee": [
                        {
                            "name": "Paired combat blades",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Sustained Hits 1"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike",
                        "Infiltrators",
                        "Leader",
                        "Scouts 6\""
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Tactical Precision",
                        "Strategic Dispersal"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Lieutenant in Phobos Armour",
                "leaderText": "Can be attached to Incursor Squad, Infiltrator Squad, Reiver Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Phobos",
                    "Lieutenant"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-lieutenant-in-reiver-armour",
                "name": "Lieutenant in Reiver Armour",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 55
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Master-crafted special issue bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Pistol",
                                "Precision"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Combat knife",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Precision"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader",
                        "Scouts 6\""
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Tactical Precision",
                        "Deadly Terror"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Lieutenant in Reiver Armour",
                "leaderText": "Can be attached to Reiver Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Smoke",
                    "Grenades",
                    "Imperium",
                    "Phobos",
                    "Lieutenant",
                    "Lieutenant In Reiver Armour"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-lieutenant-with-combi-weapon",
                "name": "Lieutenant with Combi-weapon",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 85
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Paired combat blades",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Sustained Hits 1"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Feel No Pain 5+",
                        "Infiltrators",
                        "Lone Operative",
                        "Stealth"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Priority Objective Identified",
                        "Evade and Survive"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Lieutenant with Combi-weapon",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Phobos",
                    "Lieutenant",
                    "Lieutenant With Combi-weapon"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-techmarine",
                "name": "Techmarine",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 55
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "2+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Forge bolter",
                            "range": "24\"",
                            "a": "3",
                            "bs": "2+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
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
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Servo-arm",
                            "range": "Melee",
                            "a": "1",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "3",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Techmarine",
                        "Blessing of the Omnissiah",
                        "Vengeance of the Omnissiah"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Techmarine",
                "leaderText": "Can be attached to Assault Intercessor Squad, Desolation Squad, Devastator Squad, Intercessor Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Techmarine"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-vulkan-he-stan",
                "name": "Vulkan He\u2019stan",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 100
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "2+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Gauntlet of the Forge",
                            "range": "12\"",
                            "a": "D6+3",
                            "bs": "N/A",
                            "s": "6",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Spear of Vulkan",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "6",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Feel No Pain 6+",
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Inspiring Commander",
                        "Forgefather",
                        "Seeker of the Unfound"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Vulkan He\u2019stan \u2013 EPIC HERO",
                "leaderText": "Can be attached to Assault Intercessor Squad, Company Heroes, Infernus Squad, Tactical Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Epic Hero",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Captain",
                    "Vulkan He\u2019stan"
                ],
                "factionKeywords": [
                    "Adeptus Astartes",
                    "Salamanders"
                ]
            },
            {
                "id": "salamanders-ancient-on-bike",
                "name": "Ancient on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 90
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "75 x 25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Astartes Banner",
                        "Unbreakable Duty"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol can be replaced with one of the following:",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 plasma pistol",
                    "1 storm bolter",
                    "1 power fist",
                    "1 power weapon",
                    "1 thunder hammer"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Ancient on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Ancient"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-apothecary-on-bike",
                "name": "Apothecary on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 65
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "75 x 25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Twin boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Narthecium",
                        "Gene-seed Recovery"
                    ]
                },
                "wargearOptions": [
                    "None"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Apothecary on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Apothecary"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-captain-on-bike",
                "name": "Captain on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 95
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "6",
                    "ld": "6+",
                    "oc": "2"
                },
                "invuln": "4+",
                "baseSize": "75 x 25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Inferno pistol",
                            "range": "6\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "8",
                            "ap": "-4",
                            "d": "D3",
                            "keywords": [
                                "Melta 2",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Master-crafted boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Twin boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "7",
                            "ws": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Relic weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin lightning claws",
                            "range": "Melee",
                            "a": "7",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Leader"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Relic Shield"
                    ],
                    "other": [
                        "Swift Assault",
                        "Rites of Battle"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol can be replaced with one of the following:",
                    "1 combi-weapon",
                    "1 hand flamer",
                    "1 inferno pistol",
                    "1 master-crafted boltgun",
                    "1 plasma pistol",
                    "1 storm bolter",
                    "1 relic shield*",
                    "1 relic weapon",
                    "1 power fist",
                    "1 thunder hammer",
                    "This model\u2019s Astartes chainsword can be replaced with one of the following:",
                    "1 close combat weapon and 1 relic shield*",
                    "1 power fist",
                    "1 relic weapon",
                    "This model\u2019s bolt pistol and Astartes chainsword can be replaced with 1 twin lightning claws.",
                    "* Maximum one per model."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Captain on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Captain"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-company-champion-on-bike",
                "name": "Company Champion on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 60
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "2"
                },
                "invuln": "4+",
                "baseSize": "75 x 25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Twin boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Honour or Death",
                        "Martial Superiority"
                    ]
                },
                "wargearOptions": [
                    "None"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Company Champion on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Company Champion"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-librarian-on-bike",
                "name": "Librarian on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 80
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "75 x 25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Smite \u2013 focused witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "-2",
                            "d": "D3",
                            "keywords": [
                                "Devastating Wounds",
                                "Hazardous",
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Smite \u2013 witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Force weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Psychic Hood",
                        "Mental Fortress (Psychic)"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol can be replaced with one of the following:",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 plasma pistol",
                    "1 storm bolter"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Librarian on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Psyker",
                    "Imperium",
                    "Librarian"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-librarian-with-jump-pack",
                "name": "Librarian with Jump Pack",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Inferno pistol",
                            "range": "6\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-4",
                            "d": "D3",
                            "keywords": [
                                "Melta 2",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Smite \u2013 witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Smite \u2013 focused witchfire",
                            "range": "24\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "-2",
                            "d": "D3",
                            "keywords": [
                                "Devastating Wounds",
                                "Hazardous",
                                "Psychic"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Force weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Psychic Hood",
                        "Might of Heroes (Psychic)"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol can be replaced with one of the following:",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 hand flamer",
                    "1 inferno pistol",
                    "1 plasma pistol",
                    "1 storm bolter"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Librarian with Jump Pack",
                "leaderText": "Can be attached to Vanguard Veteran Squad With Jump Packs.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Jump Pack",
                    "Fly",
                    "Psyker",
                    "Grenades",
                    "Imperium",
                    "Librarian"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-primaris-company-champion",
                "name": "Primaris Company Champion",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 55
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Honour or Death",
                        "Martial Superiority"
                    ]
                },
                "wargearOptions": [
                    "None"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Primaris Company Champion",
                "leaderText": "Can be attached to Assault Intercessor Squad, Bladeguard Veteran Squad, Infernus Squad, Intercessor Squad, Sternguard Veteran Squad.",
                "keywords": [
                    "Infantry",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Primaris Company Champion"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-techmarine-on-bike",
                "name": "Techmarine on Bike",
                "role": "character",
                "points": [
                    {
                        "models": 1,
                        "cost": 110
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "5",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "75 x 25mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Conversion beamer SUSTAINED HITS D3",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Conversion"
                            ]
                        },
                        {
                            "name": "Flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Omnissian power axe",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "6",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Plasma cutter",
                            "range": "Melee",
                            "a": "2",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Extra Attacks"
                            ]
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Servo arm",
                            "range": "Melee",
                            "a": "1",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "3",
                            "keywords": [
                                "Extra Attacks"
                            ]
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Techmarine",
                        "Blessing of the Omnissiah",
                        "Vengeance of the Omnissiah"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s bolt pistol can be replaced with one of the following:",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 plasma pistol",
                    "1 storm bolter",
                    "This model\u2019s Omnissian power axe can be replaced with one of the following:",
                    "1 Astartes chainsword",
                    "1 power fist",
                    "1 thunder hammer",
                    "This model must be equipped with one of the following:",
                    "1 servo arm",
                    "1 conversion beamer",
                    "1 flamer, 1 plasma cutter and 2 servo-arms"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Techmarine on Bike",
                "leaderText": "Can be attached to Outrider Squad.",
                "keywords": [
                    "Mounted",
                    "Character",
                    "Grenades",
                    "Imperium",
                    "Techmarine"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-assault-intercessor-squad",
                "name": "Assault Intercessor Squad",
                "role": "battleline",
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
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Shock Assault"
                    ]
                },
                "wargearOptions": [
                    "The Assault Intercessor Sergeant\u2019s heavy bolt pistol can be replaced with one of the following:",
                    "1 hand flamer",
                    "1 plasma pistol",
                    "The Assault Intercessor Sergeant\u2019s Astartes chainsword can be replaced with one of the following:",
                    "1 power fist",
                    "1 power weapon",
                    "1 thunder hammer"
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Assault Intercessor Sergeant, 4-9 Assault Intercessors",
                "keywords": [
                    "Infantry",
                    "Battleline",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Assault Intercessor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-heavy-intercessor-squad",
                "name": "Heavy Intercessor Squad",
                "role": "battleline",
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
                    "m": "5\"",
                    "t": "6",
                    "sv": "3+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Heavy bolt rifle",
                            "range": "30\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Assault",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Assault",
                                "Heavy",
                                "Sustained Hits 1"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Unyielding in the Face of the Foe"
                    ]
                },
                "wargearOptions": [
                    "For every 5 models in this unit, 1 Heavy Intercessor\u2019s heavy bolt rifle can be replaced with 1 heavy bolter."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Heavy Intercessor Sergeant, 4-9 Heavy Intercessors",
                "keywords": [
                    "Infantry",
                    "Battleline",
                    "Grenades",
                    "Imperium",
                    "Gravis",
                    "Heavy Intercessor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-intercessor-squad",
                "name": "Intercessor Squad",
                "role": "battleline",
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
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Astartes grenade launcher \u2013 frag",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Astartes grenade launcher \u2013 krak",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D3",
                            "keywords": []
                        },
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Assault",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Objective Secured",
                        "Target Elimination"
                    ]
                },
                "wargearOptions": [
                    "The Intercessor Sergeant\u2019s bolt rifle can be replaced with one of the following:",
                    "1 Astartes chainsword",
                    "1 hand flamer",
                    "1 plasma pistol",
                    "1 power weapon",
                    "The Intercessor Sergeant\u2019s close combat weapon can be replaced with one of the following:",
                    "1 Astartes chainsword",
                    "1 power fist",
                    "1 power weapon",
                    "1 thunder hammer",
                    "For every 5 models in this unit, 1 model equipped with a bolt rifle can be equipped with 1 Astartes grenade launcher."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Intercessor Sergeant, 4-9 Intercessors",
                "keywords": [
                    "Infantry",
                    "Battleline",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Intercessor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-tactical-squad",
                "name": "Tactical Squad",
                "role": "battleline",
                "points": [
                    {
                        "models": 10,
                        "cost": 140
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
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
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Grav-cannon",
                            "range": "24\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "6",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Grav-gun",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Heavy",
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Meltagun",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "D6",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "4+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Heavy",
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Plasma cannon \u2013 standard",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "4+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Plasma cannon \u2013 supercharge",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "4+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Blast",
                                "Heavy",
                                "Hazardous"
                            ]
                        },
                        {
                            "name": "Plasma gun \u2013 standard",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Plasma gun \u2013 supercharge",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "2",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "2",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "2",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin lightning claws",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Combat Squads"
                    ]
                },
                "wargearOptions": [
                    "1 Tactical Marine\u2019s boltgun can be replaced with one of the following:",
                    "1 flamer",
                    "1 heavy bolter",
                    "1 grav-cannon",
                    "1 grav-gun",
                    "1 lascannon",
                    "1 meltagun",
                    "1 missile launcher",
                    "1 multi-melta",
                    "1 plasma cannon",
                    "1 plasma gun",
                    "1 Tactical Marine\u2019s boltgun can be replaced with one of the following:",
                    "1 flamer",
                    "1 grav-gun",
                    "1 meltagun",
                    "1 plasma gun",
                    "The Tactical Sergeant\u2019s bolt pistol and boltgun can be replaced with 1 twin lightning claws, or two different weapons from the following list:*",
                    "1 Astartes chainsword",
                    "1 bolt pistol",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 plasma pistol",
                    "1 storm bolter",
                    "1 power fist",
                    "1 power weapon",
                    "1 thunder hammer",
                    "* This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)."
                ],
                "composition": {
                    "min": 10,
                    "max": 10
                },
                "compositionText": "1 Tactical Sergeant, 9 Tactical Marines",
                "keywords": [
                    "Infantry",
                    "Battleline",
                    "Grenades",
                    "Imperium",
                    "Tactical Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-drop-pod",
                "name": "Drop Pod",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 70
                    }
                ],
                "stats": {
                    "m": "-",
                    "t": "7",
                    "sv": "3+",
                    "w": "8",
                    "ld": "6+",
                    "oc": "0"
                },
                "baseSize": "Use model",
                "weapons": {},
                "abilities": {
                    "core": [
                        "Deadly Demise 1",
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Drop Pod",
                        "Drop Pod Assault",
                        "Combat Disembarkation",
                        "Deployment Complete"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Drop Pod",
                "keywords": [
                    "Vehicle",
                    "Transport",
                    "Dedicated Transport",
                    "Imperium",
                    "Drop Pod"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-impulsor",
                "name": "Impulsor",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 80
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "100mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bellicatus missile array \u2013 frag",
                            "range": "48\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Bellicatus missile array \u2013 Icarus",
                            "range": "48\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Bellicatus missile array \u2013 krak",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        },
                        {
                            "name": "Fragstorm grenade launcher",
                            "range": "18\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3"
                            ]
                        },
                        {
                            "name": "Ironhail skytalon array",
                            "range": "36\"",
                            "a": "8",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Fly 4+",
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3",
                        "Firing Deck 6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Orbital Comms Array (Aura)",
                        "Shield Dome"
                    ],
                    "other": [
                        "Assault Vehicle"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 ironhail heavy stubber.",
                    "This model\u2019s 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
                    "This model can be equipped with one of the following:",
                    "1 bellicatus missile array",
                    "1 ironhail skytalon array",
                    "1 orbital comms array",
                    "1 shield dome"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Impulsor",
                "keywords": [
                    "Vehicle",
                    "Transport",
                    "Dedicated Transport",
                    "Imperium",
                    "Impulsor"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-razorback",
                "name": "Razorback",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 95
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "10",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Fire Support"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s twin heavy bolter can be replaced with 1 twin lascannon.",
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Razorback",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Transport",
                    "Dedicated Transport",
                    "Imperium",
                    "Razorback"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-rhino",
                "name": "Rhino",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "10",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Self Repair"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 hunter-killer missile."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Rhino",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Transport",
                    "Dedicated Transport",
                    "Imperium",
                    "Rhino"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-land-speeder-storm",
                "name": "Land Speeder Storm",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 70
                    }
                ],
                "stats": {
                    "m": "14\"",
                    "t": "7",
                    "sv": "4+",
                    "w": "7",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "60mm flying base",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Cerberus launcher",
                            "range": "18\"",
                            "a": "D6+3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Storm Assault"
                    ]
                },
                "wargearOptions": [
                    "None"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Land Speeder Storm",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Transport",
                    "Dedicated Transport",
                    "Imperium",
                    "Land Speeder Storm"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-hammerfall-bunker",
                "name": "Hammerfall Bunker",
                "role": "fortification",
                "points": [
                    {
                        "models": 1,
                        "cost": 175
                    }
                ],
                "stats": {
                    "m": "-",
                    "t": "12",
                    "sv": "2+",
                    "w": "14",
                    "ld": "6+",
                    "oc": "0"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hammerfall heavy bolter array",
                            "range": "36\"",
                            "a": "6",
                            "bs": "4+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Hammerfall heavy flamer array",
                            "range": "12\"",
                            "a": "2D6",
                            "bs": "N/A",
                            "s": "5",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Hammerfall missile launcher \u2013 superfrag",
                            "range": "48\"",
                            "a": "2D6+2",
                            "bs": "4+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Hammerfall missile launcher \u2013 superkrak",
                            "range": "48\"",
                            "a": "2",
                            "bs": "4+",
                            "s": "10",
                            "ap": "-2",
                            "d": "D6+1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Fortification",
                        "Ceramite Cover",
                        "Defensive Array"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s Hammerfall heavy bolter array can be replaced with 1 Hammerfall heavy flamer array."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Hammerfall Bunker",
                "keywords": [
                    "Fortification",
                    "Vehicle",
                    "Imperium",
                    "Hammerfall Bunker"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-aggressor-squad",
                "name": "Aggressor Squad",
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
                    "m": "5\"",
                    "t": "6",
                    "sv": "3+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Auto boltstorm gauntlets",
                            "range": "18\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Flamestorm gauntlets",
                            "range": "12\"",
                            "a": "D6+1",
                            "bs": "N/A",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Fragstorm grenade launcher",
                            "range": "18\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Twin power fists",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Close-quarters Firepower"
                    ]
                },
                "wargearOptions": [
                    "All models in this unit can each have their flamestorm gauntlets replaced with 1 auto boltstorm gauntlets and 1 fragstorm grenade launcher."
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Aggressor Sergeant, 2-5 Aggressors",
                "keywords": [
                    "Infantry",
                    "Imperium",
                    "Gravis",
                    "Aggressor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-assault-intercessors-with-jump-packs",
                "name": "Assault Intercessors with Jump Packs",
                "role": "infantry",
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
                    "m": "12\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol - standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol - supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Hammer of Wrath"
                    ]
                },
                "wargearOptions": [
                    "For every 5 models in this unit, 1 Assault Intercessor with Jump Pack\u2019s heavy bolt pistol can be replaced with 1 plasma pistol.",
                    "The Assault Intercessor Sergeant with Jump Pack\u2019s Astartes chainsword can be replaced with one of the following:",
                    "1 power weapon",
                    "1 power fist",
                    "The Assault Intercessor Sergeant with Jump Pack\u2019s heavy bolt pistol can be replaced with one of the following:",
                    "1 hand flamer",
                    "1 plasma pistol"
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Assault Intercessor Sergeant with Jump Pack, 4-9 Assault Intercessors with Jump Packs",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Jump Pack",
                    "Fly",
                    "Imperium",
                    "Tacticus",
                    "Assault Intercessors With Jump Packs"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-ballistus-dreadnought",
                "name": "Ballistus Dreadnought",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 150
                    }
                ],
                "stats": {
                    "m": "8\"",
                    "t": "10",
                    "sv": "2+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "4"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Ballistus missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "2D6",
                            "bs": "3+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Ballistus missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "10",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        },
                        {
                            "name": "Ballistus lascannon",
                            "range": "48\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Twin storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured feet",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "7",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Ballistus Strike"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Ballistus Dreadnought",
                "keywords": [
                    "Vehicle",
                    "Walker",
                    "Imperium",
                    "Dreadnought",
                    "Ballistus Dreadnought"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-bladeguard-veteran-squad",
                "name": "Bladeguard Veteran Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 80
                    },
                    {
                        "models": 6,
                        "cost": 170
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Neo-volkite pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "0",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Bladeguard",
                        "Swords of the Chapter",
                        "Shields of the Chapter"
                    ]
                },
                "wargearOptions": [
                    "The Bladeguard Veteran Sergeant\u2019s heavy bolt pistol can be replaced with one of the following:",
                    "1 neo-volkite pistol",
                    "1 plasma pistol"
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Bladeguard Veteran Sergeant, 2-5 Bladeguard Veterans",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Bladeguard Veteran Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-brutalis-dreadnought",
                "name": "Brutalis Dreadnought",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 160
                    }
                ],
                "stats": {
                    "m": "8\"",
                    "t": "10",
                    "sv": "2+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "4"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Brutalis bolt rifles",
                            "range": "24\"",
                            "a": "4",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin Icarus ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Fly 4+",
                                "Rapid Fire 3",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Brutalis fists",
                            "range": "Melee",
                            "a": "6",
                            "ws": "3+",
                            "s": "12",
                            "ap": "-2",
                            "d": "3",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Brutalis talons \u2013 strike",
                            "range": "Melee",
                            "a": "6",
                            "ws": "3+",
                            "s": "12",
                            "ap": "-2",
                            "d": "3",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Brutalis talons \u2013 sweep",
                            "range": "Melee",
                            "a": "10",
                            "ws": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Brutalis Charge"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s twin heavy bolter can be replaced with 1 twin multi-melta.",
                    "This model\u2019s Brutalis fists and Brutalis bolt rifles can be replaced with 1 Brutalis talons."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Brutalis Dreadnought",
                "keywords": [
                    "Vehicle",
                    "Walker",
                    "Imperium",
                    "Dreadnought",
                    "Brutalis Dreadnought"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-centurion-assault-squad",
                "name": "Centurion Assault Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 150
                    },
                    {
                        "models": 6,
                        "cost": 300
                    }
                ],
                "stats": {
                    "m": "4\"",
                    "t": "7",
                    "sv": "2+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "50mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Centurion bolters",
                            "range": "24\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin meltagun",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Siege drills",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "10",
                            "ap": "-2",
                            "d": "3",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Centurion Assault Launcher"
                    ],
                    "other": [
                        "Annihilator Protocols"
                    ]
                },
                "wargearOptions": [
                    "Any number of models can each have their twin flamer replaced with 1 twin meltagun.",
                    "Any number of models can each have their Centurion bolters replaced with 1 Centurion assault launcher."
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Assault Centurion Sergeant, 2-5 Assault Centurions",
                "keywords": [
                    "Infantry",
                    "Imperium",
                    "Centurion",
                    "Centurion Assault Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-centurion-devastator-squad",
                "name": "Centurion Devastator Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 175
                    },
                    {
                        "models": 6,
                        "cost": 350
                    }
                ],
                "stats": {
                    "m": "4\"",
                    "t": "7",
                    "sv": "2+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "50mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Centurion bolters",
                            "range": "24\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Centurion missile launcher",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D3",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Grav-cannon",
                            "range": "24\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "6",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Anti-Vehicle 2+"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Centurion fists",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Decimator Protocols"
                    ]
                },
                "wargearOptions": [
                    "Any number of models can each have their Centurion bolters replaced with 1 Centurion missile launcher.",
                    "Any number of models can each have their grav-cannon replaced with one of the following:",
                    "1 twin heavy bolter",
                    "1 twin lascannon"
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Devastator Centurion Sergeant, 2-5 Devastator Centurions",
                "keywords": [
                    "Infantry",
                    "Imperium",
                    "Centurion",
                    "Centurion Devastator Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-company-heroes",
                "name": "Company Heroes",
                "role": "infantry",
                "points": [
                    {
                        "models": 4,
                        "cost": 105
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt Pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Master-crafted bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Master-crafted heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Heavy",
                                "Sustained Hits 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Master-crafted power weapon",
                            "range": "Melee",
                            "a": "6",
                            "ws": "2+",
                            "s": "5",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Precision"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Astartes Banner",
                        "Command Squad"
                    ]
                },
                "composition": {
                    "min": 4,
                    "max": 4
                },
                "compositionText": "1 Ancient, 1 Company Champion, 2 Company Veterans",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Company Heroes"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-desolation-squad",
                "name": "Desolation Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 5,
                        "cost": 200
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Castellan launcher",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Indirect Fire"
                            ]
                        },
                        {
                            "name": "Superfrag rocket launcher",
                            "range": "48\"",
                            "a": "D6+1",
                            "bs": "4+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Superkrak rocket launcher",
                            "range": "48\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "10",
                            "ap": "-2",
                            "d": "D6+1",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Vengor launcher",
                            "range": "48\"",
                            "a": "D6",
                            "bs": "2+",
                            "s": "7",
                            "ap": "-1",
                            "d": "2",
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
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Targeter Optics"
                    ]
                },
                "wargearOptions": [
                    "All of the models in this unit can each have their superfrag rocket launcher replaced with 1 superkrak rocket launcher.",
                    "The Desolation Sergeant\u2019s superfrag rocket launcher or superkrak rocket launcher can be replaced with 1 vengor launcher."
                ],
                "composition": {
                    "min": 5,
                    "max": 5
                },
                "compositionText": "1 Desolation Sergeant, 4 Desolation Marines",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Desolation Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-devastator-squad",
                "name": "Devastator Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 5,
                        "cost": 120
                    },
                    {
                        "models": 10,
                        "cost": 200
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Grav-cannon",
                            "range": "24\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "6",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Heavy",
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "D6",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "4+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Heavy",
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Plasma cannon \u2013 standard",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "4+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Plasma cannon \u2013 supercharge",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "4+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Blast",
                                "Hazardous",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "2",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "2",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "2",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Signum",
                        "Armorium Cherub",
                        "Designer\u2019s Note"
                    ]
                },
                "wargearOptions": [
                    "Up to 4 Devastator Marines can each have their boltgun replaced with one of the following:",
                    "1 grav-cannon",
                    "1 heavy bolter",
                    "1 lascannon",
                    "1 missile launcher",
                    "1 multi-melta",
                    "1 plasma cannon",
                    "The Devastator Sergeant\u2019s bolt pistol and boltgun can be replaced with two different weapons from the following list:*",
                    "1 Astartes chain sword",
                    "1 bolt pistol",
                    "1 boltgun",
                    "1 combi-weapon",
                    "1 grav-pistol",
                    "1 plasma pistol",
                    "1 power fist",
                    "1 power weapon",
                    "1 thunder hammer",
                    "* This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)"
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Devastator Sergeant, 4-9 Devastator Marines",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Devastator Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-dreadnought",
                "name": "Dreadnought",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 135
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "9",
                    "sv": "2+",
                    "w": "8",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "60mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Heavy flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "5",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Heavy plasma cannon \u2013 standard",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Heavy plasma cannon \u2013 supercharge",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "3",
                            "keywords": [
                                "Blast",
                                "Hazardous"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Dreadnought combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "12",
                            "ap": "-2",
                            "d": "3",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise 1"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Wisdom of the Ancients (Aura)"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s assault cannon can be replaced with one of the following:",
                    "1 heavy plasma cannon",
                    "1 multi-melta",
                    "1 twin lascannon",
                    "This model\u2019s Dreadnought combat weapon and storm bolter can be replaced with one of the following:",
                    "1 missile launcher and 1 close combat weapon",
                    "1 heavy flamer and 1 Dreadnought combat weapon"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Dreadnought",
                "keywords": [
                    "Vehicle",
                    "Walker",
                    "Smoke",
                    "Imperium",
                    "Dreadnought"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-eliminator-squad",
                "name": "Eliminator Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 85
                    }
                ],
                "stats": {
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Bolt sniper rifle",
                            "range": "36\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "3",
                            "keywords": [
                                "Heavy",
                                "Precision"
                            ]
                        },
                        {
                            "name": "Instigator bolt carbine",
                            "range": "24\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Precision"
                            ]
                        },
                        {
                            "name": "Las fusil",
                            "range": "36\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "Heavy"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Reposition Under Covering Fire",
                        "Mark the Target"
                    ]
                },
                "wargearOptions": [
                    "The Eliminator Sergeant\u2019s bolt sniper rifle can be replaced with one of the following:",
                    "1 instigator bolt carbine",
                    "1 las fusil",
                    "All Eliminators in this unit can each have their bolt sniper rifle replaced with 1 las fusil."
                ],
                "composition": {
                    "min": 3,
                    "max": 3
                },
                "compositionText": "1 Eliminator Sergeant, 2 Eliminators",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Phobos",
                    "Eliminator Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-eradicator-squad",
                "name": "Eradicator Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 90
                    },
                    {
                        "models": 6,
                        "cost": 180
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "6",
                    "sv": "3+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Melta rifle",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Heavy",
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "4+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Heavy",
                                "Melta 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Total Obliteration"
                    ]
                },
                "wargearOptions": [
                    "For every 3 models in this unit, 1 Eradicator\u2019s melta rifle can be replaced with 1 multi-melta."
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Eradicator Sergeant, 2-5 Eradicators",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Gravis",
                    "Eradicator Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-firestrike-servo-turrets",
                "name": "Firestrike Servo-turrets",
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
                    "m": "3\"",
                    "t": "6",
                    "sv": "2+",
                    "w": "6",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "80mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Twin Firestrike autocannon",
                            "range": "48\"",
                            "a": "3",
                            "bs": "2+",
                            "s": "9",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin Firestrike las-talon",
                            "range": "36\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "10",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Sentinel Protocols"
                    ]
                },
                "wargearOptions": [
                    "Any number of models can each have their twin Firestrike las-talon replaced with 1 twin Firestrike autocannon."
                ],
                "composition": {
                    "min": 1,
                    "max": 2
                },
                "compositionText": "1-2 Firestrike Servo-turrets",
                "keywords": [
                    "Artillery",
                    "Vehicle",
                    "Imperium",
                    "Firestrike Servo-turrets"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-gladiator-lancer",
                "name": "Gladiator Lancer",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 160
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "10",
                    "sv": "3+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "100mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Fragstorm grenade launcher",
                            "range": "18\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Icarus rocket pod",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3"
                            ]
                        },
                        {
                            "name": "Lancer laser destroyer",
                            "range": "72\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "14",
                            "ap": "-4",
                            "d": "D6+3",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Aquilon Optics"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
                    "This model can be equipped with 1 ironhail heavy stubber.",
                    "This model can be equipped with 1 Icarus rocket pod."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Gladiator Lancer",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Gladiator Lancer"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-gladiator-reaper",
                "name": "Gladiator Reaper",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 160
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "10",
                    "sv": "3+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "100mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Icarus rocket pod",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3"
                            ]
                        },
                        {
                            "name": "Tempest bolter",
                            "range": "24\"",
                            "a": "4",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 4"
                            ]
                        },
                        {
                            "name": "Twin heavy onslaught gatling cannon",
                            "range": "24\"",
                            "a": "12",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Rotating Death"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 ironhail heavy stubber.",
                    "This model can be equipped with 1 Icarus rocket pod."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Gladiator Reaper",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Gladiator Reaper"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-gladiator-valiant",
                "name": "Gladiator Valiant",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 150
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "10",
                    "sv": "3+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "100mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Icarus rocket pod",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Twin las-talon",
                            "range": "36\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "10",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Ferocious Assault"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 ironhail heavy stubber.",
                    "This model can be equipped with 1 Icarus rocket pod."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Gladiator Valiant",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Gladiator Valiant"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-hellblaster-squad",
                "name": "Hellblaster Squad",
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
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma incinerator \u2013 standard",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Assault",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Plasma incinerator \u2013 supercharge",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Assault",
                                "Hazardous",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
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
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "For the Chapter!",
                        "Designer\u2019s Note"
                    ]
                },
                "wargearOptions": [
                    "The Hellblaster Sergeant\u2019s bolt pistol can be replaced with 1 plasma pistol."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Hellblaster Sergeant, 4-9 Hellblasters",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Hellblaster Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-inceptor-squad",
                "name": "Inceptor Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 120
                    },
                    {
                        "models": 6,
                        "cost": 240
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "6",
                    "sv": "3+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Assault bolters",
                            "range": "18\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Assault",
                                "Pistol",
                                "Sustained Hits 2",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Plasma exterminators \u2013 standard",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Assault",
                                "Pistol",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Plasma exterminators \u2013 supercharge",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "3",
                            "keywords": [
                                "Assault",
                                "Pistol",
                                "Hazardous",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Meteoric Descent"
                    ]
                },
                "wargearOptions": [
                    "All models in this unit can each have their assault bolters replaced with 1 plasma exterminators."
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Inceptor Sergeant, 2-5 Inceptors",
                "keywords": [
                    "Infantry",
                    "Jump Pack",
                    "Fly",
                    "Imperium",
                    "Gravis",
                    "Inceptor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-incursor-squad",
                "name": "Incursor Squad",
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
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Occulus bolt carbine",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Assault",
                                "Ignores Cover"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Paired combat blades",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Sustained Hits 1"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Scouts 6\""
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Haywire Mine"
                    ],
                    "other": [
                        "Multi-spectrum Array"
                    ]
                },
                "wargearOptions": [
                    "One Incursor can be equipped with 1 haywire mine."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Incursor Sergeant, 4-9 Incursors",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Smoke",
                    "Imperium",
                    "Phobos",
                    "Incursor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-infernus-squad",
                "name": "Infernus Squad",
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
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Pyreblaster",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "5",
                            "ap": "-1",
                            "d": "1",
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
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Incendiary Terror"
                    ]
                },
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Infernus Sergeant, 4-9 Infernus Marines",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Infernus Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-infiltrator-squad",
                "name": "Infiltrator Squad",
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
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Marksman bolt carbine",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Heavy"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Infiltrators"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Helix Gauntlet",
                        "Infiltrator Comms Array"
                    ],
                    "other": [
                        "Omni-scramblers"
                    ]
                },
                "wargearOptions": [
                    "1 Infiltrator can be equipped with 1 helix gauntlet.*",
                    "1 Infiltrator can be equipped with 1 Infiltrator comms array.*",
                    "* These options cannot be taken on the same model."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Infiltrator Sergeant, 4-9 Infiltrators",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Smoke",
                    "Imperium",
                    "Phobos",
                    "Infiltrator Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-invader-atv",
                "name": "Invader ATV",
                "role": "mounted",
                "points": [
                    {
                        "models": 1,
                        "cost": 60
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "8",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Onslaught gatling cannon",
                            "range": "24\"",
                            "a": "8",
                            "bs": "3+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Outrider Escort"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s onslaught gatling cannon can be replaced with 1 multi-melta."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Invader ATV",
                "keywords": [
                    "Mounted",
                    "Grenades",
                    "Imperium",
                    "Invader Atv"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-invictor-tactical-warsuit",
                "name": "Invictor Tactical Warsuit",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 125
                    }
                ],
                "stats": {
                    "m": "8\"",
                    "t": "8",
                    "sv": "3+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "4"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Fragstorm grenade launcher",
                            "range": "18\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Incendium cannon",
                            "range": "12\"",
                            "a": "D6+3",
                            "bs": "N/A",
                            "s": "6",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Twin ironhail autocannon",
                            "range": "48\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Invictor fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "14",
                            "ap": "-2",
                            "d": "3",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3",
                        "Scouts 8\""
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Combat Support"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s incendium cannon can be replaced with 1 twin ironhail autocannon."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Invictor Tactical Warsuit",
                "keywords": [
                    "Vehicle",
                    "Walker",
                    "Imperium",
                    "Phobos",
                    "Invictor Tactical Warsuit"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-land-raider",
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
                    "t": "12",
                    "sv": "2+",
                    "w": "16",
                    "ld": "6+",
                    "oc": "5"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Godhammer lascannon",
                            "range": "48\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "6",
                            "ws": "4+",
                            "s": "8",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Assault Ramp"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 multi-melta.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Land Raider",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Transport",
                    "Imperium",
                    "Land Raider"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-land-raider-crusader",
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
                    "t": "12",
                    "sv": "2+",
                    "w": "16",
                    "ld": "6+",
                    "oc": "5"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Hurricane bolter",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 6",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "6",
                            "ws": "4+",
                            "s": "8",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Assault Ramp"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 multi-melta.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Land Raider Crusader",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Grenades",
                    "Transport",
                    "Imperium",
                    "Land Raider",
                    "Land Raider Crusader"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-land-raider-redeemer",
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
                    "t": "12",
                    "sv": "2+",
                    "w": "16",
                    "ld": "6+",
                    "oc": "5"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Flamestorm cannon",
                            "range": "12\"",
                            "a": "D6+3",
                            "bs": "N/A",
                            "s": "6",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Twin assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "6",
                            "ws": "4+",
                            "s": "8",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Assault Ramp"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 multi-melta.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Land Raider Redeemer",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Grenades",
                    "Transport",
                    "Imperium",
                    "Land Raider",
                    "Land Raider Redeemer"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-outrider-squad",
                "name": "Outrider Squad",
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
                    "m": "12\"",
                    "t": "5",
                    "sv": "3+",
                    "w": "4",
                    "ld": "6+",
                    "oc": "2"
                },
                "baseSize": "90 x 52mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Heavy bolt pistol",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        },
                        {
                            "name": "Onslaught gatling cannon",
                            "range": "24\"",
                            "a": "8",
                            "bs": "3+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Thunderous Impact"
                    ]
                },
                "wargearOptions": [
                    "This unit can include 1 Invader ATV.",
                    "An Invader ATV\u2019s onslaught gatling cannon can be replaced with 1 multi-melta."
                ],
                "composition": {
                    "min": 3,
                    "max": 6
                },
                "compositionText": "1 Outrider Sergeant, 2-5 Outriders, 0-1 Invader ATV",
                "keywords": [
                    "Mounted",
                    "Grenades",
                    "Imperium",
                    "Outrider Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-predator-annihilator",
                "name": "Predator Annihilator",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 135
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "10",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Predator twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Annihilator"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with one of the following:",
                    "2 heavy bolters",
                    "2 lascannons",
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Predator Annihilator",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Predator Annihilator"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-predator-destructor",
                "name": "Predator Destructor",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 140
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "10",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Predator autocannon",
                            "range": "48\"",
                            "a": "4",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-1",
                            "d": "3",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Destructor"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with one of the following:",
                    "2 heavy bolters",
                    "2 lascannons",
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Predator Destructor",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Predator Destructor"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-redemptor-dreadnought",
                "name": "Redemptor Dreadnought",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 205
                    }
                ],
                "stats": {
                    "m": "8\"",
                    "t": "10",
                    "sv": "2+",
                    "w": "12",
                    "ld": "6+",
                    "oc": "4"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Heavy flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "5",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Heavy onslaught gatling cannon",
                            "range": "24\"",
                            "a": "12",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Icarus rocket pod",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Macro plasma incinerator \u2013 standard",
                            "range": "36\"",
                            "a": "D6+1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Macro plasma incinerator \u2013 supercharge",
                            "range": "36\"",
                            "a": "D6+1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "3",
                            "keywords": [
                                "Blast",
                                "Hazardous"
                            ]
                        },
                        {
                            "name": "Onslaught gatling cannon",
                            "range": "24\"",
                            "a": "8",
                            "bs": "3+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin fragstorm grenade launcher",
                            "range": "18\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Redemptor fist",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "12",
                            "ap": "-2",
                            "d": "3",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Duty Eternal"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 Icarus rocket pod.",
                    "This model\u2019s heavy flamer can be replaced with 1 onslaught gatling cannon.",
                    "This model\u2019s heavy onslaught gatling cannon can be replaced with 1 macro plasma incinerator.",
                    "This model\u2019s twin fragstorm grenade launcher can be replaced with 1 twin storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Redemptor Dreadnought",
                "keywords": [
                    "Vehicle",
                    "Walker",
                    "Imperium",
                    "Dreadnought",
                    "Redemptor Dreadnought"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-reiver-squad",
                "name": "Reiver Squad",
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
                    "m": "6\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt carbine",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Precision"
                            ]
                        },
                        {
                            "name": "Special issue bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Pistol",
                                "Precision"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combat knife",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Precision"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Scouts 6\""
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Grapnel Launcher",
                        "Reiver Grav-chute"
                    ],
                    "other": [
                        "Fearsome Assault",
                        "Terror Troops (Aura)"
                    ]
                },
                "wargearOptions": [
                    "All models in this unit can each have their combat knife replaced with 1 bolt carbine and 1 close combat weapon.",
                    "If the Reiver Sergeant is equipped with 1 bolt carbine, it can be equipped with 1 combat knife.",
                    "All models in this unit can each be equipped with 1 Reiver grav-chute.",
                    "All models in this unit can each be equipped with 1 grapnel launcher."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Reiver Sergeant, 4-9 Reivers",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Smoke",
                    "Imperium",
                    "Phobos",
                    "Reiver Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-repulsor",
                "name": "Repulsor",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 180
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "12",
                    "sv": "3+",
                    "w": "16",
                    "ld": "6+",
                    "oc": "5"
                },
                "baseSize": "100mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Heavy onslaught gatling cannon",
                            "range": "24\"",
                            "a": "12",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Hunter-slayer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "Indirect Fire",
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Las-talon",
                            "range": "36\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "10",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Repulsor defensive array",
                            "range": "24\"",
                            "a": "18",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "6",
                            "ws": "4+",
                            "s": "8",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Emergency Combat Embarkation"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s twin heavy bolter can be replaced with 1 twin lascannon.",
                    "This model\u2019s heavy onslaught gatling cannon can be replaced with 1 las-talon."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Repulsor",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Transport",
                    "Imperium",
                    "Repulsor"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-repulsor-executioner",
                "name": "Repulsor Executioner",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 230
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "12",
                    "sv": "3+",
                    "w": "16",
                    "ld": "6+",
                    "oc": "5"
                },
                "baseSize": "100mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Heavy laser destroyer",
                            "range": "72\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "16",
                            "ap": "-4",
                            "d": "D6+4",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Heavy onslaught gatling cannon",
                            "range": "24\"",
                            "a": "12",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Icarus rocket pod",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3"
                            ]
                        },
                        {
                            "name": "Macro plasma incinerator \u2013 standard",
                            "range": "36\"",
                            "a": "D6+1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Macro plasma incinerator \u2013 supercharge",
                            "range": "36\"",
                            "a": "D6+1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "3",
                            "keywords": [
                                "Blast",
                                "Hazardous"
                            ]
                        },
                        {
                            "name": "Repulsor Executioner defensive array",
                            "range": "24\"",
                            "a": "10",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin Icarus ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Fly 4+",
                                "Rapid Fire 3",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "6",
                            "ws": "4+",
                            "s": "8",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Executioner"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s macro plasma incinerator can be replaced with 1 heavy laser destroyer.",
                    "This model can be equipped with 1 ironhail heavy stubber.",
                    "This model can be equipped with 1 Icarus rocket pod."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Repulsor Executioner",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Transport",
                    "Imperium",
                    "Repulsor Executioner"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-scout-squad",
                "name": "Scout Squad",
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
                    "t": "4",
                    "sv": "4+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "28.5mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Astartes shotgun",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Assault"
                            ]
                        },
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Boltgun",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Heavy",
                                "Sustained Hits 1"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "D6",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast",
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Scout sniper rifle",
                            "range": "36\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Heavy",
                                "Precision"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "2",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Combat knife",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Infiltrators",
                        "Scouts 6\""
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Guerrilla Tactics"
                    ]
                },
                "wargearOptions": [
                    "The Scout Sergeant's boltgun can be replaced with 1 Astartes chainsword.",
                    "Any number of models can each have their boltgun replaced with one of the following:",
                    "1 Astartes shotgun",
                    "1 combat knife",
                    "For every 5 models in this unit, 1 Scout\u2019s boltgun can be replaced with 1 Scout sniper rifle.",
                    "For every 5 models in this unit, 1 Scout\u2019s boltgun can be replaced with one of the following:",
                    "1 heavy bolter",
                    "1 missile launcher"
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Scout Sergeant, 4-9 Scouts",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Smoke",
                    "Imperium",
                    "Scout Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-sternguard-veteran-squad",
                "name": "Sternguard Veteran Squad",
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
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Combi-weapon",
                            "range": "24\"",
                            "a": "1",
                            "bs": "4+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Anti-Infantry 4+",
                                "Devastating Wounds",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Pyrecannon",
                            "range": "12\"",
                            "a": "D6+1",
                            "bs": "N/A",
                            "s": "6",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Sternguard bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Sternguard bolt rifle",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Assault",
                                "Devastating Wounds",
                                "Heavy",
                                "Rapid Fire 1"
                            ]
                        },
                        {
                            "name": "Sternguard heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds",
                                "Heavy",
                                "Sustained Hits 1"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Astartes chainsword",
                            "range": "Melee",
                            "a": "6",
                            "ws": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "5",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Sternguard Focus"
                    ]
                },
                "wargearOptions": [
                    "The Sternguard Veteran Sergeant\u2019s Sternguard bolt rifle can be replaced with one of the following:",
                    "1 Astartes chainsword",
                    "1 combi-weapon",
                    "1 power weapon",
                    "1 power fist",
                    "1 Astartes chainsword and 1 Sternguard bolt rifle*",
                    "1 power weapon and 1 Sternguard bolt rifle*",
                    "1 power fist and 1 Sternguard bolt rifle*",
                    "Any number of Sternguard Veterans can each have their Sternguard bolt rifle replaced with 1 combi-weapon.",
                    "For every 5 models in this unit, 1 Sternguard Veteran\u2019s Sternguard bolt rifle can be replaced with one of the following:",
                    "1 pyrecannon",
                    "1 Sternguard heavy bolter",
                    "* This model's Sternguard bolt rifle cannot be replaced."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Sternguard Veteran Sergeant, 4-9 Sternguard Veterans",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Imperium",
                    "Tacticus",
                    "Sternguard Veteran Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-storm-speeder-hailstrike",
                "name": "Storm Speeder Hailstrike",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 115
                    }
                ],
                "stats": {
                    "m": "14\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Fragstorm grenade launcher",
                            "range": "18\"",
                            "a": "D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Onslaught gatling cannon",
                            "range": "24\"",
                            "a": "8",
                            "bs": "3+",
                            "s": "5",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin ironhail heavy stubber",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 3",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Hailstrike"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Storm Speeder Hailstrike",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Imperium",
                    "Storm Speeder Hailstrike"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-storm-speeder-hammerstrike",
                "name": "Storm Speeder Hammerstrike",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 125
                    }
                ],
                "stats": {
                    "m": "14\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hammerstrike missile launcher",
                            "range": "36\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": []
                        },
                        {
                            "name": "Krakstorm grenade launcher",
                            "range": "18\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": []
                        },
                        {
                            "name": "Melta destroyer",
                            "range": "18\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Hammerstrike"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Storm Speeder Hammerstrike",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Imperium",
                    "Storm Speeder Hammerstrike"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-storm-speeder-thunderstrike",
                "name": "Storm Speeder Thunderstrike",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 135
                    }
                ],
                "stats": {
                    "m": "14\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "90mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Stormfury missiles",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Thunderstrike las-talon",
                            "range": "36\"",
                            "a": "2",
                            "bs": "2+",
                            "s": "9",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Twin Icarus rocket pod",
                            "range": "24\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+",
                                "Twin-linked"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Thunderstrike"
                    ]
                },
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Storm Speeder Thunderstrike",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Imperium",
                    "Storm Speeder Thunderstrike"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-stormhawk-interceptor",
                "name": "Stormhawk Interceptor",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 155
                    }
                ],
                "stats": {
                    "m": "20+\"",
                    "t": "9",
                    "sv": "3+",
                    "w": "10",
                    "ld": "6+",
                    "oc": "0"
                },
                "baseSize": "120 x 92mm flying base",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Icarus stormcannon",
                            "range": "48\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Las-talon",
                            "range": "36\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "10",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": []
                        },
                        {
                            "name": "Skyhammer missile launcher",
                            "range": "48\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Anti-Fly 2+"
                            ]
                        },
                        {
                            "name": "Twin assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Typhoon missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "2D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Typhoon missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Interceptor"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s skyhammer missile launcher can be replaced with one of the following:",
                    "1 twin heavy bolter",
                    "1 typhoon missile launcher",
                    "This model\u2019s las-talon can be replaced with 1 Icarus stormcannon."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Stormhawk Interceptor",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Aircraft",
                    "Imperium",
                    "Smoke",
                    "Stormhawk Interceptor"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-stormraven-gunship",
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
                    "t": "10",
                    "sv": "3+",
                    "w": "14",
                    "ld": "6+",
                    "oc": "0"
                },
                "baseSize": "120 x 92mm flying base",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hurricane bolter",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 6",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Stormstrike missile launcher",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "10",
                            "ap": "-2",
                            "d": "3",
                            "keywords": []
                        },
                        {
                            "name": "Twin assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin heavy plasma cannon \u2013 standard",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Blast",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin heavy plasma cannon \u2013 supercharge",
                            "range": "36\"",
                            "a": "D3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "3",
                            "keywords": [
                                "Blast",
                                "Hazardous",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin multi-melta",
                            "range": "18\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-4",
                            "d": "D6",
                            "keywords": [
                                "Melta 2",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Typhoon missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "2D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Typhoon missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "6",
                            "ws": "4+",
                            "s": "8",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D6",
                        "Hover"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Armoured Resilience"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s twin assault cannon can be replaced with one of the following:",
                    "1 twin heavy plasma cannon",
                    "1 twin lascannon",
                    "This model\u2019s typhoon missile launcher can be replaced with one of the following:",
                    "1 twin heavy bolter",
                    "1 twin multi-melta",
                    "This model can be equipped with 2 hurricane bolters."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Stormraven Gunship",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Aircraft",
                    "Transport",
                    "Imperium",
                    "Stormraven Gunship"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-stormtalon-gunship",
                "name": "Stormtalon Gunship",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 165
                    }
                ],
                "stats": {
                    "m": "20+\"",
                    "t": "8",
                    "sv": "3+",
                    "w": "10",
                    "ld": "6+",
                    "oc": "0"
                },
                "baseSize": "120 x 92mm flying base",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Skyhammer missile launcher",
                            "range": "48\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-1",
                            "d": "D3",
                            "keywords": [
                                "Anti-Fly 2+",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin heavy bolter",
                            "range": "36\"",
                            "a": "3",
                            "bs": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Sustained Hits 1",
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Twin lascannon",
                            "range": "48\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "12",
                            "ap": "-3",
                            "d": "D6+1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        },
                        {
                            "name": "Typhoon missile launcher \u2013 frag",
                            "range": "48\"",
                            "a": "2D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Typhoon missile launcher \u2013 krak",
                            "range": "48\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured hull",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
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
                        "Oath of Moment"
                    ],
                    "other": [
                        "Strafing Run"
                    ]
                },
                "wargearOptions": [
                    "This model\u2019s skyhammer missile launcher can be replaced with one of the following:",
                    "1 twin heavy bolter",
                    "1 twin lascannon",
                    "1 typhoon missile launcher"
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Stormtalon Gunship",
                "keywords": [
                    "Vehicle",
                    "Fly",
                    "Aircraft",
                    "Imperium",
                    "Stormtalon Gunship"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-suppressor-squad",
                "name": "Suppressor Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 3,
                        "cost": 75
                    }
                ],
                "stats": {
                    "m": "12\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Accelerator autocannon",
                            "range": "48\"",
                            "a": "3",
                            "bs": "4+",
                            "s": "8",
                            "ap": "-1",
                            "d": "2",
                            "keywords": [
                                "Heavy"
                            ]
                        },
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Close combat weapon",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Suppression Fire"
                    ]
                },
                "composition": {
                    "min": 3,
                    "max": 3
                },
                "compositionText": "1 Suppressor Sergeant, 2 Suppressors",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Smoke",
                    "Jump Pack",
                    "Fly",
                    "Imperium",
                    "Suppressor Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-terminator-assault-squad",
                "name": "Terminator Assault Squad",
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
                    "t": "5",
                    "sv": "2+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "melee": [
                        {
                            "name": "Thunder hammer",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Twin lightning claws",
                            "range": "Melee",
                            "a": "6",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Twin-linked"
                            ]
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Storm Shield"
                    ],
                    "other": [
                        "Teleport Homer",
                        "Terminatus Assault"
                    ]
                },
                "wargearOptions": [
                    "Any number of models can each have their thunder hammer and storm shield replaced with 1 twin lightning claws."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Assault Terminator Sergeant, 4-9 Assault Terminators",
                "keywords": [
                    "Infantry",
                    "Imperium",
                    "Terminators",
                    "Terminator Assault Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-terminator-squad",
                "name": "Terminator Squad",
                "role": "infantry",
                "points": [
                    {
                        "models": 5,
                        "cost": 170
                    },
                    {
                        "models": 10,
                        "cost": 340
                    }
                ],
                "stats": {
                    "m": "5\"",
                    "t": "5",
                    "sv": "2+",
                    "w": "3",
                    "ld": "6+",
                    "oc": "1"
                },
                "invuln": "4+",
                "baseSize": "40mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Assault cannon",
                            "range": "24\"",
                            "a": "6",
                            "bs": "3+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Devastating Wounds"
                            ]
                        },
                        {
                            "name": "Cyclone missile launcher \u2013 frag",
                            "range": "36\"",
                            "a": "2D6",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Cyclone missile launcher \u2013 krak",
                            "range": "36\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "9",
                            "ap": "-2",
                            "d": "D6",
                            "keywords": []
                        },
                        {
                            "name": "Heavy flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "5",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Chainfist",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Anti-Vehicle 3+"
                            ]
                        },
                        {
                            "name": "Power fist",
                            "range": "Melee",
                            "a": "3",
                            "ws": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": []
                        },
                        {
                            "name": "Power weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-2",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Teleport Homer",
                        "Fury of the First"
                    ]
                },
                "wargearOptions": [
                    "For every 5 models in this unit, 1 Terminator\u2019s storm bolter can be replaced with one of the following:",
                    "1 assault cannon",
                    "1 heavy flamer",
                    "1 cyclone missile launcher and 1 storm bolter.*",
                    "Any number of models can each have their power fist replaced with 1 chainfist.",
                    "The Terminator Sergeant\u2019s power fist can be replaced with 1 power weapon.",
                    "* This model\u2019s storm bolter cannot be replaced."
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Terminator Sergeant, 4-9 Terminators",
                "keywords": [
                    "Infantry",
                    "Imperium",
                    "Terminator",
                    "Terminator Squad"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-vanguard-veteran-squad-with-jump-packs",
                "name": "Vanguard Veteran Squad with Jump Packs",
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
                    "m": "12\"",
                    "t": "4",
                    "sv": "3+",
                    "w": "2",
                    "ld": "6+",
                    "oc": "1"
                },
                "baseSize": "32mm",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Bolt pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Grav-pistol",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "4",
                            "ap": "-1",
                            "d": "1",
                            "keywords": [
                                "Anti-Vehicle 2+",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Hand flamer",
                            "range": "12\"",
                            "a": "D6",
                            "bs": "N/A",
                            "s": "3",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Ignores Cover",
                                "Pistol",
                                "Torrent"
                            ]
                        },
                        {
                            "name": "Inferno pistol",
                            "range": "6\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-4",
                            "d": "D3",
                            "keywords": [
                                "Melta 2",
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 standard",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "7",
                            "ap": "-2",
                            "d": "1",
                            "keywords": [
                                "Pistol"
                            ]
                        },
                        {
                            "name": "Plasma pistol \u2013 supercharge",
                            "range": "12\"",
                            "a": "1",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-3",
                            "d": "2",
                            "keywords": [
                                "Hazardous",
                                "Pistol"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Vanguard Veteran weapon",
                            "range": "Melee",
                            "a": "4",
                            "ws": "3+",
                            "s": "5",
                            "ap": "-1",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deep Strike"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "wargear": [
                        "Storm Shield"
                    ],
                    "other": [
                        "Vanguard Assault"
                    ]
                },
                "wargearOptions": [
                    "Any number of models can each have their bolt pistol replaced one of the following:",
                    "1 storm shield",
                    "1 grav-pistol",
                    "1 hand flamer",
                    "1 inferno pistol",
                    "1 plasma pistol"
                ],
                "composition": {
                    "min": 5,
                    "max": 10
                },
                "compositionText": "1 Vanguard Veteran Sergeant with Jump Pack, 4-9 Vanguard Veterans with Jump Packs",
                "keywords": [
                    "Infantry",
                    "Grenades",
                    "Jump Pack",
                    "Fly",
                    "Imperium",
                    "Vanguard Veteran Squad",
                    "Vanguard Veteran Squad With Jump Packs"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-vindicator",
                "name": "Vindicator",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 185
                    }
                ],
                "stats": {
                    "m": "9\"",
                    "t": "11",
                    "sv": "2+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Demolisher cannon",
                            "range": "24\"",
                            "a": "D6+3",
                            "bs": "3+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "Blast"
                            ]
                        },
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Siege Shield"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Vindicator",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Vindicator"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            },
            {
                "id": "salamanders-whirlwind",
                "name": "Whirlwind",
                "role": "vehicle",
                "points": [
                    {
                        "models": 1,
                        "cost": 190
                    }
                ],
                "stats": {
                    "m": "10\"",
                    "t": "10",
                    "sv": "3+",
                    "w": "11",
                    "ld": "6+",
                    "oc": "3"
                },
                "baseSize": "Use model",
                "weapons": {
                    "ranged": [
                        {
                            "name": "Hunter-killer missile",
                            "range": "48\"",
                            "a": "1",
                            "bs": "2+",
                            "s": "14",
                            "ap": "-3",
                            "d": "D6",
                            "keywords": [
                                "One Shot"
                            ]
                        },
                        {
                            "name": "Storm bolter",
                            "range": "24\"",
                            "a": "2",
                            "bs": "3+",
                            "s": "4",
                            "ap": "0",
                            "d": "1",
                            "keywords": [
                                "Rapid Fire 2"
                            ]
                        },
                        {
                            "name": "Whirlwind vengeance launcher",
                            "range": "72\"",
                            "a": "D6+3",
                            "bs": "3+",
                            "s": "8",
                            "ap": "-2",
                            "d": "2",
                            "keywords": [
                                "Blast",
                                "Indirect Fire"
                            ]
                        }
                    ],
                    "melee": [
                        {
                            "name": "Armoured tracks",
                            "range": "Melee",
                            "a": "3",
                            "ws": "4+",
                            "s": "6",
                            "ap": "0",
                            "d": "1",
                            "keywords": []
                        }
                    ]
                },
                "abilities": {
                    "core": [
                        "Deadly Demise D3"
                    ],
                    "faction": [
                        "Oath of Moment"
                    ],
                    "other": [
                        "Pinning Bombardment"
                    ]
                },
                "wargearOptions": [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 storm bolter."
                ],
                "composition": {
                    "min": 1,
                    "max": 1
                },
                "compositionText": "1 Whirlwind",
                "keywords": [
                    "Vehicle",
                    "Smoke",
                    "Imperium",
                    "Whirlwind"
                ],
                "factionKeywords": [
                    "Adeptus Astartes"
                ]
            }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(salamanders);
})();