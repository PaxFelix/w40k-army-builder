/**
 * W40K Army Builder — Adepta Sororitas (10th Edition)
 *
 * Datasheets from Codex: Adepta Sororitas. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const as = {
        id: "adepta-sororitas",
        name: "Adepta Sororitas",
        icon: "⛪",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Acts of Faith", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Hallowed Martyrs",
                rule: {
                    name: "The Blood of Martyrs",
                    flavour: "The blood of martyrs is the life force of the Imperium. So do the tenets of this Order joyously proclaim, and in its warriors' darkest hour does the sacrifice of their fallen Sisters shine brightest.",
                    text: "Each time an ADEPTA SORORITAS model from your army makes an attack, add 1 to the Hit roll if that model's unit is below its Starting Strength, and add 1 to the Wound roll as well if that model's unit is Below Half-strength.",
                    restrictions: ""
                },
                enhancements: [
                    { name: "Saintly Example", cost: 10, restriction: "ADEPTA SORORITAS model only.", flavour: "With her final breath is another heroine elevated to the ranks of sainthood, her death stirring her greatest companions to finish what she started.", text: "When the bearer is destroyed, you gain an additional D3 Miracle dice." },
                    { name: "Through Suffering, Strength", cost: 25, restriction: "ADEPTA SORORITAS model only.", flavour: "With every wound inflicted on their mortal form does this holy warrior's strength grow, their suffering a prayer to the God-Emperor.", text: "Add 1 to the Attacks, Strength and Damage characteristics of the bearer's melee weapons. If the bearer has lost one or more wounds, add 2 to the Attacks, Strength and Damage characteristics of the bearer's melee weapons instead." },
                    { name: "Chaplet of Sacrifice", cost: 25, restriction: "ADEPTA SORORITAS model only.", flavour: "The most hallowed martyrs of the Sisterhood have added beads to this chaplet. Such a relic can be a burden, for it carries the righteousness of those who uphold everything the Sisterhood stands for.", text: "At the end of your Command phase, if the bearer is on the battlefield, you can re-roll 1 Miracle dice from your Miracle dice pool and return it to your Miracle dice pool showing the new result you rolled. When doing so, if the bearer's unit is below its Starting Strength, you can re-roll up to 3 Miracle dice in this way instead." },
                    { name: "Mantle of Ophelia", cost: 20, restriction: "CANONESS or PALATINE model only.", flavour: "The Mantle of Ophelia was once the badge of office for the Prioress of the Convent Sanctorum, and was worn by Helena the Virtuous, a Living Saint and one of the most revered leaders in the history of the Adepta Sororitas. The mantle is thought to have sacred powers of protection, for Helena was said to have anointed it with the Tears of the Emperor, a phial of blood-like liquid meticulously collected over a century from weeping statues of the Emperor found across the cardinal worlds of the Imperium.", text: "Each time an attack is allocated to the bearer, change the Damage characteristic of that attack to 1." },
                ],
                stratagems: [
                    { name: "Divine Intervention", cp: 1, type: "Epic Deed", flavour: "The pious believe that, in their moment of greatest need, the Emperor protects.", when: "Any phase.", target: "One ADEPTA SORORITAS CHARACTER unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.", effect: "You can discard 1-3 Miracle dice. At the end of the phase, set the last destroyed model from your unit back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy models. Roll one D3, adding 1 to the result for each Miracle dice you discarded. That model is set back up with that number of wounds remaining (up to its starting number of wounds).", restrictions: "You cannot select SAINT CELESTINE as the target of this Stratagem. You cannot select the same CHARACTER as the target of this Stratagem more than once per battle." },
                    { name: "Suffering and Sacrifice", cp: 1, type: "Strategic Ploy", flavour: "Suffering is a staple prayer for the Adepta Sororitas, and a martyr's fate only brings greater glory to the God-Emperor.", when: "Start of the Fight phase.", target: "One ADEPTA SORORITAS INFANTRY or ADEPTA SORORITAS WALKER unit from your army.", effect: "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects its targets, it must select your unit as the target of its attacks.", restrictions: "" },
                    { name: "Righteous Vengeance", cp: 1, type: "Battle Tactic", flavour: "With the Emperor's light upon them, the righteous vengeance of the Sisters of Battle burns brighter.", when: "Fight phase.", target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the Hit roll and, if your unit is Below Half-strength, you can re-roll the Wound roll as well.", restrictions: "" },
                    { name: "Sanctified Immolation", cp: 1, type: "Strategic Ploy", flavour: "The enemy must perish, even if we perish with them. The enemy must burn, even if we burn with them.", when: "Any phase.", target: "One ADEPTA SORORITAS VEHICLE model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.", effect: "Do not roll one D6 to determine whether mortal wounds are inflicted by your model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted.", restrictions: "" },
                    { name: "Spirit of the Martyr", cp: 2, type: "Strategic Ploy", flavour: "Even with their dying act, the Sororitas mete out the Emperor's judgement.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Praise the Fallen", cp: 1, type: "Strategic Ploy", flavour: "The death of a Battle Sister only stirs the survivors to fight harder to exact swift vengeance.", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One ADEPTA SORORITAS unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks.", effect: "Your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.", restrictions: "" },
                ]
            },
            {
                name: "Penitent Host",
                rule: {
                    name: "Desperate for Redemption",
                    flavour: "The penitent masses vow to wash clean their dishonour with their foe's blood.",
                    text: "At the start of the battle round, you can select one of the following Vows of Atonement to be active for your army until the start of the next battle round. You can only select each Vow of Atonement once per battle.\nThe Path of the Penitent: Add 3\" to the Move characteristic of PENITENT models from your army.\nAbsolution in Battle: Each time a unit from your army is selected to fight, if that unit made a Charge move this turn, until the end of the phase, add 1 to the Attacks and Strength characteristics of melee weapons equipped by PENITENT models in that unit.\nDeath Before Disgrace: Each time a PENITENT model from your army is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 2+, do not remove it from play; the destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
                    restrictions: ""
                },
                enhancements: [
                    { name: "Psalm of Righteous Judgement", cost: 30, restriction: "ADEPTA SORORITAS model only.", flavour: "Invoking the strength of the God-Emperor, this warrior bellows psalms, which roar above the din of battle. Incited by these fire and brimstone recitations, the penitent warriors carve apart their enemies, every kill bringing them closer to redemption.", text: "While the bearer is on the battlefield, each time an enemy unit is destroyed by a PENITENT unit from your army, you can discard 1 Miracle dice then gain 1 Miracle dice showing a value of 6." },
                    { name: "Verse of Holy Piety", cost: 15, restriction: "PENITENT model only.", flavour: "As the sanctified verses of the Ecclesiarchy's holy psalms roar across the battlefield, divine might infuses the devout.", text: "Once per battle, at the start of the battle round, select one Vow of Atonement. Until the start of the next battle round, that Vow of Atonement is active for the bearer's unit in addition to any that is active for your army, even if you have already selected that Vow of Atonement this battle." },
                    { name: "Refrain of Enduring Faith", cost: 25, restriction: "PENITENT model only.", flavour: "Faith is the shield of the righteous. The passionate benedictions of the pious may bestow the blessings of the God-Emperor.", text: "While the bearer is leading a unit, models in that unit have a 5+ invulnerable save." },
                    { name: "Catechism of Divine Penitence", cost: 20, restriction: "CANONESS, PALATINE or MINISTORUM PRIEST model only.", flavour: "To share in the agonies of the penitent and guide them to redemption is a most holy undertaking. Thus do many of the Adepta Sororitas' commanders willingly fight by the side of those cast out by the Sisterhood.", text: "The bearer gains the PENITENT keyword and, during the Declare Battle Formations step, can be attached to a REPENTIA SQUAD unit." },
                ],
                stratagems: [
                    { name: "Final Redemption", cp: 1, type: "Epic Deed", flavour: "Those seeking absolution in the eyes of the Emperor will gladly give their last drop of blood to defy his enemies.", when: "Any phase.", target: "One PENITENT unit from your army that was just destroyed while it was within range of an objective marker you controlled. You can use this Stratagem on that unit even though it was just destroyed.", effect: "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.", restrictions: "" },
                    { name: "Purity of Suffering", cp: 1, type: "Battle Tactic", flavour: "Suffering is the penance by which the faithful affirm their devotions. To share in the agonies suffered by the God-Emperor and his saints without embracing death is the mark of fidelity to the Imperial Creed.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One PENITENT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, PENITENT models in your unit have the Feel No Pain 4+ ability.", restrictions: "" },
                    { name: "Passion of the Penitent", cp: 1, type: "Battle Tactic", flavour: "The penitent are full of a burning passion to inflict suffering upon the faithless.", when: "Fight phase.", target: "One PENITENT unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a PENITENT model in your unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Lash of Guilt", cp: 1, type: "Battle Tactic", flavour: "Agony and guilt drive these sinners forward. Only by meeting the enemy in combat may they find repentance or, failing that, the comfort of death.", when: "Your Movement phase, just before a PENITENT unit from your army Advances.", target: "That PENITENT unit.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced. If your unit has the PENITENT ENGINES keyword, do not make an Advance roll for it; instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Boundless Zeal", cp: 1, type: "Strategic Ploy", flavour: "The urge to absolve their sins and destroy the enemy drives the penitents to push their tortured bodies beyond their mortal limits.", when: "Your Movement phase, just after an ADEPTA SORORITAS unit from your army Falls Back.", target: "That ADEPTA SORORITAS unit.", effect: "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Fell Back. If your unit has the PENITENT keyword, it is eligible to shoot and declare a charge in a turn in which it Fell Back instead.", restrictions: "" },
                    { name: "Devout Fanaticism", cp: 1, type: "Strategic Ploy", flavour: "The God-Emperor's faithful followers, heedless of incoming fire, leap forth to deliver his furious judgement in the press of melee.", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One PENITENT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Roll one D6: your unit can be moved a distance in inches up to the result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, models in your unit can be moved within Engagement Range of enemy units.", restrictions: "" },
                ]
            },
            {
                name: "Bringers of Flame",
                rule: {
                    name: "Fervent Purgation",
                    flavour: "These warriors carry the fiery wrath of the Emperor into the darkest corners of his realm. Through the weapons of the faithful is the Master of Mankind's immortal anger made manifest. With the holy trinity of boltgun, flamer and melta weapons are his enemies purged from the Imperium's worlds.",
                    text: "Ranged weapons equipped by ADEPTA SORORITAS models from your army have the [ASSAULT] ability, and each time an attack made with such a weapon targets a unit within 6\", add 1 to the Strength characteristic of that attack.",
                    restrictions: ""
                },
                enhancements: [
                    { name: "Righteous Rage", cost: 15, restriction: "ADEPTA SORORITAS model only.", flavour: "This servant of the divine draws deeply from their faith, enhancing their physical might.", text: "Each time the bearer is selected to fight, you can first discard up to 3 Miracle dice. For each Miracle dice just discarded, until the end of the phase, add 1 to the Attacks and Strength characteristics of the bearer's melee weapons." },
                    { name: "Manual of Saint Griselda", cost: 20, restriction: "ADEPTA SORORITAS model only.", flavour: "Within this tome are the collected writings of Saint Griselda the Pious. The lessons inscribed on its vellum pages teach focus and decisiveness during times of war.", text: "At the start of your Command phase, you can discard up to 2 Miracle dice. Then, add 1 Miracle dice to your Miracle Dice pool showing a value equal to the sum of the two Miracle dice you just discarded (to a maximum of 6)." },
                    { name: "Fire and Fury", cost: 30, restriction: "ADEPTA SORORITAS model only.", flavour: "This warrior is a firebrand zealot without comparison. At their command, the faithful unleash relentless fire upon their chosen foe.", text: "While the bearer is leading a unit, add 1 to the Attacks characteristic of Torrent weapons equipped by models in that unit, and all other ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability." },
                    { name: "Iron Surplice of Saint Istalela", cost: 10, restriction: "CANONESS or PALATINE model only.", flavour: "Worked upon by generations of artificers, consecrated with holy oils and steeped in the smoke of sacred incense, this suit of power armour is amongst the most battle-proven relics held by the Orders Militant.", text: "The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability." },
                ],
                stratagems: [
                    { name: "Shield of Aversion", cp: 1, type: "Battle Tactic", flavour: "The Sisters of Battle gird themselves with the strength of their faith. It is a shield of repulsion that rejects the heretical cunning of their enemies.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Righteous Blows", cp: 1, type: "Battle Tactic", flavour: "As the faithful strike their foes in righteous anger, they feel the Emperor's hand adding strength to their blows.", when: "Fight phase.", target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If one or more enemy models are destroyed as the result of attacks made by those weapons this phase, select one of those destroyed models; that destroyed model's unit must take a Battle-shock test.", restrictions: "" },
                    { name: "Carry Forth the Faithful", cp: 1, type: "Strategic Ploy", flavour: "Congregated within a transport, the Battle Sisters recite bellowing prayers so that the whole vehicle echoes to furious piety.", when: "Your Movement phase, just before an ADEPTA SORORITAS TRANSPORT model from your army Advances.", target: "That ADEPTA SORORITAS TRANSPORT model.", effect: "Until the end of the turn, you can re-roll Advance rolls made for your TRANSPORT, and units can disembark from your TRANSPORT even though it Advanced. Units that do so count as having made a Normal move, and cannot declare a charge this turn.", restrictions: "" },
                    { name: "Cleansing Flames", cp: 2, type: "Battle Tactic", flavour: "Burn the mutant. Burn the heretic. Burn the witch.", when: "Your Shooting phase.", target: "One ADEPTA SORORITAS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, Torrent weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability.", restrictions: "" },
                    { name: "Rites of Fire", cp: 1, type: "Battle Tactic", flavour: "At close range, the Adepta Sororitas unleash the full devastating potential of their blessed weapons.", when: "Your Shooting phase.", target: "One ADEPTA SORORITAS unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 6\" that is also within range of an objective marker, add 1 to the Wound roll. If one or more enemy models are destroyed as the result of those attacks, select one of those destroyed models; that destroyed model's unit must take a Battle-shock test.", restrictions: "" },
                    { name: "Blazing Ire", cp: 2, type: "Battle Tactic", flavour: "The transports of the Adepta Sororitas are mobile shrines. The Sisters within this vehicle recite psalms of righteous hatred and destruction before emerging to obliterate their foes.", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One ADEPTA SORORITAS TRANSPORT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "One unit embarked within your TRANSPORT can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.", restrictions: "" },
                ]
            },
            {
                name: "Army of Faith",
                rule: {
                    name: "Sacred Rites",
                    flavour: "At times of war, the Adepta Sororitas make offerings to the Emperor in prayer, incense and blood. In such pious devotion, they may attract his blessings and enact miraculous deeds in his holy name.",
                    text: "Each ADEPTA SORORITAS unit from your army can perform up to two Acts of Faith per phase, instead of just one.",
                    restrictions: ""
                },
                enhancements: [
                    { name: "Litanies of Faith", cost: 10, restriction: "CANONESS or PALATINE model only.", flavour: "This unassuming parchment is one of the holiest relics in the Ministorum's charge, its mere presence enough to fill the hearts of the faithful with righteous fervour.", text: "At the start of your Command phase, if the bearer is on the battlefield, take a Leadership test for the bearer. If that test is passed, you gain 1 Miracle dice." },
                    { name: "Blade of Saint Ellynor", cost: 15, restriction: "ADEPTA SORORITAS model only.", flavour: "Forged from thrice-blessed silver, this blade has the names and deeds of a thousand saints inscribed on one side on the molecular level, while the other has the entire Fede Imperialis etched into its form. The blade glows with righteous power and has slain heretics, mutants and xenos beyond counting.", text: "Improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 1, and those weapons have the [PRECISION] ability. In addition, each time the bearer fights, if one or more enemy models are destroyed by those attacks, you gain 1 Miracle dice." },
                    { name: "Divine Aspect", cost: 5, restriction: "ADEPTA SORORITAS model only.", flavour: "Enemy warriors tremble before the radiant majesty of one blessed by the Emperor.", text: "In your Movement phase, you can select one enemy unit within 12\" of the bearer; that unit must take a Battle-shock test. If that test is failed, you gain 1 Miracle dice." },
                    { name: "Triptych of the Macharian Crusade", cost: 20, restriction: "ADEPTA SORORITAS model only.", flavour: "Carried onto the most fire-swept of battlefields, the images of the Macharian Trinity glorifies three missionaries who saved thousands of lives. This adamantine-sheathed relic reminds the bearer that faith alone can weather the most grievous adversities.", text: "Each time the bearer uses an Act of Faith to substitute a saving throw, that saving throw is successful, irrespective of the value of the Miracle dice used." },
                ],
                stratagems: [
                    { name: "Shield of Faith", cp: 1, type: "Battle Tactic", flavour: "There is no armour as resilient as conviction itself.", when: "Any phase, just after an ADEPTA SORORITAS unit from your army suffers a mortal wound.", target: "That ADEPTA SORORITAS unit, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3\" of it.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3\" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds.", restrictions: "" },
                    { name: "Light of the Emperor", cp: 1, type: "Battle Tactic", flavour: "The Emperor's radiance shines upon his warriors, magnifying their purity in their darkest hour.", when: "Command phase.", target: "One ADEPTA SORORITAS unit from your army.", effect: "Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws). If your unit has the JUMP PACK keyword, until the end of the turn, while a friendly ADEPTA SORORITAS unit is within 3\" of your unit, that friendly unit is also blessed.", restrictions: "" },
                    { name: "Faith and Fury", cp: 1, type: "Battle Tactic", flavour: "The righteous zeal of the Sisters of Battle burns bright as they charge towards their foes.", when: "Fight phase.", target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If one or more enemy models are destroyed as the result of your unit's attacks this phase, you gain 1 Miracle dice.", restrictions: "" },
                    { name: "Blinding Radiance", cp: 1, type: "Strategic Ploy", flavour: "The Emperor's divinity manifests in golden halos, blinding the enemy with radiant light.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit's attacks, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3\" of such a unit.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is within 3\" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Divine Guidance", cp: 1, type: "Battle Tactic", flavour: "With miraculous precision, the blows of the Sisters of Battle strike the weak points of enemy armour.", when: "Your Shooting phase or the Fight phase.", target: "That ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice.", restrictions: "" },
                    { name: "Angelic Descent", cp: 1, type: "Strategic Ploy", flavour: "On wings of fire do the angelic warriors of the Orders Militant descend to battle.", when: "End of your opponent's Fight phase.", target: "One ADEPTA SORORITAS JUMP PACK unit from your army.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "You cannot select a unit that is within Engagement Range of one or more enemy units." },
                ]
            },
            {
                name: "Champions of Faith",
                rule: {
                    name: "Righteous Purpose",
                    flavour: "Whether high-ranking clergy must be rescued, a priceless relic recovered, or some archheretic slain, these warriors know that to fail after promising victory to the God-Emperor would be infinitely worse than death; this knowledge fills them with righteous purpose and the unflinching will to succeed no matter the odds.",
                    text: "In your Command phase, you can select up to 3 ADEPTA SORORITAS units from your army (including units that are embarked within TRANSPORTS); until the start of your next Command phase, those units are Righteous. While a unit is Righteous:\n- Add 1\" to the Move characteristic of models in that unit.\n- Improve the Leadership characteristic of models in that unit by 1.\n- Improve the Weapon Skill and Ballistic Skill characteristics of weapons equipped by BATTLE SISTERS SQUAD, CELESTIAN SACRESANTS and PARAGON WARSUITS models in that unit by 1.\nKeywords: While a CELESTIAN SACRESANTS unit from your army is not Battle-shocked, add 1 to the Objective Control characteristic of Celestian Sacresants models in that unit.",
                    restrictions: ""
                },
                enhancements: [
                    { name: "Triptych of Judgement", cost: 15, restriction: "ADEPTA SORORITAS model only.", flavour: "The three windows of this sacred artefact display three aspects of the God-Emperor in judgement over mortal souls. No warrior of faith will countenance failure beneath its threefold gaze.", text: "Each time a model in the bearer's unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill or Weapon Skill characteristics and/or any or all modifiers to the Hit roll." },
                    { name: "Mark of Devotion", cost: 30, restriction: "ADEPTA SORORITAS model only.", flavour: "A fresh oath brand burns in this champion's flesh, its heat remaining miraculously undimmed and its searing pain focusing their devout wrath.", text: "Add 1 to the Attacks characteristic of the bearer's melee weapons. While the bearer's unit is Righteous, add 2 to the Attacks characteristic and add 1 to the Damage characteristic of the bearer's melee weapons instead." },
                    { name: "Eyes of the Oracle", cost: 10, restriction: "ADEPTA SORORITAS model only.", flavour: "Having torn them from the sockets of a heretical witch, this warrior of faith keeps these shrivelled orbs sealed in a miniature reliquary about their neck. They believe that - tormented by holy imprisonment - the traitorous eyes guide their aim towards other infernal champions.", text: "The bearer's weapons have the [PRECISION] ability. Each time the bearer's unit destroys an enemy CHARACTER model, you gain 1CP." },
                    { name: "Sanctified Amulet", cost: 25, restriction: "ADEPTA SORORITAS model only.", flavour: "Belief radiates out from this blessed icon, forming a holy circle of abjuration that holds at bay the unclean and leaves this champion free to do their duty to the God-Emperor.", text: "Enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of the bearer." },
                ],
                stratagems: [
                    { name: "Shield of Denial", cp: 1, type: "Battle Tactic", flavour: "With so singular and fanatical a purpose, the Adepta Sororitas can will their injuries away, at least until the fight is done.", when: "Any phase, just after a mortal wound is allocated to an ADEPTA SORORITAS unit from your army.", target: "That ADEPTA SORORITAS unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability against mortal wounds. If your unit is Righteous, until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds instead.", restrictions: "" },
                    { name: "Suffer not the Unfaithful", cp: 1, type: "Strategic Ploy", flavour: "No unclean foe can be permitted to stand between the God-Emperor's sworn champions and their oathed duty. They must be struck down with unmerciful fury.", when: "Your Shooting phase or the Fight phase.", target: "One ADEPTA SORORITAS unit from your army that is Righteous and that has not been selected to shoot or fight this phase.", effect: "Select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability.", restrictions: "" },
                    { name: "To the Heart of Heresy", cp: 1, type: "Battle Tactic", flavour: "Seizing their moment to drive like a burning blade through the enemy lines and complete their holy mission, these faithful strike with unstoppable might.", when: "Fight phase.", target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the turn, improve the Strength characteristic of melee weapons equipped by models in your unit by 1. If your unit is Righteous, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.", restrictions: "" },
                    { name: "Path of the Righteous", cp: 1, type: "Battle Tactic", flavour: "When exemplars of the Imperial Creed stride to do the God-Emperor's will, little can slow their sacred procession.", when: "Fight phase.", target: "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the turn, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". When doing so, if your unit is Righteous, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.", restrictions: "" },
                    { name: "Bastion of Faith", cp: 1, type: "Battle Tactic", flavour: "Unified in their inviolate dedication to fulfil their oaths to Him on the Throne, the Order's elite form a rampart of ceramite and unyielding faith to throw back the desperate blows of the foe.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One CELESTIAN SACRESANTS unit that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. In addition, if your unit is Righteous, you can select one other CELESTIAN SACRESANTS unit from your army that is not Battle-shocked and is within 6\" of your unit. Until the end of the phase, each time an attack targets that CELESTIAN SACRESANTS unit, subtract 1 from the Hit roll as well.", restrictions: "" },
                    { name: "Indefatigable Dedication", cp: 1, type: "Strategic Ploy", flavour: "Such champions of the God-Emperor never stop fighting or striving for victory, transforming momentary retreats into another opportunity to purge the unclean and press on to their objective.", when: "Your Movement phase, just after an ADEPTA SORORITAS unit from your army Falls Back.", target: "That ADEPTA SORORITAS unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit is Righteous, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "as-aestred-thurga-and-agathae-dolan",
                        "name": "Aestred Thurga and Agathae Dolan",
                        "role": "character",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "name": "Blade of Vigil",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Scribe’s staff",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Auto-Tapestry of the Emperor’s Judgement",
                                        "Recount the Deeds of the Saints"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Aestred Thurga",
                                "Agathae Dolan"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Aestred Thurga – EPIC HERO 1 Agathae Dolan – EPIC HERO Aestred Thurga is equipped with: bolt pistol; Blade of Vigil. Agathae Dolan is equipped with: bolt pistol; scribe’s staff."
                },
                {
                        "id": "as-canoness",
                        "name": "Canoness",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Brazier of holy fire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "One Shot",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blessed blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hallowed Chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sacred Command",
                                        "The Emperor’s Grace",
                                        "Null Rod",
                                        "Rod of Office"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Canoness"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Canoness This model is equipped with: bolt pistol; hallowed chainsword."
                },
                {
                        "id": "as-canoness-with-jump-pack",
                        "name": "Canoness with jump pack",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                                "name": "Blessed halberd",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Holy Eviscerator",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sacred Command",
                                        "Divine Deliverance"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Canoness"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Seraphim Squad; Zephyrim Squad.",
                        "compositionText": "1 Canoness With Jump Pack This model is equipped with: blessed halberd."
                },
                {
                        "id": "as-daemonifuge",
                        "name": "Daemonifuge",
                        "role": "character",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "name": "Sanctity",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Chaos 2+",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "The Outcast’s Weapons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Fights First",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Holy Judgement",
                                        "Mysterious Saviours"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Daemonifuge"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Ephrael Stern – EPIC HERO 1 Kyganil of the Bloody Tears – EPIC HERO Ephrael Stern is equipped with: bolt pistol; Sanctity. Kyganil of the Bloody Tears is equipped with: the Outcast’s Weapons."
                },
                {
                        "id": "as-dialogus",
                        "name": "Dialogus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "name": "Dialogus staff",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Laud Hailer",
                                        "Stirring Rhetoric"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Dialogus"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Dialogus This model is equipped with: bolt pistol; Dialogus staff."
                },
                {
                        "id": "as-dogmata",
                        "name": "Dogmata",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "name": "Mace of the righteous",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Executioner of Heretics",
                                        "Unflinching Determination"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Imperium",
                                "Dogmata"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad.",
                        "compositionText": "1 Dogmata This model is equipped with: bolt pistol; mace of the righteous."
                },
                {
                        "id": "as-hospitaller",
                        "name": "Hospitaller",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "name": "Chirurgeon’s tools",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Medicus Ministorum",
                                        "Sacred Healing"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Hospitaller"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Hospitaller This model is equipped with: bolt pistol; chirurgeon’s tools."
                },
                {
                        "id": "as-imagifier",
                        "name": "Imagifier",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Litany of Deeds",
                                        "Stanchion of Holy Martyrs"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Imperium",
                                "Imagifier"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad.",
                        "compositionText": "1 Imagifier This model is equipped with: bolt pistol; boltgun; close combat weapon."
                },
                {
                        "id": "as-intranzia-fraye",
                        "name": "Intranzia Fraye",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Melta missile array",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Mace of Saint Praxedes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Throne of Blame",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Denunciation",
                                        "Judged for Execution"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Character",
                                "Penitent",
                                "Epic Hero",
                                "Intranzia Fraye"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Intranzia Fraye – EPIC HERO This model is equipped with: 2 heavy bolters, 2 Ministorum heavy flamers; 1 melta missile array; 1 Mace of Saint Praxedes; 1 Throne of Blame."
                },
                {
                        "id": "as-junith-eruita",
                        "name": "Junith Eruita",
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
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin Ministorum heavy flamer",
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
                                                "name": "Mace of Castigation",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deadly Demise 1",
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Pulpit of Saint Holline’s Basilica",
                                        "Fiery Conviction"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Fly",
                                "Epic Hero",
                                "Imperium",
                                "Junith Eruita"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Junith Eruita – EPIC HERO This model is equipped with: twin Ministorum heavy flamer; Mace of Castigation."
                },
                {
                        "id": "as-ministorum-priest",
                        "name": "Ministorum Priest",
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
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Holy pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Zealot’s vindictor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                                "name": "Power Weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Zealot’s vindictor",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Smiting",
                                        "Zealot"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Penitent",
                                "Ministorum Priest"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Arco-flagellants; Battle Sisters Squad; Celestian Insidiants; Dominion Squad; Sanctifiers; Sisters Novitiate Squad.",
                        "compositionText": "1 Preacher This model is equipped with: zealot’s vindictor."
                },
                {
                        "id": "as-morvenn-vahl",
                        "name": "Morvenn Vahl",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fidelis",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Paragon missile launcher – prioris",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paragon missile launcher – sanctorum",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Lance of Illumination – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Lance of Illumination – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Leader"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Abbess Sanctorum",
                                        "Righteous Repugnance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Morvenn Vahl"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following unit: Paragon Warsuits.",
                        "compositionText": "1 Morvenn Vahl – EPIC HERO This model is equipped with: Fidelis; Paragon missile launcher; Lance of Illumination."
                },
                {
                        "id": "as-palatine",
                        "name": "Palatine",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Palatine blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fury of the Righteous",
                                        "Rapturous Blows"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Palatine"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Battle Sisters Squad; Celestian Insidiants; Celestian Sacresants; Dominion Squad; Retributor Squad; Sisters Novitiate Squad.",
                        "compositionText": "1 Palatine This model is equipped with: bolt pistol; Palatine blade."
                },
                {
                        "id": "as-saint-celestine",
                        "name": "Saint Celestine",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "The Ardent Blade",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "The Ardent Blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Healing Tears",
                                        "Lifewards",
                                        "Miraculous Intervention"
                                ]
                        },
                        "keywords": [
                                "Adepta Sororitas"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following units: Seraphim Squad; Zephyrim Squad.",
                        "compositionText": "1 Celestine – EPIC HERO 2 Geminae Superia Saint Celestine is equipped with: the Ardent Blade. Each Geminae Superia is equipped with: bolt pistol; power weapon."
                },
                {
                        "id": "as-triumph-of-saint-katherine",
                        "name": "Triumph of Saint Katherine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 235
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistols",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
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
                                                "name": "Relic weapons",
                                                "range": "Melee",
                                                "a": 18,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Relics of the Matriarchs",
                                        "Solemn Procession"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Triumph Of Saint Katherine"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "leaderText": "This model can be attached to the following unit: Battle Sisters Squad.",
                        "compositionText": "1 Triumph of Saint Katherine – EPIC HERO This model is equipped with: bolt pistols; relic weapons."
                },
                {
                        "id": "as-battle-sisters-squad",
                        "name": "Battle Sisters Squad",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Artificer-crafted storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
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
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
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
                                                "name": "Ministorum flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
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
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cherub",
                                        "Designer’s Note",
                                        "Defenders of the Faith",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Battleline",
                                "Imperium",
                                "Battle Sisters Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Sister Superior 9 Battle Sisters Every model is equipped with: bolt pistol; boltgun; close combat weapon."
                },
                {
                        "id": "as-immolator",
                        "name": "Immolator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Immolation flamers",
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
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 2",
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
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Purge and Cleanse"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Transport",
                                "Dedicated Transport",
                                "Imperium",
                                "Immolator"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Immolator This model is equipped with: heavy bolter; immolation flamers; armoured tracks. TRANSPORT This model has a transport capacity of 6 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the TRIUMPH OF SAINT KATHERINE. At the start of the Declare Battle Formations step, you can select one BATTLE SISTERS SQUAD, DOMINION SQUAD or SISTERS NOVITIATE SQUAD from your army. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units. If you are splitting a unit that has the Cherub ability, only one of the new units can use that ability during the battle – make a note of which of the new units this will be). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "as-sororitas-rhino",
                        "name": "Sororitas Rhino",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
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
                        "invuln": "6+",
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
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Self Repair"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Imperium",
                                "Sororitas Rhino"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Sororitas Rhino This model is equipped with: storm bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 ADEPTA SORORITAS INFANTRY models. It cannot transport JUMP PACK models or the TRIUMPH OF SAINT KATHERINE."
                },
                {
                        "id": "as-arco-flagellants",
                        "name": "Arco-flagellants",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 45
                                },
                                {
                                        "models": 10,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 2,
                                "ld": "8+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Arco-flails",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 5,
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Extremis Trigger Word"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Penitent",
                                "Arco-Flagellants"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "3-10 Arco-flagellants Every model is equipped with: arco-flails."
                },
                {
                        "id": "as-castigator",
                        "name": "Castigator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigator autocannons",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 4",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Castigator battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rites of Castigation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Castigator"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Castigator This model is equipped with: Castigator autocannons; 3 heavy bolters; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "as-celestian-insidiants",
                        "name": "Celestian Insidiants",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Condemnor bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
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
                                                "name": "Blessed sword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Null mace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Virge of admonition",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Psyker 4+",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rituale Nullificatus",
                                        "Virtue of Intolerance",
                                        "Simulacrum Imperialis",
                                        "Denuncia Oratory"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Celestian Insidiants"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Celestian Insidiant Superior 9 Celestian Insidiants Each model is equipped with: condemnor bolt pistol; null mace."
                },
                {
                        "id": "as-celestian-sacresants",
                        "name": "Celestian Sacresants",
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
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Anointed halberd",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Hallowed mace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Spear of the faithful",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sworn Protectors"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Celestian Sacresants"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Sacresant Superior 4-9 Celestian Sacresants Every model is equipped with: bolt pistol; hallowed mace."
                },
                {
                        "id": "as-dominion-squad",
                        "name": "Dominion Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Artificer-crafted storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
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
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
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
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
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
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cherub",
                                        "Designer’s Note",
                                        "Righteous Awareness",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Dominion Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Dominion Superior 9 Dominions Every model is equipped with: bolt pistol; boltgun; close combat weapon. Holy Vanguard If this unit has a Leader unit attached to it during the Declare Battle Formations step and this unit starts the battle embarked within a TRANSPORT, that Leader unit gains the Scouts 6\" ability."
                },
                {
                        "id": "as-exorcist",
                        "name": "Exorcist",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exorcist conflagration rockets",
                                                "range": "36\"",
                                                "a": "3D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Exorcist missile launcher",
                                                "range": "36\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Devastating Refrain"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Exorcist"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Exorcist This model is equipped with: Exorcist missile launcher; heavy bolter; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "as-mortifiers",
                        "name": "Mortifiers",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                },
                                {
                                        "models": 2,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Mortifier flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                                "name": "Penitent buzz-blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Penitent flail",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent buzz-blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent flails",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Anguish of the Unredeemed",
                                        "Anchorite Sarcophagus"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Penitent",
                                "Mortifiers"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1-2 Mortifiers Every model is equipped with: 2 heavy bolters; twin penitent buzz-blades."
                },
                {
                        "id": "as-paragon-warsuits",
                        "name": "Paragon Warsuits",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Paragon grenade launchers",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Paragon storm bolters",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Paragon war blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paragon war mace",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Righteous Paragons"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Grenades",
                                "Imperium",
                                "Paragon Warsuits"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Paragon Superior 2 Paragons Every model is equipped with: bolt pistol; heavy bolter; Paragon storm bolters; Paragon war blade."
                },
                {
                        "id": "as-penitent-engines",
                        "name": "Penitent Engines",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                },
                                {
                                        "models": 2,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Penitent flamers",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Penitent buzz-blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Penitent flail",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent buzz-blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin penitent flails",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Endless Suffering"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Imperium",
                                "Penitent",
                                "Penitent Engines"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1-2 Penitent Engines Every model is equipped with: penitent flamers; twin penitent buzz-blades."
                },
                {
                        "id": "as-repentia-squad",
                        "name": "Repentia Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "name": "Neural whips",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Penitent eviscerator",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Overseer of Redemption"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Penitent",
                                "Repentia Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Repentia Superior 4-9 Sisters Repentia The Repentia Superior is equipped with: bolt pistol; neural whips. Each Sister Repentia is equipped with: penitent eviscerator."
                },
                {
                        "id": "as-retributor-squad",
                        "name": "Retributor Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
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
                                                "name": "Condemnor boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Devastating Wounds",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum heavy flamer",
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
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
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cherubs",
                                        "Designer’s Note",
                                        "Storm of Retribution"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Retributor Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Retributor Superior 4 Retributors The Retributor Superior is equipped with: bolt pistol; boltgun; close combat weapon. Each Retributor is equipped with: bolt pistol; heavy bolter; close combat weapon."
                },
                {
                        "id": "as-sanctifiers",
                        "name": "Sanctifiers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 9,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Holy fire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "One Shot",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Meltagun",
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
                                                "name": "Ministorum flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Burning hands",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
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
                                        },
                                        {
                                                "name": "Death Cult blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Sanctifier melee weapon",
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
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Ministorum Sermon",
                                        "Cherub",
                                        "Designer’s Note",
                                        "Salvationist Medikit",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Sanctifiers"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Miraculist 1 Salvationist 1 Death Cult Assassin 2 Missionaries 4 Sanctifiers The Miraculist is equipped with: holy fire; burning hands. The Salvationist is equipped with: close combat weapon; Salvationist medikit. The Death Cult Assassin is equipped with: Death Cult blades. 1 Missionary is equipped with: plasma gun; Sanctifier melee weapon. 1 Missionary is equipped with: Ministorum flamer; Sanctifier melee weapon. Every Sanctifier is equipped with: Ministorum hand flamer; Sanctifier melee weapon."
                },
                {
                        "id": "as-seraphim-squad",
                        "name": "Seraphim Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 80
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Inferno pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Angelic Ascent"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Seraphim Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Seraphim Superior 4-9 Seraphim Every model is equipped with: 2 bolt pistols; close combat weapon."
                },
                {
                        "id": "as-sisters-novitiate-squad",
                        "name": "Sisters Novitiate Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
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
                                                "name": "Autogun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Ministorum flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Novitiate melee weapons",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Impetuous Fervour",
                                        "Sacred Banner",
                                        "Simulacrum Imperialis"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Sisters Novitiate Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Novitiate Superior 9 Sisters Novitiate The Novitiate Superior is equipped with: bolt pistol; boltgun; close combat weapon. Each Sister Novitiate is equipped with: autopistol; autogun; close combat weapon."
                },
                {
                        "id": "as-zephyrim-squad",
                        "name": "Zephyrim Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 80
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Acts of Faith"
                                ],
                                "wargear": [],
                                "other": [
                                        "Embodied Prophecy",
                                        "Sacred Banner"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Imperium",
                                "Zephyrim Squad"
                        ],
                        "factionKeywords": [
                                "Adepta Sororitas"
                        ],
                        "compositionText": "1 Zephyrim Superior 4-9 Zephyrim Every model is equipped with: bolt pistol; power weapon."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(as);
})();
