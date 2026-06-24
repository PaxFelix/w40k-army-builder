/**
 * W40K Army Builder — Black Templars (10th Edition)
 *
 * Source: Warhammer 40,000 10th Edition — Black Templars Codex Supplement
 * (publicly available rules reference, wahapedia.ru).
 *
 * VERBATIM DATA RULE: All ability text, weapon profiles, keywords, detachment
 * rules, stratagems and enhancements are transcribed exactly as written, with no
 * abbreviations or summaries, so that nothing is misrepresented rules-wise.
 *
 * This module self-registers into the global W40K_FACTIONS registry, which
 * data/factions.js assembles into the final DATA object.
 *
 * NOTE: Items marked with `verify: true` had their text truncated by the source
 * extractor and were completed from the established printed wording — double-check
 * against your physical codex before competitive play.
 */
(function () {
    "use strict";

    const blackTemplars = {
        id: "black-templars",
        name: "Black Templars",
        icon: "✠",
        allegiance: "Imperium",
        chapter: "Black Templars",
        flavour: "The Black Templars are the most zealous of all the Space Marine Chapters. To them, the Emperor is a literal deity, and there is no oath they will not swear, no vow they will not take or bloody act of battlefield worship they will not perform in his name.",

        // ─── ARMY RULES ──────────────────────────────────────────────────────
        armyRules: [
            {
                name: "Templar Vows",
                flavour: "On the eve of battle, the Black Templars gather to be led in prayer and contemplation by their champions. United in their hatred of the foe, they swear a mighty vow to uphold in the battle ahead.",
                text: "If your Army Faction is ADEPTUS ASTARTES, at the start of the first battle round, select one of the following Vows to be active for ADEPTUS ASTARTES units from your army. While a Vow is active for a unit from your army, that unit has the associated ability shown below.",
                vows: [
                    {
                        name: "Abhor the Witch, Destroy the Witch",
                        text: "Each time this unit declares a charge, if one or more targets of that charge have the PSYKER keyword, you can re-roll the Charge roll. Melee weapons equipped by models in this unit have the [PRECISION] ability while targeting PSYKER units."
                    },
                    {
                        name: "Accept Any Challenge, No Matter the Odds",
                        text: "Each time a model in this unit makes a melee attack, if the Strength characteristic of that attack is less than or equal to the Toughness characteristic of the target, add 1 to the Wound roll."
                    },
                    {
                        name: "Suffer Not the Unclean to Live",
                        text: "This unit is eligible to declare a charge in a turn in which it Fell Back, and each time a model in this unit makes a Pile-in or Consolidation move, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit."
                    },
                    {
                        name: "Uphold the Honour of the Emperor",
                        text: "If this unit has the INFANTRY keyword:\n■ At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.\n■ If the mission you are playing features Actions, this unit is eligible to start to perform an Action in a turn in which it Advanced."
                    }
                ]
            },
            {
                name: "Heirs of Sigismund",
                text: "■ If an ADEPTUS ASTARTES unit has a second Faction keyword on its datasheet, that Faction keyword is the name of that unit's Chapter. For example, High Marshal Helbrecht has both the ADEPTUS ASTARTES and BLACK TEMPLARS Faction keywords, and is therefore from the Black Templars Chapter.\n■ You cannot include units from more than one Chapter in your army.\n■ If your army includes one or more units from the Black Templars Chapter or you are using one of the Detachments found below:\n  ■ ADEPTUS ASTARTES units from your army lose the Oath of Moment army rule (if they have it), and it is replaced with the Templar Vows army rule (see above).\n  ■ You cannot use the 1st Company Task Force Detachment (see Codex: Space Marines).\n  ■ Your army cannot include any ADEPTUS ASTARTES PSYKER models.\n  ■ Your army cannot include the following datasheets from Codex: Space Marines: Gladiator Lancer; Gladiator Reaper; Gladiator Valiant; Impulsor; Land Raider Crusader; Repulsor; Repulsor Executioner (it can, however, include the Black Templars versions of these datasheets)."
            }
        ],

        // ─── DETACHMENTS (Black Templars Codex Supplement) ───────────────────
        detachments: [
            {
                name: "Companions of Vehemence",
                flavour: "The most zealous hosts of the Black Templars kindle their hatred of the God-Emperor's foes until it is a raging inferno; this visceral enmity is used by Companions of Vehemence to fuel violent surges into the enemy lines.",
                rule: {
                    name: "Righteous Fervour",
                    flavour: "With their zealous hatred stoked red-hot by furious sermons and inflammatory prayers, Companions of Vehemence are filled with a wrathful vigour. Only the deaths of the God-Emperor's enemies can assuage their fury, and they will let nothing delay them from unleashing it.",
                    text: "You can re-roll Advance and Charge rolls made for ADEPTUS ASTARTES units from your army.",
                    restrictions: "Your army can include BLACK TEMPLARS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter."
                },
                enhancements: [
                    { name: "Incendiary Animus", cost: 25, restriction: "CHAPLAIN or JUDICIAR model only.", flavour: "This inspirational warrior exudes fierce contempt and loathing for the Emperor's foes, inciting such apoplectic revulsion in their battle-brothers as to drive their blows with vicious strength.", text: "Improve the Armour Penetration characteristic of melee weapons equipped by models in the bearer's unit by 1." },
                    { name: "Oathbound Exemplar", cost: 15, restriction: "ADEPTUS ASTARTES INFANTRY model only.", flavour: "With a ceaseless and booming oratory, this commander exhorts his warriors in their duty to the Emperor. Honour, he declaims, must be pursued relentlessly.", text: "Add 1 to Advance rolls made for the bearer's unit. If the mission pack you are playing features Actions, the bearer's unit is eligible to start to perform an Action in a turn in which it Advanced." },
                    { name: "Merciless Denunciation", cost: 25, restriction: "CHAPLAIN or JUDICIAR model only.", flavour: "Through roared words or ruthless deeds, may the blasphemous be denounced and the worthy driven into a furious rage of sanctified slaughter.", text: "Each time a model in the bearer's unit makes a melee attack, you can re-roll the Hit roll." },
                    { name: "Zealous Vanguard", cost: 20, restriction: "ADEPTUS ASTARTES model only.", flavour: "This warrior is an unstoppable crusader whose hearts burn like twin pyres of eager zeal. Ever at the forefront of combat, he leads his warriors as the tip of the crusade's blade.", text: "Models in the bearer's unit have the Scouts 6\" ability." }
                ],
                stratagems: [
                    { name: "Devout Push", cp: 1, type: "Battle Tactic", flavour: "With a zealous cry, the Black Templars press forward, using their ceramite-armoured bulk to smash into the foe and overwhelm the enemy's lines.", when: "Fight phase.", target: "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".", restrictions: "A unit cannot be targeted with this and the Hearts Hardened to Duty Stratagem in the same phase unless it has the CHAPLAIN or JUDICIAR keywords." },
                    { name: "Hearts Hardened to Duty", cp: 1, type: "Strategic Ploy", flavour: "To suffer not blind aggression is to evade the snares of foul deceit and honourably reject self-aggrandisement.", when: "Fight phase, just before an ADEPTUS ASTARTES INFANTRY unit from your army Consolidates.", target: "That ADEPTUS ASTARTES INFANTRY unit.", effect: "Until the end of the phase, each time a model in your unit makes a Consolidation move, it does not need to end that move closer to the closest enemy model (or the closest enemy unit if the Suffer Not the Unclean to Live Vow is active for it)." },
                    { name: "For the Emperor's Honour!", cp: 1, type: "Battle Tactic", flavour: "Filled with the spirit of Sigismund, his heirs seek out the foe's dark and unclean champions so that they may be crushed in the sight of their thralls.", when: "Fight phase.", target: "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability." },
                    { name: "Pious Enmity", cp: 1, type: "Battle Tactic", flavour: "The warrior priests of a crusade drive Sigismund's heirs into the heart of battle, daring the greatest abominations to face their spiritual strength.", when: "Fight phase.", target: "One CHAPLAIN or JUDICIAR unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a melee attack that targets an enemy unit, re-roll a Hit roll of 1. If that target is a MONSTER or VEHICLE unit, re-roll a Wound roll of 1 as well." },
                    { name: "Heresy Begets Retribution", cp: 1, type: "Strategic Ploy", flavour: "Where enemies dare threaten the warriors of the God-Emperor or seek to escape their deserved death, there must be swift retribution.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One CHAPLAIN or JUDICIAR unit from your army that is within 9\" of that enemy unit and is not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Retribution move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit." },
                    { name: "Dread Crusaders", cp: 1, type: "Strategic Ploy", flavour: "To face the Emperor's transhuman crusaders as they chant their litanies of detestation can chill the soul.", when: "Your opponent's Charge phase, just after an enemy unit declares a charge.", target: "One ADEPTUS ASTARTES INFANTRY unit from your army that was selected as one of the targets of that charge.", effect: "That enemy unit must take a Battle-shock test, subtracting 1 from the result." }
                ]
            },
            {
                name: "Vindication Task Force",
                flavour: "Sacred standards and consecrated banners in great numbers anoint the consecrated battlegrounds of Vindication Task Forces. These brotherhoods stamp the God-Emperor's undeniable authority wherever they strike.",
                rule: {
                    name: "Purge and Sanctify",
                    flavour: "As the battle-brothers of a Vindication Task Force purge the Emperor's domain in fire and blood, they see their holy quest as recovering Humanity's rightful dominion.",
                    text: "■ Each time an attack targets an ANCIENT unit from your army, if that unit is within range of one or more objective markers and the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll.\n■ Each time a CRUSADER SQUAD unit from your army makes a Righteous Zeal move, that unit can end that move as close as possible to the closest objective marker instead of as close as possible to the closest enemy unit.",
                    restrictions: "Your army can include BLACK TEMPLARS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter."
                },
                enhancements: [
                    { name: "Imperialis of the Eternal Crusade", cost: 15, restriction: "ANCIENT model only.", flavour: "This gleaming finial is said to have once topped Terra's holiest spire and been gifted by the third Ecclesiarch to the High Marshal.", text: "Each time an enemy unit selects the bearer's unit as a target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll)." },
                    { name: "Consecrating Aura", cost: 25, restriction: "ADEPTUS ASTARTES model only.", flavour: "The piety and honour of this warrior can be felt wherever he fights. His presence rouses the ardent souls of the Black Templars, warding Sigismund's heirs from the blasphemy of the unbeliever.", text: "Models in the bearer's unit have a 5+ invulnerable save." },
                    { name: "Orb of the Emperor's Aegis", cost: 10, restriction: "ADEPTUS ASTARTES model only.", flavour: "What Dark Age technology may lie inside this icon-wreathed sphere pales compared to its true power: that of the Emperor's blessing.", text: "Models in the bearer's unit have the Deep Strike ability." },
                    { name: "Warden of Honour", cost: 20, restriction: "CRUSADE ANCIENT model only.", flavour: "This lauded guardian is trusted with the stewardship of the crusade's most precious standards.", text: "While the bearer is leading a unit, each time you roll one D6 for the bearer's Vengeful Exhortation ability, add 1 to the result." }
                ],
                stratagems: [
                    { name: "Refusal to Yield", cp: 1, type: "Epic Deed", flavour: "Where honour is upheld, the Emperor's divinity may manifest to grant his pious warrior new strength.", when: "Any phase, just after an ANCIENT model from your army is destroyed.", target: "That ANCIENT model. You can use this Stratagem on that model even though it was just destroyed.", effect: "At the end of the phase, set your model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with its full wounds remaining.", restrictions: "You cannot target the same model with this Stratagem more than once per battle." },
                    { name: "Litanies of Purgation", cp: 1, type: "Battle Tactic", flavour: "Where the Emperor's domain is imperilled by the unholy, the Black Templars vow to cleanse it.", when: "Fight phase.", target: "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if that model's unit is within range of one or more objective markers or the target unit is within range of one or more objective markers, improve the Armour Penetration characteristic of that attack by 1." },
                    { name: "Spoor of the Unholy", cp: 1, type: "Battle Tactic", flavour: "Perhaps guided by visions from the Emperor, Black Templars can pick out heresy wherever it lurks.", when: "Your Shooting phase or the Fight phase.", target: "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability and each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack's Ballistic Skill or Weapon Skill characteristic; the Hit roll." },
                    { name: "Reclaim Our Honour!", cp: 1, type: "Strategic Ploy", flavour: "The sacred standards of a crusade embody its warriors' honour, and no one would see them lost.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit destroys an ANCIENT model from your army that has not been targeted with the Refusal to Yield Stratagem this phase.", target: "One ADEPTUS ASTARTES unit from your army visible to that enemy unit.", effect: "Until the end of the battle, each time an ADEPTUS ASTARTES model from your army makes an attack that targets that enemy unit, add 1 to the Hit roll.", restrictions: "You cannot target that ANCIENT model with the Refusal to Yield Stratagem this phase." },
                    { name: "Recitation of the Revered", cp: 1, type: "Strategic Ploy", flavour: "The Ancient leads a deafening recital of his banner's honours, the projected chant's zeal shaking the foe.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ANCIENT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll." },
                    { name: "Perfervid Intervention", cp: 2, type: "Strategic Ploy", flavour: "When the Emperor blesses his crusaders with the opportunity to seize the initiative, none refuse.", when: "End of your opponent's Charge phase.", target: "One ADEPTUS ASTARTES unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.", effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.", restrictions: "Note that even if this charge is successful, your unit does not receive any Charge bonus this turn." }
                ]
            },
            {
                name: "Godhammer Assault Force",
                flavour: "An armoured assault by the crusaders of the Emperor is terrifying to behold. The doomed enemy are pummelled by heavy weapons fire and deafened by the roar of engine spirits in the moments before the strike falls.",
                rule: {
                    name: "Shock and Awe",
                    flavour: "When the assault ramps slam down and the Black Templars storm forth, what little cohesion their foes retain melts away before the crusaders' holy wrath.",
                    text: "■ Each time an ADEPTUS ASTARTES unit from your army declares a charge, if it disembarked from a TRANSPORT this turn, after selecting the targets of that charge, select one of those targets; that enemy unit must take a Battle-shock test.\n■ Each time a model in an ADEPTUS ASTARTES unit from your army makes a melee attack, if it disembarked from a TRANSPORT this turn, add 1 to the Hit roll.",
                    restrictions: "Your army can include BLACK TEMPLARS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter."
                },
                enhancements: [
                    { name: "Paragon of Fury", cost: 25, restriction: "ADEPTUS ASTARTES model only.", flavour: "This crusader's hatred for the heretic and the unbeliever burns with the fury of a newborn star.", text: "Add 2 to the Strength characteristic of melee weapons equipped by the bearer. Each time a melee attack made by the bearer is allocated to an enemy model, if the bearer disembarked from a TRANSPORT this turn, add 1 to the Damage characteristic of that attack." },
                    { name: "Battle-psalm Precentor", cost: 10, restriction: "ADEPTUS ASTARTES model only.", flavour: "The chanted oratory of this commander rises in volume and stentorian vehemence as he leads his brothers into the charge until he seems like a wrathful war deity closing with his ungodly prey.", text: "Each time the bearer's unit declares a charge, if an enemy unit takes a Battle-shock test as a result of the Shock and Awe Detachment rule, subtract 1 from that Battle-shock test." },
                    { name: "Augury Servo-host", cost: 15, restriction: "ADEPTUS ASTARTES model only.", flavour: "This warrior's auto-senses are linked to a circling host of servo-skulls crafted from the remains of favoured serfs and failed neophytes.", text: "At the start of your Shooting phase, select one enemy unit within 12\" of and visible to the bearer. Until the end of the phase, models in that unit cannot have the Benefit of Cover." },
                    { name: "Herald of Sacred Slaughter", cost: 15, restriction: "ADEPTUS ASTARTES model only.", flavour: "A pious harbinger of the crusade's destructive potential, this warrior pushes forward at the first opportunity, eager to bring the Emperor's judgement to the foe.", text: "In the Declare Battle Formations step, if the bearer starts the battle embarked within a DEDICATED TRANSPORT, that DEDICATED TRANSPORT has the Scouts 9\" ability." }
                ],
                stratagems: [
                    { name: "A Ceaseless Cause", cp: 1, type: "Strategic Ploy", flavour: "There is no room for hesitation or exultation for the Black Templars. With one knot of blasphemy expunged, the crusaders surge in search of the next.", when: "End of the Fight phase.", target: "One ADEPTUS ASTARTES INFANTRY unit from your army that was eligible to fight this phase.", effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". It cannot embark within a TRANSPORT at the end of this move if it disembarked from a TRANSPORT this turn." },
                    { name: "Uncompromising Egress", cp: 1, type: "Strategic Ploy", flavour: "Little can threaten to overwhelm the venerable Land Raider. Its multiple, hydraulically augmented assault ramps slam into closing aggressors, enabling its deadly cargo to deploy quickly.", when: "Your Movement phase.", target: "One LAND RAIDER model from your army that has not been selected to move this phase.", effect: "One ADEPTUS ASTARTES unit embarked within your LAND RAIDER can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of your LAND RAIDER and can be set up within Engagement Range of one or more enemy units." },
                    { name: "Gauntlet of the God-Emperor", cp: 1, type: "Strategic Ploy", flavour: "Like the mailed fist of the Master of Mankind, the crusade's armoured battle tanks, transports and combat walkers smash their way through choked war zones to reach those deserving execution.", when: "Your Movement phase.", target: "One ADEPTUS ASTARTES VEHICLE model from your army that has not been selected to move this phase.", effect: "Until the end of the phase, each time your model makes a Normal or Advance move, it can move horizontally through terrain features." },
                    { name: "Focused Hatred", cp: 1, type: "Strategic Ploy", flavour: "Surging from assault ramps, the Black Templars let none bar them from the most unholy threats, using their armoured might to bludgeon a path into battle.", when: "Your Charge phase, just after you make a Charge roll for an ADEPTUS ASTARTES unit from your army that disembarked from a TRANSPORT this turn.", target: "That ADEPTUS ASTARTES unit.", effect: "Until the end of the phase, each time your unit makes a Charge move, models in your unit can move through models (when doing so, its models can move within Engagement Range of enemy models, but they can only end that move within Engagement Range of enemy models if those enemy models belong to a unit that your unit declared a charge against this turn)." },
                    { name: "Condemnatory Info-screed", cp: 1, type: "Battle Tactic", flavour: "Prepared within their troop compartment by a broadcast litany of their foe's ungodly sins, the crusaders emerge with their hearts full of hatred.", when: "Your Fight phase.", target: "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if it disembarked from a TRANSPORT this turn, re-roll a Wound roll of 1. If that TRANSPORT has the LAND RAIDER keyword, you can re-roll the Wound roll instead." },
                    { name: "Blessed Hull", cp: 2, type: "Battle Tactic", flavour: "Their hulls blessed by the chants of Techmarines and their prayer-servitors, a crusade's war engines can be entreated to withstand the most malign attacks.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS ASTARTES VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack." }
                ]
            },
            {
                name: "Wrathful Procession",
                flavour: "The Black Templars excel at heavy infantry shock assaults. These talents prove especially effective when fighting battles where armoured support is limited, or the terrain is too dense to deploy heavier assets.",
                rule: {
                    name: "Zealous Litanies",
                    flavour: "Employing prayer as other warriors might use combat stimms, the Black Templars roar ritualised words of devotion that whip their ferocity and battle frenzy to near preternatural heights.",
                    text: "At the start of the battle round, you can select one of the Litanies listed below. If you do, until the end of the battle round, that Litany is active and its effects apply to all ADEPTUS ASTARTES INFANTRY and ADEPTUS ASTARTES MOUNTED units from your army.\nChorus of Relentless Hate: Add 2\" to the Move characteristic of models in this unit and add 1 to Advance rolls made for it.\nRite of Perfervid Wrath: Add 1 to the Strength characteristic of melee weapons equipped by models in this unit.\nChant of Deathless Devotion: Models in this unit have a 5+ invulnerable save against ranged attacks.",
                    restrictions: "Your army can include BLACK TEMPLARS units, but it cannot include ADEPTUS ASTARTES units drawn from any other Chapter."
                },
                enhancements: [
                    { name: "Pyrebrand", cost: 25, restriction: "BLACK TEMPLARS model only.", flavour: "Within this relic burns a seemingly eternal flame, believed to have first been lit by Sigismund himself. Its light burns the sight from the foes' eyes just as its tongues of flame have ignited countless pyres.", text: "Models in the bearer's unit have the Stealth ability." },
                    { name: "Sacred Rage", cost: 30, restriction: "ADEPTUS ASTARTES model only.", flavour: "So all-consuming is this warrior's hatred of the foe, so infectious his rage at their continued existence, that it grips those who fight alongside him and goads them to smite their enemies all the more swiftly.", text: "Once per battle, at the start of the Fight phase, the bearer can use this Enhancement. If it does, until the end of the phase, models in the bearer's unit have the Fights First ability." },
                    { name: "Taramond's Censer", cost: 15, restriction: "BLACK TEMPLARS model only.", flavour: "Though the Black Templars are acclimatised to the acrid chemical incense burned within this iron thurible, their foes are not. Its fumes trigger nightmare visions and crippling terror amongst their ranks.", text: "At the start of the Fight phase, each enemy unit within Engagement Range of the bearer's unit must take a Battle-shock test. When doing so, subtract 1 from the result." },
                    { name: "Benediction of Fury", cost: 10, restriction: "CHAPLAIN model only.", flavour: "Borne through a dozen bloody and hard-fought crusades, this crozius arcanum's unique empathokinetic circuitry has absorbed the bellicosity and righteous wrath of every Chaplain who has ever wielded it. As a result, it now strikes with the force of a thunderbolt.", text: "The bearer's melee weapons have the [DEVASTATING WOUNDS] ability." }
                ],
                stratagems: [
                    { name: "Fuelled by Faith", cp: 1, type: "Battle Tactic", flavour: "So powerfully gripped by holy fervour are these warriors that they fight on through even the most grievous wounds to body and mind.", when: "Any phase, just after a mortal wound is allocated to an ADEPTUS ASTARTES unit from your army.", target: "That ADEPTUS ASTARTES unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds." },
                    { name: "Armour of Contempt", cp: 1, type: "Battle Tactic", flavour: "The belligerence and transhuman physiologies of the Adeptus Astartes make them unyielding foes.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1." },
                    { name: "Castigate the Demagogues", cp: 1, type: "Battle Tactic", flavour: "There is nowhere that the architects of heresy can hide from the righteous judgement of the Black Templars.", when: "Fight phase.", target: "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability." },
                    { name: "Brute Fervour", cp: 1, type: "Battle Tactic", flavour: "All the enemy's skill, cunning and trickery come to naught in the face of the Black Templars' direct and unrelenting brutality.", when: "Fight phase.", target: "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1 and you can ignore any or all modifiers to the following: that attack's Weapon Skill characteristic; the Hit roll; the Wound roll." },
                    { name: "Relentless Momentum", cp: 1, type: "Strategic Ploy", flavour: "The sheer momentum and ferocity of so many charging, armoured killers are almost impossible to stop, carrying them forward through rank after rank of the heretical foe.", when: "Fight phase.", target: "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase and is within Engagement Range of one or more enemy units.", effect: "Until the end of the phase, when determining which models in your unit are eligible to fight, any models in it that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit." },
                    { name: "Voice of Devotion", cp: 1, type: "Strategic Ploy", flavour: "In the crucial moment, these battle-brothers switch to the most apposite devotional litany just as they might select the correct weapon from the Chapter's armouries.", when: "Your Command phase.", target: "One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army.", effect: "Select the Chorus of Relentless Hate, Rite of Perfervid Wrath or Chant of Deathless Devotion Litany. Until the end of the battle round, that Litany is active for your unit instead of any other Litany that is active for your army." }
                ]
            }
        ],

        // ─── UNITS ───────────────────────────────────────────────────────────
        units: [
            {
                id: "bt-high-marshal-helbrecht",
                name: "High Marshal Helbrecht",
                role: "character",
                points: [{ models: 1, cost: 120 }],
                stats: { m: "6\"", t: 4, sv: "2+", w: 6, ld: "6+", oc: 3 },
                invuln: "4+",
                baseSize: "60mm",
                weapons: {
                    ranged: [
                        { name: "Ferocity", range: "24\"", a: 2, bs: "2+", s: 5, ap: -1, d: 2, keywords: ["Anti-Infantry 4+", "Devastating Wounds"] }
                    ],
                    melee: [
                        { name: "Sword of the High Marshals – strike", range: "Melee", a: 6, ws: "2+", s: 8, ap: -3, d: 3, keywords: [] },
                        { name: "Sword of the High Marshals – sweep", range: "Melee", a: 12, ws: "2+", s: 6, ap: -3, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Crusade of Wrath", text: "While this model is leading a unit, add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in that unit." },
                        { name: "High Marshal", text: "At the start of the Fight phase, select one enemy unit within Engagement Range of this model's unit and roll one D6, adding 1 to the result for every five models in this model's unit: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6+, that enemy unit suffers D3+3 mortal wounds." }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 High Marshal Helbrecht — Epic Hero. This model is equipped with: Ferocity; Sword of the High Marshals.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Intercessor Squad; Crusader Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Epic Hero", "Grenades", "Imperium", "Tacticus", "Chapter Master", "High Marshal Helbrecht"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-emperors-champion",
                name: "Emperor's Champion",
                role: "character",
                points: [{ models: 1, cost: 100 }],
                stats: { m: "8\"", t: 4, sv: "2+", w: 5, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Black Sword – strike", range: "Melee", a: 6, ws: "2+", s: 8, ap: -3, d: 3, keywords: ["Anti-Character 5+", "Precision"] },
                        { name: "Black Sword – sweep", range: "Melee", a: 10, ws: "2+", s: 6, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader", "Lone Operative"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Chosen of the Emperor", text: "You cannot include more than one EMPEROR'S CHAMPION model in your army." },
                        { name: "Armour of Faith", text: "Once per phase, when an attack is allocated to this model and the saving throw is failed, you can change the Damage characteristic of that attack to 1.", verify: true },
                        { name: "Sworn Champion", text: "Each time this model's unit declares a charge, if one or more of the targets of that charge have the CHARACTER keyword, add 2 to the Charge roll. Once per battle, when this model's unit is selected to fight, if that unit is within Engagement Range of one or more enemy CHARACTER units, this model can use this ability. If it does, until the end of the phase, melee weapons equipped by this model have the [DEVASTATING WOUNDS] ability.", verify: true }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Emperor's Champion. This model is equipped with: bolt pistol; Black Sword.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Intercessor Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Emperor's Champion"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-crusader-squad",
                name: "Crusader Squad",
                role: "battleline",
                points: [{ models: 10, cost: 150 }, { models: 20, cost: 300 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 2, ld: "6+", oc: 2 },
                statLines: [
                    { name: "Sword Brother / Initiate", m: "6\"", t: 4, sv: "3+", w: 2, ld: "6+", oc: 2 },
                    { name: "Neophyte", m: "6\"", t: 4, sv: "4+", w: 2, ld: "6+", oc: 2 }
                ],
                baseSize: "Initiates 32mm, Neophytes 25mm",
                weapons: {
                    ranged: [
                        { name: "Bolt pistol", range: "12\"", a: 1, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] },
                        { name: "Bolt rifle", range: "24\"", a: 2, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Assault", "Heavy"] },
                        { name: "Heavy bolt pistol", range: "18\"", a: 1, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Neophyte firearm", range: "18\"", a: 2, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Assault"] },
                        { name: "Pyre pistol", range: "12\"", a: "D6", bs: "N/A", s: 4, ap: 0, d: 1, keywords: ["Ignores Cover", "Pistol", "Torrent"] },
                        { name: "Pyreblaster", range: "12\"", a: "D6", bs: "N/A", s: 5, ap: 0, d: 1, keywords: ["Ignores Cover", "Torrent"] }
                    ],
                    melee: [
                        { name: "Astartes chainsword", range: "Melee", a: 4, ws: "3+", s: 4, ap: -1, d: 1, keywords: ["Sustained Hits 1"] },
                        { name: "Close combat weapon", range: "Melee", a: 3, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Master-crafted power weapon", range: "Melee", a: 3, ws: "2+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] },
                        { name: "Power fist", range: "Melee", a: 3, ws: "3+", s: 8, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Righteous Zeal", text: "In your opponent's Shooting phase, each time an enemy unit has shot, if any models in this unit were destroyed as a result of those attacks, this unit can make a Righteous Zeal move. To do so, roll one D6 and add 2 to the result: models in this unit move a number of inches up to this result, but this unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit. This unit cannot make a Righteous Zeal move while it is Battle-shocked or within Engagement Range of one or more enemy units, and can only make one Righteous Zeal move per phase." },
                        { name: "Attached Unit", text: "If a CHARACTER from your army with the Leader ability can be attached to an INTERCESSOR SQUAD, it can be attached to this unit instead." }
                    ]
                },
                wargearOptions: [
                    "The Sword Brother's heavy bolt pistol can be replaced with 1 pyre pistol.",
                    "The Sword Brother's master-crafted power weapon can be replaced with 1 power fist.",
                    "Any number of Neophytes can each have their bolt pistol and Astartes chainsword replaced with 1 Neophyte firearm and 1 close combat weapon.",
                    "Any number of Initiates can each have their bolt rifle replaced with 1 heavy bolt pistol and 1 Astartes chainsword.",
                    "For every 10 models in this unit, up to 2 Initiates can each have their bolt rifle replaced with one of the following: ◦ 1 heavy bolt pistol and 1 power fist; ◦ 1 pyreblaster."
                ],
                composition: { min: 10, max: 20 },
                compositionText: "1 Sword Brother; 5-11 Initiates; 4-8 Neophytes. The Sword Brother is equipped with: heavy bolt pistol; master-crafted power weapon. Every Initiate is equipped with: bolt pistol; bolt rifle; close combat weapon. Every Neophyte is equipped with: bolt pistol; Astartes chainsword.",
                leaderText: "This unit can be led by one of the following units (Leader): Ancient; Apothecary; Captain; Chaplain; Judiciar; Librarian; Lieutenant; Techmarine; plus characters that can lead an Intercessor Squad.",
                keywords: ["Infantry", "Battleline", "Grenades", "Imperium", "Tacticus", "Crusader Squad"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-marshal",
                name: "Marshal",
                role: "character",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 5, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Combi-weapon", range: "24\"", a: 1, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] },
                        { name: "Plasma pistol – standard", range: "12\"", a: 1, bs: "2+", s: 7, ap: -2, d: 1, keywords: ["Pistol"] },
                        { name: "Plasma pistol – supercharge", range: "12\"", a: 1, bs: "2+", s: 8, ap: -3, d: 2, keywords: ["Hazardous", "Pistol"] }
                    ],
                    melee: [
                        { name: "Master-crafted power weapon", range: "Melee", a: 7, ws: "2+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Inspirational Exemplar", text: "While this model is leading a unit, each time a model in that unit makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit." },
                        { name: "Pious Fervour", text: "Each time this model's unit is selected to fight, until the end of the phase, add 1 to the Attacks characteristic of this model's master-crafted power weapon for each enemy unit within 6\" of this model (to a maximum of +3)." }
                    ]
                },
                wargearOptions: ["This model's plasma pistol can be replaced with one combi-weapon."],
                composition: { min: 1, max: 1 },
                compositionText: "1 Marshal. This model is equipped with: plasma pistol; master-crafted power weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Infernus Squad; Intercessor Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Captain", "Marshal"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-judiciar",
                name: "Judiciar",
                role: "character",
                points: [{ models: 1, cost: 70 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "5+", oc: 1 },
                invuln: "4+ (against melee attacks)",
                invulnNote: "This model has a 4+ invulnerable save against melee attacks.",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Absolvor bolt pistol", range: "18\"", a: 1, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Executioner relic blade", range: "Melee", a: 5, ws: "2+", s: 7, ap: -2, d: 2, keywords: ["Devastating Wounds", "Precision"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Tempormortis", text: "While this model is leading a unit, that unit has the Fights First ability." },
                        { name: "Silent Fury", text: "Each time this model destroys an enemy CHARACTER model, until the end of the battle, add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in this model's unit.", verify: true }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Judiciar. This model is equipped with: absolvor bolt pistol; executioner relic blade.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Bladeguard Veteran Squad; Infernus Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Imperium", "Tacticus", "Judiciar"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-chaplain-grimaldus",
                name: "Chaplain Grimaldus",
                role: "character",
                points: [{ models: 4, cost: 110 }],
                statLines: [
                    { name: "Grimaldus", m: "6\"", t: 4, sv: "3+", w: 4, ld: "5+", oc: 1 },
                    { name: "Cenobyte Servitor", m: "6\"", t: 4, sv: "3+", w: 1, ld: "8+", oc: 1 }
                ],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "5+", oc: 1 },
                invuln: "4+",
                baseSize: "Grimaldus 40mm / Cenobyte Servitor 28.5mm",
                weapons: {
                    ranged: [
                        { name: "Plasma pistol – standard", range: "12\"", a: 1, bs: "2+", s: 7, ap: -2, d: 1, keywords: ["Pistol"] },
                        { name: "Plasma pistol – supercharge", range: "12\"", a: 1, bs: "2+", s: 8, ap: -3, d: 2, keywords: ["Hazardous", "Pistol"] }
                    ],
                    melee: [
                        { name: "Artificer crozius", range: "Melee", a: 6, ws: "2+", s: 6, ap: -2, d: 2, keywords: [] },
                        { name: "Close combat weapon", range: "Melee", a: 1, ws: "4+", s: 3, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Feel No Pain 5+", "Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Litanies of the Devout", text: "While this unit is leading a unit and contains a Chaplain Grimaldus model, each time a model in that unit makes a melee attack, you can re-roll the Hit roll." },
                        { name: "Temple Relics", text: "In your Command phase, if this unit contains one or more Cenobyte Servitor models, select one Temple Relics ability (see below). Until the start of your next Command phase, this unit's Chaplain Grimaldus model has that ability.", verify: true },
                        { name: "Temple Relics — Banner of Fallen Crusaders", text: "While this model's unit is within range of an objective marker you control, each time a model in this unit makes a melee attack, add 1 to the Wound roll.", verify: true },
                        { name: "Temple Relics — Remnant of the Fallen Temple", text: "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack.", verify: true },
                        { name: "Temple Relics — Sacred Vials", text: "Each time a model in this unit makes a melee attack, you can re-roll the Wound roll.", verify: true }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 4, max: 4 },
                compositionText: "1 Chaplain Grimaldus — Epic Hero; 3 Cenobyte Servitors. If this unit's Chaplain Grimaldus model is ever destroyed, all of this unit's remaining Cenobyte Servitor models are also destroyed. While embarking within a TRANSPORT and while embarked within a TRANSPORT, each Cenobyte Servitor model in this unit takes up the space of 0 models. Chaplain Grimaldus is equipped with: plasma pistol; artificer crozius. Every Cenobyte Servitor is equipped with: close combat weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Infernus Squad; Intercessor Squad; Crusader Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Imperium", "Tacticus", "Character", "Epic Hero", "Grenades", "Chaplain Grimaldus", "Cenobyte Servitor"],
                keywordsNote: "KEYWORDS – ALL MODELS: Infantry, Imperium, Tacticus. GRIMALDUS: Character, Epic Hero, Grenades, Chaplain Grimaldus.",
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-castellan",
                name: "Castellan",
                role: "character",
                points: [{ models: 1, cost: 70 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Combi-weapon", range: "24\"", a: 1, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Anti-Infantry 4+", "Devastating Wounds", "Rapid Fire 1"] },
                        { name: "Heavy bolt pistol", range: "18\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Astartes chainsword", range: "Melee", a: 7, ws: "2+", s: 4, ap: -1, d: 1, keywords: ["Sustained Hits 1"] },
                        { name: "Master-crafted power weapon", range: "Melee", a: 6, ws: "2+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Vehement Aggression", text: "While this model is leading a unit, each time that unit is selected to fight, take a Leadership test for that unit: if passed, until the end of the phase, each time a model in that unit makes an attack, you can re-roll the Hit roll; if failed, until the end of the phase, each time a model in that unit makes an attack, re-roll a Hit roll of 1." },
                        { name: "Prioritised Eradication", text: "Each time a model in this model's unit makes a melee attack that destroys one or more enemy units, roll one D6: on a 4+, you gain 1CP." }
                    ]
                },
                wargearOptions: [
                    "This model's combi-weapon can be replaced with 1 heavy bolt pistol.",
                    "This model's master-crafted power weapon can be replaced with 1 Astartes chainsword."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Castellan. This model is equipped with: combi-weapon; master-crafted power weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Infernus Squad; Intercessor Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad. You can attach this model to one of those units even if one CAPTAIN or CHAPTER MASTER model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Lieutenant", "Castellan"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-sword-brethren-squad",
                name: "Sword Brethren Squad",
                role: "infantry",
                points: [{ models: 4, cost: 105 }, { models: 5, cost: 130 }, { models: 9, cost: 235 }, { models: 10, cost: 260 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 3, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Heavy bolt pistol", range: "18\"", a: 1, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Plasma pistol – standard", range: "12\"", a: 1, bs: "3+", s: 7, ap: -2, d: 1, keywords: ["Pistol"] },
                        { name: "Plasma pistol – supercharge", range: "12\"", a: 1, bs: "3+", s: 8, ap: -3, d: 2, keywords: ["Hazardous", "Pistol"] },
                        { name: "Pyre pistol", range: "12\"", a: "D6", bs: "N/A", s: 4, ap: 0, d: 1, keywords: ["Ignores Cover", "Pistol", "Torrent"] }
                    ],
                    melee: [
                        { name: "Astartes chainsword", range: "Melee", a: 6, ws: "2+", s: 4, ap: -1, d: 1, keywords: ["Sustained Hits 1"] },
                        { name: "Master-crafted power weapon", range: "Melee", a: 3, ws: "2+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] },
                        { name: "Thunder hammer", range: "Melee", a: 2, ws: "3+", s: 8, ap: -2, d: 2, keywords: ["Devastating Wounds"], verify: true },
                        { name: "Twin lightning claws", range: "Melee", a: 5, ws: "2+", s: 5, ap: -2, d: 1, keywords: ["Twin-linked"], verify: true }
                    ]
                },
                abilities: {
                    core: [],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Exploit Their Cowardice", text: "Each time an enemy unit within Engagement Range of this unit is selected to Fall Back, after it ends that Fall Back move, if this unit is not within Engagement Range of one or more enemy units, this unit can make a Normal move." },
                        { name: "Attached Unit", text: "If a CHARACTER from your army with the Leader ability can be attached to an INTERCESSOR SQUAD, it can be attached to this unit instead." }
                    ]
                },
                wargearOptions: [
                    "Any number of Sword Brothers can each have their Astartes chainsword replaced with 1 master-crafted power weapon.",
                    "For every 5 models in this unit, 1 Sword Brother's Astartes chainsword can be replaced with 1 thunder hammer.",
                    "For every 5 models in this unit, 1 Sword Brother's heavy bolt pistol can be replaced with 1 plasma pistol.",
                    "For every 5 models in this unit, up to 2 Sword Brothers can each have their heavy bolt pistol replaced with 1 pyre pistol.",
                    "For every 5 models in this unit, 1 Sword Brother's heavy bolt pistol and Astartes chainsword can be replaced with 1 twin lightning claws."
                ],
                composition: { min: 4, max: 10 },
                compositionText: "4-10 Sword Brothers. Every model is equipped with: heavy bolt pistol; Astartes chainsword.",
                leaderText: "This unit can be led by the following units (Leader): Ancient; Apothecary; Captain; Chaplain; Judiciar; Librarian; Lieutenant; Techmarine.",
                keywords: ["Infantry", "Grenades", "Imperium", "Tacticus", "Sword Brethren Squad"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-chaplain",
                name: "Chaplain",
                role: "character",
                points: [{ models: 1, cost: 60 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "5+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Absolvor bolt pistol", range: "18\"", a: 1, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Crozius arcanum", range: "Melee", a: 5, ws: "2+", s: 6, ap: -1, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Litany of Hate", text: "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll." },
                        { name: "Spiritual Leader", text: "Once per battle, at the start of any phase, you can select one friendly ADEPTUS ASTARTES unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked." }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Chaplain. This model is equipped with: absolvor bolt pistol; crozius arcanum.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Bladeguard Veteran Squad; Hellblaster Squad; Infernus Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Chaplain"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-land-raider-crusader",
                name: "Land Raider Crusader",
                role: "vehicle",
                points: [{ models: 1, cost: 220 }],
                stats: { m: "12\"", t: 12, sv: "2+", w: 16, ld: "6+", oc: 5 },
                baseSize: "Use model",
                weapons: {
                    ranged: [
                        { name: "Hunter-killer missile", range: "48\"", a: 1, bs: "2+", s: 14, ap: -3, d: "D6", keywords: ["One Shot"] },
                        { name: "Hurricane bolter", range: "24\"", a: 6, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 6", "Twin-linked"] },
                        { name: "Multi-melta", range: "18\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] },
                        { name: "Storm bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 2"] },
                        { name: "Twin assault cannon", range: "24\"", a: 6, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Devastating Wounds", "Twin-linked"] }
                    ],
                    melee: [
                        { name: "Armoured tracks", range: "Melee", a: 6, ws: "4+", s: 8, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "One Shot", text: "The bearer can only shoot with each of its hunter-killer missiles once per battle." },
                        { name: "Assault Ramp", text: "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
                        { name: "Legacy of Jerulas", text: "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly model that disembarked from this TRANSPORT this turn makes an attack that targets that enemy unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1." },
                        { name: "Damaged: 1-5 Wounds Remaining", text: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." }
                    ]
                },
                transport: "This model has a transport capacity of 16 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models.",
                wargearOptions: [
                    "This model can be equipped with 1 hunter-killer missile.",
                    "This model can be equipped with 1 multi-melta.",
                    "This model can be equipped with 1 storm bolter."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Land Raider Crusader. This model is equipped with: 2 hurricane bolters; twin assault cannon; armoured tracks.",
                keywords: ["Vehicle", "Smoke", "Grenades", "Transport", "Imperium", "Land Raider", "Land Raider Crusader"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-ancient",
                name: "Ancient",
                role: "character",
                points: [{ models: 1, cost: 50 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Bolt pistol", range: "12\"", a: 1, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] },
                        { name: "Bolt rifle", range: "24\"", a: 2, bs: "3+", s: 4, ap: -1, d: 1, keywords: ["Assault", "Heavy"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 5, ws: "2+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Power weapon", range: "Melee", a: 5, ws: "2+", s: 5, ap: -2, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Astartes Banner", text: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
                        { name: "Unbreakable Duty", text: "While this model is within range of an objective marker and/or within 6\" of the centre of the battlefield, this model has the Feel No Pain 4+ ability." }
                    ]
                },
                wargearOptions: [
                    "This model's bolt rifle and close combat weapon can be replaced with 1 power weapon."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Ancient. This model is equipped with: bolt pistol; bolt rifle; close combat weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Desolation Squad; Devastator Squad; Hellblaster Squad; Infernus Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad. You can attach this model to one of the above units even if one CAPTAIN, CHAPTER MASTER or LIEUTENANT model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Ancient"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-crusade-ancient",
                name: "Crusade Ancient",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Bolt pistol", range: "12\"", a: 1, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Master-crafted power weapon", range: "Melee", a: 5, ws: "2+", s: 5, ap: -2, d: 2, keywords: ["Lethal Hits"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Vengeful Exhortation", text: "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play." },
                        { name: "Martial Honour", text: "The first time a model in this model's unit makes a melee attack that destroys one or more enemy units, until the end of the battle, while this model's unit is not Battle-shocked, add 5 to this model's Objective Control characteristic." }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Crusade Ancient. This model is equipped with: bolt pistol; master-crafted power weapon.",
                leaderText: "This model can be attached to the following units: Crusader Squad; Sword Brethren Squad. You can attach this model to one of the above units even if one CAPTAIN, CHAPTER MASTER, EXECRATOR or LIEUTENANT model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Ancient", "Crusade Ancient"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-execrator",
                name: "Execrator",
                role: "character",
                points: [{ models: 1, cost: 60 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "5+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Absolvor bolt pistol", range: "18\"", a: 1, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Pistol"] },
                        { name: "Pyre pistol", range: "12\"", a: "D6", bs: "N/A", s: 4, ap: 0, d: 1, keywords: ["Ignores Cover", "Pistol", "Torrent"] }
                    ],
                    melee: [
                        { name: "Crozius arcanum", range: "Melee", a: 5, ws: "2+", s: 6, ap: -1, d: 2, keywords: [] },
                        { name: "Master-crafted power weapon", range: "Melee", a: 3, ws: "2+", s: 5, ap: -2, d: 2, keywords: ["Extra Attacks", "Lethal Hits"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Remorseless Persecution", text: "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Advanced." },
                        { name: "Condemnatory Annihilation", text: "Each time this model's unit has fought, if one or more enemy units were destroyed as a result of those attacks, each enemy unit within 6\" of this model must take a Battle-shock test." }
                    ]
                },
                wargearOptions: [
                    "This model's absolvor bolt pistol can be replaced with 1 pyre pistol.",
                    "If this model is equipped with an absolvor bolt pistol, it can be equipped with 1 master-crafted power weapon (this model's absolvor bolt pistol cannot be replaced)."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Execrator. This model is equipped with: absolvor bolt pistol; crozius arcanum.",
                leaderText: "This model can be attached to the following units: Crusader Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Chaplain", "Execrator"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-apothecary",
                name: "Apothecary",
                role: "character",
                points: [{ models: 1, cost: 50 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Absolvor bolt pistol", range: "18\"", a: 1, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Pistol"] },
                        { name: "Reductor pistol", range: "3\"", a: 1, bs: "3+", s: 4, ap: -4, d: 2, keywords: ["Pistol"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 4, ws: "3+", s: 4, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Narthecium", text: "While this model is leading a unit, in your Command phase, you can return 1 destroyed model (excluding CHARACTER models) to that unit." },
                        { name: "Gene-seed Recovery", text: "When this model's Bodyguard unit is destroyed, roll one D6: on a 2+, you can return one destroyed Bodyguard model to that unit.", verify: true }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Apothecary. This model is equipped with: absolvor bolt pistol; reductor pistol; close combat weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Desolation Squad; Devastator Squad; Hellblaster Squad; Infernus Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad. You can attach this model to one of the above units even if one CAPTAIN, CHAPTER MASTER or LIEUTENANT model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Apothecary"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-gladiator-lancer",
                name: "Gladiator Lancer",
                role: "vehicle",
                points: [{ models: 1, cost: 160 }],
                stats: { m: "10\"", t: 10, sv: "3+", w: 12, ld: "6+", oc: 3 },
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Fragstorm grenade launcher", range: "18\"", a: "D6", bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Icarus rocket pod", range: "24\"", a: "D3", bs: "3+", s: 8, ap: -1, d: 2, keywords: ["Anti-Fly 2+"] },
                        { name: "Ironhail heavy stubber", range: "36\"", a: 3, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 3"] },
                        { name: "Lancer laser destroyer", range: "72\"", a: 2, bs: "3+", s: 14, ap: -4, d: "D6+3", keywords: ["Heavy"] },
                        { name: "Multi-melta", range: "18\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] },
                        { name: "Storm bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 2"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Aquilon Optics", text: "Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks." },
                        { name: "Damaged: 1-4 Wounds Remaining", text: "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." }
                    ]
                },
                wargearOptions: [
                    "This model's 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
                    "This model can be equipped with one of the following: 1 ironhail heavy stubber; 1 multi-melta.",
                    "This model can be equipped with 1 Icarus rocket pod."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Gladiator Lancer. This model is equipped with: Lancer laser destroyer; 2 storm bolters; armoured hull.",
                keywords: ["Vehicle", "Smoke", "Imperium", "Gladiator Lancer"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-impulsor",
                name: "Impulsor",
                role: "vehicle",
                points: [{ models: 1, cost: 85 }],
                stats: { m: "12\"", t: 9, sv: "3+", w: 11, ld: "6+", oc: 2 },
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Bellicatus missile array – frag", range: "48\"", a: "D6", bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Bellicatus missile array – Icarus", range: "48\"", a: "D3", bs: "3+", s: 8, ap: -1, d: 2, keywords: ["Anti-Fly 2+"] },
                        { name: "Bellicatus missile array – krak", range: "48\"", a: 1, bs: "3+", s: 8, ap: -2, d: "D6", keywords: [] },
                        { name: "Fragstorm grenade launcher", range: "18\"", a: "D6", bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Blast"] },
                        { name: "Ironhail heavy stubber", range: "36\"", a: 3, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 3"] },
                        { name: "Ironhail skytalon array", range: "36\"", a: 8, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Anti-Fly 4+", "Sustained Hits 1"] },
                        { name: "Multi-melta", range: "18\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] },
                        { name: "Storm bolter", range: "24\"", a: 2, bs: "3+", s: 4, ap: 0, d: 1, keywords: ["Rapid Fire 2"] }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: 3, ws: "4+", s: 6, ap: 0, d: 1, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D3", "Firing Deck 6"],
                    faction: ["Templar Vows"],
                    wargear: [
                        { name: "Orbital Comms Array (Aura)", text: "While a friendly ADEPTUS ASTARTES unit is within 6\" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP." },
                        { name: "Shield Dome", text: "The bearer has a 4+ invulnerable save.", verify: true }
                    ],
                    other: [
                        { name: "Assault Vehicle", text: "Units can disembark from this TRANSPORT after it has Advanced. Units that do so count as having made a Normal move, and cannot declare a charge that turn." }
                    ]
                },
                transport: "This model has a transport capacity of 7 TACTICUS or PHOBOS INFANTRY models. It cannot transport JUMP PACK models.",
                wargearOptions: [
                    "This model can be equipped with one of the following: 1 ironhail heavy stubber; 1 multi-melta.",
                    "This model's 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
                    "This model can be equipped with one of the following: 1 bellicatus missile array; 1 ironhail skytalon array; 1 orbital comms array; 1 shield dome."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Impulsor. This model is equipped with: 2 storm bolters; armoured hull.",
                keywords: ["Vehicle", "Transport", "Dedicated Transport", "Imperium", "Impulsor"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-repulsor",
                name: "Repulsor",
                role: "vehicle",
                points: [{ models: 1, cost: 180 }],
                stats: { m: "10\"", t: 12, sv: "3+", w: 16, ld: "6+", oc: 5 },
                baseSize: "100mm",
                weapons: {
                    ranged: [
                        { name: "Heavy onslaught gatling cannon", range: "24\"", a: 12, bs: "3+", s: 6, ap: 0, d: 1, keywords: ["Devastating Wounds"] },
                        { name: "Hunter-slayer missile", range: "48\"", a: 1, bs: "2+", s: 14, ap: -3, d: "D6", keywords: ["Indirect Fire", "One Shot"] },
                        { name: "Las-talon", range: "36\"", a: 2, bs: "3+", s: 10, ap: -3, d: "D6", keywords: [] },
                        { name: "Multi-melta", range: "18\"", a: 2, bs: "3+", s: 9, ap: -4, d: "D6", keywords: ["Melta 2"] },
                        { name: "Repulsor defensive array", range: "24\"", a: 18, bs: "3+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Twin heavy bolter", range: "36\"", a: 3, bs: "3+", s: 5, ap: -1, d: 2, keywords: ["Sustained Hits 1", "Twin-linked"] },
                        { name: "Twin lascannon", range: "48\"", a: 1, bs: "3+", s: 12, ap: -3, d: "D6+1", keywords: ["Twin-linked"], verify: true }
                    ],
                    melee: [
                        { name: "Armoured hull", range: "Melee", a: 6, ws: "4+", s: 8, ap: 0, d: 1, keywords: [], verify: true }
                    ]
                },
                abilities: {
                    core: ["Deadly Demise D6"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Stabilised Disembarkation", text: "In your opponent's Shooting phase, each time an enemy unit is selected to shoot, after that unit has shot, if any of those attacks targeted this TRANSPORT, it can use this ability. If it does, any units embarked within it can disembark. When doing so, models in those units can be set up anywhere on the battlefield wholly within 6\" of this TRANSPORT and not within Engagement Range of one or more enemy units." },
                        { name: "Damaged: 1-5 Wounds Remaining", text: "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll." }
                    ]
                },
                transport: "This model has a transport capacity of 14 ADEPTUS ASTARTES INFANTRY models. Each JUMP PACK, GRAVIS or TERMINATOR model takes up the space of 2 models and each CENTURION model takes up the space of 3 models.",
                wargearOptions: [
                    "This model's twin heavy bolter can be replaced with 1 twin lascannon.",
                    "This model's heavy onslaught gatling cannon can be replaced with 1 las-talon.",
                    "This model can be equipped with 1 multi-melta."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Repulsor. This model is equipped with: heavy onslaught gatling cannon; hunter-slayer missile; Repulsor defensive array; twin heavy bolter; armoured hull.",
                keywords: ["Vehicle", "Smoke", "Transport", "Imperium", "Repulsor"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-captain",
                name: "Captain",
                role: "character",
                points: [{ models: 1, cost: 80 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 5, ld: "6+", oc: 1 },
                invuln: "4+",
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] },
                        { name: "Heavy bolt pistol", range: "18\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Master-crafted bolter", range: "24\"", a: 2, bs: "2+", s: 4, ap: -1, d: 2, keywords: [] },
                        { name: "Neo-volkite pistol", range: "12\"", a: 1, bs: "2+", s: 5, ap: 0, d: 2, keywords: ["Devastating Wounds", "Pistol"] },
                        { name: "Plasma pistol – standard", range: "12\"", a: 1, bs: "2+", s: 7, ap: -2, d: 1, keywords: ["Pistol"] },
                        { name: "Plasma pistol – supercharge", range: "12\"", a: 1, bs: "2+", s: 8, ap: -3, d: 2, keywords: ["Hazardous", "Pistol"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 6, ws: "2+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Master-crafted power weapon", range: "Melee", a: 6, ws: "2+", s: 5, ap: -2, d: 2, keywords: [] },
                        { name: "Power fist", range: "Melee", a: 5, ws: "2+", s: 8, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [
                        { name: "Relic Shield", text: "The bearer has a Wounds characteristic of 6." }
                    ],
                    other: [
                        { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of that Stratagem by 1CP." },
                        { name: "Finest Hour", text: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability." }
                    ]
                },
                wargearOptions: [
                    "This model's bolt pistol, master-crafted bolter and close combat weapon can be replaced with one of the following: 1 heavy bolt pistol and 1 power fist; 1 heavy bolt pistol and 1 master-crafted power weapon; 1 neo-volkite pistol and 1 power fist; 1 neo-volkite pistol and 1 master-crafted power weapon; 1 plasma pistol and 1 power fist; 1 plasma pistol and 1 master-crafted power weapon; 1 heavy bolt pistol, 1 master-crafted power weapon and 1 relic shield.",
                    "This model's close combat weapon can be replaced with one of the following: 1 master-crafted power weapon; 1 power fist."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Captain. This model is equipped with: bolt pistol; master-crafted bolter; close combat weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Bladeguard Veteran Squad*; Company Heroes; Hellblaster Squad*; Infernus Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad. * This model cannot be attached to a BLADEGUARD VETERAN SQUAD unless this model is equipped with a relic shield, and cannot be attached to a HELLBLASTER SQUAD unless this model is equipped with a plasma pistol.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Captain"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-lieutenant",
                name: "Lieutenant",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "6\"", t: 4, sv: "3+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Bolt pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: 0, d: 1, keywords: ["Pistol"] },
                        { name: "Heavy bolt pistol", range: "18\"", a: 1, bs: "2+", s: 4, ap: -1, d: 1, keywords: ["Pistol"] },
                        { name: "Master-crafted bolter", range: "24\"", a: 2, bs: "2+", s: 4, ap: -1, d: 2, keywords: [] },
                        { name: "Neo-volkite pistol", range: "12\"", a: 1, bs: "2+", s: 5, ap: 0, d: 2, keywords: ["Devastating Wounds", "Pistol"] },
                        { name: "Plasma pistol – standard", range: "12\"", a: 1, bs: "2+", s: 7, ap: -2, d: 1, keywords: ["Pistol"] },
                        { name: "Plasma pistol – supercharge", range: "12\"", a: 1, bs: "2+", s: 8, ap: -3, d: 2, keywords: ["Hazardous", "Pistol"] }
                    ],
                    melee: [
                        { name: "Close combat weapon", range: "Melee", a: 5, ws: "2+", s: 4, ap: 0, d: 1, keywords: [] },
                        { name: "Master-crafted power weapon", range: "Melee", a: 5, ws: "2+", s: 5, ap: -2, d: 2, keywords: [] },
                        { name: "Power fist", range: "Melee", a: 4, ws: "2+", s: 8, ap: -2, d: 2, keywords: [] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [
                        { name: "Storm Shield", text: "The bearer has a 4+ invulnerable save." }
                    ],
                    other: [
                        { name: "Tactical Precision", text: "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability." },
                        { name: "Target Priority", text: "This model's unit is eligible to shoot and declare a charge in a turn in which it Fell Back." }
                    ]
                },
                wargearOptions: [
                    "This model's master-crafted bolter can be replaced with one of the following: 1 plasma pistol; 1 master-crafted power weapon; 1 power fist.",
                    "This model's bolt pistol, master-crafted bolter and close combat weapon can be replaced with 1 neo volkite pistol, 1 master-crafted power weapon and 1 storm shield.",
                    "This model's bolt pistol can be replaced with 1 heavy bolt pistol.",
                    "This model's close combat weapon can be replaced with one of the following: 1 master-crafted power weapon; 1 power fist."
                ],
                composition: { min: 1, max: 1 },
                compositionText: "1 Lieutenant. This model is equipped with: bolt pistol; master-crafted bolter; close combat weapon.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Bladeguard Veteran Squad; Company Heroes; Hellblaster Squad; Infernus Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sternguard Veteran Squad; Sword Brethren Squad. You can attach this model to a unit it can lead even if one CAPTAIN or CHAPTER MASTER model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Lieutenant"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            },
            {
                id: "bt-techmarine",
                name: "Techmarine",
                role: "character",
                points: [{ models: 1, cost: 55 }],
                stats: { m: "6\"", t: 4, sv: "2+", w: 4, ld: "6+", oc: 1 },
                baseSize: "40mm",
                weapons: {
                    ranged: [
                        { name: "Forge bolter", range: "24\"", a: 3, bs: "2+", s: 5, ap: -1, d: 2, keywords: [] },
                        { name: "Grav-pistol", range: "12\"", a: 1, bs: "2+", s: 4, ap: -1, d: 2, keywords: ["Anti-Vehicle 2+", "Pistol"] }
                    ],
                    melee: [
                        { name: "Omnissian power axe", range: "Melee", a: 4, ws: "3+", s: 6, ap: -2, d: 2, keywords: [] },
                        { name: "Servo-arm", range: "Melee", a: 1, ws: "3+", s: 8, ap: -2, d: 3, keywords: ["Extra Attacks"] }
                    ]
                },
                abilities: {
                    core: ["Leader"],
                    faction: ["Templar Vows"],
                    wargear: [],
                    other: [
                        { name: "Techmarine", text: "While this model is within 3\" of one or more friendly ADEPTUS ASTARTES VEHICLE units, this model has the Lone Operative ability." },
                        { name: "Blessing of the Omnissiah", text: "In your Command phase, select one friendly ADEPTUS ASTARTES VEHICLE model within 3\" of this model. That model regains up to D3 lost wounds. In addition, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn.", verify: true },
                        { name: "Vengeance of the Omnissiah", text: "If a friendly ADEPTUS ASTARTES VEHICLE model is destroyed within 12\" of this model, until the end of the battle, this model's Omnissian power axe has an Attacks characteristic of 7." }
                    ]
                },
                wargearOptions: ["None"],
                composition: { min: 1, max: 1 },
                compositionText: "1 Techmarine. This model is equipped with: forge bolter; grav-pistol; Omnissian power axe; servo-arm.",
                leaderText: "This model can be attached to the following units: Assault Intercessor Squad; Desolation Squad; Devastator Squad; Intercessor Squad; Tactical Squad; Crusader Squad; Sword Brethren Squad.",
                keywords: ["Infantry", "Character", "Grenades", "Imperium", "Tacticus", "Techmarine"],
                factionKeywords: ["Adeptus Astartes", "Black Templars"]
            }
        ]
    };

    // Self-register into the global registry assembled by data/factions.js
    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(blackTemplars);
})();
