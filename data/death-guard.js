/**
 * W40K Army Builder — Death Guard (10th Edition)
 *
 * Datasheets from Codex: Death Guard. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const deathGuard = {
        id: "death-guard",
        name: "Death Guard",
        icon: "\u2620\uFE0F",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Nurgle's Gift", flavour: "", text: "" }
        ],
        detachments: [
            {
                name: "Virulent Vectorium",
                flavour: "Many Death Guard vectoriums boast a mix of heavy infantry, armoured might and twisted champions of supernatural disease. Led by a mighty Lord of the Legion - or sometimes even a thrice-favoured Daemon Prince - such warbands accumulate the favour of the Plague God with every repulsive feat of conquest. Their festering star rises as they do, and the diseases that sing through their bloated bodies wax fat with power. Their weaponised maladies roll before them like a rancid flood, surging through the enemy ranks to leave the mightiest warriors shuddering and sweating as buboes erupt from their flesh. Even the battlefield itself sickens at the touch of such corrupt beings: greenery rots and runs into lakes of bubbling slime, mud churns with pus-moist larvae as long as a Human arm, ruins fur with mould and begin to crumble, while vehicle wrecks rust and the bodies of the fallen bloat and burst to spray infectious filth. Amidst such riotous putrefaction, the warriors of the Death Guard drone their praises to Nurgle and fight all the harder.",
                rule: { name: "Worldblight", flavour: "As the foul tendrils of the Death Guard quest further across the battlefield, they infest even the most secure, holy and heavily warded sites with supernatural disease. To fight amidst such foulness is a virtual death sentence to the foe, win or lose.", text: "If you control an objective marker at the end of your Command phase and a DEATH GUARD unit from your army (excluding Battle-shocked units) is within range of that objective marker, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase. In addition, until you lose control of that objective marker, it has the Nurgle's Gift ability as if it were a DEATH GUARD model from your army.", restrictions: "" },
                enhancements: [
                    { name: "Daemon Weapon of Nurgle", cost: 10, restriction: "DEATH GUARD model only.", text: "Be it the Seeping Blade, the Talon of Befoulment or even the dreaded Axe of Putrescence, this weapon contains a malevolent daemonic entity whose mere touch rots and sickens the foe.\n\nEach time the bearer makes a melee attack, an unmodified Hit roll of 5+ scores a Critical Hit." },
                    { name: "Furnace of Plagues", cost: 25, restriction: "DEATH GUARD model only.", text: "This champion's body blazes with fever as a cornucopia of supernatural diseases churn and roil within. Mere proximity to them is enough to trigger an infectious outbreak of daemonic viruses.\n\nAdd 1 to the Strength and Attacks characteristics of the bearer's melee weapons, and the bearer's melee weapons have the [Devastating Wounds] ability." },
                    { name: "Arch Contaminator", cost: 25, restriction: "DEATH GUARD model only.", text: "The unfettered energies of Nurgle's realm gush from the Warp like foulness from a punctured boil, earthing themselves in the fabric of realspace through this champion's repulsive body.\n\nWhile the bearer's unit is within range of an objective marker you control, each time a model in the bearer's unit makes an attack, you can re-roll the Wound roll." },
                    { name: "Revolting Regeneration", cost: 20, restriction: "DEATH GUARD model only.", text: "The more wounds blasted and gouged into this champion's flesh, the more clotted matter, squirming vermin and gangrenous slime spurt forth to coagulate and seal the most grievous hurts.\n\nThe bearer has the Feel No Pain 5+ ability." },
                ],
                stratagems: [
                    { name: "Putrid Detonation", cp: 1, type: "Strategic Ploy", when: "Any phase.", target: "One DEATH GUARD VEHICLE or DEATH GUARD MONSTER model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.", effect: "Do not roll one D6 to determine whether mortal wounds are inflicted by your model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted. In addition, any enemy units that suffer mortal wounds as a result of this Stratagem are Afflicted until the start of your next turn.", restrictions: "" },
                    { name: "Disgustingly Resilient", cp: 2, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DEATH GUARD unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Plaguesurge", cp: 2, type: "Epic Deed", when: "Your Command phase.", target: "Your DEATH GUARD WARLORD that is on the battlefield.", effect: "Until the start of your next Command phase, add 3\" to the Contagion Range of models from your army.", restrictions: "" },
                    { name: "Leechspore Eruption", cp: 1, type: "Epic Deed", when: "Your Command phase.", target: "One DEATH GUARD model from your army that has lost one or more wounds.", effect: "Select one enemy unit within 3\" of your model. Roll a number of D6 equal to the number of wounds your model has lost: for each 5+, that enemy unit suffers one mortal wound (to a maximum of 6 mortal wounds) and your model regains 1 lost wound (to a maximum of 6 lost wounds).", restrictions: "" },
                    { name: "Overwhelming Generosity", cp: 1, type: "Wargear", when: "Start of your Shooting phase.", target: "One DEATH GUARD CHARACTER unit from your army.", effect: "Select one enemy unit visible to your unit. Until the end of the phase, each time a DEATH GUARD unit from your army selects that enemy unit as the target of any ranged attacks, you can re-roll the dice to determine how many attacks a weapon equipped by a model in that unit makes.", restrictions: "" },
                    { name: "Creeping Blight", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One DEATH GUARD INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an Afflicted unit, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                ]
            },
            {
                name: "Mortarion's Hammer",
                flavour: "The armoured might of the Death Guard has warped and corroded over the millennia, but it remains prodigious. Formed into grinding spearheads and smog-belching batteries, squadrons of ancient battle tanks and Daemon Engines mass their blunt and brutish power before unleashing it on the foe. Their onslaught is heralded by a rain of rust-pocked artillery shells, alchemical munitions and brittleglass plague-spheres hurled from infernal field guns and towering Daemon Engines behind the lines. The foe cower beneath this explosive deluge, many torn apart by thunderous detonations or eaten away by whirling spore clouds. Amid the devastation surge reaper colonies of Plague Marines mounted in Rhinos and Land Raiders. These warriors are masters of capitalising upon their foes' dismay and horror, tearing the guts out of the most formidable defence lines even as carrion-feeding war engines close in to finish off knots of resistance. Many a siege has been swiftly broken in this way by the fall of Mortarion's Hammer.",
                rule: { name: "Miasmic Bombardment", flavour: "In the wake of preparatory bombardment by artillery weapons both forbidden and foul, the surviving foe are left reeling amidst clouds of plague smog. With their flesh running like tallow and their weapons rusting in their hands, they will be hard-pressed to fight back.", text: "At the start of the battle round, select a number of enemy units more than 12\" away from every model from your army that is on the battlefield. Until the end of the battle round, those enemy units are Afflicted. The maximum number of units you can select in this way depends on the battle size, as shown below.\n- Incursion: 1\n- Strike Force: 2\n- Onslaught: 3", restrictions: "" },
                enhancements: [
                    { name: "Eye of Affliction", cost: 20, restriction: "DEATH GUARD model only.", text: "Peering at the world through this bloated yellow orb, the bearer of this vile gift sees the souls of the sickened burning bright as targeting flares no matter how their victims try to hide.\n\nRanged weapons equipped by models in the bearer's unit have the [Ignores Cover] ability while targeting an Afflicted enemy unit." },
                    { name: "Bilemaw Blight", cost: 10, restriction: "MALIGNANT PLAGUECASTER only.", text: "This foul sorcerer has been blessed with a unique affliction that allows them to inflate their body like a repulsive bellows before vomiting forth a pressurised torrent of filth that would do any Great Unclean One proud.\n\nAt the start of your Shooting phase, until the end of the phase, add 12\" to the Range characteristics of the bearer's Plague Wind weapon." },
                    { name: "Shriekworm Familiar", cost: 15, restriction: "DEATH GUARD model only.", text: "This daemonic familiar lives in the champion's flesh and watches with bitter paranoia for enemy threats. Should it spot a counterattack from the foe, it bursts forth to scream its shrill warning.\n\nOnce per battle round, you can target the bearer's unit with the Fire Overwatch Stratagem for 0CP." },
                    { name: "Tendrilous Emissions", cost: 30, restriction: "LORD OF VIRULENCE only.", text: "This warrior has gained greater control of the vile fumes that billow from their armour, willing them forward like coiling tentacles to wreathe targets and guide in the fire of allied war engines.\n\nWhile the bearer is within 3\" of one or more friendly DEATH GUARD VEHICLE units, the bearer has the Lone Operative ability, and each time one of those VEHICLE units makes a ranged attack that targets an enemy unit visible to the bearer, re-roll a Wound roll of 1." },
                ],
                stratagems: [
                    { name: "Blighted Land", cp: 2, type: "Strategic Ploy", when: "End of your Movement phase.", target: "One DEATH GUARD VEHICLE unit from your army.", effect: "Select one terrain feature within 24\" of and visible to your unit. Until the start of your next turn, enemy units are Afflicted while they are within 3\" of that terrain feature.", restrictions: "" },
                    { name: "Relentless Grind", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One DEATH GUARD VEHICLE unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.", restrictions: "" },
                    { name: "Drawn to Despair", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One DEATH GUARD unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a visible enemy unit (excluding AIRCRAFT) within your opponent's deployment zone, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Font of Filth", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One DEATH GUARD VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Assault] ability.", restrictions: "" },
                    { name: "Eyestinger Storm", cp: 1, type: "Strategic Ploy", when: "Your opponent's Command phase.", target: "One DEATH GUARD VEHICLE unit from your army.", effect: "Select one objective marker visible to one or more models in your unit. Each Afflicted enemy unit within range of that objective marker must take a Battle-shock test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.", restrictions: "" },
                    { name: "Stinking Mire", cp: 1, type: "Strategic Ploy", when: "Start of your opponent's Charge phase.", target: "One DEATH GUARD VEHICLE unit from your army.", effect: "Until the end of the phase, each time an enemy unit selects your unit as the target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).", restrictions: "" },
                ]
            },
            {
                name: "Champions of Contagion",
                flavour: "There are many ways to worship Nurgle: the brewing of virulent plagues, the foul perversion of the surgeon's craft, sharing the abundance of unfettered sickness with armies of foes; the champions of the Death Guard practise these and many other expressions of the Plague Lord's faith. A vectorium rich in these diabolical madmen can unleash the full horror of the Legion's alchemical, biological and sorcerous weapons. Foul Blightspawn lumber amidst their comrades, their excremental reek heralding the jetting corrosive sprays of their weapons. Noxious Blightbringers toll their tocsins of misery, battering the foe with entropic shock waves even as Biologus Putrifiers caper through their ranks to fling brittleglass alembics and jab the needles of their injector pistols into promising victims. All the while, the droning count of the Tallymen booms out through rusted vox-emitters, and Plague Surgeons ply their macabre trade, even as their fellow Plague Marines storm relentlessly forward over the withered and maddened remnants of the foe.",
                rule: { name: "Manifold Maladies", flavour: "A spirit of competition infects Nurgle's champions when they fight alongside one another. With each vying to outdo the others in virulence, the foes are subjected to a riotous string of nightmarish outbreaks amongst their ranks.", text: "At the start of the battle round, you can select one of the Plagues listed in Nurgle's Gift. Until the end of the battle, that is your chosen Plague instead of any previously chosen Plague.", restrictions: "" },
                enhancements: [
                    { name: "Final Ingredient", cost: 20, restriction: "BIOLOGUS PUTRIFIER only.", text: "Be it the eye of a Kroot or a Space Marine's hearts, ground Ork tusk, or something unnameable wrenched from within a Tyranid's corpse, this champion needs just one more ingredient to perfect a powerful new plague.\n\nOnce per battle, after the bearer's unit has fought, if one or more CHARACTER models were destroyed as a result of those attacks, select one Plague. Until the end of the battle, while an enemy unit is Afflicted, that unit has the effect of the selected Plague in addition to any other." },
                    { name: "Visions of Virulence", cost: 15, restriction: "MALIGNANT PLAGUECASTER only.", text: "The touch of this sorcerer's mind upon another triggers feverish visions of abundant foulness that erupt into physical manifestations as they reach their crescendo.\n\nWhile an enemy unit is enfeebled by the bearer's Pestilent Fallout ability, that unit is also Afflicted." },
                    { name: "Needle of Nurgle", cost: 25, restriction: "PLAGUE SURGEON only.", text: "This plague-saturated narthecium delivers generous doses of infernal maladies that restore life to even the most hideously mangled of Mortarion's sons.\n\nEach time the bearer uses its Tainted Narthecium ability, you can return up to D3 destroyed models to the bearer's unit (instead of 1)." },
                    { name: "Cornucophagus", cost: 35, restriction: "LORD OF POXES only.", text: "A plague bellows fashioned by daemonic smiths in a realm of pure putrescence, this rasping device exhales an endless cloying soup of lividly glowing plague motes.\n\nIn the Declare Battle Formations step select one Plague. Until the end of the battle, while an enemy unit is within Contagion Range of the bearer, that enemy unit has the effect of that Plague in addition to any other." },
                ],
                stratagems: [
                    { name: "Blessings of Filth", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One DEATH GUARD Attached unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Malignance Magnified", cp: 2, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One DEATH GUARD Attached unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Grotesque Fortitude", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DEATH GUARD Attached unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, add 2 to the Toughness characteristic of models in your unit.", restrictions: "" },
                    { name: "Rabid Infusion", cp: 1, type: "Strategic Ploy", when: "Start of the Fight phase.", target: "One DEATH GUARD unit from your army that includes two CHARACTER models.", effect: "Until the end of the phase, your unit has the Fights First ability.", restrictions: "" },
                    { name: "Mobile Vector", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, before the Reinforcements step.", target: "One DEATH GUARD CHARACTER unit from your army that is not leading a unit.", effect: "Select one other friendly DEATH GUARD unit (excluding Battle-shocked units and Attached units that already have two Leader units or one of your CHARACTER units leading it) within 2\" horizontally and 5\" vertically of your unit that your unit can lead (as described in the Leader section of its datasheet). Your unit attaches to that unit as a Leader. Change that unit's Starting Strength accordingly.", restrictions: "" },
                    { name: "Death's Heads", cp: 1, type: "Wargear", when: "Your Shooting phase.", target: "One BIOLOGUS PUTRIFIER unit from your army that is not within Engagement Range of one or more enemy units and has not been selected to shoot this phase.", effect: "Select one enemy unit (excluding VEHICLES) that is within 8\" of and visible to your unit. Until the start of your next turn, that unit has the effect of all Plagues (see Nurgle's Gift).", restrictions: "" },
                ]
            },
            {
                name: "Tallyband Summoners",
                flavour: "There are many ways for the daemons of Nurgle to burst the bounds of reality and fight alongside the Death Guard. Sometimes, they are conjured by the concentration of sickness and misery unleashed by Mortarion's sons. At others, their Tally bands may be summoned by a champion of the Death Guard reading aloud from the mouldering pages of one of the seven Books of Woe or through a ritual offering of diseased or despairing souls. Regardless of how these entities find their way to the battlefield, they plague all living things. The mere sight of Great Unclean Ones a stomping into battle like swaying mountains of rotted flab can be enough to blast the sanity of the foe. The onset of gruesome Plaguebearers, fleshy avalanches of spiteful Nurglings, bounding packs of Beasts of Nurgle, and thrumming swarms of Plague Drones proves impossible for even the most resolute enemy to halt. Even should some brave victims stand their ground, they will not last long before the ferociously infectious attentions of these befouling entities.",
                rule: { name: "Reverberant Rancidity", flavour: "Reality rings like a struck bell as it rebels against the sheer wrongness of Nurgle's daemons. Borne upon these jarring waves of metaphysical disease, magnified and redoubled with every dolorous peal, the Plague God's myriad infections spread and multiply all the faster.", text: "While a PLAGUE LEGIONS unit from your army is within 7\" of one or more DEATH GUARD units from your army, that PLAGUE LEGIONS unit has the Nurgle's Gift ability.\n\nWhile a DEATH GUARD unit from your army is within 7\" of one or more PLAGUE LEGIONS units from your army, add 3\" to that DEATH GUARD unit's Contagion Range.", restrictions: "PLAGUE LEGIONS: You can include PLAGUE LEGIONS units in your army, even though they do not have the DEATH GUARD Faction keyword. The combined points cost of such units you can include in your army is:\n- Incursion: Up to 500 pts\n- Strike Force: Up to 1000 pts\n- Onslaught: Up to 1500 pts\nNo PLAGUE LEGIONS models from your army can be your WARLORD." },
                enhancements: [
                    { name: "Beckoning Blight", cost: 20, restriction: "DEATH GUARD model only.", text: "This unclean gift infects its host with animaluminescent fungus. Once their spirit is riddled with incorporeal mycelia, it begins to glow. This sickly radiance acts like a guiding lantern to the daemons of Nurgle, who follow its glare into realspace.\n\nEach time a PLAGUE LEGIONS unit from your army is set up on the battlefield using the Deep Strike ability, if it is set up wholly within 12\" of the bearer, it can be set up anywhere that is more than 6\" horizontally away from all enemy models, instead of more than 9\"." },
                    { name: "Fell Harvester", cost: 10, restriction: "DEATH GUARD model only.", text: "This repugnant daemon weapon extrudes swaying tendrils with lamprey maws to strike at the foe.\n\nAdd 2 to the Attacks characteristic of the bearer's melee weapons." },
                    { name: "Entropic Knell", cost: 15, restriction: "GREAT UNCLEAN ONE only.", text: "Every booming peal of this cursed bell spreads rot, lesions and buboes across the foes' bodies, sending them fleeing in terror and disgust.\n\nIn the Battle-shock step of your opponent's Command phase, each enemy unit within 6\" of the bearer that is below its Starting Strength must take a Battle-shock test, subtracting 1 from that test." },
                    { name: "Tome of Bounteous Blessings", cost: 20, restriction: "MALIGNANT PLAGUECASTER only.", text: "The slurred and vomit-wet incantations from this malodorous tome bolster Nurgle's daemons.\n\nEach time a PLAGUE LEGIONS unit within 12\" of the bearer takes a Battle-shock test, add 1 to that test and, if that test is passed, one model in that unit regains up to D3 lost wounds (if that unit is a BATTLELINE unit and that test is passed, up to D3 destroyed models can be returned to that unit instead)." },
                ],
                stratagems: [
                    { name: "Persistent Pests", cp: 1, type: "Strategic Ploy", when: "Any phase.", target: "One NURGLINGS unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.", effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength and with its full wounds remaining.", restrictions: "You can only use this Stratagem once per battle." },
                    { name: "Clutching Corruption", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DEATH GUARD unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is within Engagement Range of one or more PLAGUE LEGIONS units from your army, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "All Is Rot", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One PLAGUE LEGIONS unit from your army that is within Engagement Range of one or more enemy units.", effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model's unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 mortal wound after the attacking unit has finished making its attacks.", restrictions: "" },
                    { name: "Fleshy Avalanche", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One PLAGUE LEGIONS MONSTER unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.", restrictions: "" },
                    { name: "Avatars of Decay", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One PLAGUE LEGIONS unit from your army.", effect: "Until the end of the phase, while an enemy unit is within 6\" of your unit, that enemy unit is Afflicted.", restrictions: "" },
                    { name: "Mireslick", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, when an enemy unit (excluding MONSTERS and VEHICLES) is selected to Fall Back.", target: "One PLAGUE LEGIONS unit from your army that is within Engagement Range of that enemy unit.", effect: "Until the end of the phase, while an enemy unit is within Engagement Range of your unit, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead.", restrictions: "" },
                ]
            },
            {
                name: "Shamblerot Vectorium",
                flavour: "Many vectoriums unleash heaving swarms of Poxwalkers to soften up and encircle their foes. The first the enemy knows of such an onslaught is the stink of diseased flesh upon the air, mingled with the agonised groans of countless plague-ridden mutants. Then they come - spilling from doorways and windows, boiling up from sewer outlets, trench networks and subterranean transit networks, crawling out of vehicle wrecks and rising from carrion heaps; thousands upon thousands of Poxwalkers converging on the foe at a stumbling yet relentless pace. Engulfed in a sea of grasping hands, biting maws and bloated flesh, even the finest strategies of the foe falter and fail. The enemy finds themselves forced into a battle for survival as they strive to fend off the Poxwalkers closing in from every side. It is at this point that the Death Guard themselves strike. Off balance, broken into desperate pockets and running low on ammunition, the foe has little hope of standing against this second, more punishing onslaught.",
                rule: { name: "Numberless Horde", flavour: "No matter how many Poxwalkers the enemy gun down or tear limb-from-limb at close quarters, more groaning mutants keep coming from every side.", text: "In your Command phase in each of the following battle rounds, depending on your chosen battle size, add a new POXWALKERS unit with a Starting Strength of 10 to your army, in Strategic Reserves.\n- Incursion: 2, 3\n- Strike Force: 2, 3, 4\n- Onslaught: 2, 3, 4, 5\n\nKEYWORDS: POXWALKERS units from your army gain the BATTLELINE keyword.", restrictions: "" },
                enhancements: [
                    { name: "Witherbone Pipes", cost: 25, restriction: "NOXIOUS BLIGHTBRINGER only.", text: "This sinister artefact emits a reedy dirge to which Poxwalkers seem drawn and by whose mournful notes they appear energised and lent an echo of purpose.\n\nWhile the bearer is leading a POXWALKERS unit, add 1 to the Objective Control characteristic of models in that unit, and each time that unit takes a Battle-shock or Leadership test, add 1 to that test." },
                    { name: "Lord of the Walking Pox", cost: 15, restriction: "DEATH GUARD model only.", text: "Gifted by Nurgle to be forever surrounded by shambling packs of Poxwalkers, this champion has become adept at leading their festering hordes into battle.\n\nIf the bearer is leading a POXWALKER unit, and is in Strategic Reserves, for the purposes of setting up that unit on the battlefield, treat the current battle round as the third battle round." },
                    { name: "Sorrowsyphon", cost: 10, restriction: "MALIGNANT PLAGUECASTER only.", text: "Parasitising the miserable scraps of soul within nearby Poxwalkers allows this sorcerer to belch even more malignant clouds of murderous foulness.\n\nWhile the bearer is leading a POXWALKERS unit, add 1 to the Damage characteristic of the bearer's Plague Wind weapon. Each time the bearer makes one or more attacks with a Plague Wind weapon, after the bearer's unit has resolved its attacks, D3 Bodyguard models from the bearer's unit are destroyed." },
                    { name: "Talisman of Burgeoning", cost: 25, restriction: "DEATH GUARD model only.", text: "This mould-furred talisman is studded with teeth torn from Poxwalkers' jaws. It bolsters the creatures' putrid vitality, forcing them to stagger and fight even through grotesque wounds.\n\nWhile the bearer is leading a unit, add 1 to the Toughness characteristic of POXWALKERS models in that unit." },
                ],
                stratagems: [
                    { name: "Grip of the Walking Pox", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One POXWALKERS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "After the attacking unit has fought, roll one D6 for each model from your unit that was destroyed as a result of those attacks: on a 6, the attacking unit suffers 1 mortal wound. If your unit is not destroyed after the attacking unit has fought, enemy models destroyed as a result of this Stratagem count as enemy models destroyed by an attack made by a model in your unit for the purposes of the Curse of the Walking Pox ability.", restrictions: "" },
                    { name: "Smeared with Filth", cp: 1, type: "Strategic Ploy", when: "Fight phase.", target: "One POXWALKERS unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.", effect: "Select one enemy unit that made one or more attacks that targeted your unit this phase. Until the end of the battle, that enemy unit is Afflicted.", restrictions: "" },
                    { name: "Gnawing Hunger", cp: 1, type: "Battle Tactic", when: "Your Command phase.", target: "One POXWALKERS unit from your army.", effect: "Until the end of the turn, add 1 to the Move characteristic of models in your unit, and add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in your unit.", restrictions: "" },
                    { name: "Hidden Amongst the Dead", cp: 1, type: "Strategic Ploy", when: "The Reinforcements step of your Movement phase.", target: "One POXWALKERS unit from your army that is in Strategic Reserves and that is not an Attached unit.", effect: "Until the end of the phase, models in that unit have the Deep Strike ability.", restrictions: "" },
                    { name: "Shock and Horror", cp: 1, type: "Strategic Ploy", when: "Your Charge phase, just after a DEATH GUARD unit from your army ends a Charge move.", target: "That DEATH GUARD unit.", effect: "Each enemy unit within Engagement Range of your unit must take a Battle-shock test, subtracting 1 from that test.", restrictions: "" },
                    { name: "Shambling Wall", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One DEATH GUARD unit from your army that was selected as the target of one or more of the attacking unit's attacks, and one friendly POXWALKERS unit within 3\" of your unit and visible to both your unit and the attacking unit.", effect: "Until the end of the phase, each time you would allocate an attack to a model in your DEATH GUARD unit, if your POXWALKERS unit is visible to the attacking model and is an eligible target for that attack, no saving throw is made for that attack; instead a number of POXWALKERS from your POXWALKERS unit equal to the Damage characteristic of that attack are destroyed.", restrictions: "" },
                ]
            },
            {
                name: "Death Lord's Chosen",
                flavour: "The mightiest champions of the Death Guard are as formidable in battle as they are bloated with the infectious blessings of Nurgle. When they congeal into a unified fighting force, these dread warriors become the grim and relentless will of Mortarion made manifest. Such a vectorium is quite capable of conquering an enemy flagship or command fortress, launching assassination strikes against crucial enemy personnel or breaking into the most heavily defended sacred sites. It is not unusual for Mortarion's champions to turn the course of an entire war with a single shock onslaught or immovable defensive action; this is most likely when the Daemon Primarch leads in person. With their gene-sire's jaundiced gaze weighing heavy upon them, bands of Deathshroud and Blightlord Terminators tear an unstoppable path through the foe. Supported by hand-picked squads of Plague Marines, bellowing Helbrutes and twisted champions, they sweep aside all who stand in their path.",
                rule: { name: "Deadly Vectors", flavour: "The plagues and parasites to which these elite warriors play host are amongst the most lethal in the galaxy. Moment by moment, even the most resilient foes sicken and wither in their presence until all that remains is rotted matter deliquescing sloppily from mouldering bones.", text: "In your opponent's Command phase, roll 2D6 for each Afflicted enemy unit, subtracting 1 from the result if that unit is Below Half-strength. If the result is 6 or less, that enemy unit suffers D3 mortal wounds.", restrictions: "" },
                enhancements: [
                    { name: "Face of Death", cost: 10, restriction: "TERMINATOR model only.", text: "So grotesque and monstrous is this champion's aspect that it fills the enemy with unreasoning dread simply to look upon him.\n\nAt the start of the Fight phase, each enemy unit within Engagement Range of the bearer's unit must take a Battle-shock test." },
                    { name: "Vile Vigour", cost: 15, restriction: "TERMINATOR model only.", text: "A fanatical worshipper of Nurgle and a talented orator, this champion can infect their followers with the urgent need to forge into battle and spread the Plague God's blessings to all.\n\nWhile the bearer is leading a unit, add 1\" to the Movement characteristic of models in that unit and you can re-roll Advance rolls made for that unit." },
                    { name: "Warprot Talisman", cost: 30, restriction: "TERMINATOR model only.", text: "By invoking the power of this ancient talisman, the bearer can rot a sagging rent in reality and step through the Warp to burst forth elsewhere amidst a gushing sluice of foul fluids.\n\nOnce per battle, at the end of your opponent's turn, if the bearer's unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves." },
                    { name: "Helm of the Fly King", cost: 20, restriction: "TERMINATOR model only.", text: "This armoured helm was crafted by the Daemon Prince Vermifulgus the Pestilent and carries his squirming enchantments. It manifests its wearer's will as roaring swarms of plump flies that whirl about their creator like an occluding shroud or descend on the foe to blind eyes, clog sensors and spread revolted panic.\n\nWhile the bearer is leading a unit, models in that unit cannot be targeted by ranged attacks unless the attacking model is within 18\"." },
                ],
                stratagems: [
                    { name: "Blooming Pestilence", cp: 1, type: "Epic Deed", when: "Start of any phase.", target: "One TERMINATOR unit from your army.", effect: "Until the end of the phase, add 3\" to the Contagion Range of models in your unit.", restrictions: "" },
                    { name: "Grim Reapers", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One TERMINATOR unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit (excluding MONSTERS and VEHICLES) you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Undying Spite", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One TERMINATOR unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Signal Pox", cp: 1, type: "Epic Deed", when: "Your Command phase.", target: "One LORD OF VIRULENCE model from your army.", effect: "Select one objective marker within 30\" of and visible to your model. Until the start of your next turn, while an enemy unit is within range of that objective marker, that unit is Afflicted.", restrictions: "" },
                    { name: "Mortarion's Teachings", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One TERMINATOR unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Assault] and [Heavy] abilities.", restrictions: "" },
                    { name: "Sickening Impact", cp: 1, type: "Strategic Ploy", when: "Your Charge phase, just after a TERMINATOR unit from your army ends a Charge move.", target: "That TERMINATOR unit.", effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 2+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).", restrictions: "" },
                ]
            },
            {
                name: "Flyblown Host",
                flavour: "As the Death Guard stride inexorably towards their foes, the battlefield thrums and buzzes with the wingbeats of a trillion swollen flies. Bloated and mutated Plague Marines march beneath a pathogenic haze, striding forward slowly and purposefully, unleashing precise salvoes of diseased projectiles. The obscuring swarms foul the foe's return fire, and whatever clots of contagion their desperate shots manage to clear away are filled moments later by yet more hovering vermin. Amidst the droning miasma, the Death Guard stride on, at one with the crawling and buzzing horror surrounding them. As the horrifying cloud washes over the enemy, their warriors retch and claw at their skin. The Plague Marines exploit the distraction ruthlessly, cutting down their stricken foes and leaving nothing but rotting corpses in their wake.",
                rule: { name: "Verminous Haze", flavour: "A cloud of winged insects descends over Mortarion's pathogenic sons, obscuring their malodorous ranks and shielding them from the eyes and augurs of the enemy. Beneath thrumming storms of fat-bodied flies, Plague Marines stride towards their wavering foes until they are close enough to unleash punishing volleys of killing fire.", text: "DEATH GUARD INFANTRY units (excluding POXWALKERS units) from your army that are not embarked within a TRANSPORT have the Scouts 5\" and Stealth abilities.", restrictions: "" },
                enhancements: [
                    { name: "Droning Chorus", cost: 15, restriction: "DEATH GUARD INFANTRY model only.", text: "Festering swarms follow this champion to battle, and the drone of a billion flies invigorates his warriors' rotting bodies, lending them fresh focus.\n\nRanged weapons equipped by models in the bearer's unit have the [Assault] ability." },
                    { name: "Insectile Murmuration", cost: 20, restriction: "DEATH GUARD INFANTRY model only.", text: "The buzzing swarms respond to this champion's will, sweeping down upon his chosen target, their crawling, biting and droning enfeebling the horrified foe.\n\nEach time a model in the bearer's unit makes an attack that targets a unit that is within Contagion Range of one or more DEATH GUARD units from your army, re-roll a Wound roll of 1." },
                    { name: "Rejuvenating Swarm", cost: 10, restriction: "DEATH GUARD INFANTRY model only.", text: "With a hacking prayer to Nurgle, this warrior calls upon the swarm. Buzzing clumps of plague-bearing flies settle upon his bloated form and vomit streams of rejuvenating contagion into festering wounds.\n\nAt the end of each phase, the bearer regains all of its lost wounds." },
                    { name: "Plagueveil", cost: 25, restriction: "DEATH GUARD INFANTRY model only.", text: "When this diseased pilgrim marches to sites of festering putrescence, Nurgle's blessings manifest in a buzzing clot of darkness that falls like an enshrouding fog over them and their disciples.\n\nWhile the bearer's unit is within range of one or more objective markers that you control, that unit can only be selected as the target of a ranged attack if the attacking model is within 18\"." },
                ],
                stratagems: [
                    { name: "Nauseating Paroxysms", cp: 1, type: "Strategic Ploy", when: "Start of the Fight phase.", target: "One DEATH GUARD INFANTRY unit from your army that is within Engagement Range of one or more enemy units.", effect: "Select one enemy unit within Engagement Range of your unit. That unit must take a Battle-shock test, subtracting 1 from the result.", restrictions: "" },
                    { name: "Vermin Cloud", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DEATH GUARD INFANTRY unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in this unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".", restrictions: "" },
                    { name: "Eye of the Swarm", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One DEATH GUARD INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit (excluding Blast weapons) have the [Pistol] ability.", restrictions: "" },
                    { name: "Droning Horror", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One DEATH GUARD INFANTRY unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes a ranged attack, re-roll a Hit roll of 1. If that attack targets a unit within half range, you can re-roll the Hit roll instead.", restrictions: "" },
                    { name: "Enervating Onslaught", cp: 1, type: "Strategic Ploy", when: "Your Charge phase, just after a DEATH GUARD INFANTRY unit from your army makes a Charge move.", target: "That DEATH GUARD INFANTRY unit.", effect: "Select one enemy unit within Engagement Range of your unit (excluding MONSTERS and VEHICLES). Roll one D6 for each model in your unit that is within Engagement Range of that unit, adding 1 to the result if that model is not a CULTIST or POXWALKER model: for each 5+, the selected enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).", restrictions: "" },
                    { name: "Myphitic Invigoration", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One DEATH GUARD INFANTRY unit from your army that is within 6\" of one or more friendly MYPHITIC BLIGHT-HAULER units and that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "dg-biologus-putrifier",
                        "name": "Biologus Putrifier",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hyper blight grenades",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Injector pistol",
                                                "range": "3\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plague knives",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Foul Infusion",
                                        "Extraction of Fresh Disease"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Biologus Putrifier"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Biologus Putrifier This model is equipped with: hyper blight grenades; injector pistol; plague knives."
                },
                {
                        "id": "dg-daemon-prince-of-nurgle",
                        "name": "Daemon Prince of Nurgle",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 12,
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
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death Guard Defenders",
                                        "Fevered Strategist",
                                        "Miasma of Pestilence"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Daemon Prince of Nurgle This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "dg-daemon-prince-of-nurgle-with-wings",
                        "name": "Daemon Prince of Nurgle with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
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
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellforged weapons – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hellforged weapons – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Horrifying Visage",
                                        "Enfeebling Miasma"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Daemon Prince With Wings"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Daemon Prince of Nurgle with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "dg-foul-blightspawn",
                        "name": "Foul Blightspawn",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plague sprayer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blinding Spray",
                                        "Putrefying Stink"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Foul Blightspawn"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Foul Blightspawn This model is equipped with: plague sprayer; close combat weapon."
                },
                {
                        "id": "dg-great-unclean-one",
                        "name": "Great Unclean One",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 250
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 12,
                                "sv": "5+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plague flail",
                                                "range": "6\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Putrid vomit",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 5,
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
                                                "name": "Bileblade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Bilesword – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Bilesword – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Doomsday bell",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Reverberating Summons"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Feel No Pain 6+"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Nurgle",
                                        "Nurgle’s Rot"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Great Unclean One"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Great Unclean One This model is equipped with: plague flail; putrid vomit; bilesword. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-icon-bearer",
                        "name": "Icon Bearer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "5+",
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
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plague knife",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unclean Icon",
                                        "Blessed Icon of Disease"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Icon Bearer"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Icon Bearer This model is equipped with: boltgun; plague knife."
                },
                {
                        "id": "dg-lord-of-contagion",
                        "name": "Lord of Contagion",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Manreaper – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Manreaper – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vector of Disease",
                                        "Unholy Resilience"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Lord Of Contagion"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Blightlord Terminators; Deathshroud Terminators.",
                        "compositionText": "1 Lord of Contagion This model is equipped with: manreaper."
                },
                {
                        "id": "dg-lord-of-poxes",
                        "name": "Lord of Poxes",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
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
                                                        "Hazardous",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Great plague blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gift of Poxes",
                                        "Shroud of Disease"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Lord Of Poxes"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Lord of Poxes This model is equipped with: plasma pistol; great plague blade."
                },
                {
                        "id": "dg-lord-of-virulence",
                        "name": "Lord of Virulence",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin plague spewer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
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
                                "core": [
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Virulent Aura",
                                        "Blight Bombardment"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Lord Of Virulence"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Blightlord Terminators; Deathshroud Terminators.",
                        "compositionText": "1 Lord of Virulence This model is equipped with: twin plague spewer; power fist."
                },
                {
                        "id": "dg-malignant-plaguecaster",
                        "name": "Malignant Plaguecaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
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
                                                        "Lethal Hits",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plague Wind – witchfire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Plague Wind – focused witchfire",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Hazardous",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Corrupted staff",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gift of Contagion",
                                        "Pestilent Fallout"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Nurgle",
                                "Malignant Plaguecaster"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Plague Marines; Poxwalkers.",
                        "compositionText": "1 Malignant Plaguecaster This model is equipped with: bolt pistol; Plague Wind; corrupted staff."
                },
                {
                        "id": "dg-mortarion",
                        "name": "Mortarion",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 380
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 16,
                                "ld": "5+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lantern",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Pistol",
                                                        "Sustained Hits D3"
                                                ]
                                        },
                                        {
                                                "name": "Rotwind",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Silence – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Silence – sweep",
                                                "range": "Melee",
                                                "a": 15,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of the Death Guard",
                                        "Host of Plagues"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Fly",
                                "Epic Hero",
                                "Grenades",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Primarch",
                                "Mortarion"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Mortarion – EPIC HERO This model is equipped with: Lantern; Rotwind; Silence. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-noxious-blightbringer",
                        "name": "Noxious Blightbringer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                        "Pistol",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Cursed plague bell",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Psyker 2+",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sickening Vitality",
                                        "Tocsin of Misery"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Noxious Blightbringer"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Plague Marines; Poxwalkers.",
                        "compositionText": "1 Noxious Blightbringer This model is equipped with: plasma pistol; cursed plague bell."
                },
                {
                        "id": "dg-plague-surgeon",
                        "name": "Plague Surgeon",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
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
                                                        "Lethal Hits",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Balesword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tainted Narthecium",
                                        "Inflamed Infections"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Plague Surgeon"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Plague Surgeon This model is equipped with: bolt pistol; balesword."
                },
                {
                        "id": "dg-rotigus",
                        "name": "Rotigus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 265
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 12,
                                "sv": "5+",
                                "w": 22,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Streams of brackish filth",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gnarlrod – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Gnarlrod – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Feel No Pain 6+"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Virulent Blessing",
                                        "Deluge of Nurgle"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Rotigus"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Rotigus – EPIC HERO This model is equipped with: streams of brackish filth; gnarlrod. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-tallyman",
                        "name": "Tallyman",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "a": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Malicious Calculations",
                                        "Sevenfold Chant"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Nurgle",
                                "Tallyman"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plague Marines.",
                        "compositionText": "1 Tallyman This model is equipped with: plasma pistol; close combat weapon."
                },
                {
                        "id": "dg-typhus",
                        "name": "Typhus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lakrimae – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Lakrimae – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Destroyer Hive",
                                        "Eater Plague"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Epic Hero",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Typhus"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "leaderText": "This model can be attached to the following units: Blightlord Terminators; Deathshroud Terminators; Poxwalkers.",
                        "compositionText": "1 Typhus – EPIC HERO This model is equipped with: Lakrimae."
                },
                {
                        "id": "dg-plague-marines",
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
                                "Death Guard"
                        ],
                        "compositionText": "1 Plague Champion 4-9 Plague Marines Every model is equipped with: boltgun; plague knives."
                },
                {
                        "id": "dg-plaguebearers",
                        "name": "Plaguebearers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Plaguesword",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Infected Outbreak",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Plaguebearers"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Plagueridden 9 Plaguebearers Every model is equipped with: plaguesword."
                },
                {
                        "id": "dg-chaos-rhino",
                        "name": "Chaos Rhino",
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
                                                "name": "Combi-bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Transport",
                                "Dedicated Transport",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 DEATH GUARD INFANTRY models. It cannot transport TERMINATOR models."
                },
                {
                        "id": "dg-miasmic-malignifier",
                        "name": "Miasmic Malignifier",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 10,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Miasmic gouts",
                                                "range": "9\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Putrescent Fog",
                                        "Diseased Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Nurgle",
                                "Miasmic Malignifier"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Miasmic Malignifier This model is equipped with: miasmic gouts."
                },
                {
                        "id": "dg-defiler",
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
                                                "name": "Ectoplasma destructor",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
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
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hades battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
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
                                                "keywords": [
                                                        "Lethal Hits"
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
                                                "name": "Heavy missile launcher – krak",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
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
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
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
                                                        "Lethal Hits",
                                                        "Sustained Hits 1"
                                                ]
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
                                                        "Lethal Hits",
                                                        "Melta 2"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                        },
                                        {
                                                "name": "Shearing claws – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shearing claws – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Barrage of Filth"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-beasts-of-nurgle",
                        "name": "Beasts of Nurgle",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                },
                                {
                                        "models": 2,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 9,
                                "sv": "6+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Putrid appendages",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Deep Strike",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grotesque Regeneration"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Beasts Of Nurgle"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1-2 Beasts of Nurgle Every model is equipped with: putrid appendages."
                },
                {
                        "id": "dg-blightlord-terminators",
                        "name": "Blightlord Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 115
                                },
                                {
                                        "models": 5,
                                        "cost": 185
                                },
                                {
                                        "models": 10,
                                        "cost": 370
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
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
                                                "name": "Combi-bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
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
                                                "name": "Bubotic blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
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
                                                "name": "Flail of corruption",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blistering Fusillade"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Blightlord Terminators"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Blightlord Champion 2-9 Blightlord Terminators Every model is equipped with: combi-bolter; bubotic blade."
                },
                {
                        "id": "dg-chaos-land-raider",
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
                                                        "Lethal Hits",
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
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
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
                                "Nurgle",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 DEATH GUARD INFANTRY models. Each TERMINATOR model takes up the space of 2 models."
                },
                {
                        "id": "dg-chaos-predator-annihilator",
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
                                                        "Lethal Hits",
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
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Sustained Hits 1"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Metalophagic Infection"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Predator Annihilator"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Predator Annihilator This model is equipped with: Predator twin lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-chaos-predator-destructor",
                        "name": "Chaos Predator Destructor",
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
                                                        "Lethal Hits",
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
                                                        "Lethal Hits",
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
                                                        "Lethal Hits",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hail of Corrosive Disease"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Predator Destructor"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Chaos Predator Destructor This model is equipped with: predator autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 7,
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
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
                                        "Deadly Demise 1",
                                        "Feel No Pain 5+",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lethal Ichor"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Nurgle",
                                "Chaos Spawn"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "dg-deathshroud-terminators",
                        "name": "Deathshroud Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 160
                                },
                                {
                                        "models": 6,
                                        "cost": 320
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 7,
                                "sv": "2+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plaguespurt gauntlet",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Ignores Cover",
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Manreaper – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Manreaper – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Silent Bodyguard",
                                        "Death Approaches",
                                        "Icon of Despair"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Nurgle",
                                "Terminator",
                                "Deathshroud Terminators"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Deathshroud Champion 2-5 Deathshroud Terminators Every model is equipped with: plaguespurt gauntlet; manreaper."
                },
                {
                        "id": "dg-foetid-bloat-drone",
                        "name": "Foetid Bloat-drone",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Plaguespitter",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fleshmower",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plague probe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hovering Death"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Foetid Bloat-Drone"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Foetid Bloat-drone This model is equipped with: fleshmower; plague probe."
                },
                {
                        "id": "dg-foetid-bloat-drone-with-heavy-blight-launcher",
                        "name": "Foetid Bloat-drone with Heavy Blight Launcher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy blight launcher",
                                                "range": "36\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plague probe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Explosive Blight"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Foetid Bloat-Drone With Heavy Blight Launcher"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Foetid Bloat-drone This model is equipped with: heavy blight launcher; plague probe."
                },
                {
                        "id": "dg-helbrute",
                        "name": "Helbrute",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                        "Lethal Hits",
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
                                                        "Melta 2",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked",
                                                        "Lethal Hits"
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
                                                        "Lethal Hits",
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
                                                "a": 4,
                                                "ws": "3+",
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Diseased Malice",
                                        "Froth-spattered Frenzy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Nurgle",
                                "Helbrute"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Helbrute This model is equipped with: multi-melta; Helbrute fist; close combat weapon."
                },
                {
                        "id": "dg-myphitic-blight-hauler",
                        "name": "Myphitic Blight-hauler",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                },
                                {
                                        "models": 2,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 10,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bile spurt",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
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
                                                        "Melta 2",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gnashing maw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tank Hunters"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Myphitic Blight-Hauler"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1-2 Myphitic Blight-hulers Every model is equipped with: bile spurt; missile launcher; multi-melta; gnashing maw."
                },
                {
                        "id": "dg-nurglings",
                        "name": "Nurglings",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 40
                                },
                                {
                                        "models": 6,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Diseased claws and teeth",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "5+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mischief Makers"
                                ]
                        },
                        "keywords": [
                                "Swarm",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Nurglings"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "3-6 Nurgling Swarms Every model is equipped with: diseased claws and teeth."
                },
                {
                        "id": "dg-plague-drones",
                        "name": "Plague Drones",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 115
                                },
                                {
                                        "models": 6,
                                        "cost": 230
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 8,
                                "sv": "6+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death’s heads",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Foul mouthparts",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plaguesword",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Decay"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death’s Heads",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Fly",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Summoned",
                                "Plague Drones"
                        ],
                        "factionKeywords": [
                                "Plague Legions"
                        ],
                        "compositionText": "1 Plaguebringer 2-5 Plague Drones Every model is equipped with: death’s heads; foul mouthparts; plaguesword."
                },
                {
                        "id": "dg-plagueburst-crawler",
                        "name": "Plagueburst Crawler",
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
                                "sv": "2+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 3
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Entropy cannon",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Heavy slugger",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plagueburst mortar",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Plaguespitter",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Rothail volley gun",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Rapid Fire 3"
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
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spore-laced Shock Waves"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Chaos",
                                "Nurgle",
                                "Daemon",
                                "Plagueburst Crawler"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "1 Plagueburst Crawler This model is equipped with: 2 entropy cannons; heavy slugger; Plagueburst mortar; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dg-poxwalkers",
                        "name": "Poxwalkers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Improvised weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Nurgle’s Gift (Aura)"
                                ],
                                "wargear": [],
                                "other": [
                                        "Curse of the Walking Pox"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Nurgle",
                                "Poxwalkers"
                        ],
                        "factionKeywords": [
                                "Death Guard"
                        ],
                        "compositionText": "10-20 Poxwalkers Every model is equipped with: improvised weapon."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(deathGuard);
})();
