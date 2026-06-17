/**
 * W40K Army Builder — T'au Empire (10th Edition)
 *
 * Datasheets from Codex: T'au Empire. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const tau = {
        id: "tau-empire",
        name: "T'au Empire",
        icon: "🎯",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "For the Greater Good", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Kauyon",
                flavour: "",
                rule: { name: "Patient Hunter", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Exemplar of the Kauyon", cost: 20 },
                    { name: "Precision of the Patient Hunter", cost: 15, restriction: "T'AU EMPIRE model only." },
                    { name: "Solid-image Projection Unit", cost: 30, restriction: "T'AU EMPIRE model only." },
                    { name: "Through Unity, Devastation", cost: 40 },
                ],
                stratagems: [
                    { name: "A Tempting Trap", cp: 1, type: "Battle Tactic" },
                    { name: "Point-blank Ambush", cp: 1, type: "Battle Tactic" },
                    { name: "Coordinate to Engage", cp: 1, type: "Battle Tactic" },
                    { name: "Combat Embarkation", cp: 1, type: "Wargear" },
                    { name: "Photon Grenades", cp: 1, type: "Wargear" },
                    { name: "Wall of Mirrors", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Mont'ka",
                flavour: "",
                rule: { name: "Killing Blow", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Coordinated Exploitation", cost: 40 },
                    { name: "Exemplar of the Mont'ka", cost: 10 },
                    { name: "Strategic Conqueror", cost: 15, restriction: "T'AU EMPIRE model only." },
                    { name: "Strike Swiftly", cost: 25, restriction: "T'AU EMPIRE model only." },
                ],
                stratagems: [
                    { name: "Pinpoint Counter-offensive", cp: 1, type: "Battle Tactic" },
                    { name: "Aggressive Mobility", cp: 1, type: "Battle Tactic" },
                    { name: "Focused Fire", cp: 1, type: "Battle Tactic" },
                    { name: "Combat Debarkation", cp: 1, type: "Battle Tactic" },
                    { name: "Pulse Onslaught", cp: 2, type: "Strategic Ploy" },
                    { name: "Counterfire Defence Systems", cp: 2, type: "Wargear" },
                ]
            },
            {
                name: "Retaliation Cadre",
                flavour: "",
                rule: { name: "Bonded Heroes", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Internal Grenade Racks", cost: 20, restriction: "T'AU EMPIRE BATTLESUIT model only." },
                    { name: "Prototype Weapon System", cost: 15, restriction: "T'AU EMPIRE BATTLESUIT model only." },
                    { name: "Puretide Engram Neurochip", cost: 25, restriction: "T'AU EMPIRE BATTLESUIT model only." },
                    { name: "Starflare Ignition System", cost: 20, restriction: "T'AU EMPIRE BATTLESUIT model only." },
                ],
                stratagems: [
                    { name: "Fail-safe Detonator", cp: 2, type: "Epic Deed" },
                    { name: "Stimm Injectors", cp: 1, type: "Wargear" },
                    { name: "The Shortened Blade", cp: 2, type: "Strategic Ploy" },
                    { name: "The Arro'kon Protocol", cp: 1, type: "Battle Tactic" },
                    { name: "The Torchstar Gambit", cp: 1, type: "Strategic Ploy" },
                    { name: "Grav-inhibitor Field", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Kroot Hunting Pack",
                flavour: "",
                rule: { name: "Hunter's Instincts", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Borthrod Gland", cost: 15, restriction: "Kroot Flesh Shaper only." },
                    { name: "Kroothawk Flock", cost: 10, restriction: "KROOT model only." },
                    { name: "Nomadic Hunter", cost: 20, restriction: "KROOT TRAIL SHAPER model only." },
                    { name: "Root-carved Weapons", cost: 10, restriction: "Kroot War Shaper model only." },
                ],
                stratagems: [
                    { name: "Join the Hunt", cp: 2, type: "Battle Tactic" },
                    { name: "A Trap Well Laid", cp: 1, type: "Battle Tactic" },
                    { name: "Emp Grenades", cp: 1, type: "Wargear" },
                    { name: "The Grisly Feast", cp: 1, type: "Strategic Ploy" },
                    { name: "Guerrilla Warriors", cp: 1, type: "Strategic Ploy" },
                    { name: "Hidden Hunters", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Auxiliary Cadre",
                flavour: "",
                rule: { name: "Integrated Command Structure", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Student of Kauyon", cost: 15, restriction: "KROOT SHAPER model only." },
                    { name: "Admired Leader", cost: 20, restriction: "T'AU EMPIRE model (excluding KROOT models) only." },
                    { name: "Fanatical Convert", cost: 10, restriction: "KROOT model only." },
                    { name: "Transponder Lock Module", cost: 25, restriction: "T'AU EMPIRE WALKER model with the Deep Strike ability only." },
                ],
                stratagems: [
                    { name: "Experimental Modifications", cp: 1, type: "Strategic Ploy" },
                    { name: "Multisensory Scanning", cp: 1, type: "Battle Tactic" },
                    { name: "Interlocking Manouevres", cp: 1, type: "Strategic Ploy" },
                    { name: "Pheromone Waypoints", cp: 1, type: "Strategic Ploy" },
                    { name: "Alien Expertise", cp: 1, type: "Battle Tactic" },
                    { name: "Guided Fire", cp: 1, type: "Battle Tactic" },
                ]
            },
            {
                name: "Experimental Prototype Cadre",
                flavour: "",
                rule: { name: "Superior Craftsmanship", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Supernova Launcher", cost: 15, restriction: "T'AU EMPIRE model only." },
                    { name: "Thermoneutronic Projector", cost: 20, restriction: "T'AU EMPIRE model only." },
                    { name: "Plasma Accelerator Rifle", cost: 10, restriction: "T'AU EMPIRE model only." },
                    { name: "Fusion Blades", cost: 25, restriction: "T'AU EMPIRE model only." },
                ],
                stratagems: [
                    { name: "Automated Repair Drones", cp: 1, type: "Strategic Ploy" },
                    { name: "Reactive Impact Dampeners", cp: 1, type: "Battle Tactic" },
                    { name: "Experimental Weaponry", cp: 1, type: "Battle Tactic" },
                    { name: "Experimental Ammunition", cp: 1, type: "Wargear" },
                    { name: "Threat Assessment Analyser", cp: 1, type: "Wargear" },
                    { name: "Neuroweb System Jammer", cp: 1, type: "Wargear" },
                ]
            }
        ],
        units: [
                {
                        "id": "tau-cadre-fireblade",
                        "name": "Cadre Fireblade",
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
                                "sv": "4+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fireblade pulse rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Volley Fire",
                                        "Crack Shot"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Cadre Fireblade"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Breacher Team; Strike Team.",
                        "compositionText": "1 Cadre Fireblade This model is equipped with: Fireblade pulse rifle; close combat weapon."
                },
                {
                        "id": "tau-commander-farsight",
                        "name": "Commander Farsight",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "High-intensity plasma rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dawn Blade – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Dawn Blade – sweep",
                                                "range": "Melee",
                                                "a": 8,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Way of the Short Blade",
                                        "Puretide's Teachings"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Battlesuit",
                                "Commander Farsight"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Crisis Fireknife Battlesuits; Crisis Starscythe Battlesuits; Crisis Sunforge Battlesuits.",
                        "compositionText": "1 Commander Farsight – EPIC HERO This model is equipped with: high-intensity plasma rifle; Dawn Blade."
                },
                {
                        "id": "tau-commander-in-coldstar-battlesuit",
                        "name": "Commander in Coldstar Battlesuit",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Airbursting fragmentation projector",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – standard",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – overcharge",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Fusion blaster",
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
                                                "name": "High-output burst cannon",
                                                "range": "18\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Battlesuit fists",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Coldstar Commander",
                                        "Battlesuit Support System",
                                        "Shield Generator",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Battlesuit",
                                "Commander In Coldstar Battlesuit"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Crisis Fireknife Battlesuits; Crisis Starscythe Battlesuits; Crisis Sunforge Battlesuits.",
                        "compositionText": "1 Commander in Coldstar Battlesuit This model is equipped with: high-output burst cannon; battlesuit fists."
                },
                {
                        "id": "tau-commander-in-enforcer-battlesuit",
                        "name": "Commander in Enforcer Battlesuit",
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
                                "sv": "2+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Airbursting fragmentation projector",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – standard",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion blaster – overcharge",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Fusion blaster",
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
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Battlesuit fists",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Enforcer Commander",
                                        "Battlesuit Support System",
                                        "Shield Generator",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Battlesuit",
                                "Commander In Enforcer Battlesuit"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Crisis Fireknife Battlesuits; Crisis Starscythe Battlesuits; Crisis Sunforge Battlesuits.",
                        "compositionText": "1 Commander in Enforcer Battlesuit This model is equipped with: burst cannon; battlesuit fists."
                },
                {
                        "id": "tau-commander-shadowsun",
                        "name": "Commander Shadowsun",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flechette launcher",
                                                "range": "18\"",
                                                "a": 5,
                                                "bs": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "High-energy fusion blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Light missile pod",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battlesuit fists",
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
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Agile Combatant",
                                        "Hero of the Empire",
                                        "Advanced Guardian Drone",
                                        "Command-link Drone"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Battlesuit",
                                "Commander Shadowsun"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Commander Shadowsun – EPIC HERO This model is equipped with: flechette launcher; 2 high-energy fusion blasters; light missile pod; pulse pistol; battlesuit fists; advanced guardian drone; command-link drone. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "tau-darkstrider",
                        "name": "Darkstrider",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Shade",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Structural Analyser",
                                        "Jammer Array"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Markerlight",
                                "Darkstrider"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following unit: Pathfinder Team.",
                        "compositionText": "1 Darkstrider – EPIC HERO This model is equipped with: Shade; close combat weapon."
                },
                {
                        "id": "tau-ethereal",
                        "name": "Ethereal",
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
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Honour stave",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Failure Is Not an Option",
                                        "Coordinated Leadership",
                                        "Hover Drone"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Ethereal"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Breacher Team; Strike Team.",
                        "compositionText": "1 Ethereal This model is equipped with: honour stave."
                },
                {
                        "id": "tau-firesight-team",
                        "name": "Firesight Team",
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
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Longshot pulse rifles",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Precise Targeting"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Markerlight",
                                "Firesight Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Firesight Marksman This model is equipped with: longshot pulse rifles; pulse pistol; close combat weapons. Designer’s Note: The Firesight Marksman model and sniper drone models are treated as a single model for all rules purposes. All distances are measured to and from the Farsight Marksman model. The sniper drone models do not count as models for any rules purposes."
                },
                {
                        "id": "tau-kroot-flesh-shaper",
                        "name": "Kroot Flesh Shaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Kroot scattergun",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Twin ritualistic blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Ritual Butchery",
                                        "Rites of Feasting"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Kroot",
                                "Shaper",
                                "Flesh Shaper"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Kroot Carnivores; Kroot Farstalkers.",
                        "compositionText": "1 Kroot Flesh Shaper This model is equipped with: Kroot scattergun; twin ritualistic blades."
                },
                {
                        "id": "tau-kroot-lone-spear",
                        "name": "Kroot Lone-Spear",
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
                                "sv": "5+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast javelin",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Kroot long gun",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
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
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hunting javelin",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Kalamandra’s bite",
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
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Advanced Scouting",
                                        "Fire and Fade"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Kroot",
                                "Lone-Spear"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Kroot Lone-Spear This model is equipped with: Kroot long gun; close combat weapon; Kalamandra’s bite."
                },
                {
                        "id": "tau-kroot-trail-shaper",
                        "name": "Kroot Trail Shaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Kroot rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Shaper’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Trail Finding",
                                        "Kroot Ambush"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Kroot",
                                "Shaper",
                                "Trail Shaper"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Kroot Carnivores; Kroot Farstalkers.",
                        "compositionText": "1 Kroot Trail Shaper This model is equipped with: Kroot rifle; Shaper’s blade."
                },
                {
                        "id": "tau-kroot-war-shaper",
                        "name": "Kroot War Shaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dart-bow and tri-blade",
                                                "range": "24\"",
                                                "a": "D3+1",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Kroot pistol",
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
                                                "name": "Bladestave and prey-hook",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shaper’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "War Leader",
                                        "Root of Honour"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Kroot",
                                "Shaper",
                                "War Shaper"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "leaderText": "This model can be attached to the following units: Kroot Carnivores; Kroot Farstalkers.",
                        "compositionText": "1 Kroot War Shaper This model is equipped with: dart-bow and tri-blade; Kroot pistol; Shaper’s blade."
                },
                {
                        "id": "tau-the-twin-lance",
                        "name": "The Twin Lance",
                        "role": "character",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fusion eliminator",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Ion scattercannon – standard",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Ion scattercannon – overcharge",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Shardstorm burst system",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse blaster",
                                                "range": "10\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "XV pulse pistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fusion eliminator",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Ion scattercannon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "XV pulse pistol",
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
                                        "Deep Strike",
                                        "Scouts 8\""
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Exemplars of Mont’ka",
                                        "Neocapacitor Shields",
                                        "Retro-thrusters",
                                        "MV15 Gun Drone"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Battlesuit",
                                "The Twin Lance"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Ri’Lantar – EPIC HERO 1 Ri’Locai – EPIC HERO Ri’Lantar is equipped with: 1 fusion eliminator; 1 XV pulse pistol; 1 shardstorm burst system; 1 MV15 gun drone. Ri’Locai is equipped with: 1 ion scattercannon; 1 XV pulse pistol; 1 shardstorm burst system; 1 MV15 gun drone."
                },
                {
                        "id": "tau-breacher-team",
                        "name": "Breacher Team",
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
                                                "name": "Pulse blaster",
                                                "range": "10\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Support turret",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Breach and Clear",
                                        "DS8 Support Turret",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Markerlight",
                                "Fire Warrior",
                                "Breacher Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Breacher Fire Warrior Shas’ui 9 Breacher Fire Warriors Every model is equipped with: pulse blaster; pulse pistol; close combat weapon."
                },
                {
                        "id": "tau-strike-team",
                        "name": "Strike Team",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 70
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
                                                "name": "Pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Pulse rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Support turret",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Suppression Volley",
                                        "DS8 Support Turret",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Markerlight",
                                "Fire Warrior",
                                "Strike Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Fire Warrior Shas’ui 9 Fire Warriors Every model is equipped with: pulse pistol; pulse rifle; close combat weapon."
                },
                {
                        "id": "tau-devilfish",
                        "name": "Devilfish",
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
                                "w": 13,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Transport",
                                "Dedicated Transport",
                                "Devilfish"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Devilfish This model is equipped with: accelerator burst cannon; 2 twin pulse carbines; armoured hull. TRANSPORT This model has a transport capacity of 12 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models."
                },
                {
                        "id": "tau-tidewall-droneport",
                        "name": "Tidewall Droneport",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Drone defenders",
                                                "range": "20\"",
                                                "a": 8,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 11"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Droneport",
                                        "Fortification",
                                        "Tidewall Cover"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Vehicle",
                                "Transport",
                                "Fly",
                                "Tidewall Droneport"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Tidewall Droneport This model is equipped with: drone defenders. TRANSPORT This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models."
                },
                {
                        "id": "tau-tidewall-gunrig",
                        "name": "Tidewall Gunrig",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Supremacy railgun",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 20,
                                                "ap": -5,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 11"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fortification",
                                        "Tidewall Cover"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Vehicle",
                                "Transport",
                                "Fly",
                                "Tidewall Gunrig"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Tidewall Gunrig This model is equipped with: supremacy railgun. TRANSPORT This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models."
                },
                {
                        "id": "tau-tidewall-shieldline",
                        "name": "Tidewall Shieldline",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Firing Deck 20"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fortification",
                                        "Tidewall Cover",
                                        "Tidewall Defence Platform"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Vehicle",
                                "Transport",
                                "Fly",
                                "Tidewall Shieldline"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Tidewall Shieldline This model can be equipped with 1 Tidewall defence platform Tidewall Defence Platform +20 TRANSPORT This model has a transport capacity of 11 T’AU EMPIRE INFANTRY models. It cannot transport BATTLESUIT, KROOT or VESPID STINGWINGS models. If this model is equipped with a Tidewall defence platform, it has a transport capacity of 22 T’au Infantry models instead."
                },
                {
                        "id": "tau-broadside-battlesuits",
                        "name": "Broadside Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                },
                                {
                                        "models": 3,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy rail rifle",
                                                "range": "60\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "High-yield missile pods",
                                                "range": "30\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin smart missile system",
                                                "range": "30\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crushing bulk",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Advanced Armour",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Battlesuit",
                                "Broadside"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Broadside Shas’vre 0-2 Broadside Shas’ui Every model is equipped with: heavy rail rifle; crushing bulk."
                },
                {
                        "id": "tau-crisis-fireknife-battlesuits",
                        "name": "Crisis Fireknife Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 5,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fireknife",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Crisis",
                                "Fireknife"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Crisis Fireknife Shas’vre 2 Crisis Fireknife Shas’ui Every model is equipped with: plasma rifle; missile pod; battlesuit fists."
                },
                {
                        "id": "tau-crisis-starscythe-battlesuits",
                        "name": "Crisis Starscythe Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 5,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Starscythe",
                                        "Battlesuit Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Crisis",
                                "Starscythe"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Crisis Starscythe Shas’vre 2 Crisis Starscythe Shas’ui Every model is equipped with: burst cannon; T’au flamer; battlesuit fists."
                },
                {
                        "id": "tau-crisis-sunforge-battlesuits",
                        "name": "Crisis Sunforge Battlesuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
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
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 5,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sunforge"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Crisis",
                                "Sunforge"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Crisis Sunforge Shas’vre 2 Crisis Sunforge Shas’ui Every model is equipped with: 2 fusion blasters; battlesuit fists."
                },
                {
                        "id": "tau-ghostkeel-battlesuit",
                        "name": "Ghostkeel Battlesuit",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cyclic ion raker – standard",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cyclic ion raker – overcharge",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Fusion collider",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Twin burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin T’au flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
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
                                                "name": "Ghostkeel fists",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stealth Drones",
                                        "Designer’s Note",
                                        "Battlesuit Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Smoke",
                                "Battlesuit",
                                "Ghostkeel"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Ghostkeel Battlesuit This model is equipped with: fusion collider; twin T’au flamer; Ghostkeel fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-hammerhead-gunship",
                        "name": "Hammerhead Gunship",
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
                                "w": 14,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion cannon – standard",
                                                "range": "60\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ion cannon – overcharge",
                                                "range": "60\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Railgun",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 20,
                                                "ap": -5,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Armour Hunter",
                                        "Targeting Array"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Hammerhead Gunship"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Hammerhead Gunship This model is equipped with: 1 railgun; 2 twin pulse carbines; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-kroot-carnivores",
                        "name": "Kroot Carnivores",
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
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tanglebomb launcher",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Kroot pistol",
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
                                                "name": "Kroot rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Kroot carbine",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fieldcraft"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Kroot",
                                "Carnivores"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Long-quill 9-19 Kroot Carnivores The 1 Long-quill is equipped with: Kroot pistol; Kroot rifle; close combat weapon. Every Kroot Carnivore is equipped with: Kroot rifle; close combat weapon. BODYGUARD If this unit has a Starting Strength of 20, you can attach up to two Leader units to it instead of one, provided those Leaders are not duplicates (e.g. you cannot attach two WAR SHAPERS to this unit). If you do, and this unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths."
                },
                {
                        "id": "tau-kroot-farstalkers",
                        "name": "Kroot Farstalkers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 12,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dvorgite skinner",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Farstalker firearm",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Kroot pistol",
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
                                                "name": "Londaxi tribalest",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "T’au-tech rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ripping fangs",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ritual blade",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Bounty Hunters",
                                        "Pech’ra"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kroot",
                                "Grenades",
                                "Farstalkers"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Kroot Kill-broker 9 Kroot Farstalkers 2 Kroot Hounds The Kroot Kill-broker is equipped with: Farstalker firearm; Kroot pistol; ritual blade. Every Kroot Farstalker is equipped with: Farstalker firearm; Kroot pistol; close combat weapon. Every Kroot Hound is equipped with: ripping fangs."
                },
                {
                        "id": "tau-kroot-hounds",
                        "name": "Kroot Hounds",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 40
                                },
                                {
                                        "models": 10,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ripping fangs",
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
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Loping Pounce",
                                        "Hunting Hounds"
                                ]
                        },
                        "keywords": [
                                "Beasts",
                                "Kroot",
                                "Hounds"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "5-10 Kroot Hounds Every model is equipped with: ripping fangs."
                },
                {
                        "id": "tau-krootox-rampagers",
                        "name": "Krootox Rampagers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 85
                                },
                                {
                                        "models": 6,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Kroot pistol and hunting javelins",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
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
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Krootox fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Kroot Linebreakers"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Kroot",
                                "Krootox Rampagers"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "3-6 Krootox Rampagers Every model is equipped with: Kroot pistol and hunting javelins; hunting blades; Rampager fists."
                },
                {
                        "id": "tau-krootox-riders",
                        "name": "Krootox Riders",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                },
                                {
                                        "models": 2,
                                        "cost": 60
                                },
                                {
                                        "models": 3,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Repeater cannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Tanglecannon",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 6,
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Krootox fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Kroot Packmates"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Kroot",
                                "Krootox Riders"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1-3 Krootox Riders Every model is equipped with: repeater cannon; close combat weapon; Krootox fists."
                },
                {
                        "id": "tau-pathfinder-team",
                        "name": "Pathfinder Team",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Drone burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion rifle – standard",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Ion rifle – overcharge",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Rail rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Semi-automatic grenade launcher – EMP",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Semi-automatic grenade launcher – fusion",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Target Uploaded",
                                        "Grav-inhibitor Drone",
                                        "Pulse Accelerator Drone",
                                        "Recon Drone"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Markerlight",
                                "Pathfinder Team"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Pathfinder Shas’ui 9 Pathfinders Every model is equipped with: pulse carbine; pulse pistol; close combat weapon."
                },
                {
                        "id": "tau-piranhas",
                        "name": "Piranhas",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                },
                                {
                                        "models": 2,
                                        "cost": 120
                                },
                                {
                                        "models": 3,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 7,
                                "sv": "4+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Piranha burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Piranha fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 4,
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
                                "faction": [
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Drone Harassment Tactics"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Piranhas"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1-3 Piranhas Every model is equipped with: Piranha burst cannon; 2 twin pulse carbines; armoured hull."
                },
                {
                        "id": "tau-razorshark-strike-fighter",
                        "name": "Razorshark Strike Fighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Quad ion turret – standard",
                                                "range": "30\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Quad ion turret – overcharge",
                                                "range": "30\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ground Strike Fighter"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Razorshark Strike Fighter"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Razorshark Strike Fighter This model is equipped with: accelerator burst cannon; quad ion turret; 2 seeker missiles; armoured hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-riptide-battlesuit",
                        "name": "Riptide Battlesuit",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy burst cannon",
                                                "range": "36\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion accelerator – standard",
                                                "range": "72\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ion accelerator – supercharge",
                                                "range": "72\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Twin fusion blaster",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin plasma rifle",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Riptide fists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "5+",
                                                "s": 6,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Battlesuit Support System",
                                        "Nova Charge",
                                        "Weapon Support System"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Fly",
                                "Battlesuit",
                                "Riptide"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Riptide Battlesuit This model is equipped with: heavy burst cannon; twin plasma rifle; Riptide fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-sky-ray-gunship",
                        "name": "Sky Ray Gunship",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Accelerator burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Seeker missile rack",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin pulse carbine",
                                                "range": "20\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Velocity Tracker",
                                        "Targeting Array"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Markerlight",
                                "Sky Ray Gunship"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Sky Ray Gunship This model is equipped with: 1 seeker missile rack; 2 twin pulse carbines; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-stealth-battlesuits",
                        "name": "Stealth Battlesuits",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Fusion blaster",
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
                                                "name": "Pulse pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battlesuit fists",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Forward Observers",
                                        "Homing Beacon",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Battlesuit",
                                "Grenades",
                                "Markerlight",
                                "Stealth"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Stealth Shas’vre 4 Stealth Shas’ui Every model is equipped with: burst cannon; battlesuit fists."
                },
                {
                        "id": "tau-stormsurge",
                        "name": "Stormsurge",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 360
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 20,
                                "ld": "7+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cluster rocket system",
                                                "range": "48\"",
                                                "a": "4D6",
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
                                                "name": "Destroyer missiles",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse blast cannon – focused",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 24,
                                                "ap": -6,
                                                "d": 12,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse blast cannon – dispersed",
                                                "range": "48\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 4,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Pulse driver cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Twin airbursting fragmentation projector",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin burst cannon",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin smart missile system",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin T’au flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
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
                                                "name": "Thunderous footfalls",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Heavy Walker",
                                        "Support System",
                                        "Titan-killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Stormsurge"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Stormsurge This model is equipped with: cluster rocket system; destroyer missiles; pulse driver cannon; 2 twin smart missile system; twin T’au flamer; thunderous footfalls. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-sun-shark-bomber",
                        "name": "Sun Shark Bomber",
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
                                "w": 12,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin missile pod",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Seeker missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Twin ion rifle – standard",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin ion rifle – overcharge",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "5+",
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
                                        "For the Greater Good"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pulse Bombs"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Sun Shark Bomber"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Sun Shark Bomber This model is equipped with: missile pod; 2 seeker missiles; 2 twin ion rifles; armoured hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "tau-vespid-stingwings",
                        "name": "Vespid Stingwings",
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
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Neutron blaster",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Neutron grenade launcher",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Neutron rail rifle",
                                                "range": "30\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "T’au flamer",
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
                                                "name": "Stingwing claws",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Deep Strike"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Airborne Agility",
                                        "Oversight Drone",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Vespid Stingwings"
                        ],
                        "factionKeywords": [
                                "T’au Empire"
                        ],
                        "compositionText": "1 Vespid Strain Leader 4-9 Vespid Stingwings Every model is equipped with: neutron blaster; stingwing claws."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(tau);
})();
