/**
 * W40K Army Builder — Aeldari (10th Edition)
 *
 * Asuryani (Craftworlds), Harlequins and Ynnari datasheets from Codex: Aeldari.
 * Names-only abilities/rules; stats, weapons, points and keywords are factual
 * game data. Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const aeldari = {
        id: "aeldari",
        name: "Aeldari",
        icon: "\uD83C\uDF00",
        allegiance: "Xenos",
        flavour: "",
        armyRules: [
            { name: "Battle Focus", flavour: "In war, as in all things, the Aeldari bring the full might of their intellect, skill and agility to bear upon the task. Coupled with their exceptional technology, this ensures they move with swiftness and grace that is impossible for the foe to match.", text: "If your Army Faction is ASURYANI, at the start of the battle round, you receive a number of Battle Focus tokens based on the battle size, as shown in the table below.\n- Incursion: 2\n- Strike Force: 4\n- Onslaught: 6\n\nEach time one of the triggers shown in the Agile Manoeuvres section below occurs, you can spend one Battle Focus token to enable the relevant eligible unit to perform that Agile Manoeuvre. A unit is eligible to perform an Agile Manoeuvre if it has this ability and has not already performed an Agile Manoeuvre in the same phase. Unless otherwise stated, you cannot trigger the same Agile Manoeuvre more than once per phase. At the end of the battle round, all unspent Battle Focus tokens are lost.\n\nAGILE MANOEUVRES\n\nSwift as the Wind\nTRIGGER: When an eligible unit from your army is selected to make a Normal, Advance or Fall Back move. You can trigger this Agile Manoeuvre more than once per phase (provided a different unit performs it each time).\nEFFECT: Until the end of the phase, add 2\" to the Move characteristic of models in that unit.\n\nFlitting Shadows\nTRIGGER: When an eligible unit from your army is selected to make a Normal, Advance or Fall Back move, is set up on the battlefield, or declares a charge.\nEFFECT: Until the end of the turn, enemy units cannot use the Fire Overwatch Stratagem to shoot at that unit.\n\nStar Engines\nTRIGGER: When an eligible VEHICLE unit from your army is selected to make an Advance move.\nEFFECT: Until the end of the turn, Ranged weapons equipped by this unit have the [Assault] ability.\n\nSudden Strike\nTRIGGER: When an eligible unit from your army is selected to fight.\nEFFECT: Until the end of the phase, each time a model in that unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\".\n\nOpportunity Seized\nTRIGGER: When an enemy unit ends a Fall Back move.\nEFFECT: One eligible unit from your army (excluding TITANIC units) that started the phase within Engagement Range of that enemy unit can make a Normal move of up to D6+1\".\n\nFade Back\nTRIGGER: In your opponent's Shooting phase, just after an enemy unit has shot.\nEFFECT: One eligible unit from your army (excluding TITANIC units) that was hit by one or more of those attacks can make a Normal move of up to D6+1\".\" }
        ],
        detachments: [
            {
                name: "Warhost",
                flavour: "When all the varied warriors and war machines of a craftworld gather to fight in its defence, they form a Warhost. Exemplified by the dreaded Swordwind of Biel-Tan, these armies alloy many specialised units into a greater whole that combines precisely applied martial might with blistering speed. The result is a force that - often outnumbered - possesses every weapon it requires to achieve victory, guided by the skilled hands and gifted minds of those who can seize it. Cold-eyed Guardians secure vital strategic sites and defend them with salvoes of firepower. Streaking assault craft fill the skies, jetbike-mounted warriors slashing through the enemy ranks. At the same time, grav-tanks wheel gracefully to pick off enemy war engines or debark squads of elite Aspect Warriors precisely where and when they are needed. Supported by eldritch artillery and psychic might, the Warhost strikes the foe a series of crippling blows while evading their clumsy attacks in return, until soon enough, the battle's outcome is beyond any doubt.",
                rule: { name: "Martial Grace", flavour: "Every element of a Warhost operates with speed and efficiency, units swirling around one another in an agile storm of blades and tightly controlled ferocity. The Aeldari know precisely where they must be at any given stage of the battle plan and move with inhuman elegance that leaves their enemies reeling in their wake.", text: "- At the start of the battle round, you receive 1 additional Battle Focus token.\n- Each time a unit from your army performs the Swift as the Wind Agile Manoeuvre, until the end of the phase, add an additional 1\" to the Move characteristic of models in that unit.\n- Each time a unit from your army performs an Agile Manoeuvre that involves rolling a D6, add 1 to the result.", restrictions: "" },
                enhancements: [
                    { name: "Phoenix Gem", cost: 35, restriction: "ASURYANI model only.", flavour: "Aeldari myth tells how Isha once drew down the heat of a hundred stars into a glittering gem to save Asuryan. The Phoenix Gem is the only surviving fragment of this ancient stone and retains the power to return life to the fallen.", text: "The first time the bearer is destroyed, remove it from play, then, at the end of the phase, roll one D6: on a 2+, set the bearer back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of one or more enemy units, with its full wounds remaining." },
                    { name: "Timeless Strategist", cost: 15, restriction: "ASURYANI model only.", flavour: "This ancient Aeldari war leader has commanded armies for the entire lifetimes of the younger mortal species. Their mastery of the swift, decisive and reactive strategy is second to none.", text: "At the start of the battle round, if the bearer is on the battlefield (or any TRANSPORT it is embarked within is on the battlefield), you receive 1 additional Battle Focus token." },
                    { name: "Gift of Foresight", cost: 15, restriction: "ASURYANI model only.", flavour: "It is far easier to avoid fatal battlefield errors if one has already foreseen when they will occur and how to prevent them.", text: "Once per battle round, you can target the bearer's unit with the Command Re-roll Stratagem for 0CP." },
                    { name: "Psychic Destroyer", cost: 30, restriction: "ASURYANI PSYKER model only.", flavour: "This psyker has refined the destructive potential of their mental abilities, honing them to a fine and frighteningly lethal point.", text: "Add 1 to the Damage characteristic of ranged Psychic weapons equipped by the bearer." },
                ],
                stratagems: [
                    { name: "Lightning-fast Reactions", cp: 1, type: "Battle Tactic", flavour: "Processing events at incredible speed, these warriors easily evade attacks that would have slain any less celeritous combatants.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One ASURYANI unit from your army (excluding WRAITH CONSTRUCT units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                    { name: "Skyborne Sanctuary", cp: 1, type: "Strategic Ploy", flavour: "The Aeldari excel in striking swiftly, then leaping back into the safety of their skimming transports.", when: "End of the Fight phase.", target: "One ASURYANI unit from your army that was eligible to fight this phase and one friendly TRANSPORT it is able to embark within.", effect: "If your ASURYANI unit is not within Engagement Range of one or more enemy units and is wholly within 6\" of that TRANSPORT, it can embark within it.", restrictions: "" },
                    { name: "Feigned Retreat", cp: 1, type: "Strategic Ploy", flavour: "What appears to be a full retreat one moment is revealed as the deceptive prelude to a devastating attack the next.", when: "Your Movement phase, just after an ASURYANI unit from your army Falls Back.", target: "That ASURYANI unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Blitzing Firepower", cp: 1, type: "Battle Tactic", flavour: "When unleashed in a close-ranged storm, Aeldari weapons fire can completely eradicate all life within the target zone.", when: "Your Shooting phase.", target: "One ASURYANI unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Sustained Hits 1] ability while targeting an enemy unit within 12\". If such a weapon already has that ability, until the end of the phase, each time an attack is made with that weapon, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Fire and Fade", cp: 1, type: "Strategic Ploy", flavour: "The Aeldari are masters of hit-and-run tactics, engaging a target with a flurry of shots before swiftly ducking back out of harm's way.", when: "Your Shooting phase, just after an ASURYANI INFANTRY unit from your army (excluding AIRCRAFT, ASURMEN and WRAITH CONSTRUCT units) has shot.", target: "That ASURYANI unit.", effect: "Your unit can make a Normal move of up to D6+1\".", restrictions: "Until the end of the turn, your unit is not eligible to declare a charge or embark within a TRANSPORT." },
                    { name: "Webway Tunnel", cp: 1, type: "Strategic Ploy", flavour: "By slipping away into the ethereal confines of the Webway, Aeldari warriors can circumnavigate the foe and strike from new and unexpected quarters.", when: "End of your opponent's Fight phase.", target: "One ASURYANI INFANTRY unit from your army that is wholly within 9\" of one or more battlefield edges.", effect: "If your unit is not within Engagement Range of one or more enemy units, remove it from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Windrider Host",
                flavour: "Squadrons of jetbikes slice the air like hurled daggers as the Windrider Host sweeps down upon its prey. Prioritising breathtaking speed over almost all other concerns, these formations of high-tech airborne cavalry strike at will along the enemy battle line. Their onset is shockingly sudden, a storm that rises with the scream of anti-grav engines and the whine of rapid-firing shuriken and laser weapons, then sweeps over the foe in eruptions of blood and terror. Faster than thought, the Windrider Host has overshot the foe and arced away to leave any threat of retribution foundering in its wake. Often, the Aeldari hit their enemies so hard and fast that jets of gore are still pattering to the ground, corpses still tumbling, and war engines only just starting to shake with detonations as the jetbikes dwindle into the distance. Yet this is not the end of the foe's suffering, but rather its beginning. The Windrider Host will return, arrowing in for another attack run again and again until all that remains of the enemy is bodies, wreckage, and fleeing remnants.",
                rule: { name: "Ride the Wind", flavour: "These hosts strike from many quarters, employing their incredible speed and agility to evade and ambush the foe at every turn.", text: "In the Declare Battle Formations step you can set up ASURYANI MOUNTED and VYPER units from your army in Reserves. During the battle, such units can be set up on the battlefield as if they were arriving from Strategic Reserves. For the purposes of setting up ASURYANI MOUNTED or VYPER units from your army on the battlefield, treat the current battle round number as being one higher than it actually is.\n\nIn addition, at the end of your opponent's turn, you can select a number of ASURYANI MOUNTED or VYPER units from your army (excluding units within Engagement Range of one or more enemy units), then remove those units from the battlefield and place them into Strategic Reserves. The maximum number of units you can select depends on the battle size, as shown below.\n- Incursion: 1\n- Strike Force: 2\n- Onslaught: 3\n\nKEYWORDS: WINDRIDERS units from your army gain the BATTLELINE keyword.", restrictions: "" },
                enhancements: [
                    { name: "Firstdrawn Blade", cost: 10, restriction: "ASURYANI MOUNTED model only.", flavour: "Those who lead the Windrider Hosts do so from the front, embodying the first of the Swords of Vaul drawn in wrath.", text: "Models in the bearer's unit have the Scouts 9\" ability." },
                    { name: "Mirage Field", cost: 25, restriction: "ASURYANI MOUNTED model only.", flavour: "This field generator surrounds its bearer with contradictory sensor ghosts and split-second illusions that make them incredibly challenging to target, particularly when moving at speed.", text: "Each time an attack targets the bearer's unit, subtract 1 from the Hit roll." },
                    { name: "Seersight Strike", cost: 15, restriction: "ASURYANI MOUNTED PSYKER model only.", flavour: "This warrior has mastered the art of augmenting their mounted attack runs with lashing blades of focused psychic power that punch through the heaviest armour and monstrous hide to vital targets deep within.", text: "Psychic weapons equipped by the bearer have the [Anti-Monster 2+] and [Anti-Vehicle 2+] abilities." },
                    { name: "Echoes of Ulthanesh", cost: 20, restriction: "ASURYANI MOUNTED model only.", flavour: "Riding out to battle upon their skimming steed, this charismatic commander is reminiscent of the great Aeldari hero come again. The mere sight of them swooping down upon their foes inspires their warriors to remarkable feats of heroism in their turn.", text: "In your Command phase, roll one D6, adding 1 to the result if the bearer is not within your deployment zone, and adding an additional 1 to the result if the bearer is within your opponent's deployment zone: on a 5+, you gain 1CP." },
                ],
                stratagems: [
                    { name: "Death from on High", cp: 1, type: "Battle Tactic", flavour: "Streaking suddenly down from on high, the Aeldari strike like the fall of an executioner's blade.", when: "Your Shooting phase or the Fight phase.", target: "One ASURYANI MOUNTED or VYPER unit from your army that was set upon the battlefield from Reserves this turn and has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Overflight", cp: 1, type: "Strategic Ploy", flavour: "These airborne warriors arc up and away from the ruin of their foes, already seeking fresh prey.", when: "End of your Shooting phase or the end of the Fight phase.", target: "One ASURYANI MOUNTED unit from your army that destroyed one or more enemy units this phase.", effect: "Your unit can make a Normal move of up to 7\".", restrictions: "" },
                    { name: "Wind of Blades", cp: 1, type: "Strategic Ploy", flavour: "Warriors such as these cannot be pinned down or held back. They hit and run at will, hammering the foe with constant fire and slashing blows.", when: "Your Movement phase.", target: "One ASURYANI MOUNTED or VYPER unit from your army that has not been selected to move this phase.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back.", restrictions: "" },
                    { name: "Daring Riders", cp: 1, type: "Strategic Ploy", flavour: "Some of the Windrider Hosts are especially aggressive, unable to restrain the fierce joy of racing perilously close to the foe while strafing them with fire.", when: "The Reinforcements step of your Movement phase.", target: "One ASURYANI MOUNTED or VYPER unit from your army in Reserves.", effect: "Until the end of the phase, when setting up your unit on the battlefield from Reserves, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units. When doing so, if your unit is set up within 9\" horizontally of one or more enemy units, until the end of the turn, it is not eligible to declare a charge.", restrictions: "" },
                    { name: "Focused Firepower", cp: 1, type: "Battle Tactic", flavour: "Able to analyse and assess target data at incredible speeds, these Aeldari isolate the foe's weak spot and pour all their fire into it as they hurtle past.", when: "Your Shooting phase.", target: "One ASURYANI MOUNTED or VYPER unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Spiralling Evasion", cp: 1, type: "Battle Tactic", flavour: "None but the Aeldari could risk such breakneck and seemingly suicidal evasive manoeuvres to jink around incoming enemy fire.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ASURYANI MOUNTED or VYPER unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a 4+ invulnerable save.", restrictions: "" },
                ]
            },
            {
                name: "Spirit Conclave",
                flavour: "Only in the most desperate circumstances will a craftworld's seers authorise the mass awakening of their dead. At such times, Spiritseers, Warlocks and Farseers come together as one, forming a psychic choir to bind the spirits of the fallen into wraithbone form. While living Aeldari often fight alongside these revenants, the greater strength of such forces is graven in wraithbone, driven by the implacable wills of warrior ghosts and armed with nightmarish tools of destruction. Striding into battle with stately grace, Wraithguard and Wraithlords lay down ferocious firepower. Where enemy resistance is strongest, Wraithblades stalk and strike while the long shadows of Wraithknights fall across the foe like a promise of doom soon to be fulfilled. Together, the psychically linked seers guide the slaughter with eerie calm, issuing command after command to their undying allies. In the face of such implacable destruction, and with their own mightiest weapons seemingly ineffective, even the boldest enemies soon crumble.",
                rule: { name: "Shepherds of the Dead", flavour: "When guided by a Spirit Conclave, the ghost warriors gain a clarity and prowess they would otherwise lack. Moreover, should the foe slay any of their precious spirit guides, the dead will surely have their vengeance.", text: "Each time an ASURYANI PSYKER model from your army is destroyed by an enemy unit, that enemy unit gains a Vengeful Dead token. Each time a WRAITH CONSTRUCT model from your army makes an attack that targets a unit with one or more Vengeful Dead tokens, add 1 to the Hit roll and add 1 to the Wound roll.\n\nASURYANI PSYKER models from your army have the following ability:\n\nSpirit Guides (Aura): While a WRAITHBLADES, WRAITHGUARD or WRAITHLORD unit from your army is within 12\" of this model, that unit has the Battle Focus ability.\n\nKEYWORDS: WRAITHBLADES and WRAITHGUARD units from your army gain the BATTLELINE keyword.", restrictions: "" },
                enhancements: [
                    { name: "Light of Clarity", cost: 30, restriction: "SPIRITSEER model only.", flavour: "The mind of this Spiritseer shines with psychic illumination, burning away the veils that cloud the senses of the dead.", text: "In your Command phase, select one friendly WRAITH CONSTRUCT unit within 12\" of the bearer. Until the start of your next Command phase, add 1 to the Objective Control characteristic of INFANTRY models in that unit and add 3 to the Objective Control characteristic of MONSTER models in that unit." },
                    { name: "Stave of Kurnous", cost: 15, restriction: "SPIRITSEER model only.", flavour: "Wound about with finely inscribed myths of Kurnous, the Hunter, this wraithbone staff imbues ghost warriors with an echo of the slain god's keen-eyed skill.", text: "In your Command phase, select one friendly WRAITH CONSTRUCT unit within 12\" of the bearer (excluding TITANIC units). Until the start of your next Command phase, each time a model in that unit makes an attack, on a Critical Wound, that attack has the [Precision] ability." },
                    { name: "Rune of Mists", cost: 10, restriction: "SPIRITSEER model only.", flavour: "This rare psychic rune binds occluding psychic energies about nearby wraith constructs to baffle the foe's senses.", text: "In your Command phase, select one friendly WRAITH CONSTRUCT unit within 12\" of the bearer. Until the start of your next Command phase, each time a ranged attack targets that unit, unless the attacking model is within 18\", models in that unit have the Benefit of Cover against that attack." },
                    { name: "Higher Duty", cost: 25, restriction: "SPIRITSEER model only.", flavour: "Knowing their crucial role in guiding the ghost warriors, this seer chooses duty over personal glory.", text: "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of the bearer, the bearer's unit can make a Normal move of up to 6\"." },
                ],
                stratagems: [
                    { name: "Seer's Eye", cp: 1, type: "Battle Tactic", flavour: "Seeing their prey as much through the eyes of their guiding seer as with any sense of their own, the wraith constructs strike swift and true.", when: "Your Shooting phase or the Fight phase.", target: "One AELDARI PSYKER model from your army and one friendly WRAITH CONSTRUCT unit within 12\" of it that has not been selected to shoot or fight this phase.", effect: "Select one enemy unit visible to your PSYKER model. Until the end of the phase, each time a model in your WRAITH CONSTRUCT unit makes an attack that targets that enemy unit, you can ignore any or all modifiers to the Armour Penetration and/or Damage characteristics of that attack.", restrictions: "" },
                    { name: "Wraithbone Armour", cp: 1, type: "Battle Tactic", flavour: "The apparent fragility of wraith constructs' lithe bodies belies their incredible resilience.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One WRAITH CONSTRUCT unit from your army (excluding TITANIC units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Blades from Beyond", cp: 1, type: "Battle Tactic", flavour: "Sometimes, the twinned perceptions of ghost warriors allow them to perceive - and strike at - the souls of their foes.", when: "Fight phase.", target: "One WRAITHBLADES, WRAITHLORD or WRAITHKNIGHT unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Devastating Wounds] ability.", restrictions: "" },
                    { name: "Soul Bridge", cp: 1, type: "Strategic Ploy", flavour: "It is risky for a Spiritseer to cast their awareness so far, but aiding the dead is sometimes necessary.", when: "Your Command phase.", target: "One WRAITHBLADES, WRAITHGUARD or WRAITHLORD unit from your army and one ASURYANI PSYKER model from your army.", effect: "Until the start of your next Command phase, your WRAITHBLADES, WRAITHGUARD or WRAITHLORD unit is considered to be within 12\" of your PSYKER model for the purposes of the Psychic Guidance and Spirit Guides abilities.", restrictions: "" },
                    { name: "Spirit Token", cp: 1, type: "Strategic Ploy", flavour: "By leaving psycho-resonant wraithbone markers upon the battlefield, these warriors wreathe vital strategic locations in an aura of dread not easily overcome.", when: "Start of your Movement phase.", target: "One WRAITHBLADES or WRAITHGUARD unit from your army.", effect: "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Crushing Strides", cp: 1, type: "Battle Tactic", flavour: "Elegant they may be, but the weight and implacable strength of wraith constructs on the charge can smash enemies to the ground bloody and broken.", when: "Your Charge phase, just after a WRAITHBLADES, WRAITHLORD or WRAITHKNIGHT unit from your army ends a Charge move.", target: "That WRAITHBLADES, WRAITHLORD or WRAITHKNIGHT unit.", effect: "Select one enemy unit within Engagement Range of your unit and roll one D6 for each WRAITHBLADES model in your unit, or roll four D6 if your unit has the WRAITHLORD keyword, or roll six D6 if your unit has the WRAITHKNIGHT keyword: for each 3+, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                ]
            },
            {
                name: "Guardian Battlehost",
                flavour: "So few are the Aeldari in number and so desperate in their plight that all must be capable warriors when needed. Sometimes a foe may jeopardise a craftworld so severely that every martial asset must be deployed to drive them back. At others, threats or opportunities may arise in so short a space of time that Aspect Warriors, Outcasts and Commorrite allies alone are not enough. Whatever the case, when the massed Guardians of a craftworld answer the call to war, they can prove a versatile, durable and utterly determined force. Hails of shuriken fire and scatter laser salvoes rake the enemy lines. War Walkers and grav-tanks pick off heavier enemy assets with inescapable precision and fury. Aspect Warriors drawn from the shrines of the home craftworld fight in support of their more numerous kin, bands of Dire Avengers leading them on the fleet-footed attack or implacable defence. Faced with the might of the Guardian Battlehost, foes are made to rue their foolishness in rousing a craftworld's wrath.",
                rule: { name: "Defend at All Costs", flavour: "Battlehosts often deploy to protect arterial Webway gates, the world shrines of vulnerable Exodite worlds or the domes and galleries of their home craft world; this lends their warriors an especially keen determination to protect their holdings from foes.", text: "Each time a DIRE AVENGER, GUARDIAN, SUPPORT WEAPON or WAR WALKER model from your army makes an attack, if that model's unit and/or the target unit are within range of one or more objective markers, add 1 to the Hit roll.", restrictions: "" },
                enhancements: [
                    { name: "Craftworld's Champion", cost: 25, restriction: "ASURYANI model only.", flavour: "Appointed as the mastermind behind the defence of an entire craftworld, this warrior will hold vital ground at all costs.", text: "The bearer has an Objective Control characteristic of 5." },
                    { name: "Ethereal Pathway", cost: 30, restriction: "ASURYANI model only.", flavour: "Knowing secret paths through the Webway, the bearer can direct warriors to outmanoeuvre the foe.", text: "In the Deploy Armies step, select up to two GUARDIANS units from your army. Models in the selected units have the Infiltrators ability." },
                    { name: "Protector of the Paths", cost: 20, restriction: "ASURYANI model only.", flavour: "This warrior's knowledge of the home ground on which they fight allows them to expertly position their forces to bracket the routes of the enemy's approach with fire.", text: "While the bearer is leading a DIRE AVENGERS or GUARDIANS unit, once per battle round, you can target the bearer's unit with the Fire Overwatch Stratagem for 0CP, and while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+, or unmodified Hit rolls of 4+ instead if the bearer's unit is within range of an objective marker you control." },
                    { name: "Breath of Vaul", cost: 10, restriction: "ASURYANI model only.", flavour: "An ancient relic of Aeldari technology, this device enhances the lethality of those weapons said to channel the killing heat of Vaul's blazing forges.", text: "While the bearer is leading a STORM GUARDIANS unit, each time you roll to determine the number of attacks made with a flamer equipped by a model in that unit, you can re-roll the result, and each time you make a Damage roll for a model equipped with a fusion gun in that unit, you can re-roll the result." },
                ],
                stratagems: [
                    { name: "Warding Salvoes", cp: 1, type: "Battle Tactic", flavour: "Woe betide the foe that seeks to claim the holdings of armed and determined Asuryani.", when: "Your Shooting phase or the Fight phase.", target: "One DIRE AVENGERS or GUARDIANS unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of one or more objective markers, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Shield Nodes", cp: 1, type: "Battle Tactic", flavour: "Exploiting a spar of old Aeldari technology, these warriors engage the flickering ghosts of ancient defensive force fields.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One DIRE AVENGERS or GUARDIANS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "If your unit is within range of one or more objective markers, until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Vaul's Vengeance", cp: 1, type: "Battle Tactic", flavour: "Swift and terrible vengeance comes for those who dare strike down the warriors of the Aeldari in the form of searing heavy weapons fire.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit destroys a DIRE AVENGERS or GUARDIANS unit from your army.", target: "One WAR WALKERS unit from your army.", effect: "After that enemy unit has finished making its attacks, your unit can shoot as if it were your Shooting phase, but when resolving those attacks, it can only target that enemy unit (and only if it is an eligible target).", restrictions: "You can only use this Stratagem once per battle round." },
                    { name: "Time to Strike", cp: 1, type: "Strategic Ploy", flavour: "Storm Guardians train to recognise where and when their selfless aggression can best benefit their craftworld and never to miss such opportunities.", when: "Your Movement phase.", target: "One STORM GUARDIANS unit from your army that has not been selected to move this phase.", effect: "Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit. Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Blades of Asuryan", cp: 1, type: "Battle Tactic", flavour: "Asuryani martial teachings enable those wielding ranged weapons to employ them as close-quarter implements of death as well.", when: "Your Shooting phase.", target: "One DIRE AVENGERS or GUARDIANS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Pistol] ability.", restrictions: "" },
                    { name: "Cost of Victory", cp: 1, type: "Strategic Ploy", flavour: "In so desperate and vital a fight, the Aeldari must accept casualties they would normally avoid and even send fresh warriors in to bolster the flagging ranks if it means victory.", when: "End of your opponent's Fight phase.", target: "One GUARDIANS unit from your army.", effect: "If your unit is not within Engagement Range of one or more enemy units, remove it from the battlefield and place it into Strategic Reserves. When doing so, return every destroyed GUARDIANS model to your unit.", restrictions: "" },
                ]
            },
            {
                name: "Ghosts of the Webway",
                flavour: "Even a single troupe of Harlequins can spread bloodshed and unreasoning terror amongst the enemy lines. When entire masques of these sinister and acrobatic killers gather to make war, they strike with such speed, skill and violence that they can eviscerate the mightiest enemy armies. Their saedath battle plans are as dynamic and intricate as they are spectacularly lethal. Some see spearheads of hurtling jetbikes shatter the enemy lines before grav-transports disgorge Harlequin troupes to assassinate their reeling foes' leaders. Others lure enemy hordes into bloody massacres laced with dramatic irony and bleak mirth or play out murderous recountings of Aeldari morality tales that cast the enemy as unwilling participants in the story of their bloody punishment. Whether fighting alone or alongside hosts from the craftworlds, Commorragh or Corsair fleets, the Harlequins strike without warning - or often, to the foe, apparent cause - and inflict such horrors that even their allies may be left shocked at the carnage.",
                rule: { name: "Acrobatic Onslaught", flavour: "Trying to fight the Harlequins of the Laughing God is like battling bladed smoke. They flip and bound through the enemy ranks with contemptuous ease, springing across the heads and shoulders of dumbfounded combatants, sprinting across the hulls of war engines, all the while bearing down with murderous intent upon their true intended victims.", text: "Each time a HARLEQUINS model from your army makes a Charge move, it can move through enemy models.\n\nTRAVELLING PLAYERS:\n- TROUPE units from your army gain the BATTLELINE keyword and TROUPE models in those units have an Objective Control characteristic of 2.\n- You can include up to three of each of the following models in your army: DEATH JESTER, SHADOWSEER, TROUPE MASTER.", restrictions: "" },
                enhancements: [
                    { name: "Cegorach's Coil", cost: 25, restriction: "TROUPE MASTER model only.", flavour: "This vicious monofilament lariat unspools from its wielder's gauntlet in a heartbeat, lashing through the foe before retracting as they tumble into bloody chunks.", text: "Each time the bearer's unit ends a Charge move, select one enemy unit within Engagement Range of the bearer's unit, then roll one D6 for each model in the bearer's unit that is within Engagement Range of that enemy unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds)." },
                    { name: "Mask of Secrets", cost: 15, restriction: "HARLEQUINS model only.", flavour: "So terrifying and yet so captivating are the shifting aspects of this Harlequin's psychoreactive mask that they can hypnotise foes or stop their hearts with fear.", text: "Each time an enemy unit (excluding MONSTERS and VEHICLES) within Engagement Range of the bearer's unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests." },
                    { name: "Murder's Jest", cost: 20, restriction: "DEATH JESTER model only.", flavour: "This malevolent shrieker cannon catalyses its victims' fear impulses into exaggerated bioelectric shocks, forcing them to scare themselves to death.", text: "Each time the bearer makes an attack that targets a unit that is Below Half-strength, each successful Hit roll scores a Critical Hit." },
                    { name: "Mistweave", cost: 15, restriction: "SHADOWSEER model only.", flavour: "Employing their psychic powers of illusion and obfuscation, this Shadowseer can cause their comrades to vanish from the foe's perceptions.", text: "While the bearer is leading a unit, models in that unit have the Infiltrators ability." },
                ],
                stratagems: [
                    { name: "Staged Death", cp: 1, type: "Strategic Ploy", flavour: "A feigned death and sudden, shocking return are as impactful as dismaying to the foe.", when: "Any phase.", target: "One HARLEQUINS CHARACTER model from your army that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.", effect: "At the end of the phase, set your model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with half of its starting number of wounds remaining.", restrictions: "Each model can only be targeted with this Stratagem once per battle." },
                    { name: "Heroes' Fall", cp: 1, type: "Strategic Ploy", flavour: "Though they may be slain, this step of the saedath calls on the players to act out the demise of tragic heroes who take their enemies with them to death.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One HARLEQUINS unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Mocking Flight", cp: 1, type: "Strategic Ploy", flavour: "The Harlequins tumble away in mock terror and panic before spinning back into the fight with cruel laughter and redoubled fury.", when: "Your Movement phase, just after a HARLEQUINS unit from your army Falls Back.", target: "That HARLEQUINS unit.", effect: "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Tricksters' Retort", cp: 1, type: "Strategic Ploy", flavour: "To the Harlequins, the foe are simply unwitting dance partners, their every move matched with graceful aplomb.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One TROUPE unit from your army that is within 9\" of that enemy unit.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Bloody Dance", cp: 1, type: "Strategic Ploy", flavour: "Enemies goaded into following the steps of the saedath come unwittingly on cue to their executions.", when: "End of your opponent's Charge phase.", target: "One HARLEQUINS INFANTRY or HARLEQUINS MOUNTED unit from your army that is within 6\" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.", effect: "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.", restrictions: "Note that even if this charge is successful, your unit does not receive any Charge bonus this turn." },
                    { name: "Exit the Stage", cp: 1, type: "Strategic Ploy", flavour: "Players know when to fade back from the stage of war, ready to strike again when their moment comes.", when: "End of your opponent's Fight phase.", target: "One HARLEQUINS unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Devoted of Ynnead",
                flavour: "Those Aeldari who follow the extremist teachings of the priestess Yvraine seek to empower Ynnead, the Aeldari god of death. In the name of their morbid creed, they hurl themselves into battle, sure that not only is every enemy slain one less to menace the Aeldari but also that their own deaths will bring their god closer to waking. Perhaps the strength of fanatical conviction magnified by the Aeldari psyche allows Ynnead's devotees to channel some fragment of his supernatural powers. Maybe it is the latent psychic potential of the Aeldari finding macabre expression or something more sinister at work. Whatever the case, while their numbers may be few and their death cult marginalised, the Ynnari demonstrate strange and deadly abilities in battle. Coupled with their people's natural and technological puissance, this renders the Ynnari a terrible foe indeed. Moreover, they will know ultimate victory, whether they live to fight again or die for Ynnead's cause.",
                rule: { name: "Strength from Death", flavour: "Surrounded by the slaughter on the battlefield, the Ynnari channel the sinister supernatural gifts of Ynnead to great effect.", text: "You can use the following rules:\n\nLethal Intent: At the end of your opponent's Shooting phase, if one or more YNNARI units from your army were destroyed this phase, select one YNNARI INFANTRY or YNNARI MOUNTED unit from your army that was within 6\" of your destroyed unit. That unit can make a Normal move of up to D6+1\".\n\nLethal Surge: Once per turn, when a YNNARI unit from your army performs the Fade Back Agile Manoeuvre, it can make a Lethal Surge move instead of a Normal move. If it does, roll one D6 and add 1 to the result: that unit can be moved a number of inches up to the total. When doing so, those models can be moved within Engagement Range of the enemy unit that just triggered that Agile Manoeuvre.\n\nLethal Reprisal: At the start of the Fight phase, select one YNNARI unit from your army (excluding TITANIC units) that is below its Starting Strength. Until the end of the phase, that unit has the Fights First ability.\n\nSERVANTS OF THE WHISPERING GOD:\n- You can include YNNARI units in your army, even though they do not have the ASURYANI Faction keyword.\n- ASURYANI units (excluding EPIC HEROES) from your army gain the YNNARI keyword.\n- You must include YVRAINE and/or THE YNCARNE in your army, and one of those models must be your WARLORD.", restrictions: "" },
                enhancements: [
                    { name: "Gaze of Ynnead", cost: 15, restriction: "FARSEER model only.", flavour: "This psychic executioner projects the extinguishing will of the Aeldari death god into the minds of the foe, reducing them to ashen grey husks in moments.", text: "The bearer's Eldritch Storm weapon has the [Devastating Wounds] ability." },
                    { name: "Storm of Whispers", cost: 10, restriction: "WARLOCK model only.", flavour: "As though this Warlock were a conduit to the realm of the unquiet dead, they are surrounded by an endless susurrus that chills the foe with terror.", text: "In your Shooting phase, after the bearer has shot, select one enemy unit hit by one or more of those attacks. That unit must take a Battle-shock test." },
                    { name: "Borrowed Vigour", cost: 10, restriction: "ARCHON model only.", flavour: "This cruel warrior steals a portion of animus from each vanquished foe, keeping a little of Ynnead's due to empower themselves and slay more foes in his name.", text: "Add 2 to the Attacks characteristic of the bearer's melee weapons." },
                    { name: "Morbid Might", cost: 15, restriction: "SUCCUBUS model only.", flavour: "Driven to new heights of cold fury and icy strength by the death energies flowing through their sinews, this arena champion fights with supernatural vigour.", text: "Each time the bearer makes a melee attack, you can re-roll the Wound roll." },
                ],
                stratagems: [
                    { name: "Pall of Dread", cp: 1, type: "Strategic Ploy", flavour: "Even after they fall, the most fervent Ynnari leave a sinister sense of watchfulness in their wake like some invisible death shroud.", when: "Any phase.", target: "One YNNARI unit from your army that was just destroyed while it was within range of one or more objective markers you controlled at the end of the previous phase. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Select one of those objective markers. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                    { name: "Macabre Resilience", cp: 1, type: "Battle Tactic", flavour: "Such is the conviction and power of the Ynnari that sometimes even mortal wounds cannot slow them.", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One YNNARI INFANTRY or YNNARI MOUNTED unit from your army (excluding WRAITH CONSTRUCT units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Emissaries of Ynnead", cp: 1, type: "Battle Tactic", flavour: "Immersed in murder and gripped by holy purpose, these warriors bring Ynnead's fatal message and his final gift to all who face them.", when: "Fight phase, just after a YNNARI INFANTRY unit from your army has selected its targets.", target: "That YNNARI INFANTRY unit.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If your unit is below its Starting Strength, you can re-roll the Hit roll instead.", restrictions: "" },
                    { name: "Parting the Veil", cp: 2, type: "Strategic Ploy", flavour: "In the moment of transcendent glory, before the Ynnari give their essence to their god, they fight harder than ever to take the foe with them to death.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One YNNARI unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Soulsight", cp: 1, type: "Battle Tactic", flavour: "Perceiving the flickering soulstuff of their foes, the Ynnari strike with ruthless precision.", when: "Your Shooting phase.", target: "One YNNARI unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Lethal Hits] and [Ignores Cover] abilities.", restrictions: "" },
                    { name: "Death Answers Death", cp: 1, type: "Strategic Ploy", flavour: "As the foe slays their warriors, a terrible vigour grips the Ynnari and compels them to repay the slaughter in kind.", when: "End of your opponent's Shooting phase.", target: "One YNNARI unit from your army (excluding WRAITH CONSTRUCT units), if one or more models in that unit were destroyed this phase.", effect: "Your unit can shoot as if it were your Shooting phase.", restrictions: "" },
                ]
            },
            {
                name: "Seer Council",
                flavour: "Eldritch psychic storms tear at the enemy as the Seer Council leads their warriors into battle. Farseers deliver prophetic orders in voices of steely calm, guiding Aspect Warriors and Guardian squads to strike at crucial fate and causality junctures. Their every pronouncement seals the doom of fresh foes. Psychic executioners project their spirits through the Empyrean to destroy enemy champions' souls or predict warring combatants' battle fates. Warlocks lead their squads through the tightly focused maelstrom, singing spears lashing out and psychic fury crackling forth to deliver elegant and total destruction. Led by such a conclave of their most potent psykers, the Aeldari are unstoppable. They fight clad in the faded raiment of their once-mighty empire. The devastation they bring to bear echoes that their fallen ancestors once unleashed to put the galaxy on its knees; this is the Aeldari at their most potent, a terrifying psychic blade driven into the heart of the luckless foe.",
                rule: { name: "Strands of Fate", flavour: "Though future sight is not a precise art, the Aeldari seers excel in its craft. Having read the strands of fate that twine and branch through the upcoming battle, they direct events down their favoured paths at the most opportune moments.", text: "At the start of the first battle round, you generate Fate dice by rolling a number of D6 based on the battle size, as shown below. Keep your Fate dice to one side - this is your Fate dice pool.\n\nBATTLE SIZE / NUMBER OF D6:\n- Incursion: 3\n- Strike Force: 6\n- Onslaught: 9\n\nEach time you use one of the Stratagems below, if your Fate dice pool contains one or more Fate dice showing the corresponding value in the table below, you can discard one of those corresponding Fate dice. If you do, reduce the CP cost of that usage of that Stratagem by 1CP.\n\nSTRATAGEM / FATE DICE VALUE:\n- Presentiment of Dread: 1\n- Forewarned: 2\n- Unshrouded Truth: 3\n- Fate Inescapable: 4\n- Isha's Fury: 5\n- Psychic Shield: 6", restrictions: "" },
                enhancements: [
                    { name: "Lucid Eye", cost: 30, restriction: "ASURYANI PSYKER model only.", flavour: "This helm houses a psychocrystalline weave that aids the wearer in sifting clarity and truth from the myriad ghosts of unrealised futures.", text: "In your Command phase, you can add 1 to or subtract 1 from the value of one Fate dice in your Fate dice pool." },
                    { name: "Runes of Warding", cost: 25, restriction: "ASURYANI PSYKER model only.", flavour: "These precisely crafted runic wards hold harmful empyric energies and predatory entities at bay, protecting the bearer's mind and soul.", text: "Models in the bearer's unit have the Feel No Pain 4+ ability against mortal wounds, Psychic Attacks and Critical Wounds caused by attacks with the [Devastating Wounds] ability." },
                    { name: "Stone of Eldritch Fury", cost: 15, restriction: "ASURYANI PSYKER model only.", flavour: "This ancient gem was recovered from the crone world of Lleghaine and is said to resonate with the rage of that dead world's ghosts. It acts as a magnifying lens for destructive psychic powers.", text: "Add 12\" to the Range characteristic of ranged Psychic weapons equipped by the bearer." },
                    { name: "Torc of Morai-Heg", cost: 20, restriction: "ASURYANI PSYKER model only.", flavour: "Waves of malevolent energies roll from this article of warrior jewellery. Though they leave Aeldari systems and minds untouched, they cloud the enemy's thoughts with doubt, lace their communications with mournful wails and scatter confusing sensor ghosts across their instruments.", text: "Once per turn, when your opponent targets a unit from their army within 12\" of the bearer with a Stratagem, the bearer can use this Enhancement. If it does, increase the CP cost of that usage of that Stratagem by 1CP." },
                ],
                stratagems: [
                    { name: "Presentiment of Dread", cp: 1, type: "Strategic Ploy", flavour: "The seer plucks fate to find the foe suffering a horrible death, then projects it into their minds.", when: "Command phase.", target: "One ASURYANI PSYKER model from your army.", effect: "Select one enemy unit within 18\" of and visible to your model. That enemy unit must take a Battle-shock test, subtracting 1 from that test.", restrictions: "" },
                    { name: "Forewarned", cp: 1, type: "Strategic Ploy", flavour: "Having foreseen already how this fight will play out, the seer projects their insights and warnings into the minds of the Aeldari who must fight it.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ASURYANI INFANTRY unit from your army (excluding WRAITH CONSTRUCT units) that was selected as the target of one or more of the attacking unit's attacks and is within 9\" of one or more friendly ASURYANI PSYKER models.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll.", restrictions: "" },
                    { name: "Unshrouded Truth", cp: 1, type: "Strategic Ploy", flavour: "Dispelling the psychosomatic mirage that has so far beguiled and assailed the foe, the seer reveals the true location of the warriors it was masquerading as.", when: "Your Movement phase.", target: "One ASURYANI INFANTRY unit from your army (excluding WRAITH CONSTRUCT units) that has not been selected to move this phase, was not set up on the battlefield this phase, and is within 9\" of one or more friendly ASURYANI PSYKER models.", effect: "Remove your unit from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models.", restrictions: "Until the end of the phase, your unit is not eligible to be selected to move." },
                    { name: "Fate Inescapable", cp: 1, type: "Battle Tactic", flavour: "The Aeldari have already seen how best to lay low this enemy and strike in the sure knowledge the foe cannot evade their terrible fate.", when: "Your Shooting phase.", target: "One ASURYANI INFANTRY unit from your army (excluding WRAITH CONSTRUCT units) that has not been selected to shoot this phase and is within 9\" of one or more friendly ASURYANI PSYKER models.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] ability and each time a model in your unit makes an attack, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1.", restrictions: "" },
                    { name: "Isha's Fury", cp: 1, type: "Epic Deed", flavour: "Leaping from the seer's outstretched hand, this blast of empyric energy is a raw expression of the sorrow and bitterness suffered by the Aeldari people.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One ASURYANI PSYKER model from your army within 9\" of that enemy unit.", effect: "Roll six D6: for each 3+, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                    { name: "Psychic Shield", cp: 1, type: "Strategic Ploy", flavour: "A twist of the seer's psychic powers raises a whirling shield of empyric energy and psychokinetic debris to screen the Aeldari from enemy fire.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One ASURYANI INFANTRY unit from your army (excluding WRAITH CONSTRUCT units) that was selected as the target of one or more of the attacking unit's attacks and is within 9\" of one or more friendly ASURYANI PSYKER models.", effect: "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                ]
            },
            {
                name: "Aspect Host",
                flavour: "When the Avatar of Khaine strides out to war, the Aspect Warriors of many shrines fight in its cinder-swirled shadow. Squads of Dire Avengers rake their targets with storms of shuriken discs. Shrieking bands of Howling Banshees tear into the enemy's front lines even as Striking Scorpions flit from ambush to rip bloody rents in their flanks. Fire Dragons unleash point-blank fury to reduce enemy war engines to blazing wrecks, while the long-ranged salvoes of Dark Reapers streak overhead to detonate amongst the foe. Swooping Hawks circle on the winds of war and launch opportunist strikes, Shining Spears and Crimson Hunters drive home hurtling attack runs, and Warp Spiders burst in and out of reality amidst monofilament clouds of death. Guided by the martial expertise of Autarchs and Exarchs, and supported by Guardian-crewed war engines and artillery, the devotees of Khaine's many aspects pick their enemies apart with surgical precision. Coupled with the blazing devastation wrought by the Avatar itself, their onslaught is irresistible.",
                rule: { name: "Path of the Warrior", flavour: "The teachings of Khaine's martial aspects are diverse and highly specialised, each completely lethal in its own nuanced fashion.", text: "Each time an ASPECT WARRIORS or AVATAR OF KHAINE unit from your army is selected to shoot or fight, select one of the following abilities for it to gain until the end of the phase:\n- Each time a model in this unit makes an attack, re-roll a Hit roll of 1.\n- Each time a model in this unit makes an attack, re-roll a Wound roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "Aspect of Murder", cost: 25, restriction: "AUTARCH or AUTARCH WAYLEAPER model only.", flavour: "Khaine is a murderous deity, and many of his aspects channel this element of his nature to some degree. Combining these teachings renders this warrior a truly fearsome assassin.", text: "Add 1 to the Damage characteristic of melee weapons equipped by the bearer, and those weapons have the [Precision] ability." },
                    { name: "Mantle of Wisdom", cost: 30, restriction: "AUTARCH or AUTARCH WAYLEAPER model only.", flavour: "This ritual relic marks the bearer out as one who has walked the Path of Command for ages untold and whose understanding of all things martial borders on the preternatural.", text: "While the bearer is leading an ASPECT WARRIORS unit, each time that unit is selected to shoot or fight, until the end of the phase, models in that unit gain both of the abilities from the Path of the Warrior Detachment rule." },
                    { name: "Shimmerstone", cost: 15, restriction: "AUTARCH or AUTARCH WAYLEAPER model only.", flavour: "This simple and elegant gem conceals complex technology based on Dire Avenger shimmershields, its protective aegis extending across the bearer and those who fight at their side.", text: "While the bearer is leading an ASPECT WARRIORS unit, each time a ranged attack targets that unit, subtract 1 from the Wound roll." },
                    { name: "Strategic Savant", cost: 15, restriction: "AUTARCH or AUTARCH WAYLEAPER model only.", flavour: "A commander who knows with absolute certainty which strategic goals must be achieved, this warrior can appraise the battlefield at a glance.", text: "While the bearer is leading an ASPECT WARRIORS unit, add 1 to the Objective Control characteristic of models in that unit." },
                ],
                stratagems: [
                    { name: "Warrior Focus", cp: 1, type: "Battle Tactic", flavour: "So absolute is the focus of these warriors in battle that nothing can distract them or stay their blows.", when: "Your Shooting phase or the Fight phase.", target: "One ASPECT WARRIORS or AVATAR OF KHAINE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, you can ignore any or all modifiers to that attack's Ballistic Skill, Weapon Skill, Strength, Armour Penetration and Damage characteristics and/or any or all modifiers to the Hit roll.", restrictions: "" },
                    { name: "To Their Final Breath", cp: 1, type: "Strategic Ploy", flavour: "As champions and defenders of a dying race, these warriors fight furiously to the very end.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One ASPECT WARRIORS or AVATAR OF KHAINE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Each time you use this Stratagem, you can remove one Aspect Shrine token your unit has (see datasheets). Then, until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if you removed an Aspect Shrine token during this usage of this Stratagem. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Skyborne Sanctuary", cp: 1, type: "Strategic Ploy", flavour: "The Aeldari excel in striking swiftly then leaping back into the safety of their skimming transports.", when: "End of the Fight phase.", target: "One ASURYANI unit from your army that was eligible to fight this phase and one friendly TRANSPORT it is able to embark within.", effect: "If your ASURYANI unit is not within Engagement Range of one or more enemy units and is wholly within 6\" of that TRANSPORT, it can embark within it.", restrictions: "" },
                    { name: "Doom Inescapable", cp: 1, type: "Battle Tactic", flavour: "Cast with the force of a thunderbolt, the Avatar's weapon strikes the foe with meteoric force.", when: "Your Shooting phase.", target: "One AVATAR OF KHAINE model from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, your model's Wailing Doom ranged weapon has a Range characteristic of 18\" and a Damage characteristic of 8.", restrictions: "" },
                    { name: "Preternatural Precision", cp: 1, type: "Battle Tactic", flavour: "Analysing their targets' weaknesses with incredible skill, the Aeldari fire for lethal effect.", when: "Your Shooting phase.", target: "One ASPECT WARRIORS unit from your army that has not been selected to shoot this phase.", effect: "Each time you use this Stratagem, you can remove one Aspect Shrine token your unit has (see datasheets). Then, select one of the following abilities, or select two of the following abilities if you removed an Aspect Shrine token during this usage of this Stratagem: [Ignores Cover], [Lethal Hits], [Sustained Hits 1]. Until the end of the phase, ranged weapons equipped by models in your unit have the selected abilities.", restrictions: "" },
                    { name: "Khaine's Vengeance", cp: 1, type: "Strategic Ploy", flavour: "Embodying the rage of Khaine himself, these warriors press home their attack and strike down those cowards who seek to flee their fury.", when: "Your opponent's Movement phase, just after an enemy unit (excluding MONSTERS and VEHICLES) is selected to Fall Back.", target: "One ASPECT WARRIORS or AVATAR OF KHAINE unit from your army that is within Engagement Range of that enemy unit.", effect: "All models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests.", restrictions: "" },
                ]
            },
            {
                name: "Armoured Warhost",
                flavour: "When unleashed upon the battlefield in number, the vehicles of the Aeldari can bring a terrifying volume of firepower to bear with exceptional speed. As supersonic Aeldari aircraft suppress the enemy with strafing and bombing runs, sleek battle-skimmers sweep low across war-scarred terrain, hunting down and obliterating their targets with scintillating volleys. Successive waves of armoured transports follow, their shields and wraithbone hulls turning aside incoming munitions as they sweep low to disgorge waves of Aspect Warriors and Guardian soldiers into the fight. As the Aeldari infantry move to seize their objectives and annihilate the enemy, agile walkers sprint towards the flanks of the overwhelmed foe, their guns spitting vibrant streams of enfilading fire into massed enemies and ensuring that none escape the wrath of the Asuryani.",
                rule: { name: "Skilled Crews", flavour: "Asuryani vehicle crews are amongst the galaxy's most naturally gifted pilots and gunners. They can coax every last iota of performance from the formidable machines and weapon systems under their control.", text: "Ranged weapons equipped by AELDARI VEHICLE models from your army have the [Assault] ability and you can re-roll Advance rolls made for AELDARI VEHICLE FLY units from your army.", restrictions: "" },
                enhancements: [
                    { name: "Guiding Presence", cost: 25, restriction: "AELDARI PSYKER model only.", flavour: "This seer is closely attuned to their craftworld's vehicles. Communicating with the souls inhabiting hull-mounted spirit stones can sharpen the tactical awareness of spirits and crew.", text: "At the start of your Shooting phase, select one friendly AELDARI VEHICLE model within 9\" of the bearer. Until the end of the phase, each time that model makes an attack, add 1 to the Hit roll." },
                    { name: "Harmonisation Matrix", cost: 30, restriction: "AELDARI model only.", flavour: "When activated by its bearer, this crystalline device enables them to interface with Aeldari war machines, issuing orders and receiving combat reports at the speed of thought.", text: "In your Command phase, if the bearer (or any TRANSPORT it is embarked within) is within range of an objective marker you control, roll one D6: on a 3+, you gain 1CP." },
                    { name: "Spirit Stone of Raelyth", cost: 20, restriction: "AELDARI PSYKER model only.", flavour: "This spirit stone contains the essence of the Bonesinger Raelyth. Those Asuryani psykers who bear this item to battle can draw upon the fallen artisan's talents.", text: "While the bearer is within 3\" of one or more friendly AELDARI VEHICLE units, the bearer has the Lone Operative ability. In your Command phase, you can select one friendly AELDARI VEHICLE model within 3\" of the bearer. That model regains up to D3 lost wounds." },
                    { name: "Guileful Strategist", cost: 15, restriction: "AELDARI model only.", flavour: "An expert in vehicular warfare, this commander is always one step ahead of the foe.", text: "If your army includes the bearer, after both players have deployed their armies, select up to three AELDARI VEHICLE units from your army and redeploy them. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                ],
                stratagems: [
                    { name: "Layered Wards", cp: 1, type: "Strategic Ploy", flavour: "The wraithbone superstructure of this vehicle has been interlaced with warding runes, enabling its hull to resist incoming fire.", when: "Any phase, just after a mortal wound is allocated to an AELDARI VEHICLE unit from your army.", target: "That AELDARI VEHICLE unit.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds.", restrictions: "" },
                    { name: "Swift Deployment", cp: 1, type: "Strategic Ploy", flavour: "With consummate skill, Guardian crews guide their agile armoured transports across the battlefield before swooping low to unload their cargo of warriors.", when: "Your Movement phase.", target: "One AELDARI TRANSPORT unit from your army.", effect: "Until the end of the phase, units can disembark from your TRANSPORT after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally.", restrictions: "" },
                    { name: "Vectored Engines", cp: 1, type: "Strategic Ploy", flavour: "The result of exquisite and ingenious Aeldari engineering, vectored engines enable grav vehicles to evade their enemies while maintaining accurate fire.", when: "Your Movement phase, just after an AELDARI VEHICLE unit from your army that can FLY Falls Back.", target: "That AELDARI FLY VEHICLE unit.", effect: "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.", restrictions: "" },
                    { name: "Cloudstrike", cp: 1, type: "Strategic Ploy", flavour: "The Asuryani often deploy their anti-grav vehicles in the lower atmosphere rather than on the ground. At a signal, they strike before the enemy can react.", when: "Start of the Reinforcements step of your Movement phase.", target: "One AELDARI VEHICLE unit from your army that can FLY and is in Strategic Reserves.", effect: "Until the end of the phase, your unit has the Deep Strike ability. When your unit is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, but if it does, until the end of the turn, it is not eligible to declare a charge. In addition, if your unit is a TRANSPORT, each unit that disembarks from it this turn must be set up more than 6\" horizontally from all enemy units and until the end of the turn, is not eligible to declare a charge.", restrictions: "" },
                    { name: "Soulsight", cp: 1, type: "Strategic Ploy", flavour: "Spirit stones containing the souls of gifted seers have been embedded into this vehicle's targeting matrices. The essences within lend guidance even in death.", when: "Your Shooting phase.", target: "One AELDARI VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time your unit is selected to shoot, you can re-roll one Hit roll, one Wound roll and one Damage roll made for a model in your unit. If you are using fast dice rolling, you can select one of those rolls to re-roll before moving onto the next step of the attack sequence.", restrictions: "" },
                    { name: "Anti-grav Repulsion", cp: 1, type: "Strategic Ploy", flavour: "Skilled Aeldari pilots angle their vehicle's anti-grav fields to repulse the enemy.", when: "Your opponent's Charge phase, just after an enemy unit has declared a charge.", target: "One AELDARI VEHICLE unit from your army that can FLY and was selected as a target of that charge.", effect: "Until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.", restrictions: "" },
                ]
            },
            {
                name: "Serpent's Brood",
                flavour: "The saedath of the Harlequins are both scripted performances and battle plans, interwoven on a level requiring the depthless Aeldari psyche to truly comprehend. Some saedath are extremely specialised: the Serpent's Brood is one such. Drawn from tales of the Cosmic Serpent of Aeldari myth, it focuses on troupes of Harlequins mounted aboard Starweaver transports, supported by squadrons of Skyweaver Jetbikes and more heavily armed Voidweavers. As each of these units is named for one of the Cosmic Serpent's children, so they play their roles on the battlefield: the Starweavers loyal and dutiful as they ferry their passengers into the fight, the Skyweavers hurtling back and forth spreading carnage, and the Voidweavers imperious and murderous in equal measure.",
                rule: { name: "Boons of the Brood", flavour: "Playing their roles to perfection, the Harlequins embody the swift-striking fangs and deadly venoms of the Cosmic Serpent's brood, dominating the stage of the battlefield with their swift and vicious performances.", text: "Weapons equipped by HARLEQUINS MOUNTED and HARLEQUINS VEHICLE models from your army have the [Sustained Hits 1] ability.\n\nEach time a HARLEQUINS unit from your army disembarks from a TRANSPORT, until the end of the turn, that unit's weapons have the [Sustained Hits 1] ability.\n\nTRAVELLING PLAYERS:\n- TROUPE units from your army gain the BATTLELINE keyword, and TROUPE models in those units have an Objective Control characteristic of 2.\n- You can include up to three of each of the following models in your army: DEATH JESTER, SHADOWSEER, TROUPE MASTER.", restrictions: "" },
                enhancements: [
                    { name: "Key of Ghosts", cost: 20, restriction: "HARLEQUINS model only (excluding SOLITAIRE models).", flavour: "This mystic wraithbone implement allows the bearer to slip onto the stage from the Webway even before the curtain's rise, beginning their performance in full and furious flow.", text: "Models in the bearer's unit have the Scouts 6\" ability." },
                    { name: "Weavers' Wail", cost: 20, restriction: "TROUPE MASTER model only.", flavour: "A cruel weapon more often kept locked away, this ill-omened implement is said to resonate with the Cosmic Serpent's own dismay at the suffering of its brood during the Fall.", text: "Add 3 to the Strength and add 1 to the Attacks characteristics of the bearer's melee weapons." },
                    { name: "Fanged Leer", cost: 10, restriction: "DEATH JESTER model only.", flavour: "This cruel mask is worn when performing the Serpent's Brood, and lends its wearer a supernatural degree of venom and spite.", text: "When using the bearer's Cruel Amusement ability, you can select two of the abilities for its shrieker cannon to gain, instead of one." },
                    { name: "Shedskin Raiment", cost: 25, restriction: "SHADOWSEER model only.", flavour: "This glittering cloak projects a grand illusion that falls away as its wearer sheds it like a discarded serpent's hide, revealing a still-more dismaying reality beneath.", text: "After both players have deployed their armies, select up to three HARLEQUINS units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves." },
                ],
                stratagems: [
                    { name: "Fangs of the Brood", cp: 1, type: "", flavour: "Many are the heads of the brood, and many their fangs. As they spring and tumble over their foes, the Harlequins' weapons echo the multiplicity of strikes unleashed by that mythic nest of snakes.", when: "Start of the Fight phase.", target: "One TROUPE unit from your army.", effect: "Until the end of the phase, when using your unit's Dance of Death ability, you can select three of the abilities for your unit to gain, instead of one.", restrictions: "" },
                    { name: "Venomous Wrath", cp: 1, type: "", flavour: "Embodying the serpent that strikes with blinding swiftness, this grav-skimmer lunges suddenly into range and unleashes its full fury on the foe.", when: "Your Shooting phase.", target: "One HARLEQUINS VEHICLE unit from your army that has not been selected to shoot this phase.", effect: "After your unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". Until the end of the turn, your unit is not eligible to declare a charge.", restrictions: "" },
                    { name: "Striking Stride", cp: 1, type: "", flavour: "Springing between pillars and rubble, bounding forwards as though running on thin air, the Harlequins acrobatically hurl themselves into battle.", when: "Your Charge phase.", target: "One HARLEQUINS unit from your army.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Weavers' Coils", cp: 1, type: "", flavour: "Inescapable yet impossible to catch, this unit personifies the ever-winding and incorporeal coils of the Skyweavers of myth.", when: "End of your Fight phase.", target: "One HARLEQUINS MOUNTED unit from your army that was eligible to fight this phase.", effect: "If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move. Otherwise, your unit can make a Fall Back move of up to 6\".", restrictions: "" },
                    { name: "Weaving Stride", cp: 1, type: "", flavour: "Maintaining their blistering pace, these warriors respond to their foes' steps in the saedath with their own gravity-defying motions.", when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.", target: "One HARLEQUINS INFANTRY unit from your army that is within 9\" of that enemy unit.", effect: "Your unit can make a Normal move of up to 6\".", restrictions: "" },
                    { name: "Skyward Lunge", cp: 1, type: "", flavour: "Like a serpent rearing back to strike at its prey anew, the Harlequins sweep high and appear to quit the field, ready to descend in fury a moment later.", when: "End of your opponent's Fight phase.", target: "One HARLEQUINS VEHICLE or HARLEQUINS MOUNTED unit from your army.", effect: "If your unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Eldritch Raiders",
                flavour: "Few of the deep void's piratical denizens are as feared as the Eldritch Raiders. Led by Prince Yriel of Iyanden, the infamous pirate lord, these thrill-seeking raiders sail the stars in search of prey, striking their targets hard, fast and without mercy. Speed and cunning are the hallmarks of the Anhrathe, and the Eldritch Raiders possess these attributes in volume. When the time comes for battle, veteran Voidscarred and bands of Voidreavers rush into the fray, unleashing blizzards of shuriken fire to pin their enemies down and rushing forward to scythe through opposing infantry before they can raise a blade in defence. Above, leaping bands of Skyreavers soar over the enemy line to strike vulnerable flanks, whilst Vypers and Starfangs soar overhead, raking heavy infantry and enemy vehicles with punishing volleys of fire. Always in the thick of the fighting is Prince Yriel himself, parrying, thrusting and killing with his Spear of Twilight, leading by inspirational example and with the strategic nous of one who has walked the Path of Command.",
                rule: { name: "Yriel's Own", flavour: "These are Yriel's most elite raiders, skilled in fast-paced raids and used to fighting superior forces using a combination of guile, superior technology, and physical prowess.", text: "AELDARI units in your army are eligible to declare a charge in a turn in which they Advanced. In addition, each time an ANHRATHE, RANGERS or SHROUD RUNNERS unit from your army Advances, you can re-roll the Advance roll.\n\nVeterans of the Void: No two bands of Anhrathe warriors are identical. Each possesses a wealth of hard-earned experience that a cunning commander can bring to bear upon their victims to devastating effect.\nEach time you add an ANHRATHE unit to your army, it can be given up to one Corsair Enhancement. Each Corsair Enhancement included in your army must be unique. If a unit is given a Corsair Enhancement, you must increase the points cost of that unit by the amount shown. If this causes your army to exceed the points limit for the battle you are playing, you cannot include that unit in your army.", restrictions: "" },
                enhancements: [
                    { name: "Pirate Prince", cost: 15, restriction: "PRINCE YRIEL unit only.", flavour: "Yriel's speed, both of thought and action, ensures that he remains one step ahead of his opponents at all times.", text: "Each time you spend a Battle Focus token to enable this unit to perform an Agile Manoeuvre, roll one D6: on a 3+, you gain 1 Battle Focus token." },
                    { name: "Alacritous Assault", cost: 20, restriction: "ANHRATHE unit only.", flavour: "The key to any raid is the shock of the opening strike. Anhrathe warriors strike at breakneck speed, power swords and boarding hooks finding gaps in enemy armour and inflicting devastating wounds.", text: "Melee weapons equipped by models in this unit have the [Lance] ability." },
                    { name: "Exotic Munitions", cost: 15, restriction: "ANHRATHE unit only.", flavour: "In their travels through the void, these Anhrathe warriors have collected a bounty of esoteric ammunition. The most lethal of these munitions are toxic or acidic enough to fell monstrous foes or to burn through armour and servo-motors with frightening rapidity.", text: "Ranged weapons equipped by models in this unit have the [Anti-Monster 5+] and [Anti-Vehicle 5+] abilities." },
                    { name: "Adrenal Infusions", cost: 20, restriction: "ANHRATHE INFANTRY unit only.", flavour: "Amongst the hauls taken by Aeldari Corsairs are many stimulants and elixirs, the most powerful of which enhance the already impressive grace and agility of the Aeldari physiology.", text: "This unit can perform the Fade Back Agile Manoeuvre without spending a Battle Focus token to do so. It can do so even if other units have done so in the same phase, and doing so does not prevent other units from performing the same Agile Manoeuvre in the same phase." },
                ],
                stratagems: [
                    { name: "Raiders' Spoils", cp: 1, type: "Strategic Ploy", flavour: "Even as battle rages around them, the Eldritch Raiders prioritise the seizing of treasures above the destruction of their foes.", when: "Command phase.", target: "One ANHRATHE unit from your army that is within Engagement Range of one or more enemy units.", effect: "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.", restrictions: "" },
                    { name: "Ruthless Killers", cp: 1, type: "Strategic Ploy", flavour: "These are Yriel's chosen killers, and there is no escape for their prey.", when: "Your Shooting phase or the Fight phase.", target: "One CORSAIR VOIDSCARRED unit from your army that has not been selected to shoot or Fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Damage characteristic of that attack.", restrictions: "" },
                    { name: "Yriel's Example", cp: 1, type: "Epic Deed", flavour: "Inspired by their prince, who has felt Ynnead's touch, the Eldritch Raiders laugh in the face of death.", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One AELDARI INFANTRY unit from your army (excluding WRAITH CONSTRUCT units) that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability.", restrictions: "" },
                    { name: "No Prey Too Big", cp: 1, type: "Battle Tactic", flavour: "By accurately targeting weak points in anatomies and superstructures, the Anhrathe can bring down even the most resilient of foes.", when: "Your Shooting phase.", target: "One ANHRATHE, RANGERS or SHROUD RUNNERS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, if the Strength characteristic of that attack is less than the highest Toughness characteristic of models in the target unit, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Impeding Fire", cp: 1, type: "Wargear", flavour: "As the foes attempt to close in, Yriel's cunning outcasts stymie their assault with a dazzling burst of distracting fire.", when: "Start of your opponent's Charge phase.", target: "One RANGERS, SHROUD RUNNERS or STARFANG unit from your army.", effect: "Select one enemy unit (excluding TITANIC units) visible to and within 36\" of your unit. Until the end of the phase, each time that enemy unit declares a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).", restrictions: "" },
                    { name: "Withdraw and Reinforce", cp: 1, type: "Strategic Ploy", flavour: "Prince Yriel commands resources beyond the dreams of most Corsair Princes. Depleted bands may fall back from the battlefield to be reinforced and resupplied at a moment's notice.", when: "End of your opponent's Fight phase.", target: "One ANHRATHE unit from your army that is not within Engagement Range of one or more enemy units.", effect: "Remove your unit from the battlefield and place it into Strategic Reserves. If that unit is below Starting Strength, return all destroyed models (excluding CHARACTER models) to that unit.", restrictions: "" },
                ]
            },
            {
                name: "Corsair Coterie",
                flavour: "Ever opportunistic, Aeldari Corsairs ply the void in search of worthwhile targets, often operating in small raiding forces known as coteries. Though lightly armed and armoured, such forces are cunning and motivated, possessing a wealth of skills, knowledge and experience. These attributes enable them to overcome greater and more numerous foes and ensure that, by the time the final blow is struck, they have the riches they sought. Deploying by sleek and swift skimmers or leaping from the open hatches of voidships, winged Skyreavers lead the assault, striking at stunned opponents before they can mount an adequate defence. Into the breach surge the remainder of the Corsair force, making the most of the assault's initial momentum to push the enemy back, seize loot and plunder from under their noses and fade away into the void, leaving victims reeling in the aftermath of a dazzling and destructive onslaught.",
                rule: { name: "Relentless Raiders", flavour: "Should the Anhrathe detect valuable plunder, they will go to great lengths to seize it, and fight with shocking ferocity to protect their prize.", text: "While an objective marker is under your control, each time an enemy unit ends a Normal, Advance, Fall Back or Charge move within range of that objective marker, roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.\n\nANHRATHE units from your army have the following ability:\nVoid Thieves: At the end of a phase, if this unit is within range of an objective marker you control, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.\n\nVeterans of the Void: No two bands of Anhrathe warriors are identical. Each possesses a wealth of experience that a cunning commander can bring to bear upon the foe.\nEach time you add an ANHRATHE unit to your army, it can be given up to one Corsair Enhancement. Each Corsair Enhancement included in your army must be unique. If a unit is given a Corsair Enhancement, you must increase the points cost of that unit by the amount shown. If this causes your army to exceed the points limit for the battle you are playing, you cannot include that unit in your army.", restrictions: "" },
                enhancements: [
                    { name: "Infamy (Aura)", cost: 25, restriction: "ANHRATHE unit only.", flavour: "These infamous raiders are rightly feared, and use their reputation to their advantage with easily identifiable armour and insignia.", text: "While an enemy unit is within 3\" of this unit, subtract 1 from the Objective Control characteristic of models in that unit (to a minimum of 1)." },
                    { name: "Webway Pathstone", cost: 25, restriction: "ANHRATHE unit only.", flavour: "This smooth token contains esoteric knowledge of local Webway spurs. When activated by psychic impulse, it projects a mental map of these routes into the minds of the bearer, enabling them to locate hidden gates, bypass their foes, and seize the treasures they seek.", text: "Models in this unit have the Deep Strike ability. In addition, once per battle, at the end of your opponent's turn, if this unit is not within Engagement Range of one or more enemy units, it can use this ability. If it does, remove this unit from the battlefield and place it into Strategic Reserves." },
                    { name: "Archraider", cost: 35, restriction: "ANHRATHE CHARACTER unit only.", flavour: "A master of the lightning assault, this commander appears prescient in their ability to confound the foe.", text: "At the start of the battle, select one CHARACTER model in this unit. That model has the following ability:\nLord of Deceit (Aura): Each time your opponent targets a unit from their army with a Stratagem, if that unit is within 12\" of this model, increase the cost of that use of that Stratagem by 1CP." },
                    { name: "Voidstone", cost: 15, restriction: "ANHRATHE INFANTRY unit only.", flavour: "Seized from an alien tomb, this obsidian artefact seems to absorb light itself. It offers the bearer and their unit some measure of protection against even the strongest attacks.", text: "Models in this unit have a 5+ invulnerable save." },
                ],
                stratagems: [
                    { name: "Pirates' Due", cp: 1, type: "Battle Tactic", flavour: "In their pursuit of riches, Anhrathe warriors will fight with violent fury to seize their due.", when: "The Fight phase.", target: "One AELDARI unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If your unit has the ANHRATHE keyword, then until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of an objective marker, you can re-roll the Wound roll instead.", restrictions: "" },
                    { name: "Lethal Ruse", cp: 1, type: "Strategic Ploy", flavour: "With a final flurry of gunshots, blade strikes and explosives, these warriors feign retreat before striking again with renewed aggression.", when: "Your Movement phase, just after an AELDARI unit from your army Falls Back.", target: "That AELDARI unit.", effect: "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Fell Back. If it is an ANHRATHE unit, also select one enemy unit your unit was within Engagement Range of at the start of the phase, and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                    { name: "Outcast Ambush", cp: 1, type: "Strategic Ploy", flavour: "Anhrathe raiders often find common ground with other Aeldari Outcasts, who use the distraction of the Corsair onslaught to ambush unsuspecting foes.", when: "Your Shooting phase.", target: "One RANGERS or SHROUD RUNNERS unit from your army that has not been selected to shoot this phase.", effect: "Until the end of the phase, ranged weapons equipped by models in your unit have the [Ignores Cover] and [Rapid Fire 1] abilities, and until the end of the phase, improve the Armour Penetration characteristic of those weapons by 1.", restrictions: "" },
                    { name: "Into the Breach", cp: 1, type: "Strategic Ploy", flavour: "Corsair raiders are swift to exploit gaps in the enemy line and advance upon their objectives.", when: "Your Shooting phase, just after an ANHRATHE unit from your army destroyed one or more enemy units.", target: "That ANHRATHE unit.", effect: "After your unit has resolved all of its shooting attacks, it can make a Normal move of up to D6+1\".", restrictions: "" },
                    { name: "Cloak and Shadow", cp: 1, type: "Strategic Ploy", flavour: "Having secured their prize, the Anhrathe melt into the shadows, leaving their foes shooting at shadows.", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One AELDARI INFANTRY unit from your army that is within range of an objective marker that you control and that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have the Stealth ability and your unit can only be selected as the target of a ranged attack if the attacking model is within 18\".", restrictions: "" },
                    { name: "Vengeful Sorrow", cp: 1, type: "Strategic Ploy", flavour: "Anhrathe share bonds forged in battle. The loss of an ally inspires sorrow and fury in equal measure.", when: "Your opponent's Shooting phase, just after an enemy unit has shot.", target: "One AELDARI INFANTRY unit from your army, if one or more models in that unit were destroyed as a result of those attacks, and if that AELDARI unit is neither Battle-shocked nor within Engagement Range of one or more enemy units.", effect: "Your unit can make a Surge move. To do so, roll one D6 and add 1 to the roll: models in your unit move a number of inches up to this result, but your unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, those models can be moved within Engagement Range of that enemy unit.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "ae-asurmen",
                        "name": "Asurmen",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
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
                                "ranged": [
                                        {
                                                "name": "Bloody Twins",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Sword of Asur",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tactical Acumen",
                                        "Hand of Asuryan"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Asurmen"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Dire Avengers.",
                        "compositionText": "1 Asurmen – EPIC HERO This model is equipped with: Bloody Twins; Sword of Asur."
                },
                {
                        "id": "ae-autarch",
                        "name": "Autarch",
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
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death spinner",
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
                                        },
                                        {
                                                "name": "Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Dragon fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starswarm",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
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
                                                "name": "Banshee blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion chainsword",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Star glaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Superlative Strategist",
                                        "Path of Command"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Grenades",
                                "Autarch"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Dark Reapers; Dire Avengers; Fire Dragons; Guardian Defenders; Howling Banshees; Storm Guardians; Striking Scorpions.",
                        "compositionText": "1 Autarch This model is equipped with: shuriken pistol; star glaive."
                },
                {
                        "id": "ae-autarch-wayleaper",
                        "name": "Autarch Wayleaper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 4,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death spinner",
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
                                        },
                                        {
                                                "name": "Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Dragon fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starswarm",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Heavy",
                                                        "Ignores Cover"
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
                                                "name": "Banshee blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion chainsword",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Star glaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Indomitable Strength of Will",
                                        "Path of Command"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Autarch Wayleaper"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Swooping Hawks; Warp Spiders.",
                        "compositionText": "1 Autarch Wayleaper This model is equipped with: shuriken pistol; star glaive."
                },
                {
                        "id": "ae-avatar-of-khaine",
                        "name": "Avatar of Khaine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 280
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "2+",
                                "w": 14,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "The Wailing Doom",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Sustained Hits D3"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "The Wailing Doom – strike",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "The Wailing Doom – sweep",
                                                "range": "Melee",
                                                "a": 12,
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Molten Form",
                                        "The Bloody-Handed"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Daemon",
                                "Avatar Of Khaine"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Avatar of Khaine – EPIC HERO This model is equipped with: the Wailing Doom DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-baharroth",
                        "name": "Baharroth",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "14\"",
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
                                                "name": "Fury of the Tempest",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Shining Blade",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cloudstrider",
                                        "Cry of the Wind"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Baharroth"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Swooping Hawks.",
                        "compositionText": "1 Baharroth – EPIC HERO This model is equipped with: Fury of the Tempest; Shining Blade."
                },
                {
                        "id": "ae-death-jester",
                        "name": "Death Jester",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
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
                                "ranged": [
                                        {
                                                "name": "Shrieker cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Jester’s blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Death is Not Enough",
                                        "Cruel Amusement",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Death Jester"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Death Jester This model is equipped with: shrieker cannon; Jester’s blade; flip belt."
                },
                {
                        "id": "ae-eldrad-ulthran",
                        "name": "Eldrad Ulthran",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Mind War",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Anti-Character 4+",
                                                        "Precision",
                                                        "Psychic"
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
                                                "name": "Staff of Ulthamar and witchblade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Diviner of Futures",
                                        "Doom"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Psyker",
                                "Farseer",
                                "Eldrad Ulthran"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Guardian Defenders; Storm Guardians; Warlock Conclave.",
                        "compositionText": "1 Eldrad Ulthran – EPIC HERO This model is equipped with: Mind War; shuriken pistol; Staff of Ulthamar and witchblade."
                },
                {
                        "id": "ae-farseer",
                        "name": "Farseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 70
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
                                                "name": "Eldritch Storm",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Branching Fates",
                                        "Guide"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Farseer"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Guardian Defenders; Storm Guardians; Warlock Conclave.",
                        "compositionText": "1 Farseer This model is equipped with: Eldritch Storm; shuriken pistol; witchblade."
                },
                {
                        "id": "ae-farseer-skyrunner",
                        "name": "Farseer Skyrunner",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Eldritch Storm",
                                                "range": "24\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Psychic"
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
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Branching Fates",
                                        "Misfortune"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Aeldari",
                                "Fly",
                                "Psyker",
                                "Farseer",
                                "Farseer Skyrunner"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Windriders.",
                        "compositionText": "1 Farseer Skyrunner This model is equipped with: Eldritch Storm; shuriken pistol; twin shuriken catapult; witchblade."
                },
                {
                        "id": "ae-fuegan",
                        "name": "Fuegan",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
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
                                "ranged": [
                                        {
                                                "name": "Searsong – beam",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 1",
                                                        "Sustained Hits 2"
                                                ]
                                        },
                                        {
                                                "name": "Searsong – lance",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 6"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Fire Axe",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Burning Lance",
                                        "Unquenchable Resolve"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Fuegan"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Fire Dragons.",
                        "compositionText": "1 Fuegan – EPIC HERO This model is equipped with: Searsong; Fire Axe."
                },
                {
                        "id": "ae-jain-zar",
                        "name": "Jain Zar",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "8\"",
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
                                                "name": "Silent Death",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blade of Destruction",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Whirling Death",
                                        "Storm of Silence"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Jain Zar"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Howling Banshees.",
                        "compositionText": "1 Jain Zar – EPIC HERO This model is equipped with: Silent Death; Blade of Destruction."
                },
                {
                        "id": "ae-kharseth",
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
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Kharseth – EPIC HERO This model is equipped with: Dread of the Deep Void; Waystave."
                },
                {
                        "id": "ae-lhykhis",
                        "name": "Lhykhis",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 135
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
                                                "name": "Brood Twain",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
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
                                                "name": "Spider’s Fangs",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Weaverender",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Empyric Ambush",
                                        "Whispering Web"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Lhykhis"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Warp Spiders.",
                        "compositionText": "1 Lhykhis – EPIC HERO This model is equipped with: Brood Twain; Spider’s Fangs; Weaverender."
                },
                {
                        "id": "ae-maugan-ra",
                        "name": "Maugan Ra",
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
                                "sv": "2+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Maugetar",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Maugetar",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Harvester of Souls",
                                        "Face of Death"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Aspect Warrior",
                                "Phoenix Lord",
                                "Maugan Ra"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following unit: Dark Reapers.",
                        "compositionText": "1 Maugan Ra This model is equipped with: Maugetar."
                },
                {
                        "id": "ae-prince-yriel",
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
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred.",
                        "compositionText": "1 Prince Yriel – EPIC HERO This model is equipped with: Eye of Wrath; shuriken pistol; Spear of Twilight."
                },
                {
                        "id": "ae-shadowseer",
                        "name": "Shadowseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
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
                                "ranged": [
                                        {
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
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
                                                "name": "Miststave",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 5,
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
                                        "Leader",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fog of Dreams",
                                        "Treacherous Illusion",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Grenades",
                                "Shadowseer"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "leaderText": "This model can be attached to the following unit: Troupe.",
                        "compositionText": "1 Shadowseer This model is equipped with: shuriken pistol; miststave; flip belt."
                },
                {
                        "id": "ae-solitaire",
                        "name": "Solitaire",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "12\"",
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
                                                "name": "Solitaire weapons",
                                                "range": "Melee",
                                                "a": 9,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First",
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blitz",
                                        "Blur of Movement",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Solitaire"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Solitaire – EPIC HERO This model is equipped with: Solitaire weapons, flip belt."
                },
                {
                        "id": "ae-spiritseer",
                        "name": "Spiritseer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Spiritseer",
                                        "Spirit Mark",
                                        "Tears of Isha"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Spiritseer"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Spiritseer This model is equipped with: shuriken pistol; witch staff."
                },
                {
                        "id": "ae-the-visarch",
                        "name": "The Visarch",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "8\"",
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
                                                "name": "Asu-var – quicksilver stance",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
                                                ]
                                        },
                                        {
                                                "name": "Asu-var – duellist stance",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Asu-var – mythic stance",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Epic Hero 2+",
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Way of the Blade",
                                        "Yvraine’s Champion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "The Visarch"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred; Guardian Defenders; Storm Guardians; Ynnari Incubi; Ynnari Kabalite Warriors; Ynnari Wyches.",
                        "compositionText": "1 Visarch – EPIC HERO This model is equipped with: Asu-var."
                },
                {
                        "id": "ae-the-yncarne",
                        "name": "The Yncarne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 260
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Swirling soul energy",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Vilith-zhar – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Vilith-zhar – sweep",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -4,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Inevitable Death",
                                        "Ethereal Form"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Fly",
                                "Psyker",
                                "Daemon",
                                "The Yncarne"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Yncarne – EPIC HERO This model is equipped with: swirling soul energy; Vilith-zhar."
                },
                {
                        "id": "ae-troupe-master",
                        "name": "Troupe Master",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
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
                                "ranged": [
                                        {
                                                "name": "Fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "2+",
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
                                                "name": "Neuro disruptor",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
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
                                                "name": "Harlequin’s special weapon",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Troupe Master’s blade",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Choreographer of War",
                                        "Cegorach’s Favour",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Grenades",
                                "Troupe Master"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "leaderText": "This model can be attached to the following unit: Troupe.",
                        "compositionText": "1 Troupe Master This model is equipped with: shuriken pistol; Troupe Master’s blade; flip belt."
                },
                {
                        "id": "ae-warlock",
                        "name": "Warlock",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Destructor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Runes of Fortune",
                                        "Psychic Communion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Psyker",
                                "Warlock"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "leaderText": "This model can be attached to the following units: Guardian Defenders; Storm Guardians.",
                        "compositionText": "1 Warlock This model is equipped with: Destructor; shuriken pistol; witchblade."
                },
                {
                        "id": "ae-ynnari-archon",
                        "name": "Ynnari Archon",
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
                                                "name": "Huskblade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Overlord",
                                        "Reborn Mastermind",
                                        "Shadow Field"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Archon"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following units: Ynnari Incubi; Ynnari Kabalite Warriors.",
                        "compositionText": "1 Archon This model is equipped with: splinter pistol; huskblade; shadow field."
                },
                {
                        "id": "ae-ynnari-succubus",
                        "name": "Ynnari Succubus",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
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
                                                "name": "Succubus weapons",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Storm of Blades",
                                        "Empowered by Death"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Aeldari",
                                "Succubus"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following unit: Ynnari Wyches.",
                        "compositionText": "1 Succubus This model is equipped with: Succubus weapons."
                },
                {
                        "id": "ae-yvraine",
                        "name": "Yvraine",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
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
                                "ranged": [
                                        {
                                                "name": "Storm of Whispers",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "2+",
                                                "s": 2,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
                                                        "Devastating Wounds",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Kha-vir",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Word of the Phoenix",
                                        "Herald of Ynnead"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Aeldari",
                                "Psyker",
                                "Yvraine"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "leaderText": "This model can be attached to the following units: Corsair Voidreavers; Corsair Voidscarred; Guardian Defenders; Storm Guardians; Ynnari Incubi; Ynnari Kabalite Warriors; Ynnari Wyches.",
                        "compositionText": "1 Yvraine – EPIC HERO This model is equipped with: Storm of Whispers; Kha-vir."
                },
                {
                        "id": "ae-corsair-voidreavers",
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
                                "Asuryani"
                        ],
                        "compositionText": "1 Voidreaver Felarch 4-9 Corsair Voidreavers Every model is equipped with: shuriken pistol; power sword; close combat weapon."
                },
                {
                        "id": "ae-guardian-defenders",
                        "name": "Guardian Defenders",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 11,
                                        "cost": 100
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
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "3+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fleet of Foot",
                                        "Crewed Platform"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Guardians",
                                "Guardian Defenders"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "10 Guardian Defenders 1 Heavy Weapon Platform Every Guardian Defender is equipped with: shuriken catapult; close combat weapon. The Heavy Weapon Platform is equipped with: shuriken cannon; close combat weapon."
                },
                {
                        "id": "ae-storm-guardians",
                        "name": "Storm Guardians",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 11,
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
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Stormblades",
                                        "Crewed Platform",
                                        "Serpent Shield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Guardians",
                                "Storm Guardians"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "10 Storm Guardians 1 Serpent’s Scale Platform Every Storm Guardian is equipped with: shuriken pistol; close combat weapon. The Serpent’s Scale Platform is equipped with: close combat weapon; Serpent shield."
                },
                {
                        "id": "ae-ynnari-kabalite-warriors",
                        "name": "Ynnari Kabalite Warriors",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
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
                                                "name": "Sybarite weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Sadistic Raiders",
                                        "Phantasm Grenade Launcher"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Kabalite Warriors"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Sybarite 9 Kabalite Warriors Every model is equipped with: splinter rifle; close combat weapon."
                },
                {
                        "id": "ae-ynnari-wyches",
                        "name": "Ynnari Wyches",
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
                                "ld": "6+",
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
                                                "name": "Hekatarii blade",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "No Escape"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Aeldari",
                                "Grenades",
                                "Wyches"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Hekatrix 9 Wyches Every model is equipped with: splinter pistol; Hekatarii blade."
                },
                {
                        "id": "ae-starweaver",
                        "name": "Starweaver",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                        "Deadly Demise 1",
                                        "Firing Deck 6"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Rapid Embarkation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Smoke",
                                "Fly",
                                "Starweaver"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Starweaver This model is equipped with: 2 shuriken cannons; close combat weapon. TRANSPORT This model has a transport capacity of 6 HARLEQUINS INFANTRY models."
                },
                {
                        "id": "ae-wave-serpent",
                        "name": "Wave Serpent",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 13,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Twin missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Twin starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": [
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Wave Serpent Shield"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Wave Serpent"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wave Serpent This model is equipped with: twin shuriken cannon; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 12 AELDARI INFANTRY models. Each WRAITH CONSTRUCT model takes the space of 2 models. It cannot transport JUMP PACK models or YNNARI models (excluding ASURYANI, YVRAINE and THE VISARCH models)."
                },
                {
                        "id": "ae-ynnari-raider",
                        "name": "Ynnari Raider",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 80
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 8,
                                "sv": "4+",
                                "w": 10,
                                "ld": "6+",
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
                                                "s": 5,
                                                "ap": -2,
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
                                                "ap": 0,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Aethersails"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Raider"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Raider This model is equipped with: dark lance; bladevanes. TRANSPORT This model has a transport capacity of 11 models from the following units: THE VISARCH, YNNARI ARCHON, YNNARI INCUBI, YNNARI KABALITE WARRIORS, YNNARI SUCCUBUS, YNNARI WYCHES, YVRAINE"
                },
                {
                        "id": "ae-ynnari-venom",
                        "name": "Ynnari Venom",
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
                                "ld": "6+",
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
                                                        "Rapid Fire 1",
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
                                                "ap": 0,
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
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lithe Embarkation"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Dedicated Transport",
                                "Fly",
                                "Venom"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Venom This model is equipped with: splinter cannon; twin splinter rifle; bladevanes. TRANSPORT This model has a transport capacity of 6 models from the following units: THE VISARCH, YNNARI ARCHON, YNNARI INCUBI, YNNARI KABALITE WARRIORS, YNNARI SUCCUBUS, YNNARI WYCHES, YVRAINE. Before the battle, at the start of the Declare Battle Formations step, you can select one YNNARI KABALITE WARRIORS or YNNARI WYCHES unit from your army that has not already been split. If you do, that unit is split into two units, each containing as equal a number of models as possible (when splitting a unit in this way, make a note of which models form each of the two new units). One of these units must start the battle embarked within this TRANSPORT; the other can start the battle embarked within another TRANSPORT, or it can be deployed as a separate unit."
                },
                {
                        "id": "ae-corsair-skyreavers",
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
                                "Asuryani"
                        ],
                        "compositionText": "1 Skyreaver Felarch 4-9 Skyreavers Every model is equipped with: shuriken pistol; Corsair blade."
                },
                {
                        "id": "ae-corsair-voidscarred",
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
                                "Asuryani"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "This unit can contain a maximum of 10 models. 1 Voidscarred Felarch 4-9 Corsair Voidscarred 0-1 Shade Runner 0-1 Soul Weaver 0-1 Way Seeker Every Corsair Voidscarred and Voidscarred Felarch is equipped with: shuriken pistol; power sword; close combat weapon. A Shade Runner is equipped with: shuriken pistol; paired Hekatarii blades. A Soul Weaver is equipped with: shuriken pistol; power sword; channeller stones. A Way Seeker is equipped with: shuriken pistol; Executioner; witch staff. KEYWORDS – ALL MODELS: INFANTRY, AELDARI, GRENADES, ANHRATHE, CORSAIR VOIDSCARREDWAY SEEKER: PSYKER FACTION"
                },
                {
                        "id": "ae-crimson-hunter",
                        "name": "Crimson Hunter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Pulse laser",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Skyhunter"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Aircraft",
                                "Aspect Warrior",
                                "Crimson Hunter"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Crimson Hunter This model is equipped with: 2 starcannons; pulse laser; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-d-cannon-platform",
                        "name": "D-cannon Platform",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "D-cannon",
                                                "range": "24\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast",
                                                        "Devastating Wounds",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Support Weapon",
                                        "Structural Collapse"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Support Weapon",
                                "D-Cannon Platform"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 D-cannon Platform This model is equipped with: D-cannon; shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-dark-reapers",
                        "name": "Dark Reapers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 90
                                },
                                {
                                        "models": 10,
                                        "cost": 195
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover"
                                                ]
                                        },
                                        {
                                                "name": "Reaper launcher – starswarm",
                                                "range": "48\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover"
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
                                                        "Ignores Cover",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Tempest launcher",
                                                "range": "36\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Inescapable Accuracy",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Aspect Warriors",
                                "Dark Reapers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Dark Reaper Exarch 4-9 Dark Reapers Every model is equipped with: Reaper launcher; close combat weapon."
                },
                {
                        "id": "ae-dire-avengers",
                        "name": "Dire Avengers",
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
                                "m": "7\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Avenger shuriken catapult",
                                                "range": "18\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
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
                                                "name": "Diresword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Power glaive",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bladestorm",
                                        "Shimmershield",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warriors",
                                "Dire Avengers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Dire Avenger Exarch 4-9 Dire Avengers Every model is equipped with: Avenger shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-falcon",
                        "name": "Falcon",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Pulse laser",
                                                "range": "48\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fire Support"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Transport",
                                "Fly",
                                "Falcon"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Falcon This model is equipped with: pulse laser; scatter laser; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. TRANSPORT This model has a transport capacity of 6 AELDARI INFANTRY models. Each WRAITH CONSTRUCT model takes the space of 2 models. It cannot transport JUMP PACK models or YNNARI models (excluding ASURYANI, YVRAINE and THE VISARCH models)."
                },
                {
                        "id": "ae-fire-dragons",
                        "name": "Fire Dragons",
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
                                "m": "7\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
                                                ]
                                        },
                                        {
                                                "name": "Dragon fusion pistol",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3",
                                                        "Pistol"
                                                ]
                                        },
                                        {
                                                "name": "Dragon’s breath flamer",
                                                "range": "12\"",
                                                "a": "D6+2",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Exarch’s Dragon fusion gun",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 6"
                                                ]
                                        },
                                        {
                                                "name": "Firepike",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": [
                                                        "Assault",
                                                        "Melta 3"
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
                                                "name": "Dragon axe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -4,
                                                "d": "D6",
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Assured Destruction",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Grenades",
                                "Aspect Warriors",
                                "Fire Dragons"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Fire Dragon Exarch 4-9 Fire Dragons The Fire Dragon Exarch is equipped with: Exarch’s Dragon fusion gun; close combat weapon. Every Fire Dragon is equipped with: Dragon fusion gun; close combat weapon."
                },
                {
                        "id": "ae-fire-prism",
                        "name": "Fire Prism",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Prism cannon – dispersed pulse",
                                                "range": "60\"",
                                                "a": "2D6",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Prism cannon – focused lances",
                                                "range": "60\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 18,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": [
                                                        "Linked Fire"
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
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crystal Matrix"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Fire Prism"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Fire Prism This model is equipped with: prism cannon; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-hemlock-wraithfighter",
                        "name": "Hemlock Wraithfighter",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 155
                                }
                        ],
                        "stats": {
                                "m": "20+\"",
                                "t": 8,
                                "sv": "3+",
                                "w": 12,
                                "ld": "6+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy D-scythe",
                                                "range": "18\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -4,
                                                "d": 2,
                                                "keywords": [
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Mindshock Pod"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Aircraft",
                                "Psyker",
                                "Wraith Construct",
                                "Hemlock Wraithfighter"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Hemlock Wraithfighter This model is equipped with: 2 heavy D-scythes; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-howling-banshees",
                        "name": "Howling Banshees",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 95
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "name": "Triskele",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Banshee blade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Executioner",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Mirrorswords",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Triskele",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Fights First"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Aspect Warriors",
                                "Howling Banshees"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Howling Banshee Exarch 4-9 Howling Banshees Every model is equipped with: shuriken pistol; Banshee blade."
                },
                {
                        "id": "ae-night-spinner",
                        "name": "Night Spinner",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 9,
                                "sv": "3+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Doomweaver",
                                                "range": "48\"",
                                                "a": "D6+3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Twin-Linked"
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
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
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
                                        "Deadly Demise D3"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Monofilament Web"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Night Spinner"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Night Spinner This model is equipped with: doomweaver; twin shuriken catapult; wraithbone hull. DAMAGED: 1-4 WOUNDS REMAINING While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-rangers",
                        "name": "Rangers",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 55
                                },
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "5+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Infiltrators",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Path of the Outcast"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Rangers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "5-10 Rangers Every model is equipped with: long rifle; shuriken pistol; close combat weapon."
                },
                {
                        "id": "ae-shadow-weaver-platform",
                        "name": "Shadow Weaver Platform",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Shadow weaver",
                                                "range": "48\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Support Weapon",
                                        "Monofilament Snare"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Support Weapon",
                                "Shadow Weaver Platform"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Shadow Weaver Platform This model is equipped with: shadow weaver; shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-shining-spears",
                        "name": "Shining Spears",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 110
                                },
                                {
                                        "models": 6,
                                        "cost": 220
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "3+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Laser lance",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault"
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
                                                "name": "Star lance",
                                                "range": "6\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Laser lance",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Monster 3+",
                                                        "Anti-Vehicle 3+",
                                                        "Lance"
                                                ]
                                        },
                                        {
                                                "name": "Paragon sabre",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Star lance",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Monster 3+",
                                                        "Anti-Vehicle 3+",
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Extreme Mobility",
                                        "Shimmershield"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Aspect Warriors",
                                "Shining Spears"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Shining Spear Exarch 2-5 Shining Spears Every model is equipped with: laser lance; twin shuriken catapult."
                },
                {
                        "id": "ae-shroud-runners",
                        "name": "Shroud Runners",
                        "role": "mounted",
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
                                "m": "14\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 2
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Long rifle",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Precision"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 1,
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
                                        "Scouts 9\"",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Target Acquisition"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Shroud Runners"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "3-6 Shroud Runners Every model is equipped with: long rifle; scatter laser; shuriken pistol; close combat weapon."
                },
                {
                        "id": "ae-skyweavers",
                        "name": "Skyweavers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 95
                                },
                                {
                                        "models": 4,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Skyweaver haywire cannon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Star bolas",
                                                "range": "12\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Zephyrglaive",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Acrobatic Grace"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Smoke",
                                "Skyweavers"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "2-4 Skyweavers Every model is equipped with: shuriken cannon; star bolas; close combat weapon."
                },
                {
                        "id": "ae-starfangs",
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
                                "Asuryani"
                        ],
                        "compositionText": "1-2 Starfangs Every model is equipped with: disintegrator cannon; Starfang grenade launcher; wraithbone hull."
                },
                {
                        "id": "ae-striking-scorpions",
                        "name": "Striking Scorpions",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 10,
                                        "cost": 150
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
                                "ranged": [
                                        {
                                                "name": "Chainsabres",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Pistol",
                                                        "Twin-Linked"
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
                                                "name": "Biting blade",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Chainsabres",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion chainsword",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Scorpion’s claw",
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
                                        "Infiltrators",
                                        "Scouts 7\"",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mandiblasters",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Aspect Warriors",
                                "Striking Scorpions"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Striking Scorpion Exarch 4-9 Striking Scorpions The Striking Scorpion Exarch is equipped with: shuriken pistol; Scorpion chainsword; Scorpion’s claw. Every Striking Scorpion is equipped with: shuriken pistol; Scorpion chainsword."
                },
                {
                        "id": "ae-swooping-hawks",
                        "name": "Swooping Hawks",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 95
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 3,
                                "sv": "4+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Exarch’s lasblaster",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Hawk’s talon",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Lasblaster",
                                                "range": "24\"",
                                                "a": 4,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Sunpistol",
                                                "range": "12\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Lethal Hits",
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
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 5,
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grenade Pack Flyover",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Grenades",
                                "Aspect Warriors",
                                "Swooping Hawks"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Swooping Hawk Exarch 4-9 Swooping Hawks The Swooping Hawk Exarch is equipped with: Hawk’s talon; close combat weapon. Every Swooping Hawk is equipped with: lasblaster; close combat weapon."
                },
                {
                        "id": "ae-troupe",
                        "name": "Troupe",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 85
                                },
                                {
                                        "models": 6,
                                        "cost": 100
                                },
                                {
                                        "models": 11,
                                        "cost": 190
                                },
                                {
                                        "models": 12,
                                        "cost": 205
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
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
                                                "name": "Harlequin’s blade",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Harlequin’s special weapon",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Power sword",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Dance of Death",
                                        "Hero’s Prowess",
                                        "Villain’s Doom",
                                        "Trickster’s Grace",
                                        "Flip Belt"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Grenades",
                                "Troupe"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Lead Player 4-11 Players Every model is equipped with: shuriken pistol; Harlequin’s blade, flip belt."
                },
                {
                        "id": "ae-vibro-cannon-platform",
                        "name": "Vibro Cannon Platform",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Vibro cannon",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 2,
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Support Weapon",
                                        "Sonic Destruction"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Support Weapon",
                                "Vibro Cannon Platform"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Vibro Cannon Platform This model is equipped with: vibro cannon; shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-voidweaver",
                        "name": "Voidweaver",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "4+",
                                "w": 6,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Prismatic cannon – dispersed pulse",
                                                "range": "24\"",
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
                                                "name": "Prismatic cannon – focused lances",
                                                "range": "24\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": 4,
                                                "keywords": []
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
                                                "name": "Voidweaver haywire cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Anti-Vehicle 4+",
                                                        "Devastating Wounds"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                        "Deadly Demise 1",
                                        "Stealth"
                                ],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Polychromatic Camouflage"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Voidweaver"
                        ],
                        "factionKeywords": [
                                "Harlequins"
                        ],
                        "compositionText": "1 Voidweaver This model is equipped with: 2 shuriken cannons; Voidweaver haywire cannon; close combat weapon."
                },
                {
                        "id": "ae-vypers",
                        "name": "Vypers",
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
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 2"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
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
                                        "Deadly Demise 1"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Harassment Fire"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Fly",
                                "Vypers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1-2 Vypers Every model is equipped with: shuriken cannon; bright lance; wraithbone hull."
                },
                {
                        "id": "ae-war-walkers",
                        "name": "War Walkers",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                },
                                {
                                        "models": 2,
                                        "cost": 170
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "War Walker feet",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Scouts 9\""
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Crystalline Targeting"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Aeldari",
                                "Walker",
                                "War Walkers"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1-2 War Walkers Every model is equipped with: 2 shuriken cannons; War Walker feet."
                },
                {
                        "id": "ae-warlock-conclave",
                        "name": "Warlock Conclave",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 2,
                                        "cost": 55
                                },
                                {
                                        "models": 4,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "7\"",
                                "t": 3,
                                "sv": "6+",
                                "w": 2,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Destructor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Protect",
                                        "Psychic Communion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Psyker",
                                "Warlocks",
                                "Warlock Conclave"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "2-4 Warlocks Every model is equipped with: Destructor; shuriken pistol; witchblade."
                },
                {
                        "id": "ae-warlock-skyrunners",
                        "name": "Warlock Skyrunners",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 45
                                },
                                {
                                        "models": 2,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 3,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Destructor",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
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
                                        },
                                        {
                                                "name": "Singing spear",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Assault",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Singing spear",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Witchblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 2+",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Runes of Battle",
                                        "Psychic Communion"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Psyker",
                                "Warlocks",
                                "Warlock Skyrunners"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1-2 Warlock Skyrunners Every model is equipped with: Destructor; shuriken pistol; twin shuriken catapult; witchblade."
                },
                {
                        "id": "ae-warp-spiders",
                        "name": "Warp Spiders",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 105
                                },
                                {
                                        "models": 10,
                                        "cost": 190
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 3,
                                "sv": "3+",
                                "w": 1,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Death spinner",
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
                                        },
                                        {
                                                "name": "Death weavers",
                                                "range": "6\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Torrent",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Exarch’s death spinner",
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
                                        },
                                        {
                                                "name": "Spinneret rifle",
                                                "range": "18\"",
                                                "a": "D6",
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
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Powerblade array",
                                                "range": "Melee",
                                                "a": 10,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
                                                        "Twin-Linked"
                                                ]
                                        },
                                        {
                                                "name": "Powerblades",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Lethal Hits",
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
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Flickerjump",
                                        "Aspect Shrine Token",
                                        "Designer’s Note"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Jump Pack",
                                "Fly",
                                "Aspect Warriors",
                                "Warp Spiders"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Warp Spider Exarch 4-9 Warp Spiders The Warp Spider Exarch is equipped with: Exarch’s death spinner; close combat weapon. Every Warp Spider is equipped with: death spinner; close combat weapon."
                },
                {
                        "id": "ae-windriders",
                        "name": "Windriders",
                        "role": "mounted",
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
                                "m": "14\"",
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
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Twin shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault",
                                                        "Twin-Linked"
                                                ]
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
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swift Demise"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Windriders"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "3-6 Windriders Every model is equipped with: twin shuriken catapult; close combat weapon."
                },
                {
                        "id": "ae-wraithblades",
                        "name": "Wraithblades",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 150
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ghostaxe",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ghostswords",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "Malevolent Souls",
                                        "Psychic Guidance",
                                        "Forceshield"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Wraith Construct",
                                "Wraithblades"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "5 Wraithblades Every model is equipped with: ghostswords."
                },
                {
                        "id": "ae-wraithguard",
                        "name": "Wraithguard",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 5,
                                        "cost": 160
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 6,
                                "sv": "2+",
                                "w": 3,
                                "ld": "8+",
                                "oc": 1
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Wraithcannon",
                                                "range": "18\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "D-scythe",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 7,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Close combat weapon",
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
                                "core": [],
                                "faction": [],
                                "wargear": [],
                                "other": [
                                        "War Construct",
                                        "Psychic Guidance"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Wraith Construct",
                                "Wraithguard"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "5 Wraithguard Every model is equipped with: wraithcannon; close combat weapon."
                },
                {
                        "id": "ae-wraithknight",
                        "name": "Wraithknight",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 435
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy wraithcannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 20,
                                                "ap": -4,
                                                "d": "2D6",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Suncannon",
                                                "range": "48\"",
                                                "a": "D6+4",
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Titanic feet",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Titanic Strides",
                                        "Point-blank Devastation",
                                        "Scattershield"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Titanic",
                                "Towering",
                                "Aeldari",
                                "Walker",
                                "Wraith Construct",
                                "Wraithknight"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wraithknight This model is equipped with: suncannon; titanic feet; scattershield. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-wraithknight-with-ghostglaive",
                        "name": "Wraithknight with Ghostglaive",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 420
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 12,
                                "sv": "2+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 10
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heavy wraithcannon",
                                                "range": "36\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 20,
                                                "ap": -4,
                                                "d": "2D6",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
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
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Titanic ghostglaive – strike",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Titanic ghostglaive – sweep",
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
                                        "Deadly Demise D6"
                                ],
                                "faction": [
                                        "Battle Focus"
                                ],
                                "wargear": [],
                                "other": [
                                        "Titanic Agility",
                                        "Scattershield"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Titanic",
                                "Towering",
                                "Aeldari",
                                "Walker",
                                "Wraith Construct",
                                "Wraithknight With Ghostglaive"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wraithknight with Ghostglaive This model is equipped with: titanic ghostglaive; scattershield. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "ae-wraithlord",
                        "name": "Wraithlord",
                        "role": "monster",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 130
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 10,
                                "sv": "2+",
                                "w": 10,
                                "ld": "8+",
                                "oc": 3
                        },
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bright lance",
                                                "range": "36\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+2",
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
                                                        "Assault",
                                                        "Ignores Cover",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Missile launcher – starshot",
                                                "range": "48\"",
                                                "a": 1,
                                                "bs": "4+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": "D6",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Missile launcher – sunburst",
                                                "range": "48\"",
                                                "a": "D6",
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        },
                                        {
                                                "name": "Scatter laser",
                                                "range": "36\"",
                                                "a": 6,
                                                "bs": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken cannon",
                                                "range": "24\"",
                                                "a": 3,
                                                "bs": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Shuriken catapult",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Starcannon",
                                                "range": "36\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ghostglaive – strike",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 10,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Ghostglaive – sweep",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Wraithbone fists",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 2,
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
                                        "Fated Hero",
                                        "Psychic Guidance"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Aeldari",
                                "Walker",
                                "Wraith Construct",
                                "Wraithlord"
                        ],
                        "factionKeywords": [
                                "Asuryani"
                        ],
                        "compositionText": "1 Wraithlord This model is equipped with: 2 shuriken catapults; wraithbone fists."
                },
                {
                        "id": "ae-ynnari-incubi",
                        "name": "Ynnari Incubi",
                        "role": "infantry",
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
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
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
                                                "ap": -1,
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
                                                "s": 4,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tormentors"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Aeldari",
                                "Incubi"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Klaivex 4-9 Incubi Every model is equipped with: klaive."
                },
                {
                        "id": "ae-ynnari-reavers",
                        "name": "Ynnari Reavers",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 3,
                                        "cost": 65
                                },
                                {
                                        "models": 6,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "16\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 2,
                                "ld": "6+",
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
                                                "name": "Agoniser",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Infantry 3+"
                                                ]
                                        },
                                        {
                                                "name": "Bladevanes",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [],
                                "faction": [
                                        "Battle Focus",
                                        "Disparate Paths"
                                ],
                                "wargear": [],
                                "other": [
                                        "Eviscerating Fly-by",
                                        "Cluster Caltrops",
                                        "Grav-talon"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Aeldari",
                                "Fly",
                                "Reavers"
                        ],
                        "factionKeywords": [
                                "Ynnari"
                        ],
                        "compositionText": "1 Arena Champion 2-5 Reavers Every model is equipped with: splinter pistol; splinter rifle; bladevanes."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(aeldari);
})();
