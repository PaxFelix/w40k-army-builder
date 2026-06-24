/**
 * W40K Army Builder — Chaos Space Marines (10th Edition)
 *
 * Datasheets from Codex: Chaos Space Marines. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const chaosSpaceMarines = {
        id: "chaos-space-marines",
        name: "Chaos Space Marines",
        icon: "\uD83D\uDD25",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Dark Pacts", flavour: "Beseeching the Chaos Gods with fanatical fervour, the profane champions of the Heretic Astartes pray for diabolic boons, promising the vilest of offerings in return for their power.", text: "If your Army Faction is HERETIC ASTARTES, each time a unit with this ability is selected to shoot or fight, it can make a Dark Pact. If it does, it must first take a Leadership test before any effects of that Dark Pact are resolved; if that test is failed, that unit suffers D3 mortal wounds. Then, select one of the following abilities for that unit's weapons to gain until the end of the phase:\n- [Lethal Hits]\n- [Sustained Hits 1]" },
            { name: "Cult of the Dark Gods", flavour: "Some traitors have given themselves entirely to the service of the Dark Gods, and they are so lost to damnation that they barely resemble the warriors they once were.", text: "If your Army Faction is HERETIC ASTARTES, you can include any of the following units in your army, and when you do so their Faction keywords are replaced with HERETIC ASTARTES:\n- KHORNE BERZERKERS (see World Eaters)\n- RUBRIC MARINES (see Thousand Sons)\n- PLAGUE MARINES (see Death Guard)\n- NOISE MARINES (see Emperor's Children)\n\nThe combined points value of such units you can include in your army depends on the battle size, as follows:\n- Incursion: Up to 250 pts\n- Strike Force: Up to 500 pts\n- Onslaught: Up to 750 pts" }
        ],
        detachments: [
            {
                name: "Veterans of the Long War",
                flavour: "",
                rule: { name: "Focus of Hatred", flavour: "The eldest of the Chaos Space Marines harbour within their corrupted souls a burning desire for vengeance upon the Imperium and the galaxy as a whole. They channel this ire against their chosen targets, relentlessly pursuing their victims until every last foe lies dead upon the battlefield.", text: "At the start of your Command phase, select one unit from your opponent's army to be your focus of hatred. Until the start of your next Command phase, each time a HERETIC ASTARTES model from your army (excluding DAMNED models) makes an attack that targets your focus of hatred, you can re-roll the Hit roll.", restrictions: "" },
                enhancements: [
                    { name: "Eager for Vengeance", cost: 20, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "The desire for vengeance and bloodshed has festered within this warrior's heart for millennia. The opportunity to unleash it upon the foe is eagerly embraced.\n\nThe bearer's unit is eligible to shoot and declare a charge in a turn in which it Fell Back. Each time a model in the bearer's unit makes an attack that targets your focus of hatred, if the bearer's unit Fell Back this turn, add 1 to the Hit roll, and each time you select your focus of hatred as a target of that unit's charge, add 1 to the Charge roll." },
                    { name: "Eye of Abaddon", cost: 15, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "The Warmaster observes all. He bestows his favour only upon those who slaughter his most hated enemies.\n\nWhile the bearer is on the battlefield, each time your focus of hatred is destroyed, roll one D6: on a 4+, you gain 1CP." },
                    { name: "Mark of Legend", cost: 10, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "This warrior has earned the patronage of a powerful daemonic entity and been rewarded with unholy powers.\n\nOnce per turn, you can re-roll one Hit roll, one Wound roll or one saving throw made for the bearer." },
                    { name: "Warmaster's Gift", cost: 15, restriction: "CHAOS LORD model only.", text: "This warrior bears a daemonic weapon of great power, gifted unto them by the Despoiler himself.\n\nEach time the bearer makes an attack that targets your focus of hatred, an unmodified successful Wound roll of 5+ scores a Critical Wound." },
                ],
                stratagems: [
                    { name: "Endless Ire", cp: 2, type: "Epic Deed", when: "Any phase, just after your focus of hatred is destroyed.", target: "One HERETIC ASTARTES CHARACTER unit from your army (excluding DAMNED units).", effect: "Select one enemy unit within 12\" of and visible to your unit. Until the start of your next Command phase, that enemy unit is considered to be your focus of hatred.", restrictions: "" },
                    { name: "Contemptuous Disregard", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Bringers of Despair", cp: 2, type: "Epic Deed", when: "Start of the Fight phase.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units) that is within Engagement Range of your focus of hatred.", effect: "Until the end of the phase, your unit has the Fights First ability.", restrictions: "" },
                    { name: "Black Crusade", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES INFANTRY unit or HERETIC ASTARTES MOUNTED unit from your army (excluding DAMNED units).", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back, and bolt pistols, boltguns and combi-bolters equipped by models in your unit have the [Devastating Wounds] ability while your unit has not already inflicted 6 wounds this turn using that ability.", restrictions: "" },
                    { name: "Let the Galaxy Burn", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One HERETIC ASTARTES unit from your army (excluding TZEENTCH units) that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability, and change the Attacks characteristic of Torrent weapons equipped by models in your unit to 6.", restrictions: "" },
                    { name: "Millennia of Experience", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One HERETIC ASTARTES INFANTRY or HERETIC ASTARTES MOUNTED unit from your army (excluding DAMNED units) that is within 9\" of that enemy unit and not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                ]
            },
            {
                name: "Deceptors",
                flavour: "",
                rule: { name: "Masters of Misdirection", flavour: "There are those warbands that number amongst their ranks liars, schemers and infiltrators of far more prodigious skill than most heretics. Employing labyrinthine ploys, they unnerve their enemies and force them to chase ghosts and shadows. They embed themselves within combat zones long before showing their hand, seeding Chaos cults, identifying key targets and feeding misinformation to their foes.", text: "In the Declare Battle Formations step, you can select a number of LEGIONARIES and CULTIST MOB units from your army: until the end of the battle, those units, and any CHARACTER units attached to them (excluding EPIC HEROES), have the Infiltrators ability. The maximum number of units you can select in this way depends on the battle size, as shown below.\n- Incursion: Up to 2 LEGIONARIES units and up to 2 CULTIST MOB units\n- Strike Force: Up to 3 LEGIONARIES units and up to 3 CULTIST MOB units\n- Onslaught: Up to 4 LEGIONARIES units and up to 4 CULTIST MOB units", restrictions: "" },
                enhancements: [
                    { name: "Cursed Fang", cost: 10, restriction: "HERETIC ASTARTES INFANTRY model only.", text: "This xenos weapon is perfect in the hands of assassins.\n\nImprove the Armour Penetration characteristic of the bearer's melee weapons by 1, and the bearer's melee weapons have the [Precision] ability." },
                    { name: "Falsehood", cost: 10, restriction: "CHAOS LORD model only (excluding TERMINATOR and JUMP PACK models).", text: "This leader conceals their presence upon the battlefield.\n\nIn the Declare Battle Formations step, you can set the bearer up in Reserves instead of setting it up on the battlefield. If you do, in the Reinforcements step of one of your Movement phases, you can select one model in a friendly LEGIONARIES or CHOSEN unit that has two or more models remaining and is on the battlefield (excluding Attached units). The selected model is destroyed (ignoring any rules that are triggered when a model is destroyed) and the bearer is set up as close as possible to where that model was destroyed and only within Engagement Range of any enemy units if the destroyed model was within Engagement Range of those units. The bearer now attaches to that unit as its Leader." },
                    { name: "Shroud of Obfuscation", cost: 15, restriction: "HERETIC ASTARTES INFANTRY model only.", text: "Made from warp-beast skin, this cloak obscures all.\n\nThe bearer has the Stealth and Lone Operative abilities." },
                    { name: "Soul Link", cost: 5, restriction: "HERETIC ASTARTES INFANTRY model only.", text: "With a whispered incantation this champion projects their consciousness into the body of a willing ally.\n\nAt the start of your Command phase, you can select one other HERETIC ASTARTES INFANTRY CHARACTER model from your army (excluding EPIC HEROES). Until the start of your next Command phase, the bearer gains the PSYKER keyword, and replace the bearer's datasheet abilities with the datasheet abilities of the CHARACTER you selected." },
                ],
                stratagems: [
                    { name: "Detonator", cp: 1, type: "Wargear", when: "Any phase, just after an enemy model with the Deadly Demise ability (excluding TITANIC models) is destroyed.", target: "One HERETIC ASTARTES CHARACTER unit from your army that was within 18\" of that enemy model when it was destroyed.", effect: "Your opponent does not roll to determine whether mortal wounds are inflicted by their model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted (if that ability inflicts a random number of mortal wounds, your opponent rolls to determine that number as normal).", restrictions: "" },
                    { name: "From All Sides", cp: 1, type: "Battle Tactic", when: "Start of your Charge phase.", target: "One HERETIC ASTARTES unit from your army.", effect: "Until the end of the phase, add 1 to Charge rolls made for your unit for each other HERETIC ASTARTES unit from your army that made a Charge move this phase (to a maximum of +3).", restrictions: "" },
                    { name: "Pick Them Off", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One HERETIC ASTARTES unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll. If the target is Below Half-strength, you can re-roll the Wound roll as well.", restrictions: "" },
                    { name: "Coils of Deception", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a HERETIC ASTARTES unit from your army Falls Back.", target: "That HERETIC ASTARTES unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Relentless Pursuit", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One HERETIC ASTARTES INFANTRY or HERETIC ASTARTES MOUNTED unit from your army that is within 9\" of that enemy unit and not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Scrambled Coordinates", cp: 1, type: "Strategic Ploy", when: "Start of the Reinforcements step of your opponent's Movement phase.", target: "One HERETIC ASTARTES unit from your army.", effect: "Until the end of the phase, enemy units that are set up on the battlefield from Reserves cannot be set up within 12\" horizontally of your unit.", restrictions: "" },
                ]
            },
            {
                name: "Renegade Raiders",
                flavour: "",
                rule: { name: "Raiders and Reavers", flavour: "Some Heretic Astartes warbands are piratical by nature, launching swift attacks focused upon destroying their foes in a storm of bloody violence, seizing territory and spoils of war before the enemy can bring reinforcements to bear.", text: "Ranged weapons equipped by HERETIC ASTARTES models from your army have the [Assault] ability, and each time a HERETIC ASTARTES model from your army makes an attack that targets a unit within range of an objective marker, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                enhancements: [
                    { name: "Despot's Claim", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "This champion is a conqueror of worlds and will not rest until they have claimed their prize.\n\nAt the start of your Command phase, if the bearer is on the battlefield, roll one D6, adding 1 to the result if the bearer is wholly within 12\" of your opponent's deployment zone: on a 5+, you gain 1CP." },
                    { name: "Dread Reaver", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "A corsair and raider of great renown, this champion of Chaos is pitiless in the pursuit of plunder and infamy.\n\nEach time the bearer makes a melee attack, if the bearer is wholly within 12\" of your opponent's deployment zone, you can re-roll the Hit roll and you can re-roll the Wound roll." },
                    { name: "Mark of the Hound", cost: 25, restriction: "HERETIC ASTARTES model only.", text: "This unit of warriors act as their master's eyes and ears, seeking out targets of opportunity.\n\nModels in the bearer's unit have the Scouts 6\" ability." },
                    { name: "Tyrant's Lash", cost: 20, restriction: "HERETIC ASTARTES model only.", text: "Pain provides excellent motivation. The crack of this infernal whip sears the soul, driving the hesitant forwards with a vigour borne of anguish.\n\nYou can re-roll Advance rolls made for the bearer's unit, and the bearer's unit is eligible to shoot in a turn in which it Fell Back." },
                ],
                stratagems: [
                    { name: "Unfailingly Obdurate", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Scour and Seize", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One HERETIC ASTARTES unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within range of an objective marker, that attack has the [Precision] ability.", restrictions: "" },
                    { name: "Opportunistic Raiders", cp: 1, type: "Strategic Ploy", when: "End of the Fight phase.", target: "One HERETIC ASTARTES unit from your army that was eligible to fight this phase.", effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\", or up to 12\" if it is a MOUNTED unit. Otherwise, your unit can make a Fall Back move. It cannot embark within a TRANSPORT at the end of this move if it disembarked from a TRANSPORT this turn.", restrictions: "" },
                    { name: "Warpcharged Engines", cp: 1, type: "Wargear", when: "Your Movement phase.", target: "One HERETIC ASTARTES TRANSPORT or HERETIC ASTARTES MOUNTED unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Ruinous Raid", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or your Fight phase.", target: "One HERETIC ASTARTES unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if the target of that attack is within range of an objective marker, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Reavers' Haste", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One HERETIC ASTARTES INFANTRY or HERETIC ASTARTES MOUNTED unit from your army.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced. If you select one or more units within range of an objective marker as a target of that charge, add 1 to the Charge roll.", restrictions: "" },
                ]
            },
            {
                name: "Dread Talons",
                flavour: "",
                rule: { name: "Terror Descends (Aura)", flavour: "Bedecked in the flayed skins and leering skulls of former victims, their armour flecked with blood and gore, these reavers descend in a howling gale of enraged screams and soul-piercing shrieks. To look upon their ghastly visages is to feel a terrible and paralysing fear.", text: "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is below its Starting Strength is within 12\" of one or more HERETIC ASTARTES units from your army, that enemy unit must take a Battle-shock test.\n\nEach time an enemy unit within 12\" of one or more HERETIC ASTARTES units from your army takes a Battle-shock test, subtract 1 from the result.\n\nEnemy units affected by this Detachment rule do not need to take any other Battle-shock tests in the same phase.", restrictions: "" },
                enhancements: [
                    { name: "Eater of Dread", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "As ripples of terror spread through the ranks of the enemy, so does this champion draw power from the fear of their victims.\n\nAt the start of your Command phase, if the bearer is on the battlefield, roll one D6, adding 1 to the result for each Battle-shocked enemy unit that is on the battlefield: on a 5+, you gain 1CP." },
                    { name: "Night's Shroud", cost: 20, restriction: "CHAOS LORD model only (excluding TERMINATOR models).", text: "This cape is as black as a moonless night and radiates an obfuscating aura of impenetrable darkness.\n\nModels in the bearer's unit have the Stealth ability." },
                    { name: "Warp-fuelled Thrusters", cost: 20, restriction: "JUMP PACK CHAOS LORD model only.", text: "Bathed in warp energies, this Lord's jump pack tears rifts in reality, allowing them to withdraw at a moment's notice.\n\nAt the end of your opponent's turn, if the bearer's unit is not within Engagement Range of one or more enemy units, you can remove the bearer's unit from the battlefield and place it into Strategic Reserves." },
                    { name: "Willbreaker", cost: 10, restriction: "HERETIC ASTARTES model only.", text: "This daemonic weapon assails the psyches of those it strikes, causing the cold shock of abject terror to grip their hearts.\n\nIn the Fight phase, after the bearer has made its attacks, select one enemy unit hit by one or more of those attacks. That unit must take a Battle-shock test." },
                ],
                stratagems: [
                    { name: "Depthless Cruelty", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Bloody Example", cp: 1, type: "Epic Deed", when: "Fight phase, just after a HERETIC ASTARTES unit from your army destroys a CHARACTER unit.", target: "That HERETIC ASTARTES unit.", effect: "Each enemy unit within 12\" of and visible to your unit must take a Battle-shock test.", restrictions: "" },
                    { name: "Pitiless Hunters", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Relentless Terror", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a HERETIC ASTARTES INFANTRY unit from your army Falls Back.", target: "That HERETIC ASTARTES INFANTRY unit.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Screaming Descent", cp: 1, type: "Strategic Ploy", when: "Reinforcements step of your Movement phase, from the second battle round onwards.", target: "One HERETIC ASTARTES JUMP PACK unit from your army that is in Reserves.", effect: "Set your unit up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge. Then select one enemy INFANTRY or MOUNTED unit within 9\" of and visible to your unit: that unit must take a Battle-shock test.", restrictions: "" },
                    { name: "Merciless Pursuit", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Movement phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Select one enemy unit that Fell Back this turn and is within 6\" of your unit. Your unit can declare a charge as if it were your Charge phase. When doing so, you can only select that enemy unit as the target of that charge (and only if it is an eligible target). Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.", restrictions: "" },
                ]
            },
            {
                name: "Fellhammer Siege-host",
                flavour: "",
                rule: { name: "Iron Fortitude", flavour: "The most indefatigable of Heretic Astartes warbands possess a grim determination that matches the resilience of their superhuman physiques and formidable ceramite armour. They go to war amidst formations of daemonic war machines and growling vehicles. Some even embrace the worship of the Dark Gods, trading their souls for supernatural protection.", text: "Each time a ranged attack targets a HERETIC ASTARTES unit from your army (excluding DAMNED units), if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Bastion Plate", cost: 10, restriction: "CHAOS LORD model only (excluding JUMP PACK models).", text: "Despite the pits and dents that mar its surface, this suit of relic armour is as resilient as the walls of any grand bastion.\n\nOnce per battle round, when a saving throw is failed for the bearer's unit, you can change the Damage characteristic of that attack to 0." },
                    { name: "Iron Artifice", cost: 10, restriction: "HERETIC ASTARTES INFANTRY model only.", text: "Forged in baleflame and witchfire, the bearer's weapons are redolent with the entropic power of the immaterium.\n\nThe bearer's weapons have the [Anti-Vehicle 4+] and [Anti-Fortification 4+] abilities." },
                    { name: "Ironbound Enmity", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "A siegemaster of steadfast determination and pitiless wrath, this champion will not rest or retreat until the enemy has been cast from trench line and rampart.\n\nEach time the bearer makes an attack while within range of an objective marker, add 1 to the Wound roll." },
                    { name: "Warp Tracer", cost: 20, restriction: "HERETIC ASTARTES model only.", text: "Crafted by the dread Warpsmith Kradius, these shells contain writhing nanoworms redolent with warp energies that act as a beacon to the targeting systems of Heretic Astartes.\n\nIn your Shooting phase, after the bearer has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover." },
                ],
                stratagems: [
                    { name: "Persistent Assailants", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more attacks this phase and has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll, and if your unit is Below Half-strength you can re-roll the Wound roll as well.", restrictions: "" },
                    { name: "Brutal Attrition", cp: 1, type: "Epic Deed", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES INFANTRY unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a melee attack is allocated to your unit, after the attacking unit has finished making its attacks, roll one D6 (to a maximum of six D6 per attacking unit): for each 4+, the attacking unit suffers 1 mortal wound.", restrictions: "" },
                    { name: "Pitiless Cannonade", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One HERETIC ASTARTES unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Below Half-strength, a successful unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Point-blank Destruction", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One HERETIC ASTARTES unit from your army that is within Engagement Range of one or more enemy units and has not been selected to shoot this phase.", effect: "Until the end of the phase, your unit's ranged weapons (excluding Blast weapons) have the [Pistol] ability.", restrictions: "" },
                    { name: "Steadfast Determination", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.", restrictions: "" },
                    { name: "Siegecraft", cp: 1, type: "Strategic Ploy", when: "Start of your opponent's Charge phase.", target: "One HERETIC ASTARTES unit from your army.", effect: "Until the end of the phase, each time an enemy unit selects your unit as a target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).", restrictions: "" },
                ]
            },
            {
                name: "Pactbound Zealots",
                flavour: "",
                rule: { name: "Marks of Chaos", flavour: "", text: "When mustering your army, when you select a HERETIC ASTARTES unit to include in your army, if that unit is not an EPIC HERO and does not already have one of the following keywords, you must select one for that unit and note it on your Army Roster: KHORNE, TZEENTCH, NURGLE, SLAANESH, CHAOS UNDIVIDED. Each time a unit with one of these keywords gains a weapon ability as the result of a Dark Pact and does not fail the resulting Leadership test, until the end of the phase, that unit gains the associated ability below.\n\nUNITS THAT GAINED [Lethal Hits]:\n- KHORNE: Each time a model in this unit makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit.\n- TZEENTCH: Each time a model in this unit makes a ranged attack, an unmodified Hit roll of 5+ scores a Critical Hit.\n- CHAOS UNDIVIDED: Each time a model in this unit makes an attack, re-roll a Hit roll of 1.\n\nUNITS THAT GAINED [Sustained Hits 1]:\n- NURGLE: Each time a model in this unit makes a ranged attack, an unmodified Hit roll of 5+ scores a Critical Hit.\n- SLAANESH: Each time a model in this unit makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit.\n- CHAOS UNDIVIDED: Each time a model in this unit makes an attack, re-roll a Hit roll of 1.", restrictions: "You cannot select the KHORNE keyword for a PSYKER unit.\nA CHARACTER unit can only be attached to a unit if both units share the same keyword from the list above.\nA unit can only embark within (or start the battle embarked within) a TRANSPORT if both of those units share the same keyword from the list above." },
                enhancements: [
                    { name: "Eye of Tzeentch", cost: 15, restriction: "HERETIC ASTARTES TZEENTCH model only.", text: "No secret is safe from Tzeentch's searching gaze. To those who bear his favour, priceless knowledge may be revealed.\n\nEach time the bearer's unit makes a Dark Pact and does not fail the resulting Leadership test, if the result of that test was 8 or more, you gain 1CP." },
                    { name: "Intoxicating Elixir", cost: 15, restriction: "HERETIC ASTARTES SLAANESH model only.", text: "This concoction fortifies the imbiber and causes them to emit a stultifying perfume that enthrals the foe.\n\nThe bearer has the Feel No Pain 5+ ability. Each time the bearer shoots or fights, if the bearer's unit made a Dark Pact this phase and did not fail the resulting Leadership test, after the bearer has resolved those attacks, select one enemy unit that was hit by one or more of those attacks; that enemy unit must take a Battle-shock test." },
                    { name: "Orbs of Unlife", cost: 15, restriction: "HERETIC ASTARTES NURGLE model only.", text: "Nurgle's malignance fortifies his chosen and bestows upon them the gift of terrible contagion.\n\nAt the end of the Fight phase, roll one D6 for every enemy unit within 3\" of the bearer, adding 1 to the result if the bearer's unit made a Dark Pact that phase and did not fail the resulting Leadership test: on a 4+, that enemy unit suffers D3 mortal wounds." },
                    { name: "Talisman of Burning Blood", cost: 15, restriction: "HERETIC ASTARTES KHORNE model only.", text: "This crimson gem radiates malice, granting its bearer but a sliver of Khorne's boundless fury.\n\nAdd 1 to the Attacks and Strength characteristics of the bearer's melee weapons. Each time the bearer's unit makes a Dark Pact and does not fail the resulting Leadership test, roll one D3: until the end of the phase, add the result to the Attacks and Strength characteristics of the bearer's melee weapons instead." },
                ],
                stratagems: [
                    { name: "Eye of the Gods", cp: 1, type: "Epic Deed", when: "Fight phase, just after a HERETIC ASTARTES CHARACTER unit from your army (excluding DAMNED, DAEMON and EPIC HERO units) destroys an enemy unit.", target: "One HERETIC ASTARTES CHARACTER model in that unit.", effect: "Until the end of the battle, add 1 to the Move, Toughness and Wounds characteristics of that CHARACTER model, and add 1 to the Attacks, Strength and Damage characteristics of that CHARACTER model's melee weapons.", restrictions: "" },
                    { name: "Eternal Hate", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if it is a KHORNE unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Profane Zeal", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One HERETIC ASTARTES CHAOS UNDIVIDED unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Skinshift", cp: 1, type: "Epic Deed", when: "Your Command phase.", target: "One HERETIC ASTARTES unit from your army.", effect: "One model in your unit regains up to 3 lost wounds. In addition, if your unit is a TZEENTCH unit below its Starting Strength, one destroyed model (excluding CHARACTER models) is returned to your unit with its full wounds remaining.", restrictions: "" },
                    { name: "Torpefying Refrain", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES unit from your army.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back. If your unit is a SLAANESH unit, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.", restrictions: "" },
                    { name: "Festering Miasma", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit has the Stealth ability. In addition, if your unit is a NURGLE unit, it can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                ]
            },
            {
                name: "Chaos Cult",
                flavour: "",
                rule: { name: "Desperate Devotion", flavour: "Utterly dedicated to the worship of the Dark Gods, thronging mortal cultists and regiments of Traitor Guardsmen are more than willing to make bloody sacrifices and take desperate actions in the hope of attaining favour.", text: "Each time a DAMNED unit from your army with the Dark Pacts ability is selected to make a Normal or Advance move or declare a charge (excluding units that arrived from Reserves this turn), it can make a Desperate Pact (see below). If it does, until the end of the phase, add 2 to the Move characteristic of models in that unit and add 2 to Charge rolls made for that unit.\n\nDesperate Pacts: Each time a unit makes a Desperate Pact, it must first take a Leadership test; if that test is failed, that unit suffers D3 mortal wounds before any effects of that Desperate Pact are resolved.", restrictions: "TRAITOR GUARDSMEN SQUAD units from your army gain the BATTLELINE keyword." },
                enhancements: [
                    { name: "Amulet of Tainted Vigour", cost: 20, restriction: "DARK APOSTLE model only.", text: "Containing the motive energy of Human sacrifices, this device can restore life to the fallen.\n\nIn your Command phase, you can return up to D3 destroyed DAMNED models (excluding CHARACTER models) to the bearer's unit." },
                    { name: "Cultist's Brand", cost: 20, restriction: "DARK APOSTLE or DAMNED model only.", text: "The masters of heretic cults are given to branding their underlings with arcane sigils of command.\n\nIf every other model in the bearer's unit (excluding Dark Disciples) is DAMNED, you can re-roll Advance and Charge rolls made for the bearer's unit." },
                    { name: "Incendiary Goad", cost: 15, restriction: "DARK APOSTLE or DAMNED model only.", text: "The bearer of this baleflame-wreathed implement may use its searing touch to incite their followers to acts of violent savagery.\n\nWhile the bearer's unit is below its Starting Strength, add 1 to the Strength characteristic of melee weapons equipped by DAMNED models in that unit, and while that unit is Below Half-strength, add 1 to the Attacks characteristic of those weapons as well." },
                    { name: "Warped Foresight", cost: 10, restriction: "DARK APOSTLE or DAMNED model only.", text: "The priesthood of the Chaos pantheon use their sorcerous gifts to reveal the future and position their followers accordingly.\n\nWhile the bearer is leading a unit with the Scouts 6\" ability, every model in the bearer's unit has the Scouts 6\" ability." },
                ],
                stratagems: [
                    { name: "Chosen for Glory", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One DAMNED unit from your army that has not been selected to shoot or fight this phase.", effect: "Your unit can make a Desperate Pact. If it does, until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, you can re-roll the Wound roll as well.", restrictions: "" },
                    { name: "Selfless Demise", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One DAMNED unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has resolved all of its attacks, each time a model in your unit is destroyed, roll one D6: on a 6, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.", restrictions: "" },
                    { name: "Infernal Sacrifice", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DAMNED unit from your army that has not been selected to fight this phase.", effect: "Your unit can make a Desperate Pact. If it does, your unit suffers D3 mortal wounds (in addition to any suffered for failing the resulting Leadership test), and until the end of the phase, add 1 to the Attacks characteristic of the melee weapons equipped by models in your unit, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, until the end of the phase, improve the Strength characteristic of those weapons by 1 as well.", restrictions: "" },
                    { name: "Crazed Focus", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One DAMNED unit from your army that has not been selected to shoot this phase.", effect: "Your unit can make a Desperate Pact. If it does, until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1, and if your unit did not fail the resulting Leadership test when making that Desperate Pact, improve the Strength characteristic of that attack by 1 as well.", restrictions: "" },
                    { name: "Reckless Haste", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One DAMNED unit from your army.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Mortal Thralls", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks, and one friendly DAMNED unit within 3\" of your unit and visible to both your unit and the attacking unit.", effect: "Until the end of the phase, while your DAMNED unit is on the battlefield, each time your opponent would make a Wound roll for an attack that targets your HERETIC ASTARTES unit, if your DAMNED unit is visible to the attacking model and is an eligible target for that attack, no roll is made; instead, your DAMNED unit suffers a number of mortal wounds equal to the Damage characteristic of that attack.", restrictions: "" },
                ]
            },
            {
                name: "Soulforged Warpack",
                flavour: "",
                rule: { name: "Debt to the Soul Forge", flavour: "Many are the daemons who have forged pacts with Vashtorr the Arkifane. Once bound into such a contract, a soul debt must be paid, one that the daemon strives endlessly, and with all its desperation, to fulfil.", text: "Each time a HERETIC ASTARTES DAEMON VEHICLE unit from your army makes a Dark Pact, it can invoke its contract. If it does, subtract 1 from the resulting Leadership test when making that Dark Pact, and until the end of the phase:\n- Each time a model in that unit makes a ranged attack, add 1 to the Wound roll.\n- Add 2 to the Attacks characteristic of melee weapons equipped by models in that unit.", restrictions: "" },
                enhancements: [
                    { name: "Forge's Blessing", cost: 20, restriction: "HERETIC ASTARTES model only.", text: "Such is this warrior's mastery of techno-sorcery, that they may temper armour with but a gesture.\n\nIn your Command phase, select one friendly HERETIC ASTARTES VEHICLE unit within 12\" of the bearer. Until the start of your next Command phase, that unit has the Feel No Pain 6+ ability." },
                    { name: "Invigorated Mechatendrils", cost: 15, restriction: "WARPSMITH model only.", text: "Suffused with warp power, the bearer's mechatendrils undulate with unsettling celerity, propelling them forwards with unnatural speed.\n\nAdd 4\" to the bearer's Move characteristic." },
                    { name: "Tempting Addendum", cost: 25, restriction: "HERETIC ASTARTES model only.", text: "The Arkifane's contracts are malleable by design. More power can be offered should the supplicant be willing to bear the debt in souls.\n\nEach time a HERETIC ASTARTES DAEMON VEHICLE unit from your army invokes its contract while within 3\" of the bearer:\n- If it suffers one or more mortal wounds as a result of that Dark Pact, add 1 to the number of mortal wounds it suffers.\n- Until the end of the phase, each time a model in that unit makes an attack, you can re-roll the Hit roll." },
                    { name: "Soul Harvester", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "To stoke the fires of a daemon forge requires a bounty of souls. Thus do the Warpsmiths and their allies undertake a never-ending harvest.\n\nWhile the bearer is on the battlefield, each time an enemy unit within 12\" of the bearer is destroyed, roll one D6: on a 5+, you gain 1CP." },
                ],
                stratagems: [
                    { name: "Desperate Pledge", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One HERETIC ASTARTES DAEMON VEHICLE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, if your unit invokes its contract, each time it makes an attack, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Glut of Souls", cp: 1, type: "Strategic Ploy", when: "Fight phase.", target: "One HERETIC ASTARTES DAEMON VEHICLE unit from your army (excluding TITANIC units) that has not been selected to fight this phase.", effect: "Until the end of the phase, if your unit invokes its contract, each time it makes an attack that destroys an enemy model, roll one D6: on a 5+, your unit regains 1 lost wound after all of its attacks have been resolved (to a maximum of 6 wounds).", restrictions: "" },
                    { name: "Daemonic Possession", cp: 1, type: "Epic Deed", when: "Your Command phase.", target: "One HERETIC ASTARTES VEHICLE unit from your army (excluding DAEMON units).", effect: "Until the end of the battle, your unit has the DAEMON keyword.", restrictions: "" },
                    { name: "Unstoppable Rampage", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or Charge phase.", target: "One HERETIC ASTARTES VEHICLE or VASHTORR THE ARKIFANE unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or charge move, it can move horizontally through terrain features as if they were not there.", restrictions: "" },
                    { name: "Predatory Pursuit", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One HERETIC ASTARTES VEHICLE or VASHTORR THE ARKIFANE unit from your army that is within 9\" of that enemy unit and not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\", but must end that move as close as possible to that enemy unit.", restrictions: "" },
                    { name: "Feeding Frenzy", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, when an enemy unit (excluding MONSTER and VEHICLES) is selected to Fall Back.", target: "One HERETIC ASTARTES DAEMON VEHICLE or VASHTORR THE ARKIFANE unit from your army that is within Engagement Range of that enemy unit.", effect: "Until the end of the phase, each time an enemy unit (excluding MONSTERS and VEHICLES) that is within Engagement Range of your unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests.", restrictions: "" },
                ]
            },
            {
                name: "Cabal of Chaos",
                flavour: "Even a single Chaos Space Marine Sorcerer is a powerful champion of the Dark Gods, capable of channelling the energies of the Warp into blasts of infernal flame and nightmarish curses of mutation. When multiple Sorcerers gather, their powers are magnified. Reality itself convulses at their command. Enemy warriors are torn asunder by storms of empyric power, as the battlefield writhes in unnatural mutation. While a lone Sorcerer often acts as the advisor to a powerful Chaos Lord, cabals such as this possess the combined might and forbidden knowledge to rule over armies or even entire worlds. Accompanied by their chosen lieutenants and defended by those they consider their servants, the Sorcerers unleash their hosts to conquer unsuspecting worlds, ransack ancient repositories of knowledge, and expand their malevolent powers even more.",
                rule: { name: "Empyric Wellspring", flavour: "The sorcerous powers wielded by a cabal inevitably draw the eyes of the Dark Gods and flood the battlefield with supernatural energies, further enhancing the warp-gifts of their fellow Chaos Space Marines.", text: "Each time a unit from your army makes a Dark Pact, select one of the following abilities. Your unit has that ability until the end of the phase.\n\nLeaping Warpflame: While this unit is within 9\" of one or more friendly HERETIC ASTARTES PSYKER models, improve the Strength characteristic of ranged weapons equipped by models in this unit by 1.\n\nMonstrous Manifestation: While this unit is within 9\" of one or more friendly HERETIC ASTARTES DAEMON PRINCE or HERETIC ASTARTES DAEMON PRINCE WITH WINGS models, improve the Armour Penetration characteristic of melee weapons equipped by models in this unit by 1.", restrictions: "" },
                enhancements: [
                    { name: "Touched by the Warp", cost: 10, restriction: "HERETIC ASTARTES model only (excluding KHORNE models).", text: "Not all Sorcerers begin as psykers. Some are gifted their mystic powers by the gods of the Warp.\n\nThe bearer gains the PSYKER keyword." },
                    { name: "Eyes of Z'desh", cost: 25, restriction: "HERETIC ASTARTES model only.", text: "This splintered crystal shows possible futures, affording its bearer the chance to act before all others.\n\nModels in the bearer's unit have the Scouts 6\" ability." },
                    { name: "Mind Blade", cost: 25, restriction: "PSYKER model only.", text: "This Sorcerer has been blessed with the ability to channel all their hatred and cruelty into the weapons of their warriors.\n\nMelee weapons equipped by models in the bearer's unit have the [Lance] ability." },
                    { name: "Infernal Avatar", cost: 20, restriction: "HERETIC ASTARTES DAEMON PRINCE or HERETIC ASTARTES DAEMON PRINCE WITH WINGS model only.", text: "This dread being is not only a Daemon Prince but also a dark sorcerer of immense power, able to augment their physical might with even greater empyric puissance.\n\nImprove the Strength characteristic of melee weapons equipped by the bearer by 2, and improve the Armour Penetration characteristic of those weapons by 1." },
                ],
                stratagems: [
                    { name: "Baleful Blessing", cp: 1, type: "Epic Deed", when: "Any phase, just after a HERETIC ASTARTES unit from your army has a mortal wound allocated to it.", target: "That HERETIC ASTARTES unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds.", restrictions: "" },
                    { name: "No Rest in Death", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES unit from your army within 9\" of a HERETIC ASTARTES PSYKER, HERETIC ASTARTES DAEMON PRINCE or HERETIC ASTARTES DAEMON PRINCE WITH WINGS unit from your army.", effect: "One model in your unit regains up to D3+1 lost wounds. If your unit has the BATTLELINE keyword, you can return up to D3 destroyed models (excluding CHARACTER models) to your unit with their full wounds remaining, instead.", restrictions: "" },
                    { name: "Mutation's Curse", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One HERETIC ASTARTES PSYKER unit from your army.", effect: "Select one visible enemy unit within 12\" of your unit. Roll one D6: on a 1, that enemy unit suffers 1 mortal wound; on a 2-4, that enemy unit suffers D3 mortal wounds; on a 5-6, that enemy unit suffers 2D3 mortal wounds.", restrictions: "" },
                    { name: "Soulseekers", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One HERETIC ASTARTES unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Unholy Haste", cp: 1, type: "Epic Deed", when: "Your Charge phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to charge this phase.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Shroud of Chaos", cp: 1, type: "Battle Tactic", when: "Start of your opponent's Shooting phase.", target: "One HERETIC ASTARTES PSYKER, HERETIC ASTARTES DAEMON PRINCE or HERETIC ASTARTES DAEMON PRINCE WITH WINGS unit from your army.", effect: "Until the end of the phase, your unit has the following ability:\n\nShroud of Chaos (Aura): Models in friendly HERETIC ASTARTES units within 6\" of this unit have the Stealth ability.", restrictions: "" },
                ]
            },
            {
                name: "Creations of Bile",
                flavour: "Comprising abhorrent warbands of augmented Chaos Space Marines, the varied creations of Bile display the depths of the Primogenitor's dark genius. Whether devoted to Bile's search for prize specimens and forbidden knowledge or bartered to ambitious warlords in return for great riches, these altered warriors expand the web of the Spider's sinister influence. Each new experiment the Clonefather undertakes is intended to improve upon the works of the Corpse-Emperor and render the transhuman form of a Space Marine more lethal. In battle, his creations utilise their enhanced strength, speed, aggression and endurance to weather fields of killing fire, plunge into the midst of the enemy and tear their victims apart, even as the genetic mutations induced by the Clonefather begin to overwhelm their altered forms.",
                rule: { name: "Experimental Augmentations", flavour: "Bile's creations, the Terata, possess a variety of mutations, all of which increase their transhuman lethality – for now.", text: "At the start of the battle, select which augmentations are active for HERETIC ASTARTES INFANTRY models (excluding DAMNED models) from your army until the end of the battle. To do so, either select one from the list below, or randomly determine two by rolling two D6. If FABIUS BILE is your WARLORD, when randomly determining your augmentations, you can re-roll one or both of the dice. Duplicated augmentations have no additional effect.\n- 1. Cholinergic Accelerants: Add 1 to the Attacks characteristic of melee weapons equipped by this model.\n- 2. Hyperadrenal Infusion: Add 2\" to the Move characteristic of this model.\n- 3. Paraneural Reactions: Improve the Weapon Skill characteristic of melee weapons equipped by this model by 1.\n- 4. Supracutaneous Chitination: Improve the Toughness characteristic of this model by 1.\n- 5. Macrotensile Sinews: Add 1 to the Strength characteristic of melee weapons equipped by this model.\n- 6. Ophthalmic Enhancement: Improve the Ballistic Skill characteristic of ranged weapons equipped by this model by 1.", restrictions: "" },
                enhancements: [
                    { name: "Surgical Precision", cost: 10, restriction: "HERETIC ASTARTES model (excluding DAMNED models) only.", text: "A student of Fabius Bile's dread craft, this champion of Chaos wields their weapons with the same precision a master chirurgeon would wield a scalpel.\n\nThe bearer's melee weapons have the [Precision] ability." },
                    { name: "Living Carapace", cost: 15, restriction: "CHAOS LORD model only.", text: "With a thought, the wearer can compel this bioarmour to thicken, further increasing their formidable resistance.\n\nAdd 1 to the bearer's Wounds characteristic and the bearer has the Feel No Pain 5+ ability." },
                    { name: "Helm of All-seeing", cost: 25, restriction: "HERETIC ASTARTES INFANTRY model (excluding DAMNED models) only.", text: "This baroque helm sports numerous additional sensors, requiring various disfiguring organ augmentations to process the information.\n\nEnemy units that are set up on the battlefield from Reserves cannot be set up within 12\" of the bearer." },
                    { name: "Prime Test Subject", cost: 35, restriction: "HERETIC ASTARTES INFANTRY model (excluding DAMNED models) only.", text: "Only the strongest will survive the rampant cell transformations associated with Bile's mysterious bioalchemy.\n\nAdd 1 to the Damage characteristic of melee weapons equipped by the bearer. Each time the bearer makes a melee attack, you can re-roll the Hit roll." },
                ],
                stratagems: [
                    { name: "Monstrous Visages", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Masters Are Watching", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, subtracting 1 from the result if it is a DAMNED unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Specimens for the Spider", cp: 2, type: "Strategic Ploy", when: "Fight phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a melee attack that targets a CHARACTER unit, you can re-roll the Wound roll. After your unit has fought, if one or more enemy CHARACTER models were destroyed as a result of those attacks, select one enemy unit within 6\" of your unit. That enemy unit must take a Battle-shock test. If the enemy WARLORD was destroyed as a result of those attacks, each enemy unit within 6\" of your unit must take a Battle-shock test instead.", restrictions: "" },
                    { name: "Delayed Mutations", cp: 2, type: "Strategic Ploy", when: "Your Command phase.", target: "One HERETIC ASTARTES INFANTRY unit (excluding DAMNED units) from your army.", effect: "Your unit suffers D3 mortal wounds. Then select one augmentation (see Experimental Augmentations). Until the start of your next Command phase, models in your unit have the selected augmentation in addition to any other augmentations they have.", restrictions: "" },
                    { name: "Diabolic Regeneration", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One HERETIC ASTARTES INFANTRY unit (excluding DAMNED units) from your army.", effect: "One destroyed model (excluding CHARACTER models) is returned to your unit. If your unit is a BATTLELINE unit, D3 destroyed models (excluding CHARACTER models) are returned to your unit instead.", restrictions: "" },
                    { name: "Autostimulants", cp: 1, type: "Strategic Ploy", when: "Start of your Charge phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                ]
            },
            {
                name: "Nightmare Hunt",
                flavour: "",
                rule: { name: "Terror Made Manifest", flavour: "With vox-augmented screams or bedecked in grisly trophies, these nightmarish raiders possess a terrifying presence. Even the most stoic of opponents can be shaken by their sadistic cruelty. Once fear has its hooks into them, they become easier prey.", text: "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is below its Starting Strength is within 12\" of one or more HERETIC ASTARTES units from your army, that enemy unit must take a Battle-shock test, subtracting 1 from the result. Enemy units affected by this Detachment rule do not need to take any other Battle-shock tests in the same phase.\n\nEach time a HERETIC ASTARTES model from your army makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll.\n\nEach time an attack targets a HERETIC ASTARTES unit from your army, if the attacking model is Battle-shocked, subtract 1 from the Hit roll.\n\nEach time a HERETIC ASTARTES model from your army makes an attack that targets a Battle-shocked unit, add 1 to the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Greyveil Hex", cost: 25, restriction: "CHAOS LORD model only.", text: "Incised into this warrior's battleplate is a runic curse which dims his form in the minds of his prey, until all they perceive is a mass of talons and shadow.\n\nModels in the bearer's unit have the Stealth ability.\n\nWhile the bearer's unit is within range of one or more objective markers you control, that unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
                    { name: "Warp-fuelled Thrusters", cost: 20, restriction: "CHAOS LORD JUMP PACK model only.", text: "Bathed in warp energies, this Lord's jump pack tears rifts in reality, allowing them to withdraw at a moment's notice.\n\nAt the end of your opponent's Fight phase, if the bearer's unit is not within Engagement Range of one or more enemy units, you can remove the bearer's unit from the battlefield and place it into Strategic Reserves." },
                    { name: "Terrorglut Parasite", cost: 20, restriction: "HERETIC ASTARTES model only.", text: "A daemonic pact sealed in fear and dread allowed this entity to squirm into reality. Coiled tightly and invisibly about a warrior's soul, the being wears away at the sanity of those he faces and feasts on their terror.\n\nAt the start of the Fight phase, each enemy unit within Engagement Range of the bearer must take a Battle-shock test, subtracting 1 from the result." },
                    { name: "Sorrowscent Vulture", cost: 35, restriction: "CHAOS LORD JUMP PACK model only.", text: "This champion demands to be in the vanguard of the hunt, their eagerness to inflict suffering manifesting in a daring lunge towards enemy lines.\n\nModels in the bearer's unit have the Scouts 6\" ability. In the Declare Battle Formations step, the bearer can be attached to a WARP TALONS unit." },
                ],
                stratagems: [
                    { name: "Talons Sunk Deep", cp: 1, type: "", when: "Your Shooting phase or the Fight phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Prey on the Weak", cp: 1, type: "", when: "Your Shooting phase or the Fight phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is Battle-shocked and/or Below Half-strength, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Sadistic Display", cp: 1, type: "", when: "Fight phase, just after a HERETIC ASTARTES unit from your army destroys an enemy unit.", target: "That HERETIC ASTARTES unit.", effect: "Each enemy unit within 6\" of and visible to your unit (excluding MONSTER and VEHICLE units) must take a Battle-shock test.", restrictions: "" },
                    { name: "Malicious Surge", cp: 1, type: "", when: "Your Charge phase.", target: "One HERETIC ASTARTES INFANTRY unit from your army.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Relentless Terror", cp: 1, type: "", when: "Your Movement phase, just after a HERETIC ASTARTES INFANTRY unit from your army Falls Back.", target: "That HERETIC ASTARTES unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Horrific Incursion", cp: 1, type: "", when: "Your Movement phase.", target: "One HERETIC ASTARTES unit from your army that arrived from Reserves this turn.", effect: "Select one enemy unit (excluding MONSTER and VEHICLE units) within 12\" of and visible to your unit: that unit must take a Battle-shock test, subtracting 1 from the result.", restrictions: "" },
                ]
            },
            {
                name: "Huron's Marauders",
                flavour: "When the Red Corsairs go to war, they are aware that Huron Blackheart is always watching, whether in person or through the eyes of his agents. Fear of failure and incurring Tyrant's wrath are potent motivators. Crimson-clad Raiders go to great lengths to earn their tyrannical commander's approval, hurling themselves into the foe with savage vigour and seizing myriad treasures to swell his coffers. Should the Tyrant's gaze fall upon them, Red Corsair warriors are impelled to redouble their efforts, for those who fail Huron Blackheart are sure to meet an agonising end. Mortal soldiers and ragtag pirate crews engage the enemy with rabid devotion. Transhuman Renegades bellow war cries and dedications to their commander as they wade into battle, hewing down rank after rank of enemy infantry. All give their utmost to slaughter the enemy and secure plunder on behalf of their cruel master. The wrath of Huron Blackheart is terrifying enough to ensure that death is preferable to failure.",
                rule: { name: "Tyrannical Motivation", flavour: "Murderers and renegades all, the Red Corsairs strive to meet their master's standards, fighting hardest of all when his gaze is upon them.", text: "In your Command phase, select one of the following abilities. Until the start of your next Command phase, each Heretic Astartes Infantry unit from your army has that ability. At the start of each phase, if such a unit is visible to a friendly Huron Blackheart model, until the end of the phase, it has both of the following abilities.\n\nHuron's Elite: Each time a model in this unit makes an attack, add 1 to the Hit roll.\n\nMobile Marauders: This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\n\nDesigner's Note: If a unit is gaining eligibility to shoot and declare a charge in a turn in which it Fell Back as a result of being visible to Huron Blackheart, but after making a Fall Back move it is no longer visible to Huron Blackheart, that unit will not be eligible to shoot in your Shooting phase or to declare a charge in your Charge phase unless it is visible again at the start of the respective phase.", restrictions: "" },
                enhancements: [
                    { name: "Voice of the Tyrant", cost: 25, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "This champion is a valued commander, and speaks with the authority of Huron himself.\n\nThe bearer's unit has both abilities from the Tyrannical Motivation Detachment rule." },
                    { name: "Raid Leader", cost: 20, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "Rapid mechanised assaults are a preferred tactic of the Red Corsairs, and this champion excels at them.\n\nEach time the bearer's unit is set up after disembarking from a TRANSPORT that has made a Normal move this turn, the bearer's unit is still eligible to declare a charge." },
                    { name: "Dread Reputation", cost: 25, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "Such is this warrior's infamy that their mere presence on the field of battle can overwhelm the foe with tyrannical intimidation.\n\nEach time the bearer's unit is set up on the battlefield, each enemy unit within 6\" of the bearer's unit (or within 12\" if the bearer's unit was set up using the Deep Strike ability) takes a Battle-shock test." },
                    { name: "Eager for Bloodshed", cost: 30, restriction: "HERETIC ASTARTES model only.", text: "Desperate to lock weapons with the foe, this warrior is always at the fore, fighting in the vanguard of Huron Blackheart's forces.\n\nThe bearer has the Infiltrators ability." },
                ],
                stratagems: [
                    { name: "Hardened Killers", cp: 1, type: "Battle Tactic", when: "Your Command phase.", target: "One DAMNED unit from your army.", effect: "Select one of the following effects:\n- Improve the Ballistic Skill characteristic of ranged weapons equipped by models in this unit by 1.\n- Improve the Attacks characteristic of Rapid Fire weapons equipped by models in this unit by 1.\n- Improve the Save characteristic of models in this unit by 1.\nUntil the start of your next turn, your unit has the benefit of that effect.", restrictions: "" },
                    { name: "At the Tyrant's Command", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES unit (excluding MONSTERS and VEHICLES) from your army.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Seize the Prize", cp: 1, type: "Battle Tactic", when: "Your Movement phase, just after a HERETIC ASTARTES unit (excluding MONSTERS and VEHICLES) from your army has been selected to Advance.", target: "That HERETIC ASTARTES unit.", effect: "Do not make an Advance roll for your unit. Instead, until the end of the phase add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Reavers' Flurry", cp: 1, type: "Battle Tactic", when: "Your Fight phase.", target: "One HERETIC ASTARTES unit from your army that made a Charge move this turn.", effect: "Until the end of the phase, add 1 to the Attacks characteristics of melee weapons equipped by models in your unit.", restrictions: "" },
                    { name: "To the Favoured the Spoils", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One HERETIC ASTARTES unit from your army that lost one or more wounds as a result of those attacks.", effect: "Your unit can make a Surge move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                    { name: "Encircling Surge", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One HERETIC ASTARTES unit (excluding MONSTERS and VEHICLES) from your army that is within 6\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Renegade Warband",
                flavour: "Warbands of transhuman traitors seek to ruthlessly exploit the indoctrinated strategies and tactics of their loyalist past, delighting in turning such skills against their enemies. These forces of embittered and vengeful killers are lethally effective, utilising decades or even centuries of combat experience to raid, despoil and slaughter. Led by despotic warlords and crazed killers, these vicious aggressors descend upon their unfortunate victims, twisting their intricate knowledge of the Codex Astartes to their merciless ends. Whether motivated by enmity for those who have wronged them or simply a thirst for power, these murderous raiders ambush supply convoys and attack frontier worlds, striking like a mailed fist to seize and secure that which they require. These Renegades possess towering intelligence and ferocity but are loosed from the strictures of their former lives. They are free to fully embrace their ingrained desire to wage unrestricted war against any foe they wish.",
                rule: { name: "Slaves to None", flavour: "Many Renegades eschew the gifts of Dark Gods, relying only upon their own prowess.", text: "HERETIC ASTARTES models from your army lose the Dark Pacts ability.\n\nRanged weapons equipped by HERETIC ASTARTES models from your army have the [Assault] ability.\n\nWhen mustering your army, you cannot use the Cults of the Dark Gods rule.\n\nVendetta: Bitter minds hold on to lasting grudges. At the start of your Command phase, select one unit from your opponent's army. Until the start of your next Command phase, that enemy unit is your Vendetta target. Each time a HERETIC ASTARTES model from your army (excluding DAMNED models) makes an attack that targets your Vendetta target, you can re-roll the Hit roll.\n\nTwisted Doctrine: These Renegades ally their knowledge of the Codex Astartes with their own unrestrained savagery to horrific effect. In your Movement phase, each time you set up or select a HERETIC ASTARTES unit (excluding Battle-shocked units) from your army to move, it can choose to Default to Doctrine. If it does, it must first take a Battle-shock test. Then, select one of the following:\n- Until the end of the turn, this unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\n- Until the end of the turn, this unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                enhancements: [
                    { name: "Weaponised Hatred", cost: 35, restriction: "HERETIC ASTARTES model only.", text: "This champion's bitterness has been tempered like a blade, and is wielded with the brutal efficacy to match.\n\nOnce per battle round, after your Vendetta target is destroyed, if the bearer is on the battlefield, you can select one enemy unit visible to the bearer. That enemy unit becomes your Vendetta target until you select a new one." },
                    { name: "Eyes of the Hunter", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "Immersion within the mutagenic energies of the Warp has wrought changes upon this warrior's eyes. Slit pupils and warp sight enable them to pick out their targets with unerring accuracy.\n\nRanged weapons equipped by models in the bearer's unit have the [Ignores Cover] ability." },
                    { name: "Fratricidal Trophies", cost: 5, restriction: "HERETIC ASTARTES TERMINATOR model only.", text: "The trophy racks of this warrior's Terminator armour bear the skulls of former battle-brothers slain by his own hand. The warriors that fight at his side strive their hardest to avoid sharing the fate of their former comrades.\n\nIn a turn in which the bearer's unit chose to Default to Doctrine, until the end of the turn, each time a model in this unit makes an attack, you can re-roll the Hit roll." },
                    { name: "Empyric Symbiote", cost: 15, restriction: "HERETIC ASTARTES model only.", text: "This champion of ruin has been bonded with a warp-spawned symbiote. This malefic companion's predatory senses sense the quickest route to the enemy.\n\nAdd 1 to Advance and Charge rolls made for the bearer's unit." },
                ],
                stratagems: [
                    { name: "Never Outgunned", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase.", target: "One HERETIC ASTARTES unit from your army that has just been selected to shoot or fight.", effect: "Select either the [Lethal Hits] or [Sustained Hits 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability.", restrictions: "" },
                    { name: "Vengeful Destruction", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One HERETIC ASTARTES INFANTRY (excluding DAMNED units) or HERETIC ASTARTES MOUNTED unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time your unit makes an attack that targets your Vendetta target, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Undying Hatred", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Renegade Claim", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES unit from your army within range of an objective marker you control.", effect: "That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Corrupted Munitions", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One HERETIC ASTARTES unit in your army that has just been selected to shoot.", effect: "Until the end of the phase, each time a model in this unit makes a ranged attack, improve the Armour Penetration of that attack by 1.", restrictions: "" },
                    { name: "Reavers' Reaction", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One HERETIC ASTARTES unit (excluding MONSTERS and VEHICLES) from your army that was hit by one or more of those attacks.", effect: "Your unit can make a Normal move of up to D6\".", restrictions: "" },
                ]
            },
            {
                name: "Warpstrike Champions",
                flavour: "When a stronghold must be broken from within, or a surprise assault launched, some Chaos Space Marine commanders turn to massed empyric attack. Such tactics are risky but devastating. Whether by the power of daemonic allies or through sacrificial blood rites, temporary warp rifts are torn in the fabric of reality. Through these, the elite of a warband's warriors may not only attack without warning, but can also fade back into the Immaterium to emerge far across the battlefield and strike anew. Terminators shimmer into being, guns blazing as they storm their shocked foes. Packs of Obliterators and Mutilators lumber from rents in reality, the former unleashing torrents of firepower while the latter fall upon victims and rend them limb from limb. Such a brutal onslaught is often enough to break the enemy before the battle has truly begun. For those who resist, the heavily armoured killers rampaging through their lines spell almost certain doom when the rest of the warband closes in to complete the slaughter.",
                rule: { name: "Warp Portals", flavour: "Conjured warp portals flicker across the battlefield, tearing through the fabric of reality according to arcane designs. They are a means, however perilous and unnatural, for the warband's most elite warriors to traverse the battlefield in a matter of strides and strike again at new locations.", text: "At the end of your opponent's turn, you can select a number of HERETIC ASTARTES TERMINATOR, OBLITERATORS and MUTILATORS units from your army (excluding units that are within Engagement Range of one or more enemy units). The maximum number of units you can select depends on the battle size, as follows:\n- Incursion: Up to 1 unit\n- Strike Force: Up to 2 units\n- Onslaught: Up to 3 units\n\nOnce you have made your selections, remove those units from the battlefield and place them into Strategic Reserves.", restrictions: "" },
                enhancements: [
                    { name: "Infernal Fulgurite", cost: 20, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "This strange artefact was recovered from the storm-lashed daemon world of Utrexismia. A shard of warp lightning frozen forever in reality, it serves as a potent focus for teleportation.\n\nOnce per battle, you can target the bearer's unit with the Rapid Ingress Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
                    { name: "Eye of the Warp", cost: 15, restriction: "HERETIC ASTARTES model with the Deep Strike ability only.", text: "This burning gem allows its bearer to see through the veil between realspace and the Warp, and so to react instantly upon piercing that veil.\n\nEach time the bearer's unit is set up on the battlefield, until the end of the turn, you can re-roll Charge rolls made for that unit." },
                    { name: "Akshur's Binding Runes", cost: 20, restriction: "HERETIC ASTARTES model with the Deep Strike ability only.", text: "Living runes that crawl from an ancient tome onto living skin, these sigils anchor their host to realspace even when they are immersed in the Empyrean.\n\nThe bearer's unit can be set up using the Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
                    { name: "Tzagulla", cost: 25, restriction: "HERETIC ASTARTES model with the Deep Strike ability only.", text: "This shape-shifting daemon weapon feeds upon the presence of warp energy to empower both itself and its wielder.\n\nImprove the Attacks, Strength and Armour Penetration characteristics of the bearer's weapons by 1. In addition, each time the bearer's unit is set up on the battlefield from Reserves, until the end of the turn, improve the Damage characteristic of the bearer's weapons by 1." },
                ],
                stratagems: [
                    { name: "Empyric Dislocation", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "You cannot target the same unit with the Empyric Dislocation and Armour of Corruption Stratagems in the same phase." },
                    { name: "Armour of Corruption", cp: 2, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One HERETIC ASTARTES TERMINATOR, OBLITERATORS or MUTILATORS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "You cannot target the same unit with the Armour of Corruption and Empyric Dislocation Stratagems in the same phase." },
                    { name: "Warp Flicker", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES TERMINATOR, OBLITERATORS or MUTILATORS unit from your army.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Warp-tainted", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One HERETIC ASTARTES TERMINATOR, OBLITERATORS or MUTILATORS unit from your army, within range of an objective marker you control.", effect: "That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Siegebreaker Strike", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "Up to two HERETIC ASTARTES units from your army that were set up using the Deep Strike ability this turn and have not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your units have the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Portal of Spite", cp: 1, type: "Battle Tactic", when: "Your Charge phase.", target: "One HERETIC ASTARTES unit from your army that was set up using the Deep Strike ability this turn and has not declared a charge this phase.", effect: "Until the end of the phase, each time your unit declares a charge, if the closest eligible enemy unit is selected as one of the targets of that charge, add 2 to the Charge roll.", restrictions: "" },
                ]
            },
            {
                name: "Cult of the Arkifane",
                flavour: "The influence of Vashtorr the Arkifane spreads insidiously through time and space. His unholy name rings through the Warp like the clangour of smiths' hammers. It is chanted by Traitors and mortal cultists, who gather to fight for the Arkifane and seek his infernal blessings. Such hosts seethe with biomechanoid mutation and warp augmentation. Tanks, Daemon Engines and Helbrutes are much in evidence with possessor daemons bound within their hulls, haloed by malevolent energies, or boasting helforged weaponry. The traitorous warriors alongside them shudder with technoviral strains and cybermutations. Some bear rune-cursed ammunition that punches through armour with supernatural ease. Others host technoparasitic familiars that gnaw their way into enemy comms and vomit intelligence into their masters' minds. Wielding armaments forged beyond the bounds of reality and empowered by the might of the Arkifane, these cults sweep across the battlefield to reduce their enemies to glowing ashes.",
                rule: { name: "Soul Forge Boons", flavour: "The cybersorcerous power of Vashtorr's boons is much in evidence amongst his worshippers. Nowhere is this more true than in the war engines that his cults take into battle, and which exhibit a nightmarish variety of biomechanoid mutations and daemon-spawned powers. Whether wreathed in balefire, shimmeringly insubstantial or constantly regrowing battle-damaged hull plating, these accursed war machines are incredibly hard to destroy.", text: "HERETIC ASTARTES VEHICLE units from your army gain the DAEMON keyword.\n\nHERETIC ASTARTES VEHICLE, LORD DISCORDANT and VASHTORR THE ARKIFANE units from your army gain the SOUL FORGE keyword.\n\nSOUL FORGE units from your army have a 5+ invulnerable save.", restrictions: "" },
                enhancements: [
                    { name: "Wyredjinn", cost: 25, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "A repulsive daemon imp of Vashtorr, this incorporeal data-familiar flits through vox-channels and sensor suites, stealing data for its master.\n\nAt the start of your Command phase, if the bearer is on the battlefield, roll one D6, adding 1 to the result if the bearer is within range of an objective marker you control: on a 4+, you gain 1CP." },
                    { name: "Cybinfernal Font", cost: 20, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "This warp-forged augmetic channels daemonic energies through its bearer and into those they lead, spawning biomechanoid mutation and supernatural resilience.\n\nModels in the bearer's unit have the SOUL FORGE keyword." },
                    { name: "Mark of the Soul Forges", cost: 20, restriction: "HERETIC ASTARTES model only (excluding DAMNED models).", text: "This burning rune attests to the - perhaps unwise - pact its bearer has struck with the Arkifane in return for enhanced martial might and lethality.\n\nEach time the bearer makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit." },
                    { name: "Crown of Worms", cost: 15, restriction: "WARPSMITH model only.", text: "This parasitic helm bestows the ability to conjure daemonic nematodes akin to those manifested by the Arkifane himself. These burrowing entities can reknit faltering war machines or gnaw upon such vehicles' sanity at the wearer's command.\n\nAdd 3\" to the range of the bearer's Warpsmith, Master of Mechanisms and Enrage Machine Spirits abilities." },
                ],
                stratagems: [
                    { name: "Touch of the Arkifane", cp: 1, type: "Battle Tactic", when: "Any phase.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units) that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, if your unit is selected to make a Dark Pact, you can select both abilities for that unit's weapons to gain.", restrictions: "" },
                    { name: "Balefire Boon", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One SOUL FORGE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Soul-tally Offering", cp: 2, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One SOUL FORGE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a CHARACTER, MONSTER or VEHICLE unit, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Biomechanoid Regeneration", cp: 1, type: "Epic Deed", when: "Your Command phase.", target: "One HERETIC ASTARTES unit from your army (excluding DAMNED units).", effect: "One model in your unit regains up to D3 lost wounds. If your unit has the SOUL FORGE keyword, one model in your unit regains up to 3 lost wounds instead.", restrictions: "" },
                    { name: "Forge-fire Surge", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a HERETIC ASTARTES unit from your army Advances.", target: "That HERETIC ASTARTES unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced. If your unit has the SOUL FORGE keyword, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced instead.", restrictions: "" },
                    { name: "Unholy Fortitude", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One SOUL FORGE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, add 1 to the Toughness characteristic of models in your unit.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "csm-abaddon-the-despoiler",
                        "name": "Abaddon the Despoiler",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "2+",
                                "w": 9,
                                "ld": "5+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Talon of Horus",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Drach’nyen",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Talon of Horus",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -3,
                                                "d": 1,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Warmaster",
                                        "Dark Destiny"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Terminator",
                                "Chaos Undivided",
                                "Chaos",
                                "Abaddon The Despoiler"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminator Squad; Chosen.",
                        "compositionText": "1 Abaddon the Despoiler – EPIC HERO This model is equipped with: Talon of Horus; Drach’nyen."
                },
                {
                        "id": "csm-chaos-lord",
                        "name": "Chaos Lord",
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
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainblade",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Daemon hammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Chaos",
                                        "Chance for Glory"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Chaos Lord"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Chaos Lord This model is equipped with: plasma pistol; daemon hammer."
                },
                {
                        "id": "csm-chaos-lord-in-terminator-armour",
                        "name": "Chaos Lord in Terminator Armour",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
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
                                                "name": "Combi-bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Combi-weapon",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Rapid Fire 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainfist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 3+"
                                                ]
                                        },
                                        {
                                                "name": "Exalted weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Chaos",
                                        "Formidably Resilient"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Chaos Lord",
                                "Terminator",
                                "Chaos Lord In Terminator Armour"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Chaos Terminator Squad.",
                        "compositionText": "1 Chaos Lord in Terminator Armour This model is equipped with: combi-bolter; exalted weapon."
                },
                {
                        "id": "csm-chaos-lord-with-jump-pack",
                        "name": "Chaos Lord with Jump Pack",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
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
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin lightning claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Chaos",
                                        "Cruel Hunter"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Chaos",
                                "Chaos Lord"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Raptors.",
                        "compositionText": "1 Chaos Lord This model is equipped with: bolt pistol; accursed weapon."
                },
                {
                        "id": "csm-cultist-firebrand",
                        "name": "Cultist Firebrand",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Balefire pike",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 5,
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fiery Faith",
                                        "Cursed Flames"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Cultist Firebrand"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Cultist Mob.",
                        "compositionText": "1 Cultist Firebrand This model is equipped with: balefire pike, close combat weapon."
                },
                {
                        "id": "csm-cypher",
                        "name": "Cypher",
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
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cypher’s bolt pistol",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Cypher’s plasma pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cypher’s bolt pistol",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Cypher’s plasma pistol",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Agent of Discord",
                                        "Guns Blazing"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Fallen",
                                "Cypher"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Cypher – EPIC HERO This model is equipped with: Cypher’s bolt pistol; Cypher’s plasma pistol."
                },
                {
                        "id": "csm-dark-apostle",
                        "name": "Dark Apostle",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "5+",
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
                                                "name": "Accursed crozius",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dark Zealotry",
                                        "Demagogue",
                                        "Malign Sacrifice"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Chosen; Cultist Mob; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Dark Apostle 2 Dark Disciples The Dark Apostle is equipped with: bolt pistol; accursed crozius. Every Dark Disciple is equipped with: close combat weapon."
                },
                {
                        "id": "csm-dark-commune",
                        "name": "Dark Commune",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Warp Curse – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Warp Curse – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Psychic",
                                                        "Sustained Hits 2"
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
                                                "name": "Commune blade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Commune stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Faithful Flock",
                                        "Dark Ritual",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Cultist Mob.",
                        "compositionText": "1 Cult Demagogue 1 Mindwitch 1 Iconarch 2 Blessed Blades The Cult Demagogue is equipped with: autopistol; Commune stave. The Mindwitch is equipped with: Warp Curse; close combat weapon. The Iconarch is equipped with: autopistol; close combat weapon; Chaos icon. Every Blessed Blade is equipped with: Commune blade."
                },
                {
                        "id": "csm-fabius-bile",
                        "name": "Fabius Bile",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Xyclos Needler",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chirurgeon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Rod of Torment",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Surgeon Acolyte’s tools",
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
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Enhanced Warriors",
                                        "Surgeon Acolyte",
                                        "Chirurgeon"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Accursed Cultists; Chosen; Cultist Mob; Legionaries; Red Corsairs Raiders.",
                        "compositionText": "1 Fabius Bile – EPIC HERO 1 Surgeon Acolyte Fabius Bile is equipped with: Xyclos Needler; Chirurgeon; Rod of Torment. The Surgeon Acolyte is equipped with: Surgeon Acolyte’s tools."
                },
                {
                        "id": "csm-haarken-worldclaimer",
                        "name": "Haarken Worldclaimer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Helspear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Sustained Hits D3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Herald’s Talon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Helspear",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance",
                                                        "Sustained Hits D3"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Head Taker",
                                        "Herald of the Apocalypse"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Jump Pack",
                                "Chaos",
                                "Chaos Undivided",
                                "Haarken Worldclaimer"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Raptors.",
                        "compositionText": "1 Haarken Worldclaimer – EPIC HERO This model is equipped with: Helspear; Herald’s Talon."
                },
                {
                        "id": "csm-heretic-astartes-daemon-prince",
                        "name": "Heretic Astartes Daemon Prince",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dark Blessing",
                                        "Ascended Daemon",
                                        "Lord of Chaos"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Heretic Astartes Daemon Prince This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "csm-heretic-astartes-daemon-prince-with-wings",
                        "name": "Heretic Astartes Daemon Prince with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Destruction",
                                        "Flying Horror"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince With Wings"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Heretic Astartes Daemon Prince with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "csm-huron-blackheart",
                        "name": "Huron Blackheart",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tyrant’s Claw heavy flamer",
                                                "range": "12\"",
                                                "a": "D6+2",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
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
                                                "name": "Tyrant’s Claw and exalted power weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Badab",
                                        "Hamadrya’s Knowledge"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Chaos Undivided",
                                "Huron Blackheart"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminator Squad; Chosen; Legionaries; Masters of the Maelstrom; Red Corsairs Raiders.",
                        "compositionText": "1 Huron Blackheart – EPIC HERO This model is equipped with: Tyrant’s Claw heavy flamer; Tyrant’s Claw and exalted power weapon."
                },
                {
                        "id": "csm-kravek-morne",
                        "name": "Kravek Morne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
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
                                                "name": "Baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Last Argument and power fist",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Servo-harness",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Anti-Vehicle 2+"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Headlong Destruction",
                                        "Architect of Ruin"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Chaos Undivided",
                                "Terminator",
                                "Kravek Morne"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminator Squad; Mutilators; Obliterators.",
                        "compositionText": "1 Kravek Morne – EPIC HERO This model is equipped with: baleflamer; combi-bolter; servo-harness; Last Argument and power fist."
                },
                {
                        "id": "csm-lord-discordant-on-helstalker",
                        "name": "Lord Discordant on Helstalker",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 4
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
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
                                                "name": "Helstalker autocannon",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Magma cutter",
                                                "range": "6\"",
                                                "a": 2,
                                                "bs": "3+",
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
                                                "name": "Bladed limbs",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Impaler chainglaive",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Techno-virus injector",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 2+",
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Corrupt Machine Spirits",
                                        "Spirit Thief"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Lord Discordant"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Lord Discordant on Helstalker This model is equipped with: bolt pistol; Helstalker autocannon; techno-virus injector; bladed limbs; impaler chainglaive."
                },
                {
                        "id": "csm-master-of-executions",
                        "name": "Master of Executions",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                                "name": "Axe of dismemberment",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warp-sighted Butcher",
                                        "Trophy Taker"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Master Of Executions"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Master of Executions This model is equipped with: bolt pistol; axe of dismemberment."
                },
                {
                        "id": "csm-master-of-possession",
                        "name": "Master of Possession",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
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
                                                "name": "Rite of Possession – witchfire",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Pistol",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Rite of Possession – focused witchfire",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Hazardous",
                                                        "Pistol",
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Staff of possession",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonkin",
                                        "Sacrificial Dagger"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Master Of Possession"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Possessed; Red Corsairs Raiders.",
                        "compositionText": "1 Master of Possession This model is equipped with: bolt pistol; Rite of Possession; staff of possession."
                },
                {
                        "id": "csm-red-corsairs-reave-captain",
                        "name": "Red Corsairs Reave-Captain",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
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
                                                "name": "Power maul",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brutal Raider",
                                        "Raider’s Due"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Red Corsairs Reave-Captain"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Red Corsairs Reave-Captain This model is equipped with: bolt pistol; power sword."
                },
                {
                        "id": "csm-sorcerer",
                        "name": "Sorcerer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                                "name": "Infernal Gaze – witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gaze – focused witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Prescience",
                                        "Gift of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Chaos",
                                "Sorcerer"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Sorcerer This model is equipped with: bolt pistol; Infernal Gaze; force weapon."
                },
                {
                        "id": "csm-sorcerer-in-terminator-armour",
                        "name": "Sorcerer in Terminator Armour",
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
                                                "name": "Combi-bolter",
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
                                                "name": "Infernal Gaze – witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gaze – focused witchfire",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warptime",
                                        "Death Hex",
                                        "Chaos Familiar"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Terminator",
                                "Sorcerer In Terminator Armour"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Chaos Terminator Squad.",
                        "compositionText": "1 Sorcerer in Terminator Armour This model is equipped with: combi-bolter; Infernal Gaze; force weapon."
                },
                {
                        "id": "csm-traitor-enforcer",
                        "name": "Traitor Enforcer",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 55
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
                                                "name": "Ogryn weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brutal Example",
                                        "Mutated Bodyguard"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following unit: Traitor Guardsmen Squad.",
                        "compositionText": "1 Traitor Enforcer 1 Traitor Ogryn The Traitor Enforcer is equipped with: bolt pistol; power fist. The Traitor Ogryn is equipped with: Ogryn weapons."
                },
                {
                        "id": "csm-vashtorr-the-arkifane",
                        "name": "Vashtorr the Arkifane",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 175
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Vashtorr’s claw",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vashtorr’s hammer – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Vashtorr’s hammer – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unholy Mechanisms",
                                        "Reorder Reality",
                                        "Indentured Daemon Engines"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Vashtorr The Arkifane"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Vashtorr the Arkifane – EPIC HERO This model is equipped with: Vashtorr’s claw; Vashtorr’s hammer. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-warpsmith",
                        "name": "Warpsmith",
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
                                                "name": "Flamer tendril",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Torrent",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Melta tendril",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol",
                                                        "Melta 2"
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
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Forge weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 4+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warpsmith",
                                        "Master of Mechanisms",
                                        "Enrage Machine Spirits"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Warpsmith"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "leaderText": "This model can be attached to the following units: Chosen; Havocs; Legionaries; Nemesis Claw; Red Corsairs Raiders.",
                        "compositionText": "1 Warpsmith This model is equipped with: flamer tendril; melta tendril; plasma pistol; forge weapon."
                },
                {
                        "id": "csm-cultist-mob",
                        "name": "Cultist Mob",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 50
                                },
                                {
                                        "models": 20,
                                        "cost": 100
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
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
                                                "name": "Brutal assault weapon",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "For the Dark Gods"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Cultist Mob"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Cultist Champion 9-19 Chaos Cultists Every model is equipped with: autopistol; brutal assault weapon."
                },
                {
                        "id": "csm-legionaries",
                        "name": "Legionaries",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                },
                                {
                                        "models": 10,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Balefire tome",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
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
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Flamer",
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
                                        },
                                        {
                                                "name": "Havoc autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
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
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
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
                                        },
                                        {
                                                "name": "Reaper chaincannon",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Heavy melee weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Veterans of the Long War",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Grenades",
                                "Legionaries"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Aspiring Champion 4-9 Legionaries Every model is equipped with: bolt pistol; boltgun; close combat weapon."
                },
                {
                        "id": "csm-khorne-berzerkers",
                        "name": "Khorne Berzerkers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 180
                                },
                                {
                                        "models": 20,
                                        "cost": 360
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bolt pistol",
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
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
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
                                                "bs": "4+",
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
                                                "name": "Chainblade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Khornate eviscerator",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Blessings of Khorne"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blood Surge",
                                        "Icon of Khorne"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Khorne",
                                "Berzerkers"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, World Eaters"
                        ],
                        "compositionText": "1 Khorne Berzerker Champion 9-19 Khorne Berzerkers Every model is equipped with: bolt pistol; chainblade."
                },
                {
                        "id": "csm-plague-marines",
                        "name": "Plague Marines",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 95
                                },
                                {
                                        "models": 7,
                                        "cost": 130
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blight launcher",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                                        "Lethal Hits",
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
                                                "name": "Plague belcher",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plague spewer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
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
                                                "name": "Bubotic weapons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Heavy plague weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plague knives",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Infused with the Blessings of Nurgle",
                                        "Icon of Despair"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Plague Marines"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, Death Guard"
                        ],
                        "compositionText": "1 Plague Champion 4-9 Plague Marines Every model is equipped with: boltgun; plague knives."
                },
                {
                        "id": "csm-rubric-marines",
                        "name": "Rubric Marines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 100
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Inferno bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Inferno boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Malefic Curse",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Soulreaper cannon",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Warpflame pistol",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Warpflamer",
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
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Cabal of Sorcerers (Aspiring Sorcerer only)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bringers of Change",
                                        "Icon of Flame"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes",
                                "Thousand Sons"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, Thousand Sons"
                        ],
                        "compositionText": "1 Aspiring Sorcerer 4-9 Rubric Marines The Aspiring Sorcerer is equipped with: inferno bolt pistol; Malefic Curse; force weapon. Every Rubric Marine is equipped with: inferno boltgun; close combat weapon. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, CHAOS, TZEENTCH, RUBRICAE, RUBRIC MARINESASPIRING SORCERER ONLY: PSYKER FACTION"
                },
                {
                        "id": "csm-chaos-rhino",
                        "name": "Chaos Rhino",
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
                                "ld": "6+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                        "Dark Pacts"
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
                                "Chaos",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 HERETIC ASTARTES INFANTRY models. It cannot transport TERMINATOR, JUMP PACK, MUTILATORS, OBLITERATOR or POSSESSED models."
                },
                {
                        "id": "csm-noctilith-crown",
                        "name": "Noctilith Crown",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lashing warp energies",
                                                "range": "6\"",
                                                "a": 8,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Malevolent Locus",
                                        "Malign Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Noctilith Crown"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Noctilith Crown This model is equipped with: lashing warp energies."
                },
                {
                        "id": "csm-accursed-cultists",
                        "name": "Accursed Cultists",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 8,
                                        "cost": 90
                                },
                                {
                                        "models": 16,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Blasphemous appendages",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hideous mutations",
                                                "range": "Melee",
                                                "a": "D6+2",
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
                                        "Feel No Pain 6+",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Accursed Horde"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Damned",
                                "Accursed Cultists"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "3-6 Torments 5-10 Mutants Every Torment is equipped with: hideous mutations. Every Mutant is equipped with: blasphemous appendages."
                },
                {
                        "id": "csm-chaos-bikers",
                        "name": "Chaos Bikers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 70
                                },
                                {
                                        "models": 6,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
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
                                                "name": "Combi-bolter",
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
                                                "name": "Flamer",
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
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
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
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Outmanoeuvre",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Chaos",
                                "Chaos Bikers"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Biker Champion 2-5 Chaos Bikers Every model is equipped with: bolt pistol; combi-bolter; close combat weapon."
                },
                {
                        "id": "csm-chaos-land-raider",
                        "name": "Chaos Land Raider",
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
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Soulshatter lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assault Ramp"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Smoke",
                                "Chaos",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 HERETIC ASTARTES INFANTRY models (excluding OBLITERATOR and JUMP PACK models). Each POSSESSED, MUTILATORS and TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "csm-chaos-predator-annihilator",
                        "name": "Chaos Predator Annihilator",
                        "role": "vehicle",
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
                                "w": 11,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Predator twin lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
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
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Annihilator"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Predator Annihilator"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Predator Annihilator This model is equipped with: Predator twin lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-chaos-predator-destructor",
                        "name": "Chaos Predator Destructor",
                        "role": "vehicle",
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
                                "w": 11,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Predator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Destructor"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Predator Destructor"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Predator Destructor This model is equipped with: Predator autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hideous mutations",
                                                "range": "Melee",
                                                "a": "D6+2",
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mind-breaking Mutations"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Chaos Spawn"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "csm-chaos-terminator-squad",
                        "name": "Chaos Terminator Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 180
                                },
                                {
                                        "models": 10,
                                        "cost": 360
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
                                                "name": "Combi-bolter",
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
                                                "name": "Reaper autocannon",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Chainfist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Vehicle 3+"
                                                ]
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Despoilers"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Terminator",
                                "Chaos Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Terminator Champion 4-9 Chaos Terminators Every model is equipped with: combi-bolter; accursed weapon."
                },
                {
                        "id": "csm-chaos-vindicator",
                        "name": "Chaos Vindicator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 11,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Demolisher cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Havoc launcher",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Siege Shield"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Vindicator"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chaos Vindicator This model is equipped with: demolisher cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-chosen",
                        "name": "Chosen",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Chosen Marauders",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Chosen"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Chosen Champion 4-9 Chosen Every model is equipped with: boltgun; bolt pistol; accursed weapon."
                },
                {
                        "id": "csm-defiler",
                        "name": "Defiler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hades battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ectoplasma destructor",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Excruciator cannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Magma cutters",
                                                "range": "12\"",
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
                                                "name": "Heavy baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Hades lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy reaper autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Heavy missile launcher – frag",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Shearing claws – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Shearing claws – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Electroscourge",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Daemonforge"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-fellgor-beastmen",
                        "name": "Fellgor Beastmen",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autopistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
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
                                                "name": "Corrupted stave",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol – standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
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
                                                "bs": "4+",
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
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Corrupted stave",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Great weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bestial Raiders"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Fellgor Beastmen"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Fellgor Champion 9 Fellgor Beastmen The Fellgor Champion is equipped with: bolt pistol; chainsword. Every Fellgor Beastman is equipped with: autopistol; close combat weapon."
                },
                {
                        "id": "csm-forgefiend",
                        "name": "Forgefiend",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ectoplasma cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Hades autocannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured limbs",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Forgefiend jaws",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Ordnance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Forgefiend"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Forgefiend This model is equipped with: 2 Hades autocannons; Forgefiend jaws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-havocs",
                        "name": "Havocs",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Boltgun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Flamer",
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
                                        },
                                        {
                                                "name": "Havoc autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Havoc heavy bolter",
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
                                                "name": "Havoc lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Havoc missile launcher – frag",
                                                "range": "48\"",
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
                                                "name": "Havoc missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Havoc reaper chaincannon",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
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
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
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
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stabilisation Talons"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Havocs"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Havoc Champion 4 Havocs The Havoc Champion is equipped with: flamer; Astartes chainsword. 2 Havocs are equipped with: Havoc autocannon; close combat weapon. 2 Havocs are equipped with: Havoc lascannon; close combat weapon."
                },
                {
                        "id": "csm-helbrute",
                        "name": "Helbrute",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 9,
                                "sv": "2+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Combi-bolter",
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
                                                "name": "Helbrute plasma cannon",
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
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
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
                                                "name": "Missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
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
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Helbrute fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Helbrute hammer",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power scourge",
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
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dark Ascension",
                                        "Devoted to Destruction"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Helbrute"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Helbrute This model is equipped with: missile launcher; multi-melta; close combat weapon"
                },
                {
                        "id": "csm-heldrake",
                        "name": "Heldrake",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 205
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baleflamer",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Hades autocannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Heldrake claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Fly 2+",
                                                        "Devastating Wounds"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Airborne Predator"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Chaos",
                                "Daemon",
                                "Heldrake"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Heldrake This model is equipped with: Hades autocannon; Heldrake claws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-khorne-lord-of-skulls",
                        "name": "Khorne Lord of Skulls",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 13,
                                "sv": "3+",
                                "w": 24,
                                "ld": "6+",
                                "oc": 8
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Daemongore cannon",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Gorestorm cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Hades gatling cannon",
                                                "range": "48\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Ichor cannon",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Skullhurler",
                                                "range": "60\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Great cleaver of Khorne – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 8,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great cleaver of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 15,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Plough Through the Enemy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Towering",
                                "Chaos",
                                "Khorne",
                                "Daemon",
                                "Lord Of Skulls"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Khorne Lord of Skulls This model is equipped with: gorestorm cannon; Hades gatling cannon; great cleaver of Khorne. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-masters-of-the-maelstrom",
                        "name": "Masters of the Maelstrom",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Absolvor bolt pistol",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Bolt pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Londaxi maimer",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Mind Wrench",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Precision",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Axe of Ending",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Character 2+",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Bionic gauntlet",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Force stave",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Power sabre",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reductor array",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Choice Samples",
                                        "Fleet Command",
                                        "Plunder"
                                ]
                        },
                        "keywords": [
                                "Heretic Astartes"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Garreon the Corpsemaster – EPIC HERO 1 Garlon Souleater – EPIC HERO 1 Katar Garrix – EPIC HERO 1 Captain Sargotta – EPIC HERO 1 The Enforcer – EPIC HERO Garreon the Corpsemaster is equipped with: absolvor bolt pistol; reductor array. Garlon Souleater is equipped with: Mind Wrench; force stave. Katar Garrix is equipped with: bolt pistol; Axe of Ending. Captain Sargotta is equipped with: laspistol; power sabre. The Enforcer is equipped with: Londaxi maimer; bionic gauntlet. KEYWORDS – OTHER MODELS: INFANTRY, EPIC HERO, GRENADES, CHAOS, CHAOS UNDIVIDED, MASTERS OF THE MAELSTROMGARLON SOULEATER: PSYKER FACTION"
                },
                {
                        "id": "csm-maulerfiend",
                        "name": "Maulerfiend",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Magma cutters",
                                                "range": "6\"",
                                                "a": 2,
                                                "bs": "3+",
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
                                                "name": "Lasher tendrils",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Maulerfiend fists",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 14,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Siege Crawler"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Maulerfiend"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Maulerfiend This model is equipped with: lasher tendrils; Maulerfiend fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "csm-mutilators",
                        "name": "Mutilators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Fleshmetal weapons - clawed sweeps",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Fleshmetal weapons - rending strikes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Fleshmetal weapons - thunderous blows",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crushing Charge"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Daemon",
                                "Mutilators"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "3 Mutilators Every model is equipped with: 1 fleshmetal weapons."
                },
                {
                        "id": "csm-nemesis-claw",
                        "name": "Nemesis Claw",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 110
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Flamer",
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
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Rapid Fire 1"
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
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Nostraman chainblade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Nostraman chainglaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Paired accursed weapons",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Stealth"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Visions of Suffering",
                                        "Voice Eater"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Psyker",
                                "Chaos",
                                "Grenades",
                                "Nemesis Claw"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Visionary 4-9 Legionaries The Visionary is equipped with: bolt pistol; Nostraman chainblade. Each Legionary is equipped with: bolt pistol; boltgun; close combat weapon. ATTACHED UNIT If a CHARACTER unit from your army with the Leader ability (excluding EPIC HEROes) can be attached to a LEGIONARIES unit, it can be attached to this unit instead."
                },
                {
                        "id": "csm-obliterators",
                        "name": "Obliterators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fleshmetal guns – focused malice",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Fleshmetal guns – ruinous salvo",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Fleshmetal guns – warp hail",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crushing fists",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warp Rift Firepower"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Daemon",
                                "Obliterators"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "2 Obliterators Every model is equipped with: fleshmetal guns; crushing fists."
                },
                {
                        "id": "csm-possessed",
                        "name": "Possessed",
                        "role": "infantry",
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
                                "m": "9\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hideous mutations",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unholy Bloodshed",
                                        "Chaos Icon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Daemon",
                                "Possessed"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Possessed Champion 4-9 Possessed Every model is equipped with: hideous mutations."
                },
                {
                        "id": "csm-raptors",
                        "name": "Raptors",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 110
                                },
                                {
                                        "models": 10,
                                        "cost": 210
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
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
                                                "name": "Flamer",
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
                                        },
                                        {
                                                "name": "Plasma gun – standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                                "bs": "3+",
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
                                                "name": "Accursed weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Astartes chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
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
                                                "name": "Heavy melee weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mutations",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fearsome",
                                        "Terrifying Assault"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Packs",
                                "Grenades",
                                "Chaos",
                                "Raptors"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Raptor Champion 4-9 Raptors Every model is equipped with: bolt pistol; Astartes chainsword."
                },
                {
                        "id": "csm-red-corsairs-raiders",
                        "name": "Red Corsairs Raiders",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 110
                                },
                                {
                                        "models": 10,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
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
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hand flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Reaver’s blade",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Trophy Takers"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Red Corsairs Raiders"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Red Corsairs Raider Champion 4-9 Red Corsairs Raiders Each model is equipped with: boltgun; bolt pistol; reaver’s blade."
                },
                {
                        "id": "csm-traitor-guardsmen-squad",
                        "name": "Traitor Guardsmen Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Boltgun",
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
                                                "name": "Corrupted pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Cultist grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Cultist grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Cultist sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Flamer",
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
                                        },
                                        {
                                                "name": "Lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
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
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Twisted Defence Force"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Damned",
                                "Traitor Guardsmen Squad"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Traitor Sergeant 9 Traitor Guardsmen The Traitor Sergeant is equipped with: corrupted pistol; close combat weapon. Every Traitor Guardsman is equipped with: lasgun; close combat weapon."
                },
                {
                        "id": "csm-venomcrawler",
                        "name": "Venomcrawler",
                        "role": "vehicle",
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
                                "w": 9,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Excruciator cannon",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Soulflayer tendrils and claws",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Soul Eater"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Venomcrawler"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Venomcrawler This model is equipped with: 2 excruciator cannons; soulflayer tendrils and claws."
                },
                {
                        "id": "csm-warp-talons",
                        "name": "Warp Talons",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 125
                                },
                                {
                                        "models": 10,
                                        "cost": 270
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Warp claws",
                                                "range": "Melee",
                                                "a": 4,
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
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Dark Pacts"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warp Strike"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Jump Packs",
                                "Grenades",
                                "Chaos",
                                "Daemon",
                                "Warp Talons"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes"
                        ],
                        "compositionText": "1 Warp Talon Champion 4-9 Warp Talons Every model is equipped with: warp claws."
                },
                {
                        "id": "csm-noise-marines",
                        "name": "Noise Marines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 5,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blastmaster – single frequency",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Blastmaster – varied frequency",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Sonic blaster",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover"
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Terrifying Crescendo"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Slaanesh",
                                "Noise Marines"
                        ],
                        "factionKeywords": [
                                "Heretic Astartes, Emperor’s Children"
                        ],
                        "compositionText": "1 Disharmonist 5 Noise Marines Every model is equipped with: sonic blaster; close combat weapon."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(chaosSpaceMarines);
})();
