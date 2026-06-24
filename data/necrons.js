/**
 * W40K Army Builder — Necrons (10th Edition)
 *
 * DATA SCOPE: This module contains only short factual game data — points,
 * model counts, statlines (M/T/Sv/W/Ld/OC), weapon profiles (range, attacks,
 * skill, strength, AP, damage) and keyword labels. Ability, detachment,
 * stratagem and enhancement entries are stored as NAMES ONLY; their rules text
 * is intentionally left for the army owner to fill in from their own codex.
 *
 * This module self-registers into the global W40K_FACTIONS registry, which
 * data/factions.js assembles into the final DATA object.
 */
(function () {
    "use strict";

    const necrons = {
        id: "necrons",
        name: "Necrons",
        icon: "\uD83D\uDC80",
        allegiance: "Xenos",
        flavour: "",

        // ─── ARMY RULES (names only — fill in text from your codex) ──────────
        armyRules: [
            {
                name: "Reanimation Protocols",
                flavour: "",
                text: ""
            }
        ],

        // ─── DETACHMENTS (names only — fill in rule/strat/enhancement text) ──
        detachments: [
            {
                name: "Awakened Dynasty",
                flavour: "",
                rule: { name: "Command Protocols", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Veil of Darkness", cost: 20, restriction: "NECRONS model only.", text: "" },
                    { name: "Nether-realm Casket", cost: 20, restriction: "NECRONS model only.", text: "" },
                    { name: "Phasal Subjugator (Aura)", cost: 35, restriction: "NECRONS model only.", text: "" },
                    { name: "Enaegic Dermal Bond", cost: 30, restriction: "NECRONS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Protocol of the Eternal Revenant", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Protocol of the Undying Legions", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Protocol of the Hungry Void", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Protocol of the Sudden Storm", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Protocol of the Conquering Tyrant", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Protocol of the Vengeful Stars", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Annihilation Legion",
                flavour: "",
                rule: { name: "Annihilation Protocol", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eternal Madness", cost: 25, restriction: "NECRONS model only.", text: "" },
                    { name: "Ingrained Superiority", cost: 10, restriction: "NECRONS model only.", text: "" },
                    { name: "Soulless Reaper", cost: 20, restriction: "DESTROYER CULT model only.", text: "" },
                    { name: "Eldritch Nightmare", cost: 15, restriction: "DESTROYER CULT model only.", text: "" },
                ],
                stratagems: [
                    { name: "Masks of Death", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "The Spoor of Frailty", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Murderous Reanimation", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Pitiless Hunters", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Blood-fuelled Cruelty", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Insanity's Ire", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Canoptek Court",
                flavour: "",
                rule: { name: "Power Matrix", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Dimensional Sanctum", cost: 20, restriction: "CRYPTEK model only.", text: "" },
                    { name: "Hyperphasic Fulcrum", cost: 15, restriction: "CRYPTEK model only.", text: "" },
                    { name: "Autodivinator", cost: 15, restriction: "CRYPTEK model only.", text: "" },
                    { name: "Metalodermal Tesla Weave", cost: 10, restriction: "CRYPTEK model only.", text: "" },
                ],
                stratagems: [
                    { name: "Curse of the Cryptek", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cynosure of Eradication", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Solar Pulse", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reactive Subroutines", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Countertemporal Shift", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Suboptimal Facade", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Obeisance Phalanx",
                flavour: "",
                rule: { name: "Worthy Foes", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Honourable Combatant", cost: 10, restriction: "OVERLORD model only.", text: "" },
                    { name: "Unflinching Will", cost: 20, restriction: "OVERLORD model only.", text: "" },
                    { name: "Warrior Noble", cost: 15, restriction: "OVERLORD model only.", text: "" },
                    { name: "Eternal Conqueror", cost: 25, restriction: "OVERLORD model only.", text: "" },
                ],
                stratagems: [
                    { name: "Your Time Is Nigh", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Enslaved Artifice", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Nanoassembly Protocols", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Sentinels of Eternity", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Suffer No Rival", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Territorial Obsession", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Hypercrypt Legion",
                flavour: "",
                rule: { name: "Hyperphasing", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Dimensional Overseer", cost: 25, restriction: "NECRONS model only.", text: "" },
                    { name: "Arisen Tyrant", cost: 25, restriction: "NECRONS model only.", text: "" },
                    { name: "Hyperspatial Transfer Node", cost: 15, restriction: "NECRONS model only.", text: "" },
                    { name: "Osteoclave Fulcrum", cost: 20, restriction: "NECRONS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Hyperphasic Recall", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Quantum Deflection", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reanimation Crypts", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cosmic Precision", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dimensional Corridor", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Entropic Damping", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Starshatter Arsenal",
                flavour: "",
                rule: { name: "Relentless Onslaught", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Dread Majesty (Aura)", cost: 30, restriction: "OVERLORD or CATACOMB COMMAND BARGE model only.", text: "" },
                    { name: "Miniaturised Nebuloscope", cost: 15, restriction: "NECRONS model only.", text: "" },
                    { name: "Demanding Leader", cost: 10, restriction: "NECRONS model only.", text: "" },
                    { name: "Chrono-impedance Fields", cost: 25, restriction: "NECRONS model only.", text: "" },
                ],
                stratagems: [
                    { name: "Merciless Reclamation", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unyielding Forms", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Chronoshift", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dimensional Tunnel", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Endless Servitude", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reactive Reposition", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Cryptek Conclave",
                flavour: "",
                rule: { name: "Technosorcerous Augmentations", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Quantum Abacus", cost: 15, restriction: "NECRONS model only.", text: "" },
                    { name: "Atomic Disintegrators", cost: 10, restriction: "CRYPTEK model only.", text: "" },
                    { name: "Gauntlet of Compression", cost: 20, restriction: "NECRONS model only.", text: "" },
                    { name: "Gravitic Bolas", cost: 15, restriction: "CRYPTEK model only.", text: "" },
                ],
                stratagems: [
                    { name: "Molecular Targeting", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Microscarab Swarm", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Animus Curse", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Synergistic Empowerment", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Untapped Power", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Potentiality Syphon", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Cursed Legion",
                flavour: "",
                rule: { name: "Cold Fervour", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Destroyer Ankh", cost: 20, restriction: "CATACOMB COMMAND BARGE or OVERLORD model only.", text: "" },
                    { name: "Murdermind", cost: 15, restriction: "CRYPTEK model only.", text: "" },
                    { name: "Mark of the Nekrosor", cost: 20, restriction: "DESTROYER CULT model only.", text: "" },
                    { name: "Cursed Circlet", cost: 25, restriction: "DESTROYER CULT model only.", text: "" },
                ],
                stratagems: [
                    { name: "Methodical Murder", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Image of Death", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Mortis Protocols", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Driven to Butchery", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Spreading Madness", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unnatural Aggression", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Pantheon of Woe",
                flavour: "",
                rule: { name: "Cosmic Distortion", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Singularity Matrix", cost: 55, restriction: "C'TAN SHARD OF THE DECEIVER model only.", text: "" },
                    { name: "Quantum Goad", cost: 45, restriction: "C'TAN SHARD OF THE NIGHTBRINGER model only.", text: "" },
                    { name: "Animus Damper", cost: 35, restriction: "C'TAN SHARD OF THE VOID DRAGON model only.", text: "" },
                    { name: "Reletavistic Tether", cost: 40, restriction: "TRANSCENDENT C'TAN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Disharmonisation Cascade", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Molecular Erosion", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Mass Transmogrification", cp: 1, type: "Epic Deed", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Entrophasic Aura Targeting", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Chronodistortion", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Phase Melding", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],

        // ─── UNITS ───────────────────────────────────────────────────────────
        units: [
            {
                id: "nec-overlord",
                name: "Overlord",
                role: "character",
                points: [{ models: 1, cost: 85 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Staff of light", range: "18\"", a: 3, bs: "2+", s: 5, ap: -2, d: 1, keywords: [] },
                        { name: "Tachyon arrow", range: "72\"", a: 1, bs: "2+", s: 16, ap: -5, d: "D6+2", keywords: ["One Shot"] }
                    ],
                    melee: [
                        { name: "Overlord's blade", range: "Melee", a: 4, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] },
                        { name: "Staff of light", range: "Melee", a: 4, ws: "2+", s: 5, ap: -2, d: 1, keywords: [] },
                        { name: "Voidscythe", range: "Melee", a: 3, ws: "3+", s: 12, ap: -3, d: 3, keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Resurrection Orb"],
                    other: ["My Will Be Done", "Implacable Resilience"]
                },
                wargearOptions: [
                    "This model's tachyon arrow and Overlord's blade can be replaced with 1 staff of light or 1 voidscythe.",
                    "If not equipped with a tachyon arrow, can be equipped with 1 resurrection orb."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Overlord. This model is equipped with: tachyon arrow; Overlord's blade.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Noble", "Overlord"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-necron-warriors",
                name: "Necron Warriors",
                role: "battleline",
                points: [{ models: 10, cost: 90 }, { models: 20, cost: 200 }],
                stats: { m: "5\"", t: 4, sv: "4+", w: 1, ld: "7+", oc: 2 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Gauss flayer", range: "24\"", a: 1, bs: "4+", s: 4, ap: 0, d: 1, keywords: ["Lethal Hits", "Rapid Fire 1"] },
                        { name: "Gauss reaper", range: "12\"", a: 2, bs: "4+", s: 4, ap: -1, d: 1, keywords: ["Lethal Hits"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 1, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Their Number is Legion"]
                },
                wargearOptions: [
                    "Any number of models can each have their gauss flayer replaced with 1 gauss reaper."
                ],
                composition: { min: 10, max: 20 },
                compositionText: "10-20 Necron Warriors. Every model is equipped with: gauss flayer; close combat weapon.",
                keywords: ["Infantry", "Battleline", "Necron Warriors"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-immortals",
                name: "Immortals",
                role: "battleline",
                points: [{ models: 5, cost: 70 }, { models: 10, cost: 150 }],
                stats: { m: "5\"", t: 5, sv: "3+", w: 1, ld: "7+", oc: 2 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Gauss blaster", range: "24\"", a: 2, bs: "3+", s: 5, ap: -1, d: 1, keywords: ["Lethal Hits"] },
                        { name: "Tesla carbine", range: "24\"", a: 2, bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Assault", "Sustained Hits 2"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 2, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Implacable Eradication"]
                },
                wargearOptions: [
                    "All models in this unit can each have their gauss blaster replaced with 1 tesla carbine."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "5-10 Immortals. Every model is equipped with: gauss blaster; close combat weapon.",
                keywords: ["Infantry", "Battleline", "Immortals"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-plasmancer",
                name: "Plasmancer",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "5\"", t: 4, sv: "4+", w: 4, ld: "6+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Plasmic lance", range: "18\"", a: 3, bs: "4+", s: 7, ap: -3, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Plasmic lance", range: "Melee", a: 2, ws: "4+", s: 7, ap: -3, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Harbinger of Destruction", "Living Lightning"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Plasmancer. This model is equipped with: plasmic lance.",
                leaderText: "Can be attached to Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Cryptek", "Plasmancer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-lokhust-lord",
                name: "Lokhust Lord",
                role: "mounted",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "8\"", t: 6, sv: "3+", w: 6, ld: "6+", oc: 2 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Staff of light", range: "18\"", a: 3, bs: "2+", s: 5, ap: -2, d: 1, keywords: [] }
                    ],
                    melee: [
                        { name: "Lord's blade", range: "Melee", a: 4, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] },
                        { name: "Staff of light", range: "Melee", a: 4, ws: "2+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Nanoscarab Amulet", "Resurrection Orb"],
                    other: ["Destroyer Cult", "Driven by Hatred"]
                },
                wargearOptions: [
                    "This model's staff of light can be replaced with 1 Lord's blade.",
                    "This model can be equipped with 1 nanoscarab amulet or 1 resurrection orb."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Lokhust Lord. This model is equipped with: staff of light.",
                leaderText: "Can be attached to Lokhust Destroyers, Lokhust Heavy Destroyers.",
                keywords: ["Mounted", "Character", "Fly", "Destroyer Cult", "Lokhust Lord"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-lord",
                name: "Lord",
                role: "character",
                points: [{ models: 1, cost: 65 }],
                stats: { m: "5\"", t: 5, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Staff of light", range: "18\"", a: 3, bs: "3+", s: 5, ap: -2, d: 1, keywords: [] }
                    ],
                    melee: [
                        { name: "Staff of light", range: "Melee", a: 3, ws: "3+", s: 5, ap: -2, d: 1, keywords: [] },
                        { name: "Lord's blade", range: "Melee", a: 3, ws: "3+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Resurrection Orb"],
                    other: ["Relentless March", "The Lord's Will", "Legends datasheet"]
                },
                wargearOptions: [
                    "This model's staff of light can be replaced with 1 Lord's blade.",
                    "This model can be equipped with 1 resurrection orb."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Lord. This model is equipped with: staff of light.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Noble", "Lord"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-royal-warden",
                name: "Royal Warden",
                role: "character",
                points: [{ models: 1, cost: 50 }],
                stats: { m: "5\"", t: 5, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Relic gauss blaster", range: "24\"", a: 2, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Lethal Hits", "Rapid Fire 2"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 4, ws: "3+", s: 5, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Adaptive Strategy", "Engrammatic Logic"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Royal Warden. This model is equipped with: relic gauss blaster; close combat weapon.",
                leaderText: "Can be attached to Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Royal Warden"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-lychguard",
                name: "Lychguard",
                role: "infantry",
                points: [{ models: 5, cost: 85 }, { models: 10, cost: 170 }],
                stats: { m: "5\"", t: 5, sv: "3+", w: 2, ld: "7+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Hyperphase sword", range: "Melee", a: 3, ws: "3+", s: 6, ap: -2, d: 1, keywords: [] },
                        { name: "Warscythe", range: "Melee", a: 2, ws: "3+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Dispersion Shield"],
                    other: ["Guardian Protocols"]
                },
                wargearOptions: [
                    "All models in this unit can each have their warscythe replaced with 1 hyperphase sword and 1 dispersion shield (grants a 4+ invulnerable save)."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "5-10 Lychguard. Every model is equipped with: warscythe.",
                leaderText: "Can be led by Imotekh the Stormlord, Overlord, Overlord with Translocation Shroud, Trazyn the Infinite.",
                keywords: ["Infantry", "Lychguard"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-technomancer",
                name: "Technomancer",
                role: "character",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "10\"", t: 4, sv: "4+", w: 4, ld: "6+", oc: 1 },
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Staff of light", range: "18\"", a: 3, bs: "4+", s: 5, ap: -2, d: 1, keywords: [] }
                    ],
                    melee: [
                        { name: "Staff of light", range: "Melee", a: 2, ws: "4+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Rites of Reanimation", "Technomancer"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Technomancer. This model is equipped with: staff of light.",
                leaderText: "Can be attached to Canoptek Wraiths, Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Cryptek", "Fly", "Technomancer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-chronomancer",
                name: "Chronomancer",
                role: "character",
                points: [{ models: 1, cost: 65 }],
                stats: { m: "5\"", t: 4, sv: "4+", w: 4, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Aeonstave", range: "18\"", a: "D6", bs: "4+", s: 5, ap: -1, d: 1, keywords: ["Blast"] }
                    ],
                    melee: [
                        { name: "Aeonstave", range: "Melee", a: 3, ws: "4+", s: 5, ap: -1, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Timesplinter Mantle", "Chronometron"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chronomancer. This model is equipped with: aeonstave.",
                leaderText: "Can be attached to Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Cryptek", "Chronomancer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-psychomancer",
                name: "Psychomancer",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "5\"", t: 4, sv: "4+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Abyssal lance", range: "18\"", a: 1, bs: "4+", s: 6, ap: -3, d: 3, keywords: [] }
                    ],
                    melee: [
                        { name: "Abyssal lance", range: "Melee", a: 1, ws: "4+", s: 6, ap: -3, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Nightmare Shroud", "Harbinger of Despair"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Psychomancer. This model is equipped with: abyssal lance.",
                leaderText: "Can be attached to Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Cryptek", "Psychomancer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-hexmark-destroyer",
                name: "Hexmark Destroyer",
                role: "character",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "8\"", t: 5, sv: "3+", w: 5, ld: "6+", oc: 1 },
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Enmitic disintegrator pistols", range: "18\"", a: 6, bs: "2+", s: 6, ap: -2, d: 1, keywords: ["Pistol", "Ignores Cover"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 4, ws: "3+", s: 5, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Lone Operative"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Inescapable Death", "Multi-threat Eliminator"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Hexmark Destroyer. This model is equipped with: enmitic disintegrator pistols; close combat weapon.",
                keywords: ["Infantry", "Character", "Destroyer Cult", "Hexmark Destroyer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-skorpekh-lord",
                name: "Skorpekh Lord",
                role: "character",
                points: [{ models: 1, cost: 90 }],
                stats: { m: "8\"", t: 7, sv: "3+", w: 7, ld: "6+", oc: 2 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Enmitic annihilator", range: "18\"", a: 2, bs: "2+", s: 6, ap: -1, d: 1, keywords: ["Rapid Fire 2"] }
                    ],
                    melee: [
                        { name: "Flensing claw", range: "Melee", a: 8, ws: "2+", s: 6, ap: -1, d: 1, keywords: [] },
                        { name: "Hyperphase harvester", range: "Melee", a: 4, ws: "2+", s: 10, ap: -3, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["United In Destruction", "Crimson Harvest"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Skorpekh Lord. This model is equipped with: enmitic annihilator; flensing claw; hyperphase harvester.",
                leaderText: "Can be attached to Skorpekh Destroyers.",
                keywords: ["Infantry", "Character", "Destroyer Cult", "Skorpekh Lord"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-imotekh",
                name: "Imotekh the Stormlord",
                role: "character",
                points: [{ models: 1, cost: 100 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Gauntlet of Fire", range: "12\"", a: "D6", bs: "N/A", s: 5, ap: -1, d: 1, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Staff of the Destroyer", range: "18\"", a: 3, bs: "2+", s: 6, ap: -3, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Staff of the Destroyer", range: "Melee", a: 4, ws: "2+", s: 6, ap: -3, d: 2, keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Grand Strategist", "Lord of the Storm"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Imotekh the Stormlord. This model is equipped with: Gauntlet of Fire; Staff of the Destroyer.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Epic Hero", "Noble", "Imotekh the Stormlord"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-illuminor-szeras",
                name: "Illuminor Szeras",
                role: "character",
                points: [{ models: 1, cost: 165 }],
                stats: { m: "8\"", t: 8, sv: "2+", w: 9, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "80mm",
                weapons: {
                    ranged: [
                        { name: "Eldritch lance", range: "36\"", a: 3, bs: "3+", s: 9, ap: -3, d: 3, keywords: [] }
                    ],
                    melee: [
                        { name: "Eldritch lance", range: "Melee", a: 4, ws: "3+", s: 9, ap: -3, d: 3, keywords: [] },
                        { name: "Impaling legs", range: "Melee", a: 4, ws: "3+", s: 6, ap: -1, d: 1, keywords: ["Extra Attacks"] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 4+"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Illuminor", "Mechanical Augmentation", "Atomic Energy Manipulator"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Illuminor Szeras. This model is equipped with: eldritch lance; impaling legs.",
                keywords: ["Infantry", "Character", "Epic Hero", "Cryptek", "Illuminor Szeras"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-orikan",
                name: "Orikan the Diviner",
                role: "character",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "5\"", t: 4, sv: "4+", w: 4, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Staff of Tomorrow", range: "Melee", a: 2, ws: "3+", s: 4, ap: -3, d: "D3", keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Master Chronomancer", "The Stars Are Right"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Orikan the Diviner. This model is equipped with: Staff of Tomorrow.",
                leaderText: "Can be attached to Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Epic Hero", "Cryptek", "Chronomancer", "Orikan the Diviner"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-trazyn",
                name: "Trazyn the Infinite",
                role: "character",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "25mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Empathic Obliterator", range: "Melee", a: 4, ws: "2+", s: 7, ap: 0, d: "D3", keywords: ["Sustained Hits D3"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Ancient Collector", "Surrogate Hosts"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Trazyn the Infinite. This model is equipped with: Empathic Obliterator.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Epic Hero", "Noble", "Trazyn the Infinite"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-nemesor-zahndrekh",
                name: "Nemesor Zahndrekh",
                role: "character",
                points: [{ models: 1, cost: 85 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "7+", oc: 1 },
                invuln: "4+",
                baseSize: "25mm",
                weapons: {
                    ranged: [
                        { name: "Staff of light", range: "18\"", a: 3, bs: "3+", s: 5, ap: -2, d: 1, keywords: [] }
                    ],
                    melee: [
                        { name: "Staff of light", range: "Melee", a: 4, ws: "3+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Transient Madness", "Lord of Deceit", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Nemesor Zahndrekh. This model is equipped with: staff of light.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Epic Hero", "Noble", "Nemesor Zahndrekh"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-vargard-obyron",
                name: "Vargard Obyron",
                role: "character",
                points: [{ models: 1, cost: 85 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 5, ld: "6+", oc: 1 },
                baseSize: "25mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Warscythe", range: "Melee", a: 4, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds", "Precision"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Ghostwalk Mantle", "The Vargard's Duty", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Vargard Obyron. This model is equipped with: warscythe.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Epic Hero", "Vargard Obyron"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-catacomb-command-barge",
                name: "Catacomb Command Barge",
                role: "vehicle",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "10\"", t: 8, sv: "3+", w: 9, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Gauss cannon", range: "24\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] },
                        { name: "Staff of light", range: "18\"", a: 3, bs: "2+", s: 5, ap: -2, d: 1, keywords: [] },
                        { name: "Tesla cannon", range: "24\"", a: 4, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Sustained Hits 2"] }
                    ],
                    melee: [
                        { name: "Overlord's blade", range: "Melee", a: 4, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] },
                        { name: "Staff of light", range: "Melee", a: 4, ws: "3+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Resurrection Orb"],
                    other: ["Carrier Wave", "Advanced Quantum Shielding"]
                },
                wargearOptions: [
                    "This model's gauss cannon can be replaced with 1 tesla cannon.",
                    "This model's staff of light can be replaced with 1 Overlord's blade.",
                    "This model can be equipped with 1 resurrection orb."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Catacomb Command Barge. This model is equipped with: gauss cannon; staff of light.",
                keywords: ["Vehicle", "Character", "Fly", "Catacomb Command Barge"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-the-silent-king",
                name: "The Silent King",
                role: "vehicle",
                points: [{ models: 3, cost: 400 }],
                stats: { m: "8\"", t: 10, sv: "2+", w: 16, ld: "6+", oc: 6 },
                statLines: [
                    { name: "Szarekh", m: "8\"", t: 10, sv: "2+", w: 16, ld: "6+", oc: 6 },
                    { name: "Triarchal Menhir", m: "8\"", t: 10, sv: "2+", w: 5, ld: "6+", oc: 1 }
                ],
                invuln: "4+",
                baseSize: "Szarekh 100mm / Menhir 50mm",
                weapons: {
                    ranged: [
                        { name: "Annihilator beam", range: "24\"", a: 1, bs: "2+", s: 14, ap: -4, d: 6, keywords: [] },
                        { name: "Sceptre of Eternal Glory", range: "24\"", a: 2, bs: "2+", s: 10, ap: -3, d: 3, keywords: ["Devastating Wounds"] },
                        { name: "Staff of Stars", range: "24\"", a: 12, bs: "2+", s: 6, ap: -1, d: 1, keywords: ["Indirect Fire"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 1, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Weapons of the Final Triarch", range: "Melee", a: 12, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Lethal Hits"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6+3 (Szarekh only)"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Voice of the Triarch", "Phaeron of the Conqueror (Aura)", "Phaeron of the Blades (Aura)", "Relentless March (Aura)", "The Silent King", "Supreme Commander", "Triarchal Menhirs", "Damaged: 1-6 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 3 },
                compositionText: "1 Szarekh and 2 Triarchal Menhirs. Szarekh is equipped with: Sceptre of Eternal Glory; Staff of Stars; Weapons of the Final Triarch. Every Triarchal Menhir is equipped with: annihilator beam; armoured bulk.",
                keywords: ["Vehicle", "Epic Hero", "Triarch", "Character", "The Silent King"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-ctan-deceiver",
                name: "C'tan Shard of the Deceiver",
                role: "monster",
                points: [{ models: 1, cost: 310 }],
                stats: { m: "8\"", t: 11, sv: "3+", w: 16, ld: "6+", oc: 4 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Cosmic insanity", range: "18\"", a: 6, bs: "2+", s: 6, ap: -2, d: 2, keywords: ["Anti-Character 4+", "Devastating Wounds", "Precision"] }
                    ],
                    melee: [
                        { name: "Golden fists", range: "Melee", a: 8, ws: "2+", s: 10, ap: -3, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike", "Feel No Pain 5+", "Stealth"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Enslaved Star God", "Grand Illusion", "Necrodermis"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 C'tan Shard of the Deceiver. This model is equipped with: cosmic insanity; golden fists.",
                keywords: ["Monster", "Character", "Epic Hero", "Fly", "C'tan Shard of the Deceiver"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-ctan-nightbringer",
                name: "C'tan Shard of the Nightbringer",
                role: "monster",
                points: [{ models: 1, cost: 340 }],
                stats: { m: "10\"", t: 11, sv: "3+", w: 16, ld: "6+", oc: 4 },
                invuln: "4+",
                baseSize: "90mm",
                weapons: {
                    ranged: [
                        { name: "Gaze of death", range: "18\"", a: "D3", bs: "2+", s: 12, ap: -3, d: "D6+3", keywords: [] }
                    ],
                    melee: [
                        { name: "Scythe of the Nightbringer - strike", range: "Melee", a: 6, ws: "2+", s: 14, ap: -4, d: "D6+2", keywords: ["Devastating Wounds"] },
                        { name: "Scythe of the Nightbringer - sweep", range: "Melee", a: 14, ws: "2+", s: 8, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike", "Feel No Pain 5+"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Enslaved Star God", "Drain Life", "Necrodermis"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 C'tan Shard of the Nightbringer. This model is equipped with: gaze of death; scythe of the Nightbringer.",
                keywords: ["Monster", "Character", "Epic Hero", "Fly", "C'tan Shard of the Nightbringer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-ctan-void-dragon",
                name: "C'tan Shard of the Void Dragon",
                role: "monster",
                points: [{ models: 1, cost: 330 }],
                stats: { m: "10\"", t: 11, sv: "3+", w: 16, ld: "6+", oc: 4 },
                invuln: "4+",
                baseSize: "80mm",
                weapons: {
                    ranged: [
                        { name: "Spear of the Void Dragon", range: "12\"", a: "D3", bs: "2+", s: 8, ap: -3, d: "D6+2", keywords: ["Anti-Vehicle 2+"] },
                        { name: "Voltaic storm", range: "18\"", a: "D6+3", bs: "2+", s: 7, ap: -1, d: 2, keywords: ["Blast", "Sustained Hits 2"] }
                    ],
                    melee: [
                        { name: "Spear of the Void Dragon - strike", range: "Melee", a: 5, ws: "2+", s: 12, ap: -4, d: "D6+2", keywords: ["Anti-Vehicle 2+"] },
                        { name: "Spear of the Void Dragon - sweep", range: "Melee", a: 10, ws: "2+", s: 8, ap: -1, d: 2, keywords: [] },
                        { name: "Canoptek tail blades", range: "Melee", a: 6, ws: "2+", s: 6, ap: -1, d: 1, keywords: ["Extra Attacks"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike", "Feel No Pain 5+"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Enslaved Star God", "Necrodermis"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 C'tan Shard of the Void Dragon. This model is equipped with: spear of the Void Dragon; voltaic storm; canoptek tail blades.",
                keywords: ["Monster", "Character", "Epic Hero", "Fly", "C'tan Shard of the Void Dragon"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-transcendent-ctan",
                name: "Transcendent C'tan",
                role: "monster",
                points: [{ models: 1, cost: 325 }],
                stats: { m: "8\"", t: 11, sv: "3+", w: 16, ld: "6+", oc: 4 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Seismic assault", range: "12\"", a: 6, bs: "2+", s: 8, ap: -2, d: 2, keywords: ["Assault", "Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Crackling tendrils", range: "Melee", a: 8, ws: "2+", s: 10, ap: -3, d: "D6", keywords: ["Sustained Hits 1"] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike", "Feel No Pain 5+"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Enslaved Star God", "C'tan Shard", "Transdimensional Displacement", "Necrodermis"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Transcendent C'tan. This model is equipped with: seismic assault; crackling tendrils.",
                keywords: ["Monster", "Character", "Fly", "Transcendent C'tan"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-deathmarks",
                name: "Deathmarks",
                role: "infantry",
                points: [{ models: 5, cost: 60 }, { models: 10, cost: 120 }],
                stats: { m: "5\"", t: 5, sv: "3+", w: 1, ld: "7+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Synaptic disintegrator", range: "36\"", a: 1, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Heavy", "Precision"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 2, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Hyperspace Hunters"]
                },
                wargearOptions: ["None"],
                composition: { min: 5, max: 10 },
                compositionText: "5-10 Deathmarks. Every model is equipped with: synaptic disintegrator; close combat weapon.",
                keywords: ["Infantry", "Deathmarks"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-triarch-praetorians",
                name: "Triarch Praetorians",
                role: "infantry",
                points: [{ models: 5, cost: 90 }, { models: 10, cost: 180 }],
                stats: { m: "10\"", t: 5, sv: "3+", w: 2, ld: "7+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Particle caster", range: "12\"", a: 3, bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Devastating Wounds", "Pistol"] },
                        { name: "Rod of covenant", range: "12\"", a: 1, bs: "3+", s: 5, ap: -2, d: 2, keywords: [] }
                    ],
                    melee: [
                        { name: "Rod of covenant", range: "Melee", a: 3, ws: "3+", s: 5, ap: -2, d: 2, keywords: [] },
                        { name: "Voidblade", range: "Melee", a: 4, ws: "3+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Relentless Combatants"]
                },
                wargearOptions: [
                    "All models can each have their rod of covenant replaced with 1 particle caster and 1 voidblade."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "5-10 Triarch Praetorians. Every model is equipped with: rod of covenant.",
                keywords: ["Infantry", "Fly", "Triarch", "Praetorians"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-lokhust-destroyers",
                name: "Lokhust Destroyers",
                role: "mounted",
                points: [{ models: 1, cost: 40 }, { models: 2, cost: 60 }, { models: 3, cost: 90 }, { models: 6, cost: 180 }],
                stats: { m: "8\"", t: 6, sv: "3+", w: 3, ld: "7+", oc: 2 },
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Gauss cannon", range: "24\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 2, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Hard-wired for Destruction"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 6 },
                compositionText: "1-6 Lokhust Destroyers. Every model is equipped with: gauss cannon; close combat weapon.",
                leaderText: "Can be led by Lokhust Lord.",
                keywords: ["Mounted", "Fly", "Destroyer Cult", "Lokhust Destroyers"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-lokhust-heavy-destroyers",
                name: "Lokhust Heavy Destroyers",
                role: "mounted",
                points: [{ models: 1, cost: 55 }, { models: 2, cost: 110 }, { models: 3, cost: 165 }],
                stats: { m: "8\"", t: 6, sv: "3+", w: 4, ld: "7+", oc: 2 },
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Enmitic exterminator", range: "36\"", a: 6, bs: "3+", s: 6, ap: -1, d: 1, keywords: ["Heavy", "Rapid Fire 6", "Sustained Hits 1"] },
                        { name: "Gauss destructor", range: "48\"", a: 1, bs: "3+", s: 14, ap: -4, d: 6, keywords: ["Heavy", "Lethal Hits"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 2, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Optimised for Slaughter"]
                },
                wargearOptions: [
                    "Any number of models can each have their gauss destructor replaced with 1 enmitic exterminator."
                ],
                composition: { min: 1, max: 3 },
                compositionText: "1-3 Lokhust Heavy Destroyers. Every model is equipped with: gauss destructor; close combat weapon.",
                leaderText: "Can be led by Lokhust Lord.",
                keywords: ["Mounted", "Fly", "Destroyer Cult", "Lokhust Heavy Destroyers"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-flayed-ones",
                name: "Flayed Ones",
                role: "infantry",
                points: [{ models: 5, cost: 60 }, { models: 10, cost: 120 }],
                stats: { m: "5\"", t: 4, sv: "4+", w: 1, ld: "7+", oc: 1 },
                baseSize: "28.5mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Flayer claws", range: "Melee", a: 4, ws: "3+", s: 4, ap: -1, d: 1, keywords: ["Sustained Hits 1", "Twin-linked"] }
                    ]
                },
                abilities: {
                    core: ["Infiltrators", "Stealth"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Flesh Hunger"]
                },
                wargearOptions: ["None"],
                composition: { min: 5, max: 10 },
                compositionText: "5-10 Flayed Ones. Every model is equipped with: flayer claws.",
                keywords: ["Infantry", "Flayed Ones"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-skorpekh-destroyers",
                name: "Skorpekh Destroyers",
                role: "infantry",
                points: [{ models: 3, cost: 90 }, { models: 6, cost: 180 }],
                stats: { m: "8\"", t: 6, sv: "3+", w: 3, ld: "7+", oc: 2 },
                baseSize: "50mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Skorpekh hyperphase weapons", range: "Melee", a: 4, ws: "3+", s: 7, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Plasmacyte"],
                    other: ["Whirling Onslaught"]
                },
                wargearOptions: [
                    "For every 3 models in this unit, this unit can have 1 Plasmacyte."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Skorpekh Destroyers. Every model is equipped with: Skorpekh hyperphase weapons.",
                keywords: ["Infantry", "Destroyer Cult", "Skorpekh Destroyers"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-ophydian-destroyers",
                name: "Ophydian Destroyers",
                role: "infantry",
                points: [{ models: 3, cost: 80 }, { models: 6, cost: 160 }],
                stats: { m: "10\"", t: 5, sv: "4+", w: 3, ld: "7+", oc: 2 },
                baseSize: "50mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Ophydian hyperphase weapons", range: "Melee", a: 5, ws: "3+", s: 4, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Plasmacyte"],
                    other: ["Tunnelling Horrors"]
                },
                wargearOptions: [
                    "For every 3 models in this unit, this unit can have 1 Plasmacyte."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Ophydian Destroyers. Every model is equipped with: Ophydian hyperphase weapons.",
                keywords: ["Infantry", "Destroyer Cult", "Ophydian Destroyers"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-cryptothralls",
                name: "Cryptothralls",
                role: "infantry",
                points: [{ models: 2, cost: 60 }],
                stats: { m: "5\"", t: 4, sv: "3+", w: 3, ld: "8+", oc: 1 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Scouring eye", range: "6\"", a: 2, bs: "4+", s: 5, ap: -1, d: 1, keywords: [] }
                    ],
                    melee: [
                        { name: "Scythed limbs", range: "Melee", a: 4, ws: "4+", s: 5, ap: -1, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Bound Creation", "Systematic Vigour", "Cryptek Retinue"]
                },
                wargearOptions: ["None"],
                composition: { min: 2, max: 2 },
                compositionText: "2 Cryptothralls. Every model is equipped with: scouring eye; scythed limbs.",
                keywords: ["Infantry", "Cryptothralls"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-scarab-swarms",
                name: "Canoptek Scarab Swarms",
                role: "infantry",
                points: [{ models: 3, cost: 40 }, { models: 6, cost: 80 }],
                stats: { m: "10\"", t: 2, sv: "6+", w: 4, ld: "8+", oc: 0 },
                baseSize: "40mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Feeder mandibles", range: "Melee", a: 6, ws: "5+", s: 2, ap: 0, d: 1, keywords: ["Lethal Hits"] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Self-destruction", "Chittering Swarm"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Canoptek Scarab Swarms. Every model is equipped with: feeder mandibles.",
                keywords: ["Swarm", "Fly", "Canoptek", "Scarab Swarms"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-wraiths",
                name: "Canoptek Wraiths",
                role: "mounted",
                points: [{ models: 3, cost: 110 }, { models: 6, cost: 220 }],
                stats: { m: "10\"", t: 6, sv: "3+", w: 4, ld: "8+", oc: 2 },
                invuln: "4+",
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Particle caster", range: "12\"", a: 3, bs: "4+", s: 5, ap: 0, d: 1, keywords: ["Devastating Wounds", "Pistol"] },
                        { name: "Transdimensional beamer", range: "12\"", a: 1, bs: "4+", s: 4, ap: -2, d: 3, keywords: [] }
                    ],
                    melee: [
                        { name: "Vicious claws", range: "Melee", a: 4, ws: "4+", s: 6, ap: -1, d: 2, keywords: [] },
                        { name: "Whip coils", range: "Melee", a: 8, ws: "4+", s: 5, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Wraith Form"]
                },
                wargearOptions: [
                    "Any number of models can each be equipped with 1 particle caster or 1 transdimensional beamer.",
                    "Any number of models can each have their vicious claws replaced with whip coils."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Canoptek Wraiths. Every model is equipped with: vicious claws.",
                keywords: ["Beasts", "Fly", "Canoptek", "Wraiths"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-reanimator",
                name: "Canoptek Reanimator",
                role: "vehicle",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "8\"", t: 6, sv: "3+", w: 6, ld: "7+", oc: 3 },
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Atomiser beam", range: "12\"", a: 3, bs: "4+", s: 6, ap: -2, d: 1, keywords: [] }
                    ],
                    melee: [
                        { name: "Reanimator's claws", range: "Melee", a: 4, ws: "4+", s: 5, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 4+"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Nanoscarab Reanimation Beam (Aura)"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Canoptek Reanimator. This model is equipped with: 2 atomiser beams; Reanimator's claws.",
                keywords: ["Vehicle", "Walker", "Canoptek", "Reanimator"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-doomstalker",
                name: "Canoptek Doomstalker",
                role: "vehicle",
                points: [{ models: 1, cost: 140 }],
                stats: { m: "8\"", t: 8, sv: "3+", w: 12, ld: "8+", oc: 4 },
                invuln: "4+",
                baseSize: "90mm",
                weapons: {
                    ranged: [
                        { name: "Doomsday blaster", range: "48\"", a: "D6+1", bs: "4+", s: 14, ap: -3, d: 3, keywords: ["Blast", "Heavy"] },
                        { name: "Twin gauss flayer", range: "24\"", a: 1, bs: "4+", s: 4, ap: 0, d: 1, keywords: ["Lethal Hits", "Rapid Fire 1", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Doomstalker limbs", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Sentinel Construct", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Canoptek Doomstalker. This model is equipped with: doomsday blaster; twin gauss flayer; Doomstalker limbs.",
                keywords: ["Vehicle", "Walker", "Canoptek", "Doomstalker"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-tomb-blades",
                name: "Tomb Blades",
                role: "mounted",
                points: [{ models: 3, cost: 75 }, { models: 6, cost: 150 }],
                stats: { m: "12\"", t: 5, sv: "4+", w: 2, ld: "7+", oc: 2 },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Particle beamer", range: "18\"", a: "D6", bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Blast", "Devastating Wounds"] },
                        { name: "Twin gauss blaster", range: "24\"", a: 2, bs: "3+", s: 5, ap: -1, d: 1, keywords: ["Lethal Hits", "Twin-linked"] },
                        { name: "Twin tesla carbine", range: "24\"", a: 2, bs: "3+", s: 5, ap: 0, d: 1, keywords: ["Assault", "Sustained Hits 2", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 1, ws: "4+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Scouts 9\""],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Nebuloscope", "Shadowloom", "Shieldvanes"],
                    other: ["Evasion Engrams"]
                },
                wargearOptions: [
                    "Any number of models can each have their twin gauss blaster replaced with 1 particle beamer or 1 twin tesla carbine.",
                    "Any number of models can each be equipped with 1 shieldvanes.",
                    "Any number of models can each be equipped with 1 nebuloscope or 1 shadowloom."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Tomb Blades. Every model is equipped with: twin gauss blaster; close combat weapon.",
                keywords: ["Mounted", "Fly", "Tomb Blades"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-triarch-stalker",
                name: "Triarch Stalker",
                role: "vehicle",
                points: [{ models: 1, cost: 110 }],
                stats: { m: "8\"", t: 8, sv: "3+", w: 12, ld: "7+", oc: 4 },
                invuln: "4+",
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Heat ray - dispersed", range: "12\"", a: "2D6", bs: "N/A", s: 5, ap: -1, d: 1, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Heat ray - focused", range: "18\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 4"] },
                        { name: "Particle shredder", range: "18\"", a: "D6+6", bs: "2+", s: 7, ap: 0, d: 1, keywords: ["Blast", "Devastating Wounds"] },
                        { name: "Heavy gauss cannon array", range: "24\"", a: 6, bs: "3+", s: 8, ap: -2, d: 2, keywords: ["Lethal Hits"] }
                    ],
                    melee: [
                        { name: "Stalker's forelimbs", range: "Melee", a: 4, ws: "3+", s: 7, ap: -1, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Scouts 8\""],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Targeting Relay"]
                },
                wargearOptions: [
                    "This model's heat ray can be replaced with 1 particle shredder or 1 heavy gauss cannon array."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Triarch Stalker. This model is equipped with: heat ray; Stalker's forelimbs.",
                keywords: ["Vehicle", "Walker", "Triarch", "Stalker"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-overlord-translocation-shroud",
                name: "Overlord with Translocation Shroud",
                role: "character",
                points: [{ models: 1, cost: 85 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Overlord's blade", range: "Melee", a: 4, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Resurrection Orb"],
                    other: ["My Will Be Done", "Translocation Shroud"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Overlord with Translocation Shroud. This model is equipped with: Overlord's blade; resurrection orb.",
                leaderText: "Can be attached to Immortals, Lychguard, Necron Warriors.",
                keywords: ["Infantry", "Character", "Noble", "Overlord", "Overlord with Translocation Shroud"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-anrakyr-the-traveller",
                name: "Anrakyr the Traveller",
                role: "character",
                points: [{ models: 1, cost: 95 }],
                stats: { m: "5\"", t: 5, sv: "2+", w: 6, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "25mm",
                weapons: {
                    ranged: [
                        { name: "Tachyon arrow", range: "72\"", a: 1, bs: "2+", s: 16, ap: -5, d: "D6+2", keywords: ["One Shot"] }
                    ],
                    melee: [
                        { name: "Warscythe", range: "Melee", a: 4, ws: "2+", s: 8, ap: -3, d: 2, keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Lord of the Pyrrhian Eternals", "Mind in the Machine", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Anrakyr the Traveller. This model is equipped with: tachyon arrow; warscythe.",
                leaderText: "Can be attached to Immortals.",
                keywords: ["Infantry", "Character", "Epic Hero", "Noble", "Anrakyr the Traveller"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-geomancer",
                name: "Geomancer",
                role: "character",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "8\"", t: 4, sv: "4+", w: 4, ld: "6+", oc: 1 },
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Tremorglaive - reverberating beam", range: "18\"", a: 2, bs: "4+", s: 8, ap: -2, d: 2, keywords: ["Melta 2"] },
                        { name: "Tremorglaive - shock wave pulse", range: "18\"", a: "D6+2", bs: "N/A", s: 4, ap: 0, d: 1, keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Tremorglaive", range: "Melee", a: 2, ws: "4+", s: 8, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Vanguard Protocols", "Obelisk Node Control"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Geomancer. This model is equipped with: tremorglaive.",
                leaderText: "Can be attached to Canoptek Macrocytes, Immortals, Necron Warriors.",
                keywords: ["Infantry", "Character", "Cryptek", "Geomancer"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-nekrosor-ammentar",
                name: "Nekrosor Ammentar",
                role: "character",
                points: [{ models: 1, cost: 185 }],
                stats: { m: "10\"", t: 8, sv: "3+", w: 9, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "80mm",
                weapons: {
                    ranged: [
                        { name: "Enmitic disintegrators", range: "18\"", a: 4, bs: "2+", s: 6, ap: -2, d: 1, keywords: ["Ignores Cover", "Pistol", "Sustained Hits 2"] }
                    ],
                    melee: [
                        { name: "Blade tail and whip coils", range: "Melee", a: 6, ws: "2+", s: 6, ap: -1, d: 1, keywords: ["Extra Attacks"] },
                        { name: "Unmaker Gauntlet", range: "Melee", a: 6, ws: "2+", s: 10, ap: -3, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike", "Fights First"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Nullstone Field Generator (Aura)"],
                    other: ["Protective Disciples", "Infectious Murder-madness (Aura)", "Prophet of Destruction"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Nekrosor Ammentar. This model is equipped with: enmitic disintegrators; Unmaker Gauntlet; blade tail and whip coils; nullstone field generator.",
                keywords: ["Infantry", "Character", "Epic Hero", "Destroyer Cult", "Nekrosor Ammentar"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-spyders",
                name: "Canoptek Spyders",
                role: "vehicle",
                points: [{ models: 1, cost: 75 }, { models: 2, cost: 150 }],
                stats: { m: "5\"", t: 7, sv: "3+", w: 6, ld: "8+", oc: 2 },
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Particle beamer", range: "18\"", a: "D6", bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Blast", "Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Automaton claws", range: "Melee", a: 5, ws: "4+", s: 8, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Fabricator Claw Array (Aura)", "Gloom Prism (Aura)"],
                    other: ["Canoptek Swarm"]
                },
                wargearOptions: [
                    "Any number of models can each be equipped with 2 particle beamers.",
                    "Any number of models can each be equipped with 1 fabricator claw array.",
                    "Any number of models can each be equipped with 1 gloom prism."
                ],
                composition: { min: 1, max: 2 },
                compositionText: "1-2 Canoptek Spyders. Every model is equipped with: automaton claws.",
                keywords: ["Vehicle", "Fly", "Canoptek", "Spyders"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-acanthrites",
                name: "Canoptek Acanthrites",
                role: "mounted",
                points: [{ models: 3, cost: 85 }, { models: 6, cost: 170 }],
                stats: { m: "12\"", t: 5, sv: "3+", w: 2, ld: "8+", oc: 2 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Cutting beam", range: "12\"", a: 1, bs: "4+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] }
                    ],
                    melee: [
                        { name: "Voidblade", range: "Melee", a: 3, ws: "4+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Infiltrators"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Damaged Armour", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Canoptek Acanthrites. Every model is equipped with: cutting beam; voidblade.",
                keywords: ["Beasts", "Fly", "Canoptek", "Acanthrites"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-macrocytes",
                name: "Canoptek Macrocytes",
                role: "mounted",
                points: [{ models: 5, cost: 85 }],
                stats: { m: "8\"", t: 3, sv: "4+", w: 1, ld: "8+", oc: 1 },
                baseSize: "28.5mm",
                weapons: {
                    ranged: [
                        { name: "Atomiser beam", range: "12\"", a: 1, bs: "4+", s: 6, ap: -1, d: 1, keywords: [] },
                        { name: "Gauss scalpel", range: "18\"", a: 1, bs: "4+", s: 4, ap: -1, d: 1, keywords: ["Lethal Hits"] },
                        { name: "Tesla caster", range: "18\"", a: 1, bs: "4+", s: 5, ap: 0, d: 1, keywords: ["Assault", "Sustained Hits 1"] }
                    ],
                    melee: [
                        { name: "Claws", range: "Melee", a: 2, ws: "4+", s: 4, ap: -1, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Scouts 8\""],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Accelerator Mandible", "Nanoscarab Projector"],
                    other: ["Harassment Swarm (Aura)"]
                },
                wargearOptions: [
                    "All models can each have their gauss scalpel replaced with 1 tesla caster.",
                    "1 model's gauss scalpel or tesla caster can be replaced with 1 atomiser beam and 1 nanoscarab projector.",
                    "1 model's gauss scalpel or tesla caster can be replaced with 1 accelerator mandible."
                ],
                composition: { min: 5, max: 5 },
                compositionText: "5 Canoptek Macrocytes. Every model is equipped with: gauss scalpel; claws.",
                leaderText: "Can be led by Geomancer.",
                keywords: ["Beasts", "Fly", "Canoptek", "Macrocytes"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-tomb-crawlers",
                name: "Canoptek Tomb Crawlers",
                role: "mounted",
                points: [{ models: 2, cost: 50 }],
                stats: { m: "5\"", t: 4, sv: "3+", w: 3, ld: "8+", oc: 1 },
                baseSize: "50mm",
                weapons: {
                    ranged: [
                        { name: "Transdimensional isolator", range: "12\"", a: 2, bs: "4+", s: 4, ap: -2, d: 2, keywords: [] },
                        { name: "Twin gauss reaper", range: "12\"", a: 2, bs: "4+", s: 4, ap: -1, d: 1, keywords: ["Lethal Hits", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Claws", range: "Melee", a: 4, ws: "4+", s: 6, ap: -1, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Canoptek Retinue", "Weapon Sentinels"]
                },
                wargearOptions: [
                    "1 model's twin gauss reaper can be replaced with 1 transdimensional isolator."
                ],
                composition: { min: 2, max: 2 },
                compositionText: "2 Canoptek Tomb Crawlers. Every model is equipped with: twin gauss reaper; claws.",
                keywords: ["Beasts", "Canoptek", "Tomb Crawlers"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-tomb-sentinel",
                name: "Canoptek Tomb Sentinel",
                role: "monster",
                points: [{ models: 1, cost: 115 }],
                stats: { m: "10\"", t: 9, sv: "3+", w: 9, ld: "8+", oc: 3 },
                invuln: "4+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Exile cannon", range: "18\"", a: "D6+1", bs: "4+", s: 10, ap: -2, d: 2, keywords: ["Blast"] }
                    ],
                    melee: [
                        { name: "Tomb Sentinel claws", range: "Melee", a: 6, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Gloom Prism (Aura)"],
                    other: ["Aggressor Guardian", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Canoptek Tomb Sentinel. This model is equipped with: exile cannon; Tomb Sentinel claws; gloom prism.",
                keywords: ["Monster", "Canoptek", "Tomb Sentinel"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-canoptek-tomb-stalker",
                name: "Canoptek Tomb Stalker",
                role: "monster",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "10\"", t: 9, sv: "3+", w: 9, ld: "8+", oc: 3 },
                invuln: "4+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Gauss slicers", range: "24\"", a: 8, bs: "4+", s: 5, ap: -1, d: 1, keywords: ["Lethal Hits"] }
                    ],
                    melee: [
                        { name: "Tomb Stalker claws", range: "Melee", a: 6, ws: "4+", s: 6, ap: -1, d: 2, keywords: ["Sustained Hits 1"] }
                    ]
                },
                abilities: {
                    core: ["Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: ["Gloom Prism (Aura)"],
                    other: ["Snaking Ambush"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Canoptek Tomb Stalker. This model is equipped with: gauss slicers; Tomb Stalker claws; gloom prism.",
                keywords: ["Monster", "Canoptek", "Tomb Stalker"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-annihilation-barge",
                name: "Annihilation Barge",
                role: "vehicle",
                points: [{ models: 1, cost: 105 }],
                stats: { m: "10\"", t: 8, sv: "3+", w: 9, ld: "7+", oc: 3 },
                invuln: "4+",
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Gauss cannon", range: "24\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] },
                        { name: "Tesla cannon", range: "24\"", a: 4, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Sustained Hits 2"] },
                        { name: "Twin tesla destructor", range: "36\"", a: 6, bs: "3+", s: 8, ap: 0, d: 2, keywords: ["Sustained Hits 2", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Malevolent Arcing"]
                },
                wargearOptions: [
                    "This model's gauss cannon can be replaced with 1 tesla cannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Annihilation Barge. This model is equipped with: gauss cannon; twin tesla destructor; armoured bulk.",
                keywords: ["Vehicle", "Fly", "Annihilation Barge"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-doom-scythe",
                name: "Doom Scythe",
                role: "vehicle",
                points: [{ models: 1, cost: 230 }],
                stats: { m: "20+\"", t: 9, sv: "3+", w: 12, ld: "7+", oc: 0 },
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Heavy death ray", range: "36\"", a: 3, bs: "3+", s: 16, ap: -4, d: "D6+1", keywords: ["Sustained Hits D3"] },
                        { name: "Twin tesla destructor", range: "36\"", a: 6, bs: "3+", s: 8, ap: 0, d: 2, keywords: ["Sustained Hits 2", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Atavistic Instigation", "Damaged: 1-4 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Doom Scythe. This model is equipped with: heavy death ray; twin tesla destructor; armoured bulk.",
                keywords: ["Vehicle", "Aircraft", "Fly", "Doom Scythe"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-doomsday-ark",
                name: "Doomsday Ark",
                role: "vehicle",
                points: [{ models: 1, cost: 200 }],
                stats: { m: "10\"", t: 9, sv: "3+", w: 14, ld: "7+", oc: 5 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Doomsday cannon", range: "72\"", a: "D6+1", bs: "3+", s: 18, ap: -4, d: 4, keywords: ["Blast", "Heavy"] },
                        { name: "Gauss flayer array", range: "24\"", a: 5, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Lethal Hits", "Rapid Fire 5"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Overwhelming Obliteration", "Damaged: 1-5 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Doomsday Ark. This model is equipped with: doomsday cannon; 2 gauss flayer arrays; armoured bulk.",
                keywords: ["Vehicle", "Fly", "Doomsday Ark"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-ghost-ark",
                name: "Ghost Ark",
                role: "vehicle",
                points: [{ models: 1, cost: 115 }],
                stats: { m: "10\"", t: 9, sv: "3+", w: 14, ld: "7+", oc: 3 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Gauss flayer array", range: "24\"", a: 5, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Lethal Hits", "Rapid Fire 5"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Repair Barge", "Transport: 10 Necron Warrior models and 1 Necrons Infantry Character model"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Ghost Ark. This model is equipped with: 2 gauss flayer arrays; armoured bulk.",
                keywords: ["Vehicle", "Fly", "Transport", "Dedicated Transport", "Ghost Ark"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-monolith",
                name: "Monolith",
                role: "vehicle",
                points: [{ models: 1, cost: 400 }],
                stats: { m: "8\"", t: 13, sv: "2+", w: 22, ld: "7+", oc: 8 },
                baseSize: "160mm",
                weapons: {
                    ranged: [
                        { name: "Death ray", range: "24\"", a: 1, bs: "3+", s: 12, ap: -4, d: "D6+1", keywords: ["Sustained Hits D3"] },
                        { name: "Gauss flux arc", range: "24\"", a: 3, bs: "3+", s: 6, ap: -1, d: 1, keywords: ["Lethal Hits", "Rapid Fire 3"] },
                        { name: "Particle whip", range: "24\"", a: "3D6", bs: "3+", s: 8, ap: -1, d: 2, keywords: ["Blast", "Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Portal of exile", range: "Melee", a: 6, ws: "2+", s: 8, ap: -2, d: 3, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Eternity Gate", "Damaged: 1-7 Wounds Remaining"]
                },
                wargearOptions: [
                    "This model's 4 gauss flux arcs can be replaced with 4 death rays."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Monolith. This model is equipped with: 4 gauss flux arcs; particle whip; portal of exile.",
                keywords: ["Vehicle", "Titanic", "Fly", "Towering", "Monolith"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-night-scythe",
                name: "Night Scythe",
                role: "vehicle",
                points: [{ models: 1, cost: 145 }],
                stats: { m: "20+\"", t: 9, sv: "3+", w: 12, ld: "7+", oc: 0 },
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Twin tesla destructor", range: "36\"", a: 6, bs: "3+", s: 8, ap: 0, d: 2, keywords: ["Sustained Hits 2", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Translocation Beams", "Damaged: 1-4 Wounds Remaining", "Transport: 1 Necrons Infantry unit"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Night Scythe. This model is equipped with: twin tesla destructor; armoured bulk.",
                keywords: ["Vehicle", "Aircraft", "Fly", "Transport", "Night Scythe"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-obelisk",
                name: "Obelisk",
                role: "vehicle",
                points: [{ models: 1, cost: 300 }],
                stats: { m: "8\"", t: 13, sv: "2+", w: 24, ld: "7+", oc: 8 },
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Tesla sphere", range: "24\"", a: 6, bs: "3+", s: 7, ap: 0, d: 1, keywords: ["Anti-Fly 4+", "Sustained Hits 2"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 6, ws: "4+", s: 8, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6", "Deep Strike"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Gravitic Pulse", "Damaged: 1-8 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Obelisk. This model is equipped with: 4 tesla spheres; armoured bulk.",
                keywords: ["Vehicle", "Titanic", "Fly", "Towering", "Obelisk"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-convergence-of-dominion",
                name: "Convergence of Dominion",
                role: "fortification",
                points: [{ models: 1, cost: 60 }, { models: 2, cost: 120 }, { models: 3, cost: 180 }],
                stats: { m: "-", t: 9, sv: "3+", w: 7, ld: "8+", oc: 0 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Transdimensional abductor", range: "18\"", a: 3, bs: "4+", s: 6, ap: -2, d: 3, keywords: [] }
                    ],
                    melee: []
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Reanimation Nodes (Aura)", "Ancient Cover", "Fortification", "Deployment"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 3 },
                compositionText: "1-3 Convergence of Dominion Starsteles. Every model is equipped with: transdimensional abductor.",
                keywords: ["Fortification", "Vehicle", "Convergence of Dominion"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-tesseract-vault",
                name: "Tesseract Vault",
                role: "vehicle",
                points: [{ models: 1, cost: 425 }],
                stats: { m: "8\"", t: 12, sv: "2+", w: 24, ld: "7+", oc: 8 },
                invuln: "4+",
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Tesla spheres", range: "24\"", a: 6, bs: "3+", s: 7, ap: 0, d: 1, keywords: ["Sustained Hits 2"] },
                        { name: "Antimatter Meteor", range: "24\"", a: "D6+3", bs: "3+", s: 10, ap: -3, d: 3, keywords: ["Blast", "Devastating Wounds", "Indirect Fire", "C'tan Power"] },
                        { name: "Cosmic Fire", range: "18\"", a: "3D6", bs: "N/A", s: 6, ap: -2, d: 1, keywords: ["Ignores Cover", "Devastating Wounds", "Torrent", "C'tan Power"] },
                        { name: "Time's Arrow", range: "24\"", a: 1, bs: "2+", s: 3, ap: -2, d: 6, keywords: ["Anti-Character 4+", "Devastating Wounds", "Precision", "C'tan Power"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 6, ws: "4+", s: 8, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["The C'tan Powers", "Damaged: 1-8 Wounds Remaining"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Tesseract Vault. This model is equipped with: 4 tesla spheres; armoured bulk.",
                keywords: ["Vehicle", "Titanic", "Fly", "Towering", "Tesseract Vault"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-tesseract-ark",
                name: "Tesseract Ark",
                role: "vehicle",
                points: [{ models: 1, cost: 130 }],
                stats: { m: "9\"", t: 9, sv: "3+", w: 10, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Gauss cannon", range: "24\"", a: 3, bs: "3+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] },
                        { name: "Particle beamer", range: "18\"", a: "D6", bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Blast", "Devastating Wounds"] },
                        { name: "Tesla cannon", range: "24\"", a: 4, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Sustained Hits 2"] },
                        { name: "Tesseract singularity chamber – particle hurricane", range: "12\"", a: "D6+3", bs: "N/A", s: 6, ap: -1, d: 2, keywords: ["Ignores Cover", "Torrent"] },
                        { name: "Tesseract singularity chamber – seismic lash", range: "36\"", a: "D3", bs: "3+", s: 9, ap: -3, d: "D6+1", keywords: ["Blast"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Gravitational Field", "Legends datasheet"]
                },
                wargearOptions: [
                    "This model's 2 tesla cannons can be replaced with one of the following: 2 gauss cannons; 2 particle beamers."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Tesseract Ark. This model is equipped with: tesseract singularity chamber; 2 tesla cannons; armoured bulk.",
                keywords: ["Vehicle", "Fly", "Tesseract Ark"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-seraptek-heavy-construct",
                name: "Seraptek Heavy Construct",
                role: "vehicle",
                points: [{ models: 1, cost: 540 }],
                stats: { m: "10\"", t: 12, sv: "3+", w: 24, ld: "7+", oc: 10 },
                invuln: "5+",
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Singularity generator", range: "36\"", a: "2D6", bs: "3+", s: 10, ap: -3, d: 4, keywords: ["Blast", "Devastating Wounds"] },
                        { name: "Synaptic obliterator", range: "48\"", a: 8, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Sustained Hits 2"] },
                        { name: "Transdimensional projector", range: "48\"", a: 2, bs: "3+", s: 24, ap: -4, d: "D6+4", keywords: [] }
                    ],
                    melee: [
                        { name: "Titanic forelimbs – strike", range: "Melee", a: 6, ws: "3+", s: 14, ap: -3, d: 5, keywords: [] },
                        { name: "Titanic forelimbs – sweep", range: "Melee", a: 12, ws: "3+", s: 8, ap: -1, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6+2"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Terrifying Monstrosity", "Titanic Walker", "Damaged: 1-9 Wounds Remaining", "Forge World datasheet"]
                },
                wargearOptions: [
                    "This model's 2 singularity generators can be replaced with 2 synaptic obliterators and 2 transdimensional projectors."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Seraptek Heavy Construct. This model is equipped with: 2 singularity generators; titanic forelimbs.",
                keywords: ["Vehicle", "Walker", "Titanic", "Towering", "Seraptek Heavy Construct"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-gauss-pylon",
                name: "Gauss Pylon",
                role: "fortification",
                points: [{ models: 1, cost: 210 }],
                stats: { m: "-", t: 12, sv: "3+", w: 22, ld: "7+", oc: 0 },
                invuln: "5+",
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Gauss annihilator", range: "120\"", a: 1, bs: "4+", s: 16, ap: -4, d: "D6+6", keywords: ["Anti-Fly 2+", "Lethal Hits"] },
                        { name: "Tesla arc", range: "6\"", a: 6, bs: "4+", s: 4, ap: 0, d: 1, keywords: ["Sustained Hits 2"] }
                    ],
                    melee: []
                },
                abilities: {
                    core: ["Deadly Demise D6+2"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Fortification", "Phase Shift Generator (Aura)", "Phase-shifted Cover", "Damaged: 1-7 Wounds Remaining", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Gauss Pylon. This model is equipped with: gauss annihilator; tesla arc.",
                keywords: ["Fortification", "Vehicle", "Towering", "Titanic", "Gauss Pylon"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-sentry-pylon",
                name: "Sentry Pylon",
                role: "fortification",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "-", t: 8, sv: "3+", w: 10, ld: "7+", oc: 0 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Focused death ray", range: "36\"", a: 6, bs: "4+", s: 8, ap: -2, d: 2, keywords: ["Sustained Hits 2"] },
                        { name: "Gauss exterminator", range: "48\"", a: 1, bs: "4+", s: 14, ap: -3, d: 6, keywords: ["Lethal Hits"] },
                        { name: "Heat cannon", range: "36\"", a: 2, bs: "4+", s: 9, ap: -4, d: "D6", keywords: ["Melta 4"] }
                    ],
                    melee: []
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Fortification", "Teleportation Matrix", "Phase-shifted Cover", "Legends datasheet"]
                },
                wargearOptions: [
                    "This model's gauss exterminator can be replaced with one of the following: 1 focused death ray; 1 heat cannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Sentry Pylon. This model is equipped with: gauss exterminator.",
                keywords: ["Fortification", "Vehicle", "Sentry Pylon"],
                factionKeywords: ["Necrons"]
            },
            {
                id: "nec-night-shroud",
                name: "Night Shroud",
                role: "vehicle",
                points: [{ models: 1, cost: 140 }],
                stats: { m: "20+\"", t: 9, sv: "3+", w: 14, ld: "7+", oc: 0 },
                baseSize: "120 x 92mm",
                weapons: {
                    ranged: [
                        { name: "Twin tesla destructor", range: "36\"", a: 6, bs: "3+", s: 8, ap: 0, d: 2, keywords: ["Sustained Hits 2", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured bulk", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Reanimation Protocols"],
                    wargear: [],
                    other: ["Death Sphere Bombardment", "Damaged: 1-5 Wounds Remaining", "Legends datasheet"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Night Shroud. This model is equipped with: twin tesla destructor; armoured bulk.",
                keywords: ["Vehicle", "Aircraft", "Fly", "Night Shroud"],
                factionKeywords: ["Necrons"]
            }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(necrons);
})();
