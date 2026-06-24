/**
 * W40K Army Builder — World Eaters (10th Edition)
 *
 * Datasheets from Codex: World Eaters. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const we = {
        id: "world-eaters",
        name: "World Eaters",
        icon: "🩸",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Blessings of Khorne", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Berzerker Warband",
                flavour: "",
                rule: { name: "Relentless Rage", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Berzerker Glaive", cost: 35, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Helm of Brazen Ire", cost: 30, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Favoured of Khorne", cost: 15, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Battle-lust", cost: 10, restriction: "WORLD EATERS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Blood Offering", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hack and Slash", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Frenzied Resilience", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Skulls for the Skull Throne!", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Apoplectic Frenzy", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Berzerker's Wrath", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Cult of Blood",
                flavour: "",
                rule: { name: "Idols of Khorne", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Chosen of the Blood God", cost: 15, restriction: "WORLD EATERS MONSTER model only.", text: "" },
                    { name: "Butcher Lord", cost: 10, restriction: "WORLD EATERS INFANTRY model only.", text: "" },
                    { name: "Brazen Form", cost: 25, restriction: "WORLD EATERS MONSTER model only.", text: "" },
                    { name: "Strategic Slaughter", cost: 20, restriction: "WORLD EATERS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Bloody Vengeance", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Drawn to the Slaughter", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "In the Shadow of Brass Idols", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Bloodthirsty Horde", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fail not the Blood God", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Brazen Idol", cp: 2, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Khorne Daemonkin",
                flavour: "",
                rule: { name: "Blood Tithe", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Icon of War", cost: 25, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Blood-forged Armour", cost: 20, restriction: "BLOOD LEGIONS or WORLD EATERS model only.", text: "" },
                    { name: "Disciple of Khorne", cost: 15, restriction: "LORD ON JUGGERNAUT model only.", text: "" },
                    { name: "Blade of Endless Bloodshed", cost: 30, restriction: "WORLD EATERS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Summoned by Slaughter", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Daemonic Fury", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "A Worthy Skull", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Blessing of Burning Blood", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Daemontide", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Murder-call", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Possessed Slaughterband",
                flavour: "",
                rule: { name: "Brazen Fury", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Malicious Vigour", cost: 30, restriction: "SLAUGHTERBOUND model only.", text: "" },
                    { name: "Killing Clarity", cost: 15, restriction: "WORLD EATERS DAEMON model only.", text: "" },
                    { name: "Frenzied Focus", cost: 20, restriction: "WORLD EATERS DAEMON model only.", text: "" },
                    { name: "Violent Demise", cost: 10, restriction: "WORLD EATERS DAEMON model only.", text: "" },
                ],
                stratagems: [
                    { name: "Daemonic Resistance", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Daemonic Strength", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Immortal Fury", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rapid Manifestation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Warp Stalkers", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Horrifying Violence", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Goretrack Onslaught",
                flavour: "",
                rule: { name: "Rush to the Fray", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Murderous Onslaught", cost: 5, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Aggressive Deployment", cost: 20, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Unleash Hell", cost: 10, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Infernal Infusion", cost: 25, restriction: "WORLD EATERS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Endless Pursuit of Violence", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Smash Through", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Aggressive Disembarkation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Full-throttle Assault", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unrelenting Advance", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fury Unleashed", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Vessels of Wrath",
                flavour: "",
                rule: { name: "Wrath of Khorne", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Archslaughterer", cost: 25, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Vox-diabolus", cost: 20, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Avenger's Crown", cost: 15, restriction: "WORLD EATERS model only.", text: "" },
                    { name: "Gateways to Glory", cost: 10, restriction: "WORLD EATERS DAEMON PRINCE or WORLD EATERS MOUNTED model only.", text: "" },
                ],
                stratagems: [
                    { name: "Aspire to Infamy", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Overshadowed by None", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Gory Dedication", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Punish the Craven", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Meet Force with Force", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Brazen Contempt", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "we-angron",
                        "name": "Angron",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 340
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 16,
                                "ld": "5+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Samni’arius and Spinegrinder – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Samni’arius and Spinegrinder – sweep",
                                                "range": "Melee",
                                                "a": 16,
                                                "ws": "2+",
                                                "s": 7,
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
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Reborn in Blood",
                                        "Wrathful Presence"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Epic Hero",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Primarch",
                                "Angron"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Angron – EPIC HERO This model is equipped with: Samni’arius and Spinegrinder. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-bloodthirster",
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
                                                "a": 9,
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
                                        "Pact of Blood"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Khorne",
                                        "Relentless Carnage"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Summoned",
                                "Bloodthirster"
                        ],
                        "factionKeywords": [
                                "Blood Legions"
                        ],
                        "compositionText": "1 Bloodthirster This model is equipped with: hellfire breath; great axe of Khorne DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-daemon-prince-of-khorne",
                        "name": "Daemon Prince of Khorne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "10\"",
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
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 16,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Murder",
                                        "Devastating Assault",
                                        "Direct the Slaughter"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Daemon Prince of Khorne This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "we-daemon-prince-of-khorne-with-wings",
                        "name": "Daemon Prince of Khorne with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "14\"",
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
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 16,
                                                "ws": "2+",
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bloodied Terror",
                                        "Swooping Predator"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Daemon Prince of Khorne with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "we-kh-rn-the-betrayer",
                        "name": "Khârn the Betrayer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "8\"",
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
                                                "name": "Gorechild",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Legendary Killer",
                                        "The Betrayer",
                                        "Berzerker Frenzy"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Chaos",
                                "Khorne",
                                "Khârn The Betrayer"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "leaderText": "This model can be attached to the following unit: Khorne Berzerkers.",
                        "compositionText": "1 Khârn the Betrayer – EPIC HERO This model is equipped with: plasma pistol; Gorechild."
                },
                {
                        "id": "we-lord-invocatus",
                        "name": "Lord Invocatus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 8,
                                "ld": "6+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Coward’s Bane",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Bladed horn",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Deep Strike",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fire Riders",
                                        "Bloody Stampede"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Khorne",
                                "Lord Invocatus"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "leaderText": "This model can be attached to the following units: Eightbound; Exalted Eightbound; Khorne Berzerkers.",
                        "compositionText": "1 Lord Invocatus – EPIC HERO This model is equipped with: bolt pistol; Coward’s Bane, bladed horn."
                },
                {
                        "id": "we-lord-on-juggernaut",
                        "name": "Lord on Juggernaut",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 7,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
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
                                                "name": "Exalted chainblade",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Bladed horn",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aggressive Advance",
                                        "Crush All Who Stand Before Us"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Khorne",
                                "Lord On Juggernaut"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "leaderText": "This model can be attached to the following units: Eightbound; Exalted Eightbound; Khorne Berzerkers.",
                        "compositionText": "1 Lord on Juggernaut This model is equipped with: plasma pistol; exalted chainblade; bladed horn."
                },
                {
                        "id": "we-master-of-executions",
                        "name": "Master of Executions",
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Forwards, for Blood!",
                                        "A Worthy Skull"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Khorne",
                                "Master Of Executions"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "leaderText": "This model can be attached to the following unit: Khorne Berzerkers.",
                        "compositionText": "1 Master of Executions This model is equipped with: bolt pistol; axe of dismemberment."
                },
                {
                        "id": "we-skarbrand",
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
                                        "Pact of Blood"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rage Embodied",
                                        "Murderlust"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Summoned",
                                "Skarbrand"
                        ],
                        "factionKeywords": [
                                "Blood Legions"
                        ],
                        "compositionText": "1 Skarbrand – EPIC HERO This model is equipped with: bellow of endless fury; Slaughter and Carnage. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, add 2 to the Attacks characteristic of this model’s melee weapons."
                },
                {
                        "id": "we-slaughterbound",
                        "name": "Slaughterbound",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lacerator and daemonic claw",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Deadly Demise D3",
                                        "Leader"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rage Eternal",
                                        "Possessed Lord"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Possessed",
                                "Slaughterbound"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "leaderText": "This model can be attached to the following units: Eightbound; Exalted Eightbound.",
                        "compositionText": "1 Slaughterbound This model is equipped with: lacerator and daemonic claw."
                },
                {
                        "id": "we-bloodletters",
                        "name": "Bloodletters",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
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
                                        "Pact of Blood"
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
                                "Summoned",
                                "Bloodletters"
                        ],
                        "factionKeywords": [
                                "Blood Legions"
                        ],
                        "compositionText": "1 Bloodreaper 9 Bloodletters Every model is equipped with: hellblade."
                },
                {
                        "id": "we-khorne-berzerkers",
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
                                "World Eaters"
                        ],
                        "compositionText": "1 Khorne Berzerker Champion 9-19 Khorne Berzerkers Every model is equipped with: bolt pistol; chainblade."
                },
                {
                        "id": "we-chaos-rhino",
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
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
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
                                                "bs": "4+",
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
                                                "a": 6,
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
                                        "Deadly Demise D3",
                                        "Firing Deck 2"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Meet Any Challenge"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Chaos",
                                "Khorne",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: 1 combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 WORLD EATERS INFANTRY models. It cannot transport POSSESSED or TERMINATOR models."
                },
                {
                        "id": "we-bloodcrushers",
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
                                                "name": "Bladed horn",
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
                                        "Pact of Blood"
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
                                "Summoned",
                                "Bloodcrushers"
                        ],
                        "factionKeywords": [
                                "Blood Legions"
                        ],
                        "compositionText": "1 Bloodhunter 2-5 Bloodcrushers Every model is equipped with: hellblade; bladed horn."
                },
                {
                        "id": "we-chaos-land-raider",
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
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
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
                                                "bs": "4+",
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
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                        "Rapid Fire 2",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 9,
                                                "ws": "3+",
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
                                        "Blessings of Khorne"
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
                                "Khorne",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 WORLD EATERS INFANTRY models. Each POSSESSED and TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "we-chaos-predator-annihilator",
                        "name": "Chaos Predator Annihilator",
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
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
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
                                                "bs": "4+",
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
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2",
                                                        "Sustained Hits 1"
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
                                                "name": "Predator twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blood-hungry Annihilator"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Khorne",
                                "Predator Annihilator"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Chaos Predator Annihilator This model is equipped with: Predator twin lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-chaos-predator-destructor",
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
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
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
                                                "bs": "4+",
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
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2",
                                                        "Sustained Hits 1"
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
                                                "name": "Predator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 6"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Punishing Suppression"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Khorne",
                                "Predator Destructor"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Chaos Predator Destructor This model is equipped with: Predator autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
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
                                                "a": "D6+4",
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
                                        "Feel No Pain 5+",
                                        "Scouts 8\""
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "To Slake its Rage"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Khorne",
                                "Spawn"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "we-chaos-terminators",
                        "name": "Chaos Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 175
                                },
                                {
                                        "models": 10,
                                        "cost": 350
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
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
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Rapid Fire 2",
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
                                                "ap": -3,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bloody Fury"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Khorne",
                                "Terminator",
                                "Terminator Squad"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Terminator Champion 4-9 Chaos Terminators Every model is equipped with: combi-bolter; accursed weapon."
                },
                {
                        "id": "we-defiler",
                        "name": "Defiler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "14\"",
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
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Excruciator cannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "name": "Hades battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hades lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Heavy reaper autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Rapid Fire 2",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Magma cutters",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Electroscourge",
                                                "range": "Melee",
                                                "a": 7,
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
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Shearing claws – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Unleash Wrath"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-eightbound",
                        "name": "Eightbound",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 135
                                },
                                {
                                        "models": 6,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "10\"",
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
                                                "name": "Chainblades",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Beacons of Rage"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Possessed",
                                "Eightbound"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Eightbound Champion 2-5 Eightbound Every model is equipped with: chainblades."
                },
                {
                        "id": "we-exalted-eightbound",
                        "name": "Exalted Eightbound",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 140
                                },
                                {
                                        "models": 6,
                                        "cost": 280
                                }
                        ],
                        "stats": {
                                "m": "10\"",
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
                                                "name": "Chainblades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 3+",
                                                        "Anti-Vehicle 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rend and Tear"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Possessed",
                                "Exalted Eightbound"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Exalted Eightbound Champion 2-5 Exalted Eightbound Every model is equipped with: chainblades."
                },
                {
                        "id": "we-flesh-hounds",
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
                                        "Pact of Blood"
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
                                "Summoned",
                                "Flesh Hounds"
                        ],
                        "factionKeywords": [
                                "Blood Legions"
                        ],
                        "compositionText": "1 Gore Hound 4-9 Flesh Hounds The Gore Hound is equipped with: burning roar; gore-drenched fangs; collar of Khorne. Every Flesh Hound is equipped with: gore-drenched fangs; collar of Khorne."
                },
                {
                        "id": "we-forgefiend",
                        "name": "Forgefiend",
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
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hades autocannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 4"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Forgefiend claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Forgefiend jaws",
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Furious Onslaught"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Forgefiend"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Forgefiend This model is equipped with: 2 Hades autocannons; 1 Forgefiend jaws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-goremongers",
                        "name": "Goremongers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 8,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 4,
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
                                                "name": "Blood harpoon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Sustained Hits D3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainblade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Loping Speed"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Khorne",
                                "Goremongers"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Blood Herald 7 Goremongers Every model is equipped with: autopistol; chainblade; close combat weapon."
                },
                {
                        "id": "we-helbrute",
                        "name": "Helbrute",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "9\"",
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
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
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
                                                "name": "Plasma cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Rapid Fire D3"
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
                                                        "Rapid Fire 3"
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
                                                        "Rapid Fire 1"
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
                                                        "Melta 2",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
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
                                                        "Rapid Fire 2",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Rapid Fire 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Helbrute fist",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Helbrute hammer",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power scourge",
                                                "range": "Melee",
                                                "a": 10,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Devoted to Destruction",
                                        "Frenzy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Khorne",
                                "Helbrute"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Helbrute This model is equipped with: missile launcher; multi-melta; close combat weapon."
                },
                {
                        "id": "we-heldrake",
                        "name": "Heldrake",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 200
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
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 4"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Heldrake claws",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Blessings of Khorne"
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
                                "Khorne",
                                "Daemon",
                                "Heldrake"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Heldrake This model is equipped with: Hades autocannon; Heldrake claws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-jakhals",
                        "name": "Jakhals",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainblades",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paired manglers",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mauler chainblade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Skullsmasher and mangler",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
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
                                        "Objective Ravaged",
                                        "Icon of Khorne"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Khorne",
                                "Jakhals"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Jakhal Pack Leader, 1 Dishonoured and 8 Jakhals or: 1 Jakhal Pack Leader, 2 Dishonoured and 17 Jakhals The Jakhal Pack Leader and every Jakhal is equipped with: autopistol; chainblades. Every Dishonoured is equipped with: paired manglers."
                },
                {
                        "id": "we-khorne-lord-of-skulls",
                        "name": "Khorne Lord of Skulls",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 505
                                }
                        ],
                        "stats": {
                                "m": "12\"",
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
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Gorestorm cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hades gatling cannon",
                                                "range": "48\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 6",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Ichor cannon",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire 4"
                                                ]
                                        },
                                        {
                                                "name": "Skullhurler",
                                                "range": "60\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Great cleaver of Khorne – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great cleaver of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 18,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Idol of Blessed Blood",
                                        "Super-heavy War Engine"
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
                                "World Eaters"
                        ],
                        "compositionText": "1 Khorne Lord of Skulls This model is equipped with: gorestorm cannon; Hades gatling cannon; great cleaver of Khorne. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "we-maulerfiend",
                        "name": "Maulerfiend",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "12\"",
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
                                                "name": "Magma cutter",
                                                "range": "6\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Rapid Fire 1"
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
                                                "a": 8,
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
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Scent of Blood",
                                        "Savage Exaltation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Maulerfiend"
                        ],
                        "factionKeywords": [
                                "World Eaters"
                        ],
                        "compositionText": "1 Maulerfiend This model is equipped with: lasher tendrils; Maulerfiend fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(we);
})();
