/**
 * W40K Army Builder — Grey Knights (10th Edition)
 *
 * Datasheets from Codex: Grey Knights. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const gk = {
        id: "grey-knights",
        name: "Grey Knights",
        icon: "⚜️",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Gate of Infinity", flavour: "Few can command the powers of the Warp with anything like the skill and control of the Grey Knights. So masterful is their sorcery that they can conjure glowing empyric gateways to step in and out of reality. In this way, they swiftly outflank their foes and redeploy their forces to counter threats, kept safe during their split-second Warp travel by the intricate wards worked into their wargear.", text: "If your Army Faction is GREY KNIGHTS, at the end of your opponent's Fight phase, you can select a number of units (see below) from your army that are on the battlefield (excluding units that are within Engagement Range of one or more enemy units), provided every model in those units has this ability. The maximum number of units you can select depends on the battle size, as follows:\n- Incursion: Up to 2 units\n- Strike Force: Up to 3 units\n- Onslaught: Up to 4 units\nOnce you have made your selections, remove those units from the battlefield and place them into Strategic Reserves." }
        ],
        detachments: [
            {
                name: "Brotherhood Strike",
                flavour: "When supernatural terrors endanger the very survival of Humanity, strike forces assembled from the might of the Grey Knights brotherhoods deploy to end the threat. Forewarned by the scrying of the Prognosticars, these hosts bring a balance of infantry and armour assets best suited to completing their mission, allied by the mightiest war leaders the Chapter can muster. No weapon or relic of esoteric technology is forbidden to such strike forces. In particular, these warriors wield the potent sorceries of Titan, not only to blast their enemies with excoriating energies but also to rapidly traverse battlefields through coruscating Warp gates. By employing such arcane tactics, the Grey Knights can rapidly outmanoeuvre even the most well-entrenched or fast-moving foes and focus the full wrath of their brotherhood precisely where it is most needed. Heretical rituals are cast into ruin, daemonic demagogues exorcised and slain, and the mightiest foes of the Imperium are purged without mercy by these warrior hosts.",
                rule: { name: "Fury of Titan", flavour: "Erupting from whirling Warp gates with their Nemesis blades blazing, squads of Grey Knights cut a bloody path through their enemies before the foe even realise their peril.", text: "Each time a unit from your army is set up using the Deep Strike ability, until the end of the turn, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "Banishing Wave (Psychic)", cost: 20, restriction: "GREY KNIGHTS model only.", text: "This warrior mystic harnesses the empyric overspill of teleport flares and Warp gates, channelling them into shock waves of purifying flame.\n\nEach time the bearer's unit is set up using the Deep Strike ability, roll one D6 for each enemy unit within 12\" of the bearer: on a 2-5, that unit suffers 1 mortal wound; on a 6, that unit suffers D3 mortal wounds." },
                    { name: "Blinding Aura", cost: 10, restriction: "GREY KNIGHTS model only.", text: "A coruscating curtain of sorcerous energies surrounds this battle-brother, its radiance too fierce for any but the most strong-willed to look upon.\n\nEach time the bearer's unit is set up using the Deep Strike ability, until the end of the turn, enemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                    { name: "Purity of Purpose", cost: 15, restriction: "GREY KNIGHTS model only.", text: "This warrior's single-minded devotion to duty is exemplary, driving them into the fiercest fires of battle with no thought of hesitation.\n\nEach time the bearer's unit is set up using the Deep Strike ability, until the end of the turn, you can re-roll Charge rolls made for the bearer's unit." },
                    { name: "Tome of Forbidden Ways", cost: 25, restriction: "GREY KNIGHTS model only.", text: "Drawn from the Chambers of Purity under special dispensation, this ancient book reveals sorcerous paths that none but the bravest and most mighty dare walk.\n\nWhile the bearer is on the battlefield or in Strategic Reserves, add 1 to the number of units from your army that you can select for the Gate of Infinity rule." },
                ],
                stratagems: [
                    { name: "Truesilver Channelling", cp: 2, type: "Strategic Ploy", when: "Fight phase.", target: "One GREY KNIGHTS INFANTRY unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, Psychic weapons equipped by models in your unit have the [Devastating Wounds] ability.", restrictions: "" },
                    { name: "Combat Manifestation", cp: 1, type: "Epic Deed", when: "Your Movement phase.", target: "One GREY KNIGHTS unit from your army that is arriving using the Deep Strike ability this phase.", effect: "Set your unit up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge.", restrictions: "" },
                    { name: "Purgation Pattern", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One GREY KNIGHTS unit from your army that was set up using the Deep Strike ability this turn and has not been selected to shoot this phase.", effect: "Until the end of the phase, weapons equipped by models in your unit have the [Sustained Hits 1] ability.", restrictions: "" },
                    { name: "Duty Unending", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit within Engagement Range of one or more GREY KNIGHTS units from your army Falls Back.", target: "One of those GREY KNIGHTS units that is not within Engagement Range of one or more enemy units.", effect: "If your unit has the Deep Strike ability, it can be placed into Strategic Reserves.", restrictions: "" },
                    { name: "Shining Veil", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS unit that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit has the Stealth ability.", restrictions: "" },
                    { name: "Expeditious Exit", cp: 2, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One GREY KNIGHTS PSYKER INFANTRY unit from your army.", effect: "If every model in your unit has the Deep Strike ability, remove your unit from the battlefield and place it into Strategic Reserves.\n\nDesigner's Note: This Stratagem allows you to remove a unit in addition to those removed using the Gate of Infinity rule, and it allows you to remove a unit within Engagement Range of one or more enemy units.", restrictions: "" },
                ]
            },
            {
                name: "Hallowed Conclave",
                flavour: "The indomitable core of the Grey Knights' fighting forces are their Terminator-armoured battle-brothers. When enough of these heavily equipped combatants gather, their amassed strength and resilience are a match for hosts of enemies many times their number. Incoming fire rattles from blessed and warded Terminator plate while hostile sorcery dwindles to nothing before the Grey Knights' combined Aegis. In return, the hulking templars of Titan maintain unceasing firepower and banishing magicks that winnow the enemy's ranks before their inevitable and overwhelming charge crashes home. Though surrounded by screaming foes, the Grey Knights hack a relentless path ever deeper with their Nemesis blades and hammers singing in their fists. Unstoppable, indefatigable, the Terminators press forward to shatter diabolical rites, seal diabolical Warp gates, slay possessed tyrants and carve the will of the Emperor into the flesh of their foes.",
                rule: { name: "Duty Before All", flavour: "Every Grey Knights Terminator is a tower of strength, a massively armoured living war engine clad in warded truesilver. Seeking to bar the path of such warriors, to entrap them or deny their will, is as futile a course of action as trying to halt an avalanche with bare hands alone.", text: "GREY KNIGHTS TERMINATOR units from your army are eligible to shoot and declare a charge in a turn in which they Fell Back.", restrictions: "" },
                enhancements: [
                    { name: "Eye of the Augurium", cost: 25, restriction: "GREY KNIGHTS model only.", text: "A miniature facsimile of the silver mirrors used by the Prognosticars, this artefact affords its bearer a glimpse of where they will be needed most in the heat of battle.\n\nOnce per battle round, the bearer can use this Enhancement. If it does, you can target the bearer's unit with the Fire Overwatch or Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this turn." },
                    { name: "Inescapable Judgement (Psychic)", cost: 20, restriction: "GREY KNIGHTS model only.", text: "So crushing is this warrior's psychic presence that those he scorns as cowards are slain even as they flee, withering beneath the weight of his disgust.\n\nEach time an enemy unit within Engagement Range of the bearer's unit Falls Back, the bearer can use this Enhancement. If it does, roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds. These mortal wounds are Psychic Attacks." },
                    { name: "Sanctic Reaper", cost: 15, restriction: "GREY KNIGHTS TERMINATOR model only.", text: "A veteran of dozens of purgation campaigns, this champion has honed his combat style to cut a bloody path through massed foes easily.\n\nAdd 3 to the Attacks characteristic of the bearer's melee weapons." },
                    { name: "Nemesis Rounds", cost: 10, restriction: "GREY KNIGHTS TERMINATOR model only.", text: "Empowered through the invocation of true names and carved spells of seeking, each of these precious rounds veers unerringly toward its intended target.\n\nEach time you target the bearer's unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ while resolving that Stratagem." },
                ],
                stratagems: [
                    { name: "Giants of the Battlefield", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One GREY KNIGHTS TERMINATOR unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in your unit.", restrictions: "" },
                    { name: "Unending Fidelity", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not shot or fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can shoot or fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Point-blank Purgation", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One GREY KNIGHTS INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, storm bolter weapons equipped by models in your unit have the [Pistol] and [Twin-linked] abilities.", restrictions: "" },
                    { name: "Grind Them Underfoot", cp: 1, type: "Strategic Ploy", when: "Your Charge phase, just after a GREY KNIGHTS TERMINATOR unit from your army ends a Charge move.", target: "That GREY KNIGHTS unit.", effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).", restrictions: "" },
                    { name: "Precognitive Strategies", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One GREY KNIGHTS INFANTRY unit from your army that is within 9\" of that enemy unit and not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to D6\".", restrictions: "" },
                    { name: "Shining Resolve", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                ]
            },
            {
                name: "Banishers",
                flavour: "The esoteric arsenal of the Grey Knights is as potent as their armoury of more conventional munitions. Indeed, when the most corrupt or supernatural foes must be defeated, these arcane weapons may prove more powerful than any volume of bolt shells and blades. By bringing together their mightiest psychic warriors and focusing the empyric powers they have learned to wield as no others could, the Grey Knights harness the terrifying might of the Warp without succumbing to its insidious taint. The result is a strike force of warriors wreathed in unnatural flame and shielded by potent warding sigils that whirl about them like an arcane constellation. The air shudders with psychic overpressure as the Grey Knights advance, vox-amplified voices raised in chants of banishment and malediction that ring above the thunder of their guns and the crackle of their blades. Warp-spawned entities are blasted into ectoplasmic slicks before their advance, while more corporeal foes fall as swiftly before the psychic might of Titan made manifest.",
                rule: { name: "Channelled Force", flavour: "So potent is the interwoven mind-choir of this strike force that each individual can syphon off a portion of its gestalt might to empower their weapons of war without diminishing the whole. The result is Nemesis force weapons that blaze like caged psychic stars, leaving trails of witchfire blazing behind every swing and blasting victims into nothing with a single strike.", text: "Each time a GREY KNIGHTS unit from your army is selected to fight, that unit can take a Leadership test. If that test is passed, select one of the following rules. Until the end of the phase, that unit has that rule.\n- Melee weapons equipped by models in this unit with the [Psychic] ability also have the [Sustained Hits 1] ability.\n- Melee weapons equipped by models in this unit with the [Psychic] ability also have the [Lethal Hits] ability.", restrictions: "" },
                enhancements: [
                    { name: "Sigil of the Hunt", cost: 10, restriction: "GREY KNIGHTS model only.", text: "Wrought from truesilver and noctilith, this ancient arcane sigil renders its bearer and comrades supernaturally accurate in battle.\n\nIn your Shooting phase, each time a model in the bearer's unit makes an attack, re-roll a Hit roll of 1." },
                    { name: "The Ephemeral Tome", cost: 15, restriction: "GREY KNIGHTS INFANTRY model only.", text: "A sorcerous volume whose treatises on the impermanence of reality change constantly, this tome's harnessed power allows the bearer to flicker in and out of phase with realspace.\n\nAt the start of your Shooting phase, if the bearer's unit is not within Engagement Range of one or more enemy units, the bearer can use this Enhancement. If it does, the bearer's unit can make a Normal move of up to D6\", and until the end of the turn, the bearer's unit is not eligible to declare a charge." },
                    { name: "The Sixty-sixth Seal", cost: 25, restriction: "GREY KNIGHTS model only.", text: "One of the six hundred and sixty-six seals of purity once affixed to the tomb of Vasandrius, the talismanic properties of this artefact lend a keen edge of sacred intolerance to their bearer's armaments.\n\nIn your Shooting phase, each time a model in the bearer's unit makes an attack, improve the Armour Penetration characteristic of that attack by 1." },
                    { name: "Pyresoul (Psychic)", cost: 20, restriction: "GREY KNIGHTS model only.", text: "So fiercely do the psychic flames of this warrior's soul burn that they can be conjured forth in blazing columns of spiritual immolation to annihilate the foe.\n\nAt the start of your Shooting phase, the bearer can use this Enhancement. If it does, select one enemy unit within 24\" of and visible to the bearer; that unit suffers D3 mortal wounds." },
                ],
                stratagems: [
                    { name: "Hexwrought Reprisal", cp: 1, type: "Epic Deed", when: "End of any phase.", target: "One GREY KNIGHTS PSYKER unit from your army that is on the battlefield and suffered one or more mortal wounds this phase.", effect: "Select one enemy unit which inflicted one or more mortal wounds on your unit this phase, then roll a number of dice equal to the number of mortal wounds your unit suffered this phase: for each 2+, that enemy unit suffers one mortal wound (to a maximum of 6 mortal wounds). These mortal wounds are Psychic Attacks.", restrictions: "" },
                    { name: "Warding Chant", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS PSYKER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against attacks with an unmodified Damage characteristic of 1.", restrictions: "" },
                    { name: "Chaos Bane", cp: 1, type: "Epic Deed", when: "Your Shooting phase.", target: "One GREY KNIGHTS PSYKER unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Anti-Chaos 4+] ability.", restrictions: "" },
                    { name: "Celerity", cp: 1, type: "Epic Deed", when: "Your Charge phase.", target: "One GREY KNIGHTS PSYKER INFANTRY unit from your army.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Circle of Sanctuary", cp: 1, type: "Epic Deed", when: "Start of your opponent's Movement phase.", target: "One GREY KNIGHTS CHARACTER model from your army.", effect: "Until the end of the phase, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" horizontally of your model.", restrictions: "" },
                    { name: "Shadow of Anarch", cp: 1, type: "Epic Deed", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One GREY KNIGHTS PSYKER unit from your army that is within 9\" of that enemy unit and is not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\" or, if it has the Deep Strike ability, it can be placed into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Sanctic Spearhead",
                flavour: "Many Grey Knights task forces are supported by assets drawn from the Chapter's Armoury, be it ward-inscribed armoured transports, ancient Dreadnought battle-brothers, swift Stormraven Gunships or towering Nemesis Dreadknights piloted by the Chapter's greatest warriors. Yet there are threats and foes so monstrous that they must be countered with a mass host of these sanctified engines of war. At such times, the ground shudders beneath pounding adamantine feet, and the grinding tracks of the mightiest battle tanks to roll from the Deimosian forges. Entire flights of silver-grey gunships streak overhead, their holds packed with psychic battle-brothers, their wings guarded by nimble fighter craft. Combat walkers stride from teleport flares just as the rest of their armoured onslaught hits the enemy lines like a thunderbolt, leaving nothing but devastation in their wake. In this way, the Grey Knights shatter the mightiest enemy armies or break through to critical locations in time to stave off calamity.",
                rule: { name: "Mailed Fist", flavour: "Such concentrations of the Grey Knights' armoured power are only unleashed when time is of the essence, and the price of defeat would be utterly disastrous. Knowing all this, these hosts strike with tremendous force and unstoppable momentum, a mailed fist driven straight down the enemy's throat.", text: "Each time a GREY KNIGHTS VEHICLE unit from your army Advances, do not make an Advance roll for it; until the end of the phase, add 6\" to the Move characteristic of models in that unit, and until the end of the turn, ranged weapons equipped by models in that unit have the [Assault] ability.", restrictions: "" },
                enhancements: [
                    { name: "Driven by Duty", cost: 10, restriction: "GREY KNIGHTS WALKER model only.", text: "So single-minded is this warrior in their devotion to the Grey Knights' duty that they press ever forward without pause or respite.\n\nEach time the bearer's unit Piles In or Consolidates, the bearer can move up to 6\" instead of up to 3\"." },
                    { name: "Quickening Foci", cost: 15, restriction: "GREY KNIGHTS INFANTRY model only.", text: "Worked into purity seals or armour inscriptions, these cantrips of haste lend the bearer and their comrades a sudden burst of supernatural speed.\n\nIn your Movement phase, each time the bearer's unit disembarks from a TRANSPORT, until the end of the turn, you can re-roll Charge rolls made for that unit." },
                    { name: "Sigil of Exigence", cost: 30, restriction: "GREY KNIGHTS model only.", text: "This powerful and ancient sorcerous ward reacts to imminent peril by wrenching the bearer momentarily out of sync with reality itself.\n\nOnce per battle, in your opponent's Shooting phase, when the bearer's unit is selected as the target of a ranged attack, you can remove the bearer's unit from the battlefield and then set it back up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy units. If the bearer's unit is no longer an eligible target, your opponent can then select new targets for any attacks that had targeted the bearer's unit." },
                    { name: "Spiritus Machina", cost: 25, restriction: "GREY KNIGHTS INFANTRY model only.", text: "Thought to date back to Old Night, this device allows the bearer to draw targeting data from machine spirit senses and entwine it with their own perceptions.\n\nIn your Shooting phase, each time the bearer's unit is selected to shoot, if the bearer's unit disembarked from a TRANSPORT this turn, until the end of the phase, each time a model in the bearer's unit makes an attack, you can re-roll the Wound roll." },
                ],
                stratagems: [
                    { name: "Truesilver Will", cp: 1, type: "Epic Deed", when: "Any phase, just after a GREY KNIGHTS PSYKER VEHICLE unit from your army suffers a mortal wound.", target: "That GREY KNIGHTS PSYKER VEHICLE unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 4+ ability against mortal wounds.", restrictions: "" },
                    { name: "Abominus-class Targets", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One GREY KNIGHTS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Armoured Aegis", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One GREY KNIGHTS PSYKER VEHICLE unit from your army.", effect: "One model in your unit regains up to 3 lost wounds.", restrictions: "" },
                    { name: "Redoubled Assault", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a GREY KNIGHTS VEHICLE unit from your army Falls Back.", target: "That GREY KNIGHTS VEHICLE unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Force Wave", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One GREY KNIGHTS VEHICLE unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.", restrictions: "" },
                    { name: "Argent Wrath", cp: 1, type: "Strategic Ploy", when: "Your Charge phase, just after a GREY KNIGHTS VEHICLE unit from your army ends a Charge move.", target: "That GREY KNIGHTS VEHICLE unit.", effect: "Each enemy unit within 3\" of your unit must take a Battle-shock test, subtracting 1 from that test.", restrictions: "" },
                ]
            },
            {
                name: "Augurium Task Force",
                flavour: "Empyric scrying, ancient prophecies of cataclysmic events, Warp-sent visions experienced by the Chapter's most potent psykers: by such esoteric means are the Grey Knights sometimes forewarned of where, when and how a threat will arise in far more detail even than is usual. Such omens are never squandered. When allowed to truly prepare, the warriors of Titan ensure they are positioned to prevent the rising peril rapidly. Battles of this sort see the Grey Knights remaining ahead of their enemies as they employ their foreknowledge to anticipate and outmanoeuvre the foe's every strike. Bands of steely-eyed battle-brothers step from blazing teleport flares to gun down flanking forces. Champions of Titan intervene at pivotal moments to send summoning rituals awry or bring supernatural portals crashing down in ruin. Locking blades with fate itself, the Grey Knights hack and parry, stab and slice until they have carved the future into a new and bloody form that benefits the Imperium.",
                rule: { name: "Prescient Redeployment", flavour: "Combining the psychic disciplines of precognition and translocation, the Grey Knights rapidly relocate in response to strategic manoeuvres the foe has yet to make.", text: "From the second battle round onwards, at the start of your Movement phase, if you did not select the maximum number of GREY KNIGHTS units from your army using the Gate of Infinity ability at the end of your opponent's previous turn, you can select one GREY KNIGHTS unit from your army that is on the battlefield that could have been selected using the Gate of Infinity ability. Remove that unit from the battlefield and place it into Strategic Reserves.\n\nDesigner's Note: This means that your unit can retain its position on the battlefield at the end of your Command phase, and then be placed into Strategic Reserves at the start of your Movement phase, to set it up again in your Reinforcements step in another position.", restrictions: "" },
                enhancements: [
                    { name: "Grimoire of Conjunctions", cost: 10, restriction: "GREY KNIGHTS model only.", text: "This crumbling and code-locked tome details propitious astrological conjunctions beneath whose prophesied stars powerful foes may be struck down.\n\nOnce per battle, at the start of the Fight phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 4 to the Strength characteristic of melee weapons equipped by the bearer." },
                    { name: "Shield of Prophecy", cost: 20, restriction: "GREY KNIGHTS model only.", text: "Foreknowledge of the foe's offensive capabilities allows tailored incantations of warding to be unleashed at the critical moment.\n\nOnce per battle, at the start of the battle round, the bearer can use this Enhancement. If it does, until the end of the battle round, add 2 to the Toughness characteristic of models in the bearer's unit." },
                    { name: "A Foot in the Future", cost: 15, restriction: "GREY KNIGHTS model only.", text: "Stratego-prescient telecasts scroll over this warrior's heads-up display, providing them with tactical battlefield foretellings to which they swiftly react.\n\nEach time the bearer's unit is set up in your Reinforcements step, the bearer can use this Enhancement. If it does, the bearer's unit can make a Normal move of up to D6\", and until the end of the turn, the bearer's unit is not eligible to declare a Charge." },
                    { name: "Doomseer's Amulet", cost: 25, restriction: "GREY KNIGHTS model only.", text: "The cruel powers of this forbidden artefact cause foes to perceive the wearer as a death omen drawn from their culture, manifested to prophecy their doom.\n\nEach time the bearer's unit is set up in your Reinforcements step, the bearer can use this Enhancement. If it does, select one enemy unit within 12\" of and visible to the bearer. That enemy unit must take a Battle-shock test, subtracting 1 from that test." },
                ],
                stratagems: [
                    { name: "Aggressive Anticipation", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One GREY KNIGHTS PSYKER unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack's Weapon Skill or Ballistic Skill characteristics and/or any or all modifiers to the Hit roll.", restrictions: "" },
                    { name: "Appointed Hour", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One GREY KNIGHTS PSYKER unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Forewarned Evasion", cp: 1, type: "Epic Deed", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS WALKER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Necessary End", cp: 1, type: "Epic Deed", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. If the result is greater than the current battle round number, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Redirected Strike", cp: 1, type: "Epic Deed", when: "End of your Command phase.", target: "One GREY KNIGHTS PSYKER unit from your army that is not within Engagement Range of one or more enemy units.", effect: "If your unit has the Deep Strike ability, it can be placed into Strategic Reserves.\n\nDesigner's Note: This Stratagem lets players utilise abilities that retain control of objective markers and react to their missions and objectives with this unit.", restrictions: "" },
                    { name: "Mirage of Echoes", cp: 1, type: "Strategic Ploy", when: "The Reinforcements step of your opponent's Movement phase, just after an enemy unit is set up.", target: "One GREY KNIGHTS PSYKER unit from your army that is within 12\" of that enemy unit and is not within Engagement Range of one or more enemy units.", effect: "If your unit has the Deep Strike ability, it can be placed into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Warpbane Task Force",
                flavour: "When daemonic entities corrupt the worlds of the Imperium, Grey Knights forces strike to cleanse unhallowed ground and restore the sanctity of the Emperor's domain. Such formations are raised when only the most obscure and esoteric rituals of purgation will drive the taint of Chaos back into the depths of the Warp. Striding fearlessly into malignant hellscapes, the warriors of the Order of Purifiers lead the assault. The combined psychic might of these anointed champions manifests in an azure fire that ignites the bodies and souls of unclean foes and scours away the taint of witchcraft and infernal corruption. In place of this excised perversion, an ensorcelled zone of consecration is created, within which the Grey Knights are emboldened and empowered.",
                rule: { name: "Hallowed Ground", flavour: "Purging corrupted nodes of Warp energy, the Grey Knights establish an ever-expanding area of hallowed ground within which their psychic powers and indomitable resolve are greatly enhanced.", text: "Certain areas of the battlefield are within your army's Hallowed Ground, as follows:\n- Your deployment zone is always within your army's Hallowed Ground.\n- The area of the battlefield within 6\" of one or more PURIFIER SQUAD units from your army is within your army's Hallowed Ground.\n- At the start of any phase, if you control at least half of the objective markers within No Man's Land, until the end of that phase, No Man's Land is within your army's Hallowed Ground.\n- At the start of any phase, if you control at least half of the objective markers within your opponent's deployment zone, until the end of that phase, your opponent's deployment zone is within your army's Hallowed Ground.\nEach time a model in a GREY KNIGHTS unit from your army makes a ranged attack that targets a visible target or makes a melee attack, re-roll a Hit roll of 1. If that unit is a PURIFIER SQUAD and/or is wholly within your army's Hallowed Ground, you can re-roll the Hit roll instead.", restrictions: "" },
                enhancements: [
                    { name: "Mandulian Reliquary", cost: 20, restriction: "GREY KNIGHTS model only.", text: "This reliquary contains a single finger bone taken from the body of the feted former Grand Master, Mandulis. It serves as a symbol of unity and duty.\n\nWhile the bearer's unit is not Battle-shocked, add 3 to the bearer's Objective Control characteristic." },
                    { name: "Radiant Champion", cost: 15, restriction: "GREY KNIGHTS INFANTRY model only.", text: "This warrior is a master slayer whose blade has found the cursed hearts of countless corrupted foes. When fighting within realms cleansed by eldritch power, his psychic might manifests in a nimbus of searing light, and his strikes inflict terrible wounds upon flesh and soul.\n\nThe bearer's melee weapons have the [Precision] ability, and while the bearer is wholly within your army's Hallowed Ground, each time a melee attack made by the bearer scores a wound, the target of that attack suffers 1 mortal wound in addition to any normal damage." },
                    { name: "Phial of the Abyss", cost: 25, restriction: "GREY KNIGHTS INFANTRY model only.", text: "Gifted by the Prognosticars of the Augurium, this ampoule contains cosmic energies syphoned from the event horizon of a Warp singularity. At the prophesied hour, the vial shatters, its contents swirling around the bearer and wreathing them in a localised field of time and light distortion.\n\nModels in the bearer's unit have the Stealth ability." },
                    { name: "Paragon of Sanctity", cost: 10, restriction: "GREY KNIGHTS model only.", text: "This warrior sorcerer lends their spiritual strength to allies fighting amidst unholy corruption, bolstering their spiritual resolve.\n\nOnce per battle, at the start of any phase, the bearer can select one friendly GREY KNIGHTS unit within 18\" of and visible to it. If it does, until the end of the phase, that unit is within your army's Hallowed Ground." },
                ],
                stratagems: [
                    { name: "Sanctified Kill Zone", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One GREY KNIGHTS unit from your army that has not been selected to shoot or fight this phase and that is wholly within your army's Hallowed Ground.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1, or, re-roll the Wound roll instead if your unit is a PURIFIER SQUAD.", restrictions: "" },
                    { name: "Flames of Sanctity", cp: 1, type: "Strategic Ploy", when: "End of the Fight phase.", target: "One PURIFIER SQUAD unit from your army that was eligible to fight this phase.", effect: "Roll one D6 for each enemy unit within 6\" of your unit, adding 1 to the result if your unit includes CASTELLAN CROWE: on a 4+, that enemy unit suffers D3 mortal wounds.", restrictions: "" },
                    { name: "Hallowed Beacon", cp: 1, type: "Battle Tactic", when: "Reinforcements step of your Movement phase.", target: "One GREY KNIGHTS INFANTRY unit (excluding TERMINATOR units) that is arriving using the Deep Strike ability this phase.", effect: "Set up your unit wholly within your army's Hallowed Ground and more than 6\" horizontally away from all enemy units.", restrictions: "" },
                    { name: "Fires of Covenant", cp: 1, type: "Battle Tactic", when: "Start of your opponent's Movement phase.", target: "One GREY KNIGHTS INFANTRY unit from your army.", effect: "Until the end of the phase, each time an enemy unit is set up or ends a Normal, Advance or Fall Back move within 6\" of your unit, roll one D6, adding 2 to the result if your unit is wholly within your army's Hallowed Ground: on a 4+, that enemy unit suffers D3 mortal wounds.", restrictions: "" },
                    { name: "Aegis Eternal", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One GREY KNIGHTS INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit that are wholly within your Hallowed Ground have a 4+ invulnerable save.", restrictions: "" },
                    { name: "Repelling Sphere", cp: 1, type: "Battle Tactic", when: "Start of your opponent's Charge phase.", target: "One GREY KNIGHTS INFANTRY unit from your army.", effect: "Until the end of the phase, each time an enemy unit declares a charge and your unit is one of the targets of that charge, subtract 1 from the Charge roll, or subtract 2 instead if your unit is wholly within your army's Hallowed Ground.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "gk-brother-captain",
                        "name": "Brother-captain",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "5\"",
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
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
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
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hammerhand",
                                        "Eye of Judgement"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Terminator",
                                "Imperium",
                                "Brother-Captain"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Brother-Captain This model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-brotherhood-champion",
                        "name": "Brotherhood Champion",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision",
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
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Clarion of Haste",
                                        "Inspiring Exemplar"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Brotherhood Champion"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Purgation Squad; Strike Squad.",
                        "compositionText": "1 Brotherhood Champion This model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-brotherhood-chaplain",
                        "name": "Brotherhood Chaplain",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 5,
                                "ld": "5+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crozius arcanum",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Zealous Path",
                                        "Litanies of Sanctity"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Terminator",
                                "Imperium",
                                "Brotherhood Chaplain"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Brotherhood Chaplain This model is equipped with: storm bolter; crozius arcanum."
                },
                {
                        "id": "gk-brotherhood-librarian",
                        "name": "Brotherhood Librarian",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Storm bolter",
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
                                                "name": "Vortex of Doom",
                                                "range": "18\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
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
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctic Hood",
                                        "Haloed in Soulfire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Terminator",
                                "Psyker",
                                "Imperium",
                                "Brotherhood Librarian"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Brotherhood Librarian This model is equipped with: Nemesis force weapon; Vortex of Doom."
                },
                {
                        "id": "gk-brotherhood-techmarine",
                        "name": "Brotherhood Techmarine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Forge bolter",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Grav-pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Omnissian power axe",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Servo-arms",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
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
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Techmarine",
                                        "Blessing of the Omnissiah",
                                        "Guardians of the Machine"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Brotherhood Techmarine"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Purgation Squad; Purifier Squad; Strike Squad.",
                        "compositionText": "1 Brotherhood Techmarine This model is equipped with: forge bolter; grav-pistol; Omnissian power axe; servo-arm."
                },
                {
                        "id": "gk-castellan-crowe",
                        "name": "Castellan Crowe",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Purifying Flame",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Black Blade of Antwyr",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Champion of the Order of Purifiers",
                                        "Foresight"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Castellan Crowe"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following unit: Purifier Squad.",
                        "compositionText": "1 Castellan Crowe – EPIC HERO This model is equipped with: Purifying Flame; storm bolter; Black Blade of Antwyr."
                },
                {
                        "id": "gk-grand-master",
                        "name": "Grand Master",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 7,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
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
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warrior Strategist",
                                        "Might of Titan"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Terminator",
                                "Imperium",
                                "Grand Master"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Grand Master This model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-grand-master-in-nemesis-dreadknight",
                        "name": "Grand Master in Nemesis Dreadknight",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 225
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 13,
                                "ld": "6+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fragstorm grenade launcher",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Gatling psilencer",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy incinerator",
                                                "range": "18\"",
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
                                                "name": "Heavy psycannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Sublimator",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 4",
                                                        "Psychic",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dreadfists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis daemon greathammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis flail",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis mace",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Character 2+",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Surge of Wrath",
                                        "Warrior Strategist"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Walker",
                                "Psyker",
                                "Imperium",
                                "Grand Master In Nemesis Dreadknight"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Grand Master in Nemesis Dreadknight This model is equipped with: dreadfists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "gk-grand-master-voldus",
                        "name": "Grand Master Voldus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 7,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Searing Purity",
                                                "range": "12\"",
                                                "a": "D3+1",
                                                "bs": "2+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Malleus Argyrum",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
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
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctuary",
                                        "Hammer Aflame"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Terminator",
                                "Imperium",
                                "Grand Master Voldus"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "leaderText": "This model can be attached to the following units: Brotherhood Terminator Squad; Paladin Squad.",
                        "compositionText": "1 Grand Master Voldus – EPIC HERO This model is equipped with: Searing Purity; storm bolter; Malleus Argyrum."
                },
                {
                        "id": "gk-venerable-dreadnought",
                        "name": "Venerable Dreadnought",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
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
                                                "name": "Heavy plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
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
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dreadnought combat weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Guidance of the Ancients"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Character",
                                "Psyker",
                                "Smoke",
                                "Imperium",
                                "Venerable Dreadnought"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Venerable Dreadnought This model is equipped with: assault cannon; storm bolter; Dreadnought combat weapon."
                },
                {
                        "id": "gk-brotherhood-terminator-squad",
                        "name": "Brotherhood Terminator Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 150
                                },
                                {
                                        "models": 5,
                                        "cost": 185
                                },
                                {
                                        "models": 8,
                                        "cost": 300
                                },
                                {
                                        "models": 10,
                                        "cost": 375
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Force Edge",
                                        "Ancient’s Banner",
                                        "Apothecary’s Narthecium"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Psyker",
                                "Terminator",
                                "Grenades",
                                "Imperium",
                                "Brotherhood Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Justicar 3-9 Terminators Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-strike-squad",
                        "name": "Strike Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 120
                                },
                                {
                                        "models": 10,
                                        "cost": 240
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctifying Ritual"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Strike Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Justicar 4-9 Grey Knights Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-razorback",
                        "name": "Razorback",
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
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
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fire Focus"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Imperium",
                                "Razorback"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Razorback This model is equipped with: twin heavy bolter; armoured tracks. TRANSPORT This model has a transport capacity of 6 GREY KNIGHTS INFANTRY models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "gk-rhino",
                        "name": "Rhino",
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Truesilver Aegis"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Imperium",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Rhino This model is equipped with: storm bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 GREY KNIGHTS INFANTRY models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "gk-interceptor-squad",
                        "name": "Interceptor Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                },
                                {
                                        "models": 10,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Personal Teleporters"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Interceptor Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Interceptor Justicar 4-9 Interceptors Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-land-raider",
                        "name": "Land Raider",
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
                                                "name": "Godhammer lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
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
                                                "name": "Storm bolter",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Imperium",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Land Raider This model is equipped with: 2 godhammer lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 GREY KNIGHTS INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-land-raider-crusader",
                        "name": "Land Raider Crusader",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "6+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Hurricane bolter",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
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
                                                "name": "Storm bolter",
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
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Grenades",
                                "Imperium",
                                "Land Raider",
                                "Crusader"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Land Raider Crusader This model is equipped with: 2 hurricane bolters; twin assault cannon; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 16 GREY KNIGHTS INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-land-raider-redeemer",
                        "name": "Land Raider Redeemer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "6+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flamestorm cannon",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Multi-melta",
                                                "range": "18\"",
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
                                                "name": "Storm bolter",
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
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Grenades",
                                "Imperium",
                                "Land Raider",
                                "Redeemer"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Land Raider Redeemer This model is equipped with: 2 flamestorm cannons; twin assault cannon; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 GREY KNIGHTS INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-nemesis-dreadknight",
                        "name": "Nemesis Dreadknight",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 13,
                                "ld": "6+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Gatling psilencer",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy incinerator",
                                                "range": "18\"",
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
                                                "name": "Heavy psycannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Dreadfists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Nemesis daemon greathammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Nemesis greatsword – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Indomitable Spirit"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Psyker",
                                "Imperium",
                                "Nemesis Dreadknight"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Nemesis Dreadknight This model is equipped with: dreadfists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "gk-paladin-squad",
                        "name": "Paladin Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 180
                                },
                                {
                                        "models": 5,
                                        "cost": 225
                                },
                                {
                                        "models": 8,
                                        "cost": 360
                                },
                                {
                                        "models": 10,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "5\"",
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
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Attuned Onslaught",
                                        "Ancient’s Banner",
                                        "Apothecary's Narthecium"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Terminator",
                                "Grenades",
                                "Imperium",
                                "Paladin Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Paragon 3-9 Paladins Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-purgation-squad",
                        "name": "Purgation Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 115
                                },
                                {
                                        "models": 10,
                                        "cost": 230
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Persecution"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Purgation Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Purgator Justicar 4-9 Purgators Every model is equipped with: storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-purifier-squad",
                        "name": "Purifier Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                },
                                {
                                        "models": 10,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "2+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Incinerator",
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
                                        },
                                        {
                                                "name": "Psilencer",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Psycannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Purifying Flame",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Nemesis force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Gate of Infinity"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sanctity of Purpose"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Grenades",
                                "Imperium",
                                "Purifier Squad"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Knight of the Flame 4-9 Purifiers Every model is equipped with: Purifying Flame; storm bolter; Nemesis force weapon."
                },
                {
                        "id": "gk-stormhawk-interceptor",
                        "name": "Stormhawk Interceptor",
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
                                "w": 10,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Icarus stormcannon",
                                                "range": "48\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Las-talon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Skyhammer missile launcher",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
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
                                        },
                                        {
                                                "name": "Typhoon missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
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
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Interceptor"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Smoke",
                                "Imperium",
                                "Stormhawk Interceptor"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Stormhawk Interceptor This model is equipped with: las-talon; skyhammer missile launcher; twin assault cannon; armoured hull."
                },
                {
                        "id": "gk-stormraven-gunship",
                        "name": "Stormraven Gunship",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 280
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hurricane bolter",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Stormstrike missile launcher",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
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
                                        },
                                        {
                                                "name": "Twin heavy plasma cannon – standard",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin multi-melta",
                                                "range": "18\"",
                                                "a": 2,
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
                                                "name": "Typhoon missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
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
                                        "Deadly Demise D6",
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Armoured Resilience"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Transport",
                                "Fly",
                                "Imperium",
                                "Stormraven Gunship"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Stormraven Gunship This model is equipped with: 2 stormstrike missile launchers; twin assault cannon; typhoon missile launcher; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 GREY KNIGHTS INFANTRY models and 1 GREY KNIGHTS VENERABLE DREADNOUGHT model. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "gk-stormtalon-gunship",
                        "name": "Stormtalon Gunship",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Skyhammer missile launcher",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Fly 2+"
                                                ]
                                        },
                                        {
                                                "name": "Twin assault cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
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
                                        },
                                        {
                                                "name": "Twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Typhoon missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
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
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Strafing Run"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Imperium",
                                "Stormtalon Gunship"
                        ],
                        "factionKeywords": [
                                "Grey Knights"
                        ],
                        "compositionText": "1 Stormtalon Gunship This model is equipped with: skyhammer missile launcher; twin assault cannon; armoured hull."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(gk);
})();
