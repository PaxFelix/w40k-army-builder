/**
 * W40K Army Builder — Emperor's Children (10th Edition)
 *
 * Datasheets from Codex: Emperor's Children. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ec = {
        id: "emperors-children",
        name: "Emperor's Children",
        icon: "🎭",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Flawless to a Fault", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Mercurial Host",
                flavour: "",
                rule: { name: "Quicksilver Grace", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Steeped in Suffering", cost: 20, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Intoxicating Musk", cost: 20, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Tactical Perfection", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Loathsome Dexterity", cost: 10, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Violent Excess", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Combat Stimms", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Honour the Prince", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dark Vigour", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Capricious Reactions", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cruel Raiders", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Peerless Bladesmen",
                flavour: "",
                rule: { name: "Exquisite Swordsmanship", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Faultless Opportunist", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Blinding Speed", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Distortion", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Rise to the Challenge", cost: 30, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "" },
                ],
                stratagems: [
                    { name: "Deft Parry", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Death Ecstasy", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Incessant Violence", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cruel Bladesman", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Terrifying Spectacle", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cut Down the Weak", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Rapid Evisceration",
                flavour: "",
                rule: { name: "Mechanised Murder", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Sublime Prescience", cost: 25, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "" },
                    { name: "Spearhead Striker", cost: 20, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "" },
                    { name: "Accomplished Tactician", cost: 35, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "" },
                    { name: "Heretek Adept", cost: 35, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "" },
                ],
                stratagems: [
                    { name: "Onto the Next", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Advance and Claim", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dynamic Breakthrough", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ceaseless Onslaught", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reactive Disembarkation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Outflanking Strike", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Carnival of Excess",
                flavour: "",
                rule: { name: "Daemonic Empowerment", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Empyric Suffusion", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Dark Blessings", cost: 10, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "" },
                    { name: "Possessed Blade", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Warp Walker", cost: 30, restriction: "EMPEROR'S CHILDREN or KEEPER OF SECRETS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Sustained by Agony", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ecstatic Slaughter", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Violent Crescendo", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Sycophantic Surge", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Uncanny Reactions", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dark Apparitions", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Coterie of the Conceited",
                flavour: "",
                rule: { name: "Pledges to the Dark Prince", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Pledge of Eternal Servitude", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Pledge of Dark Glory", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Pledge of Mortal Pain", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Pledge of Unholy Fortune", cost: 30, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Protection of the Dark Prince", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unshakeable Opponents", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Embrace the Pain", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Martial Perfection", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unbound Arrogance", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Armour of Abhorrence", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Slaanesh's Chosen",
                flavour: "",
                rule: { name: "Internal Rivalries", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eager to Prove", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Repulsed by Weakness", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Proud and Vainglorious", cost: 20, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Slayer of Champions", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Devoted Duellists", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Beautiful Death", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Heightened Jealousy", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Diabolic Majesty", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Refusal to Be Outdone", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Vengeful Surge", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Court of the Phoenician",
                flavour: "",
                rule: { name: "Sensational Performance", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Tears of the Phoenix", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Exalted Patron", cost: 15, restriction: "LORD EXULTANT model only.", text: "" },
                    { name: "Soulstain Made Manifest", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "" },
                    { name: "Spiritsliver", cost: 20, restriction: "EMPEROR'S CHILDREN DAEMON PRINCE model only.", text: "" },
                ],
                stratagems: [
                    { name: "Contemptuous Disregard", cp: 1, type: "", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Prideful Superiority", cp: 2, type: "", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Sinuous Breach", cp: 1, type: "", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Close-quarters Excruciation", cp: 1, type: "", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Euphoric Inspiration", cp: 1, type: "", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Catalytic Stimulus", cp: 1, type: "", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ec-daemon-prince-of-slaanesh",
                        "name": "Daemon Prince of Slaanesh",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Excess",
                                        "Excessive Vigour",
                                        "Ecstatic Death"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Daemon Prince of Slaanesh This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "ec-daemon-prince-of-slaanesh-with-wings",
                        "name": "Daemon Prince of Slaanesh with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 215
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Destruction",
                                        "Stimulated by Pain"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Daemon Prince With Wings"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Daemon Prince of Slaanesh with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "ec-fulgrim",
                        "name": "Fulgrim",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 340
                                }
                        ],
                        "stats": {
                                "m": "16\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 16,
                                "ld": "5+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Malefic lash",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Daemonic blades – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Daemonic blades – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Serpentine tail",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
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
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Poisons",
                                        "Daemon Primarch of Slaanesh",
                                        "Serpentine"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Daemon",
                                "Chaos",
                                "Slaanesh",
                                "Primarch",
                                "Fulgrim"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Fulgrim – EPIC HERO This model is equipped with: malefic lash; daemonic blades; serpentine tail. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-keeper-of-secrets",
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
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Slaanesh",
                                        "Mesmerising Form",
                                        "Shining Aegis"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Summoned",
                                "Slaanesh",
                                "Keeper Of Secrets"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Keeper of Secrets This model is equipped with: Phantasmagoria; snapping claws; witstealer sword. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-lord-exultant",
                        "name": "Lord Exultant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "name": "Plasma pistol - standard",
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
                                                "name": "Plasma pistol - supercharge",
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
                                        },
                                        {
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Master-crafted power sword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Phoenix power spear",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Rapture lash",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Perfectionists",
                                        "Euphoric Strikes"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Lord Exultant"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following units: Infractors; Tormentors.",
                        "compositionText": "1 Lord Exultant This model is equipped with: bolt pistol; plasma pistol; Phoenix power spear; close combat weapon."
                },
                {
                        "id": "ec-lord-kakophonist",
                        "name": "Lord Kakophonist",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Obsessive Annunciation",
                                        "Doom Siren"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Lord Kakophonist"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminators; Noise Marines.",
                        "compositionText": "1 Lord Kakophonist This model is equipped with: screamer pistol; power sword."
                },
                {
                        "id": "ec-lucius-the-eternal",
                        "name": "Lucius the Eternal",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
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
                                                "name": "Blade of the Laer",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Lash of Torment",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+",
                                        "Leader",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "A Challenge Worthy of Skill",
                                        "Duellist’s Hubris"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Slaanesh",
                                "Lucius The Eternal"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following unit: Flawless Blades.",
                        "compositionText": "1 Lucius the Eternal – EPIC HERO This model is equipped with: Blade of the Laer; Lash of Torment."
                },
                {
                        "id": "ec-shalaxi-helbane",
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
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
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
                                "Summoned",
                                "Slaanesh",
                                "Shalaxi Helbane"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Shalaxi Helbane – EPIC HERO This model is equipped with: lash of Slaanesh; Pavane of Slaanesh; snapping claws; Soulpiercer. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-sorcerer",
                        "name": "Sorcerer",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Agonising Energies – witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Agonising Energies – focused witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warped Interference",
                                        "Wracking Agonies"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Sorcerer"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following units: Infractors; Noise Marines; Tormentors.",
                        "compositionText": "1 Sorcerer This model is equipped with: Agonising Energies; bolt pistol; force weapon."
                },
                {
                        "id": "ec-daemonettes",
                        "name": "Daemonettes",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "9\"",
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
                                        "Pact of Excess"
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
                                "Summoned",
                                "Slaanesh",
                                "Daemonettes"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Alluress 9 Daemonettes Every model is equipped with: slashing claws."
                },
                {
                        "id": "ec-infractors",
                        "name": "Infractors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Duelling sabre",
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Rapture lash",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Excessive Assault",
                                        "Icon of Excess"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Infractors"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Obsessionist 4-9 Infractors The Obsessionist is equipped with: bolt pistol; power sword. Every Infractor is equipped with: bolt pistol; duelling sabre."
                },
                {
                        "id": "ec-tormentors",
                        "name": "Tormentors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Precision"
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
                                                        "Precision"
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
                                                        "Melta 2",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun - standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun - supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Precision",
                                                        "Rapid Fire 1"
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
                                                        "Pistol",
                                                        "Precision"
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
                                                        "Hazardous",
                                                        "Pistol",
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Rapture lash",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Objective Defiled",
                                        "Icon of Excess"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Tormentors"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Obsessionist 4-9 Tormentors The Obsessionist is equipped with: bolt pistol; power sword. Every Tormentor is equipped with: boltgun; close combat weapon."
                },
                {
                        "id": "ec-chaos-rhino",
                        "name": "Chaos Rhino",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assault Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Chaos",
                                "Slaanesh",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 EMPEROR’S CHILDREN INFANTRY models (excluding TERMINATOR and FLAWLESS BLADE models)."
                },
                {
                        "id": "ec-chaos-land-raider",
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
                                        "Thrill Seekers"
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
                                "Slaanesh",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 EMPEROR’S CHILDREN INFANTRY models. Each TERMINATOR and FLAWLESS BLADE model takes up the space of 2 models."
                },
                {
                        "id": "ec-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 70
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Horrors"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Slaanesh",
                                "Chaos Spawn"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "ec-chaos-terminators",
                        "name": "Chaos Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "6\"",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
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
                                                "ap": -2,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lethal Obsession"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Slaanesh",
                                "Terminator",
                                "Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Terminator Champion 4 Chaos Terminators Every model is equipped with: combi-bolter; accursed weapon."
                },
                {
                        "id": "ec-defiler",
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
                                                "name": "Hades battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma destructor",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
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
                                                "keywords": []
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
                                                        "Melta 2"
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
                                                "name": "Hades lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
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
                                                        "Sustained Hits 1"
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
                                                "keywords": []
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
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Shearing claws – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Precision"
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
                                                "keywords": []
                                        },
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Revel in Desecration"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Slaanesh",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-fiends",
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
                                        "Pact of Excess"
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
                                "Summoned",
                                "Slaanesh",
                                "Fiends"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Blissbringer 2-5 Fiends Every model is equipped with: barbed tail and dissecting claws."
                },
                {
                        "id": "ec-flawless-blades",
                        "name": "Flawless Blades",
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
                                "m": "8\"",
                                "t": 5,
                                "sv": "3+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blissblade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Patrons"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Flawless Blades"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "3-6 Flawless Blades Every model is equipped with: bolt pistol; blissblade."
                },
                {
                        "id": "ec-heldrake",
                        "name": "Heldrake",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
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
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Heldrake claws",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Thrill Seekers"
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
                                "Daemon",
                                "Slaanesh",
                                "Heldrake"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Heldrake This model is equipped with: Hades autocannon; Heldrake claws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-maulerfiend",
                        "name": "Maulerfiend",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
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
                                                "name": "Magma cutters",
                                                "range": "6\"",
                                                "a": 2,
                                                "bs": "3+",
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
                                                "a": 6,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Glutton for Punishment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Maulerfiend"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Maulerfiend This model is equipped with: lasher tendrils; Maulerfiend fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-noise-marines",
                        "name": "Noise Marines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blastmaster – single frequency",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Blastmaster – varied frequency",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
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
                                                "name": "Sonic blaster",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Terrifying Crescendo"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Slaanesh",
                                "Noise Marines"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Disharmonist 5 Noise Marines Every model is equipped with: sonic blaster; close combat weapon."
                },
                {
                        "id": "ec-seekers",
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
                                        "Pact of Excess"
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
                                "Summoned",
                                "Slaanesh",
                                "Seekers"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Heartseeker 4-9 Seekers Every model is equipped with: lashing tongue; slashing claws."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ec);
})();
