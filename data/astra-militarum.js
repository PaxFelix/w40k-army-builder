/**
 * W40K Army Builder — Astra Militarum (10th Edition)
 *
 * Datasheets from Codex: Astra Militarum. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const astraMilitarum = {
        id: "astra-militarum",
        name: "Astra Militarum",
        icon: "\uD83D\uDEE1\uFE0F",
        allegiance: "Imperium",
        flavour: "",
        armyRules: [
            { name: "Voice of Command", flavour: "Raised and trained to instil unwavering obedience, officers of the Imperial Guard command authority and respect, and issue orders with imperious bellows that cut through the clamour of war.", text: "If your Army Faction is ASTRA MILITARUM, OFFICER models with this ability can issue Orders. Each OFFICER's datasheet will specify how many Orders it can issue in a battle round and which units are eligible to receive those Orders. Each time an Officer model issues an Order, select one of the Orders below, then select one eligible friendly unit within 6\" of that Officer model to issue it to.\n\nOFFICER models can issue Orders in your Command phase and at the end of a phase in which they disembarked from a TRANSPORT or were set up on the battlefield.\n\nUntil the start of your next Command phase, the unit you selected is affected by that Order. Unless otherwise stated, a unit can only be affected by one Order at a time (any Order subsequently issued to that unit replaces the current one). Orders cannot be issued to Battle-shocked units, and if a unit being affected by an Order becomes Battle-shocked, that Order ceases to affect that unit.\n\nOnly ASTRA MILITARUM models gain the benefit of an Order issued to their unit.\n\nORDERS:\n- Move! Move! Move! (M +3\"): Add 3\" to the Move characteristic of models in this unit.\n- Fix Bayonets! (WS +1): Improve the Weapon Skill characteristic of melee weapons equipped by models in this unit by 1.\n- Take Aim! (BS +1): Improve the Ballistic Skill characteristic of ranged weapons equipped by models in this unit by 1.\n- First Rank, Fire! Second Rank, Fire! (A +1): Improve the Attacks characteristic of Rapid Fire weapons equipped by models in this unit by 1.\n- Take Cover! (SV +1): Improve the Save characteristic of models in this unit by 1 (this cannot improve a model's Save to better than 3+).\n- Duty and Honour! (LD +1, OC +1): Improve the Leadership and Objective Control characteristics of models in this unit by 1.\" }
        ],
        detachments: [
            {
                name: "Combined Arms",
                flavour: "",
                rule: { name: "Born Soldiers", flavour: "Regiments of numerous origins and tactical roles inculcate their soldiers from an early age with the legendary doctrines of the Tactica Imperium. Infantry train in close-range fire patterns intended to decimate enemy soldiers, whilst tank crews spend countless hours practising to bring down enemy armour and rampaging monstrosities.", text: "Each time a model in a REGIMENT unit from your army makes a ranged attack that targets a visible unit (excluding MONSTERS and VEHICLES), that attack has the [Lethal Hits] ability.\n\nEach time a model in a SQUADRON unit from your army makes a ranged attack that targets a visible MONSTER or VEHICLE unit, that attack has the [Lethal Hits] ability.", restrictions: "" },
                enhancements: [
                    { name: "Death Mask of Ollanius", cost: 10, restriction: "OFFICER model only.", flavour: "This mask depicts in obsidian and void-fired bronze the agonised visage of Saint Ollanius. Soldiers in the ancient artefact's presence are gifted the determination and endurance of the famous martyr himself.", text: "While the bearer's unit is Battle-shocked, subtract 1 from the Objective Control characteristic of models in that unit, instead of changing it to 0." },
                    { name: "Drill Commander", cost: 20, restriction: "OFFICER model only.", flavour: "This officer has spent countless hours putting their soldiers through ceaseless firing drills. In the heat of combat, the worth of this training reveals itself.", text: "While the bearer is leading a unit, each time a model in that unit makes a ranged attack, if that unit Remained Stationary this turn, a Critical Hit is scored on a successful unmodified Hit roll of 5+." },
                    { name: "Grand Strategist", cost: 15, restriction: "OFFICER model only.", flavour: "This commander can precisely anticipate the ebb and flow of war, their seemingly reactive tactics often prepared far in advance.", text: "In your Command phase, the bearer can issue one additional Order." },
                    { name: "Reactive Command", cost: 15, restriction: "OFFICER model only.", flavour: "A natural tactician, this officer responds to their opponent's manoeuvres in swift and decisive fashion, never allowing the foe to dictate the battle.", text: "Each time an enemy unit is set up within 9\" of the bearer's unit, the bearer can issue one Order. This is not counted towards the number of Orders the bearer can issue in a battle round." },
                ],
                stratagems: [
                    { name: "Coordinated Action", cp: 1, type: "Battle Tactic", flavour: "The potency of armour and infantry is greatly enhanced when both work in close concert.", when: "Start of any phase.", target: "One REGIMENT unit from your army and one SQUADRON unit from your army within 6\" of and visible to that REGIMENT unit.", effect: "Until the end of the phase, Orders affecting one of your units affect the other, and vice versa.", restrictions: "" },
                    { name: "Reinforcements!", cp: 2, type: "Strategic Ploy", flavour: "So numerous are the infantry of the Astra Militarum that fresh reserves can be called up at a moment's notice.", when: "Any phase.", target: "One INFANTRY REGIMENT unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.", effect: "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength and with all of its wounds remaining.", restrictions: "This Stratagem cannot be used to return destroyed CHARACTER units to Attached units. You can only use this Stratagem once per battle." },
                    { name: "Flexible Command", cp: 2, type: "Strategic Ploy", flavour: "Some Astra Militarum officers have served with infantry and armour, and are equally adept at commanding either.", when: "Your Command phase.", target: "Any number of ASTRA MILITARUM OFFICER units from your army.", effect: "Until the end of the phase, your Officers can issue Orders to REGIMENT units and SQUADRON units.", restrictions: "" },
                    { name: "Fields of Fire", cp: 1, type: "Battle Tactic", flavour: "Armour and infantry work in concert, forming overlapping fields of fire against which neither cover nor heavy armour can protect.", when: "Your Shooting phase.", target: "One REGIMENT unit and one SQUADRON unit from your army that have not been selected to shoot this phase.", effect: "Select one enemy unit. Until the end of the phase, each time your selected REGIMENT and SQUADRON units make an attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Inspired Command", cp: 1, type: "Epic Deed", flavour: "The greatest officers make their voices heard at the critical moment, their orders swift and decisive.", when: "Your opponent's Command phase.", target: "One ASTRA MILITARUM OFFICER unit from your army.", effect: "Your OFFICER can issue one Order as if it were your Command phase.", restrictions: "" },
                    { name: "Stalwart Protector", cp: 1, type: "Battle Tactic", flavour: "The indefatigable tanks of the Astra Militarum serve as mobile cover for the troops marching in their shadow.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ASTRA MILITARUM VEHICLE unit from your army.", effect: "Until the end of the phase, each time a ranged attack is allocated to an INFANTRY model from your army, if that model is not fully visible to every model in the attacking unit because of your VEHICLE, that model has the Benefit of Cover against that attack.", restrictions: "" },
                ]
            },
            {
                name: "Siege Regiment",
                flavour: "",
                rule: { name: "Artillery Support", flavour: "Artillery barrages lay the ground for the assault to come.", text: "At the start of the battle round, select one of the following types of artillery support.\n\n- Creeping Barrage: Roll one D6 for each enemy unit that is more than 12\" from every model from your army that is on the battlefield: On a 5+, until the end of the battle round, that unit is shaken. While a unit is shaken, subtract 2\" from its Move characteristic and subtract 2 from Charge rolls made for it. The maximum number of units that can be shaken by this rule in each battle round depends on the battle size, as shown below.\n- Incendiary Bombardment: Select a number of enemy units more than 12\" from every model from your army that is on the battlefield. Until the end of the battle round, those enemy units are scattered. While a unit is scattered, it cannot have the Benefit of Cover. The maximum number of units you can select in this way depends on the battle size, as shown below.\n- Smoke Shells: Select a number of units from your army. Until the end of the battle round, those units have the Stealth ability.\n\nBATTLE SIZE / MAXIMUM NUMBER OF UNITS:\n- Incursion: 2\n- Strike Force: 3\n- Onslaught: 4", restrictions: "" },
                enhancements: [
                    { name: "Eager Advance", cost: 20, restriction: "INFANTRY OFFICER model only.", flavour: "This officer relishes serving in the vanguard and seeks to take up a forward position to be closer to the foe when the firing begins.", text: "While the bearer is leading a REGIMENT unit, that unit has the Scouts 6\" ability." },
                    { name: "Flash Grenades", cost: 20, restriction: "INFANTRY OFFICER model only.", flavour: "These grenades emit loud bangs and bright flashes of light, disorienting defenders and allowing the officer and their bodyguard to press home their assault.", text: "Enemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                    { name: "Legacy Sidearm", cost: 10, restriction: "INFANTRY OFFICER model only.", flavour: "Handed down by a mentor, this officer's pistol is an artificer-crafted example of its type, and is all the deadlier for it.", text: "Add 2 to the Attacks characteristics of the bearer's Pistols." },
                    { name: "Stalwart's Honours", cost: 15, restriction: "OFFICER model only.", flavour: "Such is this officer's aura of confidence that the soldiers under their command march into battle heedless of incoming fire, trusting in that old adage of the faithful - the Emperor protects.", text: "While the bearer is leading a unit, when that unit is issued an Order, it is also affected by the Take Cover! Order." },
                ],
                stratagems: [
                    { name: "Trench Fighters", cp: 1, type: "Battle Tactic", flavour: "Inured to the savage horrors of trench warfare, these warriors will fight until their last breath.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ASTRA MILITARUM INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 2 to the result if it is a REGIMENT model. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Over the Top", cp: 2, type: "Strategic Ploy", flavour: "The whistle blows to signal the attack. Waves of infantry emerge from cover to advance upon the foe.", when: "Start of your Command phase.", target: "One INFANTRY OFFICER model from your army.", effect: "Until the end of the phase, when your model issues the Move! Move! Move! Order, it can issue that Order to any number of eligible friendly INFANTRY REGIMENT units, regardless of range to your model.", restrictions: "" },
                    { name: "Flare Burst", cp: 1, type: "Wargear", flavour: "As the infantry assault proceeds, flares are fired into the skies, illuminating opponents below.", when: "Your Shooting phase.", target: "One ASTRA MILITARUM CHARACTER unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time your unit makes an attack that targets a visible enemy unit within 12\", you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Callous Sacrifice", cp: 1, type: "Battle Tactic", flavour: "All victory requires sacrifice. The destruction of the enemy must always take priority over the preservation of lives.", when: "Your Shooting phase.", target: "One PLATOON unit from your army that is within Engagement Range of one or more enemy units.", effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model's unit is within Engagement Range of your unit, roll one D6: on a 4+, one model from your unit is destroyed after the attacking unit has finished making its attacks.", restrictions: "" },
                    { name: "Furious Fusillade", cp: 1, type: "Strategic Ploy", flavour: "Whilst accuracy has its benefits, sheer weight of fire is no less effective at bringing down the foe.", when: "Your Shooting phase.", target: "One PLATOON unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, add 1 to the Attacks characteristic of ranged weapons equipped by models in your unit while targeting an enemy unit within half range.", restrictions: "" },
                    { name: "Minefield", cp: 1, type: "Wargear", flavour: "Sappers have laid down a network of mines across the battlefield. Should the enemy attempt an ill-advised assault, they will surely suffer for it.", when: "Start of your opponent's Charge phase.", target: "One PLATOON unit from your army.", effect: "Until the end of the phase, each time an enemy unit ends a Charge move within Engagement Range of your unit, roll one D6 for each model in that enemy unit: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).", restrictions: "" },
                ]
            },
            {
                name: "Mechanised Assault",
                flavour: "",
                rule: { name: "Armoured Fist", flavour: "Astra Militarum mechanised forces combine heavy armour with elite infantry. Reliant on speed and short-ranged firepower, the armoured spearhead hurtles through the enemy line and deploys its cargo of shock troops to cut the enemy down with volleys of lasgun fire.", text: "Each time an ASTRA MILITARUM model from your army makes a ranged attack in a turn in which it disembarked from a TRANSPORT, add 1 to the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Bold Leadership", cost: 25, restriction: "INFANTRY OFFICER model only.", flavour: "This officer's aggressive command style sees them lead the advance personally, planting the regiment's colours on seized objectives and leaving following troops to defend the ground they have gained.", text: "If you control an objective marker at the end of your Command phase, and the bearer's unit (or any TRANSPORT it is embarked within) is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn." },
                    { name: "Sacred Unguents", cost: 10, restriction: "ASTRA MILITARUM TECH-PRIEST ENGINSEER model only.", flavour: "Regimental Tech-Priests bless the vehicles under their charge with holy prayer and sacred oils.", text: "At the start of your Shooting phase, select one TRANSPORT from your army (excluding AIRCRAFT and TITANIC units) within 3\" of the bearer. Until the end of the phase, each time that TRANSPORT makes an attack, you can re-roll the Hit roll." },
                    { name: "Smoke Grenades", cost: 10, restriction: "INFANTRY OFFICER model only.", flavour: "Smokescreens provide cover for the infantry advance and enable troops to disembark safely.", text: "The bearer's unit has the Benefit of Cover and the Stealth ability while the bearer's unit is wholly within 3\" of one or more friendly TRANSPORT models." },
                    { name: "Vanguard Honours", cost: 15, restriction: "INFANTRY OFFICER model only.", flavour: "Decorated veteran officers know when and where to press home the assault, ensuring their squad disembarks in the optimum position.", text: "The bearer's unit can disembark from a TRANSPORT after it has Advanced. If it does, it counts as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn." },
                ],
                stratagems: [
                    { name: "Vox-relay", cp: 1, type: "Wargear", flavour: "This armoured transport has been modified to house a tactical command suite and vox-relay, enabling embarked officers to give orders from relative safety.", when: "Your Command phase.", target: "One INFANTRY OFFICER unit from your army embarked within a TRANSPORT. You can use this Stratagem on that unit even though it is embarked within a TRANSPORT.", effect: "Until the end of the phase, your unit can issue Orders even though it is not on the battlefield, and it can issue Orders to ASTRA MILITARUM TRANSPORT units from your army (excluding TITANIC units) regardless of the distance to and from your unit's TRANSPORT.", restrictions: "" },
                    { name: "Rapid Dispersal", cp: 1, type: "Strategic Ploy", flavour: "Troops trained in mechanised combat disembark swiftly from their transport's hatches, avoiding incoming fire and advancing on their objectives.", when: "Your Movement phase.", target: "One ASTRA MILITARUM INFANTRY unit from your army that disembarked from a TRANSPORT this phase.", effect: "Your INFANTRY unit can make a Normal move of up to D6\".", restrictions: "" },
                    { name: "Clear and Secure", cp: 1, type: "Battle Tactic", flavour: "Mechanised charges rely upon shock, awe and speed to secure ground. Any enemies that block the path must be obliterated swiftly.", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within range of an objective marker, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Swift Interception", cp: 1, type: "Battle Tactic", flavour: "Fast-moving armoured transports allow a commander to react quickly to enemy movements and intercept outflanking opponents.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One TRANSPORT unit from your army (excluding AIRCRAFT and TITANIC units) that is not within Engagement Range of one or more enemy units, and is within 9\" of the enemy unit that just ended that move.", effect: "Your TRANSPORT can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Hasty Extraction", cp: 1, type: "Battle Tactic", flavour: "Should the tide turn against them, mechanised forces swiftly re-embark their transports in order to reposition.", when: "Your opponent's Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move.", target: "One ASTRA MILITARUM INFANTRY unit from your army that was selected as a target of that charge.", effect: "Provided your unit is not within Engagement Range of one or more enemy units and every model in your unit is within 3\" of an ASTRA MILITARUM TRANSPORT from your army, it can embark within that TRANSPORT.", restrictions: "" },
                    { name: "Move Out", cp: 1, type: "Strategic Ploy", flavour: "High command's priorities have shifted. Swift embarkation and redeployment is required.", when: "End of your opponent's turn.", target: "One ASTRA MILITARUM unit from your army.", effect: "Provided your unit is not within Engagement Range of one or more enemy units and every model in your unit is within 3\" of an ASTRA MILITARUM TRANSPORT from your army, it can embark within that TRANSPORT.", restrictions: "" },
                ]
            },
            {
                name: "Hammer of the Emperor",
                flavour: "",
                rule: { name: "Iron Tread", flavour: "The armoured spearhead of an Astra Militarum army group grinds relentlessly forward, ploughing through enemy infantry with arrogant disregard.", text: "Each time a SQUADRON unit from your army Advances, do not make an Advance roll for it; until the end of the phase, add 6\" to the Move characteristic of models in that unit, and when making that Advance move, that unit can move within Engagement Range of enemy models but cannot end that move within Engagement Range of enemy models.", restrictions: "" },
                enhancements: [
                    { name: "Calm Under Fire", cost: 15, restriction: "VEHICLE OFFICER model only.", flavour: "In clipped tones, this officer issues clear and precise orders to the vehicles under their command - regardless of the bloodshed.", text: "Once per turn, after the bearer issues an Order to a SQUADRON unit from your army, it can issue the same Order to another SQUADRON unit from your army." },
                    { name: "Indomitable Steed", cost: 15, restriction: "VEHICLE OFFICER model only.", flavour: "This officer goes to war in a favoured vehicle that - whether by fortune or apparent divine intervention - has survived dozens of battles despite suffering heavy damage on multiple occasions.", text: "The bearer has the Feel No Pain 6+ ability." },
                    { name: "Regimental Banner", cost: 20, restriction: "VEHICLE OFFICER model only.", flavour: "A regimental banner flies from this command vehicle, its colours displaying the might of the Astra Militarum for all to see.", text: "Add 3 to the bearer's Objective Control characteristic." },
                    { name: "Veteran Crew", cost: 20, restriction: "VEHICLE OFFICER model only.", flavour: "Drilled endlessly by the officer in command, the crew of this tank are crack shots who know how to make every shell count.", text: "Each time a model in the bearer's unit makes a ranged attack, re-roll a Hit roll of 1." },
                ],
                stratagems: [
                    { name: "Final Hour", cp: 1, type: "Epic Deed", flavour: "Even with flames licking through the interior of their vehicle, this crew refuse to abandon their positions, regardless of the risk to their lives.", when: "Your Command phase.", target: "One SQUADRON unit from your army that is Below Half-strength (excluding OFFICER units).", effect: "Until the end of the battle round, ranged weapons equipped by models in your unit (excluding [One Shot] weapons) have the [Hazardous] ability, and each time a model in your unit makes a ranged attack, you can ignore any or all modifiers to that attack's Ballistic Skill characteristic and to the Hit roll.", restrictions: "" },
                    { name: "Blazing Advance", cp: 1, type: "Battle Tactic", flavour: "By petitioning the machine spirits of their vehicles, tank crews push their armoured steeds beyond conventional limits.", when: "Your Movement phase, just after a SQUADRON unit from your army Advances.", target: "That SQUADRON unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced.", restrictions: "" },
                    { name: "Tactical Withdrawal", cp: 1, type: "Strategic Ploy", flavour: "Even in retreat, the armoured fist of the Astra Militarum keep their cannons firing.", when: "Your Movement phase, just after a SQUADRON unit from your army Falls Back.", target: "That SQUADRON unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Crash Through", cp: 1, type: "Strategic Ploy", flavour: "Ruins, barricades, bunkers; few such structures can impede the grinding advance of an Astra Militarum armoured corps.", when: "Your Movement phase or your Charge phase.", target: "One ASTRA MILITARUM VEHICLE unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features as if they were not there.", restrictions: "" },
                    { name: "Furious Cannonade", cp: 1, type: "Battle Tactic", flavour: "At close range, armoured vehicles open up with their full complement of weapons, dispensing the Emperor's righteous wrath.", when: "Your Shooting phase.", target: "One SQUADRON unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a unit within 12\", improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Ablative Plating", cp: 2, type: "Wargear", flavour: "Crews routinely reinforce their vehicle's armour, adding ablative plating, track links, sandbags and other means to protect the hull.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ASTRA MILITARUM VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                ]
            },
            {
                name: "Recon Element",
                flavour: "",
                rule: { name: "Masters of Camouflage", flavour: "Reconnaissance infantry use face paint, camo-pattern fatigues, ghillie suits and more to conceal themselves from the foe. Vehicles are camouflaged using netting and disruptive camo patterns, enabling them to blend into surrounding terrain. Suitably outfitted, recon forces need only rely upon stealth and concealment rather than heavy armour for protection.", text: "ASTRA MILITARUM WALKER and REGIMENT models from your army have the Benefit of Cover. While such a model has the Benefit of Cover for any other reason (e.g. because it is wholly within a RUIN), improve the Save characteristic of that model by 1 (to a maximum of 3+).", restrictions: "" },
                enhancements: [
                    { name: "Guerrilla Honours", cost: 25, restriction: "INFANTRY OFFICER model only.", flavour: "This officer is a specialist in covert warfare, their experience ensuring they know exactly when to redeploy their forces and close the jaws of their pre-prepared trap.", text: "After both players have deployed their armies, if the bearer is on the battlefield, select up to three other ASTRA MILITARUM INFANTRY units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
                    { name: "Scare Gas Grenades", cost: 5, restriction: "ASTRA MILITARUM INFANTRY model only.", flavour: "Filled with powerful hallucinogens, these grenades overwhelm the senses of those who breathe their fumes, causing them to panic and flee their positions.", text: "Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, select one enemy unit within 8\" of the bearer's unit (excluding MONSTER and VEHICLE units); that unit must take a Battle-shock test." },
                    { name: "Survival Gear", cost: 5, restriction: "ASTRA MILITARUM INFANTRY model only.", flavour: "Whether equipped with climbing gear, machetes or snow shoes, this unit moves swiftly across inhospitable terrain to engage the enemy.", text: "The bearer has the Scouts 6\" ability." },
                    { name: "Tripwires", cost: 20, restriction: "ASTRA MILITARUM INFANTRY model only.", flavour: "Carefully placed tripwires detonate booby traps as the enemy advance, the resulting explosions causing the foe to halt in their tracks.", text: "Each time an enemy INFANTRY or MOUNTED unit ends a Normal, Advance, Charge or Fall Back move within 9\" of the bearer's unit, roll one D6: on a 4+, until the start of your next turn, that enemy unit is stunned. While a unit is stunned, each time a model in that unit makes an attack, subtract 1 from the Hit roll." },
                ],
                stratagems: [
                    { name: "Crack Shots", cp: 1, type: "Battle Tactic", flavour: "Reconnaissance units are often comprised of experienced survivalists and hunters, many of whom are expert marksmen.", when: "Your Shooting phase.", target: "One PLATOON unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Precision] ability.", restrictions: "" },
                    { name: "Draw Them Out", cp: 1, type: "Strategic Ploy", flavour: "Light infantry utilise harassing fire to draw their enemies into position for an ambush.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One PLATOON unit from your army that is within 9\" of that enemy unit, and is not within Engagement Range of one or more enemy units.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Scramble Field", cp: 1, type: "Wargear", flavour: "This unit is equipped with a scramble field generator, a device capable of disrupting teleportation beacons and other homing technology.", when: "Start of your opponent's Reinforcements step.", target: "One ASTRA MILITARUM INFANTRY unit from your army.", effect: "Until the end of the phase, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of your unit.", restrictions: "" },
                    { name: "Courageous Diversion", cp: 1, type: "Strategic Ploy", flavour: "These soldiers scream blood-curdling battle cries as they rush forwards, emboldening their squadmates and causing the enemy to waver.", when: "Start of your opponent's Shooting phase.", target: "One ASTRA MILITARUM INFANTRY or ASTRA MILITARUM MOUNTED unit from your army.", effect: "Until the end of the phase, your unit has the Feel No Pain 6+ ability, and each time an enemy model makes an attack, if your unit is the closest eligible target, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Tanglefoot Grenades", cp: 1, type: "Wargear", flavour: "Employed by skirmishers and recon troops, tanglefoot grenades ensnare advancing infantry, slowing their advance.", when: "Start of your opponent's Charge phase.", target: "One ASTRA MILITARUM GRENADES unit from your army.", effect: "Until the end of the phase, each time an enemy unit selects your unit as the target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).", restrictions: "" },
                    { name: "Scouting Outriders", cp: 1, type: "Battle Tactic", flavour: "Sentinels and cavalry units use their speed and mobility to outflank the foe, ready to strike at the most opportune moment.", when: "End of your opponent's turn.", target: "One ASTRA MILITARUM MOUNTED or ASTRA MILITARUM WALKER unit from your army that is wholly within 10\" of one or more battlefield edges and not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Bridgehead Strike",
                flavour: "",
                rule: { name: "Only the Best", flavour: "The soldiers who make up such targeted strike forces are hand-picked for their excellence and \u2013 where possible \u2013 provided with rigorous additional training to prepare them for conditions and foes on the ground.", text: "Each time an ASTRA MILITARUM INFANTRY model from your army makes a ranged attack, re-roll a Hit roll of 1.\n\nFire Zone Purge: Each time a MILITARUM TEMPESTUS model from your army makes a ranged attack in a turn in which it was set up on the battlefield from Reserves or it disembarked from a TRANSPORT, add 1 to the Hit roll.\n\nKeywords: If a MILITARUM TEMPESTUS OFFICER model from your army is your WARLORD, TEMPESTUS SCIONS units from your army gain the BATTLELINE keyword, and while such a unit is not Battle-shocked, add 1 to the Objective Control characteristic of TEMPESTUS SCIONS models in that unit.", restrictions: "" },
                enhancements: [
                    { name: "Bombast-class Vox-array", cost: 35, restriction: "MILITARUM TEMPESTUS OFFICER model only.", text: "This device is a precious example of an omni-frequency master vox-array manufactured on the long-lost forge world of Urvax. It facilitates the rapid dissemination of orders throughout the entire strike force.\n\nEach time the bearer issues an Order, if the bearer's unit contains one or more models equipped with a master vox, it can issue that Order to up to three different REGIMENT units, instead of only one." },
                    { name: "Priority-drop Beacon", cost: 30, restriction: "MILITARUM TEMPESTUS OFFICER model only.", text: "Locked to the designator runes of this officer's dropship and heavily warded against interference, this predeployed beacon ensures they land swiftly and on target.\n\nThe bearer's unit can be set up using the Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules." },
                    { name: "Shroud Projector", cost: 15, restriction: "MILITARUM TEMPESTUS OFFICER model only.", text: "Believed to be the roost of protective machine spirits, this small tech-ossuary is worn on a chain around the neck and obfuscates the bearer and their comrades when moving.\n\nEnemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                    { name: "Advance Augury", cost: 15, restriction: "INFANTRY OFFICER model only.", text: "This tactically astute officer insists on orbital sensor sweeps and psy-scrying ahead of the operation's commencement, providing vital intelligence.\n\nAfter both players have deployed their armies, select up to three REGIMENT units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                ],
                stratagems: [
                    { name: "Bellicosa Drop", cp: 1, type: "Battle Tactic", when: "The Reinforcements step of your Movement phase.", target: "One ASTRA MILITARUM INFANTRY unit from your army that is in Reserves and has the Deep Strike ability.", effect: "Until the end of the phase, when your unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.", restrictions: "Until the end of the turn, your unit is not eligible to declare a charge." },
                    { name: "Firing Hot", cp: 2, type: "Battle Tactic", when: "Your Shooting phase.", target: "One MILITARUM TEMPESTUS or KASRKIN unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, when targeting an enemy unit within 12\", improve the Strength and Armour Penetration characteristics of hot-shot lascarbines, hot-shot lasguns, hot-shot laspistols, hot-shot marksman rifles, hot-shot volley guns and sentry hot-shot volley guns equipped by models in your unit by 1.", restrictions: "" },
                    { name: "Fire and Relocate", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit (excluding TITANIC units) from your army.", effect: "Until the end of the phase, your unit is eligible to shoot in a turn in which it Advanced.", restrictions: "" },
                    { name: "Servo-designators", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase, just after an ASTRA MILITARUM INFANTRY unit from your army has shot.", target: "That ASTRA MILITARUM INFANTRY unit.", effect: "Select one enemy unit hit by one or more of those attacks that is visible to your unit. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.", restrictions: "" },
                    { name: "Aerial Extraction", cp: 1, type: "Epic Deed", when: "End of your opponent's Fight phase.", target: "One ASTRA MILITARUM unit from your army that is not within Engagement Range of one or more enemy units, if all of its models have the Deep Strike ability, or one VALKYRIE unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                    { name: "On My Position", cp: 1, type: "Epic Deed", when: "End of your opponent's Fight phase.", target: "One REGIMENT INFANTRY unit from your army that is within Engagement Range of one or more enemy units.", effect: "Roll one D6 for each enemy unit within Engagement Range of your unit: on a 2+, that enemy unit suffers D6 mortal wounds. Then, your unit suffers 3D3 mortal wounds.", restrictions: "" },
                ]
            },
            {
                name: "Grizzled Company",
                flavour: "",
                rule: { name: "Ruthless Discipline", flavour: "The officers of this company are wily, iron-willed veterans both respected and feared by the troops under their command. At their barked orders, even the weariest soldiers redouble their efforts.", text: "Add 1 to the number of Orders each ASTRA MILITARUM OFFICER model from your army can issue, as stated on their datasheet.\n\nWhile an ASTRA MILITARUM unit from your army is affected by an Order, each time a model in that unit makes an attack, re-roll a Hit roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "Abhuman Detail", cost: 20, restriction: "COMMISSAR model only.", text: "Ogryns respond well to this Commissar's stern discipline and are even known to accompany them as a personal bodyguard.\n\nAdd the OGRYN keyword to the list of units this model can issue Orders to (as stated on its datasheet).\n\nIn the Declare Battle Formations step, the bearer can be attached to an OGRYN SQUAD or BULLGRYN SQUAD unit." },
                    { name: "Aquilan Eye", cost: 20, restriction: "ASTRA MILITARUM OFFICER model only.", text: "This bionic lens contains a miniaturised auspex capable of detecting the slightest flaws in enemy defences.\n\nEach time you select an Order for the bearer to issue, you can select the Order below:\n\nTarget Weak Spot (Order): Each time a model in this unit makes a ranged attack that targets an enemy unit within 12\", improve the Armour Penetration characteristic of that attack by 1." },
                    { name: "Spec Ops Veteran", cost: 15, restriction: "ASTRA MILITARUM INFANTRY OFFICER model only.", text: "This veteran commando officer imparts their experience in clandestine warfare to the rank and file.\n\nEach time you select an Order for the bearer to issue, you can select the Order below:\n\nMove to the Shadows (Order): Each time a ranged attack targets this unit, until those attacks are resolved, models in this unit have the Stealth ability." },
                    { name: "Laud Hailer", cost: 10, restriction: "ASTRA MILITARUM OFFICER model only.", text: "This device amplifies the bearer's voice, enabling their orders to cut through the din of battle.\n\nEach time you select a unit for this OFFICER model to issue an Order to, that unit can be within 12\" instead of within 6\"." },
                ],
                stratagems: [
                    { name: "Snap to It", cp: 1, type: "", when: "Start of any phase.", target: "One ASTRA MILITARUM OFFICER unit from your army.", effect: "Your unit's OFFICER model can issue 1 Order as if it were your Command phase.", restrictions: "" },
                    { name: "No Retreat!", cp: 1, type: "", when: "Your Command phase.", target: "One ASTRA MILITARUM unit from your army affected by the Duty and Honour! Order.", effect: "If your unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of a phase.", restrictions: "" },
                    { name: "Veteran Sharpshooters", cp: 1, type: "", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Purging Fire", cp: 1, type: "", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit from your army affected by an Order that has not been selected to shoot this phase.", effect: "If your unit is within range of an objective marker, until the end of the phase, ranged weapons equipped by models in your unit have the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Mordian Minute", cp: 1, type: "", when: "Your Shooting phase.", target: "One ASTRA MILITARUM INFANTRY unit from your army affected by the First Rank, Fire! Second Rank, Fire! Order.", effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Strength characteristic of that attack by 1.", restrictions: "" },
                    { name: "Additional Armour", cp: 1, type: "", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ASTRA MILITARUM unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                ]
            },
            {
                name: "Steel Hammer",
                flavour: "",
                rule: { name: "Ceaseless Cannonade", flavour: "The heaviest Astra Militarum vehicles are adamantine behemoths whose armour is almost impenetrable. The crews of these colossal war engines need have no concern for the integrity of their vehicles, unleashing even the most violently destructive ordnance at point-blank range.", text: "Each time an ASTRA MILITARUM TITANIC or ASTRA MILITARUM SQUADRON unit from your army is selected to shoot, models in that unit can target enemy units within Engagement Range of that unit (including with Blast weapons), provided no other friendly units are also within Engagement Range of that enemy unit. When doing so, such models do not suffer the penalty to their Hit rolls for being within Engagement Range of one or more enemy units (excluding attacks made with Indirect Fire weapons).\n\nKeywords: In the Muster Armies step, you can select one or more ASTRA MILITARUM TITANIC units from your army to gain the CHARACTER keyword.\n\nDesigner's Note: This means that the selected units can be given Enhancements, and one of them can be selected as your WARLORD.", restrictions: "" },
                enhancements: [
                    { name: "Battalion Commander", cost: 30, restriction: "ASTRA MILITARUM TITANIC CHARACTER model only.", text: "High-ranking officers of armoured regiments may operate super-heavy tanks as command vehicles, their orders blaring from hull-mounted laud hailers or crackling over internal vox-channels.\n\nThe bearer has the Voice of Command ability and the OFFICER keyword, and can issue up to 2 Orders to ASTRA MILITARUM TITANIC and SQUADRON units." },
                    { name: "Titan Killer", cost: 20, restriction: "ASTRA MILITARUM TITANIC CHARACTER model only.", text: "Seeking to add another kill marking to their war machine, this glory-hungry tank commander seeks out and engages only the heaviest enemy assets.\n\nEach time the bearer makes a ranged attack, you can re-roll the Damage roll." },
                    { name: "Engine Speaker", cost: 15, restriction: "ASTRA MILITARUM TECH-PRIEST ENGINSEER model only.", text: "Intimately attuned to the machine spirits of Astra Militarum vehicles, this Tech-Priest administers rites and rituals, seeking to draw additional performance from engines.\n\nEach time the bearer uses its Omnissiah's Blessing ability, until the start of your next Command phase, add 3\" to the Move characteristic of the selected VEHICLE model." },
                    { name: "Assault Hatches", cost: 25, restriction: "ASTRA MILITARUM TITANIC CHARACTER TRANSPORT model only.", text: "Ramps and hatches slam down on all sides of this titanic vehicle, enabling infantry to surge forth and overwhelm the enemy.\n\nEach time a unit disembarks from the bearer after it has made a Normal move, that unit is still eligible to declare a charge this turn." },
                ],
                stratagems: [
                    { name: "Engine of Wrath", cp: 1, type: "Epic Deed", when: "Fight phase.", target: "One ASTRA MILITARUM TITANIC unit from your army that has not been selected to fight this phase.", effect: "Select one enemy unit within Engagement Range of your unit. Until the end of the phase, add 6 to the Attacks characteristic of melee weapons equipped by models in your unit, improve the Armour Penetration characteristic of those weapons by 2, and each time a model in your unit fights, it can only target that enemy unit.", restrictions: "" },
                    { name: "Imposing Arrival", cp: 1, type: "Strategic Ploy", when: "Reinforcements step of your Movement phase, from the second battle round onwards.", target: "One ASTRA MILITARUM TITANIC unit from your army that is in Reserves.", effect: "Set up your unit on the battlefield, wholly within 8\" of the battlefield edge and more than 6\" horizontally away from all enemy units.", restrictions: "" },
                    { name: "Adamantine Behemoth", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One ASTRA MILITARUM VEHICLE unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.", restrictions: "" },
                    { name: "Shattering Salvo", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase, just after an ASTRA MILITARUM TITANIC unit from your army has shot.", target: "That ASTRA MILITARUM TITANIC unit.", effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover.", restrictions: "" },
                    { name: "Withering Firepower", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase, just after an ASTRA MILITARUM VEHICLE unit from your army has shot.", target: "That ASTRA MILITARUM VEHICLE unit.", effect: "Select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test, subtracting 1 from that test.", restrictions: "" },
                    { name: "Accuracy Under Pressure", cp: 2, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.", restrictions: "" },
                ]
            },
            {
                name: "Armoured Infantry",
                flavour: "",
                rule: { name: "Squadron Command", flavour: "Officers in charge of motorised formations are as well versed in armoured combat as in infantry operations.", text: "Add SQUADRON to the list of units each OFFICER unit from your army can issue Orders to. Add the Order below to those listed in the Voice of Command ability.\n\nOn My Signal: This Order can only be issued to ARMOURED SKIRMISHER units (see below). Each time an enemy unit ends a Normal or Advance move within 9\" of this unit, this unit can make a Normal move of up to D6\". Each unit can only move in this way once per turn.\n\nKeywords: ASTRA MILITARUM SQUADRON units from your army have the ARMOURED SKIRMISHER keyword (excluding ARTILLERY units and units containing one or more models with a Wounds characteristic of 13 or higher).", restrictions: "" },
                enhancements: [
                    { name: "Exemplary Officer", cost: 20, restriction: "INFANTRY OFFICER model only.", text: "Possessed of great initiative and authority, this officer marshals surrounding assets with great efficiency.\n\nEach time the bearer issues an Order to its own unit, you can select up to two other PLATOON units within 3\" of the bearer's unit. That Order is also issued to each of those units." },
                    { name: "Master Manoeuvrist", cost: 15, restriction: "INFANTRY OFFICER model only.", text: "Academy training and battlefield experience have instilled in this officer a mastery of mobile warfare. At their barked orders, soldiers and armoured vehicles work in well-drilled unison.\n\nAt the end of your opponent's Fight phase, if the bearer's unit is not within Engagement Range of one or more enemy units and every model in that unit is within 3\" of an ASTRA MILITARUM TRANSPORT from your army, it can embark within that TRANSPORT." },
                    { name: "Omnissian Unguents (Aura)", cost: 35, restriction: "ASTRA MILITARUM TECH-PRIEST ENGINSEER model only.", text: "Tech-Priests of the Adeptus Mechanicus bear to battle an array of sanctified oils and tinctures of protection with which to bless the Machine God's divine works.\n\nWhile a friendly ARMOURED SKIRMISHER unit is within 3\" of the bearer, that unit has the Feel No Pain 5+ ability." },
                    { name: "Grand Strategist", cost: 25, restriction: "OFFICER model only.", text: "Able to see the broader strategic picture, this experienced officer deploys their assets sparingly and with practised precision.\n\nAfter both players have deployed their armies, if the bearer's unit (or any TRANSPORT it is embarked within) is on the battlefield, select up to two units with the REGIMENT or SQUADRON keywords from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                ],
                stratagems: [
                    { name: "Order the Advance", cp: 1, type: "Battle Tactic", when: "Start of your Movement phase.", target: "One ASTRA MILITARUM OFFICER unit from your army.", effect: "Select one or more friendly ASTRA MILITARUM units within 6\" of your unit; until the end of the phase, you can re-roll Advance rolls made for those units.", restrictions: "" },
                    { name: "Mobile Firebase", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after an ARMOURED SKIRMISHER unit from your army Advances or Falls Back.", target: "That ARMOURED SKIRMISHER unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.", restrictions: "" },
                    { name: "Burst of Speed", cp: 1, type: "Strategic Ploy", when: "End of your Movement phase.", target: "One ASTRA MILITARUM unit from your army that did not Remain Stationary or arrive from Reserves this phase.", effect: "Your unit can make a Normal move of up to D6\".", restrictions: "" },
                    { name: "Supporting Ordnance", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ARMOURED SKIRMISHER unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a visible MONSTER or VEHICLE unit, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Combined Fire", cp: 1, type: "Battle Tactic", when: "Your Shooting phase, just after an ARMOURED SKIRMISHER unit from your army has shot.", target: "That ARMOURED SKIRMISHER unit.", effect: "Select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover, and each time an ARMOURED SKIRMISHER unit from your army makes an attack that targets that unit, improve the Strength characteristic of that attack by 2.", restrictions: "" },
                    { name: "Opening Salvo", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One ASTRA MILITARUM unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Wound roll.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "am-cadian-castellan",
                        "name": "Cadian Castellan",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Laspistol",
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
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
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
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Senior Officer",
                                        "Get Back in the Fight"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Officer",
                                "Cadian Castellan"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Kasrkin.",
                        "compositionText": "1 Cadian Castellan This model is equipped with: laspistol; chainsword."
                },
                {
                        "id": "am-cadian-command-squad",
                        "name": "Cadian Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cadia Stands!",
                                        "Master Vox",
                                        "Medi-pack",
                                        "Regimental Standard"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Cadian Shock Troops.",
                        "compositionText": "1 Cadian Commander 4 Cadian Veteran Guardsmen The Cadian Commander is equipped with: laspistol; chainsword. 1 Cadian Veteran Guardsman is equipped with: las pistol; chainsword. 1 other Cadian Veteran Guardsman is equipped with: lasgun; master vox; close combat weapon. 1 other Cadian Veteran Guardsman is equipped with: lasgun; medi-pack; close combat weapon. 1 other Cadian Veteran Guardsman is equipped with: lasgun; regimental standard; close combat weapon."
                },
                {
                        "id": "am-catachan-command-squad",
                        "name": "Catachan Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
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
                                                "name": "Laspistol",
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
                                        },
                                        {
                                                "name": "Sniper rifle",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Leader",
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Gung-ho Command",
                                        "Master Vox",
                                        "Medi-pack",
                                        "Regimental Standard"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Catachan Jungle Fighters.",
                        "compositionText": "1 Catachan Commander 4 Veteran Guardsmen The Catachan Commander is equipped with: laspistol; close combat weapon. Every Veteran Guardsman is equipped with: lasgun; laspistol; close combat weapon."
                },
                {
                        "id": "am-commissar",
                        "name": "Commissar",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 30
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Summary Execution",
                                        "Political Overwatch"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Officer",
                                "Commissar"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Commissar This model is equipped with: bolt pistol; chainsword."
                },
                {
                        "id": "am-commissar-graves",
                        "name": "Commissar Graves",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chiron gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Prefectus heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
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
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Enforcer crew",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Power sword and Manus Mortis",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mechanised Spearhead",
                                        "Brutal Disciplinarian",
                                        "Aquiline Prow"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Squadron",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Commissar Graves"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Commissar Graves – EPIC HERO This model is equipped with: 1 chiron gatling cannon; 2 Prefectus heavy stubbers; 1 power sword and Manus Mortis; 1 Enforcer crew; 1 armoured hull; 1 aquiline prow."
                },
                {
                        "id": "am-commissar-graves-on-foot",
                        "name": "Commissar Graves on Foot",
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
                                "sv": "4+",
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
                                                "name": "Power sword and Manus Mortis",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Icon of Discipline",
                                        "Brutal Disciplinarian"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Commissar Graves On Foot"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Commissar Graves on Foot – EPIC HERO This model is equipped with: 1 bolt pistol; 1 power sword and Manus Mortis."
                },
                {
                        "id": "am-commissar-yarrick",
                        "name": "Commissar Yarrick",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bale Eye",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3+1",
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                                "name": "Power klaw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Will of Iron",
                                        "Hero of Hades Hive"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Commissar Yarrick"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Commissar Yarrick – EPIC HERO This model is equipped with: 1 storm bolter; 1 laspistol; 1 Bale Eye; 1 power klaw; 1 power sword."
                },
                {
                        "id": "am-gaunts-ghosts",
                        "name": "Gaunt’s Ghosts",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bragg’s autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
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
                                                "name": "Corbec’s hot-shot lascarbine",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Larkin’s long-las",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 4,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Lascarbine",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Rawne’s lascarbine",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gaunt’s chainsword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Straight silver knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Mkoll’s straight silver knife",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First",
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tanith Camo-cloaks",
                                        "Covert Stealth Team"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ibram Gaunt 5 Tanith Ghosts Ibram Gaunt is equipped with: bolt pistol; Gaunt’s chainsword. 1 Tanith Ghost is equipped with: Corbec’s hot-shot lascarbine; straight silver knife. 1 Tanith Ghost is equipped with: Rawne’s lascarbine; straight silver knife. 1 Tanith Ghost is equipped with: Larkin’s long-las; straight silver knife. 1 Tanith Ghost is equipped with: Bragg’s autocannon; straight silver knife. 1 Tanith Ghost is equipped with: lascarbine; Mkoll’s straight silver knife. ORDERS This unit’s OFFICER can issue up to 2 Orders to REGIMENT or GAUNT’S GHOSTS units. KEYWORDS – ALL MODELS: INFANTRY, GRENADES, IMPERIUM, GAUNT’S GHOSTSIBRAM GAUNT: CHARACTER, EPIC HERO, OFFICER FACTION"
                },
                {
                        "id": "am-krieg-command-squad",
                        "name": "Krieg Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 6,
                                        "cost": 65
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Trench club",
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grim Determination",
                                        "Master Vox",
                                        "Alchemyk Counteragents",
                                        "Regimental Standard",
                                        "Servo-scribes",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Krieg Combat Engineers; Death Korps of Krieg.",
                        "compositionText": "1 Lord Commissar 5 Veteran Guardsmen The Lord Commissar is equipped with: laspistol; power weapon. One Veteran Guardsman is equipped with: laspistol; chainsword. One Veteran Guardsman is equipped with: laspistol; close combat weapon; alchemyk counteragents; servo-scribes. One Veteran Guardsman is equipped with: lasgun; close combat weapon; master vox. One Veteran Guardsman is equipped with: lasgun; close combat weapon; regimental standard. One Veteran Guardsman is equipped with: boltgun; close combat weapon."
                },
                {
                        "id": "am-leman-russ-commander",
                        "name": "Leman Russ Commander",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 235
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolisher battle cannon",
                                                "range": "24\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Eradicator nova cannon",
                                                "range": "36\"",
                                                "a": "D3+6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Executioner plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Executioner plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Exterminator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 4",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Punisher gatling cannon",
                                                "range": "24\"",
                                                "a": 20,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Leman Russ battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Vanquisher battle cannon",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vox-net",
                                        "Death Befitting An Officer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Smoke",
                                "Squadron",
                                "Imperium",
                                "Officer",
                                "Leman Russ Commander"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Commander This model is equipped with: lascannon; Leman Russ battle cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. ORDERS This OFFICER can issue up to 2 Orders to SQUADRON units."
                },
                {
                        "id": "am-lord-marshal-dreir",
                        "name": "Lord Marshal Dreir",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sabre of Sacrifice",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Savage claws",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Feel No Pain 6+"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tough to Kill",
                                        "Leading the Charge"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Officer",
                                "Lord Marshal Dreir"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Death Riders.",
                        "compositionText": "1 Lord Marshal Dreir – EPIC HERO This model is equipped with: laspistol; Sabre of Sacrifice; savage claws."
                },
                {
                        "id": "am-lord-solar-leontus",
                        "name": "Lord Solar Leontus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 8,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Sol’s Righteous Gaze",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Conquest",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Konstantin’s hooves",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Lord Solar",
                                        "The Collegiate Astrolex"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Lord Solar Leontus"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Attilan Rough Riders; Cadian Shock Troops; Catachan Jungle Fighters; Death Riders; Kasrkin; Krieg Combat Engineers; Death Korps of Krieg.",
                        "compositionText": "1 Lord Solar Leontus – EPIC HERO This model is equipped with: Sol’s Righteous Gaze; Conquest; Konstantin’s hooves."
                },
                {
                        "id": "am-militarum-tempestus-command-squad",
                        "name": "Militarum Tempestus Command Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hot-shot lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Tempestus dagger",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tempestor Prime",
                                        "Medi-pack",
                                        "Regimental Standard",
                                        "Command Rod",
                                        "Master Vox"
                                ]
                        },
                        "keywords": [
                                "Astra Militarum"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following unit: Tempestus Scions.",
                        "compositionText": "1 Tempestor Prime 4 Tempestus Scions The Tempestor Prime is equipped with: bolt pistol; Tempestus dagger. Every Tempestus Scion is equipped with: hot-shot lasgun; close combat weapon."
                },
                {
                        "id": "am-ministorum-priest",
                        "name": "Ministorum Priest",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 35
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
                                                "name": "Power weapon",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "War Hymns",
                                        "Holy Piety"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Ministorum Priest"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Ministorum Priest This model is equipped with: zealot’s vindictor."
                },
                {
                        "id": "am-nork-deddog",
                        "name": "Nork Deddog",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ripper gun",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Huge knife",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Ogryn Bodyguard",
                                        "Thunderous Head-butt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Loyal Protector",
                                "Ogryn",
                                "Nork Deddog"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Nork Deddog – EPIC HERO This model is equipped with: ripper gun; huge knife."
                },
                {
                        "id": "am-ogryn-bodyguard",
                        "name": "Ogryn Bodyguard",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 40
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Grenadier gauntlet",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Ripper gun",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bullgryn maul",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Huge knife",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ripper gun",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Ogryn Bodyguard",
                                        "Brute Shield",
                                        "Slabshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Imperium",
                                "Loyal Protector",
                                "Ogryn",
                                "Bodyguard"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ogryn Bodyguard This model is equipped with: ripper gun; close combat weapon; huge knife."
                },
                {
                        "id": "am-primaris-psyker",
                        "name": "Primaris Psyker",
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
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Laspistol",
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
                                                "name": "Psychic Maelstrom – witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Psychic Maelstrom – focused witchfire",
                                                "range": "18\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
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
                                                "a": 3,
                                                "ws": "4+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Malign Wardings",
                                        "Psychic Barrier"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Imperium",
                                "Primaris Psyker"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Tempestus Scions; Death Korps of Krieg.",
                        "compositionText": "1 Primaris Psyker This model is equipped with: laspistol; Psychic Maelstrom; force weapon."
                },
                {
                        "id": "am-rogal-dorn-commander",
                        "name": "Rogal Dorn Commander",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 290
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "7+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigator gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Coaxial autocannon",
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
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Oppressor cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Pulveriser cannon",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Twin battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
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
                                                "s": 7,
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
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Vox-net",
                                        "Called Shots"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Character",
                                "Smoke",
                                "Squadron",
                                "Imperium",
                                "Officer",
                                "Rogal Dorn Commander"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Rogal Dorn Tank Commander This model is equipped with: castigator gatling cannon; heavy stubber; twin battle cannon; armoured tracks. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. ORDERS This OFFICER can issue up to 2 Orders to SQUADRON units."
                },
                {
                        "id": "am-sly-marbo",
                        "name": "Sly Marbo",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ripper pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Envenomed blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "One-man Army",
                                        "Like Fighting a Shadow"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Sly Marbo"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Sly Marbo – EPIC HERO This model is equipped with: ripper pistol; envenomed blade. LONER This model cannot be selected as your WARLORD."
                },
                {
                        "id": "am-tech-priest-enginseer",
                        "name": "Tech-Priest Enginseer",
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
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mechanicus pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Enginseer axe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Servo-arm",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Enginseer",
                                        "Omnissiah’s Blessing",
                                        "Vengeance for the Omnissiah"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Imperium",
                                "Tech-Priest Enginseer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Catachan Jungle Fighters; Kasrkin; Krieg Combat Engineers; Death Korps of Krieg.",
                        "compositionText": "1 Tech-Priest Enginseer This model is equipped with: Mechanicus pistol; Enginseer axe; servo-arm."
                },
                {
                        "id": "am-ursula-creed",
                        "name": "Ursula Creed",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Duty and Vengeance",
                                                "range": "12\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Voice of Command"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord Castellan",
                                        "Tactical Genius"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Imperium",
                                "Officer",
                                "Ursula Creed"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "leaderText": "This model can be attached to the following units: Cadian Shock Troops; Kasrkin.",
                        "compositionText": "1 Ursula Creed – EPIC HERO This model is equipped with: Duty and Vengeance; power weapon."
                },
                {
                        "id": "am-cadian-shock-troops",
                        "name": "Cadian Shock Troops",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 120
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                        },
                                        {
                                                "name": "Sergeant's autogun",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Shock Troops",
                                        "Vox-caster"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Grenades",
                                "Regiment",
                                "Platoon",
                                "Cadian",
                                "Cadian Shock Troops"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Shock Trooper Sergeant and 9 Shock Troopers OR 2 Shock Trooper Sergeants and 18 Shock Troopers Every Shock Trooper Sergeant is equipped with: laspistol; chainsword. Every Shock Trooper is equipped with: lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-catachan-jungle-fighters",
                        "name": "Catachan Jungle Fighters",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 120
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
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Jungle Fighters",
                                        "Vox-caster"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Regiment",
                                "Grenades",
                                "Imperium",
                                "Platoon",
                                "Catachan Jungle Fighters"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Jungle Fighter Sergeant and 9 Jungle Fighters OR 2 Jungle Fighter Sergeants and 18 Jungle Fighters Every Jungle Fighter Sergeant is equipped with: laspistol; close combat weapon. Every Jungle Fighter is equipped with: lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-death-korps-of-krieg",
                        "name": "Death Korps of Krieg",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 65
                                },
                                {
                                        "models": 20,
                                        "cost": 145
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
                                                "name": "Grenade launcher – frag",
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
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
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
                                                "name": "Laspistol",
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
                                                "name": "Long-las",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Grim Demeanour",
                                        "Vox-caster",
                                        "Death Korps Medi-pack"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Imperium",
                                "Grenades",
                                "Regiment",
                                "Platoon",
                                "Death Korps Of Krieg"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Death Korps Watchmaster and 9 Death Korps Troopers OR 2 Death Korps Watchmasters and 18 Death Korps Troopers Every Death Korps Watchmaster is equipped with: laspistol; chainsword. Every Death Korps Trooper is equipped with: lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-centaur-rsv",
                        "name": "Centaur RSV",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Pintle-mounted heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
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
                                        "Firing Deck 12"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rapid Strike Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Smoke",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Centaur Rsv"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Centaur RSV This model is equipped with: 1 pintle-mounted heavy stubber; 1 armoured hull. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-chimera",
                        "name": "Chimera",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Lasgun array",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 6"
                                                ]
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                        "Mobile Command Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Chimera"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Chimera This model is equipped with: multi-laser; heavy bolter; lasgun array; armoured tracks. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-taurox",
                        "name": "Taurox",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Twin autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Taurox"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Taurox This model is equipped with: twin autocannon; armoured tracks. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-taurox-prime",
                        "name": "Taurox Prime",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
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
                                        },
                                        {
                                                "name": "Taurox battle cannon",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Taurox gatling cannon",
                                                "range": "24\"",
                                                "a": 8,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Taurox missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Taurox missile launcher – krak",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Twin-Linked"
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
                                                "name": "Twin Taurox hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3",
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
                                        "Transport Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Squadron",
                                "Transport",
                                "Dedicated Transport",
                                "Taurox Prime"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Taurox Prime This model is equipped with: Taurox battle cannon; twin Taurox hot-shot volley gun; armoured tracks. TRANSPORT This model has a transport capacity of 12 MILITARUM TEMPESTUS INFANTRY or ASTRA MILITARUM INFANTRY CHARACTER models."
                },
                {
                        "id": "am-aegis-defence-line",
                        "name": "Aegis Defence Line",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 12,
                                "sv": "2+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Emplacement Platform",
                                        "Reinforced Cover",
                                        "Defence Line",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Imperium",
                                "Aegis Defence Line"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Aegis Defence Line DEPLOYMENT When this model is set up, it will consist of 1 platform section, up to 5 shield sections, up to 2 broken shield sections, and up to 2 end sections. All sections must be connected to each other to form a continuous defence line; the two broken shield sections can be placed either at the end of the defence line, or in the middle of it such that both are within 1/2\" of each other (in this case, these two sections count as being connected to each other). All the sections that have been set up are then treated as a single model for all rules purposes."
                },
                {
                        "id": "am-armoured-sentinels",
                        "name": "Armoured Sentinels",
                        "role": "vehicle",
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
                                "m": "8\"",
                                "t": 8,
                                "sv": "2+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Sentinel chainsaw",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Mobile Hunter-killers"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Squadron",
                                "Armoured Sentinels"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1-2 Armoured Sentinels Every model is equipped with: multi-laser; close combat weapon."
                },
                {
                        "id": "am-artillery-team",
                        "name": "Artillery Team",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "3\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy mortar",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "5+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy quad launcher",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
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
                                                "name": "Multiple rocket launcher",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "5+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Siege cannon",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Crew close combat weapons",
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Remorseless Barrage"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Artillery",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Artillery Team"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Artillery Team This model is equipped with: heavy mortar; lasgun; crew close combat weapons."
                },
                {
                        "id": "am-attilan-rough-riders",
                        "name": "Attilan Rough Riders",
                        "role": "mounted",
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
                                "m": "12\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Goad lance",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Hunting lance – frag tip",
                                                "range": "Melee",
                                                "a": "D6",
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Hunting lance – melta tip",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Lance"
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
                                                "name": "Steed’s hooves",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Horsemasters"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Attilan Rough Riders"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Rough Rider Sergeant 4-9 Rough Riders Every model is equipped with: lasgun; laspistol; hunting lance; steed’s hooves."
                },
                {
                        "id": "am-baneblade",
                        "name": "Baneblade",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baneblade cannon",
                                                "range": "72\"",
                                                "a": "3D6",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Coaxial autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Demolisher cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rolling Fortress"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Baneblade"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Baneblade This model is equipped with: Baneblade cannon; coaxial autocannon; demolisher cannon; heavy stubber; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-banehammer",
                        "name": "Banehammer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 420
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Tremor cannon",
                                                "range": "36\"",
                                                "a": "2D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                        "Deadly Demise D6+2",
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Tremor Quake"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Transport",
                                "Banehammer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Banehammer This model is equipped with: 2 lascannons; tremor cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 26 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-banesword",
                        "name": "Banesword",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 450
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Quake cannon",
                                                "range": "72\"",
                                                "a": "D6+6",
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 4,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Armour Obliteration"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Banesword"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Banesword This model is equipped with: 2 lascannons; quake cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-basilisk",
                        "name": "Basilisk",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Earthshaker cannon",
                                                "range": "240\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Earthshaker Rounds"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Basilisk"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Basilisk This model is equipped with: earthshaker cannon; heavy bolter; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-bullgryn-squad",
                        "name": "Bullgryn Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 100
                                },
                                {
                                        "models": 6,
                                        "cost": 200
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Grenadier gauntlet",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
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
                                                "name": "Bullgryn maul",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
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
                                        "Feel No Pain 6+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Wall of Muscle",
                                        "Brute Shield",
                                        "Slabshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Ogryn",
                                "Bullgryn Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Bullgryn Bone ‘ead 2-5 Bullgryns Every model is equipped with: grenadier gauntlet; close combat weapon; slabshield."
                },
                {
                        "id": "am-cadian-heavy-weapons-squad",
                        "name": "Cadian Heavy Weapons Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
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
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Mortar",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Weapons team close combat weapons",
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Covering Fire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Cadian Heavy Weapons Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "3 Heavy Weapons Teams Every model is equipped with: heavy bolter; laspistol; weapons team close combat weapons. EMBARKING While embarked within a TRANSPORT, each model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models’ weapons for the purposes of the Firing Deck ability."
                },
                {
                        "id": "am-cadian-recon-squad",
                        "name": "Cadian Recon Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autostubber",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
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
                                                "name": "Long-las",
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
                                                "name": "Missile launcher – frag",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
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
                                                "bs": "5+",
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Independent Operatives",
                                        "Vox-caster",
                                        "Vox-relay Beacon"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Cadian Recon Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Recon Sergeant model 9 Recon Trooper models Each model is equipped with: lasgun; close combat weapon."
                },
                {
                        "id": "am-catachan-heavy-weapons-squad",
                        "name": "Catachan Heavy Weapons Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Sustained Hits 1"
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
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "5+",
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
                                                "bs": "5+",
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
                                                "bs": "5+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Mortar",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Weapons team close combat weapons",
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
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Bring it Down!"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Catachan Heavy Weapons Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "3 Heavy Weapons Teams Every model is equipped with: heavy bolter; lasgun; weapons team close combat weapons. EMBARKING While embarked within a TRANSPORT, each model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models’ weapons for the purposes of the Firing Deck ability."
                },
                {
                        "id": "am-death-riders",
                        "name": "Death Riders",
                        "role": "mounted",
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
                                "m": "10\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death Rider lascarbine",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Frag lance",
                                                "range": "Melee",
                                                "a": "D6",
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Power sabre",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Steed's savage claws",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Screening Line"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Death Riders"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ridemaster 4-9 Death Riders Every model is equipped with: Death Rider lascarbine; frag lance; power sabre; steed’s savage claws."
                },
                {
                        "id": "am-deathstrike",
                        "name": "Deathstrike",
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
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Deathstrike missile",
                                                "range": "N/A",
                                                "a": "2D6",
                                                "bs": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "One Shot",
                                                        "Plasma Warhead"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Deathstrike Missile",
                                        "Designate Target",
                                        "Adjust Target"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Deathstrike"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Deathstrike This model is equipped with: heavy bolter; Deathstrike missile; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-doomhammer",
                        "name": "Doomhammer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 415
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Magma cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast",
                                                        "Melta 6"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                        "Deadly Demise D6+2",
                                        "Firing Deck 6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Close-range Titan Killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Transport",
                                "Doomhammer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Doomhammer This model is equipped with: 2 lascannons; magma cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 26 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-field-ordnance-battery",
                        "name": "Field Ordnance Battery",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "3\"",
                                "t": 5,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bombast field gun",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "5+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Heavy lascannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
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
                                                "name": "Laspistol",
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
                                                "name": "Malleus rocket launcher",
                                                "range": "48\"",
                                                "a": "D6+6",
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Battery close combat weapons",
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Rearm, Reload, Fire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Artillery",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Field Ordnance Battery"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "2 Ordnance Teams Every model is equipped with: malleus rocket launcher; lasgun; laspistol; battery close combat weapons."
                },
                {
                        "id": "am-hellhammer",
                        "name": "Hellhammer",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 420
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Coaxial autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Demolisher cannon",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hellhammer cannon",
                                                "range": "30\"",
                                                "a": "4D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Close-quarters Warfare"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Hellhammer"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Hellhammer This model is equipped with: coaxial autocannon; demolisher cannon; heavy stubber; Hellhammer cannon; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-hellhound",
                        "name": "Hellhound",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chem cannon",
                                                "range": "12\"",
                                                "a": "D6+1",
                                                "bs": "N/A",
                                                "s": 2,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Inferno cannon",
                                                "range": "18\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Melta cannon",
                                                "range": "18\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast",
                                                        "Melta 4"
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
                                                        "Melta 2"
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Flush Them Out"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Hellhound"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Hellhound This model is equipped with: heavy flamer; inferno cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-hippogriff-afv",
                        "name": "Hippogriff AFV",
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
                                "m": "12\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Chiron gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 3"
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
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Melta cannon",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2"
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
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Vigilator cannon",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured hull",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Convoy Escort Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Smoke",
                                "Squadron",
                                "Hippogriff Afv"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1-2 Hippogriff AFV Every model is equipped with: 1 vigilator cannon; 1 heavy stubber; 1 armoured hull."
                },
                {
                        "id": "am-hydra",
                        "name": "Hydra",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Hydra autocannon",
                                                "range": "72\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Fly 2+",
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
                                        "Flak Battery"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Hydra"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Hydra This model is equipped with: heavy bolter; Hydra autocannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-kasrkin",
                        "name": "Kasrkin",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hot-shot lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot marksman rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
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
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Warrior Elite",
                                        "Vox-caster",
                                        "Melta Mine"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Kasrkin"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Kasrkin Sergeant 9 Kasrkin Troopers The Kasrkin Sergeant is equipped with: hot-shot laspistol; chainsword. Every Kasrkin Trooper is equipped with: hot-shot lasgun; close combat weapon."
                },
                {
                        "id": "am-krieg-combat-engineers",
                        "name": "Krieg Combat Engineers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 10,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "4+",
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
                                                "name": "Combat shotgun",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
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
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Trench club",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Scouts 6\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Grenadiers",
                                        "Remote Mine",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Smoke",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Krieg Combat Engineers"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Krieg Engineer Watchmaster 4-9 Krieg Combat Engineers Every model is equipped with: autopistol; trench club."
                },
                {
                        "id": "am-krieg-heavy-weapons-squad",
                        "name": "Krieg Heavy Weapons Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 4,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "4\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Krieg heavy flamer",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "5+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Laspistol",
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
                                                "name": "Twin Krieg heavy stubber",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "5+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Rapid Fire 3",
                                                        "Twin-Linked"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Final Duty"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Krieg Heavy Weapons Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "3 Heavy Weapons Gunners 1 Fire Coordinator Each Heavy Weapons Gunner is equipped with: lascannon; laspistol; close combat weapon. The Fire Coordinator is equipped with: laspistol; close combat weapon. EMBARKING While embarked within a TRANSPORT, each Heavy Weapons Gunner model takes up the space of 2 models, and each weapon equipped by these models is considered to be 2 models’ weapons for the purposes of the Firing Deck ability."
                },
                {
                        "id": "am-leman-russ-battle-tank",
                        "name": "Leman Russ Battle Tank",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 185
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Leman Russ battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Armoured Spearhead"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Battle Tank"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Battle Tank This model is equipped with: lascannon; Leman Russ battle cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-demolisher",
                        "name": "Leman Russ Demolisher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Demolisher battle cannon",
                                                "range": "24\"",
                                                "a": "D6+1",
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Blast"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Line-breaker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Demolisher"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Demolisher This model is equipped with: demolisher battle cannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-eradicator",
                        "name": "Leman Russ Eradicator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eradicator nova cannon",
                                                "range": "36\"",
                                                "a": "D3+6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Urban Warfare"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Eradicator"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Eradicator This model is equipped with: eradicator nova cannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-executioner",
                        "name": "Leman Russ Executioner",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Executioner plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Executioner plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Gung-ho Executioners"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Executioner"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Executioner This model is equipped with: executioner plasma cannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-exterminator",
                        "name": "Leman Russ Exterminator",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exterminator autocannon",
                                                "range": "48\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Rapid Fire 4",
                                                        "Twin-Linked"
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
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Withering Hail"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Exterminator"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Exterminator This model is equipped with: exterminator autocannon; lascannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-punisher",
                        "name": "Leman Russ Punisher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Punisher gatling cannon",
                                                "range": "24\"",
                                                "a": 20,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
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
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Mow Down the Enemy"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Punisher"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Punisher This model is equipped with: lascannon; punisher gatling cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-leman-russ-vanquisher",
                        "name": "Leman Russ Vanquisher",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        },
                                        {
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
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
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Storm bolter",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
                                                ]
                                        },
                                        {
                                                "name": "Vanquisher battle cannon",
                                                "range": "72\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": "D6+6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Armoured tracks",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 7,
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
                                        "Tank-killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Leman Russ Vanquisher"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Leman Russ Vanquisher This model is equipped with: lascannon; vanquisher battle cannon; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-manticore",
                        "name": "Manticore",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 165
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
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Storm eagle rockets",
                                                "range": "120\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast",
                                                        "Indirect Fire"
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
                                        "Furious Barrage"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Manticore"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Manticore This model is equipped with: heavy bolter; storm eagle rockets; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-ogryn-squad",
                        "name": "Ogryn Squad",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 60
                                },
                                {
                                        "models": 6,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Ripper gun",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Rapid Fire 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ripper gun",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 6+"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Point-blank Barrage"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Ogryn",
                                "Ogryn Squad"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Ogryn Bone ‘ead 2-5 Ogryns Every model is equipped with: ripper gun."
                },
                {
                        "id": "am-ratlings",
                        "name": "Ratlings",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 10,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 2,
                                "sv": "6+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Tankstopper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Sniper rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Shoot Sharp and Scarper",
                                        "Ratling Battlemutt",
                                        "Designer’s Note",
                                        "Demolition Gear"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Imperium",
                                "Ratlings"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "5-10 Ratlings Every model is equipped with: sniper rifle; close combat weapon."
                },
                {
                        "id": "am-rogal-dorn-battle-tank",
                        "name": "Rogal Dorn Battle Tank",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 260
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "7+",
                                "oc": 5
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Castigator gatling cannon",
                                                "range": "24\"",
                                                "a": 12,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Coaxial autocannon",
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
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "name": "Multi-melta",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Oppressor cannon",
                                                "range": "72\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Pulveriser cannon",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Twin battle cannon",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
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
                                                "s": 7,
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
                                        "Ablative Plating"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Rogal Dorn Battle Tank"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Rogal Dorn Battle Tank This model is equipped with: castigator gatling cannon; heavy stubber; twin battle cannon; armoured tracks. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-scout-sentinels",
                        "name": "Scout Sentinels",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                },
                                {
                                        "models": 2,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Autocannon",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 3,
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
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
                                                "name": "Plasma cannon – standard",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Plasma cannon – supercharge",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Sentinel chainsaw",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Scouts 9\""
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Daring Recon"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Squadron",
                                "Scout Sentinels"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1-2 Scout Sentinels Every model is equipped with: multi-laser; close combat weapon."
                },
                {
                        "id": "am-shadowsword",
                        "name": "Shadowsword",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 410
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Volcano cannon",
                                                "range": "96\"",
                                                "a": "D3+1",
                                                "bs": "4+",
                                                "s": 24,
                                                "ap": -5,
                                                "d": 12,
                                                "keywords": [
                                                        "Blast",
                                                        "Heavy"
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Titan-killer"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Titanic",
                                "Imperium",
                                "Shadowsword"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Shadowsword This model is equipped with: 2 lascannons; twin heavy bolter; 2 twin heavy flamers; volcano cannon; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-stormlord",
                        "name": "Stormlord",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 430
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Vulcan mega-bolter",
                                                "range": "48\"",
                                                "a": 20,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                        "Deadly Demise D6+2",
                                        "Firing Deck 12"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Mount Up!"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Titanic",
                                "Smoke",
                                "Imperium",
                                "Transport",
                                "Stormlord"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Stormlord This model is equipped with: 2 heavy stubbers; 2 lascannons; twin heavy bolter; 2 twin heavy flamers; vulcan mega-bolter; armoured tracks DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 40 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-stormsword",
                        "name": "Stormsword",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 465
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 13,
                                "sv": "2+",
                                "w": 24,
                                "ld": "7+",
                                "oc": 8
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lascannon",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Stormsword siege cannon",
                                                "range": "48\"",
                                                "a": "D6+6",
                                                "bs": "4+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heavy flamer",
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
                                        "Deadly Demise D6+2"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Concussive Wave"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Smoke",
                                "Titanic",
                                "Imperium",
                                "Stormsword"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Stormsword This model is equipped with: 2 lascannons; Stormsword siege cannon; twin heavy bolter; 2 twin heavy flamers; armoured tracks. DAMAGED: 1-8 WOUNDS REMAINING While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-tempestus-aquilons",
                        "name": "Tempestus Aquilons",
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
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Hot-shot lascarbine",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot long-las",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Sentry flamer",
                                                "range": "12\"",
                                                "a": "D6+3",
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
                                                "name": "Sentry grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3+3",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Sentry grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Sentry hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 4"
                                                ]
                                        },
                                        {
                                                "name": "Melta carbine",
                                                "range": "10\"",
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
                                                "name": "Plasma carbine – standard",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Plasma carbine – supercharge",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Hazardous"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Deep Strike"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Precision Drop",
                                        "Servo-sentry"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Smoke",
                                "Imperium",
                                "Regiment",
                                "Militarum Tempestus",
                                "Tempestus Aquilons"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Tempestor Aquilon 9 Tempestus Aquilons The Tempestor Aquilon is equipped with: hot-shot lascarbine; sentry flamer; close combat weapon. Every Tempestus Aquilon is equipped with: hot-shot lascarbine; close combat weapon."
                },
                {
                        "id": "am-tempestus-scions",
                        "name": "Tempestus Scions",
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
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
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
                                                "name": "Grenade launcher – frag",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Grenade launcher – krak",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hot-shot lasgun",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot laspistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Hot-shot volley gun",
                                                "range": "30\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 2"
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
                                                "name": "Chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power fist",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Deep Strike"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Storm Troopers",
                                        "Vox-caster"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Imperium",
                                "Regiment",
                                "Militarum Tempestus",
                                "Tempestus Scions"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Tempestor 4-9 Tempestus Scions The Tempestor is equipped with: hot-shot laspistol; chainsword. Every Tempestus Scion is equipped with: hot-shot lasgun; close combat weapon. This unit can have up to two Leader units attached to it, provided no more than one of those units is a COMMAND SQUAD unit. If it does, and this Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths."
                },
                {
                        "id": "am-valkyrie",
                        "name": "Valkyrie",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Hellstrike missiles",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "Anti-Fly 2+"
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
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multi-laser",
                                                "range": "36\"",
                                                "a": 4,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Multiple rocket pod",
                                                "range": "36\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
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
                                        "Deadly Demise D6",
                                        "Hover"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Airborne Insertion"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Imperium",
                                "Transport",
                                "Valkyrie"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Valkyrie This model is equipped with: hellstrike missiles; multi-laser; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 ASTRA MILITARUM INFANTRY models. Each OGRYN model takes up the space of 3 models. It cannot transport ARTILLERY models."
                },
                {
                        "id": "am-wyvern",
                        "name": "Wyvern",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy bolter",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Hunter-killer missile",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6",
                                                "keywords": [
                                                        "One Shot"
                                                ]
                                        },
                                        {
                                                "name": "Wyvern quad stormshard mortar",
                                                "range": "48\"",
                                                "a": "2D6",
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
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
                                        "Suppression Bombardment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Artillery",
                                "Smoke",
                                "Imperium",
                                "Squadron",
                                "Wyvern"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Wyvern This model is equipped with: heavy bolter; Wyvern quad stormshard mortar; armoured tracks. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-avenger-strike-fighter",
                        "name": "Avenger Strike Fighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger bolt cannon",
                                                "range": "36\"",
                                                "a": 10,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Heavy stubber",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Rapid Fire 3"
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Fiery Vengeance"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Imperium",
                                "Avenger Strike Fighter"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Avenger Strike Fighter This model is equipped with: Avenger bolt cannon; heavy stubber; 2 lascannons; armoured hull. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "am-cyclops-demolition-vehicle",
                        "name": "Cyclops Demolition Vehicle",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 25
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "8+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1"
                                ],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Demolition Charges",
                                        "Unstable Payload"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Imperium",
                                "Cyclops Demolition Vehicle"
                        ],
                        "factionKeywords": [
                                "Astra Militarum"
                        ],
                        "compositionText": "1 Cyclops Demolition Vehicle This model is equipped with: nothing. COMPACT This model can embark within an ASTRA MILITARUM TRANSPORT model as if it were an Infantry model. If it does, it takes up the space of 7 models."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(astraMilitarum);
})();
