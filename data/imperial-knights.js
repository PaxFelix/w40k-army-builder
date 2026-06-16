/**
 * W40K Army Builder — Imperial Knights (10th Edition)
 *
 * Datasheets from Codex: Imperial Knights. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ik = {
        id: "imperial-knights",
        name: "Imperial Knights",
        icon: "🏰",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Code Chivalric", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Valourstrike Lance",
                flavour: "",
                rule: { name: "Bold Gallantry", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Bearer of the Iron Chalice", cost: 20, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Bearer of the Evanescent Ion", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Bearer of the Judicant's Helm", cost: 25, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Bearer of the Lancer's Sigil", cost: 25, restriction: "IMPERIAL KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Run Them Through!", cp: 1, type: "Strategic Ploy" },
                    { name: "Thunderstomp", cp: 1, type: "Battle Tactic" },
                    { name: "Full Tilt", cp: 2, type: "Battle Tactic" },
                    { name: "Vow of Retribution", cp: 1, type: "Strategic Ploy" },
                    { name: "Tactical Foil", cp: 1, type: "Strategic Ploy" },
                    { name: "Rotate Ion Shields", cp: 1, type: "Wargear" },
                ]
            },
            {
                name: "Gate Warden Lance",
                flavour: "",
                rule: { name: "Dauntless Defenders", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Acquisitor-at-Arms", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Purgation's Hand", cost: 20, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Augury Halo", cost: 20, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Vengeful Tread", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Drive Them Out!", cp: 1, type: "Battle Tactic" },
                    { name: "Lancebreaker", cp: 1, type: "Strategic Ploy" },
                    { name: "Steadfast Superiority", cp: 1, type: "Battle Tactic" },
                    { name: "Marshal the Defence", cp: 1, type: "Battle Tactic" },
                    { name: "Titanic Bombardment", cp: 1, type: "Battle Tactic" },
                    { name: "Fortress of Intimidation", cp: 1, type: "Epic Deed" },
                ]
            },
            {
                name: "Questoris Companions",
                flavour: "",
                rule: { name: "Heroes of Legend", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Herald of Triumph", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Wyrmslayer Divination", cost: 10, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Pennant of Silvered Fury", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Crushing Condemnation", cost: 10, restriction: "IMPERIAL KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Courageous Stand", cp: 1, type: "Epic Deed" },
                    { name: "Titanic Duel", cp: 1, type: "Epic Deed" },
                    { name: "Moment of Glory", cp: 1, type: "Epic Deed" },
                    { name: "Hero's Tread", cp: 1, type: "Epic Deed" },
                    { name: "Unstoppable Warrior", cp: 2, type: "Epic Deed" },
                    { name: "Driven by the Past", cp: 1, type: "Epic Deed" },
                ]
            },
            {
                name: "Spearhead-at-arms",
                flavour: "",
                rule: { name: "Knightly Teachings", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Mentor's Pride", cost: 20, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Fables of Nightmare", cost: 10, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Tales of Heroism", cost: 10, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Martial Tuition", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Virtue of Courage", cp: 1, type: "Battle Tactic" },
                    { name: "Exemplar's Wisdom", cp: 1, type: "Battle Tactic" },
                    { name: "Mantle of the Mentor", cp: 1, type: "Strategic Ploy" },
                    { name: "Thin Their Ranks", cp: 1, type: "Battle Tactic" },
                    { name: "Let Duty Be Your Shield", cp: 1, type: "Epic Deed" },
                    { name: "Squires of the Hunt", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Freeblade Company",
                flavour: "",
                rule: { name: "Knights of Legend", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Bringer of Justice", cost: 30, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Hunter's Eye", cost: 25, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Mysterious Guardian", cost: 35, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Sanctuary", cost: 20, restriction: "IMPERIAL KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Noble Sacrifice", cp: 1, type: "Epic Deed" },
                    { name: "Strength from Exile", cp: 1, type: "Battle Tactic" },
                    { name: "Full Tilt", cp: 1, type: "Wargear" },
                    { name: "Point-blank Barrage", cp: 1, type: "Strategic Ploy" },
                    { name: "Survivor of Strife", cp: 1, type: "Epic Deed" },
                    { name: "Flanking Manoeuvres", cp: 1, type: "Strategic Ploy" },
                ]
            },
            {
                name: "Questor Forgepact",
                flavour: "",
                rule: { name: "Cogbound Alliance", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Omnissian Champion", cost: 30, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Knight of the Opus Machina", cost: 20, restriction: "IMPERIAL KNIGHTS model only." },
                    { name: "Magos Questoris", cost: 35, restriction: "TECH-PRIEST model only." },
                    { name: "Vocifer Magnificat (Aura)", cost: 15, restriction: "IMPERIAL KNIGHTS model only." },
                ],
                stratagems: [
                    { name: "Omnissiah's Grace", cp: 1, type: "Strategic Ploy" },
                    { name: "Vengeance of the Machine Cult", cp: 1, type: "Strategic Ploy" },
                    { name: "Bonded Imperative", cp: 1, type: "Epic Deed" },
                    { name: "Machine Focus", cp: 1, type: "Strategic Ploy" },
                    { name: "Aggression Begets Aggression", cp: 1, type: "Strategic Ploy" },
                    { name: "Thronegheist Fury", cp: 1, type: "Strategic Ploy" },
                ]
            }
        ],
        units: [
                {
                        "id": "ik-knight-destrier",
                        "name": "Knight Destrier",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chastiser gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Frag bombard",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Rapid Fire D6+3"
                                                ]
                                        },
                                        {
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bellatus reaper chainsword – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D3+3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Bellatus reaper chainsword – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thundershock spear – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D3+3",
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Thundershock spear – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Titanic feet",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ram Jets",
                                        "Thundercharge",
                                        "Saturation Fire"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Bellatus",
                                "Character",
                                "Imperium",
                                "Knight Destrier"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Defender This model is equipped with: 1 chastiser gatling cannon; 1 frag bombard; 1 Questoris heavy stubber; 1 titanic feet. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-canis-rex",
                        "name": "Canis Rex",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 415
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
                                                "name": "Las-impulsor – high intensity",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Las-impulsor – low intensity",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Questoris multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Freedom’s Hand – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 9,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Freedom’s Hand – sweep",
                                                "range": "Melee",
                                                "a": 10,
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Legendary Freeblade",
                                        "Chainbreaker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Canis Rex"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Canis Rex – EPIC HERO Canis Rex is equipped with: las-impulsor; Questoris multi-laser; Freedom’s Hand. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-castellan",
                        "name": "Knight Castellan",
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
                                                "name": "Plasma decimator – standard",
                                                "range": "48\"",
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
                                                "name": "Plasma decimator – supercharge",
                                                "range": "48\"",
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
                                                "name": "Shieldbreaker missile launcher",
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
                                                "name": "Twin meltagun",
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
                                                "name": "Twin siegebreaker cannon",
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
                                                "name": "Volcano lance",
                                                "range": "72\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 18,
                                                "ap": -5,
                                                "d": "D6+8",
                                                "keywords": [
                                                        "Blast"
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ion Aegis",
                                        "Titan Hunter"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Dominus",
                                "Character",
                                "Imperium",
                                "Knight Castellan"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Castellan This model is equipped with: plasma decimator; 2 shieldbreaker missile launchers; 2 twin meltaguns; twin siegebreaker cannon; volcano lance; titanic feet. DAMAGED: 1-10 WOUNDS REMAINING While this model has 1‑10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-crusader",
                        "name": "Knight Crusader",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 385
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
                                                "name": "Avenger gatling cannon",
                                                "range": "36\"",
                                                "a": 18,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Rapid-fire battle cannon",
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
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thermal cannon",
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
                                                "name": "Twin Icarus autocannon",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crusader’s Duty",
                                        "Punishing Salvoes"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Crusader"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Crusader This model is equipped with: avenger gatling cannon; heavy flamer; meltagun; thermal cannon; titanic feet. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-defender",
                        "name": "Knight Defender",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 415
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
                                                "name": "Conversion beam obliterator",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 4,
                                                "keywords": [
                                                        "Conversion",
                                                        "Sustained Hits D3"
                                                ]
                                        },
                                        {
                                                "name": "Plasma executor – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma executor – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Phosphor blaster",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin incendine combustor",
                                                "range": "12\"",
                                                "a": "D6",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Defender’s Duty",
                                        "Selfless Protector"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Defender"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Defender This model is equipped with: conversion beam obliterator; plasma executor; twin incendine combustor; phosphor blaster; titanic feet. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-errant",
                        "name": "Knight Errant",
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thermal cannon",
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
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Errant’s Duty",
                                        "Aggressive Assault"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Errant"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Errant This model is equipped with: meltagun; thermal cannon; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-gallant",
                        "name": "Knight Gallant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 355
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                        "Devastating Wounds"
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
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 10,
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gallant’s Duty",
                                        "Martial Pride"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Gallant"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Gallant This model is equipped with: meltagun; thunderstrike gauntlet; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-paladin",
                        "name": "Knight Paladin",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 375
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Rapid-fire battle cannon",
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
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Paladin’s Duty",
                                        "Seasoned Noble"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Paladin"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Paladin This model is equipped with: meltagun; Questoris heavy stubber; rapid-fire battlecannon; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-preceptor",
                        "name": "Knight Preceptor",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 365
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Las-impulsor – high intensity",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Las-impulsor – low intensity",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
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
                                                "name": "Questoris multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mentor",
                                        "Exemplar of the Code"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Preceptor"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Preceptor This model is equipped with: las-impulsor; Preceptor multi-laser; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-valiant",
                        "name": "Knight Valiant",
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
                                                "name": "Conflagration cannon",
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
                                                "name": "Shieldbreaker missile launcher",
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
                                                "name": "Thundercoil harpoon",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 24,
                                                "ap": -6,
                                                "d": 10,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Twin meltagun",
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
                                                "name": "Twin siegebreaker cannon",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ion Aegis",
                                        "Thundershock"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Dominus",
                                "Character",
                                "Imperium",
                                "Knight Valiant"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Valiant This model is equipped with: conflagration cannon; 2 shieldbreaker missile launchers; thundercoil harpoon; 2 twin meltaguns; twin siegebreaker cannon; titanic feet. DAMAGED: 1-10 WOUNDS REMAINING While this model has 1‑10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-knight-warden",
                        "name": "Knight Warden",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 375
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
                                                "name": "Avenger gatling cannon",
                                                "range": "36\"",
                                                "a": 18,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
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
                                                "name": "Ironstorm missile pod",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Stormspear rocket pod",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin Icarus autocannon",
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
                                                "name": "Thunderstrike gauntlet – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 20,
                                                "ap": -3,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Thunderstrike gauntlet – sweep",
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
                                        "Code Chivalric",
                                        "Super-heavy Walker"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warden’s Duty",
                                        "Thin Their Ranks"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Titanic",
                                "Towering",
                                "Questoris",
                                "Character",
                                "Imperium",
                                "Knight Warden"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Knight Warden This model is equipped with: avenger gatling cannon; heavy flamer; meltagun; reaper chainsword. DAMAGED: 1-9 WOUNDS REMAINING While this model has 1‑9 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-sir-hekhtur",
                        "name": "Sir Hekhtur",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 0
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 3,
                                "ld": "5+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hekhtur’s pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
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
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Lone Operative"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": []
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Sir Hekhtur"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Sir Hekhtur – EPIC HERO Sir Hekhtur is equipped with: Hekhtur’s pistol; close combat weapon."
                },
                {
                        "id": "ik-armiger-helverin",
                        "name": "Armiger Helverin",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
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
                                                "name": "Armiger autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                        "Code Chivalric"
                                ],
                                "wargear": [],
                                "other": [
                                        "Suppression Protocols"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Armiger",
                                "Helverin"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Armiger Helverin This model is equipped with: 2 Armiger autocannons; Questoris heavy stubber; armoured feet. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ik-armiger-warglaive",
                        "name": "Armiger Warglaive",
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
                                                "name": "Questoris heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Thermal spear",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Reaper chain-cleaver – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaper chain-cleaver – sweep",
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
                                        "Code Chivalric"
                                ],
                                "wargear": [],
                                "other": [
                                        "Impetuous Glory"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Armiger",
                                "Warglaive"
                        ],
                        "factionKeywords": [
                                "Imperial Knights"
                        ],
                        "compositionText": "1 Armiger Warglaive This model is equipped with: Questoris heavy stubber; thermal spear; reaper chain-cleaver. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, subtract 3 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ik);
})();
