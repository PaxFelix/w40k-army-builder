/**
 * W40K Army Builder — Drukhari (10th Edition)
 *
 * Datasheets from Codex: Drukhari. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const dru = {
        id: "drukhari",
        name: "Drukhari",
        icon: "🗡️",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Power from Pain", flavour: "The Drukhari feed on suffering and terror. Every arc of blood that jets from a blade-slit artery, every scream of agonised horror, every vertiginous moment of shock or despair experienced by their prey surges through the Drukhari like an intoxicant. As the battle rages, the denizens of the Dark City drink deep of the floodtide of pain. Sinews singing with stolen strength, motions blurred to preternatural swiftness, they howl in exhilarated bloodlust and fight all the harder to extract yet sweeter agonies from those who dare resist them.", text: "Pain Abilities: All DRUKHARI units have a Pain ability, tagged with the word 'Pain'. Pain abilities only apply to a unit while it is Empowered. If your Army Faction is DRUKHARI, you can Empower units from your army with Pain abilities by spending Pain tokens (see below).\n\nDesigner's Note: You can also spend Pain tokens to activate additional effects in certain other rules such as Enhancements and Stratagems.\n\nGaining Pain Tokens: If your Army Faction is DRUKHARI, you gain Pain tokens as follows:\n- 1 Pain token at the start of your Command phase.\n- 1 Pain token each time an enemy unit is destroyed.\n- 1 Pain token each time an enemy unit fails a Battle-shock test.\nEach time you gain a Pain token, keep it to one side - this is your Pain token pool. Each time you spend a Pain token, reduce your Pain token pool by the same amount.\n\nEmpowered Through Pain: Each Pain ability will state when you can spend Pain tokens to Empower that unit. When you do, until the end of the phase, that unit is Empowered and all Pain abilities it has take effect. While an Attached unit is Empowered, the Pain abilities of all Leader and Bodyguard units in that unit take effect - you do not need to spend additional Pain tokens to activate each of those Pain abilities.\n\nExample: At the start of your Charge phase, you spend 1 Pain token to Empower a unit of Wyches. The unit becomes Empowered, and so its Acrobatic Gladiators ability takes effect until the end of the phase. A Succubus is leading the unit, and so its Lithe Agility ability also takes effect until the end of the phase (no additional Pain token is required to activate that ability as well)." },
            { name: "Corsairs and Travelling Players", flavour: "", text: "If your Army Faction is DRUKHARI, you can include HARLEQUINS and ANHRATHE units in your army, even though they do not have the DRUKHARI Faction keyword. The combined points value of HARLEQUINS and/or ANHRATHE units you can include in your army depends on the battle size, as follows:\n- Incursion: Up to 250 pts\n- Strike Force: Up to 500 pts\n- Onslaught: Up to 750 pts\nNo HARLEQUINS or ANHRATHE models included in your army in this way can be your WARLORD, and they cannot be given Enhancements." }
        ],
        detachments: [
            {
                name: "Realspace Raiders",
                flavour: "There are few better ways to display true power in Commorragh than by successfully allying warriors of the kabals, the wych cults and the haemonculus covens in a single raiding force. Only through cunning and flattery, menace and politicking is such a feat achieved. Yet the results achieved by forging such a temporary entente are rarely less than spectacular. Such tripartite realspace raids alloy the psychotraumatic sadism and nightmare weaponry of the covenites to the close-quarters quicksilver ferocity of the Wyches, underpinning the whole with the armoured firepower and paramilitary discipline of massed Kabalites. Augmented by bands of Commorrite sellswords with their esoteric combat specialities, the result is a raiding party as diverse as it is diabolical. Though they would never admit it, the strengths of each facet of Drukhari society cover for each others' weaknesses, honing the blade of their martial might into something razor-swift and unutterably lethal.",
                rule: { name: "Alliance of Agony", flavour: "A spirit of decidedly unhealthy competition permeates intermingled realspace raids, with each Archon, Succubus and Haemonculus vying with their rivals to spread the most suffering and claim the greatest prizes. Though the Drukhari are canny enough to set aside infighting in the name of a successful raid, this mutual antagonism still spurs them all on to greater efforts.", text: "At the start of the battle, you gain 2 Pain tokens for each of the following combinations your army contains (these do not need to be in the same Attached unit):\n- One or more ARCHON models and one or more KABALITE WARRIORS units.\n- One or more SUCCUBUS models and one or more WYCHES units.\n- One or more HAEMONCULUS models and one or more WRACKS units.\n\nDesigner's Note: These are all cumulative, so if your army contains at least one of all of the combinations listed above, you start the battle with 6 Pain tokens.", restrictions: "" },
                enhancements: [
                    { name: "Dark Vitality", cost: 25, restriction: "DRUKHARI model only.", text: "Surrounded by terror and pain, this champion of the Dark City is a veritable conduit of cruel vitality.\n\nThe bearer's unit is always Empowered - you do not need to spend any Pain tokens to activate that unit's Pain abilities." },
                    { name: "Labyrinthine Cunning", cost: 25, restriction: "ARCHON model only.", text: "This Archon's intellect is towering, and their gift for devious politicking and vicious cunning is almost peerless.\n\nAt the start of your Command phase, if the bearer is on the battlefield, you can do one of the following:\n- Spend 1 Pain token and gain 1CP.\n- Roll one D6: on a 4+, you gain 1CP." },
                    { name: "Eye of Spite", cost: 15, restriction: "SUCCUBUS model only.", text: "Having battled the most hulking and heavily armoured opponents in the arena, this Succubus can spot and exploit the slightest weakness in their enemy's defences.\n\nImprove the Attacks and Armour Penetration characteristics of the bearer's melee weapons by 1. Each time the bearer's unit is selected to fight, you can spend 1 Pain token; if you do, until the end of the phase, improve the Attacks and Armour Penetration characteristics of the bearer's melee weapons by 2 instead." },
                    { name: "Crucible of Malediction", cost: 20, restriction: "HAEMONCULUS model only.", text: "This repulsive artefact contains the tortured souls of psykers. When released, these essences scream across the battlefield, spreading terror and madness.\n\nOnce per battle, in your Shooting phase, the bearer can use this Enhancement. If it does, you can spend 1 Pain token. Then, each enemy unit within 12\" of the bearer must take a Battle-shock test, subtracting 1 from that test if you spent 1 Pain token. Each time a PSYKER unit fails that test, it suffers 3 mortal wounds." },
                ],
                stratagems: [
                    { name: "Insensible to Pain", cp: 2, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One HAEMONCULUS COVENS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Fighting Shadows", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DRUKHARI unit from your army (excluding HAEMONCULUS COVENS units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Instinctive Spite", cp: 1, type: "Battle Tactic", when: "Start of your Shooting phase or the start of the Fight phase.", target: "Up to two DRUKHARI BATTLELINE units from your army, or one other DRUKHARI unit from your army.", effect: "You can spend 1 Pain token. Until the end of the phase, each time a model in each of those units makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll. If you spent 1 Pain token, add 1 to the Wound roll as well.", restrictions: "" },
                    { name: "Dark Harvest", cp: 1, type: "Strategic Ploy", when: "Start of the Fight phase.", target: "Up to two WRACKS units from your army, or one other DRUKHARI unit from your army.", effect: "Until the end of the phase, melee weapons equipped by models in each of those units have the [Lethal Hits] ability.", restrictions: "" },
                    { name: "Eager for the Kill", cp: 1, type: "Battle Tactic", when: "Start of your Movement phase.", target: "Up to two WYCHES units from your army, or one other DRUKHARI unit from your army, that have not been selected to move this phase.", effect: "Until the end of the phase, each time one of those units Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit (this is not cumulative with the REAVERS' Matchless Swiftness ability).", restrictions: "" },
                    { name: "Raid and Fade", cp: 2, type: "Strategic Ploy", when: "End of your Shooting phase.", target: "Up to two KABALITE WARRIORS units from your army, or one other DRUKHARI unit from your army (excluding SCOURGES and AIRCRAFT).", effect: "Each of those units can make a Normal move of up to 6\".", restrictions: "You cannot select units that are within Engagement Range of one or more enemy units. Until the end of the turn, those units are not eligible to declare a charge." },
                ]
            },
            {
                name: "Skysplinter Assault",
                flavour: "Many raiding parties swoop upon their victims aboard fleets of speeding anti-grav skimmers. Bands of Drukhari ride their nimble craft with perfect poise, whooping in exhilaration with every sharp banking turn and suicidally steep dive. Like airborne predators, the shoals of transports and gunships weave through incoming flak to encircle their prey and rain blistering fire upon them. Explosions leap skyward as enemy strongpoints and war engines are knocked out one after another. Next comes the ground assault, as murderous bands of Drukhari vault from their Raiders and Venoms to plunge into the reeling foe. Even as the bloodshed escalates amidst a whirlwind of whistling blades and cracking lashes, still the Drukhari skimmers streak back and forth to pick off targets of opportunity and rapidly relocate wild-eyed bands of gleeful Commorrite killers. Only once resistance has been utterly shattered do the grav-vessels halt, just long enough for captives and plunder to be heaped aboard their decks for the triumphant return to Commorragh.",
                rule: { name: "Rain of Cruelty", flavour: "Few warriors in the galaxy are as adept at launching punishing skyborne raids as the Drukhari. Before their prey even realise the peril, the killers of Commorragh are amongst their lines like grinning ghouls. Splinter fire lays low defenders still scrambling into position. Quicksilver assaults leave dozens screaming in maimed agony. Often, the battle is over before it has even truly begun.", text: "Each time a DRUKHARI unit from your army disembarks from a TRANSPORT, until the end of the turn:\n- Ranged weapons equipped by models in that disembarking unit have the [Ignores Cover] ability.\n- Melee weapons equipped by models in that disembarking unit have the [Lance] ability.", restrictions: "" },
                enhancements: [
                    { name: "Phantasmal Smoke", cost: 15, restriction: "DRUKHARI model only.", text: "Phantasm grenade launchers worked into sweeping hull plates discharge, laying down covering spreads of hallucinogenic vapours that daze and distract the foe.\n\nWhile the bearer's unit is wholly within 6\" of a friendly DRUKHARI TRANSPORT:\n- Models in the bearer's unit have the Stealth ability.\n- Each time a ranged attack targets the bearer's unit, models in that unit have the Benefit of Cover against that attack." },
                    { name: "Sadistic Fulcrum", cost: 15, restriction: "DRUKHARI model only.", text: "Witnessing this murderous warrior wreaking havoc, the sadistic crew of the Drukhari transports are filled with the vigour only the suffering of others can provide.\n\nEach time you spend 1 Pain token to Empower the bearer's unit in the Shooting phase, select one friendly DRUKHARI TRANSPORT within 6\" of the bearer's unit; until the end of the phase, each time that TRANSPORT makes an attack, you can re-roll the Hit roll." },
                    { name: "Spiteful Raider", cost: 10, restriction: "DRUKHARI model only.", text: "This cruel realspace raider knows the best reason to take something from the foe is for the simple spite of denying them that which they most desire to keep.\n\nEach time the bearer's unit destroys an enemy unit in the Fight phase, if that enemy unit was within range of one or more objective markers when the bearer's unit was selected to fight, you gain 1 additional Pain token." },
                    { name: "Nightmare Shroud", cost: 20, restriction: "DRUKHARI model only.", text: "This strange artefact wreathes its bearer in a cloying cloud of shadow. Flitting into battle under cover of this pall, they are nigh impossible for the prey to see coming.\n\nEach time the bearer's unit disembarks from a TRANSPORT, until the end of the turn, enemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                ],
                stratagems: [
                    { name: "Vicious Blades", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after a DRUKHARI TRANSPORT from your army has selected its targets.", target: "That TRANSPORT.", effect: "After your TRANSPORT has fought, select one enemy unit that was the target of one or more of those attacks and roll one D6 for each model embarked within your TRANSPORT, adding 1 to the result if that embarked model is a WRACKS model: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds).", restrictions: "" },
                    { name: "Wraithlike Retreat", cp: 1, type: "Strategic Ploy", when: "End of the Fight phase.", target: "One DRUKHARI INFANTRY unit from your army that fought this phase.", effect: "Your unit can make a Normal or Fall Back move, but unless it is a WYCHES unit, it must end that move wholly within 3\" horizontally and 5\" vertically of a friendly DRUKHARI TRANSPORT and must embark within that TRANSPORT at the end of that move (otherwise, it cannot make that move).", restrictions: "" },
                    { name: "Pounce on the Prey", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a DRUKHARI INFANTRY unit from your army disembarks from a TRANSPORT that made a Normal move this phase.", target: "That INFANTRY unit.", effect: "Until the end of the turn, your unit is eligible to declare a charge.", restrictions: "" },
                    { name: "Skyborne Annihilation", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One DRUKHARI unit from your army that has not been selected to shoot this phase and that disembarked from a TRANSPORT this turn.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Sustained Hits 1] ability, or the [Sustained Hits 2] ability if your unit is a KABALITE WARRIORS or HAND OF THE ARCHON unit.", restrictions: "" },
                    { name: "Swooping Mockery", cp: 1, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One DRUKHARI TRANSPORT from your army that is within 9\" of that enemy unit.", effect: "Your TRANSPORT can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Night Shield", cp: 1, type: "Wargear", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One DRUKHARI VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Spectacle of Spite",
                flavour: "When a wych cult unleashes its full fury in a realspace raid, the bloody extravaganza of the arena is brought to the battlefield in spectacular style. Acrobatic gladiators dart into combat, wielding exotic tools of murder, each vying to score the most eye-catching kills. Jetbike-mounted Reavers scream low overhead, fairing blades lopping off their victims' heads while cluster caltrops raise rippling detonations in their wake. Succubi - the uncontested stars of each frenzied performance - ride into battle aboard personal Venom chariots or stab, slash and weave their way through the melee, alabaster skin spattered with the vivid gore of their victims. Some wych cult raids are lent armoured support by their Kabalite patrons, the better to maximise carnage and ensure victory. Others are trailed by entire audiences of avid fans, Commorrites of every stripe who have come to enjoy the mayhem and feast on a banquet of pain. So involved do some spectators become that they rush in to join the fight alongside the Wyches and add their blades to the fray.",
                rule: { name: "Combat Drugs", flavour: "Wyches abuse an array of potentially lethal performance-enhancing combat stimms.", text: "At the start of your Command phase, select which Combat Drugs will be active for your army until the start of your next Command phase. To do so, either select one from the list below (you cannot select the same Combat Drug more than once per battle), or randomly select two by rolling two D6. When doing so randomly, Combat Drugs you have previously selected can become active again, but if you randomly select one that is already active for your army, it has no additional effect.\n1. Adrenalight: Add 1 to the Attacks characteristic of melee weapons equipped by WYCH CULT models from your army.\n2. Hypex: Add 2\" to the Move characteristic of WYCH CULT models from your army.\n3. Serpentin: Improve the Weapon Skill characteristic of melee weapons equipped by WYCH CULT models from your army by 1.\n4. Painbringer: Add 1 to the Toughness characteristic of WYCH CULT models from your army.\n5. Grave Lotus: Add 1 to the Strength characteristic of melee weapons equipped by WYCH CULT models from your army.\n6. Splintermind: Improve the Leadership characteristic of WYCH CULT models from your army by 1, and improve the Ballistic Skill characteristic of ranged weapons equipped by WYCH CULT models from your army by 1.", restrictions: "" },
                enhancements: [
                    { name: "Pharmacophex", cost: 15, restriction: "SUCCUBUS model only.", text: "This inbuilt chem-atomiser wreathes the bearer and their comrades in a hyperstimulant haze.\n\nAt the start of your Command phase, after selecting which Combat Drugs will be active for your army, roll one D6 and consult the Combat Drugs list. The result rolled applies to the bearer's unit until the start of your next Command phase in addition to any other Combat Drugs that are active for your army. If you randomly select one that is already active for your army, it has no additional effect." },
                    { name: "Chronoshard", cost: 15, restriction: "SUCCUBUS model only.", text: "When smashed, this splinter of crystallised time ensnares the foe, forcing them to move with the helpless sluggishness of a nightmare for crucial moments.\n\nOnce per battle, at the start of the Fight phase, the bearer can use this Enhancement. If it does, until the end of the phase, models in the bearer's unit have the Fights First ability." },
                    { name: "Periapt of Torments", cost: 25, restriction: "SUCCUBUS model only.", text: "This hollow black stone is worn as warrior jewellery. The sinister organism that lurks within it can detect those who intend malice to its bearer and punishes them by lashing their psyches with its psi-barbs.\n\nEnemy units cannot use the Fire Overwatch Stratagem to shoot at the bearer's unit." },
                    { name: "Morghenna's Curse", cost: 20, restriction: "SUCCUBUS model only.", text: "Archon Aestra Khromys gifted the famed gladiatrix Morghenna this glaive as a symbol of patronage. Yet so exquisitely crafted is the blade that the Succubus was eventually murdered for it by a rival. Such has been the eventual fate of all those reckless and conceited enough to wield it since.\n\nImprove the Armour Penetration and Damage characteristics of the bearer's melee weapons by 1." },
                ],
                stratagems: [
                    { name: "Berserk Fugue", cp: 2, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One WYCH CULT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Deadly Debut", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DRUKHARI unit from your army that made a Charge move this turn and has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Lethal Hits] ability. If your unit is a WYCHES unit, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well.", restrictions: "" },
                    { name: "Feigned Weakness", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a DRUKHARI unit from your army Falls Back.", target: "That DRUKHARI unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in the turn in which it Fell Back.", restrictions: "" },
                    { name: "Preternatural Agility", cp: 1, type: "Strategic Ploy", when: "Start of your Movement or Charge phase.", target: "One WYCH CULT unit from your army.", effect: "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, you can ignore any or all modifiers to its Move characteristic and to Advance and Charge rolls made for it and, until the end of the turn, each time a model in your unit makes such a move, it can move horizontally through models (when doing so, such a model can move within Engagement Range of such models but cannot end a Normal or Advance move within Engagement Range of them).", restrictions: "" },
                    { name: "A Challenge Met", cp: 2, type: "Battle Tactic", when: "End of your opponent's Movement phase.", target: "One WYCH CULT unit from your army that would be able to declare a charge if it were your Charge phase.", effect: "Select one enemy unit within 9\" of your unit that was set up on the battlefield this phase or that ended a Normal or Advance move this phase. Your unit now declares a charge that targets only that enemy unit, and you resolve that charge.", restrictions: "Even if that charge is successful, your unit does not receive any Charge bonus this turn." },
                    { name: "Acrobatic Display", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One WYCH CULT unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 5+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Covenite Coterie",
                flavour: "To face a realspace raid by the Haemonculi of the Dark City is to endure a living nightmare. Ghoulish things with worm-pale flesh and blades for fingers crawl and caper from the shadows, their blood-wet breath rasping eagerly through the slits of their iron masks. Engines of Pain drift through the air on whispering suspensors, loosing stinging blasts of firepower, gathering up screaming victims in nests of needle-tipped tendrils and flensing their flesh with snickering blades. Through it all move the Haemonculi, dealing out unspeakable agonies even as they leer with cruel gratification or hum to themselves with the distracted air of a scientist enjoying their labours. They are the composers of a gruesome flesh symphony, the conductors of an orchestra of despairing shrieks and gibbering glee fit to drive mortal minds to madness. Even those other Drukhari who fight alongside the covenites look askance at their twisted allies and count themselves lucky not to be on the receiving end of their insane attentions.",
                rule: { name: "Stitchflesh Abominations", flavour: "The Haemonculi and their servants have been surgically altered in body and mind beyond any measure of sanity. For beings so twisted as these, pain is little more than a fascinating diversion, while none but the most grievous wounds can lay them low for long.", text: "Each time an attack targets a HAEMONCULUS COVENS unit from your army, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.", restrictions: "" },
                enhancements: [
                    { name: "Master Regenesist", cost: 25, restriction: "HAEMONCULUS model only.", text: "Having extensively studied the mechanisms of biological growth and vitality, this Haemonculus is adept at goading flesh to reknit and new muscle and limbs to sprout in ever more grotesque arrangements.\n\nEach time the bearer uses its Fleshcraft ability, you can return up to D3+3 destroyed Bodyguard models to the bearer's unit instead of D3+1." },
                    { name: "Master Nemesine", cost: 5, restriction: "HAEMONCULUS model only.", text: "Simply for the sake of scientific curiosity and personal entertainment, this twisted poisoner has tailored toxins to kill every single life form they have ever encountered.\n\nThe bearer's weapons have the [Anti-Beast 2+] and [Anti-Monster 4+] abilities." },
                    { name: "Master Artisan", cost: 20, restriction: "HAEMONCULUS model only.", text: "This Haemonculus is a savant in the arts of sculpting metal, flesh, sinew and bone alike. Their creations are works of dark and malevolent genius.\n\nAdd 1 to the bearer's Wounds characteristic and add 1 to the Toughness characteristic of models in the bearer's unit." },
                    { name: "Master Repugnomancer (Aura)", cost: 15, restriction: "HAEMONCULUS model only.", text: "The Repugnomancers focus all their study on the art of triggering instinctive revulsion and horror. Though considered gauche by many other Haemonculi, the results of their foul craft on the battlefield are undeniable.\n\nAdd 3\" to the range of the bearer's Fear Incarnate ability, and each time a friendly DRUKHARI unit within 9\" of the bearer fails a Battle-shock test or is destroyed, roll one D6: on a 4+, you gain 1 Pain token." },
                ],
                stratagems: [
                    { name: "Postmortality", cp: 1, type: "Epic Deed", when: "Any phase.", target: "One HAEMONCULUS model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.", effect: "Spend 1-3 Pain tokens. At the end of the phase, set the destroyed model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with a number of wounds remaining equal to the number of Pain tokens you just spent.", restrictions: "You cannot use this Stratagem if you have 0 Pain tokens, and you cannot target the same HAEMONCULUS model with this Stratagem more than once per battle." },
                    { name: "Symphony of Suffering", cp: 1, type: "Epic Deed", when: "Fight phase, just after a DRUKHARI unit from your army destroys an enemy unit.", target: "That DRUKHARI unit.", effect: "Each enemy unit within 9\" of and visible to your unit must take a Battle-shock test, subtracting 1 from that test if your unit is a HAEMONCULUS COVENS unit.", restrictions: "" },
                    { name: "Poisoner's Art", cp: 1, type: "Epic Deed", when: "Fight phase, just after a HAEMONCULUS COVENS unit from your army has fought.", target: "That HAEMONCULUS COVENS unit.", effect: "Select one enemy unit (excluding VEHICLES) hit by one or more of your unit's attacks this phase. Until the end of the battle, that enemy unit is poisoned. At the start of each Command phase, roll one D6 for each poisoned unit on the battlefield: on a 4+, that unit suffers D3 mortal wounds.", restrictions: "" },
                    { name: "Distillers of Fear", cp: 2, type: "Strategic Ploy", when: "Fight phase.", target: "One HAEMONCULUS COVENS unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is Battle-shocked, that attack has the [Devastating Wounds] ability.", restrictions: "" },
                    { name: "Connoisseurs of Pain", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DRUKHARI unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Spend 1 Pain token. Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1. At the end of the phase, if your unit is still on the battlefield and it is a HAEMONCULUS COVENS unit, you gain 1 Pain token.", restrictions: "" },
                    { name: "Enfolding Nightmare", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One HAEMONCULUS COVENS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Roll one D6: your unit can be moved a number of inches up to the result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                ]
            },
            {
                name: "Kabalite Cartel",
                flavour: "No kabal can survive without the strength of arms to back up its demands and menaces. When the cream of that paramilitary strength is concentrated into a realspace raiding party and unleashed upon unsuspecting victims, the results are devastating. Reaving bands of Kabalites ride to war beneath the flayed-skin banners of their Archons. Each squad vies to outdo its rivals in cruelty and martial conquest, slaying and tormenting with spiteful abandon. At the same time, predatory gunships thrum overhead and bands of vicious mercenaries ply their bloody trade. Moreover, no two kabals are alike - each having its own portfolio of diabolical exploits and murderous predilections - and so each has its own particular agendas to pursue and strengths to bring to bear. One Kabalite raiding band might benefit from exceptionally well-crafted weaponry or a wealth of tailored toxins. Another might field swathes of terror troops, obsess over taking bloody trophies, call upon the aid of arena gladiators or a myriad of other unique and murderous quirks.",
                rule: { name: "Murderous Agenda", flavour: "Kabalite forces often prize particular targets amongst the enemy ranks, whether as a macabre trophy, the target of a contract killing, or for some other devious reason.", text: "At the start of the first battle round, select one of the Contracts below, then select one unit from your opponent's army that matches the 'Contract' description in that Contract. Until that Contract is completed, that unit is your Contract unit and KABAL and BLADES FOR HIRE units from your army have the ability stated in that Contract. At the start of your Command phase, if your Contract unit is destroyed, that Contract is completed and you gain 3 Pain tokens.\n\nTrophy Hunters\nContract: One CHARACTER unit.\nAbility: Each time a KABAL or BLADES FOR HIRE model in this unit makes an attack that targets the Contract unit, that attack has the [Precision] ability.\n\nSow Fear and Terror\nContract: One INFANTRY or MOUNTED unit (excluding units containing only CHARACTER models). At the start of your Command phase, this Contract is completed if all non-CHARACTER models in that unit are destroyed.\nAbility: Each time a KABAL or BLADES FOR HIRE model in this unit makes an attack that targets an INFANTRY or MOUNTED unit, that attack has the [Sustained Hits 1] ability.\n\nShow of Strength\nContract: One MONSTER or VEHICLE unit.\nAbility: Each time a KABAL or BLADES FOR HIRE model in this unit makes an attack that targets a MONSTER or VEHICLE unit, that attack has the [Lethal Hits] ability.", restrictions: "" },
                enhancements: [
                    { name: "Leechbite Plate", cost: 5, restriction: "ARCHON model only.", text: "Threaded with parasite circuits and fashioned from empathovoric crystalline resins, this armour drinks deep of the lifeblood that spatters it and the pain of the wounded to nourish and heal its wearer.\n\nThe bearer has a Save characteristic of 3+. At the start of either player's Command phase, you can spend 1 Pain token: if you do, the bearer regains all of its lost wounds." },
                    { name: "Webway Awl", cost: 25, restriction: "ARCHON model only.", text: "A recklessly destructive implement modified from ancient Aeldari technology, the Webway awl allows its bearer to bore temporary rents into and out of the labyrinth dimension, careless of the ruin they leave in their wake.\n\nModels in the bearer's unit have the Deep Strike ability, and you can target the bearer's unit with the Rapid Ingress Stratagem for 0CP." },
                    { name: "Informant Network", cost: 30, restriction: "ARCHON model only.", text: "A web of infiltrating agents, coerced unfortunates, and infoparasitic organisms keeps this Archon well informed and allows them to plan their realspace raids with insidious accuracy.\n\nAt the start of the Declare Battle Formations step, select up to three KABALITE WARRIORS and/or HAND OF THE ARCHON units from your army; those units gain the Infiltrators ability." },
                    { name: "Towering Arrogance", cost: 20, restriction: "ARCHON model only.", text: "So absolute is this war leader's self-belief, so monstrous their ego, that it is virtually a weapon in its own right. Drukhari are drawn in their wake, unable to resist the charismatic certitude they exude. Enemies, meanwhile, give ground and lose heart beneath their witheringly contemptuous glare.\n\nWhile the bearer is leading a unit, improve the Leadership and Objective Control characteristics of models in that unit by 1." },
                ],
                stratagems: [
                    { name: "Double-cross", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One KABAL or BLADES FOR HIRE unit from your army that was selected as the target of one or more of the attacking unit's attacks, and one friendly DRUKHARI unit (excluding VEHICLES).", effect: "Until the end of the phase, each time you would allocate an attack to a model in your KABAL or BLADES FOR HIRE unit, if your DRUKHARI unit is within Engagement Range of the attacking model, no saving throw is made for that attack; instead, your DRUKHARI unit suffers a number of mortal wounds equal to the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Taken Alive", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One DRUKHARI unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your Contract unit is destroyed as a result of those attacks, every unit in your opponent's army must take a Battle-shock test. You cannot gain more than 3 Pain tokens as a result of failed Battle-shock tests caused by this Stratagem.", restrictions: "" },
                    { name: "Tailored Toxins", cp: 1, type: "Epic Deed", when: "Your Shooting phase or the Fight phase.", target: "One KABAL or BLADES FOR HIRE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets your Contract unit, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Enemies Without Number", cp: 1, type: "Epic Deed", when: "Your Command phase, just after you complete a Contract.", target: "One ARCHON WARLORD from your army.", effect: "Select one new Contract (this can be one you have already completed), then select one unit from your opponent's army that is on the battlefield and matches the 'Contract' description in that Contract. Until that Contract is completed, that unit is your Contract unit and the Murderous Agenda Detachment rule applies as normal.", restrictions: "" },
                    { name: "Making a Point", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "One KABALITE WARRIORS or HAND OF THE ARCHON unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, improve the Ballistic Skill and Armour Penetration characteristics of ranged weapons equipped by models in your unit by 1.", restrictions: "" },
                    { name: "Deadly Deceivers", cp: 1, type: "Strategic Ploy", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One KABAL or BLADES FOR HIRE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                ]
            },
            {
                name: "Reaper's Wager",
                flavour: "The Reaper's Wager is among the most macabre saedaths, depicting a gruesome tale of murderous bets between merciless killers and mythic executioners. It is a well-known tale that is greatly enjoyed in the depths of the Dark City. When Harlequin and Drukhari go to war as one, Commorrite warriors often perform an accompanying role in its retelling. Bladed Drukhari transports emerge from the Webway alongside scintillating Harlequin skimmers emblazoned with dazzling adornments. Kabalite Warriors open fire upon the foe from firing decks, and Wyches howl and whoop as they leap acrobatically into the fray. As Harlequin troupes begin their gore-slick recital, they inhabit their roles wholeheartedly, competing furiously with their Drukhari allies to score the greatest tally of luridly violent kills.",
                rule: { name: "Callous Competition", flavour: "In this saedath, the Harlequins embody the Reaper, whilst their Drukhari companions are mortal killers.", text: "At the start of the battle, DRUKHARI units from your army are winning the wager.\n\nEach time a DRUKHARI unit from your army destroys an enemy unit, DRUKHARI units from your army are winning the wager.\n\nEach time a HARLEQUINS unit from your army destroys an enemy unit, HARLEQUIN units from your army are winning the wager.\n\nWhile DRUKHARI units from your army are winning the wager, HARLEQUIN units from your army are losing the wager, and vice versa.\n\nEach time a DRUKHARI or HARLEQUINS model from your army makes an attack, if that model's unit is winning the wager, re-roll a Hit roll of 1. If that model's unit is losing the wager, re-roll a Hit roll of 1 and re-roll a Wound roll of 1 instead.", restrictions: "HARLEQUINS: You can include HARLEQUINS units in your army (see Codex: Aeldari). The combined points cost of such units depends on your battle size:\n- Incursion: Up to 500 pts\n- Strike Force: Up to 1000 pts\n- Onslaught: Up to 1500 pts\nNo HARLEQUINS models from your army can be your WARLORD. If you select this Detachment, you cannot use the Corsairs and Travelling Players army rule." },
                enhancements: [
                    { name: "Archraider", cost: 15, restriction: "HARLEQUINS or DRUKHARI model only.", text: "A veteran of countless realspace raids or vehicular saedaths, this warrior champion utilises the speed of their sleek anti-grav craft to surprise their enemies.\n\nIn the Declare Battle Formations step, if the bearer starts the battle embarked within a DEDICATED TRANSPORT, that DEDICATED TRANSPORT has the Scouts 9\" ability." },
                    { name: "Webway Walker", cost: 15, restriction: "HARLEQUINS or DRUKHARI model only.", text: "This elite combatant possesses intricate knowledge of the Webway's hidden paths and employs them to enhance this dreadful performance.\n\nModels in the bearer's unit have the Deep Strike ability. Each time the bearer's unit is set up on the battlefield using the Deep Strike ability, if that unit is currently losing the wager, until the end of the turn, you can re-roll Charge rolls made for that unit." },
                    { name: "Reaper's Cowl", cost: 25, restriction: "HARLEQUINS model only.", text: "This ebon cloak contains a shadow field generator, which shrouds the bearer in a field of umbral darkness.\n\nModels in the bearer's unit have the Stealth and Infiltrators abilities." },
                    { name: "Conductor of Torment", cost: 20, restriction: "DRUKHARI model only.", text: "This cruel champion of Commorragh seeks only to bathe in the agony of the foe. To them, the outcome of any wager is secondary to the symphony of suffering.\n\nIn your Command phase, you can do one of the following:\n- If your DRUKHARI units are currently losing the wager, you can gain 1 Pain token. If you do, DRUKHARI units from your army are now winning the wager.\n- If your DRUKHARI units are currently winning the wager, you can discard 1 Pain token. If you do, HARLEQUINS units from your army are now winning the wager." },
                ],
                stratagems: [
                    { name: "Malicious Frenzy", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One DRUKHARI or HARLEQUINS unit from your army that has not been selected to shoot or fight this phase.", effect: "Select [Lethal Hits] or [Sustained Hits 1]. Until the end of the phase, weapons equipped by models in your unit have the selected ability.", restrictions: "" },
                    { name: "Fateful Role", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One DRUKHARI or HARLEQUINS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if that unit is losing the wager: on a 4+, do not remove it from play. That destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Murderer's Circus", cp: 1, type: "Battle Tactic", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One DRUKHARI or HARLEQUINS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Shorten the Odds", cp: 1, type: "Strategic Ploy", when: "Your Movement phase, just after a DRUKHARI or HARLEQUINS unit from your army has Advanced.", target: "That unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Scintillating Tempo", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase, just after a DRUKHARI or HARLEQUINS unit from your army is selected to make a Normal, Advance or Fall Back move, is set up on the battlefield, or declares a charge.", target: "That unit.", effect: "Until the end of the turn, enemy units cannot use the Fire Overwatch Stratagem to shoot at your unit.", restrictions: "" },
                    { name: "Dance Macabre", cp: 2, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One DRUKHARI INFANTRY or HARLEQUINS INFANTRY unit from your army that is within 9\" of that enemy unit.", effect: "Your unit can make a Normal move of up to D6\". If your unit is currently losing the wager, it can make a Normal move of up to 6\" instead.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "dru-archon",
                        "name": "Archon",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Agoniser",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Huskblade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Master-crafted power weapon",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hatred Eternal",
                                        "Overlord",
                                        "Devious Mastermind",
                                        "Shadowfield",
                                        "Soul Trap"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Character",
                                "Aeldari",
                                "Archon"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following units: Hand of the Archon; Incubi; Kabalite Warriors.",
                        "compositionText": "1 Archon This model is equipped with: splinter pistol; huskblade; shadowfield."
                },
                {
                        "id": "dru-drazhar",
                        "name": "Drazhar",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Executioner’s demiklaives – single blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Executioner’s demiklaives – dual blades",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Master of Blades",
                                        "Onslaught",
                                        "Silent Executioner"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Blades For Hire",
                                "Drazhar"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Incubi.",
                        "compositionText": "1 Drazhar – EPIC HERO This model is equipped with: Executioner’s demiklaives."
                },
                {
                        "id": "dru-haemonculus",
                        "name": "Haemonculus",
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
                                "sv": "5+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Stinger pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol",
                                                        "Precision"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Haemonculus tools and scissorhands",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision"
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fleshcraft",
                                        "Fear Incarnate",
                                        "Pain Adept"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Haemonculus Covens",
                                "Character",
                                "Aeldari",
                                "Haemonculus"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Wracks.",
                        "compositionText": "1 Haemonculus This model is equipped with: stinger pistol; Haemonculus tools and scissorhands."
                },
                {
                        "id": "dru-lady-malys",
                        "name": "Lady Malys",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lady’s Blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous"
                                                ]
                                        },
                                        {
                                                "name": "Razor fan",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
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
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Archon of the Poisoned Tongue",
                                        "Precognisant",
                                        "Mind Like a Steel Trap"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Character",
                                "Aeldari",
                                "Archon",
                                "Epic Hero",
                                "Lady Malys"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following units: Hand of the Archon; Incubi; Kabalite Warriors.",
                        "compositionText": "1 Lady Malys – EPIC HERO This model is equipped with: Lady’s Blade; razor fan."
                },
                {
                        "id": "dru-lelith-hesperax",
                        "name": "Lelith Hesperax",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lelith’s blades",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Precision",
                                                        "Sustained Hits 2"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brides of Death",
                                        "Blur of Blades",
                                        "Thrilling Spectacle"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Wych Cult",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Succubus",
                                "Lelith Hesperax"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Wyches.",
                        "compositionText": "1 Lelith Hesperax – EPIC HERO This model is equipped with: Lelith’s blades."
                },
                {
                        "id": "dru-succubus",
                        "name": "Succubus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 50
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Archite glaive and agoniser",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lithe Agility",
                                        "Storm of Blades",
                                        "Bloody Spectacle"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Wych Cult",
                                "Character",
                                "Aeldari",
                                "Succubus"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Wyches.",
                        "compositionText": "1 Succubus This model is equipped with: Archite glaive and agoniser."
                },
                {
                        "id": "dru-kharseth",
                        "name": "Kharseth",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dread of the Deep Void",
                                                "range": "24\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast",
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Waystave",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aethersense",
                                        "Fury of the Void"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Anhrathe",
                                "Kharseth"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Kharseth – EPIC HERO This model is equipped with: Dread of the Deep Void; Waystave."
                },
                {
                        "id": "dru-prince-yriel",
                        "name": "Prince Yriel",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eye of Wrath",
                                                "range": "6\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Spear of Twilight",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 7,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Piratical Hero",
                                        "Prince of Corsairs"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Character",
                                "Epic Hero",
                                "Anhrathe",
                                "Prince Yriel"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Prince Yriel – EPIC HERO This model is equipped with: Eye of Wrath; shuriken pistol; Spear of Twilight."
                },
                {
                        "id": "dru-kabalite-warriors",
                        "name": "Kabalite Warriors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sadistic Raiders",
                                        "Cruel Enforcers",
                                        "Kabalite Icon",
                                        "Phantasm Grenade Launcher"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Battleline",
                                "Aeldari",
                                "Kabalite Warriors"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Sybarite 9 Kabalite Warriors Every model is equipped with: splinter rifle; close combat weapon."
                },
                {
                        "id": "dru-wracks",
                        "name": "Wracks",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 60
                                },
                                {
                                        "models": 8,
                                        "cost": 100
                                },
                                {
                                        "models": 10,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Hexrifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Liquifier gun",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Ossefactor",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Stinger pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Torturer’s tools",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+"
                                                ]
                                        },
                                        {
                                                "name": "Twin torturer’s tools",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Experimental Enhancements",
                                        "Torturer’s Craft"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Haemonculus Covens",
                                "Aeldari",
                                "Wracks"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Acothyst 4-9 Wracks Every model is equipped with: twin torturer’s tools."
                },
                {
                        "id": "dru-wyches",
                        "name": "Wyches",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gladiatorial weapons",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Hekatarii blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic Gladiators",
                                        "No Escape"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Grenades",
                                "Wych Cult",
                                "Aeldari",
                                "Wyches"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Hekatrix 9 Wyches Every model is equipped with: splinter pistol; Hekatarii blade."
                },
                {
                        "id": "dru-corsair-voidreavers",
                        "name": "Corsair Voidreavers",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 65
                                },
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Wraithcannon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Reavers of the Void",
                                        "Mistshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Anhrathe",
                                "Corsair Voidreavers"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "1 Voidreaver Felarch 4-9 Corsair Voidreavers Every model is equipped with: shuriken pistol; power sword; close combat weapon."
                },
                {
                        "id": "dru-raider",
                        "name": "Raider",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes and chainsnares",
                                                "range": "Melee",
                                                "a": "D3+3",
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
                                        "Deadly Demise D3",
                                        "Deep Strike",
                                        "Firing Deck 11"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Splinter Racks",
                                        "Vanguard of the Dark City"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Aeldari",
                                "Raider"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Raider This model is equipped with: dark lance; bladevanes and chainsnares. TRANSPORT This model has a transport capacity of 11 DRUKHARI INFANTRY models (excluding JUMP PACK models)."
                },
                {
                        "id": "dru-venom",
                        "name": "Venom",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise 1",
                                        "Deep Strike",
                                        "Firing Deck 6",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Deployment",
                                        "Aerialists"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Aeldari",
                                "Venom"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Venom This model is equipped with: splinter cannon; twin splinter rifle; bladevanes. TRANSPORT This model has a transport capacity of 6 DRUKHARI INFANTRY models (excluding JUMP PACK models). Before the battle, at the start of the Declare Battle Formations step, you can select one KABALITE WARRIORS, HAND OF THE ARCHON or WYCHES unit from your army that has not already been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units]. One of these units must start the battle embarked within this model; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "dru-cronos",
                        "name": "Cronos",
                        "role": "monster",
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
                                "m": "7\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Spirit syphon",
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
                                                "name": "Spirit vortex",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Spirit-leech tentacles",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+"
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pain Parasite",
                                        "Pain Engine",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Haemonculus Covens",
                                "Fly",
                                "Aeldari",
                                "Cronos"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1-2 Cronos Every Cronos is equipped with: spirit syphon; spirit-leech tentacles."
                },
                {
                        "id": "dru-hand-of-the-archon",
                        "name": "Hand of the Archon",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Shardcarbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Stinger pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                                "name": "Pain sculptors",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 4+",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Razorflail",
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
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assassins’ Poisons",
                                        "Archon’s Will",
                                        "Kabalite Icon",
                                        "Phantasm Grenade Launcher",
                                        "Stimm-needler"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Kabal",
                                "Aeldari",
                                "Grenades",
                                "Hand Of The Archon"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Kabalite Archsybarite 9 Kabalite Agents Every model is equipped with: splinter rifle; close combat weapon. ARCHON’S RETINUE If this unit has a Leader unit attached to it during the Declare Battle Formations step, that Leader unit gains the Scouts 7\" ability."
                },
                {
                        "id": "dru-hellions",
                        "name": "Hellions",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pods",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Hellglaive",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lance",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Power weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Lance",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Stunclaw",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Lance",
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Battlefield Butchery",
                                        "Skyboard Evasion",
                                        "Phantasm Grenade Launcher"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Fly",
                                "Aeldari",
                                "Wych Cult",
                                "Hellions"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Helliarch 4-9 Hellions Every model is equipped with: splinter pods; hellglaive."
                },
                {
                        "id": "dru-incubi",
                        "name": "Incubi",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                },
                                {
                                        "models": 10,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Demiklaives – single blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Demiklaives – dual blades",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Klaive",
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Decapitating Strikes",
                                        "Tormentors",
                                        "Incubi Shrine Token",
                                        "Designer's Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Blades For Hire",
                                "Incubi"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Klaivex 4-9 Incubi Every model is equipped with: klaive."
                },
                {
                        "id": "dru-mandrakes",
                        "name": "Mandrakes",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Baleblast",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Devastating Wounds",
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Glimmersteel blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
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
                                        "Deep Strike",
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fade Away",
                                        "Shade Weavers"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Blades For Hire",
                                "Mandrakes"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Nightfiend 4-9 Mandrakes Every model is equipped with: baleblast; glimmersteel blade."
                },
                {
                        "id": "dru-ravager",
                        "name": "Ravager",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 11,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes",
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Agonising Suppression",
                                        "Eradicate the Foe"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Kabal",
                                "Fly",
                                "Aeldari",
                                "Ravager"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Ravager This model is equipped with: 3 dark lances; bladevanes. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time it makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dru-razorwing-jetfighter",
                        "name": "Razorwing Jetfighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark Lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Razorwing missiles – monoscythe missiles",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Razorwing missiles – neurotoxin missiles",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Razorwing missiles – shatterfield missiles",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Twin splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Rapid Fire 2",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladed wings",
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
                                        "Deadly Demise D3",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Nowhere to Run",
                                        "Ground Attack Craft"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Fly",
                                "Aircraft",
                                "Aeldari",
                                "Razorwing Jetfighter"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Razorwing Jetfighter This model is equipped with: 2 dark lances; Razorwing missiles; twin splinter rifle; bladed wings."
                },
                {
                        "id": "dru-reavers",
                        "name": "Reavers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 70
                                },
                                {
                                        "models": 6,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "16\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Heat lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Splinter rifle",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Matchless Swiftness",
                                        "Eviscerating Fly-by",
                                        "Cluster Caltrops",
                                        "Grav-talon"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Wych Cult",
                                "Fly",
                                "Aeldari",
                                "Reavers"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Arena Champion 2-5 Reavers Every model is equipped with: splinter pistol; splinter rifle; bladevanes."
                },
                {
                        "id": "dru-scourges-with-heavy-weapons",
                        "name": "Scourges with Heavy Weapons",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Dark lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Haywire blaster",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Heavy"
                                                ]
                                        },
                                        {
                                                "name": "Heat lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Heavy",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Shardcarbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Heavy",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Winged Strike",
                                        "Airborne Evasion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Grenades",
                                "Jump Pack",
                                "Aeldari",
                                "Blades For Hire",
                                "Scourges",
                                "Scourges With Heavy Weapons"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Solarite 4 Scourges The Solarite is equipped with: shardcarbine; close combat weapon. Every Scourge is equipped with: splinter cannon; close combat weapon."
                },
                {
                        "id": "dru-scourges-with-shardcarbines",
                        "name": "Scourges with Shardcarbines",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shardcarbine",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Splinter pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
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
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swooping Descent",
                                        "Murderous Crossfire"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Grenades",
                                "Jump Pack",
                                "Aeldari",
                                "Blades For Hire",
                                "Scourges",
                                "Scourges With Shardcarbines"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Solarite 4 Scourges The Solarite is equipped with: shardcarbine; close combat weapon."
                },
                {
                        "id": "dru-talos",
                        "name": "Talos",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                },
                                {
                                        "models": 2,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Stinger pod",
                                                "range": "24\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin haywire blaster",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin heat lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin liquifier gun",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin splinter cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Chain-flails",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Macro-scalpel",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Talos gauntlet",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Talos ichor injector",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "D6",
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
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mindless Killing Machines",
                                        "Devoted to Pain",
                                        "Torture Device"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Haemonculus Covens",
                                "Fly",
                                "Aeldari",
                                "Talos"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1-2 Talos Every model is equipped with: twin splinter cannon; 2 macro-scalpels."
                },
                {
                        "id": "dru-voidraven-bomber",
                        "name": "Voidraven Bomber",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 245
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 0
                        },
                        "invuln": "6+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dark scythe",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Void lance",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Voidraven missiles – implosion missiles",
                                                "range": "48\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Voidraven missiles – shatterfield missiles",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Bladed wings",
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
                                        "Deadly Demise D3",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Power from Pain"
                                ],
                                "wargear": [],
                                "other": [
                                        "Nowhere to Hide",
                                        "Void Mine"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aircraft",
                                "Fly",
                                "Aeldari",
                                "Voidraven Bomber"
                        ],
                        "factionKeywords": [
                                "Drukhari"
                        ],
                        "compositionText": "1 Voidraven Bomber This model is equipped with: 2 void lances; bladed wings. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "dru-corsair-skyreavers",
                        "name": "Corsair Skyreavers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 75
                                },
                                {
                                        "models": 10,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Blast pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": "D3",
                                                "keywords": [
                                                        "Assault",
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
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2"
                                                ]
                                        },
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Corsair blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Raid and Run"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Anhrathe",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Corsair Skyreavers"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "1 Skyreaver Felarch 4-9 Skyreavers Every model is equipped with: shuriken pistol; Corsair blade."
                },
                {
                        "id": "dru-corsair-voidscarred",
                        "name": "Corsair Voidscarred",
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
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Blaster",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Executioner",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 2",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Long rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Heavy",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shredder",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken pistol",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken rifle",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Rapid Fire 1"
                                                ]
                                        },
                                        {
                                                "name": "Wraithcannon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        }
                                ],
                                "melee": [
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
                                                "name": "Paired Hekatarii blades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Witch staff",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": "D3",
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Psychic"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Piratical Raiders",
                                        "Channeller Stones",
                                        "Faolchú",
                                        "Mistshield"
                                ]
                        },
                        "keywords": [
                                "Drukhari",
                                "Asuryani"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "This unit can contain a maximum of 10 models. 1 Voidscarred Felarch 4-9 Corsair Voidscarred 0-1 Shade Runner 0-1 Soul Weaver 0-1 Way Seeker Every Corsair Voidscarred and Voidscarred Felarch is equipped with: shuriken pistol; power sword; close combat weapon. A Shade Runner is equipped with: shuriken pistol; paired Hekatarii blades. A Soul Weaver is equipped with: shuriken pistol; power sword; channeller stones. A Way Seeker is equipped with: shuriken pistol; Executioner; witch staff. KEYWORDS – ALL MODELS: INFANTRY, AELDARI, GRENADES, ANHRATHE, CORSAIR VOIDSCARREDWAY SEEKER: PSYKER FACTION"
                },
                {
                        "id": "dru-starfangs",
                        "name": "Starfangs",
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
                                "m": "14\"",
                                "t": 6,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Disintegrator cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Starfang grenade launcher",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Wraithbone hull",
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
                                        "Deadly Demise 1",
                                        "Scouts 7\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hallucinogen Grenades"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Anhrathe",
                                "Fly",
                                "Smoke",
                                "Grenades",
                                "Starfangs"
                        ],
                        "factionKeywords": [
                                "Drukhari, Asuryani"
                        ],
                        "compositionText": "1-2 Starfangs Every model is equipped with: disintegrator cannon; Starfang grenade launcher; wraithbone hull."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(dru);
})();
