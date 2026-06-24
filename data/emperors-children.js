/**
 * W40K Army Builder — Emperor's Children (10th Edition)
 *
 * Datasheets from Codex: Emperor's Children. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const ec = {
        id: "emperors-children",
        name: "Emperor's Children",
        icon: "🎭",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "Thrill Seekers", flavour: "The Emperor's Children are skilled warriors all, their transhuman might enhanced by a lifetime of ceaseless conflict. Their ingrained desire for sensation in all its forms sees them move rapidly across the battlefield, flitting between targets as they attempt to satiate their never-ending hunger for fresh experience.", text: "If your Army Faction is EMPEROR'S CHILDREN, this unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back, but when doing so:\n- It cannot target a unit it was within Engagement Range of at the start of the turn.\n- It cannot target a unit that was the target of another unit's charge or attack this phase." },
            { name: "Pact of Excess", flavour: "By enacting the most lurid and excessive acts of ritual violence, the Emperor's Children may shatter reality itself and summon forth the daemons of Slaanesh.", text: "When mustering your army, unless specifically stated otherwise, you cannot select LEGIONS OF EXCESS as your Army Faction." }
        ],
        detachments: [
            {
                name: "Mercurial Host",
                flavour: "The Emperor's Children are a myriad of warbands driven by an obsessive desire to experience the thrill of battle in all its many forms. These warbands strike with a speed and excessive violence that is majestic in its ever-escalating cruelty. Tormentors and Infractors, their pupils dilated by exotic stimm cocktails, flesh scarred and sculpted by self-inflicted tortures, traverse the battlefield. Their murderous intentions flit from target to target, driven by their obsessive need for fresh experience and sensation. Each bloody kill they make is more excruciating and visually gratifying than the last. Noise Marines unleash wave after wave of discordant sonic destruction. The varied pitch and tone of blastmaster, sonic blaster and screamer pistol combine with the screams of the dying and the exultant battle cries of the Emperor's Children to form a symphony of majestic horror.",
                rule: { name: "Quicksilver Grace", flavour: "The Emperor's Children are consummate raiders, eager to satiate their lust for sensation amid battle and falling upon their foes with impossible swiftness and inhuman grace.", text: "You can re-roll Advance rolls made for EMPEROR'S CHILDREN units from your army.", restrictions: "" },
                enhancements: [
                    { name: "Steeped in Suffering", cost: 20, restriction: "EMPEROR'S CHILDREN model only.", text: "The warlords of the Emperor's Children thrive on the pain they cause. The more grievous the injuries they cause, the deadlier they become.\n\nEach time a model in the bearer's unit makes an attack that targets an enemy unit below its Starting Strength, add 1 to the Hit roll. If that target is also Below Half-strength, add 1 to the Wound roll as well." },
                    { name: "Intoxicating Musk", cost: 20, restriction: "EMPEROR'S CHILDREN model only.", text: "A sickly-sweet aroma emanates from this warrior, at once delightful and abhorrent. A perfumed assault on the senses intoxicates those in its vicinity.\n\nEach time a melee attack targets the bearer's unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll." },
                    { name: "Tactical Perfection", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "Since their foundation, the Emperor's Children have sought to master every art of warfare, be it in personal acts of martial prowess or superior tactical displays.\n\nAfter both players have deployed their armies, select up to two EMPEROR'S CHILDREN units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves." },
                    { name: "Loathsome Dexterity", cost: 10, restriction: "EMPEROR'S CHILDREN model only.", text: "Blessed by Slaanesh to further accentuate their perverse elegance, this leader possesses feline finesse.\n\nEach time a model in the bearer's unit makes a Normal, Advance or Fall Back move, it can move through enemy models. When doing so, it can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
                ],
                stratagems: [
                    { name: "Violent Excess", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Sustained Hits 1] ability.", restrictions: "" },
                    { name: "Combat Stimms", cp: 2, type: "Battle Tactic", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Honour the Prince", cp: 1, type: "Battle Tactic", when: "Your Movement phase.", target: "One EMPEROR'S CHILDREN INFANTRY unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, if your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Dark Vigour", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One EMPEROR'S CHILDREN unit from your army (excluding BEASTS and VEHICLES) that is within 9\" of the enemy unit that just ended that move.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Capricious Reactions", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Cruel Raiders", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army that is wholly within 9\" of one or more battlefield edges and not within 3\" horizontally of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Peerless Bladesmen",
                flavour: "The Emperor's Children are consumed by their own pride and driven by insatiable obsession. They seek to prove their prowess in myriad forms of combat. Tall and powerful Flawless Blades stride proudly into battle, seeking out enemy champions to gruesomely humble in single combat. They parry the blows of their foes with sneering arrogance and spill their blood with glee. In their blood-slick wake come squads of Infractors, empowered by rare and esoteric combat drugs. Other sons of Fulgrim unleash death in shredding salvoes from boltguns and sonic weapons. Those who exult in their swordfighting prowess find gaps in armour plate with their curved blades and sinuous whips, rending flesh and spilling viscera with each strike. The slaughter increases in pace and intensity as it rushes towards a gore-slick crescendo, ending only when the last wretched victim has been eviscerated, and the twisted souls of the Emperor's Children are briefly glutted on the riotous carnage they have inflicted.",
                rule: { name: "Exquisite Swordsmanship", flavour: "These warriors are peerless swordsmen, each demonstrating exquisite fighting form. Those who lock swords with these obsessive warriors do so at their peril.", text: "Each time an EMPEROR'S CHILDREN unit from your army is selected to fight, if it made a Charge move this turn, select one of the abilities below. While resolving those attacks, melee weapons equipped by models in that unit have that ability:\n- [Lethal Hits]\n- [Sustained Hits 1]", restrictions: "" },
                enhancements: [
                    { name: "Faultless Opportunist", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "This swordsman forever seeks opportunities to flaunt their dazzling and deadly bladework.\n\nYou can target the bearer's unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase." },
                    { name: "Blinding Speed", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "By injecting powerful combat stimms distilled from the perfumed ichor of Daemonettes, these warriors slash out with diabolically enhanced speed.\n\nOnce per battle, at the start of the Fight phase, the bearer can use this Enhancement. If it does, until the end of the phase, models in the bearer's unit have the Fights First ability." },
                    { name: "Distortion", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "The sheen of this blade reflects to the bearer their own alluring countenance. In their image, they see an example of perfection. In reality, the bearer has become a hideous wretch, every ounce of elegance leached away to increase the daemon blade's killing power.\n\nAdd 1 to the Attacks and Damage characteristics of melee weapons equipped by the bearer." },
                    { name: "Rise to the Challenge", cost: 30, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "This warrior's arrogance is matched by a listless ennui at the galaxy's everyday stimuli. Should a worthy opponent challenge them in combat, they transform into a faultless duellist with skill beyond compare.\n\nOnce per battle, at the end of the Fight phase, if the bearer is within Engagement Range of three or more enemy models, it can use this Enhancement. If it does, the bearer can fight one additional time. When doing so, you can select one ability using the Exquisite Swordsmanship Detachment rule to apply to those attacks." },
                ],
                stratagems: [
                    { name: "Deft Parry", cp: 1, type: "Battle Tactic", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Death Ecstasy", cp: 2, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Incessant Violence", cp: 1, type: "Battle Tactic", when: "Fight phase, just before an EMPEROR'S CHILDREN unit from your army Consolidates.", target: "That EMPEROR'S CHILDREN unit.", effect: "Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6\" instead of up to 3\", provided your unit ends that Consolidation move within Engagement Range of one or more enemy units.", restrictions: "" },
                    { name: "Cruel Bladesman", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army that made a Charge move this turn and has not been selected to fight this phase.", effect: "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1.", restrictions: "" },
                    { name: "Terrifying Spectacle", cp: 1, type: "Strategic Ploy", when: "Your opponent's Command phase.", target: "One EMPEROR'S CHILDREN unit from your army that made a Charge move in the previous turn and destroyed one or more enemy units in the previous Fight phase.", effect: "Each enemy unit within 6\" of your unit must take a Battle-shock test, subtracting 1 from that test if they are Below Half-strength. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.", restrictions: "" },
                    { name: "Cut Down the Weak", cp: 2, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit Falls Back.", target: "One EMPEROR'S CHILDREN unit from your army (you can only select a VEHICLE if it is a WALKER) that is within 6\" of that enemy unit and would be eligible to declare a charge against that enemy unit if it were your Charge phase.", effect: "Your unit can declare a charge. When doing so, you must select that enemy unit as a target of that charge, and your unit does not receive a Charge bonus this turn.", restrictions: "" },
                ]
            },
            {
                name: "Rapid Evisceration",
                flavour: "The armoured transports of the Emperor's Children are a testament to the debased nature of those who ride within them. Daubed in vibrant colours and covered in symbols of dedication to both Legion and Dark Prince, the war engines' twisted machine spirits snarl, whine and growl like beasts straining at the leash. Warp amps emit streams of daemonic screeches, spreading fear in the ranks of the enemy and heralding the slaughter to come. Laying down destructive choruses of firepower from turrets, hatches and sponsons, armoured transports grind over the foe's defences, smash into enemy infantry and disgorge their fell cargo to battle. From the armoured behemoths emerge the Emperor's Children, weapons drawn in anticipation of the glorious violence to come.",
                rule: { name: "Mechanised Murder", flavour: "The Emperor's Children are masters of the mechanised assault, leaping from their growling, daemonically tainted vehicles to fall upon the foe with blade and bolter.", text: "Each time an EMPEROR'S CHILDREN model from your army makes an attack, if it is a TRANSPORT model or disembarked from a TRANSPORT this turn, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "Sublime Prescience", cost: 25, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "This leader's tactical prowess ensures that their reinforcements arrive when required.\n\nOnce per turn, in your Movement phase, the bearer can use this Enhancement. If it does, select one friendly EMPEROR'S CHILDREN TRANSPORT that is in Strategic Reserves. Until the end of the phase, for the purposes of setting up that TRANSPORT on the battlefield, treat the current battle round number as being one higher than it actually is." },
                    { name: "Spearhead Striker", cost: 20, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "This leader and their bodyguard pride themselves being first into the fray.\n\nEach time the bearer disembarks from a TRANSPORT, until the end of the turn, you can re-roll Charge rolls made for the bearer's unit and enemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                    { name: "Accomplished Tactician", cost: 35, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "Possessed of uncanny situational awareness, this leader directs hit-and-fade attacks with great precision.\n\nOnce per turn, in your opponent's Shooting phase, just after an enemy unit has shot, you can select one friendly EMPEROR'S CHILDREN unit within 9\" of the bearer that was hit by one or more of those attacks, then select one friendly TRANSPORT that unit is wholly within 6\" of and is able to embark within. That EMPEROR'S CHILDREN unit can embark within that Transport." },
                    { name: "Heretek Adept", cost: 35, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "This warrior is well-versed in the fell rituals of the Dark Mechanicum.\n\nOnce per battle round, when a saving throw is failed for a friendly EMPEROR'S CHILDREN VEHICLE model within 6\" of the bearer, you can change the Damage characteristic of that attack to 0." },
                ],
                stratagems: [
                    { name: "Onto the Next", cp: 1, type: "Strategic Ploy", when: "End of the Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army that destroyed an enemy unit this phase, and one friendly TRANSPORT it is able to embark within.", effect: "If your EMPEROR'S CHILDREN unit is wholly within 6\" of that TRANSPORT, it can embark within it.", restrictions: "" },
                    { name: "Advance and Claim", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One EMPEROR'S CHILDREN TRANSPORT from your army that has one or more TORMENTORS units embarked within it (excluding Battle-shocked units).", effect: "Select one objective marker you control that your TRANSPORT is within range of. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Dynamic Breakthrough", cp: 1, type: "Epic Deed", when: "Your Movement phase.", target: "One EMPEROR'S CHILDREN VEHICLE unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through enemy models (excluding MONSTERS and VEHICLES). When doing so, it can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.", restrictions: "" },
                    { name: "Ceaseless Onslaught", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One EMPEROR'S CHILDREN unit from your army that disembarked from a TRANSPORT that made a Normal move this turn.", effect: "Until the end of the phase, your EMPEROR'S CHILDREN unit is eligible to declare a charge.", restrictions: "" },
                    { name: "Reactive Disembarkation", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN TRANSPORT from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "One EMPEROR'S CHILDREN unit embarked within your TRANSPORT can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of that TRANSPORT and not within Engagement Range of one or more enemy units.", restrictions: "" },
                    { name: "Outflanking Strike", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One EMPEROR'S CHILDREN TRANSPORT from your army, or up to two EMPEROR'S CHILDREN DEDICATED TRANSPORTS from your army.", effect: "For each of those TRANSPORTS wholly within 9\" of one or more battlefield edges, remove it from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Carnival of Excess",
                flavour: "Wherever the Emperor's Children tread, wherever they indulge their every obsessive desire, wherever they gut, flay and slaughter, reality is torn asunder and through the veil pour the daemons of Slaanesh. Daemonettes leap forward, their lithe forms at once repulsive and alluring. Clouds of sickly soul-musk drift through the ranks of the foe dulling their senses whilst the susurrations of the advancing daemons lull the weak-willed into trances. Seekers of Slaanesh crash into their helpless victims, talon, claw and poisoned tongue ripping flesh asunder. Alongside their daemonic allies, the Emperor's Children keep pace, letting out ecstatic laughter and booming battle cries as they unleash malefic sorceries and slaughter at will. Return fire finds only corrupted air as daemon and tainted warriors alike advance like a murderous pageant through the enemy fire with contemptuous ease.",
                rule: { name: "Daemonic Empowerment", flavour: "Where the Emperor's Children indulge their obsession, the power of Slaanesh empowers those in his thrall.", text: "- While an EMPEROR'S CHILDREN unit from your army is within 6\" of one or more friendly LEGIONS OF EXCESS units, it is Empowered.\n- While a LEGIONS OF EXCESS unit from your army is within 6\" of one or more friendly EMPEROR'S CHILDREN units, it is Empowered.\n\nWhile a unit from your army is Empowered, weapons equipped by models in that unit have the [Sustained Hits 1] ability. If such a weapon already has that ability, each time an attack is made with that weapon, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "LEGIONS OF EXCESS: You can include LEGIONS OF EXCESS units in your army, even though they do not have the EMPEROR'S CHILDREN Faction keyword. The combined points cost of such units you can include in your army is:\n- Incursion: Up to 500 pts\n- Strike Force: Up to 1000 pts\n- Onslaught: Up to 1500 pts\nNo LEGIONS OF EXCESS models from your army can be your WARLORD." },
                enhancements: [
                    { name: "Empyric Suffusion", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "Swirling clouds of perfumed empyric energy suffuse this leader's followers, granting them daemonic vigour.\n\nOnce per battle round, you can target one friendly SLAANESH unit within 6\" of the bearer with the Heroic Intervention Stratagem for 0CP." },
                    { name: "Dark Blessings", cost: 10, restriction: "EMPEROR'S CHILDREN INFANTRY model only.", text: "This warrior has earned the favour of the Dark Prince.\n\nOnce per battle, just after an enemy unit has selected its targets, the bearer can use this Enhancement. If it does, until the end of the phase, the bearer has a 3+ invulnerable save." },
                    { name: "Possessed Blade", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "The martial grace that this daemon weapon bestows upon its bearer comes at a price.\n\nAt the start of the battle, select one melee weapon equipped by the bearer; add 1 to the Attacks characteristic of that weapon. In addition, each time the bearer is selected to fight, it can use this Enhancement. If it does, while resolving those attacks, add 1 to the Damage characteristic of that weapon and that weapon has the [Devastating Wounds] and [Hazardous] abilities." },
                    { name: "Warp Walker", cost: 30, restriction: "EMPEROR'S CHILDREN or KEEPER OF SECRETS model only.", text: "This champion of Slaanesh is so steeped in the warp as to be able to traverse its maddening depths at will.\n\nEach time the bearer's unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit. Each time a model in the bearer's unit makes a Normal, Advance or Fall Back move, it can move through enemy models. When doing so, it can move within Engagement Range of such models but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed." },
                ],
                stratagems: [
                    { name: "Sustained by Agony", cp: 1, type: "Battle Tactic", when: "Fight phase, just after an EMPEROR'S CHILDREN unit from your army destroys an enemy unit.", target: "That EMPEROR'S CHILDREN unit.", effect: "Select one friendly LEGIONS OF EXCESS unit within 6\" of your unit. One model in that LEGIONS OF EXCESS unit recovers up to 3 lost wounds or, if it is a DAEMONETTES unit, return up to D3+3 destroyed models to it instead.", restrictions: "" },
                    { name: "Ecstatic Slaughter", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after a LEGIONS OF EXCESS unit from your army destroys an enemy unit.", target: "That LEGIONS OF EXCESS unit and one friendly EMPEROR'S CHILDREN unit within 6\" of it that is not within Engagement Range of one or more enemy units.", effect: "Your EMPEROR'S CHILDREN unit can declare a charge. If it does so and it has already been selected to fight this phase, it cannot fight again this phase.", restrictions: "" },
                    { name: "Violent Crescendo", cp: 2, type: "Strategic Ploy", when: "Fight phase.", target: "One SLAANESH BEASTS, SLAANESH INFANTRY or SLAANESH MOUNTED unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". When doing so, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit.", restrictions: "" },
                    { name: "Sycophantic Surge", cp: 1, type: "Battle Tactic", when: "Your Charge phase.", target: "One LEGIONS OF EXCESS unit from your army.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced or Fell Back, provided at least one of the targets of that charge is within Engagement Range of one or more EMPEROR'S CHILDREN units from your army.", restrictions: "" },
                    { name: "Uncanny Reactions", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One SLAANESH unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Dark Apparitions", cp: 2, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One DAEMONETTES unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves. If it arrives back on the battlefield in the Reinforcements step of your next Movement phase using the Deep Strike ability, it can be set up anywhere that is more than 6\" horizontally away from all enemy units (instead of more than 9\"), provided it is also set up wholly within 9\" of one or more friendly EMPEROR'S CHILDREN units.", restrictions: "" },
                ]
            },
            {
                name: "Coterie of the Conceited",
                flavour: "The Emperor's Children possess a desire for perfection and superiority that drives them to inflict ever greater and more impressive death upon their foes. To satisfy their urges, some Emperor's Children warlords strike desperate pacts with daemonic powers. By doing so they wager their souls and those of their warriors and in turn promise to outdo their rivals in the volume and luridity of carnage they inflict. In return, they may be granted power beyond measure, and the ability to experience limitless sensation. Those who have sworn such pacts urge their warriors forward and hurl themselves into battle with desperation and exhilaration. Each torture inflicted and each gory kill brings them one step closer to fulfilling their part of the bargain. Failure, however, can lead only to a violent death or, far worse, the ire of their patron and the torturous obliteration of their very soul.",
                rule: { name: "Pledges to the Dark Prince", flavour: "Few appear as favoured by the Dark Prince as these warriors, their boons of power a reward for committing ever viler deeds in honour of their patron.", text: "At the start of the battle round, if your WARLORD is on the battlefield, you must pledge a number to Slaanesh representing how many enemy units will be destroyed this battle round. At the end of the battle round, if the number of enemy units destroyed this battle round is greater than or equal to your pledge, you gain a number of Pact points equal to your pledge. Otherwise, you do not gain any Pact points this battle round and your WARLORD model suffers D3 mortal wounds.\n\nEMPEROR'S CHILDREN units from your army gain a bonus depending on how many Pact points you have gained during the battle, as shown below (these are all cumulative):\n- 1+: Each time a model in this unit makes an attack, re-roll a Hit roll of 1.\n- 3+: Each time a model in this unit makes an attack, re-roll a Wound roll of 1.\n- 5+: Melee weapons equipped by models in this unit have the [Lethal Hits] and [Sustained Hits 1] abilities.\n- 7+: Each time a model in this unit makes an attack, a Critical Hit is scored on an unmodified Hit roll of 5+.", restrictions: "" },
                enhancements: [
                    { name: "Pledge of Eternal Servitude", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "Through Slaanesh's favour, this warrior has defied death more than once and each time has been agonisingly resurrected to offer more souls to their patron.\n\nThe first time the bearer is destroyed, take a Leadership test for the bearer at the end of the phase. If that test is passed, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with D6 wounds remaining (up to its Wounds characteristic)." },
                    { name: "Pledge of Dark Glory", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "This leader is surrounded by an aura of dark majesty, radiating the glorious and infectious arrogance displayed by the greatest of Slaanesh's chosen sons.\n\nWhile the bearer is leading a unit, improve the Leadership and Objective Control characteristics of models in that unit by 1." },
                    { name: "Pledge of Mortal Pain", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "This warrior gifts their foes with Slaanesh's own exquisite caress, offering up their agonies to please the Dark Prince.\n\nAt the start of your Shooting phase, select one enemy unit within 12\" of and visible to the bearer. That unit must take a Leadership test, subtracting 2 from the result if it is Battle-shocked: if failed, that enemy unit suffers 3 mortal wounds." },
                    { name: "Pledge of Unholy Fortune", cost: 30, restriction: "EMPEROR'S CHILDREN model only.", text: "A daemonic patron steers this warrior's fate. Every movement is a killing stroke or exquisitely timed parry.\n\nOnce per turn, just after making a Hit roll, a Wound roll or a saving throw for a model in the bearer's unit, if the bearer is not Battle-shocked, it can use this Enhancement. If it does, treat the result as an unmodified roll of 6 instead." },
                ],
                stratagems: [
                    { name: "Protection of the Dark Prince", cp: 1, type: "Strategic Ploy", when: "Any phase, just after a mortal wound or attack is allocated to a model in an EMPEROR'S CHILDREN unit from your army.", target: "That EMPEROR'S CHILDREN unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability, and the Feel No Pain 4+ ability against mortal wounds.", restrictions: "" },
                    { name: "Unshakeable Opponents", cp: 1, type: "Epic Deed", when: "Command phase.", target: "One EMPEROR'S CHILDREN unit from your army.", effect: "Until the end of the turn, each time a model in your unit makes an attack, you can ignore any or all modifiers to the following: that attack's Ballistic Skill or Weapon Skill characteristic; the Hit roll; the Wound roll.", restrictions: "" },
                    { name: "Embrace the Pain", cp: 1, type: "Strategic Ploy", when: "Start of the Fight phase.", target: "One EMPEROR'S CHILDREN INFANTRY unit from your army.", effect: "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects targets, it must select your unit as the target of its attacks.", restrictions: "" },
                    { name: "Martial Perfection", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.", restrictions: "" },
                    { name: "Unbound Arrogance", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase, just after an EMPEROR'S CHILDREN unit from your army destroys an enemy unit.", target: "That EMPEROR'S CHILDREN unit.", effect: "Increase your pledge to Slaanesh by 1.", restrictions: "You can only use this Stratagem once per battle round." },
                    { name: "Armour of Abhorrence", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the attacking unit has finished making its attacks, each time an attack targets a model in your unit, worsen the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                ]
            },
            {
                name: "Slaanesh's Chosen",
                flavour: "Amongst the Emperor's Children are those who see themselves as particularly favoured by Slaanesh. These puissant champions of excess have inflicted deaths beyond count, suffered agonies beyond measure and won glorious victories in honour of the Dark Prince. When such champions of ruin gather together, they are driven to outdo one another. Whether engaging enemy commanders in brutal duels, inflicting exquisite agonies upon mewling mortals or offering sacrifices to their unholy deity, the chosen of Slaanesh are unceasing in their murderous advance. To these paragons of arrogance and superiority, no foe is worthy of respect, and few are capable of providing the challenge they desire. Thus, their rivalries are with their own, each vying for Slaanesh's attention. Only those who prove themselves the deadliest will gain the approval they seek.",
                rule: { name: "Internal Rivalries", flavour: "The boldest and most debased champions of Slaanesh may gain the benefit of the Dark Prince's boons. Yet none hold Slaanesh's favour for long, for always another seeks to wrest his favour from their rivals.", text: "EMPEROR'S CHILDREN CHARACTER units from your army can ignore any or all modifiers to their Move characteristic and any or all modifiers to Advance and Charge rolls made for them.\n\nAt the start of the battle, your WARLORD's unit is your army's Favoured Champions. The first time in each player's turn that an EMPEROR'S CHILDREN CHARACTER unit from your army destroys an enemy unit, after resolving all of its attacks, that CHARACTER unit becomes your army's new Favoured Champions, replacing the old one.\n\nEach time a model in your army's Favoured Champions unit makes an attack, you can re-roll the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Eager to Prove", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "This puissant champion of Slaanesh is ever eager to join the battle and prove their peerless skill to the Dark Prince.\n\nYou can re-roll Charge rolls made for the bearer's unit. While the bearer's unit is your army's Favoured Champions, add 2\" to the Move characteristic of models in that unit." },
                    { name: "Repulsed by Weakness", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "Those chosen by Slaanesh seek only worthy foes. The weak and craven are slaughtered with sneering contempt.\n\nEach time an enemy unit (excluding MONSTERS and VEHICLES) within Engagement Range of the bearer's unit Falls Back, models in that enemy unit must take Desperate Escape tests. When doing so, if the bearer's unit is your army's Favoured Champions, subtract 1 from each of those Desperate Escape tests." },
                    { name: "Proud and Vainglorious", cost: 20, restriction: "EMPEROR'S CHILDREN model only.", text: "Even amongst the prideful warriors of the Emperor's Children, this warrior is a towering pillar of arrogance.\n\nYou can re-roll Battle-shock and Leadership tests taken for the bearer's unit. While the bearer's unit is your army's Favoured Champions, add 1 to the Objective Control characteristic of models in that unit." },
                    { name: "Slayer of Champions", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "This warrior has obsessively perfected the arts of war for centuries if not millennia. Few champions, regardless of origin, are beyond their ability to kill.\n\nThe bearer's melee weapons have the [Precision] ability, and each time the bearer makes a melee attack that targets a CHARACTER unit, improve the Strength and Armour Penetration characteristics of that attack by 1." },
                ],
                stratagems: [
                    { name: "Devoted Duellists", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One or more EMPEROR'S CHILDREN CHARACTER units from your army that have not been selected to fight this phase.", effect: "Select one enemy unit. Until the end of the phase, melee weapons equipped by models in those CHARACTER units have the [Sustained Hits 1] ability while targeting that enemy unit.", restrictions: "" },
                    { name: "Beautiful Death", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN CHARACTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit is your army's Favoured Champions. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Heightened Jealousy", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase, just after an EMPEROR'S CHILDREN CHARACTER unit becomes your army's Favoured Champions, or just after your army's Favoured Champions unit destroys an enemy unit.", target: "Your army's Favoured Champions unit.", effect: "Until the end of the phase, each time a model in an EMPEROR'S CHILDREN CHARACTER unit from your army that is not your army's Favoured Champions makes an attack, add 1 to the Strength characteristic of that attack.", restrictions: "" },
                    { name: "Diabolic Majesty", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase, just after an EMPEROR'S CHILDREN CHARACTER unit becomes your army's Favoured Champions.", target: "That EMPEROR'S CHILDREN unit.", effect: "Each enemy unit within 6\" of your unit must take a Battle-shock test, subtracting 1 from the result.", restrictions: "You can only use this Stratagem once per battle round." },
                    { name: "Refusal to Be Outdone", cp: 1, type: "Battle Tactic", when: "Your Charge phase.", target: "One EMPEROR'S CHILDREN CHARACTER unit from your army.", effect: "Select one enemy unit within Engagement Range of one or more units from your army. Until the end of the phase, each time your unit declares a charge, if that enemy unit is one of the targets of that charge, add 2 to the Charge roll.", restrictions: "" },
                    { name: "Vengeful Surge", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One EMPEROR'S CHILDREN CHARACTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "After the attacking unit has shot, your unit can make a Surge move. To do so, roll one D6: each model in your unit can move a distance in inches up to the result, but your unit must end that move as close as possible to the closest enemy unit. When doing so, those models can be moved within Engagement Range of that enemy unit. If your unit is not your army's Favoured Champions, you can re-roll the dice to determine the distance of its Surge move.", restrictions: "" },
                ]
            },
            {
                name: "Court of the Phoenician",
                flavour: "Many are the Emperor's Children that seek to join their daemonic gene-sire in his excessive spectacles of sublime artistry. Such warbands often style themselves as Fulgrim's Court, a mocking reflection of the circles of patronised champions he once favoured with his intoxicating presence. These over-stimulated warriors lose themselves in hedonistic battle, aiming to commit exquisite acts of martial prowess to prove themselves worthy of the Daemon Primarch's fleeting approbation and bask in the adulation they know is theirs by right.",
                rule: { name: "Sensational Performance", flavour: "The craving for fresh experience and the obsession with enacting ever more excessive destruction drives these warriors to displays of sudden and obscene violence.", text: "EMPEROR'S CHILDREN units from your army have the following ability:\n\nSensational Performance: Each time this unit is selected to fight, if this unit made a Charge move this turn, it can use this ability. If it does, until the end of the phase:\n- This unit cannot target a unit it was within Engagement Range of at the start of the turn.\n- This unit cannot target a unit that was the target of another unit's attack this phase.\n- Improve the Strength and Armour Penetration characteristics of this unit's melee weapons by 1.\n\nMaster of the Pageant: Fulgrim sees war as a theatrical act, his warriors and the enemy alike a mere chorus to his own egotistical performance of sinuous strategy.\nOnce per battle round, when you target a FULGRIM unit from your army with the Sinuous Breach or Prideful Superiority Stratagem, you can reduce the CP cost of that use of that Stratagem by 1CP.", restrictions: "" },
                enhancements: [
                    { name: "Tears of the Phoenix", cost: 25, restriction: "EMPEROR'S CHILDREN model only.", text: "The addictive substance in these droplets is said to fracture consciousness - and sanity - to the point where the imbiber perceives every strike and parries their opponents' attempts.\n\nEach time a model in the bearer's unit makes a melee attack, you can ignore any or all modifiers to that attack's Weapon Skill characteristic and any or all modifiers to the Hit roll and Wound roll." },
                    { name: "Exalted Patron", cost: 15, restriction: "LORD EXULTANT model only.", text: "This champion is a domineering martial lord, hungry for the adulation and audience of his warband's most self-centred blademasters.\n\nAdd 1\" to the Move characteristic of the bearer.\n\nIn the Declare Battle Formations step, the bearer can be attached to a FLAWLESS BLADES unit." },
                    { name: "Soulstain Made Manifest", cost: 15, restriction: "EMPEROR'S CHILDREN model only.", text: "The corruption of this warrior's soul is so total that it bleeds outwards in a nimbus of nauseating eldritch horror that repulses his enemies.\n\nAt the start of the Fight phase, you can select one enemy unit within Engagement Range of the bearer; that unit must take a Battle-shock test, subtracting 1 from the result." },
                    { name: "Spiritsliver", cost: 20, restriction: "EMPEROR'S CHILDREN DAEMON PRINCE model only.", text: "This slender hellforged blade appears to weave in and out of being. Its daemonic bearer wields it in flickering arcs at supernatural speed, swift enough for its phantasmal edge to slice apart a victim's soul before it is lost to the Warp.\n\nAdd 1 to the Strength and Attacks characteristics of the bearer's melee weapons." },
                ],
                stratagems: [
                    { name: "Contemptuous Disregard", cp: 1, type: "", when: "Your opponent's Shooting phase or the Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army.", effect: "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Prideful Superiority", cp: 2, type: "", when: "Fight phase.", target: "One EMPEROR'S CHILDREN unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets a CHARACTER unit, you can re-roll the Hit roll and you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Sinuous Breach", cp: 1, type: "", when: "Your Movement phase or your Charge phase.", target: "One EMPEROR'S CHILDREN DAEMON unit from your army that has not been selected to move or charge this phase.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.", restrictions: "" },
                    { name: "Close-quarters Excruciation", cp: 1, type: "", when: "Your Shooting phase.", target: "One EMPEROR'S CHILDREN unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time an EMPEROR'S CHILDREN model in your unit makes an attack that targets an eligible unit within 12\", improve the Strength and Armour Penetration characteristics of that attack by 1.", restrictions: "" },
                    { name: "Euphoric Inspiration", cp: 1, type: "", when: "Your Charge phase.", target: "One EMPEROR'S CHILDREN DAEMON unit from your army.", effect: "Until the end of the phase, you can re-roll Charge rolls for friendly EMPEROR'S CHILDREN units within 6\" of your unit.", restrictions: "" },
                    { name: "Catalytic Stimulus", cp: 1, type: "", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One EMPEROR'S CHILDREN unit from your army that lost one or more wounds as a result of those attacks.", effect: "Your unit can make a Stimulus move. To do so, roll one D6: models in your unit move a number of inches up to the result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ec-daemon-prince-of-slaanesh",
                        "name": "Daemon Prince of Slaanesh",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "10\"",
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Excess",
                                        "Excessive Vigour",
                                        "Ecstatic Death"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Daemon Prince"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Daemon Prince of Slaanesh This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "ec-daemon-prince-of-slaanesh-with-wings",
                        "name": "Daemon Prince of Slaanesh with Wings",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 215
                                }
                        ],
                        "stats": {
                                "m": "14\"",
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Destruction",
                                        "Stimulated by Pain"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Daemon Prince With Wings"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Daemon Prince of Slaanesh with Wings This model is equipped with: infernal cannon; hellforged weapons."
                },
                {
                        "id": "ec-fulgrim",
                        "name": "Fulgrim",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 340
                                }
                        ],
                        "stats": {
                                "m": "16\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 16,
                                "ld": "5+",
                                "oc": 6
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Malefic lash",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Daemonic blades – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Daemonic blades – sweep",
                                                "range": "Melee",
                                                "a": 12,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Serpentine tail",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
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
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Poisons",
                                        "Daemon Primarch of Slaanesh",
                                        "Serpentine"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Fly",
                                "Character",
                                "Epic Hero",
                                "Daemon",
                                "Chaos",
                                "Slaanesh",
                                "Primarch",
                                "Fulgrim"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Fulgrim – EPIC HERO This model is equipped with: malefic lash; daemonic blades; serpentine tail. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-keeper-of-secrets",
                        "name": "Keeper of Secrets",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 240
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 10,
                                "sv": "5+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Living whip",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Phantasmagoria – witchfire",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Phantasmagoria – focused witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ritual knife",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Snapping claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Witstealer sword",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Slaanesh",
                                        "Mesmerising Form",
                                        "Shining Aegis"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Summoned",
                                "Slaanesh",
                                "Keeper Of Secrets"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Keeper of Secrets This model is equipped with: Phantasmagoria; snapping claws; witstealer sword. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-lord-exultant",
                        "name": "Lord Exultant",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "name": "Plasma pistol - standard",
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
                                                "name": "Plasma pistol - supercharge",
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
                                        },
                                        {
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Master-crafted power sword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Phoenix power spear",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance"
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
                                        },
                                        {
                                                "name": "Rapture lash",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Perfectionists",
                                        "Euphoric Strikes"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Lord Exultant"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following units: Infractors; Tormentors.",
                        "compositionText": "1 Lord Exultant This model is equipped with: bolt pistol; plasma pistol; Phoenix power spear; close combat weapon."
                },
                {
                        "id": "ec-lord-kakophonist",
                        "name": "Lord Kakophonist",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "6\"",
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
                                                "name": "Screamer pistol",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Obsessive Annunciation",
                                        "Doom Siren"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Lord Kakophonist"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following units: Chaos Terminators; Noise Marines.",
                        "compositionText": "1 Lord Kakophonist This model is equipped with: screamer pistol; power sword."
                },
                {
                        "id": "ec-lucius-the-eternal",
                        "name": "Lucius the Eternal",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 5,
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
                                                "name": "Blade of the Laer",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Lash of Torment",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Feel No Pain 5+",
                                        "Leader",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "A Challenge Worthy of Skill",
                                        "Duellist’s Hubris"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Slaanesh",
                                "Lucius The Eternal"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following unit: Flawless Blades.",
                        "compositionText": "1 Lucius the Eternal – EPIC HERO This model is equipped with: Blade of the Laer; Lash of Torment."
                },
                {
                        "id": "ec-shalaxi-helbane",
                        "name": "Shalaxi Helbane",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 340
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lash of Slaanesh",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Pavane of Slaanesh – witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Pavane of Slaanesh – focused witchfire",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Hazardous",
                                                        "Devastating Wounds",
                                                        "Psychic",
                                                        "Sustained Hits 3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Snapping claws",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Soulpiercer",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
                                        "No Prey Can Evade",
                                        "Monarch of the Hunt"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Summoned",
                                "Slaanesh",
                                "Shalaxi Helbane"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Shalaxi Helbane – EPIC HERO This model is equipped with: lash of Slaanesh; Pavane of Slaanesh; snapping claws; Soulpiercer. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-sorcerer",
                        "name": "Sorcerer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Agonising Energies – witchfire",
                                                "range": "18\"",
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
                                                "name": "Agonising Energies – focused witchfire",
                                                "range": "18\"",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Force weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Warped Interference",
                                        "Wracking Agonies"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Sorcerer"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "leaderText": "This model can be attached to the following units: Infractors; Noise Marines; Tormentors.",
                        "compositionText": "1 Sorcerer This model is equipped with: Agonising Energies; bolt pistol; force weapon."
                },
                {
                        "id": "ec-daemonettes",
                        "name": "Daemonettes",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Slashing claws",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Fights First"
                                ],
                                "faction": [
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
                                        "Horrifying Beauty",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Daemon",
                                "Summoned",
                                "Slaanesh",
                                "Daemonettes"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Alluress 9 Daemonettes Every model is equipped with: slashing claws."
                },
                {
                        "id": "ec-infractors",
                        "name": "Infractors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol - standard",
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
                                                "name": "Plasma pistol - supercharge",
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
                                                "name": "Duelling sabre",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Rapture lash",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 6\""
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Excessive Assault",
                                        "Icon of Excess"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Infractors"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Obsessionist 4-9 Infractors The Obsessionist is equipped with: bolt pistol; power sword. Every Infractor is equipped with: bolt pistol; duelling sabre."
                },
                {
                        "id": "ec-tormentors",
                        "name": "Tormentors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
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
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Precision"
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
                                                        "Precision"
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
                                                        "Melta 2",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun - standard",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma gun - supercharge",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Precision",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol - standard",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Plasma pistol - supercharge",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Pistol",
                                                        "Precision"
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
                                        },
                                        {
                                                "name": "Rapture lash",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Objective Defiled",
                                        "Icon of Excess"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Tormentors"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Obsessionist 4-9 Tormentors The Obsessionist is equipped with: bolt pistol; power sword. Every Tormentor is equipped with: boltgun; close combat weapon."
                },
                {
                        "id": "ec-chaos-rhino",
                        "name": "Chaos Rhino",
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assault Vehicle"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Chaos",
                                "Slaanesh",
                                "Rhino"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Chaos Rhino This model is equipped with: combi-bolter; armoured tracks. TRANSPORT This model has a transport capacity of 12 EMPEROR’S CHILDREN INFANTRY models (excluding TERMINATOR and FLAWLESS BLADE models)."
                },
                {
                        "id": "ec-chaos-land-raider",
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
                                        "Thrill Seekers"
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
                                "Slaanesh",
                                "Land Raider"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Chaos Land Raider This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 14 EMPEROR’S CHILDREN INFANTRY models. Each TERMINATOR and FLAWLESS BLADE model takes up the space of 2 models."
                },
                {
                        "id": "ec-chaos-spawn",
                        "name": "Chaos Spawn",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 5,
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
                                        "Feel No Pain 5+"
                                ],
                                "faction": [
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Horrors"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Slaanesh",
                                "Chaos Spawn"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "2 Chaos Spawn Every model is equipped with: hideous mutations."
                },
                {
                        "id": "ec-chaos-terminators",
                        "name": "Chaos Terminators",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 145
                                }
                        ],
                        "stats": {
                                "m": "6\"",
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lethal Obsession"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Chaos",
                                "Slaanesh",
                                "Terminator",
                                "Terminator Squad"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Terminator Champion 4 Chaos Terminators Every model is equipped with: combi-bolter; accursed weapon."
                },
                {
                        "id": "ec-defiler",
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
                                                "keywords": [
                                                        "Precision"
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker",
                                        "Revel in Desecration"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Slaanesh",
                                "Daemon",
                                "Defiler"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Defiler This model is equipped with: 1 Hades battle cannon; 2 excruciator cannons; 1 heavy missile launcher; 1 heavy baleflamer; 1 shearing claws DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-fiends",
                        "name": "Fiends",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 95
                                },
                                {
                                        "models": 6,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Barbed tail and dissecting claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
                                        "Soporific Musk"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Daemon",
                                "Summoned",
                                "Slaanesh",
                                "Fiends"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Blissbringer 2-5 Fiends Every model is equipped with: barbed tail and dissecting claws."
                },
                {
                        "id": "ec-flawless-blades",
                        "name": "Flawless Blades",
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
                                "m": "8\"",
                                "t": 5,
                                "sv": "3+",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blissblade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
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
                                        "Daemonic Patrons"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Grenades",
                                "Chaos",
                                "Slaanesh",
                                "Flawless Blades"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "3-6 Flawless Blades Every model is equipped with: bolt pistol; blissblade."
                },
                {
                        "id": "ec-heldrake",
                        "name": "Heldrake",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
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
                                        "Thrill Seekers"
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
                                "Slaanesh",
                                "Heldrake"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Heldrake This model is equipped with: Hades autocannon; Heldrake claws. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-maulerfiend",
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
                                        "Thrill Seekers"
                                ],
                                "wargear": [],
                                "other": [
                                        "Glutton for Punishment"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Maulerfiend"
                        ],
                        "factionKeywords": [
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Maulerfiend This model is equipped with: lasher tendrils; Maulerfiend fists. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ec-noise-marines",
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
                                "Emperor’s Children"
                        ],
                        "compositionText": "1 Disharmonist 5 Noise Marines Every model is equipped with: sonic blaster; close combat weapon."
                },
                {
                        "id": "ec-seekers",
                        "name": "Seekers",
                        "role": "mounted",
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
                                "m": "14\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lashing tongue",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Slashing claws",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Pact of Excess"
                                ],
                                "wargear": [],
                                "other": [
                                        "Unholy Speed",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Summoned",
                                "Slaanesh",
                                "Seekers"
                        ],
                        "factionKeywords": [
                                "Legions Of Excess"
                        ],
                        "compositionText": "1 Heartseeker 4-9 Seekers Every model is equipped with: lashing tongue; slashing claws."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(ec);
})();
