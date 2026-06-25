/**
 * W40K Army Builder -- Orks (10th Edition)
 *
 * DATA SCOPE: This module contains only short factual game data -- points,
 * model counts, statlines (M/T/Sv/W/Ld/OC), weapon profiles (range, attacks,
 * skill, strength, AP, damage) and keyword labels. Ability, detachment,
 * stratagem and enhancement entries are stored as NAMES ONLY; their rules text
 * is intentionally left for the army owner to fill in from their own codex.
 *
 * This module self-registers into the global W40K_FACTIONS registry, which
 * data/factions.js assembles into the final DATA object. It replaces the
 * inline Orks stub by matching faction id "orks".
 */
(function () {
    "use strict";

    const orks = {
        id: "orks",
        name: "Orks",
        icon: "\uD83E\uDE93",
        allegiance: "Xenos",
        flavour: "",

        // ARMY RULE (names only -- fill in text from your codex)
        armyRules: [
            { name: "Waaagh!", flavour: "The infamous war cry of the Orks is known and feared throughout the galaxy. When it echoes across the battlefield, bellowed from hundreds or even thousands of greenskin mouths, even the most stalwart warriors fear the onslaught to come.", text: "If your Army Faction is ORKS, once per battle, at the start of your Command phase, you can call a Waaagh!. If you do, until the start of your next Command phase, the Waaagh! is active for your army and:\n- Units from your army with this ability are eligible to declare a charge in a turn in which they Advanced.\n- Add 1 to the Strength and Attacks characteristics of melee weapons equipped by models from your army with this ability.\n- Models from your army with this ability have a 5+ invulnerable save." }
        ],

        // DETACHMENTS (names only -- fill in rule/strat/enhancement text)
        detachments: [
            {
                name: "War Horde",
                flavour: "",
                rule: { name: "Get Stuck In", flavour: "Once an Ork gets stuck into hand-to-hand combat, they quickly overwhelm their enemies through sheer ferocity and an eagerness to give the gitz a good kicking.", text: "Melee weapons equipped by ORKS models from your army have the [Sustained Hits 1] ability.", restrictions: "" },
                enhancements: [
                    { name: "Follow Me Ladz", cost: 25, restriction: "ORKS model only.", text: "Always found at the forefront of an assault, this Ork likes to be the first into the fray.\n\nWhile the bearer is leading a unit, add 2\" to the Move characteristic of models in that unit." },
                    { name: "Headwoppa's Killchoppa", cost: 20, restriction: "ORKS model only.", text: "Grand Warboss Headwoppa and his tribe were last seen charging headlong into a horde of Khornate daemons, but legend speaks of a blood-slick choppa that still turns up occasionally. Though this weapon looks normal, a dark voice is said to growl in the mind of its wielder, driving them on to ever greater excesses of violence.\n\nMelee weapons equipped by the bearer (excluding Extra Attacks weapons) have the [Devastating Wounds] ability." },
                    { name: "Kunnin' But Brutal", cost: 15, restriction: "ORKS model only.", text: "Feigning weakness, this greenskin allows his foes to close in before delivering a brutal flurry of attacks.\n\nWhile the bearer is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back." },
                    { name: "Supa-Cybork Body", cost: 15, restriction: "ORKS model only.", text: "The original owner of this one-of-a-kind endoskeleton became the envy of every Warboss around, and was soon gutted and stripped for parts by a stronger rival. The Supa-Cybork Body has been retransplanted several times since then, filling its new owner with confidence, resilience and a belated hope that the Painboyz gave it a quick clean before shoving it back in place...\n\nThe bearer has the Feel No Pain 4+ ability." },
                ],
                stratagems: [
                    { name: "Careen!", cp: 1, type: "Epic Deed", when: "Any phase, just after an ORKS VEHICLE unit from your army with the Deadly Demise ability is destroyed.", target: "That destroyed ORKS VEHICLE unit, if you roll a 6 for its Deadly Demise ability. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Your unit can make a Normal or Fall Back move before its Deadly Demise ability is resolved, and before any embarked units perform an Emergency Disembarkation. When making this move, your unit can move over enemy units (excluding MONSTERS and VEHICLES) as if they were not there.", restrictions: "" },
                    { name: "Orks Is Never Beaten", cp: 2, type: "Epic Deed", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ORKS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making attacks, and is then removed from play.", restrictions: "" },
                    { name: "Unbridled Carnage", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ORKS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "'ard As Nails", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ORKS unit from your army (excluding GROTS, MONSTER and VEHICLE units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Mob Rule", cp: 1, type: "Battle Tactic", when: "End of your Command phase.", target: "One MOB unit from your army that contains 10 or more models and is not Below Half-strength.", effect: "Select one friendly Battle-shocked ORKS INFANTRY unit within 6\" of that MOB unit. That ORKS INFANTRY unit is no longer Battle-shocked.", restrictions: "" },
                    { name: "Ere We Go", cp: 1, type: "Battle Tactic", when: "Start of your Movement phase.", target: "One ORKS INFANTRY unit from your army.", effect: "Until the end of the turn, add 2 to Advance and Charge rolls made for your unit.", restrictions: "" },
                ]
            },
            {
                name: "Da Big Hunt",
                flavour: "",
                rule: { name: "Da Hunt Is On", flavour: "Spying the largest or most dangerous threats on the battlefield - besides the Orks themselves - Beast Snaggas chase them down with gleeful enthusiasm, mobs racing each other to claim the kill and to snag a worthy trophy with which to proclaim their status as the warband's greatest hunters. Until, that is, the easily distracted ladz notice their next quarry.", text: "At the start of your Command phase, select one MONSTER, VEHICLE or CHARACTER unit from your opponent's army. Until the start of your next Command phase, that enemy unit is your Prey:\n- Each time a BEAST SNAGGA unit from your army declares a charge that includes your Prey as one of the targets, you can re-roll the Charge roll.\n- Each time a BEAST SNAGGA model from your army makes an attack that targets your Prey, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                enhancements: [
                    { name: "Glory Hog", cost: 30, restriction: "BEASTBOSS ON SQUIGOSAUR model only.", text: "Obsessed with being the first to make a kill, this hunter spurs his unruly mount ahead of the warband, coaxing his mob to follow him with the explicit threat of feeding them to his squigosaur if they don't keep up.\n\nModels in the bearer's unit have the Scouts 9\" ability." },
                    { name: "Proper Killy", cost: 15, restriction: "BEAST SNAGGA model only.", text: "This Beast Snagga is an unstoppable engine of destructive butchery who has left the brutalised corpses of his huge prey piled in his wake on world after world.\n\nAdd 1 to the Damage characteristic of melee weapons equipped by the bearer." },
                    { name: "Skrag Every Stash!", cost: 25, restriction: "BEAST SNAGGA model only.", text: "Successful hunt leaders are never short of a kunnin' plan to flush out the prey. This sneaky git has mastered the art of ransacking whatever the prey values, luring the quarry in to retaliate or else ensuring they're cornered, with no bolthole or gear to fall back on.\n\nAt the end of your Command phase, if the bearer is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
                    { name: "Surly as a Squiggoth", cost: 20, restriction: "BEASTBOSS ON SQUIGOSAUR model only.", text: "With a lifetime of leading notoriously deadly Beast Snagga hunts behind them, and gnarled hides thicker than Battlewagon armour, this Ork and his favoured Boyz have survived blows that would fell a Gargant.\n\nWhile the bearer is leading a unit, each time an attack targets that unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll." },
                ],
                stratagems: [
                    { name: "Drag It Down", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One BEAST SNAGGA unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Sustained Hits 1] ability. In addition, each time a model in your unit makes a melee attack that targets your Prey, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.", restrictions: "" },
                    { name: "Unstoppable Momentum", cp: 1, type: "Strategic Ploy", when: "Your Charge phase, just after a BEAST SNAGGA MOUNTED unit from your army ends a Charge move.", target: "That BEAST SNAGGA unit.", effect: "Select one enemy unit within Engagement Range of your unit and roll one D6 for each model in your unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds). If that enemy unit is your Prey, roll three additional D6.", restrictions: "" },
                    { name: "Dat One's Even Bigga!", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One BEAST SNAGGA unit from your army.", effect: "Until the end of the phase, your unit is eligible to charge in a turn in which it Advanced or Fell Back. In addition, you can re-roll Charge rolls made for your unit, provided one of the targets of that charge is your Prey.", restrictions: "" },
                    { name: "Where D'ya Fink You're Going?", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Fall Back move.", target: "One BEAST SNAGGA INFANTRY or BEAST SNAGGA MOUNTED unit from your army that was within Engagement Range of that enemy unit at the start of the phase.", effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Stalkin' Taktiks", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One BEAST SNAGGA INFANTRY or BEAST SNAGGA MOUNTED unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a ranged attack targets your unit, models in your unit have the Benefit of Cover against that attack. In addition, if your unit has the INFANTRY keyword, until the end of the phase, models in your unit have the Stealth ability.", restrictions: "" },
                    { name: "Instinctive Hunters", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One BEAST SNAGGA unit from your army that is not within Engagement Range of one or more enemy unit.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Kult of Speed",
                flavour: "",
                rule: { name: "Adrenaline Junkies", flavour: "If there is one thing Speed Freeks love more than racing full tilt towards the enemy, smashing into them and pulling hair pin turns to do it all again, it is loosing incredible amounts of noisy, chugging dakka as they do so.", text: "SPEED FREEKS units from your army are eligible to shoot and declare a charge in a turn in which they Advanced or Fell Back.", restrictions: "" },
                enhancements: [
                    { name: "Fasta Than Yooz", cost: 35, restriction: "ORKS INFANTRY model only.", text: "The thrill-seeking Orks at the head of Speed Freeks warbands lead their Kult of Speed brethren right into enemy lines, leaping from speeding Trukks and Battlewagons if need be to plunge into the fight.\n\nEach time the bearer's unit disembarks from a TRANSPORT after that TRANSPORT has made a Normal move, the bearer's unit is still eligible to declare a charge this turn." },
                    { name: "Speed Makes Right", cost: 25, restriction: "ORKS model only.", text: "This Ork's adrenaline-addled mind lurches from one insight to the next, a bone-shaker whose engine only fires on all cylinders when he is in the thick of the fighting. Once there, however, it revs into overdrive.\n\nIn your Command phase, if the bearer (or a TRANSPORT the bearer is embarked within) is within 9\" of one or more enemy units, roll one D6: on a 3+, you gain 1CP." },
                    { name: "Squig-hide Tyres", cost: 15, restriction: "DEFFKILLA WARTRIKE model only.", text: "Scaly squig-hide is the perfect material for fast and grippy tyres, able to provide traction even in the mire of blood, guts and oil left over from most Speed Freek fights.\n\nEach time a model in the bearer's unit makes a Consolidation move, it can move up to 6\" instead of up to 3\"." },
                    { name: "Wazblasta", cost: 10, restriction: "DEFFKILLA WARTRIKE model only.", text: "This warlord's fanatical devotion to speed is such that he cannot stand being anywhere other than in the heart of the action and he pushes the ladz around him to crank their throttles in order to close the distance with the enemy as soon as possible.\n\nIn your Shooting phase, after the bearer's unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, it is not eligible to declare a charge." },
                ],
                stratagems: [
                    { name: "Speediest Freeks", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One SPEED FREEKS or TRUKK unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 5+ invulnerable save. If your unit is a VEHICLE unit with an unmodified Toughness characteristic of 8 or less, until the end of the phase, models in your unit have a 4+ invulnerable save instead.", restrictions: "" },
                    { name: "Squig Flingin'", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a SPEED FREEKS or TRUKK unit from your army ends a Normal, Advance or Fall Back move.", target: "That SPEED FREEKS or TRUKK unit.", effect: "Select one enemy unit within 9\" of your unit. That enemy unit must take a Battle-shock test and, when doing so, subtract 1 from the result.", restrictions: "" },
                    { name: "Dakkastorm", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One SPEED FREEKS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Sustained Hits 1] ability. While targeting a unit within 9\", they have the [Sustained Hits 2] ability instead.", restrictions: "A unit cannot be targeted by this and the Blitza Fire Stratagem in the same phase." },
                    { name: "Blitza Fire", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One SPEED FREEKS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Lethal Hits] ability and, each time a model in your unit makes an attack that targets a unit within 9\", a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.", restrictions: "A unit cannot be targeted by this and the Dakkastorm Stratagem in the same phase." },
                    { name: "Full Throttle!", cp: 1, type: "Battle Tactic", when: "Your Charge phase, just after a SPEED FREEKS unit from your army ends a Charge move.", target: "That SPEED FREEKS unit.", effect: "Until the end of the turn, each time a model in your unit makes a melee attack, add 1 to the Wound roll.", restrictions: "" },
                    { name: "More Gitz Over 'ere!", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One SPEED FREEKS unit from your army that is within 9\" of that enemy unit and is not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                ]
            },
            {
                name: "Dread Mob",
                flavour: "",
                rule: { name: "Try Dat Button!", flavour: "Inventive Meks wire all manner of kustomised gubbinz, suspicious extras and inviting big red buttons to weapons or into the cockpits of their clanking kan creations. Eager Orks are always enthusiastic to try out such random innovations to see what sort of destruction they can cause. Sometimes this can be risky, but that's half the fun!", text: "Each time a MEK, ORKS WALKER or GROTS VEHICLE unit from your army is selected to shoot or fight, roll one D6. Until the end of the phase, weapons equipped by models in that unit have the corresponding ability shown in the table below.\n- 1-2: [Sustained Hits 1] ability.\n- 3-4: [Lethal Hits] ability.\n- 5-6: Each time an attack is made with this weapon, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 2.\nAlternatively, when such a unit is selected to shoot or fight, you can select one of the abilities above instead of rolling the D6. If you do, until the end of the phase, weapons equipped by models in that unit have the [Hazardous] ability as well.\nIf a weapon equipped by a model from your army has the [Hazardous] ability from multiple sources, each time you take a Hazardous test for that weapon, it is failed on a roll of a 1 or a 2.", restrictions: "KEYWORDS: GRETCHIN units from your army gain the BATTLELINE keyword." },
                enhancements: [
                    { name: "Gitfinder Googlez", cost: 10, restriction: "MEK model only.", text: "By squinting hard through the mismatched lenses of these goggles, even the sneakiest git can be pinpointed.\n\nRanged weapons equipped by models in the bearer's unit have the [Ignores Cover] ability." },
                    { name: "Press It Fasta!", cost: 35, restriction: "MEK model only.", text: "Impatient for better results, this Mek is an avid advocate of the theory that smashing buttons and cranking dials faster makes kustom guns more shooty.\n\nEach time the bearer's unit is selected to shoot, when rolling to determine which ability that unit's weapons gain from the Try Dat Button! Detachment rule, roll one additional D6: until the end of the phase, ranged weapons equipped by models in that unit gain both Button Effects generated by those rolls. If a duplicate Button Effect is rolled, it has no additional effect." },
                    { name: "Smoky Gubbinz", cost: 15, restriction: "MEK model only.", text: "This loud, fume-belching device wreathes the bearer and his mates in a thick bank of smoke. This is hard for the enemy to see through, but has little detriment on the Orks' own accuracy.\n\nModels in the bearer's unit have the Stealth ability." },
                    { name: "Supa-glowy Fing", cost: 20, restriction: "MEK model only.", text: "The Mek cobbled together this strange device in a flash of feverish inventin'. He isn't sure what it does - and it glows weirdly - but he proudly carries it to battle, eager to know what its big switch will do this time.\n\nIn your Command phase, select one enemy unit within 18\" of and visible to the bearer, then roll one D6: on a 1-2, that enemy unit must take a Battle-shock test; on a 3-4, that enemy unit suffers D3 mortal wounds; on a 5-6, until the start of your next Command phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll." },
                ],
                stratagems: [
                    { name: "Klankin' Klaws", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ORKS WALKER unit from your army that has not been selected to fight this phase.", effect: "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, add 2 to the Strength characteristic of melee weapons equipped by models in your unit and, if you chose to push it, until the end of the phase, add 1 to the Damage characteristic of those weapons and they have the [Hazardous] ability as well.", restrictions: "" },
                    { name: "Superfuelled Boiler", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after an ORKS WALKER unit from your army has been selected to Advance.", target: "That ORKS WALKER unit.", effect: "Until the end of the turn, you can re-roll Advance rolls made for your unit and ranged weapons equipped by models in your unit have the [Assault] ability.", restrictions: "" },
                    { name: "Bigger Shells for Bigger Gitz", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One MEK, ORKS WALKER or GROTS VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE, add 1 to the Wound roll. If you chose to push it, add 1 to the Damage characteristic of that attack and, until the end of the phase, ranged weapons equipped by models in your unit have the [Hazardous] ability as well.", restrictions: "" },
                    { name: "Dakka! Dakka! Dakka!", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ORKS WALKER or GROTS VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If you chose to push it, you can re-roll the Hit roll instead and, until the end of the phase, ranged weapons equipped by models in your unit have the [Hazardous] ability as well.", restrictions: "" },
                    { name: "Conniving Runts", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One GRETCHIN unit from your army that is within 9\" of that enemy unit and not within Engagement Range of any enemy units.", effect: "Roll one D6: on a 4+, that enemy unit suffers D3+1 mortal wounds. Your unit can then make a Normal move.", restrictions: "" },
                    { name: "Extra Gubbinz", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ORKS WALKER or GROTS VEHICLE unit from your army (excluding TITANIC units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                ]
            },
            {
                name: "Green Tide",
                flavour: "",
                rule: { name: "Mob Mentality", flavour: "Caught up in the infectious and nigh supernatural belligerence that suffuses such large hordes of Orks on the warpath, the Boyz tend to push through lethal wounds, being too immersed in the energetic riot to worry about such things as long as they have a load of mates to enjoy the fight with.", text: "Each time an attack targets a BOYZ unit from your army, models in that unit have a 6+ invulnerable save against that attack. Each time an attack targets a BOYZ unit from your army that contains 10 or more models, models in that unit have a 5+ invulnerable save against that attack.", restrictions: "" },
                enhancements: [
                    { name: "Bloodthirsty Belligerence", cost: 15, restriction: "ORKS INFANTRY model only.", text: "Buoyed on by his chanting ladz and eager to smash into his enemies first, this boss leads the way, racing towards one fight after the next.\n\nWhile the bearer is leading a unit, you can re-roll Advance rolls made for that unit. While that unit contains 10 or more models, you can re-roll Charge rolls made for that unit as well." },
                    { name: "Brutal But Kunnin'", cost: 25, restriction: "ORKS INFANTRY model only.", text: "What tactics occasionally pop into this Ork's head revolve purely around throwing as many Boyz into the enemy's face as possible.\n\nIn your Command phase, if the bearer is on the battlefield (or is embarked within a TRANSPORT that is on the battlefield), roll one D6, adding 2 to the result if the bearer's unit contains 10 or more models: on a 5+, you gain 1CP." },
                    { name: "Ferocious Show Off", cost: 10, restriction: "ORKS INFANTRY model only.", text: "This brutal fighter is even more dangerous with a raucous audience of chanting Orks as he displays his violent abilities as a warning to all.\n\nEach time the bearer fights, while resolving those attacks, add 1 to the Strength characteristic of the bearer's melee weapons. If the bearer's unit contains 10 or more models, while resolving those attacks, add 3 to the Strength characteristic instead." },
                    { name: "Raucous Warcaller", cost: 20, restriction: "ORKS INFANTRY model only.", text: "This hulking boss is a focal point of violent enthusiasm. Orks flocking to his bosspole feel emboldened, the boss exuding an energetic dynamism that keeps his ladz at the height of rampaging excitement.\n\nWhile the bearer is leading a unit, that unit always counts as containing 10 or more models for the purposes of your Detachment rule and any Stratagems you use." },
                ],
                stratagems: [
                    { name: "Competitive Streak", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One BOYZ unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If your unit contains 10 or more models, re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Bulldozer Brutality", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One BOYZ unit from your army that has not been selected to fight this phase and is within Engagement Range of one or more enemy units.", effect: "Until the end of the phase, each time your unit is selected to fight, when determining which models in your unit are eligible to fight, any models in your unit that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit.", restrictions: "" },
                    { name: "Braggin' Rights", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "Two BOYZ units from your army that are within 6\" of each other.", effect: "Until the start of your next Command phase, while those two units are within 6\" of each other, they both count as containing 10 or more models for the purposes of your Detachment rule, any Enhancements models from your army have and any Stratagems you use.", restrictions: "" },
                    { name: "Come on Ladz!", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One BOYZ unit from your army.", effect: "Return up to D3+2 destroyed models to your unit (excluding CHARACTER models).", restrictions: "" },
                    { name: "Tide of Muscle", cp: 1, type: "Epic Deed", when: "Your Charge phase.", target: "One BOYZ unit from your army that has not declared a charge this phase.", effect: "Until the end of the phase, each time your unit declares a charge, add 1 to the Charge roll and, if your unit contains 10 or more models, you can re-roll the Charge roll.", restrictions: "" },
                    { name: "Go Get 'em!", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One BOYZ unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "After the attacking unit has shot, your unit can make a Go Get 'Em! move. To do so, roll one D6: each model in your unit can move a distance in inches up to the result, but your unit must end that move as close as possible to the closest enemy unit. When doing so, those models can be moved within Engagement Range of that enemy unit. If your unit contains 10 or more models, you can re-roll the D6 to determine how far your unit can move.", restrictions: "" },
                ]
            },
            {
                name: "Bully Boyz",
                flavour: "",
                rule: { name: "Da Boss Is Watchin'", flavour: "Gathered together into an all-conquering mass of hulking brutes, the biggest Nobz and their even larger bosses are - or so they claim - more Orky than anyone else. Their bellowed war cries are louder, their self-belief, impetus and sheer presence an affront to the senses. Theirs is a violent momentum that can roll through entire enemy armies in an unrelenting wave of aggression.", text: "At the start of your Command phase, in a turn in which you have not called a Waaagh!, if you have one or more WARBOSS models on the battlefield (or embarked within a TRANSPORT that is on the battlefield), you can call a Waaagh! for a second time this battle. When doing so, that second Waaagh! only counts as having been called for WARBOSS, NOBZ and MEGANOBZ units from your army.", restrictions: "" },
                enhancements: [
                    { name: "Big Gob", cost: 20, restriction: "INFANTRY WARBOSS model only.", text: "This warlord's bellowing war cry is so loud that it can be heard over the thickest of fighting, rolling outwards in a terrifying bestial roar.\n\nAt the start of the Fight phase, select one enemy unit within Engagement Range of the bearer. That unit must take a Battle-shock test, and when doing so, subtract 1 from the result." },
                    { name: "Da Biggest Boss", cost: 15, restriction: "INFANTRY WARBOSS model only.", text: "The bigger the Waaagh!, the bigger the boss must be to exert control. This Ork has countless huge battles under his belt and has grown in stature and aggression to match.\n\nAdd 2 to the bearer's Wounds characteristic." },
                    { name: "'Eadstompa", cost: 10, restriction: "INFANTRY WARBOSS model only.", text: "A solid slab of muscle and aggression, this Ork is the living embodiment of the undeniable truth of his enemies' inferiority.\n\nEach time the bearer makes an attack that targets a unit that is below its Starting Strength, re-roll a Wound roll of 1. If that unit is Below Half-strength, you can re-roll the Wound roll instead." },
                    { name: "Tellyporta", cost: 25, restriction: "WARBOSS IN MEGA ARMOUR model only.", text: "Nothing shocks the enemy like an angry mob of the biggest and surliest Orks imaginable suddenly appearing in a blast of green lightning!\n\nModels in the bearer's unit have the Deep Strike ability." },
                ],
                stratagems: [
                    { name: "Armed to Dateef", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One NOBZ or MEGANOBZ unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If a Waaagh! is active for your unit, you can re-roll the Hit roll instead.", restrictions: "" },
                    { name: "Too Arrogant to Die", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One NOBZ or MEGANOBZ unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not shot or fought this phase, roll one D6, adding 2 to the result if a Waaagh! is active for your unit. On a 5+, do not remove the destroyed model from play; it can shoot or fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Always Lookin' Fer a Fight", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit is destroyed.", target: "One NOBZ or MEGANOBZ unit from your army that destroyed that enemy unit.", effect: "Until the end of the phase, each time your unit makes a Consolidation move, it can move up to D3+3\" instead of up to 3\". If a Waaagh! is active for your unit, it can move up to 6\" instead.", restrictions: "" },
                    { name: "Crushing Impact", cp: 1, type: "Epic Deed", when: "Your Charge phase, just after a NOBZ or MEGANOBZ unit from your army ends a Charge move.", target: "That NOBZ or MEGANOBZ unit.", effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds). If a Waaagh! is active for your unit, that enemy unit suffers 1 mortal wound for each 4+ instead.", restrictions: "" },
                    { name: "Cut'em Down", cp: 1, type: "Battle Tactic", when: "Your opponent's Movement phase, just after an enemy unit is selected to Fall Back.", target: "One NOBZ or MEGANOBZ unit from your army within Engagement Range of that enemy unit.", effect: "When that enemy unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if a Waaagh! is active for your unit, subtract 1 from each of those tests.", restrictions: "" },
                    { name: "Hulking Brutes", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One NOBZ or MEGANOBZ unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                ]
            },
            {
                name: "Taktikal Brigade",
                flavour: "The Orks who belong to the Blood Axe clan seek to apply their own brand of taktiks to their endless wars. The most cunning of Blood Axe leaders have adapted the strategies of other species into a unique brand of clandestine warfare that, whilst simplistic, is brutally effective.",
                rule: { name: "Lissen 'Ere", flavour: "Blood Axe leaders bellow actual orders to the ladz under their command.", text: "Once per battle round, in your Command phase or after being set up on the battlefield in your Movement phase, each BOSS SNIKROT, MEK and WARBOSS model in your army can issue Taktiks abilities.\nTo do so, select one of the Taktiks abilities below and select one friendly ORKS unit within 6\" of that model to issue them to. That model must take a Leadership test: if failed, the selected unit suffers 1 mortal wound. Until the start of your next Command phase, the selected unit is affected by the selected Taktik. A unit cannot have Taktiks issued to it in this way more than once per battle round.\nTaktiks abilities cannot be issued to Battle-shocked units, and if a unit affected by Taktiks becomes Battle-shocked, all Taktiks cease to affect that unit while it is Battle-shocked.\nGet Stuck In: You can re-roll Charge rolls made for this unit.\nGet On Wiv It: Add 1 to the Strength characteristic of melee weapons equipped by models in this unit.\nSneaky Stalkin': INFANTRY and MOUNTED models (excluding MEGANOBZ) in this unit have the Stealth ability and each time a ranged attack targets this unit, those models have the Benefit of Cover against that attack.\nShoota Drills: Each time an INFANTRY or MOUNTED model in this unit makes a ranged attack, add 1 to the Hit roll.", restrictions: "KEYWORDS: STORMBOYZ units from your army gain the BATTLELINE keyword." },
                enhancements: [
                    { name: "Skwad Leader", cost: 15, restriction: "WARBOSS INFANTRY model only.", text: "An exemplar of the Blood Axes' devious arts, this Warboss leads mobs of cunning Kommandos to battle.\n\nDuring the Declare Battle Formations step, the bearer can be attached to a KOMMANDOS unit. While leading a Kommandos unit, it has the Infiltrators and Stealth abilities." },
                    { name: "Mek Kaptin", cost: 45, restriction: "BIG MEK, BIG MEK IN MEGA ARMOUR or BIG MEK WITH SHOKK ATTACK GUN model only.", text: "Whilst Flash Gitz hate discipline of any sort, particularly militant Meks can keep them in line with a combination of brutal discipline and the promise of shiny gubbinz.\n\nDuring the Declare Battle Formations step, the bearer can be attached to a FLASH GITZ unit. Each time a model in the bearer's unit makes a ranged attack, you can re-roll the Hit roll." },
                    { name: "Mork's Kunnin'", cost: 15, restriction: "ORKS model only.", text: "Possessed of an exceptionally keen mind - for an Ork at least - this boss matches wits with his opponents, holding his ladz back until an opportune moment arrives.\n\nAfter both players have deployed their armies, select up to three ORKS units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                    { name: "Gob Boomer", cost: 10, restriction: "WARBOSS or MEK model only.", text: "Cobbled together from the remains of a humie vox-caster, this device amplifies this Ork's already booming voice, carrying their bellowed orders further.\n\nEach time the bearer issues Taktiks, it can do so to a friendly ORKS INFANTRY or ORKS MOUNTED unit within 18\", instead of 6\"." },
                ],
                stratagems: [
                    { name: "Dat's Ours", cp: 1, type: "Strategic Ploy", when: "Command phase.", target: "One ORKS unit from your army that is within Engagement Range of one or more enemy units.", effect: "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.", restrictions: "" },
                    { name: "Fight Proppa", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ORKS INFANTRY or ORKS MOUNTED unit from your army that has not been selected to fight this phase.", effect: "Select the [Sustained Hits 1] or [Lethal Hits] ability. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability.", restrictions: "" },
                    { name: "Taktikal Retreat", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after an ORKS unit from your army Falls Back.", target: "That ORKS unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Krunchin' Descent", cp: 1, type: "Battle Tactic", when: "Your Charge phase, just after a STORMBOYZ unit from your army ends a Charge move.", target: "That STORMBOYZ unit.", effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).", restrictions: "" },
                    { name: "On to Da Next", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit Falls Back.", target: "One ORKS unit from your army that was within Engagement Range of that enemy unit at the start of the phase.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Ded Sneaky", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One KOMMANDOS or STORMBOYZ unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "More Dakka!",
                flavour: "Of all the Ork manias, few are as widespread as the love of heavy firepower. Temporarily united by a shared love of loud and destructive dakka, hordes of similarly obsessed Orks can produce storms of killing fire capable of felling even the most heavily armoured of enemies.",
                rule: { name: "Dakka! Dakka! Dakka!", flavour: "Orks have no real concept of ammunition preservation, instead tending to hold the trigger down until their ammunition runs dry or their weapon falls apart in their hands.", text: "Ranged weapons equipped by ORKS INFANTRY and ORKS WALKER models from your army have the [Assault] ability.\nWhile the Waaagh! is active for your army, during your Shooting phase, ranged weapons equipped by ORKS INFANTRY and ORKS WALKER models from your army have the [Sustained Hits 1] ability.", restrictions: "" },
                enhancements: [
                    { name: "Da Gobshot Thunderbuss", cost: 15, restriction: "ORKS model only.", text: "Requiring an entire chest of teef to be loaded into its breach before each shot, the Gobshot Thunderbuss' worky gubbinz plates its unconventional ammunition in gold before firing it in an inescapable cone of fanged death. Not only can this madcap weapon sweep away swathes of enemies with every shot, it also fires a literal fortune in teef every time, proclaiming its owner's obscene wealth in the process.\n\nRanged weapons equipped by the bearer have the [Devastating Wounds] and [Hazardous] abilities." },
                    { name: "Dead Shiny Shootas", cost: 35, restriction: "ORKS model only.", text: "Rumoured to have been made by Big Mek Buzzgob, da Dead Shiny Shootas are a set of multi-barrelled brutes packed full of dakka. The guns kick out a deafening storm of hot lead, much to the enjoyment of the Orks pulling the triggers, their volume of fire so great that even the most inaccurate shooter can land a respectable number of hits.\n\nRanged weapons equipped by models in the bearer's unit have the [Rapid Fire 1] ability." },
                    { name: "Targetin' Squigs", cost: 15, restriction: "ORKS model only.", text: "The flashiest gitz have specially-bred targetin' squigs mounted atop their favourite shoota. It's not certain whether these creatures actually aid the bearer or not as they cling for dear life atop their perches, which are inevitably the biggest shoota the owner has, as nothing aids accuracy like firing so many shots that you just can't miss.\n\nEach time a model in the bearer's unit makes a ranged attack, add 1 to the Hit roll." },
                    { name: "Zog Off and Eat Dakka!", cost: 10, restriction: "ORKS model only.", text: "There's no point in having the loudest and flashiest shoota if gitz don't let ya fire them. This Ork will even go so far as to avoid a punch up in order to fire his snazzy weapons.\n\nThe bearer's unit is eligible to shoot in a turn in which it Fell Back." },
                ],
                stratagems: [
                    { name: "Orks Is Still Orks", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One ORKS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Get Stuck in, Ladz!", cp: 2, type: "Epic Deed", when: "Your Command phase.", target: "One ORKS unit from your army (excluding GRETCHIN units).", effect: "Until the start of your next Command phase, the Waaagh! is active for your unit, even if you have already called a Waaagh! this battle.\nDesigner's Note: This means that any abilities that are in effect while the Waaagh! is active for your army will be in effect for your unit.", restrictions: "" },
                    { name: "Huge Show-offs", cp: 1, type: "Epic Deed", when: "Your Command phase.", target: "One ORKS WALKER unit (excluding KILLA KANS) from your army.", effect: "Until the start of your next Command phase, improve your unit's Move, Leadership and Objective Control characteristics by 1, and each time a model in your unit makes an attack, add 1 to the Hit roll.", restrictions: "" },
                    { name: "Long, Uncontrolled Bursts", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ORKS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Speshul Shells", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One ORKS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets the closest eligible target within 18\", improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1.", restrictions: "" },
                    { name: "Call Dat Dakka?", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One ORKS unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks.", effect: "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.", restrictions: "" },
                ]
            },
            {
                name: "Freebooter Krew",
                flavour: "Ork Freebooterz are the most selfish, acquisitive and merciless of their kind. Kicked out of their tribes for failing to respect even the brutal structures of Orkoid society, they find their way into the company of equally shifty gits and form Freebooter krewz. Freebooterz typically sail the void aboard kroozers bristling with guns and boarding craft, and take every opportunity to pillage and destroy everything in their path. When Freebooter Krewz gather under the banner of an especially ambitious and cunning Kaptin, they form pirate fleets that can endanger even fortified worlds and full-fledged battle stations. Any manner of Ork can become a Freebooter - though the most iconic of their kind are the gunned-up show-offs known as Flash Gitz - and so their krewz may include mobs of Boyz and Grots, hurtling packs of bad Ork Bikerboyz, piratical Beast Snaggas, fleets of trophy-festooned Battlewagons and more besides. The only unifying features are the Freebooterz' greed for loot of every kind, and their willingness to do just about anything to get their talons on it.",
                rule: { name: "Here Be Loot", flavour: "Grabbing loot is a Freebooter's favourite pastime, followed closely by bludgeoning senseless anyone stupid enough to try to stop him doing so - or, even worse, seeking to take the loot for themselves.", text: "At the start of your Command phase, select one objective marker. Until the start of your next Command phase, that objective marker is your loot objective.\nEach time a model in an ORKS INFANTRY, ORKS MOUNTED or ORKS WALKER unit from your army makes an attack, that attack has the [Sustained Hits 1] ability if either or both of the following are true:\n- That model's unit is within range of your loot objective.\n- That attack targets a unit within range of your loot objective.", restrictions: "" },
                enhancements: [
                    { name: "Da Kaptin", cost: 10, restriction: "WARBOSS model only.", text: "Kaptins are experts in violently motivating their lads in the pursuit of even more loot.\n\nOnce per battle round, at the start of any phase, you can select one friendly ORKS unit that is Battle-shocked and within 12\" of the bearer. That unit suffers D3 mortal wounds and it is no longer Battle-shocked." },
                    { name: "Git-spotter Squig", cost: 20, restriction: "ORKS model only.", text: "Wealthy Freebooterz can afford augmetically enhanced Git-spotter Squigs to sit on their shoulders and spot gits.\n\nRanged weapons equipped by models in the bearer's unit have the [Ignores Cover] ability." },
                    { name: "Bionik Workshop", cost: 15, restriction: "BIG MEK or PAINBOY model only.", text: "Bad Meks and Doks are sought after by Freebooterz to provide cybork bioniks for those with the teef to pay.\n\nAt the start of the battle, roll one D3 and compare the result to the list below. Until the end of the battle, models in the bearer's unit have that bioniks ability.\n1. Bionik Legs: Add 2\" to the Move characteristic of this model.\n2. Bionik Arms: Add 1 to the Strength characteristic of melee weapons equipped by this model.\n3. Bionik Bonce: Improve the Weapon Skill characteristic of melee weapons equipped by this model by 1." },
                    { name: "Razgit's Magik Map", cost: 25, restriction: "ORKS model only.", text: "Stolen from a humie cogboy, this remarkable digital map helps Freebooterz outwit their enemies.\n\nAfter both players have deployed their armies, select up to three ORKS INFANTRY units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                ],
                stratagems: [
                    { name: "Bash and Grab", cp: 1, type: "Battle Tactic", when: "The Fight phase.", target: "One ORKS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of the loot objective, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Grab and Bash", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One ORKS unit from your army (excluding GRETCHIN units) that is within range of the loot objective.", effect: "Until the start of your next Command phase, the Waaagh! is active for your unit, even if you have already called a Waaagh! this battle.\nDesigner's Note: This means that any abilities that are in effect while the Waaagh! is active for your army will be in effect for your unit.", restrictions: "" },
                    { name: "Boardin' Rush", cp: 1, type: "Battle Tactic", when: "Your Movement phase.", target: "One ORKS unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Deck Fraggers", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One ORKS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit targets an INFANTRY unit with a ranged weapon, that weapon has the [Blast] ability.", restrictions: "" },
                    { name: "Rolling Loot-heap", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One FLASH GITZ unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Anti-Vehicle 4+] ability.", restrictions: "" },
                    { name: "Krump and Run", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit Falls Back.", target: "One ORKS unit from your army that was within Engagement Range of that enemy unit at the start of the phase and is not within range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                ]
            },
            {
                name: "Speedwaaagh!",
                flavour: "When a Speedwaaagh! is unleashed, entire planets become Ork speedways. The aliens tear across battlefields and weave through no man's land at breakneck pace, blazing away at anything in their path. So fast-moving are these Orkoid formations that they often punch clean through the enemy lines before their foes truly realise they are in battle. The Orks then haul their jostling vehicles and turbo-boosted Trukks around, charging back for another pass and then another. As they roar, they fill the air with deafening hails of firepower and choking clouds of dust and fume. Half-blinded, deafened by engines and bellowing, the enemy reels as swarms of light vehicles hit them from every direction. Ordered battle descends into high-octane anarchy as the Orks compete in contests of speed and violence in which their enemies are an unwilling audience and participants. Soon enough, the once-proud ranks of the foe are reduced to mangled ruin and the Orks race onward towards the next battle.",
                rule: { name: "Turbo Boostas", flavour: "No self-respecting Speed Freek goes to war without highly tuned, Mek-approved turbo boostas to power them to battle. These devices come in all shapes and sizes, but all give their operators a violent burst of speed, allowing them to close with the enemy at breakneck speed and get stuck in.", text: "Each time a SPEED FREEKS or TRUKK unit (excluding AIRCRAFT) from your army Advances, it can use its turbo. If it does, do not make an Advance roll for it; instead, until the end of the phase, models in that unit have a Move characteristic of 24\" but can only move in one straight line, and until the end of the turn, ranged weapons equipped by those models have the [Assault] ability and that unit cannot declare a charge.\nDesigner's Note: When a unit uses its turbo, the models in that unit cannot pivot, and they cannot make a move of two or more straight lines (e.g. to navigate around obstacles). That unit also cannot declare a charge, even if another rule would let it declare a charge in a turn in which it Advanced.", restrictions: "" },
                enhancements: [
                    { name: "Kustom Shokk Box", cost: 10, restriction: "DEFFKILLA WARTRIKE model only.", text: "Obtained from a Big Mek for a veritable fortune of teef, this device incorporates a shokk-boosta that enables a Warboss and their steed to take potentially deadly shortcuts through the Warp.\n\nEach time the bearer uses its turbo, its unit can move horizontally through terrain features." },
                    { name: "Dakkamek", cost: 25, restriction: "MEK model only.", text: "Mekboyz with a penchant for overwhelming firepower can always get some more dakka out of a vehicle's guns.\n\nEach time the bearer uses its Mekaniak ability, until the start of your next Command phase, ranged weapons equipped by the selected VEHICLE model have the [Rapid Fire 1] ability." },
                    { name: "Supa-burny Fuel", cost: 15, restriction: "DEFFKILLA WARTRIKE model only.", text: "The highly volatile, Mek-brewed fuel that powers this Wartrike emits particularly large and exceptionally deadly gouts of flame.\n\nChange the Attacks characteristic of the bearer's killa jet - burna weapon to 3D6, and change the Attacks characteristic of the bearer's killa jet - cutta weapon to 3." },
                    { name: "Master Meknologist", cost: 20, restriction: "BIG MEK model only.", text: "A talented gunsmith, even by the standards of his Big Mek rivals, this Ork reserves the finest of his creations for personal use.\n\nImprove the Ballistic Skill characteristic of the bearer's ranged weapons by 1." },
                ],
                stratagems: [
                    { name: "On Da Move", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One ORKS unit from your army that has not been selected to move this phase.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back or Advanced (unless it used its turbo this turn).", restrictions: "" },
                    { name: "Mobile Dakkastorm", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase, just after a SPEED FREEKS or TRUKK unit from your army has shot.", target: "That SPEED FREEKS or TRUKK unit.", effect: "Select one enemy unit hit by one or more of those attacks (excluding attacks made with Indirect Fire weapons). Until the end of the phase, each time a model in a SPEED FREEKS or TRUKK unit from your army makes an attack that targets that unit, improve the Strength characteristic of that attack by 2.", restrictions: "" },
                    { name: "Speshul Ammo", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One ORKS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit (excluding Torrent weapons) have the [Anti-Monster 4+] and [Anti-Vehicle 4+] abilities.", restrictions: "" },
                    { name: "Ded Killy Construction", cp: 1, type: "Strategic Ploy", when: "Your Fight phase.", target: "One SPEED FREEKS or TRUKK unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Lance] ability and, if your unit made a Charge move this turn, until the end of the phase, add 1 to the Damage characteristic of those weapons.", restrictions: "" },
                    { name: "Dust Trails", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ORKS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit has the Benefit of Cover.", restrictions: "" },
                    { name: "Evasive Manoova", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One SPEED FREEKS or TRUKK unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Blitz Brigade",
                flavour: "Blitz Brigades consist of as many Battlewagons, Trukks and other wheeled and tracked monstrosities as a Tankboss can cobble together. Hulking constructions festooned with barbaric trophies and vomiting acrid clouds of choking exhaust fumes, these ramshackle vehicles bristle with rokkit batteries, pintle-mounted shootas and massive cannons as crude as they are destructive. Varying widely in size and shape, all drive to war laden with battle-hungry Orks. Thundering forward in a roaring avalanche of jagged scrap metal and burning rubber, Blitz Brigades plough directly into the enemy, tracks, wheels and pulverising rollers throwing up clots of mud and gore. Crude speakers spit out discordant Goffik roars and booming war cries that are in turn drowned out by the thunderous reports of oversized cannons and the jubilant bellows of Boyz as they leap from their transports and hurl themselves into the thick of the fight.",
                rule: { name: "Eager for the Fight", flavour: "Blitz Brigades thunder into battle laden with eager, belligerent Orks, all desperate to get stuck into the enemy. Clambering from transport compartments or leaping from armoured hulls, these wild-eyed killers descend on the enemy in roaring savagery.", text: "Each time an ORKS unit from your army disembarks from a TRANSPORT, until the end of the turn, you can re-roll Advance and Charge rolls made for that ORKS unit.", restrictions: "" },
                enhancements: [
                    { name: "Runnin' Boots", cost: 10, restriction: "ORKS INFANTRY CHARACTER model only.", text: "These squighide boots were looted from the corpse of a particularly nippy Speed Freek. The wearer is utterly convinced that they make him faster.\n\nEach time you make a Charge roll for the bearer's unit, if that unit disembarked from a TRANSPORT this turn, add 1 to the result." },
                    { name: "Blitzkaptin", cost: 25, restriction: "ORKS CHARACTER model only.", text: "Keeping a Blitz Brigade going in one direction is hard enough for most Orks. This particular commander, however, is a master of armoured taktiks.\n\nAfter both players have deployed their armies, if the bearer's unit (or any TRANSPORT it is embarked within) is on the battlefield, select up to three ORKS VEHICLE units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                    { name: "Supercharged Squig Oil", cost: 10, restriction: "MEK model only.", text: "A few drops of this volatile admixture of Squig oil, rokkit fuel and various other noxious chemicals is enough to provide any engine with increased performance.\n\nEach time the bearer uses its Mekaniak ability, until the end of the turn, you can re-roll Charge rolls for the selected VEHICLE model's unit." },
                    { name: "Tuff Git", cost: 5, restriction: "ORKS INFANTRY CHARACTER model only.", text: "Big, brash and belligerent, this Ork is resilient in both mind and body. Even the explosion of his transport isn't enough to shake him.\n\nAt the end of a phase in which the bearer's unit disembarked from a TRANSPORT, if that unit is Battle-shocked, it is no longer Battle-shocked." },
                ],
                stratagems: [
                    { name: "Mount Up, Ladz", cp: 1, type: "Strategic Ploy", when: "End of the Fight phase.", target: "One ORKS INFANTRY unit from your army that is not within Engagement Range of one or more enemy units, and one friendly TRANSPORT it is able to embark within.", effect: "If your ORKS INFANTRY unit is wholly within 6\" of that TRANSPORT, it can embark within it.", restrictions: "" },
                    { name: "Mekanised Brutality", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One BATTLEWAGON, KILL RIG or HUNTA RIG unit from your army that has not been selected to move this phase.", effect: "Until the end of the turn, each time a unit disembarks from your unit after your unit makes a Normal move, that disembarked unit is still eligible to declare a charge this turn.", restrictions: "" },
                    { name: "Run 'em Down", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One BATTLEWAGON, KILL RIG or HUNTA RIG unit from your army that has not been selected to move this phase.", effect: "Select up to two other friendly ORKS VEHICLE or ORKS MONSTER units within 6\" of your unit. Until the end of the turn, your unit and each unit you selected are eligible to declare a charge in a turn in which they Advanced.", restrictions: "" },
                    { name: "Armoured Duellists", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ORKS VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time your unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Hit roll and add 1 to the Wound roll.", restrictions: "" },
                    { name: "Impervious", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One BATTLEWAGON, KILL RIG or HUNTA RIG unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Yooz in Trouble Now", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One BATTLEWAGON, HUNTA RIG or KILL RIG model from your army that was hit by one or more of the attacking unit's attacks.", effect: "One ORKS INFANTRY unit embarked within your model can disembark and make a Surge move. To do so, roll one D6: models in that unit move a number of inches up to this result, but that unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                ]
            }
        ],

        // UNITS
        units: [
  {
    "id": "orks-beastboss",
    "name": "Beastboss",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 80
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "6",
      "ld": "6+",
      "oc": "1"
    },
    "invuln": "5+",
    "baseSize": "50mm",
    "weapons": {
      "ranged": [
        {
          "name": "Shoota",
          "range": "18\"",
          "a": "2",
          "bs": "4+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 1"
          ]
        }
      ],
      "melee": [
        {
          "name": "Beast Snagga klaw",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "10",
          "ap": "-2",
          "d": "2",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        },
        {
          "name": "Beastchoppa",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "6",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 6+",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Beastboss",
        "Beastly Rage"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Beastboss",
    "leaderText": "Can be attached to Beast Snagga Boyz.",
    "keywords": [
      "Infantry",
      "Character",
      "Beast Snagga",
      "Warboss",
      "Beastboss"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Beastboss": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
      "Beastly Rage": "Each time this model makes a Charge move, until the end of the turn, melee weapons it is equipped with have the [DEVASTATING WOUNDS] ability."
    }
  },
  {
    "id": "orks-beastboss-on-squigosaur",
    "name": "Beastboss on Squigosaur",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 110
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "8",
      "sv": "3+",
      "w": "8",
      "ld": "6+",
      "oc": "3"
    },
    "invuln": "5+",
    "baseSize": "80mm",
    "weapons": {
      "ranged": [
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Thump gun",
          "range": "18\"",
          "a": "D3",
          "bs": "5+",
          "s": "6",
          "ap": "0",
          "d": "2",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Beastchoppa",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "6",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        },
        {
          "name": "Squigosaur\u2019s jaws",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "7",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Devastating Wounds",
            "Extra Attacks"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 5+",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Thundering Stampede",
        "Single-minded Predator"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 thump gun."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Beastboss on Squigosaur",
    "leaderText": "Can be attached to Squighog Boyz.",
    "keywords": [
      "Mounted",
      "Character",
      "Beast Snagga",
      "Warboss",
      "Beastboss On Squigosaur"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Thundering Stampede": "While this model is leading a unit, add 1 to Charge rolls made for that unit.",
      "Single-minded Predator": "You can target this model's unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase."
    }
  },
  {
    "id": "orks-big-mek",
    "name": "Big Mek",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 70
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "3+",
      "w": "6",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "50mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Traktor blasta",
          "range": "36\"",
          "a": "1",
          "bs": "5+",
          "s": "10",
          "ap": "-2",
          "d": "D6+1",
          "keywords": [
            "Anti-Fly 3+",
            "Devastating Wounds"
          ]
        }
      ],
      "melee": [
        {
          "name": "Drilla",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "12",
          "ap": "-3",
          "d": "3",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "More Dakka",
        "Shokk-boosta"
      ]
    },
    "wargearOptions": [
      "This model\u2019s kustom mega-blasta can be replaced with 1 traktor blasta.",
      "This model\u2019s power klaw can be replaced with 1 drilla."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Big Mek",
    "leaderText": "Can be attached to Boyz, Breaka Boyz, Lootas, Mek Gunz, Nobz, Tankbustas.",
    "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Mek",
      "Big Mek"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "More Dakka": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
      "Shokk-boosta": "You can re-roll Advance rolls made for this model\u2019s unit. In addition, each time this model\u2019s unit makes a Normal, Advance or Fall Back move, models in that unit can move through models and terrain features. When doing so, they can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed."
    }
  },
  {
    "id": "orks-big-mek-in-mega-armour",
    "name": "Big Mek in Mega Armour",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 90
      }
    ],
    "stats": {
      "m": "5\"",
      "t": "6",
      "sv": "2+",
      "w": "5",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kombi-weapon",
          "range": "24\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Anti-Infantry 4+",
            "Devastating Wounds",
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Kustom shoota",
          "range": "18\"",
          "a": "4",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Tellyport blasta",
          "range": "12\"",
          "a": "3",
          "bs": "5+",
          "s": "8",
          "ap": "-1",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Killsaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "12",
          "ap": "-3",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Kustom Force Field",
        "Grot Oiler",
        "Designer\u2019s Note"
      ],
      "other": [
        "More Dakka",
        "Fix Dat Armour Up"
      ]
    },
    "wargearOptions": [
      "This model\u2019s kustom-mega blasta can be replaced with one of the following:",
      "1 killsaw",
      "1 kombi-weapon",
      "1 kustom shoota",
      "This model can be equipped with one of the following:",
      "1 tellyport blasta",
      "1 kustom force field",
      "This model can be equipped with 1 grot oiler."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Big Mek in Mega Armour",
    "leaderText": "Can be attached to Meganobz.",
    "keywords": [
      "Infantry",
      "Character",
      "Mega Armour",
      "Mek",
      "Big Mek In Mega Armour"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "More Dakka": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
      "Fix Dat Armour Up": "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit.",
      "Kustom Force Field": "While the bearer is leading a unit, models in that unit have a 4+ invulnerable save against ranged attacks.",
      "Grot Oiler": "Once per battle, at the end of your Movement phase, one model in the bearer\u2019s unit regains D3 lost wounds.",
      "Designer\u2019s Note": "Place a Grot Oiler token next to the unit, removing it once this ability has been used."
    }
  },
  {
    "id": "orks-big-mek-with-shokk-attack-gun",
    "name": "Big Mek with Shokk Attack Gun",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 80
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "5",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Shokk attack gun",
          "range": "60\"",
          "a": "D6+1",
          "bs": "5+",
          "s": "9",
          "ap": "-4",
          "d": "D6",
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
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Grot Assistant",
        "Designer\u2019s Note"
      ],
      "other": [
        "More Dakka",
        "Deranged Snotling Assault"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 grot assistant."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Big Mek with Shokk Attack Gun",
    "leaderText": "Can be attached to Boyz, Breaka Boyz, Lootas, Mek Gunz, Nobz, Tankbustas.",
    "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Mek",
      "Big Mek With Shokk Attack Gun"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "More Dakka": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1.",
      "Deranged Snotling Assault": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks; that unit must take a Battle-shock test.",
      "Grot Assistant": "Once per battle, after rolling to determine how many attacks the bearer\u2019s shokk attack gun makes, you can re-roll that dice.",
      "Designer\u2019s Note": "Place a Grot Assistant token next to the bearer, removing it once this ability has been used."
    }
  },
  {
    "id": "orks-boss-snikrot",
    "name": "Boss Snikrot",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 75
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "6",
      "ld": "6+",
      "oc": "1"
    },
    "invuln": "5+",
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "4+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Mork\u2019s Teeth",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "6",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Precision",
            "Twin-linked"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Infiltrators",
        "Leader",
        "Lone Operative",
        "Stealth"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Red Skull Kommandos",
        "Kunnin\u2019 Infiltrator"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Boss Snikrot \u2013 EPIC HERO",
    "leaderText": "Can be attached to Kommandos.",
    "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Smoke",
      "Epic Hero",
      "Boss Snikrot"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Red Skull Kommandos": "While this model is leading a unit, models in that unit have the Benefit of Cover.",
      "Kunnin\u2019 Infiltrator": "Once per battle, in your Movement phase, instead of making a Normal move with this model\u2019s unit, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models."
    }
  },
  {
    "id": "orks-deffkilla-wartrike",
    "name": "Deffkilla Wartrike",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 80
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "6",
      "sv": "4+",
      "w": "9",
      "ld": "6+",
      "oc": "3"
    },
    "invuln": "5+",
    "baseSize": "150 x 95mm",
    "weapons": {
      "ranged": [
        {
          "name": "Boomstikks",
          "range": "12\"",
          "a": "6",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Assault"
          ]
        },
        {
          "name": "Killa jet \u2013 burna",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        },
        {
          "name": "Killa jet \u2013 cutta",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "9",
          "ap": "-4",
          "d": "D6",
          "keywords": [
            "Melta 2"
          ]
        }
      ],
      "melee": [
        {
          "name": "Snagga klaw",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "10",
          "ap": "-2",
          "d": "2",
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
        "Waaagh!"
      ],
      "other": [
        "Speedboss",
        "Fuel-mixa Grot"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Defkilla Wartrike",
    "leaderText": "Can be attached to Warbikers.",
    "keywords": [
      "Mounted",
      "Character",
      "Warboss",
      "Speed Freeks",
      "Deffkilla Wartrike"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Speedboss": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
      "Fuel-mixa Grot": "Each time this model\u2019s unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this model\u2019s unit."
    }
  },
  {
    "id": "orks-ghazghkull-thraka",
    "name": "Ghazghkull Thraka",
    "role": "character",
    "points": [
      {
        "models": 2,
        "cost": 235
      }
    ],
    "stats": {
      "m": "5\"",
      "t": "6",
      "sv": "2+",
      "w": "10",
      "ld": "6+",
      "oc": "4"
    },
    "invuln": "4+",
    "baseSize": "80mm",
    "weapons": {
      "ranged": [
        {
          "name": "Mork\u2019s Roar",
          "range": "36\"",
          "a": "12",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 4"
          ]
        }
      ],
      "melee": [
        {
          "name": "Gork\u2019s Klaw - strike",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "14",
          "ap": "-3",
          "d": "4",
          "keywords": []
        },
        {
          "name": "Gork\u2019s Klaw - sweep",
          "range": "Melee",
          "a": "12",
          "ws": "2+",
          "s": "8",
          "ap": "-2",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Makari\u2019s stabba",
          "range": "Melee",
          "a": "1",
          "ws": "4+",
          "s": "3",
          "ap": "0",
          "d": "1",
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
        "Waaagh!"
      ],
      "other": [
        "Prophet of Da Great Waaagh!",
        "Ghazghkull\u2019s Waaagh! Banner (Aura)"
      ]
    },
    "composition": {
      "min": 2,
      "max": 2
    },
    "compositionText": "1 Ghazghkull Thraka \u2013 EPIC HERO, 1 Makari",
    "leaderText": "Can be attached to Boyz, Breaka Boyz, Meganobz, Nobz.",
    "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Warboss",
      "Ghazghkull Thraka",
      "Makari"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Prophet of Da Great Waaagh!": "While this unit is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll and add 1 to the Wound roll and if the Waaagh! is active for your army, a Critical Hit is scored on a successful unmodified Hit roll of 5+.",
      "Ghazghkull\u2019s Waaagh! Banner (Aura)": "While a friendly ORKS unit is within 12\" of Makari, if the Waaagh! is active for your army, melee weapons equipped by models in that unit have the [LETHAL HITS] ability."
    }
  },
  {
    "id": "orks-mek",
    "name": "Mek",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 45
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "4",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kustom mega-slugga",
          "range": "12\"",
          "a": "D3",
          "bs": "5+",
          "s": "8",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Blast",
            "Hazardous"
          ]
        }
      ],
      "melee": [
        {
          "name": "Killsaw",
          "range": "Melee",
          "a": "1",
          "ws": "4+",
          "s": "12",
          "ap": "-3",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Wrench",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Mekboy",
        "Mekaniak"
      ]
    },
    "wargearOptions": [
      "This model\u2019s wrench can be replaced with 1 killsaw."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Mek",
    "leaderText": "Can be attached to Boyz, Breaka Boyz, Lootas, Mek Gunz, Nobz, Tankbustas.",
    "keywords": [
      "Infantry",
      "Character",
      "Mek"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Mekboy": "While this model is within 3\" of one or more friendly ORKS VEHICLE units, this model has the Lone Operative ability.",
      "Mekaniak": "At the end of your Movement phase, you can select one friendly ORKS VEHICLE model within 3\" of this model. That VEHICLE model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that VEHICLE model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn."
    }
  },
  {
    "id": "orks-mozrog-skragbad",
    "name": "Mozrog Skragbad",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 145
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "8",
      "sv": "3+",
      "w": "8",
      "ld": "6+",
      "oc": "3"
    },
    "invuln": "4+",
    "baseSize": "80mm",
    "weapons": {
      "ranged": [
        {
          "name": "Thump gun",
          "range": "18\"",
          "a": "D3",
          "bs": "5+",
          "s": "6",
          "ap": "0",
          "d": "2",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Big Chompa\u2019s jaws",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "7",
          "ap": "-2",
          "d": "4",
          "keywords": [
            "Devastating Wounds",
            "Extra Attacks"
          ]
        },
        {
          "name": "Gutrippa",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "7",
          "ap": "-1",
          "d": "3",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 5+",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "One Last Kill",
        "Da Bigger Dey iz..."
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Mozrog Skragbad \u2013 EPIC HERO",
    "leaderText": "Can be attached to Squighog Boyz.",
    "keywords": [
      "Mounted",
      "Character",
      "Beast Snagga",
      "Epic Hero",
      "Warboss",
      "Mozrog Skragbad"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "One Last Kill": "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      "Da Bigger Dey iz...": "Each time this model makes a melee attack that targets a MONSTER or VEHICLE unit, add 1 to the Damage characteristic of that attack. Each time this model makes a melee attack that targets a TITANIC unit, add 2 to the Damage characteristic of that attack instead."
    }
  },
  {
    "id": "orks-painboss",
    "name": "Painboss",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 70
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "4",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "40mm",
    "weapons": {
      "melee": [
        {
          "name": "Beast Snagga klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 5+",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Grot Orderly",
        "Designer\u2019s Note"
      ],
      "other": [
        "Dok\u2019s Toolz",
        "Sawbonez"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 grot orderly."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Painboss",
    "leaderText": "Can be attached to Beast Snagga Boyz.",
    "keywords": [
      "Infantry",
      "Character",
      "Beast Snagga",
      "Painboss"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Dok\u2019s Toolz": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
      "Sawbonez": "At the end of your Movement phase, select one friendly BEAST SNAGGA CHARACTER model within 3\" of this model. That model is healed and regains up to 3 lost wounds. Each model can only be healed once per turn.",
      "Grot Orderly": "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit.",
      "Designer\u2019s Note": "Place a Grot Orderly token next to the unit, removing it once this ability has been used."
    }
  },
  {
    "id": "orks-painboy",
    "name": "Painboy",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 80
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "3",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "melee": [
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        },
        {
          "name": "\u2019Urty syringe",
          "range": "Melee",
          "a": "1",
          "ws": "3+",
          "s": "2",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Anti-Infantry 4+",
            "Extra Attacks",
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
        "Waaagh!"
      ],
      "wargear": [
        "Grot Orderly",
        "Designer\u2019s Note"
      ],
      "other": [
        "Dok\u2019s Toolz",
        "Hold Still and Say \u2018Aargh!\u2019"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 grot orderly."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Painboy",
    "leaderText": "Can be attached to Boyz, Breaka Boyz, Burna Boyz, Lootas, Nobz, Tankbustas.",
    "keywords": [
      "Infantry",
      "Character",
      "Painboy"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Dok\u2019s Toolz": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability.",
      "Hold Still and Say \u2018Aargh!\u2019": "Each time an attack made by this model with its \u2019urty syringe scores a Critical Wound against a unit (excluding VEHICLE units), that unit suffers D6 mortal wounds.",
      "Grot Orderly": "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit.",
      "Designer\u2019s Note": "Place a Grot Orderly token next to the unit, removing it once this ability has been used"
    }
  },
  {
    "id": "orks-warboss",
    "name": "Warboss",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 75
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "6",
      "ld": "6+",
      "oc": "1"
    },
    "invuln": "5+",
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kombi-weapon",
          "range": "24\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Anti-Infantry 4+",
            "Devastating Wounds",
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Twin slugga",
          "range": "12\"",
          "a": "2",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Attack squig",
          "range": "Melee",
          "a": "2",
          "ws": "4+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Extra Attacks"
          ]
        },
        {
          "name": "Big choppa",
          "range": "Melee",
          "a": "5",
          "ws": "2+",
          "s": "8",
          "ap": "-1",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "10",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Might is Right",
        "Da Biggest and da Best"
      ]
    },
    "wargearOptions": [
      "This model\u2019s big choppa can be replaced with 1 power klaw.",
      "This model can be equipped with 1 attack squig."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Warboss",
    "leaderText": "Can be attached to Boyz, Breaka Boyz, Nobz.",
    "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Warboss"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Might is Right": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
      "Da Biggest and da Best": "While the Waaagh! is active for your army, add 4 to the Attacks characteristic of this model\u2019s melee weapons."
    }
  },
  {
    "id": "orks-warboss-in-mega-armour",
    "name": "Warboss in Mega Armour",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 80
      }
    ],
    "stats": {
      "m": "5\"",
      "t": "6",
      "sv": "2+",
      "w": "7",
      "ld": "6+",
      "oc": "1"
    },
    "invuln": "5+",
    "baseSize": "50mm",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "4+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        }
      ],
      "melee": [
        {
          "name": "\u2019Uge choppa",
          "range": "Melee",
          "a": "4",
          "ws": "2+",
          "s": "12",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Might is Right",
        "Dead Brutal"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Warboss in Mega Armour",
    "leaderText": "Can be attached to Meganobz.",
    "keywords": [
      "Infantry",
      "Character",
      "Mega Armour",
      "Warboss",
      "Warboss In Mega Armour"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Might is Right": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll.",
      "Dead Brutal": "While the Waaagh! is active for your army, this model\u2019s \u2019uge choppa has a Damage characteristic of 3."
    }
  },
  {
    "id": "orks-wazdakka-gutsmek",
    "name": "Wazdakka Gutsmek",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 175
      }
    ],
    "stats": {
      "m": "14\"",
      "t": "8",
      "sv": "3+",
      "w": "10",
      "ld": "6+",
      "oc": "3"
    },
    "invuln": "4+",
    "baseSize": "120 x 92mm",
    "weapons": {
      "ranged": [
        {
          "name": "Grabba dragga",
          "range": "12\"",
          "a": "1",
          "bs": "2+",
          "s": "10",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Assault",
            "Precision"
          ]
        },
        {
          "name": "Psyko-gatler",
          "range": "24\"",
          "a": "12",
          "bs": "4+",
          "s": "6",
          "ap": "-2",
          "d": "2",
          "keywords": [
            "Assault",
            "Sustained Hits 1"
          ]
        }
      ],
      "melee": [
        {
          "name": "Fixit\u2019s wrench",
          "range": "Melee",
          "a": "1",
          "ws": "4+",
          "s": "3",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Extra Attacks"
          ]
        },
        {
          "name": "Grabba dragga",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "10",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Lance"
          ]
        },
        {
          "name": "Speeding bulk and flaming exhaust",
          "range": "Melee",
          "a": "6",
          "ws": "2+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Extra Attacks"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3",
        "Deep Strike",
        "Lone Operative"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Throttlerokkit Shokka Engine",
        "Fixit da Grot",
        "Throttlerokkit Shokka Engine"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Wazdakka Gutsmek \u2013 EPIC HERO",
    "keywords": [
      "Mounted",
      "Vehicle",
      "Speed Freeks",
      "Epic Hero",
      "Smoke",
      "Character",
      "Wazdakka Gutsmek"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Fixit da Grot": "At the start of your Command phase, this model regains up to D3 lost wounds.",
      "Throttlerokkit Shokka Engine": "In your Command phase, select one of the abilities in the Throttlerokkit Shokka Engine section (see below). Until the start of your next Command phase, this model has that ability."
    }
  },
  {
    "id": "orks-weirdboy",
    "name": "Weirdboy",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 65
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "4",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "\u2019Eadbanger",
          "range": "24\"",
          "a": "1",
          "bs": "4+",
          "s": "6",
          "ap": "-3",
          "d": "1",
          "keywords": [
            "Precision",
            "Psychic"
          ]
        }
      ],
      "melee": [
        {
          "name": "Weirdboy staff",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "8",
          "ap": "-1",
          "d": "D3",
          "keywords": [
            "Psychic"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Waaagh! Energy",
        "Da Jump (Psychic)"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Weirdboy",
    "leaderText": "Can be attached to Boyz, Breaka Boyz.",
    "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Weirdboy"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Waaagh! Energy": "While this model is leading a unit, add 1 to the Strength and Damage characteristics of this model\u2019s \u2019Eadbanger weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability.",
      "Da Jump (Psychic)": "Once per turn, at the end of your Movement phase, one WEIRDBOY from your army can use this ability. If it does, roll one D6: on a 1, that WEIRDBOY\u2019s unit suffers D6 mortal wounds; on a 2+, remove this WEIRDBOY\u2019s unit from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models."
    }
  },
  {
    "id": "orks-wurrboy",
    "name": "Wurrboy",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 60
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "4",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Eyez of Mork",
          "range": "18\"",
          "a": "D6",
          "bs": "5+",
          "s": "8",
          "ap": "-3",
          "d": "2",
          "keywords": [
            "Psychic"
          ]
        }
      ],
      "melee": [
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3",
        "Feel No Pain 6+",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Unstable Oracle",
        "Roar of Mork (Psychic)"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Wurrboy",
    "leaderText": "Can be attached to Beast Snagga Boyz.",
    "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Beast Snagga",
      "Wurrboy"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Unstable Oracle": "While this model is leading a unit, add 2 to the Attacks characteristic of this model\u2019s Eyez of Mork weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability.",
      "Roar of Mork (Psychic)": "In your opponent\u2019s Command phase, you can select one enemy unit within 18\" of and visible to this PSYKER and roll one D6: on a 1, this PSYKER\u2019s unit suffers D3 mortal wounds; on a 2+, until the start of your opponent\u2019s next Command phase, that enemy unit is confrazzled. While a unit is confrazzled, each time a Battle-shock or Leadership test is taken for it, subtract 2 from that test."
    }
  },
  {
    "id": "orks-zodgrod-wortsnagga",
    "name": "Zodgrod Wortsnagga",
    "role": "character",
    "points": [
      {
        "models": 1,
        "cost": 90
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "5",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "50mm",
    "weapons": {
      "ranged": [
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Anti-Monster 4+",
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Da Grabzappa",
          "range": "Melee",
          "a": "5",
          "ws": "2+",
          "s": "7",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 6+",
        "Leader"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Super Runts",
        "Special Dose"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Zodgrod Wortsnagga \u2013 EPIC HERO",
    "leaderText": "Can be attached to Gretchin.",
    "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Zodgrod Wortsnagga"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Super Runts": "While this model is leading a unit:",
      "Special Dose": "While the Waaagh! is active for your army, add 6\" to the Move characteristic of models in this model\u2019s unit."
    }
  },
  {
    "id": "orks-beast-snagga-boyz",
    "name": "Beast Snagga Boyz",
    "role": "battleline",
    "points": [
      {
        "models": 10,
        "cost": 95
      },
      {
        "models": 20,
        "cost": 190
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "1",
      "ld": "7+",
      "oc": "2"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Thump gun",
          "range": "18\"",
          "a": "D3",
          "bs": "5+",
          "s": "6",
          "ap": "0",
          "d": "2",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Power snappa",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 6+"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Monster Hunters"
      ]
    },
    "wargearOptions": [
      "For every 10 models in this unit, 1 Beast Snagga Boy\u2019s slugga and choppa can be replaced with 1 thump gun and 1 close combat weapon."
    ],
    "composition": {
      "min": 10,
      "max": 20
    },
    "compositionText": "1 Beast Snagga Nob, 9-19 Beast Snagga Boyz",
    "keywords": [
      "Infantry",
      "Mob",
      "Battleline",
      "Beast Snagga",
      "Beast Snagga Boyz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Monster Hunters": "Each time a model in this unit makes an attack that targets a MONSTER or VEHICLE unit, you can re-roll the Hit roll."
    }
  },
  {
    "id": "orks-boyz",
    "name": "Boyz",
    "role": "battleline",
    "points": [
      {
        "models": 10,
        "cost": 80
      },
      {
        "models": 20,
        "cost": 170
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "1",
      "ld": "7+",
      "oc": "2"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Kombi-weapon",
          "range": "24\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Anti-Infantry 4+",
            "Devastating Wounds",
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Shoota",
          "range": "18\"",
          "a": "2",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Big choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "4",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Get Da Good Bitz"
      ]
    },
    "wargearOptions": [
      "The Boss Nob\u2019s big choppa can be replaced with 1 power klaw.",
      "The Boss Nob\u2019s big choppa and slugga can be replaced with 1 kombi-weapon and 1 close combat weapon.",
      "Any number of Boyz can each have their slugga and choppa replaced with 1 shoota and 1 close combat weapon.",
      "For every 10 models in this unit, 1 Boy\u2019s choppa and slugga can be replaced with one of the following:",
      "1 big shoota and 1 close combat weapon",
      "1 rokkit launcha and 1 close combat weapon"
    ],
    "composition": {
      "min": 10,
      "max": 20
    },
    "compositionText": "1 Boss Nob, 9-19 Boyz",
    "keywords": [
      "Infantry",
      "Battleline",
      "Mob",
      "Grenades",
      "Boyz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Get Da Good Bitz": "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
    }
  },
  {
    "id": "orks-trukk",
    "name": "Trukk",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 70
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "8",
      "sv": "4+",
      "w": "10",
      "ld": "7+",
      "oc": "2"
    },
    "invuln": "6+",
    "baseSize": "Use model",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        }
      ],
      "melee": [
        {
          "name": "Spiked wheels",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "6",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Wreckin\u2019 ball",
          "range": "Melee",
          "a": "1",
          "ws": "4+",
          "s": "10",
          "ap": "0",
          "d": "D6",
          "keywords": [
            "Extra Attacks"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3",
        "Firing Deck 12"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Grot Riggers"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 wreckin\u2019 ball."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Trukk",
    "keywords": [
      "Vehicle",
      "Transport",
      "Dedicated Transport",
      "Trukk"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Grot Riggers": "At the start of your Command phase, this model regains 1 lost wound."
    }
  },
  {
    "id": "orks-big-ed-bossbunka",
    "name": "Big\u2019ed Bossbunka",
    "role": "fortification",
    "points": [
      {
        "models": 1,
        "cost": 135
      }
    ],
    "stats": {
      "m": "-",
      "t": "10",
      "sv": "3+",
      "w": "12",
      "ld": "7+",
      "oc": "0"
    },
    "baseSize": "Use model",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Gaze of Gork \u2013 glare SUSTAINED HITS D3",
          "range": "24\"",
          "a": "D6",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Gaze of Gork \u2013 squint SUSTAINED HITS D3",
          "range": "18\"",
          "a": "1",
          "bs": "5+",
          "s": "12",
          "ap": "-4",
          "d": "3",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3",
        "Firing Deck 11"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Ramshackle Cover",
        "Shoutin\u2019 Pole (Aura)",
        "Fortification"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with up to 3 additional big shootas."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Big\u2019ed Bossbunka",
    "keywords": [
      "Fortification",
      "Vehicle",
      "Transport",
      "Big\u2019ed Bossbunka"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Ramshackle Cover": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this FORTIFICATION, that model has the Benefit of Cover against that attack.",
      "Shoutin\u2019 Pole (Aura)": "While a friendly ORKS unit is within 6\" of this FORTIFICATION, improve the Leadership characteristic of models in that unit by 1.",
      "Fortification": "While an enemy unit is only within Engagement Range of one or more FORTIFICATIONS from your army:"
    }
  },
  {
    "id": "orks-battlewagon",
    "name": "Battlewagon",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 160
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "10",
      "sv": "3+",
      "w": "16",
      "ld": "7+",
      "oc": "5"
    },
    "invuln": "6+",
    "baseSize": "Use model",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Kannon \u2013 frag",
          "range": "36\"",
          "a": "D6+3",
          "bs": "5+",
          "s": "6",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Kannon \u2013 shell",
          "range": "36\"",
          "a": "1",
          "bs": "5+",
          "s": "10",
          "ap": "-2",
          "d": "D6",
          "keywords": []
        },
        {
          "name": "Killkannon",
          "range": "24\"",
          "a": "D6+1",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Lobba",
          "range": "48\"",
          "a": "D6",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Blast",
            "Indirect Fire"
          ]
        },
        {
          "name": "Zzap gun",
          "range": "36\"",
          "a": "1",
          "bs": "5+",
          "s": "D6+6",
          "ap": "-3",
          "d": "5",
          "keywords": [
            "Anti-Vehicle 4+"
          ]
        }
      ],
      "melee": [
        {
          "name": "Deff rolla",
          "range": "Melee",
          "a": "6",
          "ws": "3+",
          "s": "9",
          "ap": "-1",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Grabbin\u2019 klaw",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "8",
          "ap": "-2",
          "d": "2",
          "keywords": [
            "Extra Attacks"
          ]
        },
        {
          "name": "Tracks and wheels",
          "range": "Melee",
          "a": "6",
          "ws": "4+",
          "s": "8",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Wreckin\u2019 ball",
          "range": "Melee",
          "a": "1",
          "ws": "4+",
          "s": "10",
          "ap": "0",
          "d": "D6",
          "keywords": [
            "Extra Attacks"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D6",
        "Firing Deck 11"
      ],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "\u2019Ard Case"
      ],
      "other": [
        "Ramshackle but Rugged"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with one of the following:",
      "1 kannon",
      "1 killkannon",
      "1 zzap gun",
      "This model can be equipped with:",
      "1 lobba",
      "This model can be equipped with up to 4 big shootas.",
      "This model\u2019s tracks and wheels can be replaced with 1 deff rolla.",
      "This model can be equipped with any of the following:",
      "1 \u2019ard case",
      "1 grabbin\u2019 klaw",
      "1 wreckin\u2019 ball"
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Battlewagon",
    "keywords": [
      "Vehicle",
      "Transport",
      "Battlewagon"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Ramshackle but Rugged": "Each time an attack is allocated to this model, worsen the Armour Penetration characteristic of that attack by 1.",
      "\u2019Ard Case": "Add 2 to the bearer\u2019s Toughness characteristic, but it no longer has the Firing Deck ability."
    }
  },
  {
    "id": "orks-blitza-bommer",
    "name": "Blitza-bommer",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 115
      }
    ],
    "stats": {
      "m": "20+\"",
      "t": "9",
      "sv": "3+",
      "w": "12",
      "ld": "7+",
      "oc": "0"
    },
    "invuln": "6+",
    "baseSize": "120 x 92mm flying base",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Twin supa-shoota",
          "range": "36\"",
          "a": "4",
          "bs": "5+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Sustained Hits 1",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Armoured hull",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "6",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Boom Bomb"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Blitza-bommer",
    "keywords": [
      "Vehicle",
      "Aircraft",
      "Fly",
      "Speed Freeks",
      "Blitza-bommer"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Boom Bomb": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6: on a 4+, that unit suffers D6 mortal wounds."
    }
  },
  {
    "id": "orks-boomdakka-snazzwagon",
    "name": "Boomdakka Snazzwagon",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 70
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "7",
      "sv": "4+",
      "w": "9",
      "ld": "7+",
      "oc": "3"
    },
    "invuln": "6+",
    "baseSize": "150 x 95mm",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Grot blasta",
          "range": "12\"",
          "a": "1",
          "bs": "4+",
          "s": "3",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Mek speshul",
          "range": "24\"",
          "a": "12",
          "bs": "5+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Assault",
            "Rapid Fire 4",
            "Sustained Hits 1"
          ]
        }
      ],
      "melee": [
        {
          "name": "Spiked wheels",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Dust Trails (Aura)"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Boomdakka Snazzwagon",
    "keywords": [
      "Vehicle",
      "Grenades",
      "Speed Freeks",
      "Boomdakka Snazzwagon"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Dust Trails (Aura)": "While an enemy unit (excluding MONSTERS and VEHICLES) is within 6\" of this model, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
    }
  },
  {
    "id": "orks-breaka-boyz",
    "name": "Breaka Boyz",
    "role": "infantry",
    "points": [
      {
        "models": 6,
        "cost": 140
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "2",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mmNob on 40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Rokkit pistol",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Knucklebustas",
          "range": "Melee",
          "a": "5",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+",
            "Twin-linked"
          ]
        },
        {
          "name": "Smash hammer",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "6",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        },
        {
          "name": "Tankhammer",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "6",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+",
            "Devastating Wounds",
            "Hazardous"
          ]
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Trophy Hunters",
        "Bomb Squigs",
        "Designer\u2019s Note"
      ]
    },
    "wargearOptions": [
      "The Boss Nob\u2019s smash hammer can be replaced with 1 rokkit pistol.",
      "One Breaka Boy\u2019s smash hammer can be replaced with 1 knucklebustas.",
      "One Breaka Boy\u2019s smash hammer can be replaced with 1 tankhammer."
    ],
    "composition": {
      "min": 6,
      "max": 6
    },
    "compositionText": "1 Boss Nob, 5 Breaka Boyz",
    "keywords": [
      "Infantry",
      "Grenades",
      "Breaka Boyz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Trophy Hunters": "Each time this unit declares a charge, you can re-roll the Charge roll.",
      "Bomb Squigs": "Once per battle, for each bomb squig this unit has, after this unit ends a Normal move, you can use one Bomb Squig. If you do, select one enemy unit within 12\" and visible to this unit and roll one D6: on a 3+, that enemy unit suffers D3 mortal wounds.",
      "Designer\u2019s Note": "Place two Bomb Squig tokens next to the unit, removing one each time this unit uses this ability."
    }
  },
  {
    "id": "orks-burna-boyz",
    "name": "Burna Boyz",
    "role": "infantry",
    "points": [
      {
        "models": 5,
        "cost": 60
      },
      {
        "models": 10,
        "cost": 120
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "1",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Burna",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        },
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Cuttin\u2019 flames",
          "range": "Melee",
          "a": "2",
          "ws": "4+",
          "s": "4",
          "ap": "-2",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Pyromaniaks"
      ]
    },
    "wargearOptions": [
      "Any number of Spanners can each have their big shoota replaced with one of the following:",
      "1 kustom mega-blasta",
      "1 rokkit launcha"
    ],
    "composition": {
      "min": 5,
      "max": 10
    },
    "compositionText": "1-2 Spanners, 4-8 Burna Boyz, 1 Spanner and 4 Burna Boyz, 2 Spanners and 8 Burna Boyz",
    "keywords": [
      "Infantry",
      "Burna Boyz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Pyromaniaks": "Each time a model in this unit makes a ranged attack with a burna that targets an enemy unit within 6\", re-roll a Wound roll of 1. If the target of that attack is also within range of an objective marker, you can re-roll the Wound roll instead."
    }
  },
  {
    "id": "orks-burna-bommer",
    "name": "Burna-bommer",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 125
      }
    ],
    "stats": {
      "m": "20+\"",
      "t": "9",
      "sv": "3+",
      "w": "12",
      "ld": "7+",
      "oc": "0"
    },
    "invuln": "6+",
    "baseSize": "120 x 92mm flying base",
    "weapons": {
      "ranged": [
        {
          "name": "Twin big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Twin-linked"
          ]
        },
        {
          "name": "Twin supa-shoota",
          "range": "36\"",
          "a": "4",
          "bs": "5+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Sustained Hits 1",
            "Twin-linked"
          ]
        },
        {
          "name": "Skorcha missile rack",
          "range": "36\"",
          "a": "2D6",
          "bs": "5+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Blast",
            "Ignores Cover"
          ]
        }
      ],
      "melee": [
        {
          "name": "Armoured hull",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "6",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Burna Bomb"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 skorcha missile rack."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Burna-bommer",
    "keywords": [
      "Vehicle",
      "Fly",
      "Aircraft",
      "Speed Freeks",
      "Burna-bommer"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Burna Bomb": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover. In addition, roll one D6 for each model in that unit: for each 6, that unit suffers 1 mortal wound."
    }
  },
  {
    "id": "orks-dakkajet",
    "name": "Dakkajet",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 135
      }
    ],
    "stats": {
      "m": "20+\"",
      "t": "9",
      "sv": "3+",
      "w": "12",
      "ld": "7+",
      "oc": "0"
    },
    "invuln": "6+",
    "baseSize": "120 x 92mm flying base",
    "weapons": {
      "ranged": [
        {
          "name": "Twin supa-shoota",
          "range": "36\"",
          "a": "4",
          "bs": "5+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Sustained Hits 1",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Armoured hull",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "6",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Dakkastorm"
      ]
    },
    "wargearOptions": [
      "This model can be equipped with 1 additional twin supa-shoota."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Dakkajet",
    "keywords": [
      "Vehicle",
      "Fly",
      "Aircraft",
      "Speed Freeks",
      "Dakkajet"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Dakkastorm": "Each time this model makes a ranged attack, every successful Hit roll scores a Critical Hit."
    }
  },
  {
    "id": "orks-deff-dread",
    "name": "Deff Dread",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 120
      }
    ],
    "stats": {
      "m": "8\"",
      "t": "9",
      "sv": "2+",
      "w": "8",
      "ld": "7+",
      "oc": "3"
    },
    "invuln": "6+",
    "baseSize": "60mm",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Skorcha",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        }
      ],
      "melee": [
        {
          "name": "Dread klaw DEAD CHOPPY",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "12",
          "ap": "-2",
          "d": "3",
          "keywords": []
        },
        {
          "name": "Stompy feet",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Piston-driven Brutality"
      ]
    },
    "wargearOptions": [
      "This model\u2019s big shootas can each be replaced with one of the following:",
      "1 dread klaw",
      "1 kustom-mega blasta",
      "1 rokkit launcha",
      "1 skorcha",
      "This model\u2019s dread klaws can each be replaced with one of the following:",
      "1 big shoota",
      "1 kustom-mega blasta",
      "1 rokkit launcha",
      "1 skorcha"
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Deff Dread",
    "keywords": [
      "Vehicle",
      "Walker",
      "Deff Dread"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Piston-driven Brutality": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds."
    }
  },
  {
    "id": "orks-deffkoptas",
    "name": "Deffkoptas",
    "role": "vehicle",
    "points": [
      {
        "models": 3,
        "cost": 80
      },
      {
        "models": 6,
        "cost": 160
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "6",
      "sv": "4+",
      "w": "4",
      "ld": "7+",
      "oc": "2"
    },
    "invuln": "6+",
    "baseSize": "75 x 42mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kopta rokkits",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast",
            "Twin-linked"
          ]
        },
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Spinnin\u2019 blades",
          "range": "Melee",
          "a": "6",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deep Strike"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Deff from Above"
      ]
    },
    "wargearOptions": [
      "For every 3 models in this unit, 1 Deffkopta can have its kopta rokkits replaced with 1 kustom mega-blasta."
    ],
    "composition": {
      "min": 3,
      "max": 6
    },
    "compositionText": "3-6 Deffkoptas",
    "keywords": [
      "Vehicle",
      "Fly",
      "Grenades",
      "Speed Freeks",
      "Deffkoptas"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Deff from Above": "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound."
    }
  },
  {
    "id": "orks-flash-gitz",
    "name": "Flash Gitz",
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
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "2",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Snazzgun",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "6",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Heavy",
            "Sustained Hits 1"
          ]
        }
      ],
      "melee": [
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Ammo Runt",
        "Designer\u2019s Note"
      ],
      "other": [
        "Gun-crazy Show-offs"
      ]
    },
    "wargearOptions": [
      "This unit can be equipped with 1 ammo runt."
    ],
    "composition": {
      "min": 5,
      "max": 10
    },
    "compositionText": "1 Kaptin, 4-9 Flash Gitz",
    "keywords": [
      "Infantry",
      "Grenades",
      "Flash Gitz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Gun-crazy Show-offs": "Each time a model in this unit targets the closest eligible target with its snazzgun, until the end of the phase, that weapon has an Attacks characteristic of 4.",
      "Ammo Runt": "Once per battle, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability.",
      "Designer\u2019s Note": "Place an Ammo Runt token next to the unit, removing it after this ability has been used."
    }
  },
  {
    "id": "orks-gorkanaut",
    "name": "Gorkanaut",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 265
      }
    ],
    "stats": {
      "m": "8\"",
      "t": "12",
      "sv": "3+",
      "w": "20",
      "ld": "7+",
      "oc": "8"
    },
    "invuln": "6+",
    "baseSize": "170 x 109mm",
    "weapons": {
      "ranged": [
        {
          "name": "Deffstorm mega-shoota",
          "range": "36\"",
          "a": "20",
          "bs": "5+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Rapid Fire 10"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Skorcha",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        },
        {
          "name": "Twin big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Klaw of Gork \u2013 strike",
          "range": "Melee",
          "a": "5",
          "ws": "3+",
          "s": "18",
          "ap": "-3",
          "d": "6",
          "keywords": []
        },
        {
          "name": "Klaw of Gork \u2013 sweep",
          "range": "Melee",
          "a": "15",
          "ws": "3+",
          "s": "8",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D6"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Clankin\u2019 Forward",
        "Big an\u2019 Stompy"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Gorkanaut",
    "keywords": [
      "Vehicle",
      "Titanic",
      "Towering",
      "Walker",
      "Transport",
      "Gorkanaut"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Clankin\u2019 Forward": "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding MONSTER and VEHICLE models) and terrain features that are 4\" or less in height as if they were not there.",
      "Big an\u2019 Stompy": "Each time this model makes a melee attack, if the Waaagh! is active for your army, add 1 to the Hit roll."
    }
  },
  {
    "id": "orks-gretchin",
    "name": "Gretchin",
    "role": "infantry",
    "points": [
      {
        "models": 11,
        "cost": 40
      },
      {
        "models": 22,
        "cost": 80
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "2",
      "sv": "7+",
      "w": "1",
      "ld": "8+",
      "oc": "2"
    },
    "baseSize": "25mm",
    "weapons": {
      "ranged": [
        {
          "name": "Grot blasta",
          "range": "12\"",
          "a": "1",
          "bs": "4+",
          "s": "3",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "1",
          "ws": "5+",
          "s": "2",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Runtherd tools",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Runtherd",
        "Thievin\u2019 Scavengers"
      ]
    },
    "composition": {
      "min": 11,
      "max": 22
    },
    "compositionText": "1 Runtherd and 10 Gretchin, 2 Runtherds and 20 Gretchin",
    "keywords": [
      "Infantry",
      "Grots",
      "Gretchin"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Runtherd": "While this unit contains one or more Gretchin models, each time an attack targets this unit, Runtherd models in this unit have a Toughness characteristic of 2.",
      "Thievin\u2019 Scavengers": "At the start of your Movement phase, roll one D6 for each objective marker you control that has one or more units from your army with this ability within range of it (excluding Battle-shocked units). If one or more of those rolls is a 4+, you gain 1CP."
    }
  },
  {
    "id": "orks-hunta-rig",
    "name": "Hunta Rig",
    "role": "monster",
    "points": [
      {
        "models": 1,
        "cost": 135
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "10",
      "sv": "3+",
      "w": "16",
      "ld": "7+",
      "oc": "5"
    },
    "baseSize": "170 x 109mm",
    "weapons": {
      "ranged": [
        {
          "name": "\u2019Eavy lobba",
          "range": "48\"",
          "a": "D6",
          "bs": "5+",
          "s": "6",
          "ap": "0",
          "d": "2",
          "keywords": [
            "Blast",
            "Indirect Fire"
          ]
        },
        {
          "name": "Stikka kannon SNAGGED",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "12",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Anti-Monster 2+",
            "Anti-Vehicle 2+"
          ]
        }
      ],
      "melee": [
        {
          "name": "Butcha boyz",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Extra Attacks",
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        },
        {
          "name": "Savage horns and hooves",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "8",
          "ap": "-1",
          "d": "3",
          "keywords": [
            "Extra Attacks",
            "Lance"
          ]
        },
        {
          "name": "Saw blades",
          "range": "Melee",
          "a": "6",
          "ws": "3+",
          "s": "10",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D6",
        "Feel No Pain 6+",
        "Firing Deck 11"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "On Da Hunt"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Hunta Rig",
    "keywords": [
      "Monster",
      "Transport",
      "Beast Snagga",
      "Hunta Rig"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "On Da Hunt": "For each model embarked within this TRANSPORT, add 1 to the Attacks characteristic of this model\u2019s butcha boyz weapon (to a maximum of +6). The Attacks characteristic of that weapon can be modified even though it is an Extra Attacks weapon."
    }
  },
  {
    "id": "orks-kill-rig",
    "name": "Kill Rig",
    "role": "monster",
    "points": [
      {
        "models": 1,
        "cost": 155
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "10",
      "sv": "3+",
      "w": "16",
      "ld": "7+",
      "oc": "5"
    },
    "baseSize": "170 x 109mm",
    "weapons": {
      "ranged": [
        {
          "name": "\u2019Eavy lobba",
          "range": "48\"",
          "a": "D6",
          "bs": "5+",
          "s": "6",
          "ap": "0",
          "d": "2",
          "keywords": [
            "Blast",
            "Indirect Fire"
          ]
        },
        {
          "name": "Stikka kannon SNAGGED",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "12",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Anti-Monster 2+",
            "Anti-Vehicle 2+"
          ]
        },
        {
          "name": "Wurrtower",
          "range": "24\"",
          "a": "D3",
          "bs": "N/A",
          "s": "12",
          "ap": "-3",
          "d": "D6",
          "keywords": [
            "Hazardous",
            "Psychic",
            "Torrent"
          ]
        }
      ],
      "melee": [
        {
          "name": "Butcha boyz",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+",
            "Extra Attacks"
          ]
        },
        {
          "name": "Savage horns and hooves",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "8",
          "ap": "-1",
          "d": "3",
          "keywords": [
            "Extra Attacks",
            "Lance"
          ]
        },
        {
          "name": "Saw blades",
          "range": "Melee",
          "a": "6",
          "ws": "3+",
          "s": "10",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D6",
        "Feel No Pain 6+"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Spirit of Gork (Psychic)"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Kill Rig",
    "keywords": [
      "Monster",
      "Transport",
      "Psyker",
      "Beast Snagga",
      "Kill Rig"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Spirit of Gork (Psychic)": "At the start of the Fight phase, you can select one friendly Orks unit within 12\" of this model and roll one D6: on a 1, this model suffers D3 mortal wounds; on a 2-5, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit; on a 6, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit and those weapons have the [LETHAL HITS] ability."
    }
  },
  {
    "id": "orks-killa-kans",
    "name": "Killa Kans",
    "role": "vehicle",
    "points": [
      {
        "models": 3,
        "cost": 125
      },
      {
        "models": 6,
        "cost": 250
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "6",
      "sv": "3+",
      "w": "5",
      "ld": "8+",
      "oc": "2"
    },
    "invuln": "6+",
    "baseSize": "60mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kan shoota",
          "range": "36\"",
          "a": "3",
          "bs": "4+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Devastating Wounds",
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Grotzooka",
          "range": "18\"",
          "a": "D3+3",
          "bs": "4+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Blast",
            "Ignores Cover"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "4+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Skorcha",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        }
      ],
      "melee": [
        {
          "name": "Kan klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "8",
          "ap": "-2",
          "d": "3",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Shooty Power Trip"
      ]
    },
    "wargearOptions": [
      "Each Killa Kan\u2019s Kan shoota can be replaced with one of the following:",
      "1 grotzooka",
      "1 rokkit launcha",
      "1 skorcha"
    ],
    "composition": {
      "min": 3,
      "max": 6
    },
    "compositionText": "3-6 Killa Kans",
    "keywords": [
      "Vehicle",
      "Walker",
      "Grots",
      "Killa Kans"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Shooty Power Trip": "Each time this unit is selected to shoot, you can roll one D6:"
    }
  },
  {
    "id": "orks-kommandos",
    "name": "Kommandos",
    "role": "infantry",
    "points": [
      {
        "models": 10,
        "cost": 120
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "1",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Burna",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        },
        {
          "name": "Speshul Kommando shoota",
          "range": "18\"",
          "a": "4",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Big choppa",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Breacha ram",
          "range": "Melee",
          "a": "2",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "4",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
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
        "Waaagh!"
      ],
      "wargear": [
        "Distraction Grot",
        "Designer\u2019s Note",
        "Bomb Squigs",
        "Designer\u2019s Note"
      ],
      "other": [
        "Patrol Squad",
        "Sneaky Surprise"
      ]
    },
    "wargearOptions": [
      "The Boss Nob\u2019s choppa can be replaced with one of the following:",
      "1 big choppa",
      "1 power klaw",
      "Up to 2 Kommandos can each have their slugga and choppa replaced with 1 speshul Kommando shoota and 1 close combat weapon.",
      "1 Kommando\u2019s slugga and choppa can be replaced with 1 breacha ram.",
      "1 Kommando\u2019s slugga and choppa can be replaced with 1 burna and 1 close combat weapon.",
      "1 Kommando\u2019s slugga and choppa can be replaced with 1 rokkit launcha and 1 close combat weapon.",
      "This unit can be equipped with 1 bomb squig.",
      "This unit can be equipped with 1 distraction grot.",
      "PATROL SQUAD",
      "At the start of the Declare Battle Formations step this unit can be split into two units, each containing five models.",
      "(when splitting a unit in this way, make a note of which models form each of the two new units. If you are splitting a unit that is equipped with 1 bomb squig and/or 1 distraction grot, only one of the new units can use that ability during the battle \u2013 make a note of which of the new units this will be)."
    ],
    "composition": {
      "min": 10,
      "max": 10
    },
    "compositionText": "1 Boss Nob, 9 Kommandos",
    "keywords": [
      "Infantry",
      "Grenades",
      "Smoke",
      "Kommandos"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Sneaky Surprise": "Enemy units cannot use the Fire Overwatch Stratagem to shoot at this unit.",
      "Distraction Grot": "Once per battle, in your opponent\u2019s Shooting phase, before making a saving throw for a model in this unit, it can deploy the distraction grot. If it does, until the end of the phase, models in this unit have a 5+ invulnerable save.",
      "Designer\u2019s Note": "Place a Bomb Squig token next to the unit, removing it when this unit uses this ability.",
      "Bomb Squigs": "Once per battle, for each bomb squig this unit has, after this unit ends a Normal move, you can use one Bomb Squig. If you do, select one enemy unit within 12\" and visible to this unit and roll one D6: on a 3+, that enemy unit suffers D3 mortal wounds."
    }
  },
  {
    "id": "orks-kustom-boosta-blasta",
    "name": "Kustom Boosta-blasta",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 70
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "7",
      "sv": "4+",
      "w": "9",
      "ld": "7+",
      "oc": "3"
    },
    "invuln": "6+",
    "baseSize": "150 x 95mm",
    "weapons": {
      "ranged": [
        {
          "name": "Burna exhausts",
          "range": "6\"",
          "a": "2D6",
          "bs": "N/A",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent",
            "Twin-linked"
          ]
        },
        {
          "name": "Grot blasta",
          "range": "12\"",
          "a": "1",
          "bs": "4+",
          "s": "3",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Rivet kannon",
          "range": "36\"",
          "a": "6",
          "bs": "5+",
          "s": "8",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Assault",
            "Rapid Fire 3"
          ]
        }
      ],
      "melee": [
        {
          "name": "Spiked ram",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Rivetin\u2019 Dakka"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Kustom Boosta-blasta",
    "keywords": [
      "Vehicle",
      "Grenades",
      "Speed Freeks",
      "Kustom Boosta-blasta"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Rivetin\u2019 Dakka": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with a rivet kannon. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes a ranged attack, subtract 1 from the Hit roll."
    }
  },
  {
    "id": "orks-lootas",
    "name": "Lootas",
    "role": "infantry",
    "points": [
      {
        "models": 5,
        "cost": 50
      },
      {
        "models": 10,
        "cost": 100
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "5+",
      "w": "1",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Deffgun",
          "range": "48\"",
          "a": "2",
          "bs": "6+",
          "s": "8",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Heavy",
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Dat\u2019s Our Loot!"
      ]
    },
    "wargearOptions": [
      "Any number of Spanners can each have their big shoota replaced with one of the following:",
      "1 kustom mega-blasta",
      "1 rokkit launcha"
    ],
    "composition": {
      "min": 5,
      "max": 10
    },
    "compositionText": "1-2 Spanners, 4-8 Lootas, 1 Spanner and 4 Lootas, 2 Spanners and 8 Lootas",
    "keywords": [
      "Infantry",
      "Lootas"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Dat\u2019s Our Loot!": "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If that attack targets a unit that is within range of an objective marker, you can re-roll the Hit roll instead."
    }
  },
  {
    "id": "orks-meganobz",
    "name": "Meganobz",
    "role": "infantry",
    "points": [
      {
        "models": 2,
        "cost": 65
      },
      {
        "models": 3,
        "cost": 95
      },
      {
        "models": 5,
        "cost": 160
      },
      {
        "models": 6,
        "cost": 190
      }
    ],
    "stats": {
      "m": "5\"",
      "t": "6",
      "sv": "2+",
      "w": "3",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kombi-weapon",
          "range": "24\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Anti-Infantry 4+",
            "Devastating Wounds",
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Kustom shoota",
          "range": "18\"",
          "a": "4",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        }
      ],
      "melee": [
        {
          "name": "Killsaw",
          "range": "Melee",
          "a": "2",
          "ws": "4+",
          "s": "12",
          "ap": "-3",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Twin killsaw",
          "range": "Melee",
          "a": "2",
          "ws": "4+",
          "s": "12",
          "ap": "-3",
          "d": "2",
          "keywords": [
            "Twin-linked"
          ]
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Krumpin\u2019 Time"
      ]
    },
    "wargearOptions": [
      "Any number of models can each have their kustom shoota and power klaw replaced with one of the following:",
      "1 kombi-weapon and 1 power klaw",
      "1 kombi-weapon and 1 killsaw",
      "1 kustom shoota and 1 killsaw",
      "1 killsaw and 1 power klaw",
      "1 twin killsaw"
    ],
    "composition": {
      "min": 2,
      "max": 6
    },
    "compositionText": "2-6 Meganobz",
    "keywords": [
      "Infantry",
      "Grenades",
      "Mega Armour",
      "Meganobz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Krumpin\u2019 Time": "While the Waaagh! is active for your army, models in this unit have the Feel No Pain 5+ ability."
    }
  },
  {
    "id": "orks-megatrakk-scrapjet",
    "name": "Megatrakk Scrapjet",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 75
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "7",
      "sv": "4+",
      "w": "9",
      "ld": "7+",
      "oc": "3"
    },
    "invuln": "6+",
    "baseSize": "150 x 95mm",
    "weapons": {
      "ranged": [
        {
          "name": "Rokkit kannon",
          "range": "24\"",
          "a": "D6+1",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Twin big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Twin-linked"
          ]
        },
        {
          "name": "Wing missiles",
          "range": "24\"",
          "a": "1",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": []
        }
      ],
      "melee": [
        {
          "name": "Nose drill",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "8",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Drill Through"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Megatrakk Scrapjet",
    "keywords": [
      "Vehicle",
      "Speed Freeks",
      "Megatrakk Scrapjet"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Drill Through": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds."
    }
  },
  {
    "id": "orks-mek-gunz",
    "name": "Mek Gunz",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 50
      },
      {
        "models": 2,
        "cost": 100
      },
      {
        "models": 3,
        "cost": 150
      }
    ],
    "stats": {
      "m": "3\"",
      "t": "5",
      "sv": "5+",
      "w": "6",
      "ld": "8+",
      "oc": "2"
    },
    "invuln": "6+",
    "baseSize": "Use model",
    "weapons": {
      "ranged": [
        {
          "name": "Bubblechukka \u2013 big bubble BUBBLECHUKKA",
          "range": "48\"",
          "a": "2D6",
          "bs": "4+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Bubblechukka \u2013 wobbly bubble BUBBLECHUKKA",
          "range": "48\"",
          "a": "D6",
          "bs": "4+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Bubblechukka \u2013 dense bubble BUBBLECHUKKA",
          "range": "48\"",
          "a": "D3",
          "bs": "4+",
          "s": "12",
          "ap": "-3",
          "d": "D6+3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Kustom mega-kannon",
          "range": "36\"",
          "a": "D6",
          "bs": "4+",
          "s": "12",
          "ap": "-1",
          "d": "D6",
          "keywords": [
            "Blast",
            "Hazardous"
          ]
        },
        {
          "name": "Smasha gun",
          "range": "48\"",
          "a": "D3+1",
          "bs": "4+",
          "s": "9",
          "ap": "-3",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Traktor kannon",
          "range": "48\"",
          "a": "1",
          "bs": "4+",
          "s": "10",
          "ap": "-2",
          "d": "D6+1",
          "keywords": [
            "Anti-Fly 2+",
            "Devastating Wounds"
          ]
        }
      ],
      "melee": [
        {
          "name": "Grot crew",
          "range": "Melee",
          "a": "6",
          "ws": "5+",
          "s": "2",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Splat!"
      ]
    },
    "wargearOptions": [
      "Each model\u2019s smasha gun can be replaced with one of the following:",
      "1 bubblechukka",
      "1 kustom mega-kannon",
      "1 traktor kannon"
    ],
    "composition": {
      "min": 1,
      "max": 3
    },
    "compositionText": "1-3 Mek Gunz",
    "keywords": [
      "Vehicle",
      "Grots",
      "Mek Gunz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Splat!": "Each time a model in this unit makes a ranged attack that targets a unit that is at its Starting Strength (excluding MONSTERS and VEHICLES), re-roll a Hit roll of 1."
    }
  },
  {
    "id": "orks-morkanaut",
    "name": "Morkanaut",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 280
      }
    ],
    "stats": {
      "m": "8\"",
      "t": "12",
      "sv": "3+",
      "w": "20",
      "ld": "7+",
      "oc": "8"
    },
    "invuln": "5+",
    "baseSize": "170 x 109mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kustom mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Hazardous"
          ]
        },
        {
          "name": "Kustom mega-zappa",
          "range": "36\"",
          "a": "D6+3",
          "bs": "5+",
          "s": "10",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Blast",
            "Hazardous"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Twin big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Klaw of Mork \u2013 strike",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "18",
          "ap": "-3",
          "d": "6",
          "keywords": []
        },
        {
          "name": "Klaw of Mork \u2013 sweep",
          "range": "Melee",
          "a": "12",
          "ws": "3+",
          "s": "8",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D6"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Clankin\u2019 Forward",
        "Big an\u2019 Shooty"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Morkanaut",
    "keywords": [
      "Vehicle",
      "Titanic",
      "Towering",
      "Transport",
      "Walker",
      "Morkanaut"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Clankin\u2019 Forward": "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding MONSTER and VEHICLE models) and terrain features that are 4\" or less in height as if they were not there.",
      "Big an\u2019 Shooty": "Each time this model makes a ranged attack, if the Waaagh! is active for your army, add 1 to the Hit roll."
    }
  },
  {
    "id": "orks-nobz",
    "name": "Nobz",
    "role": "infantry",
    "points": [
      {
        "models": 5,
        "cost": 105
      },
      {
        "models": 10,
        "cost": 210
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "2",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kombi-weapon",
          "range": "24\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Anti-Infantry 4+",
            "Devastating Wounds",
            "Rapid Fire 1"
          ]
        },
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Big choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Ammo Runt",
        "Designer\u2019s Note"
      ],
      "other": [
        "Da Boss\u2019 Ladz"
      ]
    },
    "wargearOptions": [
      "Any number of models can each have their big choppa replaced with 1 power klaw.",
      "Any number of models can each have their slugga and big choppa replaced with 1 kombi-weapon and 1 close combat weapon.",
      "For every 5 models in this unit, this unit can be equipped with 1 ammo runt."
    ],
    "composition": {
      "min": 5,
      "max": 10
    },
    "compositionText": "1 Boss Nob, 4-9 Nobz",
    "keywords": [
      "Infantry",
      "Grenades",
      "Nobz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Da Boss\u2019 Ladz": "While a WARBOSS model is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll.",
      "Ammo Runt": "Once per battle for each ammo runt this unit has, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability.",
      "Designer\u2019s Note": "Place the relevant number of Ammo Runt tokens next to the unit, removing one each time the unit uses this ability."
    }
  },
  {
    "id": "orks-rukkatrukk-squigbuggy",
    "name": "Rukkatrukk Squigbuggy",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 95
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "7",
      "sv": "4+",
      "w": "9",
      "ld": "7+",
      "oc": "3"
    },
    "invuln": "6+",
    "baseSize": "150 x 95mm",
    "weapons": {
      "ranged": [
        {
          "name": "Sawn-off shotgun",
          "range": "12\"",
          "a": "2",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Assault"
          ]
        },
        {
          "name": "Squig launchas",
          "range": "36\"",
          "a": "D6+6",
          "bs": "5+",
          "s": "5",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Blast",
            "Ignores Cover",
            "Indirect Fire"
          ]
        }
      ],
      "melee": [
        {
          "name": "Saw blades",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Buzzer Squigs",
        "Squig Mine",
        "Designer\u2019s Note"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Rukkatrukk Squigbuggy",
    "keywords": [
      "Vehicle",
      "Speed Freeks",
      "Rukkatrukk Squigbuggy"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Buzzer Squigs": "In your Shooting phase, after this model has shot, select one enemy unit (excluding MONSTERS and VEHICLES) hit by one or more of those attacks made with squig-launchas and roll one D6: on a 4+, until the end of your opponent\u2019s next turn, that enemy unit is hindered. While a unit is hindered, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it.",
      "Squig Mine": "Once per battle, at the start of any phase, select one enemy unit within 3\" of this model and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds.",
      "Designer\u2019s Note": "Place a Squig Mine token next to the model, removing it once this ability has been used."
    }
  },
  {
    "id": "orks-shokkjump-dragsta",
    "name": "Shokkjump Dragsta",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 70
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "7",
      "sv": "4+",
      "w": "9",
      "ld": "7+",
      "oc": "3"
    },
    "invuln": "6+",
    "baseSize": "150 x 95mm",
    "weapons": {
      "ranged": [
        {
          "name": "Kustom shokk rifle",
          "range": "24\"",
          "a": "1",
          "bs": "3+",
          "s": "8",
          "ap": "-2",
          "d": "D6+1",
          "keywords": [
            "Devastating Wounds",
            "Hazardous",
            "Precision"
          ]
        },
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        }
      ],
      "melee": [
        {
          "name": "Saw blades",
          "range": "Melee",
          "a": "4",
          "ws": "4+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 1"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Shokk Tunnel"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Shokkjump Dragsta",
    "keywords": [
      "Vehicle",
      "Speed Freeks",
      "Shokkjump Dragsta"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Shokk Tunnel": "Each time this model is selected to Advance, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models instead of making an Advance move (this model is still considered to have Advanced this turn)."
    }
  },
  {
    "id": "orks-squighog-boyz",
    "name": "Squighog Boyz",
    "role": "mounted",
    "points": [
      {
        "models": 4,
        "cost": 150
      },
      {
        "models": 8,
        "cost": 300
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "7",
      "sv": "4+",
      "w": "3",
      "ld": "7+",
      "oc": "2"
    },
    "baseSize": "75 x 42mm",
    "weapons": {
      "ranged": [
        {
          "name": "Saddlegit weapons",
          "range": "9\"",
          "a": "1",
          "bs": "4+",
          "s": "3",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Assault"
          ]
        },
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Stikka",
          "range": "9\"",
          "a": "1",
          "bs": "5+",
          "s": "5",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Assault",
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        }
      ],
      "melee": [
        {
          "name": "Big Choppa",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "6",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        },
        {
          "name": "Stikka",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+",
            "Lance"
          ]
        },
        {
          "name": "Squig jaws",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "6",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Extra Attacks"
          ]
        }
      ]
    },
    "abilities": {
      "core": [
        "Feel No Pain 5+"
      ],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Bomb Squigs",
        "Designer\u2019s Note"
      ],
      "other": [
        "Wild Ride"
      ]
    },
    "wargearOptions": [
      "For every 3 models in this unit, this unit can be equipped with 1 bomb squig."
    ],
    "composition": {
      "min": 4,
      "max": 8
    },
    "compositionText": "1-2 Nob On Smasha Squig, 3-6 Squighog Boyz",
    "keywords": [
      "Mounted",
      "Beast Snagga",
      "Grenades",
      "Squighog Boyz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Wild Ride": "You can ignore any or all modifiers to this unit\u2019s Move characteristic and to Advance and Charge rolls made for this unit.",
      "Bomb Squigs": "Once per battle, for each bomb squig this unit has, after this unit ends a Normal move, you can use one Bomb Squig. If you do, select one enemy unit within 12\" and visible to this unit and roll one D6: on a 3+, that enemy unit suffers D3 mortal wounds.",
      "Designer\u2019s Note": "Place the relevant number of Bomb Squig tokens next to the unit, removing one each time this unit uses this ability."
    }
  },
  {
    "id": "orks-stompa",
    "name": "Stompa",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 800
      }
    ],
    "stats": {
      "m": "10\"",
      "t": "14",
      "sv": "2+",
      "w": "30",
      "ld": "6+",
      "oc": "12"
    },
    "invuln": "6+",
    "baseSize": "Use model",
    "weapons": {
      "ranged": [
        {
          "name": "Big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2"
          ]
        },
        {
          "name": "Deffkannon",
          "range": "72\"",
          "a": "3D6",
          "bs": "5+",
          "s": "14",
          "ap": "-3",
          "d": "D6",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Skorcha",
          "range": "12\"",
          "a": "D6",
          "bs": "N/A",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Ignores Cover",
            "Torrent"
          ]
        },
        {
          "name": "Supa-gatler",
          "range": "24\"",
          "a": "20",
          "bs": "5+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": [
            "Sustained Hits 1"
          ]
        },
        {
          "name": "Supa-rokkits",
          "range": "100\"",
          "a": "D6",
          "bs": "5+",
          "s": "12",
          "ap": "-3",
          "d": "D6+2",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Twin big shoota",
          "range": "36\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Mega-choppa \u2013 strike",
          "range": "Melee",
          "a": "6",
          "ws": "3+",
          "s": "24",
          "ap": "-5",
          "d": "10",
          "keywords": []
        },
        {
          "name": "Mega-choppa \u2013 sweep",
          "range": "Melee",
          "a": "18",
          "ws": "3+",
          "s": "10",
          "ap": "-2",
          "d": "3",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise 2D6"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Waaagh! Effigy (Aura)",
        "Stompin\u2019 Forward"
      ]
    },
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Stompa",
    "keywords": [
      "Vehicle",
      "Transport",
      "Titanic",
      "Towering",
      "Walker",
      "Stompa"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Waaagh! Effigy (Aura)": "While a friendly ORKS unit is within 12\" of this model, each time you take a Battle-shock test for that unit, add 1 to that test.",
      "Stompin\u2019 Forward": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding TITANIC models) and terrain features that are 4\" or less in height as if they were not there."
    }
  },
  {
    "id": "orks-stormboyz",
    "name": "Stormboyz",
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
      "t": "5",
      "sv": "5+",
      "w": "1",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mm",
    "weapons": {
      "ranged": [
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "4",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deep Strike"
      ],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Full Throttle"
      ]
    },
    "wargearOptions": [
      "The Boss Nob\u2019s choppa can be replaced with 1 power klaw."
    ],
    "composition": {
      "min": 5,
      "max": 10
    },
    "compositionText": "1 Boss Nob, 4-9 Stormboyz",
    "keywords": [
      "Infantry",
      "Jump Pack",
      "Fly",
      "Grenades",
      "Stormboyz"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Full Throttle": "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back."
    }
  },
  {
    "id": "orks-tankbustas",
    "name": "Tankbustas",
    "role": "infantry",
    "points": [
      {
        "models": 6,
        "cost": 140
      }
    ],
    "stats": {
      "m": "6\"",
      "t": "5",
      "sv": "4+",
      "w": "2",
      "ld": "7+",
      "oc": "1"
    },
    "baseSize": "32mmNob on 40mm",
    "weapons": {
      "ranged": [
        {
          "name": "Rokkit launcha",
          "range": "24\"",
          "a": "D3",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Rokkit pistol",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "9",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Pistol"
          ]
        }
      ],
      "melee": [
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "4",
          "ws": "3+",
          "s": "5",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Smash hammer",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "6",
          "ap": "-2",
          "d": "3",
          "keywords": [
            "Anti-Monster 4+",
            "Anti-Vehicle 4+"
          ]
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Pulsa Rokkit"
      ],
      "other": [
        "Attached Unit",
        "Tank Hunters",
        "Bomb Squigs",
        "Designer\u2019s Note"
      ]
    },
    "wargearOptions": [
      "1 of the Boss Nob\u2019s rokkit pistols can be replaced with 1 smash hammer.",
      "One Tankbusta can be equipped with one of the following:",
      "1 pulsa rokkit",
      "1 additional rokkit launcha",
      "ATTACHED UNIT",
      "If a CHARACTER unit from your army with the Leader ability can be attached to a LOOTAS unit, it can be attached to this unit instead."
    ],
    "composition": {
      "min": 6,
      "max": 6
    },
    "compositionText": "1 Boss Nob, 5 Tankbustas",
    "keywords": [
      "Infantry",
      "Grenades",
      "Tankbustas"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Tank Hunters": "Each time a model in this unit makes a ranged attack that targets a MONSTER or VEHICLE unit, add 1 to the Hit roll and add 1 to the Wound roll.",
      "Bomb Squigs": "Once per battle, for each bomb squig this unit has, after this unit ends a Normal move, you can use one Bomb Squig. If you do, select one enemy unit within 12\" and visible to this unit and roll one D6: on a 3+, that enemy unit suffers D3 mortal wounds.",
      "Designer\u2019s Note": "Place two Bomb Squig tokens next to the unit, removing one each time this unit uses this ability.",
      "Pulsa Rokkit": "Once per battle, when the bearer\u2019s unit is selected to shoot in your Shooting phase, the bearer can use its pulsa rokkit. If it does, until the end of the phase, improve the Strength and Armour Penetration characteristics of ranged weapons equipped by models in the bearer\u2019s unit by 1."
    }
  },
  {
    "id": "orks-warbikers",
    "name": "Warbikers",
    "role": "mounted",
    "points": [
      {
        "models": 3,
        "cost": 65
      },
      {
        "models": 6,
        "cost": 130
      }
    ],
    "stats": {
      "m": "12\"",
      "t": "6",
      "sv": "4+",
      "w": "3",
      "ld": "7+",
      "oc": "2"
    },
    "invuln": "6+",
    "baseSize": "75 x 42mm",
    "weapons": {
      "ranged": [
        {
          "name": "Slugga",
          "range": "12\"",
          "a": "1",
          "bs": "5+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Pistol"
          ]
        },
        {
          "name": "Twin dakkagun",
          "range": "18\"",
          "a": "3",
          "bs": "5+",
          "s": "5",
          "ap": "0",
          "d": "1",
          "keywords": [
            "Assault",
            "Rapid Fire 2",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Big choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "7",
          "ap": "-1",
          "d": "2",
          "keywords": []
        },
        {
          "name": "Choppa",
          "range": "Melee",
          "a": "3",
          "ws": "3+",
          "s": "4",
          "ap": "-1",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Close combat weapon",
          "range": "Melee",
          "a": "2",
          "ws": "3+",
          "s": "4",
          "ap": "0",
          "d": "1",
          "keywords": []
        },
        {
          "name": "Power klaw",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "9",
          "ap": "-2",
          "d": "2",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [],
      "faction": [
        "Waaagh!"
      ],
      "other": [
        "Drive-by Dakka"
      ]
    },
    "wargearOptions": [
      "Each Warbiker can be equipped with one of the following:",
      "1 slugga",
      "1 choppa",
      "The Boss Nob on Warbike can be equipped with one of the following:",
      "1 slugga",
      "1 big choppa",
      "1 power klaw"
    ],
    "composition": {
      "min": 3,
      "max": 6
    },
    "compositionText": "1 Boss Nob on Warbike, 2-5 Warbikers",
    "keywords": [
      "Mounted",
      "Grenades",
      "Speed Freeks",
      "Warbikers"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Drive-by Dakka": "Each time a model in this unit makes a ranged attack that targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1."
    }
  },
  {
    "id": "orks-wazbom-blastajet",
    "name": "Wazbom Blastajet",
    "role": "vehicle",
    "points": [
      {
        "models": 1,
        "cost": 175
      }
    ],
    "stats": {
      "m": "20+\"",
      "t": "9",
      "sv": "3+",
      "w": "12",
      "ld": "7+",
      "oc": "0"
    },
    "invuln": "6+",
    "baseSize": "120 x 92mm flying base",
    "weapons": {
      "ranged": [
        {
          "name": "Smasha gun",
          "range": "48\"",
          "a": "D3",
          "bs": "4+",
          "s": "9",
          "ap": "-3",
          "d": "4",
          "keywords": [
            "Blast"
          ]
        },
        {
          "name": "Twin wazbom mega-kannon",
          "range": "36\"",
          "a": "D3",
          "bs": "4+",
          "s": "12",
          "ap": "-2",
          "d": "D6",
          "keywords": [
            "Blast",
            "Hazardous",
            "Twin-linked"
          ]
        },
        {
          "name": "Twin supa-shoota",
          "range": "36\"",
          "a": "4",
          "bs": "4+",
          "s": "6",
          "ap": "-1",
          "d": "1",
          "keywords": [
            "Rapid Fire 2",
            "Sustained Hits 1",
            "Twin-linked"
          ]
        },
        {
          "name": "Twin tellyport mega-blasta",
          "range": "24\"",
          "a": "3",
          "bs": "5+",
          "s": "9",
          "ap": "-1",
          "d": "D6+1",
          "keywords": [
            "Blast",
            "Twin-linked"
          ]
        }
      ],
      "melee": [
        {
          "name": "Armoured hull",
          "range": "Melee",
          "a": "3",
          "ws": "4+",
          "s": "6",
          "ap": "0",
          "d": "1",
          "keywords": []
        }
      ]
    },
    "abilities": {
      "core": [
        "Deadly Demise D3"
      ],
      "faction": [
        "Waaagh!"
      ],
      "wargear": [
        "Blastajet Force Field"
      ],
      "other": [
        "Blastajet Attack Run"
      ]
    },
    "wargearOptions": [
      "This model\u2019s twin wazbom mega-kannon can be replaced with 1 twin tellyport mega-blasta.",
      "This model can be equipped with 1 blastajet force field.",
      "This model can be equipped with 1 twin supa-shoota."
    ],
    "composition": {
      "min": 1,
      "max": 1
    },
    "compositionText": "1 Wazbom Blastajet",
    "keywords": [
      "Vehicle",
      "Aircraft",
      "Fly",
      "Grenades",
      "Speed Freeks",
      "Wazbom Blastajet"
    ],
    "factionKeywords": [
      "Orks"
    ],
    "abilityText": {
      "Blastajet Attack Run": "Each time this model makes a ranged attack that targets a unit that cannot FLY, re-roll a Hit roll of 1.",
      "Blastajet Force Field": "The bearer has a 4+ invulnerable save, but it loses the Grenades keyword."
    }
  }
]

    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(orks);
})();