/**
 * W40K Army Builder — Chaos Knights (10th Edition)
 *
 * Datasheets from Codex: Chaos Knights. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ck = {
        id: "chaos-knights",
        name: "Chaos Knights",
        icon: "🐲",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Harbingers of Dread", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Traitoris Lance",
                flavour: "",
                rule: { name: "Paragons of Terror", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Nightmare's Master", cost: 20, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Tyrant's Shadow", cost: 25, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Malevolent Heraldry", cost: 30, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Veil of Medrengard", cost: 35, restriction: "CHAOS KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Pterrorshades", cp: 1, type: "Wargear" },
                    { name: "Conquerors Without Mercy", cp: 1, type: "Battle Tactic" },
                    { name: "Disdain for the Weak", cp: 1, type: "Strategic Ploy" },
                    { name: "A Long Leash", cp: 1, type: "Strategic Ploy" },
                    { name: "Imperious Advance", cp: 1, type: "Epic Deed" },
                    { name: "Storm of Darkness", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Infernal Lance",
                flavour: "",
                rule: { name: "Malefic Surge", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Knight Diabolus", cost: 25, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Blasphemous Engine", cost: 35, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Fleshmetal Fusion", cost: 35, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Bestial Aspect", cost: 20, restriction: "CHAOS KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Profane Symbiosis", cp: 1, type: "Battle Tactic" },
                    { name: "Hellforged Construction", cp: 1, type: "Battle Tactic" },
                    { name: "Corrupting Taint", cp: 1, type: "Epic Deed" },
                    { name: "Unleash Balefire", cp: 1, type: "Wargear" },
                    { name: "Warp Vision", cp: 1, type: "Wargear" },
                    { name: "Diabolic Bulwark", cp: 1, type: "Wargear" },
                ]
            },
            {
                name: "Lords of Dread",
                flavour: "",
                rule: { name: "Tyrannical Court", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Throne Mechanicum of Skulls", cost: 25, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Blade of Celerity", cost: 35, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Warp-borne Stalker", cost: 25, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Putrid Carapace", cost: 30, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Mirror of Fates", cost: 30, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Blessing of the Dark Master", cost: 20, restriction: "CHAOS KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Claimed for the Dark Gods", cp: 1, type: "Epic Deed" },
                    { name: "Spiteful Demise", cp: 1, type: "Epic Deed" },
                    { name: "Runes of Disdain", cp: 2, type: "Epic Deed" },
                    { name: "Titanic Duel", cp: 1, type: "Epic Deed" },
                    { name: "Trophy Hunter", cp: 1, type: "Epic Deed" },
                    { name: "Crushed Like Vermin", cp: 1, type: "Epic Deed" },
                ]
            },
            {
                name: "Helhunt Lance",
                flavour: "",
                rule: { name: "Masters of the Pack", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Aspect of the Beast", cost: 30, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Hunter's Helm", cost: 15, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Octagram of Conjuration", cost: 40, restriction: "KNIGHT ABOMINANT model only." },
                    { name: "Throne Tyrannicus", cost: 25, restriction: "TITANIC CHAOS KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Feral Arrogance", cp: 1, type: "Strategic Ploy" },
                    { name: "Merciless Fusillade", cp: 1, type: "Battle Tactic" },
                    { name: "Beasthide Manifestation", cp: 1, type: "Battle Tactic" },
                    { name: "Flush the Quarry", cp: 1, type: "Battle Tactic" },
                    { name: "Contemptuous Volleys", cp: 1, type: "Strategic Ploy" },
                    { name: "Goaded Beast", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Houndpack Lance",
                flavour: "",
                rule: { name: "Marked Prey", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Preyslayer's Mantle", cost: 15, restriction: "WAR DOG model only." },
                    { name: "Final Howl (Aura)", cost: 20, restriction: "WAR DOG model only." },
                    { name: "Loping Predator", cost: 10, restriction: "WAR DOG model only." },
                    { name: "Panoply of the Cursed Knight", cost: 15, restriction: "WAR DOG model only." },
                ],
                stratagems: [
                    { name: "Vox-howl", cp: 2, type: "Battle Tactic" },
                    { name: "Hungry for Combat", cp: 1, type: "Battle Tactic" },
                    { name: "Cunning Hunter", cp: 1, type: "Strategic Ploy" },
                    { name: "Animalistic Rage", cp: 1, type: "Battle Tactic" },
                    { name: "Harrying Hounds", cp: 1, type: "Strategic Ploy" },
                    { name: "Encircling Pack", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Iconoclast Fiefdom",
                flavour: "",
                rule: { name: "Dreaded Masters", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Profane Altar", cost: 20, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Pave the Way", cost: 15, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Tyrant's Banner", cost: 5, restriction: "CHAOS KNIGHTS model only." },
                    { name: "Diabolical Resilience", cost: 35, restriction: "CHAOS KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Avenge the Masters!", cp: 1, type: "Strategic Ploy" },
                    { name: "Wretched Masses", cp: 2, type: "Battle Tactic" },
                    { name: "Soul Hunger", cp: 1, type: "Battle Tactic" },
                    { name: "Unrestrained Rage", cp: 1, type: "Strategic Ploy" },
                    { name: "Worthless Chattel", cp: 1, type: "Strategic Ploy" },
                    { name: "Preserve the Idols", cp: 1, type: "Strategic Ploy" },
                ]
            }
        ],
        units: [
                {
                        "id": "ck-knight-abominant",
                        "name": "Knight Abominant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Volkite combustor",
                                                "range": "30\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Balemace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Electroscourge",
                                                "range": "Melee",
                                                "a": 9,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vortex Terrors",
                                        "Warp Storms"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Psyker",
                                "Character",
                                "Chaos",
                                "Knight Abominant"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Abominant This model is equipped with: diabolus heavy stubber; volkite combustor; balemace; electroscourge. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-desecrator",
                        "name": "Knight Desecrator",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Desecrator laser destructor",
                                                "range": "72\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – sweep",
                                                "range": "Melee",
                                                "a": 8,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Obsessive Ruthlessness",
                                        "Taskmaster"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Desecrator"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Desecrator This model is equipped with: desecrator laser destructor; diabolus heavy stubber; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-despoiler",
                        "name": "Knight Despoiler",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 390
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemonbreath meltagun",
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
                                                "name": "Daemonbreath thermal cannon",
                                                "range": "24\"",
                                                "a": "2D3",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast",
                                                        "Melta 6"
                                                ]
                                        },
                                        {
                                                "name": "Despoiler battle cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Rapid Fire D6+3"
                                                ]
                                        },
                                        {
                                                "name": "Despoiler gatling cannon",
                                                "range": "36\"",
                                                "a": 18,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc missile pod",
                                                "range": "48\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy darkflamer",
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
                                                "name": "Hellstorm autocannons",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 2+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Ruinspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpstrike claw – sweep",
                                                "range": "Melee",
                                                "a": 8,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dread Dominion",
                                        "Seething Hatred"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Despoiler"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Despoiler This model is equipped with: daemonbreath meltagun; reaper chainsword; titanic feet; warpstrike claw. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-rampager",
                        "name": "Knight Rampager",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 365
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 18,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Warpstrike claw – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Warpstrike claw – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bloodlust",
                                        "Frenzied Rampage"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Rampager"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Rampager This model is equipped with: diabolus heavy stubber; reaper chainsword; warpstrike claw. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-ruinator",
                        "name": "Knight Ruinator",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 26,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Darkflame lance",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Terrorpulse missiles",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fellbore – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 6,
                                                "keywords": [
                                                        "Anti-Monster 2+",
                                                        "Anti-Vehicle 2+"
                                                ]
                                        },
                                        {
                                                "name": "Fellbore – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -2,
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
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Methodical Destruction",
                                        "Close-range Killers"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Abhorrent",
                                "Character",
                                "Chaos",
                                "Knight Ruinator"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Ruinator This model is equipped with: darkflame lance; terrorpulse missiles; fellbore. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1-9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-knight-tyrant",
                        "name": "Knight Tyrant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 410
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 12,
                                "sv": "3+",
                                "w": 28,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Brimstone volcano lance",
                                                "range": "60\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 20,
                                                "ap": -5,
                                                "d": "D6+8",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Darkflame cannon",
                                                "range": "18\"",
                                                "a": "3D6",
                                                "bs": "N/A",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma decimator – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma decimator – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Gheiststrike missile launcher",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -6,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Anti-Titanic 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Twin daemonbreath meltagun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin Desecrator cannon",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Warpshock harpoon",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 24,
                                                "ap": -6,
                                                "d": 12,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -1,
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
                                        "Harbingers of Dread",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Infernal Aegis",
                                        "Bastion of Corruption"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Character",
                                "Chaos",
                                "Knight Tyrant"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 Knight Tyrant This model is equipped with: brimstone volcano lance; ectoplasma decimator; 2 gheiststrike missile launchers; 2 twin daemonbreath meltaguns; twin Desecrator cannon; titanic feet. DAMAGED: 1-10 WOUNDS REMAINING While this model has 1-10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-brigand",
                        "name": "War Dog Brigand",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger chaincannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Daemonbreath spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc multi-launcher",
                                                "range": "48\"",
                                                "a": "D6",
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
                                                "name": "Armoured feet",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brigand"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Brigand"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Brigand This model is equipped with: avenger chaincannon; daemonbreath spear; diabolus heavy stubber; armoured feet. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-executioner",
                        "name": "War Dog Executioner",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemonbreath meltagun",
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
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "War Dog autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured feet",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Executioner"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Executioner"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Executioner This model is equipped with: diabolus heavy stubber; 2 War Dog autocannons; armoured feet. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-huntsman",
                        "name": "War Dog Huntsman",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemonbreath meltagun",
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
                                                "name": "Daemonbreath spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chaintalon – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chaintalon – sweep",
                                                "range": "Melee",
                                                "a": 8,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Huntsman"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Huntsman"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Huntsman This model is equipped with: daemonbreath spear; diabolus heavy stubber; reaper chaintalon. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-karnivore",
                        "name": "War Dog Karnivore",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc multi-launcher",
                                                "range": "48\"",
                                                "a": "D6",
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
                                                "name": "Reaper chaintalon",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Slaughterclaw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Karnivore"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Karnivore"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Karnivore This model is equipped with: diabolus heavy stubber; reaper chaintalon; slaughterclaw. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ck-war-dog-stalker",
                        "name": "War Dog Stalker",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 6
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger chaincannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Daemonbreath spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Diabolus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Havoc multi-launcher",
                                                "range": "48\"",
                                                "a": "D6",
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
                                                "name": "Reaper chaintalon – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chaintalon – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Slaughterclaw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Harbingers of Dread"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stalker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "War Dog",
                                "Stalker"
                        ],
                        "factionKeywords": [
                                "Chaos Knights"
                        ],
                        "compositionText": "1 War Dog Stalker This model is equipped with: avenger chaincannon; diabolus heavy stubber; slaughterclaw. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ck);
})();
