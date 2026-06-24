/**
 * W40K Army Builder — Tyranids (10th Edition)
 *
 * Datasheets from Codex: Tyranids. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const tyranids = {
        id: "tyranids",
        name: "Tyranids",
        icon: "\uD83E\uDDA0",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Synapse", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Invasion Fleet",
                flavour: "",
                rule: { name: "Hyper-adaptations", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Alien Cunning", cost: 30, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Perfectly Adapted", cost: 15, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Synaptic Linchpin", cost: 20, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Adaptive Biology", cost: 25, restriction: "TYRANIDS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Rapid Regeneration", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Adrenal Surge", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Death Frenzy", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Overrun", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Predatory Imperative", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Endless Swarm", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Crusher Stampede",
                flavour: "",
                rule: { name: "Enraged Behemoths", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Ominous Presence", cost: 15, restriction: "TYRANIDS MONSTER model only.", text: "" },
                    { name: "Enraged Reserves", cost: 20, restriction: "TYRANIDS MONSTER model only.", text: "" },
                    { name: "Null Nodules", cost: 10, restriction: "TYRANIDS MONSTER model only.", text: "" },
                    { name: "Monstrous Nemesis", cost: 25, restriction: "TYRANIDS MONSTER model only.", text: "" },
                ],
                stratagems: [
                    { name: "Corrosive Viscera", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rampaging Monstrosities", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Savage Roar", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Untrammelled Ferocity", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Swarm-guided Salvoes", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Massive Impact", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Unending Swarm",
                flavour: "",
                rule: { name: "Insurmountable Odds", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Relentless Hunger", cost: 20, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Naturalised Camouflage", cost: 30, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Piercing Talons", cost: 25, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Adrenalised Onslaught", cost: 15, restriction: "TYRANIDS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Synaptic Goading", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unending Waves", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Teeming Masses", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Swarming Masses", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Bounding Advance", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Preservation Imperative", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Assimilation Swarm",
                flavour: "",
                rule: { name: "Feed the Swarm", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Regenerating Monstrosity", cost: 20, text: "" },
                    { name: "Instinctive Defence", cost: 15, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Biophagic Flow (Aura)", cost: 10, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Parasitic Biomorphology", cost: 25, restriction: "TYRANIDS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Broodguard Impulse", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reclaim Biomass", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Tyrannoformed", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ablative Carapace", cp: 2, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Secure Biomass", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Rapacious Hunger", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Vanguard Onslaught",
                flavour: "",
                rule: { name: "Questing Tendrils", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Hunting Grounds", cost: 20, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Chameleonic", cost: 15, restriction: "VANGUARD INVADER model only.", text: "" },
                    { name: "Stalker", cost: 10, restriction: "VANGUARD INVADER model only.", text: "" },
                    { name: "Neuronode", cost: 20, restriction: "TYRANIDS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Surprise Assault", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Assassin Beasts", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Seeded Broods", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hypersensory Scillia", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unseen Lurkers", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Invisible Hunter", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Synaptic Nexus",
                flavour: "",
                rule: { name: "Synaptic Imperatives", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Power of the Hive Mind", cost: 10, restriction: "TYRANIDS PSYKER model only.", text: "" },
                    { name: "Psychostatic Disruption", cost: 30, restriction: "TYRANIDS SYNAPSE model only.", text: "" },
                    { name: "Synaptic Control", cost: 20, restriction: "TYRANIDS SYNAPSE model only.", text: "" },
                    { name: "The Dirgeheart of Kharis (Aura)", cost: 15, restriction: "TYRANIDS SYNAPSE model only.", text: "" },
                ],
                stratagems: [
                    { name: "The Smothering Shadow", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Synaptic Channelling", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Irresistible Will", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reinforced Hive Node", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Imperative Dominance", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Override Instincts", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Subterranean Assault",
                flavour: "",
                rule: { name: "Surprise Assault", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Synaptic Strategy", cost: 15, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Tremor Senses", cost: 20, restriction: "TYRANIDS model only.", text: "" },
                    { name: "Vanguard Intellect", cost: 15, restriction: "TYRANIDS model with the Deep Strike ability only.", text: "" },
                    { name: "Trygon Prime", cost: 20, restriction: "TRYGON model only.", text: "" },
                ],
                stratagems: [
                    { name: "Adaptive Optimisation", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Replenishing Swarms", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Enfilading Emergence", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Tunnel Network", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Swarming Assault", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Retreat Below", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Warrior Bioform Onslaught",
                flavour: "",
                rule: { name: "Leader-beasts", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Synaptic Tyrant", cost: 10, restriction: "Neurotyrant model only.", text: "" },
                    { name: "Ocular Adaptation", cost: 20, restriction: "WINGED TYRANID PRIME or Tyranid Prime with Lash Whip model only.", text: "" },
                    { name: "Sensory Assimilation", cost: 20, restriction: "WINGED TYRANID PRIME or Tyranid Prime with Lash Whip model only.", text: "" },
                    { name: "Elevated Might", cost: 30, restriction: "TYRANIDS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Synaptic Amplification", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Spontaneous Hypercorrosion", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Restorative Impulse", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Synaptic Micronodes", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Parasitic Payload", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Synaptic Shield", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "tyr-broodlord",
                        "name": "Broodlord",
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
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Broodlord claws and talons",
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
                                        "Leader",
                                        "Scouts 8\""
                                ],
                                "faction": [
                                        "Synapse",
                                        "Shadow in the Warp"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vicious Insight",
                                        "Hypnotic Gaze"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Vanguard Invader",
                                "Broodlord"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following unit: Genestealers.",
                        "compositionText": "1 Broodlord This model is equipped with: Broodlord claws and talons."
                },
                {
                        "id": "tyr-deathleaper",
                        "name": "Deathleaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lictor claws and talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Feeder Tendrils",
                                        "Fear of the Unseen"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Deathleaper"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Deathleaper – EPIC HERO This model is equipped with: Lictor claws and talons. HUNTER ORGANISM This model cannot be your WARLORD."
                },
                {
                        "id": "tyr-hive-tyrant",
                        "name": "Hive Tyrant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy venom cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Stranglethorn cannon",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Monstrous bonesword and lash whip",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Monstrous scything talons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 7,
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
                                        "Deadly Demise D3",
                                        "Leader"
                                ],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Will of the Hive Mind",
                                        "Onslaught"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Hive Tyrant"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following unit: Tyrant Guard.",
                        "compositionText": "1 Hive Tyrant This model is equipped with: monstrous bonesword and lash whip; monstrous scything talons."
                },
                {
                        "id": "tyr-hyperadapted-raveners",
                        "name": "Hyperadapted Raveners",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Venom bolt",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Prime claws and talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 5+",
                                                        "Anti-Vehicle 5+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Ravener heavy claws and talons",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 5+",
                                                        "Anti-Vehicle 5+",
                                                        "Twin-Linked"
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
                                        "Shadow In The Warp (Ravener Prime only)",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Alpha Invader",
                                        "Hypersensory Array"
                                ]
                        },
                        "keywords": [
                                "Tyranids"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following unit: Raveners.",
                        "compositionText": "1 Ravener Prime 4 Raveners The Ravener Prime is equipped with: Prime claws and talons. 3 Raveners are equipped with: Ravener heavy claws and talons. 1 Ravener is equipped with: venom bolt; Ravener heavy claws and talons."
                },
                {
                        "id": "tyr-neurotyrant",
                        "name": "Neurotyrant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Psychic scream",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Neurotyrant claws and lashes",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Synapse",
                                        "Shadow in the Warp"
                                ],
                                "wargear": [],
                                "other": [
                                        "Node Lash",
                                        "Psychic Terror",
                                        "Neuroloids",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Neurotyrant"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following units: Neurogaunts; Tyrant Guard; Zoanthropes.",
                        "compositionText": "1 Neurotyrant This model is equipped with: Psychic Scream; Neurotyrant claws and lashes."
                },
                {
                        "id": "tyr-old-one-eye",
                        "name": "Old One Eye",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 9,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Old One Eye’s claws and talons – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Old One Eye’s claws and talons – sweep",
                                                "range": "Melee",
                                                "a": 12,
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
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Alpha Leader",
                                        "Unstoppable Monster"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Great Devourer",
                                "Old One Eye"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following unit: Carnifexes.",
                        "compositionText": "1 Old One Eye – EPIC HERO This model is equipped with: Old One Eye’s claws and talons."
                },
                {
                        "id": "tyr-parasite-of-mortrex",
                        "name": "Parasite of Mortrex",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 5,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Barbed ovipositor",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Clawed limbs",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Parasitic Infection",
                                        "It Itches!"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Fly",
                                "Synapse",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Parasite Of Mortrex"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Parasite of Mortrex This model is equipped with: barbed ovipositor; clawed limbs."
                },
                {
                        "id": "tyr-tervigon",
                        "name": "Tervigon",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 16,
                                "ld": "7+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Stinger salvoes",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Massive crushing claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Massive scything talons – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Massive scything talons – sweep",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spawn Termagants",
                                        "Brood Progenitor"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Tervigon"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Tervigon This model is equipped with: stinger salvoes; massive scything talons. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-the-red-terror",
                        "name": "The Red Terror",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 9,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Gaping maw",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": "-",
                                                "d": "D3+2",
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Scything talons",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 7,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swallow Whole",
                                        "Subterranean Hunter",
                                        "Serpentine Fiend"
                                ]
                        },
                        "keywords": [
                                "Character",
                                "Epic Hero",
                                "Great Devourer",
                                "Monster",
                                "Burrower",
                                "Vanguard Invader",
                                "The Red Terror"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 The Red Terror – EPIC HERO This model is equipped with: scything talons, gaping maw."
                },
                {
                        "id": "tyr-the-swarmlord",
                        "name": "The Swarmlord",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Synaptic pulse",
                                                "range": "18\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bone sabres",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 9,
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
                                        "Deadly Demise D3",
                                        "Leader"
                                ],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hive Commander",
                                        "Malign Presence",
                                        "Designer’s Note",
                                        "Domination of the Hive Mind"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Hive Tyrant",
                                "The Swarmlord"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following unit: Tyrant Guard.",
                        "compositionText": "1 Swarmlord – EPIC HERO This model is equipped with: Synaptic pulse; bone sabres."
                },
                {
                        "id": "tyr-tyranid-prime-with-lash-whip",
                        "name": "Tyranid Prime with Lash Whip",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Rending claw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Lash whip",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Scything talons",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Alpha Warrior",
                                        "Aggressive Leader-beast"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Great Devourer",
                                "Synapse",
                                "Tyranid Prime With Lash Whip"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following units: Hormagaunts; Termagants; Tyranid Warriors with Melee Bio-weapons.",
                        "compositionText": "1 Tyranid Prime with Lash Whip This model is equipped with: 1 rending claw; 1 lash whip; 1 scything talons."
                },
                {
                        "id": "tyr-winged-hive-tyrant",
                        "name": "Winged Hive Tyrant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy venom cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Stranglethorn cannon",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Monstrous bonesword and lash whip",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Monstrous scything talons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Tyrant talons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
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
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Will of the Hive Mind",
                                        "Paroxysm"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Fly",
                                "Great Devourer",
                                "Synapse",
                                "Vanguard Invader",
                                "Hive Tyrant",
                                "Winged Hive Tyrant"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Winged Hive Tyrant This model is equipped with: monstrous bonesword and lash whip; Tyrant talons."
                },
                {
                        "id": "tyr-winged-tyranid-prime",
                        "name": "Winged Tyranid Prime",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Prime talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
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
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Alpha Warrior",
                                        "Death Blow"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Fly",
                                "Great Devourer",
                                "Synapse",
                                "Vanguard Invader",
                                "Winged Tyranid Prime"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "leaderText": "This model can be attached to the following units: Gargoyles; Tyranid Warriors with Melee Bio-weapons.",
                        "compositionText": "1 Winged Tyranid Prime This model is equipped with: Prime talons."
                },
                {
                        "id": "tyr-gargoyles",
                        "name": "Gargoyles",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 85
                                },
                                {
                                        "models": 20,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fleshborer",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blinding venom",
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Winged Swarm"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Fly",
                                "Great Devourer",
                                "Endless Multitude",
                                "Vanguard Invader",
                                "Gargoyles"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "10-20 Gargoyles Every model is equipped with: fleshborer; blinding venom."
                },
                {
                        "id": "tyr-hormagaunts",
                        "name": "Hormagaunts",
                        "role": "battleline",
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
                                "m": "10\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hormagaunt talons",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bounding Leap"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Great Devourer",
                                "Endless Multitude",
                                "Hormagaunts"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "10-20 Hormagaunts Every model is equipped with: Hormagaunt talons."
                },
                {
                        "id": "tyr-termagants",
                        "name": "Termagants",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 60
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
                                "ld": "8+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fleshborer",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shardlauncher",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Spike rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Strangleweb",
                                                "range": "18\"",
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
                                        },
                                        {
                                                "name": "Termagant devourer",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Termagant spinefists",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chitinous claws and teeth",
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Skulking Horrors"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Great Devourer",
                                "Endless Multitude",
                                "Termagants"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "10-20 Termagants Every model is equipped with: fleshborer; chitinous claws and teeth."
                },
                {
                        "id": "tyr-tyrannocyte",
                        "name": "Tyrannocyte",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "8+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tyrannocyte bio-weapons",
                                                "range": "24\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flensing whips",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aerial Seeding"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Transport",
                                "Dedicated Transport",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Tyrannocyte"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Tyrannocyte This model is equipped with: Tyrannocyte bio-weapons; flensing whips. TRANSPORT This model has a transport capacity of 20 TYRANIDS INFANTRY models, or 1 TYRANIDS MONSTER model with a Wounds characteristic of 12 or less. Each INFANTRY model with a Wounds characteristic of more than 1 takes up the space of 3 models."
                },
                {
                        "id": "tyr-barbgaunts",
                        "name": "Barbgaunts",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 55
                                },
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Barblauncher",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chitinous claws and teeth",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Disruption Bombardment"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Barbgaunts"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "5-10 Barbgaunts Every model is equipped with: barblauncher; chitinous claws and teeth."
                },
                {
                        "id": "tyr-biovores",
                        "name": "Biovores",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
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
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 5,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Spore Mine launcher",
                                                "range": "48\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chitin-barbed limbs",
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
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Seed Spore Mines"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Biovores"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1-3 Biovores Every model is equipped with: Spore Mine launcher; chitin-barbed limbs."
                },
                {
                        "id": "tyr-carnifexes",
                        "name": "Carnifexes",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                },
                                {
                                        "models": 2,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 8,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bio-plasma",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Deathspitters with slimer maggots",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Devourers with brainleech worms",
                                                "range": "18\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy venom cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Spine banks",
                                                "range": "6\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Stranglethorn cannon",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Carnifex crushing claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Carnifex extra scything talons",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Carnifex scything talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Chitinous claws and teeth",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blistering Assault"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Carnifexes"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1-2 Carnifexes Every model is equipped with: Carnifex scything talons; Carnifex extra scything talons; chitinous claws and teeth."
                },
                {
                        "id": "tyr-exocrine",
                        "name": "Exocrine",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "8+",
                                "oc": 4
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bio-plasmic cannon",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Powerful limbs",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": 0,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Symbiotic Targeting"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Exocrine"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Exocrine This model is equipped with: bio-plasmic cannon; powerful limbs. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-genestealers",
                        "name": "Genestealers",
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
                                                "name": "Genestealer claws and talons",
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
                                        "Scouts 8\""
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vanguard Predator"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Genestealers"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "5-10 Genestealers Every model is equipped with: Genestealer claws and talons."
                },
                {
                        "id": "tyr-harpy",
                        "name": "Harpy",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 215
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Stinger salvoes",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy venom cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin stranglethorn cannon",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Scything wings",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spore Mine Cysts"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Aircraft",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Harpy"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Harpy This model is equipped with: stinger salvoes; twin stranglethorn cannon; scything wings. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-haruspex",
                        "name": "Haruspex",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "8+",
                                "oc": 4
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Grasping tongue",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ravenous maw",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Shovelling claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grisly Spectacle"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Harvester",
                                "Haruspex"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Haruspex This model is equipped with: grasping tongue; ravenous maw; shovelling claws. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-hive-crone",
                        "name": "Hive Crone",
                        "role": "monster",
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
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Drool cannon",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Stinger salvoes",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Tentaclids",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Scything wings",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thorax spur",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Anti-Fly 2+",
                                                        "Extra Attacks"
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Airborne Predator"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Aircraft",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Hive Crone"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Hive Crone This model is equipped with: drool cannon; stinger salvoes; tentaclids; scything wings; thorax spur. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-hive-guard",
                        "name": "Hive Guard",
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
                                "m": "6\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Impaler cannon",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Shockcannon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 2+"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chitinous claws and teeth",
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
                                "core": [],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Defensive Stance"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Hive Guard"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "3-6 Hive Guard Every model is equipped with: shockcannon; chitinous claws and teeth."
                },
                {
                        "id": "tyr-lictor",
                        "name": "Lictor",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lictor claws and talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Feeder Tendrils",
                                        "Pheromone Trail"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Lictor"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Lictor This model is equipped with: Lictor claws and talons."
                },
                {
                        "id": "tyr-maleceptor",
                        "name": "Maleceptor",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Psychic overload",
                                                "range": "18\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Massive scything talons – strike",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Massive scything talons – sweep",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Encephalic Diffusion"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Maleceptor"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Maleceptor This model is equipped with: psychic overload; massive scything talons. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-mawloc",
                        "name": "Mawloc",
                        "role": "monster",
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
                                "w": 14,
                                "ld": "8+",
                                "oc": 4
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Distensible jaw",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Mawloc scything talons",
                                                "range": "Melee",
                                                "a": 16,
                                                "ws": "3+",
                                                "s": 8,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Terror From The Deep"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Mawloc"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Mawloc This model is equipped with: distensible jaw; Mawloc scything talons. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-mucolid-spores",
                        "name": "Mucolid Spores",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 30
                                },
                                {
                                        "models": 2,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bio-minefield",
                                        "Floating Death"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Fly",
                                "Great Devourer",
                                "Mucolid Spores"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1-2 Mucolid Spores Every model is equipped with: nothing."
                },
                {
                        "id": "tyr-neurogaunts",
                        "name": "Neurogaunts",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 45
                                },
                                {
                                        "models": 22,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Chitinous claws and teeth",
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Neurocytes"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Endless Multitude",
                                "Neurogaunts"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1-2 Neurogaunt Nodebeasts* 10-20 Neurogaunts Every model is equipped with: chitinous claws and teeth. *This unit can only contain 2 Neurogaunt Nodebeasts if it contains 20 Neurogaunts."
                },
                {
                        "id": "tyr-neurolictor",
                        "name": "Neurolictor",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Piercing claws and talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
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
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Feeder Tendrils",
                                        "Neural Disruption",
                                        "Psychological Saboteur"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Synapse",
                                "Neurolictor"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Neurolictor This model is equipped with: piercing claws and talons."
                },
                {
                        "id": "tyr-norn-assimilator",
                        "name": "Norn Assimilator",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 275
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 16,
                                "ld": "7+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Toxinjector Harpoon",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Harpooned"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Monstrous scything talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Toxinjector harpoon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Singular Purpose",
                                        "Harpoon Barbs"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Synapse",
                                "Harvester",
                                "Norn Assimilator"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Norn Assimilator This model is equipped with: toxinjector harpoon; monstrous scything talons. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-norn-emissary",
                        "name": "Norn Emissary",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 260
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 16,
                                "ld": "7+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Psychic Tendril – neuroparasite",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Tendril – neuroblast",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Tendril – neurolance",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Monstrous scything talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Monstrous rending claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 7,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Singular Purpose",
                                        "Unnatural Resilience"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Psyker",
                                "Great Devourer",
                                "Synapse",
                                "Norn Emissary"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Norn Emissary This model is equipped with: Psychic Tendril; monstrous scything talons; monstrous rending claws. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-psychophage",
                        "name": "Psychophage",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Psychoclastic torrent",
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
                                                "name": "Talons and betentacled maw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds"
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bio-stimulus",
                                        "Feeding Frenzy"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Harvester",
                                "Smoke",
                                "Psychophage"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Psychophage This model is equipped with: psychoclastic torrent; talons and betentacled maw."
                },
                {
                        "id": "tyr-pyrovores",
                        "name": "Pyrovores",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                },
                                {
                                        "models": 2,
                                        "cost": 70
                                },
                                {
                                        "models": 3,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 5,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flamespurt",
                                                "range": "12\"",
                                                "a": "D6+1",
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
                                                "name": "Chitin-barbed limbs",
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
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Burning Spray"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Harvester",
                                "Pyrovores"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1-3 Pyrovores Every model is equipped with: flamespurt; chitin-barbed limbs."
                },
                {
                        "id": "tyr-raveners",
                        "name": "Raveners",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ravener claws and talons",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death From Below"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Burrowers",
                                "Raveners"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "5 Raveners Every model is equipped with: Ravener claws and talons."
                },
                {
                        "id": "tyr-ripper-swarms",
                        "name": "Ripper Swarms",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 25
                                },
                                {
                                        "models": 2,
                                        "cost": 40
                                },
                                {
                                        "models": 3,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 2,
                                "sv": "6+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Spinemaws",
                                                "range": "6\"",
                                                "a": 4,
                                                "bs": "5+",
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
                                                "name": "Chitinous claws and teeth",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "5+",
                                                "s": 2,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Chitinous Horrors"
                                ]
                        },
                        "keywords": [
                                "Swarm",
                                "Great Devourer",
                                "Harvester",
                                "Ripper Swarms"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1-3 Ripper Swarms Every model is equipped with: chitinous claws and teeth."
                },
                {
                        "id": "tyr-screamer-killer",
                        "name": "Screamer-killer",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 10,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bio-plasmic scream",
                                                "range": "18\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Screamer-killer talons",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death Scream"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Screamer-Killer"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Screamer-Killer This model is equipped with: bio-plasmic scream; Screamer-Killer talons."
                },
                {
                        "id": "tyr-spore-mines",
                        "name": "Spore Mines",
                        "role": "infantry",
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
                                "m": "4\"",
                                "t": 1,
                                "sv": "7+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bio-minefield",
                                        "Floating Death"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Fly",
                                "Great Devourer",
                                "Spore Mines"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "3-6 Spore Mines Every model is equipped with: nothing."
                },
                {
                        "id": "tyr-sporocyst",
                        "name": "Sporocyst",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 10,
                                "sv": "3+",
                                "w": 10,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Sporocyst bio-weapons",
                                                "range": "24\"",
                                                "a": 10,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flensing whips",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Seed Mucolids",
                                        "Hive Defences"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Sporocyst"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Sporocyst This model is equipped with: Sporocyst bio-weapons; flensing whips."
                },
                {
                        "id": "tyr-toxicrene",
                        "name": "Toxicrene",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "8+",
                                "oc": 4
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Massive toxic lashes",
                                                "range": "9\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Massive toxic lashes",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grasping Tendrils",
                                        "Hypertoxic Miasma"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Toxicrene"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Toxicrene This model is equipped with: massive toxic lashes."
                },
                {
                        "id": "tyr-trygon",
                        "name": "Trygon",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "8+",
                                "oc": 4
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bio-electric pulse",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Trygon scything talons",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 9,
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
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Subterranean Tunnels"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Trygon"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Trygon This model is equipped with: bio-electric pulse; Trygon scything talons. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-tyranid-warriors-with-melee-bio-weapons",
                        "name": "Tyranid Warriors with Melee Bio-weapons",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 75
                                },
                                {
                                        "models": 6,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Tyranid Warrior claws and talons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Adaptive Instincts",
                                        "Aggression Imperative",
                                        "Bioregeneration"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Synapse",
                                "Tyranid Warriors With Melee Bio-Weapons"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Tyranid Prime 2-5 Tyranid Warriors Every model is equipped with: Tyranid Warrior claws and talons."
                },
                {
                        "id": "tyr-tyranid-warriors-with-ranged-bio-weapons",
                        "name": "Tyranid Warriors with Ranged Bio-weapons",
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
                                "m": "6\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Barbed strangler",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Deathspitter",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Devourer",
                                                "range": "18\"",
                                                "a": 5,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Spinefists",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Venom cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Tyranid Warrior claws and talons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Adaptable Predators"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Synapse",
                                "Tyranid Warriors With Ranged Bio-Weapons"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Tyranid Prime 2-5 Tyranid Warriors Every model is equipped with: devourer; Tyranid Warrior claws and talons."
                },
                {
                        "id": "tyr-tyrannofex",
                        "name": "Tyrannofex",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "8+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Acid spray",
                                                "range": "18\"",
                                                "a": "D6+6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Fleshborer hive",
                                                "range": "24\"",
                                                "a": 20,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Rupture cannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Stinger salvoes",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Powerful limbs",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Resilient Organism"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Great Devourer",
                                "Tyrannofex"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Tyrannofex This model is equipped with: fleshborer hive; stinger salvoes; powerful limbs. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tyr-tyrant-guard",
                        "name": "Tyrant Guard",
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
                                "m": "6\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Bone cleaver, lash whip and rending claws",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Crushing claws and rending claws",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Scything talons and rending claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Guardian Organism"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Tyrant Guard"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "3-6 Tyrant Guard Every model is equipped with: scything talons and rending claws."
                },
                {
                        "id": "tyr-venomthropes",
                        "name": "Venomthropes",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 70
                                },
                                {
                                        "models": 6,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Toxic lashes",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Stealth"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Foul Spores"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Great Devourer",
                                "Venomthropes"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "3-6 Venomthropes Every model is equipped with: toxic lashes."
                },
                {
                        "id": "tyr-von-ryans-leapers",
                        "name": "Von Ryan’s Leapers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 70
                                },
                                {
                                        "models": 6,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Leaper’s talons",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Fights First",
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pouncing Leap"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Great Devourer",
                                "Vanguard Invader",
                                "Von Ryan’s Leapers"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "3-6 Von Ryan’s Leapers Every model is equipped with: Leaper’s talons."
                },
                {
                        "id": "tyr-zoanthropes",
                        "name": "Zoanthropes",
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
                                "m": "5\"",
                                "t": 5,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Warp Blast – witchfire",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Warp Blast – focused witchfire",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chitinous claws and teeth",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
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
                                        "Shadow in the Warp",
                                        "Synapse"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spirit Leech",
                                        "Warp Field"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Fly",
                                "Great Devourer",
                                "Synapse",
                                "Zoanthropes"
                        ],
                        "factionKeywords": [
                                "Tyranids"
                        ],
                        "compositionText": "1 Neurothrope 2-5 Zoanthropes Every model is equipped with: Warp Blast; chitinous claws and teeth."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(tyranids);
})();
