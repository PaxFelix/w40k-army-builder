/**
 * W40K Army Builder — Leagues of Votann (10th Edition)
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

    const votann = {
        id: "leagues-of-votann",
        name: "Leagues of Votann",
        icon: "\u2692\uFE0F",
        allegiance: "Xenos",
        flavour: "",

        // ─── ARMY RULES (names only — fill in text from your codex) ──────────
        armyRules: [
            {
                name: "Prioritised Efficiency",
                flavour: "",
                text: ""
            }
        ],

        // ─── DETACHMENTS (names only — fill in rule/strat/enhancement text) ──
        detachments: [
            {
                name: "Needgaârd Oathband",
                flavour: "",
                rule: { name: "Martial Leverage", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Oathbound Speculator", cost: 30, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Dead Reckoning", cost: 10, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Iron Ambassador", cost: 5, restriction: "LEAGUES OF VOTANN model equipped with an Autoch-pattern combi-bolter only.", text: "" },
                    { name: "Ancestral Crest", cost: 15, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Void Hardened", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Honour of the Hold", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ordered Retreat", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ancestral Sentence", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Huntr\u2019s Mark", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Reactive Reprisal", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Persecution Prospect",
                flavour: "",
                rule: { name: "Assailed from Every Angle", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Eye for Weakness", cost: 25, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Writ of Acquisition", cost: 10, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Surgical Saboteur", cost: 10, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Nomad Strategist", cost: 20, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Adaptable Avarice", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Frontier Momentum", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Exposed Flaws", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Ranger Tactics", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Claimstaker Reflex", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Dispersed Formation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Dêlve Assault Shift",
                flavour: "",
                rule: { name: "Fury from the Dêlve", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Dêlvwerke Navigator", cost: 25, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Multiwave System Jammer", cost: 10, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Quake Supervisor", cost: 20, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Piledriver", cost: 15, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Cyberstimm Infusion", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unstoppable Force", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Augmented Assault", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Tectonic Fracture", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Weavewërke Buttress", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Hidden Accessways", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Brandfast Oathband",
                flavour: "",
                rule: { name: "Mobile Sensor Relays", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Tactical Alchemy", cost: 10, restriction: "KÂHL model only.", text: "" },
                    { name: "Trivärg Cyber Implant", cost: 40, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Precursive Judgement", cost: 15, restriction: "KÂHL model only.", text: "" },
                    { name: "Signature Restoration", cost: 5, restriction: "IRON-MASTER model only.", text: "" },
                ],
                stratagems: [
                    { name: "Secure Positions", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Bastion Running", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Illuminated Priority", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Inexorable Efficiency", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Opportunistic Escalation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Vengeance Flare", cp: 2, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Hearthfyre Arsenal",
                flavour: "",
                rule: { name: "Optimal Application", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Fârstrydr Node", cost: 20, restriction: "IRON-MASTER or MEMNYR STRATEGIST model only.", text: "" },
                    { name: "Calculated Tenacity", cost: 15, restriction: "IRON-MASTER or MEMNYR STRATEGIST model only.", text: "" },
                    { name: "Mantle of Elders", cost: 10, restriction: "MEMNYR STRATEGIST model only.", text: "" },
                    { name: "Graviton Vault", cost: 5, restriction: "IRON-MASTER model only.", text: "" },
                ],
                stratagems: [
                    { name: "Unwavering Accuracy", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "First Concern", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Delayed-fire Rounds", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Wall of Steel", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Preventative Purge", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Cogitated Need", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Hearthband",
                flavour: "",
                rule: { name: "Methodical Annihilation", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Bastion Shield", cost: 25, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Quake Multigenerator", cost: 15, restriction: "KÂHL model only.", text: "" },
                    { name: "Ironskein", cost: 10, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "High Kâhl", cost: 30, restriction: "KÂHL model only.", text: "" },
                ],
                stratagems: [
                    { name: "Brëkkeknots", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Sure of Purpose", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Superior Craftsmanship", cp: 2, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Unyielding Aggression", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Materialisation Matrices", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Fury of the Hearth", cp: 1, type: "Battle Tactic", when: "", target: "", effect: "", restrictions: "" },
                ]
            },
            {
                name: "Mercenary Oathband",
                flavour: "",
                rule: { name: "Ruthless Reinvestment", flavour: "", text: "", restrictions: "" },
                enhancements: [
                    { name: "Mercenary Prospector", cost: 20, restriction: "KÂHL model only.", text: "" },
                    { name: "Metaphysical Brokerage", cost: 20, restriction: "MEMNYR STRATEGIST model only.", text: "" },
                    { name: "Etacarn SB9 Targeting Implant", cost: 15, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                    { name: "Asset Manipulator", cost: 25, restriction: "LEAGUES OF VOTANN model only.", text: "" },
                ],
                stratagems: [
                    { name: "Auxiliary Contract", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Optimal Expenditure", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Grand Artifice", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Privateer Arsenal", cp: 1, type: "Wargear", when: "", target: "", effect: "", restrictions: "" },
                    { name: "New Horizons", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                    { name: "Mobile Exploitation", cp: 1, type: "Strategic Ploy", when: "", target: "", effect: "", restrictions: "" },
                ]
            }
        ],

        // ─── UNITS ───────────────────────────────────────────────────────────
        units: [
            {
                id: "votann-kahl",
                name: "Kâhl",
                role: "character",
                points: [{ models: 1, cost: 65 }],
                stats: { m: "5\"", t: "5", sv: "3+", w: "4", ld: "7+", oc: "1" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern combi-bolter", range: "24\"", a: "4", bs: "2+", s: "4", ap: "0", d: "1", keywords: [] },
                        { name: "Volkanite disintegrator", range: "24\"", a: "3", bs: "2+", s: "5", ap: "0", d: "1", keywords: ["Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Forgewrought plasma axe", range: "Melee", a: "4", ws: "2+", s: "5", ap: "-2", d: "2", keywords: [] },
                        { name: "Mass gauntlet", range: "Melee", a: "3", ws: "3+", s: "8", ap: "-3", d: "3", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Rampart Crest", "Teleport Crest"],
                    other: ["Kindred Hero", "Seized Opportunity"]
                },
                wargearOptions: [
                    "The Autoch-pattern combi-bolter can be replaced with 1 volkanite disintegrator.",
                    "The forgewrought plasma axe can be replaced with 1 mass gauntlet.",
                    "The rampart crest can be replaced with 1 teleport crest."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Kâhl",
                leaderText: "Can be attached to Einhyr Hearthguard or Hearthkyn Warriors.",
                keywords: ["Infantry", "Character", "Kâhl"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-einhyr-champion",
                name: "Einhyr Champion",
                role: "character",
                points: [{ models: 1, cost: 70 }],
                stats: { m: "5\"", t: "5", sv: "2+", w: "5", ld: "7+", oc: "1" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern combi-bolter", range: "24\"", a: "4", bs: "2+", s: "4", ap: "0", d: "1", keywords: [] }
                    ],
                    melee: [
                        { name: "Darkstar axe", range: "Melee", a: "6", ws: "2+", s: "6", ap: "-3", d: "2", keywords: [] },
                        { name: "Mass hammer", range: "Melee", a: "3", ws: "3+", s: "12", ap: "-3", d: "D6+1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Teleport Crest", "Weavefield Crest"],
                    other: ["Exemplar of the Einhyr", "Mass Driver Accelerators"]
                },
                wargearOptions: [
                    "The mass hammer can be replaced with 1 darkstar axe.",
                    "The weavefield crest can be replaced with 1 teleport crest."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Einhyr Champion",
                leaderText: "Can be attached to Einhyr Hearthguard.",
                keywords: ["Infantry", "Character", "Exoarmour", "Einhyr Champion"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-grimnyr",
                name: "Grimnyr",
                role: "character",
                points: [{ models: 3, cost: 65 }],
                statLines: [
                    { name: "Grimnyr", m: "5\"", t: "5", sv: "4+", w: "4", ld: "6+", oc: "1" },
                    { name: "CORV", m: "5\"", t: "5", sv: "4+", w: "1", ld: "6+", oc: "1" }
                ],
                invuln: "4+",
                baseSize: "Grimnyr 40mm, CORV 25mm",
                weapons: {
                    ranged: [
                        { name: "Ancestral Wrath – witchfire", range: "24\"", a: "3", bs: "3+", s: "6", ap: "-2", d: "D3", keywords: ["Psychic"] },
                        { name: "Ancestral Wrath – focused witchfire", range: "24\"", a: "6", bs: "3+", s: "6", ap: "-2", d: "D3", keywords: ["Hazardous", "Psychic"] },
                        { name: "Autoch-pattern bolter", range: "24\"", a: "2", bs: "4+", s: "4", ap: "0", d: "1", keywords: [] }
                    ],
                    melee: [
                        { name: "Ancestral ward stave", range: "Melee", a: "2", ws: "3+", s: "7", ap: "-1", d: "D3", keywords: ["Psychic"] },
                        { name: "Close combat weapon", range: "Melee", a: "1", ws: "4+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Fortify", "Grimnyr's Regard"]
                },
                wargearOptions: ["None"],
                composition: { min: 3, max: 3 },
                compositionText: "1 Grimnyr and 2 CORVs",
                leaderText: "Can be attached to Hearthkyn Warriors.",
                keywords: ["Infantry", "Character", "Psyker", "Grimnyr"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-uthar-the-destined",
                name: "Ûthar the Destined",
                role: "character",
                points: [{ models: 1, cost: 95 }],
                stats: { m: "5\"", t: "5", sv: "3+", w: "5", ld: "6+", oc: "1" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Volkanite disintegrator", range: "24\"", a: "3", bs: "2+", s: "5", ap: "0", d: "1", keywords: ["Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Blade of the Ancestors", range: "Melee", a: "5", ws: "2+", s: "6", ap: "-3", d: "2", keywords: ["Devastating Wounds"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Rampart Crest"],
                    other: ["Ancestral Fortune", "Grim Efficiency"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Ûthar the Destined",
                leaderText: "Can be attached to Einhyr Hearthguard or Hearthkyn Warriors.",
                keywords: ["Infantry", "Character", "Epic Hero", "Kâhl", "Ûthar the Destined"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-berehk-stornbrow",
                name: "Berehk Stornbröw",
                role: "character",
                points: [{ models: 1, cost: 95 }],
                stats: { m: "6\"", t: "6", sv: "5+", w: "5", ld: "7+", oc: "1" },
                invuln: "5+",
                baseSize: "40mm",
                weapons: {
                    ranged: [],
                    melee: [
                        { name: "Kromlôk's Revenge – graviton strikes", range: "Melee", a: "4", ws: "2+", s: "10", ap: "-2", d: "4", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "Kromlôk's Revenge – plasma sweeps", range: "Melee", a: "8", ws: "2+", s: "7", ap: "-2", d: "2", keywords: [] },
                        { name: "Warforge Gauntlets", range: "Melee", a: "2", ws: "2+", s: "6", ap: "-2", d: "1", keywords: ["Extra Attacks"] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 4+", "Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Break the Foe", "Relentless Avalanche"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Berehk Stornbröw",
                leaderText: "Can be attached to Cthonian Beserks.",
                keywords: ["Infantry", "Character", "Epic Hero", "Cthonian", "Berehk Stornbröw"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-buri-aegnirssen",
                name: "Buri Aegnirssen",
                role: "character",
                points: [{ models: 1, cost: 95 }],
                stats: { m: "5\"", t: "6", sv: "3+", w: "5", ld: "6+", oc: "1" },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolt pistol", range: "12\"", a: "1", bs: "2+", s: "4", ap: "0", d: "1", keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Bane – strike", range: "Melee", a: "5", ws: "2+", s: "12", ap: "-3", d: "3", keywords: ["Precision"] },
                        { name: "Bane – sweep", range: "Melee", a: "10", ws: "2+", s: "6", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Lone Operative", "Stealth"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Grudge-fuelled Fortitude", "Unhinged Vengeance"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Buri Aegnirssen",
                keywords: ["Infantry", "Character", "Epic Hero", "Buri Aegnirssen"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-brokhyr-iron-master",
                name: "Brôkhyr Iron-master",
                role: "character",
                points: [{ models: 5, cost: 75 }],
                statLines: [
                    { name: "Brôkhyr Iron-master", m: "5\"", t: "5", sv: "4+", w: "4", ld: "7+", oc: "1" },
                    { name: "Ironkin Assistant", m: "5\"", t: "5", sv: "4+", w: "1", ld: "7+", oc: "1" },
                    { name: "E-COG", m: "5\"", t: "5", sv: "4+", w: "1", ld: "7+", oc: "1" }
                ],
                baseSize: "Iron-master 32mm, Ironkin Assistant 28.5mm, E-COG 25mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolt pistol", range: "12\"", a: "1", bs: "3+", s: "4", ap: "0", d: "1", keywords: [] },
                        { name: "Graviton rifle", range: "18\"", a: "3", bs: "3+", s: "5", ap: "-1", d: "3", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "Las-beam cutter", range: "6\"", a: "1", bs: "4+", s: "6", ap: "-3", d: "1", keywords: [] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "1", ws: "4+", s: "3", ap: "0", d: "1", keywords: [] },
                        { name: "Graviton hammer", range: "Melee", a: "3", ws: "4+", s: "9", ap: "-1", d: "3", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "Manipulator arms", range: "Melee", a: "3", ws: "4+", s: "3", ap: "0", d: "1", keywords: [] },
                        { name: "Plasma torch", range: "Melee", a: "1", ws: "4+", s: "6", ap: "-3", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Brôkhyr Guild Support", "Multispectral Visor", "Forgewrought Expertise"]
                },
                wargearOptions: ["None"],
                composition: { min: 5, max: 5 },
                compositionText: "1 Brôkhyr Iron-master, 1 Ironkin Assistant and 3 E-COGs",
                leaderText: "Can be attached to Brôkhyr Thunderkyn or Hearthkyn Warriors.",
                keywords: ["Infantry", "Brôkhyr", "Character", "Iron-master"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-memnyr-strategist",
                name: "Memnyr Strategist",
                role: "character",
                points: [{ models: 1, cost: 45 }],
                stats: { m: "5\"", t: "5", sv: "4+", w: "4", ld: "7+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolt pistol", range: "12\"", a: "1", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "1", ws: "4+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Computational Mastermind", "Predictive Guidance"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Memnyr Strategist",
                leaderText: "Can be attached to Ironkin Steeljacks (Heavy Volkanite Disintegrators or Melee Weapons).",
                keywords: ["Infantry", "Character", "Memnyr Strategist"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-arkanyst-evaluator",
                name: "Arkanyst Evaluator",
                role: "character",
                points: [{ models: 1, cost: 65 }],
                stats: { m: "5\"", t: "5", sv: "3+", w: "4", ld: "7+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "Transmatter inverter – half charge", range: "12\"", a: "3", bs: "2+", s: "8", ap: "-1", d: "1", keywords: ["Rapid Fire 1"] },
                        { name: "Transmatter inverter – full charge", range: "18\"", a: "3", bs: "2+", s: "8", ap: "-2", d: "2", keywords: ["Hazardous", "Rapid Fire 2"] },
                        { name: "Transmatter inverter – overcharge", range: "24\"", a: "3", bs: "2+", s: "8", ap: "-3", d: "3", keywords: ["Hazardous", "Overcharge", "Rapid Fire 3"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "1", ws: "4+", s: "3", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Science Guild Support", "Resource Transmutation"]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Arkanyst Evaluator",
                keywords: ["Infantry", "Character", "Arkanyst Evaluator"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-hearthkyn-warriors",
                name: "Hearthkyn Warriors",
                role: "battleline",
                points: [{ models: 10, cost: 100 }],
                stats: { m: "5\"", t: "5", sv: "4+", w: "1", ld: "7+", oc: "2" },
                baseSize: "28.5mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolt pistol", range: "12\"", a: "1", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Pistol"] },
                        { name: "Autoch-pattern bolter", range: "24\"", a: "2", bs: "4+", s: "4", ap: "0", d: "1", keywords: [] },
                        { name: "EtaCarn plasma beamer", range: "18\"", a: "1", bs: "4+", s: "8", ap: "-3", d: "2", keywords: ["Sustained Hits D3"] },
                        { name: "HYLas auto rifle", range: "24\"", a: "3", bs: "4+", s: "6", ap: "-1", d: "1", keywords: ["Assault", "Rapid Fire 3"] },
                        { name: "HYLas rotary cannon", range: "24\"", a: "6", bs: "5+", s: "6", ap: "-1", d: "1", keywords: ["Heavy", "Sustained Hits 1"] },
                        { name: "Ion blaster", range: "18\"", a: "1", bs: "4+", s: "5", ap: "-2", d: "1", keywords: [] },
                        { name: "L7 missile launcher – blast", range: "24\"", a: "D6", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Blast"] },
                        { name: "L7 missile launcher – focused", range: "24\"", a: "1", bs: "4+", s: "9", ap: "-2", d: "D6", keywords: [] },
                        { name: "Magna-rail rifle", range: "18\"", a: "1", bs: "5+", s: "12", ap: "-3", d: "D3+3", keywords: ["Devastating Wounds", "Heavy"] },
                        { name: "Theyn's pistol", range: "12\"", a: "1", bs: "4+", s: "8", ap: "-2", d: "1", keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "1", ws: "4+", s: "4", ap: "0", d: "1", keywords: [] },
                        { name: "Plasma knife", range: "Melee", a: "2", ws: "4+", s: "4", ap: "-2", d: "1", keywords: [] },
                        { name: "Theyn's melee weapon", range: "Melee", a: "2", ws: "4+", s: "5", ap: "-2", d: "2", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 6+"],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Weavefield Crest"],
                    other: ["Luck Has. Need Keeps. Toil Earns", "Panspectral Scanning"]
                },
                wargearOptions: [
                    "Any number of Hearthkyn Warriors can replace their Autoch-pattern bolter with 1 ion blaster.",
                    "Up to 2 Hearthkyn Warriors can replace their Autoch-pattern bolter or ion blaster with 1 HYLas auto rifle, HYLas rotary cannon, L7 missile launcher, EtaCarn plasma beamer or magna-rail rifle (no duplicates).",
                    "Up to 2 Hearthkyn Warriors can replace their Autoch-pattern bolter or ion blaster with 1 plasma knife.",
                    "The Theyn's Autoch-pattern bolter can be replaced with 1 ion blaster or Theyn's pistol.",
                    "The Theyn can be equipped with 1 Theyn's melee weapon."
                ],
                composition: { min: 10, max: 10 },
                compositionText: "1 Theyn and 9 Hearthkyn Warriors",
                keywords: ["Infantry", "Battleline", "Grenades", "Hearthkyn Warriors"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-hernkyn-yaegirs",
                name: "Hernkyn Yaegirs",
                role: "infantry",
                points: [{ models: 10, cost: 90 }],
                stats: { m: "6\"", t: "5", sv: "5+", w: "1", ld: "7+", oc: "1" },
                baseSize: "28.5mm",
                weapons: {
                    ranged: [
                        { name: "APM launcher", range: "24\"", a: "1", bs: "4+", s: "6", ap: "-2", d: "D6", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "Bolt revolver", range: "12\"", a: "1", bs: "4+", s: "5", ap: "0", d: "1", keywords: ["Pistol"] },
                        { name: "Bolt shotgun", range: "18\"", a: "2", bs: "4+", s: "5", ap: "0", d: "1", keywords: ["Assault"] },
                        { name: "Magna-coil rifle", range: "24\"", a: "1", bs: "4+", s: "5", ap: "-2", d: "2", keywords: ["Ignores Cover", "Precision"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "1", ws: "4+", s: "4", ap: "0", d: "1", keywords: [] },
                        { name: "Plasma knife", range: "Melee", a: "2", ws: "4+", s: "4", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Infiltrators"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Pragmatic Hunters"]
                },
                wargearOptions: [
                    "All models can replace their bolt shotgun with 1 bolt revolver and 1 plasma knife.",
                    "1 Hernkyn Yaegir can replace its weapons with 1 magna-coil rifle.",
                    "1 Hernkyn Yaegir can replace its weapons with 1 APM launcher."
                ],
                composition: { min: 10, max: 10 },
                compositionText: "1 Yaegir Theyn and 9 Hernkyn Yaegirs",
                keywords: ["Infantry", "Grenades", "Hernkyn", "Yaegirs"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-cthonian-beserks",
                name: "Cthonian Beserks",
                role: "infantry",
                points: [{ models: 5, cost: 100 }, { models: 10, cost: 200 }],
                stats: { m: "6\"", t: "6", sv: "5+", w: "1", ld: "7+", oc: "1" },
                baseSize: "28.5mm (50mm with mole grenade launcher)",
                weapons: {
                    ranged: [
                        { name: "Mole grenade launcher", range: "18\"", a: "D6", bs: "5+", s: "5", ap: "-1", d: "1", keywords: ["Blast", "Indirect Fire"] }
                    ],
                    melee: [
                        { name: "Concussion maul", range: "Melee", a: "3", ws: "4+", s: "5", ap: "-2", d: "3", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "Heavy plasma axe", range: "Melee", a: "3", ws: "4+", s: "7", ap: "-2", d: "3", keywords: [] },
                        { name: "Twin concussion gauntlet", range: "Melee", a: "4", ws: "4+", s: "9", ap: "-2", d: "2", keywords: ["Twin-linked"] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 4+"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Cyberstimms", "Subterranean Explosives"]
                },
                wargearOptions: [
                    "All models can replace their heavy plasma axe with 1 concussion maul.",
                    "For every 5 models, 1 model not equipped with a mole grenade launcher can replace its heavy plasma axe or concussion maul with 1 twin concussion gauntlet.",
                    "For every 5 models, 1 model can be equipped with 1 mole grenade launcher (accompanied by an L-COG on the same base)."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "5-10 Cthonian Beserks",
                keywords: ["Infantry", "Cthonian", "Beserks"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-einhyr-hearthguard",
                name: "Einhyr Hearthguard",
                role: "infantry",
                points: [{ models: 5, cost: 135 }, { models: 10, cost: 270 }],
                stats: { m: "5\"", t: "5", sv: "2+", w: "2", ld: "7+", oc: "1" },
                baseSize: "32mm",
                weapons: {
                    ranged: [
                        { name: "EtaCarn plasma gun", range: "24\"", a: "1", bs: "3+", s: "7", ap: "-3", d: "2", keywords: ["Rapid Fire 1"] },
                        { name: "Exoarmour grenade launcher", range: "24\"", a: "D3", bs: "3+", s: "3", ap: "0", d: "1", keywords: ["Blast"] },
                        { name: "Volkanite disintegrator", range: "24\"", a: "3", bs: "3+", s: "5", ap: "0", d: "1", keywords: ["Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Concussion gauntlet", range: "Melee", a: "2", ws: "3+", s: "8", ap: "-2", d: "2", keywords: [] },
                        { name: "Graviton hammer", range: "Melee", a: "3", ws: "4+", s: "9", ap: "-1", d: "3", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "Plasma blade gauntlet", range: "Melee", a: "3", ws: "3+", s: "6", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Teleport Crest", "Weavefield Crest"],
                    other: ["Decisive Destruction"]
                },
                wargearOptions: [
                    "All models can replace their EtaCarn plasma gun with 1 volkanite disintegrator.",
                    "All models can replace their concussion gauntlet with 1 plasma blade gauntlet.",
                    "The Hesyr's concussion gauntlet or plasma blade gauntlet can be replaced with 1 graviton hammer.",
                    "The Hesyr's weavefield crest can be replaced with 1 teleport crest."
                ],
                composition: { min: 5, max: 10 },
                compositionText: "1 Hesyr and 4-9 Hearthguard",
                keywords: ["Infantry", "Exoarmour", "Einhyr Hearthguard"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-brokhyr-thunderkyn",
                name: "Brôkhyr Thunderkyn",
                role: "infantry",
                points: [{ models: 3, cost: 80 }, { models: 6, cost: 160 }],
                stats: { m: "5\"", t: "6", sv: "3+", w: "2", ld: "7+", oc: "1" },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Bolt cannon", range: "36\"", a: "3", bs: "4+", s: "6", ap: "-1", d: "2", keywords: ["Sustained Hits 2"] },
                        { name: "Graviton blast cannon", range: "24\"", a: "3", bs: "4+", s: "5", ap: "-2", d: "3", keywords: ["Anti-Monster 3+", "Anti-Vehicle 3+"] },
                        { name: "SP conversion beamer", range: "24\"", a: "2", bs: "4+", s: "7", ap: "-2", d: "3", keywords: ["Conversion", "Lethal Hits"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: "2", ws: "4+", s: "4", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Breaching Fire"]
                },
                wargearOptions: [
                    "All models can replace their bolt cannon with 1 graviton blast cannon.",
                    "All models can replace their bolt cannon with 1 SP conversion beamer."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Brôkhyr Thunderkyn",
                keywords: ["Infantry", "Exoframe", "Brôkhyr", "Thunderkyn"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-hernkyn-pioneers",
                name: "Hernkyn Pioneers",
                role: "mounted",
                points: [{ models: 3, cost: 80 }, { models: 6, cost: 160 }],
                stats: { m: "12\"", t: "6", sv: "4+", w: "3", ld: "7+", oc: "2" },
                baseSize: "90 x 52mm",
                weapons: {
                    ranged: [
                        { name: "Bolt revolver", range: "12\"", a: "1", bs: "4+", s: "5", ap: "0", d: "1", keywords: ["Pistol"] },
                        { name: "Bolt shotgun", range: "18\"", a: "2", bs: "4+", s: "5", ap: "0", d: "1", keywords: ["Assault"] },
                        { name: "HYLas rotary cannon", range: "24\"", a: "6", bs: "4+", s: "6", ap: "-1", d: "1", keywords: ["Sustained Hits 1"] },
                        { name: "Ion beamer", range: "18\"", a: "D3+1", bs: "4+", s: "8", ap: "-2", d: "1", keywords: ["Blast"] },
                        { name: "Magna-coil autocannon", range: "24\"", a: "3", bs: "4+", s: "7", ap: "-1", d: "2", keywords: [] }
                    ],
                    melee: [
                        { name: "Plasma knife", range: "Melee", a: "2", ws: "4+", s: "4", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Scouts 9\""],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Multiwave Comms Array", "Panspectral Scanner", "Rollbar Searchlight"],
                    other: ["Outflanking Mag-riders"]
                },
                wargearOptions: [
                    "For every 3 models, 1 model can be equipped with 1 HYLas rotary cannon or 1 ion beamer.",
                    "1 model not equipped with a HYLas rotary cannon or ion beamer can be equipped with 1 multiwave comms array, panspectral scanner or rollbar searchlight."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "3-6 Hernkyn Pioneers",
                keywords: ["Mounted", "Grenades", "Fly", "Hernkyn", "Pioneers"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-ironkin-steeljacks-heavy-volkanite",
                name: "Ironkin Steeljacks with Heavy Volkanite Disintegrators",
                role: "infantry",
                points: [{ models: 3, cost: 85 }, { models: 6, cost: 170 }],
                stats: { m: "5\"", t: "6", sv: "2+", w: "3", ld: "7+", oc: "1" },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolter", range: "24\"", a: "2", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Pistol"] },
                        { name: "Heavy volkanite disintegrator", range: "24\"", a: "6", bs: "4+", s: "6", ap: "-1", d: "1", keywords: ["Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Plasma knife", range: "Melee", a: "2", ws: "3+", s: "6", ap: "-2", d: "1", keywords: [] },
                        { name: "Plasma sword", range: "Melee", a: "6", ws: "3+", s: "6", ap: "-2", d: "1", keywords: ["Sustained Hits 1"] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Preymark Crest"],
                    other: ["Purge Response"]
                },
                wargearOptions: [
                    "The Steeljack Theyn's heavy volkanite disintegrator and plasma knife can be replaced with 1 Autoch-pattern bolter and 1 plasma sword."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "1 Steeljack Theyn and 2-5 Ironkin Steeljacks",
                keywords: ["Infantry", "Ironkin Steeljacks", "Ironkin Steeljacks with Heavy Volkanite Disintegrators"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-ironkin-steeljacks-melee",
                name: "Ironkin Steeljacks with Melee Weapons",
                role: "infantry",
                points: [{ models: 3, cost: 85 }, { models: 6, cost: 170 }],
                stats: { m: "5\"", t: "6", sv: "2+", w: "3", ld: "7+", oc: "1" },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolter", range: "24\"", a: "2", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Concussion gauntlet", range: "Melee", a: "3", ws: "4+", s: "10", ap: "-2", d: "2", keywords: ["Lethal Hits"] },
                        { name: "Plasma sword", range: "Melee", a: "6", ws: "3+", s: "6", ap: "-2", d: "1", keywords: ["Sustained Hits 1"] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Preymark Crest"],
                    other: ["Merciless Eradication"]
                },
                wargearOptions: [
                    "Any number of models can replace their plasma sword with 1 concussion gauntlet."
                ],
                composition: { min: 3, max: 6 },
                compositionText: "1 Steeljack Theyn and 2-5 Ironkin Steeljacks",
                keywords: ["Infantry", "Ironkin Steeljacks", "Ironkin Steeljacks with Melee Weapons"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-sagitaur",
                name: "Sagitaur",
                role: "vehicle",
                points: [{ models: 1, cost: 90 }],
                stats: { m: "12\"", t: "9", sv: "3+", w: "9", ld: "7+", oc: "2" },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "HYLas beam cannon", range: "24\"", a: "2", bs: "4+", s: "12", ap: "-3", d: "D6+1", keywords: [] },
                        { name: "L7 missile launcher – blast", range: "36\"", a: "D6", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Blast"] },
                        { name: "L7 missile launcher – focused", range: "36\"", a: "1", bs: "4+", s: "9", ap: "-2", d: "D6", keywords: [] },
                        { name: "MATR autocannon", range: "24\"", a: "6", bs: "4+", s: "7", ap: "-1", d: "2", keywords: ["Assault", "Sustained Hits 1"] },
                        { name: "Sagitaur missile launcher", range: "36\"", a: "2", bs: "4+", s: "10", ap: "-3", d: "3", keywords: [] },
                        { name: "Twin bolt cannon", range: "36\"", a: "3", bs: "4+", s: "6", ap: "-1", d: "2", keywords: ["Sustained Hits 2", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured wheels", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1"],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Blistering Advance", "Transport: 6 Leagues of Votann Infantry models (cannot transport Artillery, Exoarmour, Exoframe or Ironkin Steeljacks models)"]
                },
                wargearOptions: [
                    "The HYLas beam cannon can be replaced with 1 L7 missile launcher and 1 Sagitaur missile launcher, or 1 MATR autocannon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Sagitaur",
                keywords: ["Vehicle", "Transport", "Dedicated Transport", "Sagitaur"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-cthonian-earthshakers",
                name: "Cthonian Earthshakers",
                role: "infantry",
                points: [{ models: 2, cost: 110 }],
                stats: { m: "4\"", t: "6", sv: "4+", w: "6", ld: "7+", oc: "2" },
                baseSize: "80mm",
                weapons: {
                    ranged: [
                        { name: "Autoch-pattern bolt pistol", range: "12\"", a: "1", bs: "4+", s: "4", ap: "0", d: "1", keywords: ["Pistol"] },
                        { name: "Breacher ordnance", range: "24\"", a: "D6+1", bs: "5+", s: "10", ap: "-1", d: "2", keywords: ["Blast", "Heavy", "Indirect Fire"] },
                        { name: "Tremor shells", range: "36\"", a: "D6+4", bs: "5+", s: "6", ap: "-1", d: "1", keywords: ["Blast", "Heavy", "Indirect Fire"] }
                    ],
                    melee: [
                        { name: "Plasma picks", range: "Melee", a: "4", ws: "3+", s: "5", ap: "-2", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Prioritised Efficiency"],
                    wargear: [],
                    other: ["Destabilising Quakes", "Geomantic Hunters"]
                },
                wargearOptions: [
                    "All models can replace their breacher ordnance with 1 tremor shells."
                ],
                composition: { min: 2, max: 2 },
                compositionText: "2 Cthonian Earthshakers",
                keywords: ["Infantry", "Artillery", "Cthonian", "Earthshakers"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-hekaton-land-fortress",
                name: "Hekaton Land Fortress",
                role: "vehicle",
                points: [{ models: 1, cost: 240 }],
                stats: { m: "10\"", t: "12", sv: "2+", w: "16", ld: "7+", oc: "5" },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Cyclic ion cannon", range: "24\"", a: "D6+2", bs: "4+", s: "7", ap: "-2", d: "2", keywords: ["Blast"] },
                        { name: "Heavy magna-rail cannon", range: "30\"", a: "2", bs: "4+", s: "18", ap: "-4", d: "D6+4", keywords: ["Devastating Wounds", "Heavy"] },
                        { name: "Hekaton warhead", range: "36\"", a: "D6+3", bs: "4+", s: "7", ap: "-2", d: "2", keywords: ["Blast", "One Shot"] },
                        { name: "MATR autocannon", range: "24\"", a: "6", bs: "4+", s: "7", ap: "-1", d: "2", keywords: ["Assault", "Sustained Hits 1"] },
                        { name: "SP heavy conversion beamer", range: "24\"", a: "4", bs: "4+", s: "10", ap: "-2", d: "4", keywords: ["Conversion", "Lethal Hits"] },
                        { name: "Twin bolt cannon", range: "36\"", a: "3", bs: "4+", s: "6", ap: "-1", d: "2", keywords: ["Sustained Hits 2", "Twin-linked"] },
                        { name: "Twin ion beamer", range: "18\"", a: "D3+1", bs: "4+", s: "8", ap: "-2", d: "1", keywords: ["Blast", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured wheels", range: "Melee", a: "6", ws: "4+", s: "8", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Panspectral Scanner"],
                    other: ["MultiCOG Targeting", "Damaged: 1-5 Wounds Remaining", "Transport: 14 Leagues of Votann Infantry models (Exoarmour, Exoframe or Ironkin Steeljacks models take up 2 spaces; cannot transport Artillery models)"]
                },
                wargearOptions: [
                    "The 2 twin bolt cannons can be replaced with 1 twin bolt cannon and 1 twin ion beamer, or 2 twin ion beamers.",
                    "The cyclic ion cannon can be replaced with 1 SP heavy conversion beamer or 1 heavy magna-rail cannon.",
                    "The panspectral scanner can be replaced with 1 Hekaton warhead."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Hekaton Land Fortress",
                keywords: ["Vehicle", "Transport", "Hekaton Land Fortress"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-kapricus-carrier",
                name: "Kapricus Carrier",
                role: "vehicle",
                points: [{ models: 1, cost: 75 }],
                stats: { m: "12\"", t: "7", sv: "4+", w: "7", ld: "7+", oc: "2" },
                baseSize: "105 x 70mm",
                weapons: {
                    ranged: [
                        { name: "Magna-coil autocannon", range: "24\"", a: "3", bs: "4+", s: "7", ap: "-1", d: "2", keywords: [] },
                        { name: "Twin magna-coil autocannon", range: "24\"", a: "3", bs: "4+", s: "7", ap: "-1", d: "2", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1", "Firing Deck 5", "Scouts 9\""],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Smoke Launcher"],
                    other: ["Scanner Uplinks", "Transport: 5 Hernkyn Yaegir models"]
                },
                wargearOptions: [
                    "This model can be equipped with 1 smoke launcher."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Kapricus Carrier",
                keywords: ["Vehicle", "Fly", "Transport", "Dedicated Transport", "Hernkyn", "Kapricus", "Carrier"],
                factionKeywords: ["Leagues of Votann"]
            },
            {
                id: "votann-kapricus-defenders",
                name: "Kapricus Defenders",
                role: "vehicle",
                points: [{ models: 1, cost: 70 }, { models: 2, cost: 140 }],
                stats: { m: "12\"", t: "7", sv: "4+", w: "7", ld: "7+", oc: "2" },
                baseSize: "105 x 70mm",
                weapons: {
                    ranged: [
                        { name: "HYLas rotary cannon", range: "24\"", a: "6", bs: "4+", s: "6", ap: "-1", d: "2", keywords: ["Sustained Hits 1"] },
                        { name: "Magna-rail cannon", range: "24\"", a: "1", bs: "4+", s: "14", ap: "-4", d: "D3+3", keywords: ["Devastating Wounds", "Heavy"] },
                        { name: "Twin magna-coil autocannon", range: "24\"", a: "3", bs: "4+", s: "7", ap: "-1", d: "2", keywords: ["Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: "3", ws: "4+", s: "6", ap: "0", d: "1", keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise 1", "Scouts 9\""],
                    faction: ["Prioritised Efficiency"],
                    wargear: ["Smoke Launcher"],
                    other: ["Opportunistic Manoeuvre"]
                },
                wargearOptions: [
                    "Any number of models can replace their magna-rail cannon with 1 HYLas rotary cannon.",
                    "Any number of models can be equipped with 1 smoke launcher."
                ],
                composition: { min: 1, max: 2 },
                compositionText: "1-2 Kapricus Defenders",
                keywords: ["Vehicle", "Fly", "Hernkyn", "Kapricus", "Defenders"],
                factionKeywords: ["Leagues of Votann"]
            }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(votann);
})();
