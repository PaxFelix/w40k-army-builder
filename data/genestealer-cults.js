/**
 * W40K Army Builder — Genestealer Cults (10th Edition)
 *
 * Datasheets from Codex: Genestealer Cults. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const gsc = {
        id: "genestealer-cults",
        name: "Genestealer Cults",
        icon: "🐛",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Cult Ambush", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Host of Ascension",
                flavour: "",
                rule: { name: "A Perfect Ambush", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Prowling Agitant", cost: 15, restriction: "GENESTEALER CULTS model only.", text: "" },
                    { name: "A Chink in Their Armour", cost: 20, restriction: "GENESTEALER CULTS model only.", text: "" },
                    { name: "Our Time Is Nigh", cost: 20, restriction: "GENESTEALER CULTS model only.", text: "" },
                    { name: "Assassination Edict", cost: 15, restriction: "GENESTEALER CULTS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Coordinated Trap", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Primed and Readied", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Tunnel Crawlers", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Lying in Wait", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Return to the Shadows", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "A Deadly Snare", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Xenocreed Congregation",
                flavour: "",
                rule: { name: "Unquestioning Fanaticism", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Gene-sire's Reliquant", cost: 5, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "" },
                    { name: "Denunciator of Tyrants", cost: 25, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "" },
                    { name: "Deeds That Speak to the Masses", cost: 25, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "" },
                    { name: "Incendiary Inspiration", cost: 15, restriction: "MAGUS, PRIMUS or ACOLYTE ICONWARD model only.", text: "" },
                ],
                stratagems: [
                    { name: "Vengeance for the Martyr!", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Frenzied Devotion", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Tireless Fervour", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Transcendent Celerity", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "The Downtrodden Rise", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "The Path of Anguish", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Biosanctic Broodsurge",
                flavour: "",
                rule: { name: "Hypermorphic Fury", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Predatory Instincts", cost: 20, restriction: "ABOMINANT, BIOPHAGUS or PATRIARCH model only.", text: "" },
                    { name: "Biomorph Adaptation", cost: 25, restriction: "ABOMINANT or PATRIARCH model only.", text: "" },
                    { name: "Mutagenic Regeneration", cost: 10, restriction: "ABOMINANT, BIOPHAGUS or PATRIARCH model only.", text: "" },
                    { name: "Alien Majesty", cost: 15, restriction: "ABOMINANT, BIOPHAGUS or PATRIARCH model only.", text: "" },
                ],
                stratagems: [
                    { name: "Evasive Vanguard", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Saintly Paroxysm", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Gene-twisted Muscle", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hyper-metabolic Vigour", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Stimulated Bio-surge", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Bio-horror Revelation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Outlander Claw",
                flavour: "",
                rule: { name: "Rapid Takeover", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Serpentine Tactics", cost: 10, restriction: "GENESTEALER CULTS MOUNTED model only.", text: "" },
                    { name: "Cartographic Data-leech", cost: 10, restriction: "GENESTEALER CULTS model only.", text: "" },
                    { name: "Starfall Shells", cost: 10, restriction: "GENESTEALER CULTS MOUNTED model only.", text: "" },
                    { name: "Assault Commando", cost: 15, restriction: "GENESTEALER CULTS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Along Shadowed Trails", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Devoted Crew", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Close-range Shoot-out", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rapid Feint", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Deft Manoeuvring", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Encircling the Prey", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Brood Brother Auxilia",
                flavour: "",
                rule: { name: "Integrated Tactics", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Martial Espionage", cost: 25, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "" },
                    { name: "Adaptive Reprisal", cost: 15, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "" },
                    { name: "The Hero Returned", cost: 20, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "" },
                    { name: "Firepoint Commander", cost: 10, restriction: "GENESTEALER CULTS INFANTRY model only.", text: "" },
                ],
                stratagems: [
                    { name: "In the Shadow of Iron", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Regimental Reinforcements", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Suppress and Overwhelm", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Acceptable Losses", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Symbiotic Destruction", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "A Dark Network", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Final Day",
                flavour: "",
                rule: { name: "Psionic Parasitism", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Synaptic Auger", cost: 15, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Enraptured Damnation", cost: 10, restriction: "GENESTEALER CULTS model only.", text: "" },
                    { name: "Vanguard Tyrant", cost: 25, restriction: "WINGED HIVE TYRANT model only.", text: "" },
                    { name: "Inhuman Integration", cost: 20, restriction: "GENESTEALER CULTS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Hyperferocity", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Psi Surge", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Avenge the Star Children", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Divine Imperative", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Darting Attacks", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Resistance Tunnels", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "gsc-abominant",
                        "name": "Abominant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Power sledgehammer",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "The Chosen One",
                                        "Regenerating Gene-mass"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Abominant"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following unit: Aberrants.",
                        "compositionText": "1 Abominant This model is equipped with: power sledgehammer."
                },
                {
                        "id": "gsc-acolyte-iconward",
                        "name": "Acolyte Iconward",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult claws",
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
                                        "Deep Strike",
                                        "Leader",
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Nexus of Devotion",
                                        "Summon the Cult"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Great Devourer",
                                "Acolyte Iconward"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Acolyte Iconward This model is equipped with: autopistol; cult claws."
                },
                {
                        "id": "gsc-benefictus",
                        "name": "Benefictus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Psionic Cascade - witchfire",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Psionic Cascade - focused witchfire",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Psychic"
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Bio-horror Disruption",
                                        "Psionic Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Benefictus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Benefictus This model is equipped with: Psionic Cascade; close combat weapon."
                },
                {
                        "id": "gsc-biophagus",
                        "name": "Biophagus",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
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
                                                "name": "Chemical vials",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 1,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Injector goad",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Twisted Science",
                                        "Biological Warfare",
                                        "Alchemicus Familiar",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Biophagus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Aberrants; Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Biophagus This model is equipped with: autopistol; chemical vials; injector goad, alchemicus familiar."
                },
                {
                        "id": "gsc-clamavus",
                        "name": "Clamavus",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Voice of New Truths",
                                        "Scrambler Array"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Clamavus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Clamavus This model is equipped with: autopistol; close combat weapon."
                },
                {
                        "id": "gsc-jackal-alphus",
                        "name": "Jackal Alphus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
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
                                                "name": "Cult sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
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
                                        "Leader",
                                        "Scouts 9\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Priority Target",
                                        "Master Outrider"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Grenades",
                                "Great Devourer",
                                "Jackal Alphus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following unit: Atalan Jackals.",
                        "compositionText": "1 Jackal Alphus This model is equipped with: autopistol; cult sniper rifle; close combat weapon."
                },
                {
                        "id": "gsc-kelermorph",
                        "name": "Kelermorph",
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Liberator autostubs",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
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
                                "core": [
                                        "Deep Strike",
                                        "Lone Operative"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Heroic Fusillade",
                                        "Hypersensory Abilities"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Kelermorph"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Kelermorph This model is equipped with: liberator autostubs; close combat weapon."
                },
                {
                        "id": "gsc-locus",
                        "name": "Locus",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Locus blades",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Deep Strike",
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Sudden Assault",
                                        "Bodyguard"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Locus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Locus This model is equipped with: Locus blades."
                },
                {
                        "id": "gsc-magus",
                        "name": "Magus",
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
                                "sv": "5+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Magus stave",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Spiritual Leader",
                                        "Mind Control",
                                        "Psychic Familiar",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Magus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Magus This model is equipped with: autopistol; Magus stave."
                },
                {
                        "id": "gsc-nexos",
                        "name": "Nexos",
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Battlefield Analysis",
                                        "Cult Infiltration"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Nexos"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Nexos This model is equipped with: autopistol; close combat weapon."
                },
                {
                        "id": "gsc-patriarch",
                        "name": "Patriarch",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Patriarch’s claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Might From Beyond",
                                        "Cosmic Horror",
                                        "Psychic Familiar",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Patriarch"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following unit: Purestrain Genestealers.",
                        "compositionText": "1 Patriarch This model is equipped with: Patriarch’s claws."
                },
                {
                        "id": "gsc-primus",
                        "name": "Primus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Scoped needle pistol",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 1,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult bonesword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Toxin injector claw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Cult Demagogue",
                                        "Decoys and Misdirection"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Primus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "leaderText": "This model can be attached to the following units: Acolyte Hybrids with Autopistols; Acolyte Hybrids with Hand Flamers; Hybrid Metamorphs; Neophyte Hybrids.",
                        "compositionText": "1 Primus This model is equipped with: scoped needle pistol; cult bonesword; toxin injector claw."
                },
                {
                        "id": "gsc-reductus-saboteur",
                        "name": "Reductus Saboteur",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
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
                                                "name": "Demolition charges",
                                                "range": "8\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Remote explosives",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
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
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Primed and Ready",
                                        "Planted Explosives",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Great Devourer",
                                "Reductus Saboteur"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Reductus Saboteur This model is equipped with: autopistol; demolition charges; remote explosives; close combat weapon."
                },
                {
                        "id": "gsc-sanctus",
                        "name": "Sanctus",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cult sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sanctus bio-dagger",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Precision"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Creeping Shadow",
                                        "Cloaked Assassin",
                                        "Psychic Spoor"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Sanctus"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Sanctus This model is equipped with: Sanctus bio-dagger."
                },
                {
                        "id": "gsc-acolyte-hybrids-with-autopistols",
                        "name": "Acolyte Hybrids with Autopistols",
                        "role": "battleline",
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
                                "t": 4,
                                "sv": "5+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult claws and knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy mining tool",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+"
                                                ]
                                        },
                                        {
                                                "name": "Leader’s bio-weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Claimed for the Cult",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Great Devourer",
                                "Acolyte Hybrids",
                                "Acolyte Hybrids With Autopistols"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Acolyte Leader 4-9 Acolyte Hybrids Every model is equipped with: autopistol; cult claws and knife."
                },
                {
                        "id": "gsc-acolyte-hybrids-with-hand-flamers",
                        "name": "Acolyte Hybrids with Hand Flamers",
                        "role": "battleline",
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
                                "t": 4,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolition charges",
                                                "range": "8\"",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cult claws and knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Leader’s bio-weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Industrialised Destruction",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Great Devourer",
                                "Acolyte Hybrids",
                                "Acolyte Hybrids With Hand Flamers"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Acolyte Leader 4-9 Acolyte Hybrids Every model is equipped with: hand flamer; cult claws and knife."
                },
                {
                        "id": "gsc-neophyte-hybrids",
                        "name": "Neophyte Hybrids",
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
                                                "name": "Anointed pistol",
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
                                                "name": "Hybrid firearm",
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
                                                "name": "Mining laser",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Seismic cannon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Heavy",
                                                        "Rapid Fire 2"
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
                                                        "Devastating Wounds",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
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
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "A Plan Generations in the Making",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Great Devourer",
                                "Neophyte Hybrids"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Neophyte Leader 9-19 Neophyte Hybrids Every model is equipped with: autopistol; Hybrid firearm; close combat weapon."
                },
                {
                        "id": "gsc-goliath-truck",
                        "name": "Goliath Truck",
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
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolition charge cache",
                                                "range": "8\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Hazardous"
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
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Great Devourer",
                                "Goliath Truck"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Goliath Truck This model is equipped with: heavy stubber; twin autocannon; demolition charge cache; armoured hull. TRANSPORT This model has a transport capacity of 12 GENESTEALER CULTS INFANTRY models."
                },
                {
                        "id": "gsc-aberrants",
                        "name": "Aberrants",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 135
                                },
                                {
                                        "models": 10,
                                        "cost": 300
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
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Aberrant weapons",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hulking Bodyguards"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Aberrants"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Aberrant Hypermorph 4-9 Aberrants Every Aberrant is equipped with: Aberrant weapons."
                },
                {
                        "id": "gsc-achilles-ridgerunners",
                        "name": "Achilles Ridgerunners",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Achilles missile launcher",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy mining laser",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy mortar",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked",
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
                                        "Scouts 9\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Crossfire",
                                        "Flare Launcher",
                                        "Spotter",
                                        "Survey Augur"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Great Devourer",
                                "Achilles Ridgerunners"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1-2 Achilles Ridgerunners Every model is equipped with: heavy mining laser; twin heavy stubbers; armoured hull; flare launcher."
                },
                {
                        "id": "gsc-atalan-jackals",
                        "name": "Atalan Jackals",
                        "role": "mounted",
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
                                "m": "12\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Atalan incinerator",
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
                                                "name": "Atalan small arms",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                                "name": "Mining laser",
                                                "range": "24\"",
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
                                                "name": "Atalan power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 9\"",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Outrider Gangs",
                                        "Demolition Run"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Great Devourer",
                                "Atalan Jackals"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "4-8 Atalan Jackals 1-2 Atalan Wolfquads* * This unit can only contain 2 Atalan Wolfquads if it also contains 8 Atalan Jackals. Every Atalan Jackal is equipped with: Atalan small arms; close combat weapon. Every Atalan Wolfquad is equipped with: Atalan small arms; heavy stubber; close combat weapon."
                },
                {
                        "id": "gsc-goliath-rockgrinder",
                        "name": "Goliath Rockgrinder",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Clearance incinerator",
                                                "range": "12\"",
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
                                                "name": "Demolition charge cache",
                                                "range": "8\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Heavy mining laser",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy seismic cannon",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Drilldozer blade",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
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
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Grinding Clearance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Great Devourer",
                                "Goliath Rockgrinder"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Goliath Rockgrinder This model is equipped with: heavy mining laser; heavy stubber; drilldozer blade; demolition charge cache. DAMAGED: 1-3 WOUNDS REMAINING While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 6 GENESTEALER CULTS INFANTRY models."
                },
                {
                        "id": "gsc-hybrid-metamorphs",
                        "name": "Hybrid Metamorphs",
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
                                "t": 4,
                                "sv": "5+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Leader’s bio-weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Metamorph mutations – strike",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Metamorph mutations – sweep",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brood Surge",
                                        "Cult Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Great Devourer",
                                "Hybrid Metamorphs"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "1 Metamorph Leader 4-9 Hybrid Metamorphs The Metamorph Leader is equipped with: autopistol; Leader’s bio-weapons. Every Hybrid Metamorph is equipped with: autopistol; Metamorph mutations."
                },
                {
                        "id": "gsc-purestrain-genestealers",
                        "name": "Purestrain Genestealers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Cult claws and talons",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Cult Ambush"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swift and Deadly"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Purestrain Genestealers"
                        ],
                        "factionKeywords": [
                                "Genestealer Cults"
                        ],
                        "compositionText": "5-10 Purestrain Genestealers Every model is equipped with: cult claws and talons."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(gsc);
})();
