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
                flavour: "The Necron dynasties benefit from the nigh-on supernatural technologies that once saw them dominate the galaxy, perhaps the most unsettling of which are their reanimation protocols. Should a Necron be slain, its body becomes wreathed in an eerie glow. Crawling limbs reattach. Sundered torsos and smashed skulls reform amidst emerald sparks. Witch lights flare back to life within dead eye-lenses and the Necron rises again, shambling back into their battle line. Those Necrons too catastrophically damaged to reform vanish instead, teleported away to their tombs for repair.",
                text: "If your Army Faction is NECRONS, at the end of your Command phase, each unit from your army with this ability that is on the battlefield activates its Reanimation Protocols and reanimates D3 wounds. Each time such a unit reanimates a wound:\n- If that unit contains one or more models with fewer than their starting number of wounds remaining, select one of those models; that model regains one lost wound.\n- If all models in that unit have their starting number of wounds, but that unit is not at its Starting Strength, one destroyed model is returned to that unit with one wound remaining.\nOnce such a unit is at its Starting Strength and all of its models have their starting number of wounds, nothing further happens.\n\nExample: A unit of Lokhust Destroyers (which have a Wounds characteristic of 3) activates its Reanimation Protocols. The unit had a Starting Strength of 3, but currently contains 2 models, and one of those models has lost 1 wound. A 3 is rolled to see how many wounds are reanimated. The first of these reanimated wounds restores the wounded Lokhust Destroyer back to 3 wounds. The second of these reanimated wounds returns the destroyed Lokhust Destroyer to the battlefield with 1 wound remaining. The third of these reanimated wounds restores one of the remaining lost wounds to the same Lokhust Destroyer that was just returned. The unit now contains 3 models, two of which have 3 wounds remaining and one of which has 2 wounds remaining."
            }
        ],

        // ─── DETACHMENTS (names only — fill in rule/strat/enhancement text) ──
        detachments: [
            {
                name: "Awakened Dynasty",
                flavour: "",
                rule: { name: "Command Protocols", flavour: "The Necron nobility and their high-ranking courtiers make war in a codified and relentless fashion. Their command protocols crackle out across multi-dimensional spectra from carrier-wave projectors, compelling their semi-sentient soldiery into battle one overriding directive at a time.", text: "While a NECRONS CHARACTER model is leading this unit, each time a model in this unit makes an attack, add 1 to the Hit roll.", restrictions: "" },
                enhancements: [
                    { name: "Veil of Darkness", cost: 20, restriction: "NECRONS model only.", text: "With this device the bearer can twist space and time about them, enfolding them in a swirling darkness. When it fades, they have vanished, rematerialising elsewhere through a miracle of arcane science.\n\nOnce per battle, at the end of your opponent's turn, if the bearer's unit is not within Engagement Range of any enemy units, the bearer can use this Enhancement. If it does, remove that unit from the battlefield. Then, in the Reinforcements step of your next Movement phase, set up that unit anywhere on the battlefield that is more than 9\" horizontally away from all enemy models." },
                    { name: "Nether-realm Casket", cost: 20, restriction: "NECRONS model only.", text: "Clouds of hyper-dense particles billow from this small artefact, to obscure and shield the bearer from the foe.\n\nWhile the bearer is leading a unit, models in that unit have the Stealth ability." },
                    { name: "Phasal Subjugator (Aura)", cost: 35, restriction: "NECRONS model only.", text: "This engraved sigil-circuitry transforms the fierce will of the bearer into a surging lash across every phasal state.\n\nWhile a friendly NECRONS unit (excluding CHARACTER units) is within 6\" of the bearer, each time a model in that unit makes an attack, add 1 to the Hit roll." },
                    { name: "Enaegic Dermal Bond", cost: 30, restriction: "NECRONS model only.", text: "The bearer's living metal mantle is bonded to mirror versions of itself across many dimensional thresholds.\n\nThe bearer has the Feel No Pain 4+ ability." },
                ],
                stratagems: [
                    { name: "Protocol of the Eternal Revenant", cp: 1, type: "Epic Deed", when: "Any phase.", target: "One NECRONS INFANTRY CHARACTER model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.", effect: "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with half of its starting number of wounds remaining.", restrictions: "Each model can only be targeted with this Stratagem once per battle." },
                    { name: "Protocol of the Undying Legions", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has resolved its attacks.", target: "One NECRONS unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks.", effect: "Your unit activates its Reanimation Protocols and reanimates D3 wounds (or D3+1 wounds if a NECRONS CHARACTER is leading your unit).", restrictions: "" },
                    { name: "Protocol of the Hungry Void", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One NECRONS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in your unit. In addition, if a NECRONS CHARACTER is leading your unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 (this is not cumulative with any other modifiers that improve Armour Penetration).", restrictions: "" },
                    { name: "Protocol of the Sudden Storm", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One NECRONS unit from your army.", effect: "Until the end of the turn, ranged weapons equipped by models in your unit have the [Assault] ability. In addition, if a NECRONS CHARACTER is leading your unit, until the end of the phase, you can re-roll Advance rolls made for your unit.", restrictions: "" },
                    { name: "Protocol of the Conquering Tyrant", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One NECRONS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within half range, re-roll a Hit roll of 1. If a NECRONS CHARACTER is leading your unit, until the end of the phase, you can re-roll the Hit roll for that attack instead.", restrictions: "" },
                    { name: "Protocol of the Vengeful Stars", cp: 2, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit destroys a NECRONS unit from your army.", target: "One NECRONS CHARACTER unit from your army that was within 6\" of that NECRONS unit when it was destroyed.", effect: "After the attacking unit has resolved its attacks, your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.", restrictions: "" },
                ]
            },
            {
                name: "Annihilation Legion",
                flavour: "",
                rule: { name: "Annihilation Protocol", flavour: "The most murderous Necrons of an Annihilation Legion retain no thought processes beyond destroying anything in reach. They are mechanised death, echoes of the industrialised and brutal processes of bio transference made manifest. Whether soullessly efficient or frenziedly deluded, these killing machines follow protocols that have atrophied into a singular and all-consuming insanity.", text: "Each time a DESTROYER CULT or FLAYED ONES unit from your army declares a charge, you can re-roll the Charge roll. If one or more targets of that charge are Below Half-strength, add 1 to the Charge roll as well.\n\nEach time a DESTROYER CULT unit from your army makes a ranged attack that targets the closest eligible target, add 1 to the Armour Penetration characteristic of that attack.", restrictions: "" },
                enhancements: [
                    { name: "Eternal Madness", cost: 25, restriction: "NECRONS model only.", text: "This Necron's sanity suffered during the Great Sleep. Now they are driven by a wrathful zeal, one which has seeped through the carrier waves of their commandments and into their followers.\n\nIn the Fight phase, each time a model in the bearer's unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking model's unit has finished making its attacks, and is then removed from play." },
                    { name: "Ingrained Superiority", cost: 10, restriction: "NECRONS model only.", text: "An immortal destroyer, this war leader's every victim is etched irrevocably into their cognitive engrams. Every weakness they ever overcame is recalled, frailties they can exploit on each new battlefield.\n\nEach time a model in the bearer's unit makes an attack, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1." },
                    { name: "Soulless Reaper", cost: 20, restriction: "DESTROYER CULT model only.", text: "This deathly killer exudes a soul-sapping presence, the promise of lives' end so explicit in their chilling gaze that few can muster the strength of will to evade it.\n\nEach time an enemy unit within Engagement Range of the bearer's unit is selected to Fall Back, roll one D6: on a 3+, that unit cannot Fall Back this phase and must Remain Stationary." },
                    { name: "Eldritch Nightmare", cost: 15, restriction: "DESTROYER CULT model only.", text: "Atavistic fears are summoned from the pits of nightmare and thrust into the minds of all foes near this metal-skinned horror.\n\nAt the start of the Fight phase, each enemy unit within Engagement Range of the bearer must take a Battle-shock test." },
                ],
                stratagems: [
                    { name: "Masks of Death", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DESTROYER CULT or FLAYED ONES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "The Spoor of Frailty", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One DESTROYER CULT or FLAYED ONES unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model from your unit makes an attack that targets a unit below Starting Strength, add 1 to the Hit roll. If the target is Below Half-strength, add 1 to the Wound roll as well.", restrictions: "" },
                    { name: "Murderous Reanimation", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DESTROYER CULT or FLAYED ONES unit from your army that has just destroyed an enemy unit, or just caused an enemy unit that was not Below Half-strength to become Below Half-strength.", effect: "Your unit's Reanimation Protocols activate.", restrictions: "" },
                    { name: "Pitiless Hunters", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DESTROYER CULT or FLAYED ONES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".", restrictions: "" },
                    { name: "Blood-fuelled Cruelty", cp: 1, type: "Battle Tactic", when: "Your opponent's Movement phase, just after an enemy unit ends a Fall Back move.", target: "One DESTROYER CULT or FLAYED ONES unit from your army that started the phase within Engagement Range of that enemy unit.", effect: "Roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds. Your unit can then make a Normal move, but must end that move as close as possible to that enemy unit.", restrictions: "" },
                    { name: "Insanity's Ire", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One DESTROYER CULT or FLAYED ONES unit from your army that had one or more of its models destroyed by the attacking unit's attacks.", effect: "Your unit can make a Normal move, but must end that move as close as possible to that enemy unit.", restrictions: "" },
                ]
            },
            {
                name: "Canoptek Court",
                flavour: "",
                rule: { name: "Power Matrix", flavour: "Countless worlds across the galaxy harbour quiescent Necron technology, buried beneath the surface or mistaken for mere xenoarchaeological ruins. Whether part of an awakening tomb world's defences, phased beneath the crust of a planet to empower the Cryptek's conquest or perhaps the very objects they seek, these strange engines can be roused to wakefulness. Linked in an interdimensional matrix, their ancient energy cores can be vampirically bled to empower the Crypteks' arcane technologies as well as their artificial and servile constructs.", text: "Certain areas of the battlefield are considered to be within your army's Power Matrix, as follows:\n- Your deployment zone is always within your army's Power Matrix.\n- At the start of any phase, if you control at least half of the objective markers within No Man's Land, until the end of that phase, No Man's Land is within your army's Power Matrix.\n- At the start of any phase, if you control at least half of the objective markers within your opponent's deployment zone, until the end of that phase, your opponent's deployment zone is within your army's Power Matrix.\n\nEach time a model in a CRYPTEK or CANOPTEK unit from your army makes an attack, re-roll a Hit roll of 1. If such a unit is wholly within your army's Power Matrix, you can re-roll the Hit roll instead.", restrictions: "" },
                enhancements: [
                    { name: "Dimensional Sanctum", cost: 20, restriction: "CRYPTEK model only.", text: "This Cryptek has had a personal dimensional pocket reality crafted for them, from which they can emerge into battle at will.\n\nModels in the bearer's unit have the Infiltrators ability." },
                    { name: "Hyperphasic Fulcrum", cost: 15, restriction: "CRYPTEK model only.", text: "With this small orb, its surface shimmering in fractal hues and shifting in multidimensional facets, a Cryptek can bypass the ancient security protocols placed upon the area's dormant machineries. Esoteric data and unusual strands of energy can be accessed, the orb acting as a skeleton key to greater power.\n\nWhile the bearer is leading a unit, if that unit is wholly within your army's Power Matrix, each time a model in that unit makes an attack, re-roll a Wound roll of 1." },
                    { name: "Autodivinator", cost: 15, restriction: "CRYPTEK model only.", text: "This cryptogeometric puzzle box harbours a chronoscarab. The tiny construct creeps forward in time along temporal webs before hauling back a captured net of future moments. Its master can scry these wriggling futures to predict their foe's strategies, using the knowledge to develop new counter-tactics to ambush the attackers.\n\nEach time your opponent gains a CP as the result of an ability, roll one D6: on a 2+, you also gain 1CP." },
                    { name: "Metalodermal Tesla Weave", cost: 10, restriction: "CRYPTEK model only.", text: "This microsilicate weave generates a cyclical electrostatic overload that, providing its user triggers it in time, sends arcing lightning leaping out to roast onrushing attackers.\n\nOnce per phase, when an enemy unit selects the bearer's unit as a target of a charge, roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds." },
                ],
                stratagems: [
                    { name: "Curse of the Cryptek", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has shot or fought.", target: "One CRYPTEK model from your army that was destroyed by one of the attacking unit's attacks. You can use this Stratagem on that model even though it was just destroyed.", effect: "Until the end of the battle, each time a friendly CANOPTEK model makes an attack that targets the attacking unit, add 1 to the Hit roll and add 1 to the Wound roll.", restrictions: "" },
                    { name: "Cynosure of Eradication", cp: 2, type: "Battle Tactic", when: "The start of your Shooting phase or the start of the Fight phase.", target: "One CRYPTEK or CANOPTEK unit from your army that is wholly within your army's Power Matrix.", effect: "Until the end of the phase, weapons equipped by CRYPTEK or CANOPTEK models in your unit have the [Devastating Wounds] ability.", restrictions: "" },
                    { name: "Solar Pulse", cp: 1, type: "Strategic Ploy", when: "Start of your Shooting phase.", target: "One CRYPTEK model from your army.", effect: "Select one objective marker within 18\" of your CRYPTEK model. Until the end of the phase, weapons equipped by friendly NECRONS models have the [Ignores Cover] ability while targeting units within range of that objective marker.", restrictions: "" },
                    { name: "Reactive Subroutines", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One CANOPTEK unit from your army that is within 9\" of that enemy unit.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Countertemporal Shift", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One CANOPTEK unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                    { name: "Suboptimal Facade", cp: 1, type: "Strategic Ploy", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One CANOPTEK unit from your army that was selected as a target of that charge and is wholly within your army's Power Matrix.", effect: "Your unit's Reanimation Protocols activate.", restrictions: "" },
                ]
            },
            {
                name: "Obeisance Phalanx",
                flavour: "",
                rule: { name: "Worthy Foes", flavour: "With a command transmitted by regal carrier wave, signalled by a glowing glyph or via a haughty gesture with their blade, the ruling nobles mark their chosen enemy. With this declaration are the Triarchal Codes observed, and the ignorant foe doomed. The nobles' powerful servants and the Triarch's guardians of tradition march to war obediently, driven to best the mightiest of foes on the battlefield as a demonstration of the dynasty's honour and a warning to the rest of their enemies' foolish kind.", text: "In your Command phase, select one enemy unit. Until the start of your next Command phase, each time a NOBLE, LYCHGUARD or TRIARCH unit from your army makes an attack that targets that unit, add 1 to the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Honourable Combatant", cost: 10, restriction: "OVERLORD model only.", text: "A strict adherent to the ancient codes, this noble reserves their greatest displays of power to execute the enemy's leaders. Such champions are brought low in ostentatious manner, the inspiration or strategy they once provided severed at a stroke.\n\nEach time the bearer's unit destroys an enemy CHARACTER unit, your opponent loses 1CP if they have any." },
                    { name: "Unflinching Will", cost: 20, restriction: "OVERLORD model only.", text: "With sheer will this noble drives their warriors into battle against the most malevolent foes. Not from pretenders to nobility, nor marauding beasts, nor titanic machineries will this noble turn; they have faced greater horrors during their long existence.\n\nThe bearer's melee weapons have the [Precision] and [Anti-Infantry 5+] abilities." },
                    { name: "Warrior Noble", cost: 15, restriction: "OVERLORD model only.", text: "This dynastic scion is an expert in the arts of martial excellence, and their living metal form has been enhanced by their Crypteks. With effortless arrogance, they and their guardians parry or contemptuously swat aside the strikes of those they see as their lessers.\n\nEach time a melee attack targets the bearer's unit, subtract 1 from the Hit roll." },
                    { name: "Eternal Conqueror", cost: 25, restriction: "OVERLORD model only.", text: "This insatiable subjugator sees all before them as theirs for the taking by ancient right of conquest. They wield their legion like an iron gauntlet, using it to seize the battlefield in a demonstration of their power and strength, daring others to try taking it from them.\n\nEach time a model in the bearer's unit makes an attack that targets an enemy unit within range of an objective marker, you can re-roll the Hit roll." },
                ],
                stratagems: [
                    { name: "Your Time Is Nigh", cp: 1, type: "Epic Deed", when: "Any phase, just after your opponent's WARLORD is destroyed.", target: "Your NECRONS WARLORD.", effect: "Until the end of the battle, each time an enemy unit takes a Battle-shock or Leadership test, subtract 1 from the result.", restrictions: "" },
                    { name: "Enslaved Artifice", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One NECRONS unit from your army (excluding TITANIC units) that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Nanoassembly Protocols", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One NECRONS VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Sentinels of Eternity", cp: 1, type: "Epic Deed", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One LYCHGUARD or TRIARCH PRAETORIANS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making attacks, and is then removed from play.", restrictions: "" },
                    { name: "Suffer No Rival", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One LYCHGUARD or TRIARCH unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Precision] ability.", restrictions: "" },
                    { name: "Territorial Obsession", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One LYCHGUARD or TRIARCH unit from your army.", effect: "Until the start of your next Command phase, add 1 to the Objective Control characteristic of models in your unit. If your unit has the VEHICLE keyword, add 3 to the Objective Control characteristic instead.", restrictions: "" },
                ]
            },
            {
                name: "Hypercrypt Legion",
                flavour: "",
                rule: { name: "Hyperphasing", flavour: "Employing fractal corridors, dolmen gates and ancient translocation science, the Necrons are able to phase in and out of existence. Nowhere is safe for the terrified foe as mechanoid hunters appear from unfolding planar lattices to slaughter or escape retribution into gulfs of darkness, only to materialise elsewhere to kill anew.", text: "At the end of your opponent's turn, you can select a number of NECRONS units from your army (excluding units that are within Engagement Range of one or more enemy units). The maximum number of units you can select depends on the battle size, as follows:\n- Incursion: Up to 1 unit\n- Strike Force: Up to 2 units\n- Onslaught: Up to 3 units\n\nOnce you have made your selections, remove those units from the battlefield and place them into Strategic Reserves.", restrictions: "" },
                enhancements: [
                    { name: "Dimensional Overseer", cost: 25, restriction: "NECRONS model only.", text: "With a mind as labyrinthine as the multi-dimensional tomb itself, this commander directs their servants in complex forays through the tomb's hyperspatial architecture, catching the witless enemy off guard.\n\nWhile the bearer is on the battlefield or in Strategic Reserves, add one to the number of units from your army that you can select for the Hyperphasing rule." },
                    { name: "Arisen Tyrant", cost: 25, restriction: "NECRONS model only.", text: "This ancient being will suffer no threats to their rule, stepping imperiously from twisting nightmare dimensions to annihilate any who dare to oppose them.\n\nEach time a model in the bearer's unit makes an attack, re-roll a Hit roll of 1. If the bearer's unit was set up on the battlefield this turn, you can re-roll the Hit roll instead." },
                    { name: "Hyperspatial Transfer Node", cost: 15, restriction: "NECRONS model only.", text: "Wound with filaments of temporal circuitry, this amulet enables the bearer to accelerate themselves and their closest guardians in stuttering bursts of compressed time.\n\nEach time the bearer's unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in the bearer's unit." },
                    { name: "Osteoclave Fulcrum", cost: 20, restriction: "NECRONS model only.", text: "This hypermaterial key unlocks portals between transpatial dimensions embedded into a tomb's architecture. Through such limitless doorways, the Necrons can pursue their quarry wherever they hide.\n\nModels in the bearer's unit have the Deep Strike ability." },
                ],
                stratagems: [
                    { name: "Hyperphasic Recall", cp: 2, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has shot or fought.", target: "One NECRONS INFANTRY unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks and one friendly MONOLITH model.", effect: "Remove your INFANTRY unit from the battlefield and then set it back up anywhere on the battlefield that is wholly within 6\" of your MONOLITH model and not within Engagement Range of one or more enemy units.", restrictions: "" },
                    { name: "Quantum Deflection", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One NECRONS VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                    { name: "Reanimation Crypts", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "Your NECRONS WARLORD.", effect: "For each of your NECRONS units in Reserves, that Reserves unit's Reanimation Protocols activate.", restrictions: "" },
                    { name: "Cosmic Precision", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One NECRONS unit from your army (excluding MONSTER units) that is arriving using the Deep Strike or Hyperphasing abilities this phase.", effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.", restrictions: "A unit targeted with this Stratagem is not eligible to declare a charge in the same turn." },
                    { name: "Dimensional Corridor", cp: 2, type: "Strategic Ploy", when: "Your Charge phase.", target: "One NECRONS unit from your army that was set up on the battlefield this turn using the Eternity Gate ability of a MONOLITH model that started the turn on the battlefield.", effect: "Your unit is eligible to charge this phase.", restrictions: "" },
                    { name: "Entropic Damping", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One TITANIC model from your army that was selected as the target of one or more of the attacking unit's attacks and is within 18\" of the attacking unit.", effect: "Until the end of the phase, weapons equipped by models in the attacking unit have the [Hazardous] ability.", restrictions: "" },
                ]
            },
            {
                name: "Starshatter Arsenal",
                flavour: "A wide range of mechanical treasures are stored within the grand armouries of the Necron dynasties. Some Necron nobles prefer to wage mobile warfare, utilising the swiftest of these vehicles, including imperious anti-grav war barques, looming mechanical walkers and supersonic assault craft powered by eldritch technologies to outflank, outrun and eliminate their enemies. As the armoured tide sweeps over the hopelessly outmatched foe, Ghost Arks swoop low to disgorge rank upon rank of skeletal Necron Warriors. Other forms of servile construct and maniacal killing machines join the lethal procession, too, adding their firepower to the cosmic wrath, and when the foe inevitably breaks, dynastic soldiery piloting - or fused with - repulsor-driven platforms surge forwards to scythe down any who would attempt to flee.",
                rule: { name: "Relentless Onslaught", flavour: "The Necrons possess countless terrifying engines of war. When mustered in great number, these instruments of annihilation sweep across the battlefield, seeking to reclaim lost realms and obliterate any foolish enough to trespass upon the territories of their ancient dynasty.", text: "Each time a NECRONS model (excluding MONSTER models) from your army makes an attack that targets a unit within range of one or more objective markers, add 1 to the Hit roll. In addition, ranged weapons equipped by NECRONS VEHICLE and NECRONS MOUNTED models (excluding TITANIC models) from your army have the [Assault] ability.", restrictions: "" },
                enhancements: [
                    { name: "Dread Majesty (Aura)", cost: 30, restriction: "OVERLORD or CATACOMB COMMAND BARGE model only.", text: "When this noble unleashes the might of their cosmic armoury, their followers are left in no doubt as to the importance of the battle at hand. If they do not strive to live up to the lethal effectiveness of the dynasty's war engines, their Overlord's wrath will be terrible.\n\nWhile a friendly NECRONS unit (excluding MONSTER and TITANIC units) is within 6\" of the bearer, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
                    { name: "Miniaturised Nebuloscope", cost: 15, restriction: "NECRONS model only.", text: "Feeding vampirically on datastreams from the dynasty's war engines, this device enables its owner to track enemies through multiple dimensions, leaving them no hiding place.\n\nRanged weapons equipped by models in the bearer's unit have the [Ignores Cover] ability." },
                    { name: "Demanding Leader", cost: 10, restriction: "NECRONS model only.", text: "This Necron noble is a master of rapid warfare, commanding armoured columns with great precision.\n\nIn your Command phase, select one friendly NECRONS VEHICLE or NECRONS MOUNTED unit (excluding TITANIC units) within 6\" of the bearer. Until the start of your next Command phase, that unit is eligible to shoot in a turn in which it Fell Back." },
                    { name: "Chrono-impedance Fields", cost: 25, restriction: "NECRONS model only.", text: "When activated, this device wreathes dynastic craft in a time-dilation field that reduces the force of incoming blows and shots.\n\nIn your Command phase, select one friendly NECRONS VEHICLE or NECRONS MOUNTED unit (excluding TITANIC units) within 6\" of the bearer. Until the start of your next Command phase, each time an attack is allocated to a model in that unit, subtract 1 from the Damage characteristic of that attack." },
                ],
                stratagems: [
                    { name: "Merciless Reclamation", cp: 2, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One NECRONS unit (excluding MONSTER and TITANIC units) from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if the target of that attack is within range of one or more objective markers, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Unyielding Forms", cp: 2, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One NECRONS VEHICLE or NECRONS MOUNTED unit (excluding TITANIC units) from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets a model in your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Chronoshift", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One NECRONS VEHICLE or NECRONS MOUNTED unit (excluding TITANIC units) from your army that has not been selected to move this phase.", effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Dimensional Tunnel", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One NECRONS VEHICLE or NECRONS MOUNTED unit (excluding TITANIC units) from your army.", effect: "Until the end of the phase, models in your unit can move horizontally through models and terrain features.", restrictions: "" },
                    { name: "Endless Servitude", cp: 1, type: "Strategic Ploy", when: "End of your Fight phase.", target: "One NECRONS unit (excluding MONSTER and TITANIC units) from your army that is within range of one or more objective markers you control.", effect: "Your unit's Reanimation Protocols activate.", restrictions: "" },
                    { name: "Reactive Reposition", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One NECRONS unit from your army (excluding MONSTER and TITANIC units) that was the target of one or more of the attacking unit's attacks.", effect: "Your unit can make a Normal move of up to D6\".", restrictions: "" },
                ]
            },
            {
                name: "Cryptek Conclave",
                flavour: "It was during the ongoing war in the Nephilim Anomaly that Szarekh, the Silent King, issued an edict of unprecedented technological freedom. No weapon of science-sorcery was to be off limits in the Necrons' campaign to reclaim galactic dominance. With the Silent King's blessings, ever more conclaves of like-minded Crypteks are now gathering power and influence throughout the Necrons' domains. Some such conclaves have arisen across the region now designated Greater Ultramar, either in answer to the onset of Human invaders or as a defensive measure against the rampage of Ammentar's cursed legion. They see powerful Crypteks compete with one another to fashion the greatest weapons and augment their android phalanxes in the most cunning ways. For those enemies unlucky enough to stand in their way, the conclaves are a byword for terror.",
                rule: { name: "Technosorcerous Augmentations", flavour: "Whether building on one anothers' shared results or vying to produce the most ingenious adaptations, the Crypteks treat the battlefield as an opportunity to test their latest scientific and technological breakthroughs.", text: "- Ranged weapons equipped by CRYPTEK models from your army have the [Assault] ability.\n- In your Shooting phase, each time a CRYPTEK unit from your army is selected to shoot, select one of the following abilities: [Anti-Infantry 3+], [Anti-Mounted 4+], [Assault], [Heavy], [Ignores Cover]. Until the end of the phase, ranged weapons equipped by models in that unit have that ability.", restrictions: "" },
                enhancements: [
                    { name: "Quantum Abacus", cost: 15, restriction: "NECRONS model only.", text: "This cloud-like familiar of fractal computational electrons possesses a cogitational intellect that, when fed raw data, produces inspired strategic guidance.\n\nEach time you select the bearer's unit as the target of a Stratagem, roll one D6, adding 1 if it is within range of one or more objectives: on a 4+, you gain 1CP." },
                    { name: "Atomic Disintegrators", cost: 10, restriction: "CRYPTEK model only.", text: "Energy lenses project in a web from a central node borne by the Cryptek, coalescing about Necron weapon systems and focusing their power still further.\n\nIn your Shooting phase, each time the bearer's unit is selected to shoot, when selecting an ability for the Technosorcerous Augmentations Detachment rule, you can also select from the following abilities: [Anti-Monster 5+], [Anti-Vehicle 5+]." },
                    { name: "Gauntlet of Compression", cost: 20, restriction: "NECRONS model only.", text: "Clinging to the bearer's hand like a glove woven from shadow, this strange device folds space-time with a single gesture, momentarily compressing the relative distance between Necron weapons and their targets.\n\nAdd 6\" to the Range characteristic of ranged weapons equipped by models in the bearer's unit." },
                    { name: "Gravitic Bolas", cost: 15, restriction: "CRYPTEK model only.", text: "Projected from the bearer's staff as a secondary energistic emission, these solid-state electroshackles bind and trammel their victims in crackling fetters.\n\nIn your Shooting phase, after the bearer has shot, select one enemy unit hit by one or more of those attacks (excluding TITANIC units); until the start of your next turn, that enemy unit is pinned. While a unit is pinned, subtract 2 from that unit's Move characteristic and subtract 2 from Charge rolls made for that unit." },
                ],
                stratagems: [
                    { name: "Molecular Targeting", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One NECRONS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack's Ballistic Skill or Weapon Skill characteristic; the Hit roll. If your unit has the CRYPTEK keyword, you can also ignore any or all modifiers to the Wound roll.", restrictions: "" },
                    { name: "Microscarab Swarm", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One CRYPTEK INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "If your unit has the NECRON WARRIORS keyword, until the end of the phase, models in your unit have a 5+ invulnerable save. If your unit has the IMMORTALS keyword, until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                    { name: "Animus Curse", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has shot or fought.", target: "One CRYPTEK model from your army that was destroyed by one of the attacking unit's attacks. You can use this Stratagem on that model even though it was just destroyed.", effect: "Until the end of the battle, each time a friendly NECRONS model makes an attack that targets the attacking unit, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Synergistic Empowerment", cp: 1, type: "Strategic Ploy", when: "Start of your Shooting phase.", target: "One CRYPTEK unit from your army.", effect: "Select one friendly NECRONS model (excluding MONSTERS and VEHICLES) within 12\" of a CRYPTEK model in your unit. Until the end of the phase, that friendly NECRONS model has the CRYPTEK keyword.", restrictions: "" },
                    { name: "Untapped Power", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One CRYPTEK unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time your unit is selected to shoot, when selecting an ability for the Technosorcerous Augmentations Detachment Rule, you can select one additional ability from those available.", restrictions: "" },
                    { name: "Potentiality Syphon", cp: 1, type: "Strategic Ploy", when: "Your opponent's Command phase.", target: "One NECRONS unit from your army within range of one or more objective markers.", effect: "Your unit's Reanimation Protocols activate. If it is a CRYPTEK unit, it reanimates an additional 1 wound.", restrictions: "" },
                ]
            },
            {
                name: "Cursed Legion",
                flavour: "The cursed legion of Nekrosor Ammentar sweeps across the stars like some android plague. They are avatars of death, a fanatical host through whose ranks the Destroyer madness is allowed to spread unchecked. Those gripped by the madness are fanatical in their devotion to the Nekrosor and vigorous in their efforts to forcibly inflict their blessed curse upon the lower ranks in their service. Entire phalanxes of android soldiery surge into battle with a sickly, killing light dancing in their ocular lenses. Even the lowliest Warriors fight with cold ferocity, while the Destroyers kill with nightmarish speed and efficiency born of zeal. With every conflict the ranks of the cursed legion swell with new converts, and the trail of carnage they leave in their wake grows all the bloodier.",
                rule: { name: "Cold Fervour", flavour: "The fury of the Destroyers and - by extension - of the cursed legion is not a wild or reckless thing. It is rather a ruthlessly methodical annihilation of the enemy, in which the Destroyers take the lead while ripples of their strange madness roll out to infect nearby Necrons and goad them, too, to greater efforts of tireless murder.", text: "- Add 2 to the Strength characteristic of weapons equipped by DESTROYER CULT models from your army.\n- The first time each turn that a DESTROYER CULT unit from your army makes attacks that destroy a unit or cause it to become Below Half-strength, after that unit has finished resolving its attacks, until the end of the turn, add 2 to the Strength characteristic of weapons equipped by friendly NECRONS models (excluding DESTROYER CULT, MONSTER and TITANIC models).", restrictions: "" },
                enhancements: [
                    { name: "Destroyer Ankh", cost: 20, restriction: "CATACOMB COMMAND BARGE or OVERLORD model only.", text: "Though it resembles a typical ankh, this chest piece fills its host with an insatiable need to exterminate the foe.\n\nThe bearer has the DESTROYER CULT keyword. Add 2\" to the Move characteristic of models in the bearer's unit and add 2 to the Attacks characteristic of melee weapons equipped by the bearer." },
                    { name: "Murdermind", cost: 15, restriction: "CRYPTEK model only.", text: "Consumed by the Destroyer madness, this Cryptek's powerful intellect is turned entirely toward killing.\n\nThe bearer has the DESTROYER CULT keyword and during the Declare Battle Formations step, the bearer can be attached to a DESTROYER CULT unit (excluding CHARACTER units). If you do, the bearer's unit cannot contain any models without the DESTROYER CULT keyword. Add 3\" to the Move characteristic of the bearer." },
                    { name: "Mark of the Nekrosor", cost: 20, restriction: "DESTROYER CULT model only.", text: "The malevolent madness of Ammentar itself burns in the minds of this warrior and their comrades.\n\nEach time a model in the bearer's unit makes an attack, add 1 to the Hit roll." },
                    { name: "Cursed Circlet", cost: 25, restriction: "DESTROYER CULT model only.", text: "This band of living metal sinks into the bearer's brow and floods their neural cortex with a murderous urge.\n\nEach time an enemy unit is selected to shoot, after that unit has shot, if any models from the bearer's unit were destroyed as a result of those attacks, the bearer's unit can make a Surge move. To do so, roll one D6: the bearer's unit can be moved a number of inches up to the result, but the bearer's unit must finish that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit. A unit cannot make a Surge move while it is Battle-shocked." },
                ],
                stratagems: [
                    { name: "Methodical Murder", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One NECRONS unit (excluding MONSTERS and VEHICLES) from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, weapons equipped by models in your unit have the [Sustained Hits 1] ability.", restrictions: "" },
                    { name: "Image of Death", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DESTROYER CULT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Mortis Protocols", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase or the Fight phase, just after the first time a DESTROYER CULT unit from your army destroys an enemy unit this turn.", target: "One friendly NECRONS unit (excluding MONSTERS and VEHICLES) within 9\" of that DESTROYER CULT unit.", effect: "The friendly unit's Reanimation Protocols activate.", restrictions: "" },
                    { name: "Driven to Butchery", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase or your Charge phase.", target: "One DESTROYER CULT unit from your army.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.", restrictions: "You can only use this Stratagem once per turn." },
                    { name: "Spreading Madness", cp: 1, type: "Battle Tactic", when: "Your Charge phase.", target: "One NECRONS unit (excluding MONSTERS and VEHICLES) from your army that has not declared a charge this phase.", effect: "Until the end of the phase, each time your unit declares a charge, if one or more targets of that charge are within Engagement Range of one or more friendly units, add 2 to the Charge roll.", restrictions: "" },
                    { name: "Unnatural Aggression", cp: 2, type: "Strategic Ploy", when: "End of your opponent's Charge phase.", target: "One NECRONS unit (excluding MONSTERS and VEHICLES) from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.", effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge. Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.", restrictions: "" },
                ]
            },
            {
                name: "Pantheon of Woe",
                flavour: "To unleash such a power is a strategy of last resort for most Necrons, for it sees multiple C'tan shards released from tesseract oubliettes and hurled into the heart of the foe. Though the Necrons employ powerful mechanisms to control the shattered remains of the star gods, still it is a risk deploying even one such fettered abomination amidst the mayhem of war lest it slip its bonds and go on the rampage. Concentrating the power of multiple shards upon a single battlefield, meanwhile, has a warping effect upon reality itself, and requires the efforts of skilled Crypteks using complex necrodermal bindings to prevent the C'tan shards from breaking free. For all this, the sheer cosmic devastation unleashed by several shards on a single battlefield is breathtaking to behold.",
                rule: { name: "Cosmic Distortion", flavour: "The quantum dissonance and molecular erosion caused by multiple C'tan shards in close proximity is enough to fray the very physical being of the foe at an atomic level.", text: "NECRONS MONSTER units from your army have the following ability:\n\nDistortion Fields (Aura): While an enemy unit is within 6\" of this unit, it is unravelling. While an enemy unit is unravelling, each time an attack targets that unit, improve the Armour Penetration characteristic of that attack by 1.\n\nAt the start of each phase, for each NECRONS MONSTER unit from your army, that unit can suffer 3 mortal wounds. If it does, until the end of the phase, the range of that unit's Distortion Fields Aura ability is increased to 9\".\n\nDesigner's Note: If your army contains more than one TRANSCENDENT C'TAN unit, each of those units must take the Reletavistic Tether ability.", restrictions: "When mustering your army, each NECRONS MONSTER unit from your army has the relevant Necrodermal Binding ability shown below (the enhancements), and you must increase the points cost of each of those units by the amount shown in the Munitorum Field Manual. If this causes your army to exceed the points limit for the battle you are playing, you cannot include that unit in your army." },
                enhancements: [
                    { name: "Singularity Matrix", cost: 55, restriction: "C'TAN SHARD OF THE DECEIVER model only.", text: "This eldritch device fetters and directs the Deceiver's powers within a vortex that devours lesser wits entirely.\n\nThis model has the following ability:\n\nLord of Deceit (Aura): Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP." },
                    { name: "Quantum Goad", cost: 45, restriction: "C'TAN SHARD OF THE NIGHTBRINGER model only.", text: "The energies of this binding latch onto enemy targets and shunt the shard into alignment with them.\n\nThis model is eligible to declare a charge in a turn in which it Advanced." },
                    { name: "Animus Damper", cost: 35, restriction: "C'TAN SHARD OF THE VOID DRAGON model only.", text: "This device bleeds off the Void Dragon shard's energies and earths them violently through nearby machines.\n\nOnce per turn, at the start of your opponent's Shooting phase, select one enemy VEHICLE unit visible to the bearer. That unit must take a Leadership test. Until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll and, if that Leadership test was failed, subtract 1 from the Wound roll as well." },
                    { name: "Reletavistic Tether", cost: 40, restriction: "TRANSCENDENT C'TAN model only.", text: "This binding uses atomic resonance magnetism to compel the shard into the midst of the foe.\n\nIn your turn, each time this model is set up on the battlefield using the Deep Strike or Transdimensional Displacement abilities, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units. When doing so, if this model is set up within 9\" of one or more enemy units, until the end of the turn, it is not eligible to declare a charge." },
                ],
                stratagems: [
                    { name: "Disharmonisation Cascade", cp: 1, type: "Epic Deed", when: "Any phase, just after a NECRONS MONSTER model from your army is destroyed, before making its Deadly Demise roll.", target: "That NECRONS MONSTER model. You can use this Stratagem on that model even though it was just destroyed.", effect: "Until the end of the phase, your model's Deadly Demise ability inflicts mortal wounds on a D6 roll of 3+ instead of on a 6.", restrictions: "" },
                    { name: "Molecular Erosion", cp: 1, type: "Strategic Ploy", when: "Command phase.", target: "One NECRONS MONSTER unit from your army.", effect: "Select one unravelling enemy unit visible to your unit. That enemy unit must take a Battle-shock test. When doing so, subtract 1 from the result. If that test is failed, that enemy unit suffers D3+1 mortal wounds.", restrictions: "You can only use this Stratagem once per battle round." },
                    { name: "Mass Transmogrification", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase, just after a NECRONS MONSTER unit from your army destroys an enemy unit.", target: "One friendly NECRONS unit (excluding MONSTERS) within 6\" of that MONSTER unit.", effect: "If that enemy unit was unravelling at the start of the phase, your friendly unit's Reanimation Protocols activate.", restrictions: "You can only use this Stratagem once per turn." },
                    { name: "Entrophasic Aura Targeting", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One NECRONS unit (excluding MONSTERS) from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a Hit roll of 1. If the target of that attack is unravelling, re-roll a Wound roll of 1 as well.", restrictions: "" },
                    { name: "Chronodistortion", cp: 1, type: "Battle Tactic", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One NECRONS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 if the attacking unit is unravelling: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Phase Melding", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, when an unravelling enemy unit is selected to Fall Back.", target: "One NECRONS unit from your army that is within Engagement Range of that enemy unit.", effect: "When that enemy unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests.", restrictions: "" },
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
