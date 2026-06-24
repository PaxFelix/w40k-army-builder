/**
 * W40K Army Builder — Chaos Daemons (10th Edition)
 *
 * Datasheets from Codex: Chaos Daemons. Names-only abilities/rules;
 * stats, weapons, points and keywords are factual game data.
 * Legends and Forge World datasheets are intentionally omitted.
 *
 * Self-registers into window.W40K_FACTIONS, assembled by data/factions.js.
 */
(function () {
    "use strict";

    const cd = {
        id: "chaos-daemons",
        name: "Chaos Daemons",
        icon: "👹",
        allegiance: "Chaos",
        flavour: "",
        armyRules: [
            { name: "The Shadow of Chaos", flavour: "When daemons pour into realspace, maelstroms of warp energy spill through in their wake. Manifest emotion and unbridled, nightmarish forces twist all that they touch, reshaping the landscape into bizarre forms while tormenting mortal beings to madness. To be embroiled in such tempests is to endure conditions utterly anathema to the fundamental laws of reality, provoking primal terror in even the most emotionless warriors.", text: "If your Army Faction is LEGIONES DAEMONICA, certain areas of the battlefield are considered to be within your army's Shadow of Chaos, as follows:\n- Your deployment zone is always within your army's Shadow of Chaos.\n- At the start of any phase, if you control at least half of the objective markers within No Man's Land, until the end of that phase, No Man's Land is within your army's Shadow of Chaos.\n- At the start of any phase, if you control at least half of the objective markers within your opponent's deployment zone, until the end of that phase, your opponent's deployment zone is within your army's Shadow of Chaos.\n\nDaemonic Manifestation: While a LEGIONES DAEMONICA unit from your army is within your army's Shadow of Chaos, each time that unit takes a Battle-shock test, add 1 to that test and, if that test is passed, one model in that unit regains up to D3 lost wounds (if that unit is a BATTLELINE unit and that test is passed, up to D3 destroyed models can be returned to that unit instead).\n\nDaemonic Terror: While an enemy unit is within your army's Shadow of Chaos and/or it is within 6\" of one or more BLOODTHIRSTER, GREAT UNCLEAN ONE, KAIROS FATEWEAVER, KEEPER OF SECRETS, LORD OF CHANGE, ROTIGUS, SHALAXI HELBANE or SKARBRAND units from your army, each time that unit takes a Battle-shock test, subtract 1 from that test and, if that test is failed, that enemy unit suffers D3 mortal wounds." },
            { name: "Daemonic Pact", flavour: "When the mortal servants of the Dark Gods march to war, the most favoured may find daemonic entities accompanying them.", text: "If every model from your army has the CHAOS KNIGHTS or HERETIC ASTARTES keyword, you can include LEGIONES DAEMONICA units in your army, even if they do not have the Faction keyword you selected in the Select Army Faction step. The combined points cost of such units you can include depends on your battle size, as shown below.\n- Incursion: Up to 250 pts\n- Strike Force: Up to 500 pts\n- Onslaught: Up to 750 pts\n\nNone of these models can be your WARLORD, and they cannot be given Enhancements.\n\nIn addition, for each of the following keywords, the number of non-BATTLELINE units with that keyword you include in this way cannot be greater than the number of BATTLELINE units with that keyword you include in this way:\n- KHORNE\n- TZEENTCH\n- NURGLE\n- SLAANESH" }
        ],
        detachments: [
            {
                name: "Daemonic Incursion",
                flavour: "",
                rule: { name: "Warp Rifts", flavour: "Daemonic legions tear through the fabric of realspace, malevolent entities flickering into being like phantasms from a nightmare. Worse still, as terror and panic take hold of their victims, so their mortal souls become ever easier prey for the entities pouring through from the warp.", text: "If your Army Faction is LEGIONES DAEMONICA, you can use this Daemonic Incursion Detachment rule.\n\nEach time a LEGIONES DAEMONICA unit from your army is set up on the battlefield using the Deep Strike ability, if it is set up wholly within your army's Shadow of Chaos, and/or if it is set up wholly within 6\" of one or more friendly BLOODTHIRSTER, GREAT UNCLEAN ONE, KAIROS FATEWEAVER, KEEPER OF SECRETS, LORD OF CHANGE, ROTIGUS, SHALAXI HELBANE or SKARBRAND units with which it shares the KHORNE, TZEENTCH, NURGLE or SLAANESH keyword, it can be set up anywhere that is more than 6\" horizontally away from all enemy models, instead of more than 9\".", restrictions: "" },
                enhancements: [
                    { name: "A'rgath, the King of Blades", cost: 20, restriction: "KHORNE LEGIONES DAEMONICA model only.", text: "When a daemon is bound within a weapon by its infernal master, it rarely submits willingly to this terrible incarceration. The same cannot be said for A'rgath. A lifetime of slaughter and zealous dedication saw this butcher granted daemonhood. Such was his devotion to Khorne that instead of accepting immortality as a Daemon Prince, he instead chose to take the form of a deadly blade so that he could spill the lifeblood of Khorne's greatest enemies. Their hand guided by A'rgath's spirit, this weapon's wielder becomes nigh on unstoppable. Countless are the rival champions and mortal heroes that have fallen to his power.\n\nAdd 1 to the Attacks and Strength characteristics of the bearer's melee weapons. While the bearer is within your army's Shadow of Chaos, add 2 to the Attacks and Strength characteristics of the bearer's melee weapons instead." },
                    { name: "Soulstealer", cost: 15, restriction: "SLAANESH LEGIONES DAEMONICA model only.", text: "This gluttonous blade gulps down the souls of its victims before invigorating the corporeal form of its wielder. Its greed stems from the starving Keeper of Secrets bound within \u2013 an arrogant entity that sought to devour enough Aeldari souls to challenge Slaanesh itself. As punishment for the daemon's monstrous hubris, Slaanesh trapped it within Soulstealer, condemning the Keeper of Secrets to sustain other daemons with its frenzied appetite while retaining nothing for itself.\n\nEach time the bearer destroys an enemy model with a melee attack, roll one D6, adding 1 to the result if the bearer is within your army's Shadow of Chaos. On a 4+, the bearer regains 1 lost wound." },
                    { name: "The Endless Gift", cost: 30, restriction: "NURGLE LEGIONES DAEMONICA model only.", text: "Only the most accomplished plague daemons are granted the Endless Gift. A disease of unutterable malignancy and repulsive beneficence, it changes form constantly from plague to infestation to malaise. The one constant is its ability to reknit its sufferer's corporeal form from even the most catastrophic of wounds. One moment, infernal bacteria may multiply like wildfire until their gelid mass fills a fleshy rent with fresh daemon-flesh. The next, pestilential vapours may billow from the daemon's yawning maw, veiling its ravaged bulk before tattering away to reveal a form healed of its recent hurts.\n\nThe bearer has the Feel No Pain 5+ ability." },
                    { name: "The Everstave", cost: 25, restriction: "TZEENTCH LEGIONES DAEMONICA model only.", text: "This staff blazes with vibrant warpflame. As soon as its master takes up the eldritch weapon, they too are wreathed in the same daemonic fire. From within this magenta inferno, the Everstave's daemonic bearer hurls searing gouts of Tzeentch's pink fire, turning armour to ash and immolating or irrevocably mutating the flesh beneath.\n\nAdd 1 to the Strength characteristic of the bearer's ranged weapons and increase the Range characteristic of such weapons by 3\". While the bearer is within your army's Shadow of Chaos, add 2 to the Strength characteristic of the bearer's ranged weapons and increase the Range characteristic of such weapons by 6\" instead." },
                ],
                stratagems: [
                    { name: "Corrupt Realspace", cp: 1, type: "Strategic Ploy", when: "Start of any Command phase.", target: "One LEGIONES DAEMONICA unit from your army that is within range of an objective marker you control.", effect: "That objective marker is said to be Corrupted and remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Corrupted and under your control, the area of the battlefield within 6\" of that objective marker is considered to be within your army's Shadow of Chaos.", restrictions: "" },
                    { name: "Warp Surge", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One LEGIONES DAEMONICA unit from your army that is within your army's Shadow of Chaos.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Draught of Terror", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One LEGIONES DAEMONICA unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, improve the Armour Penetration characteristic of weapons equipped by models in that unit by 1. In addition, until the end of the phase, each time such a weapon targets a unit that is Battle-shocked, you can re-roll the Wound roll.", restrictions: "" },
                    { name: "Denizens of the Warp", cp: 1, type: "Strategic Ploy", when: "Your Movement phase.", target: "One LEGIONES DAEMONICA unit from your army that is arriving using the Deep Strike ability this phase.", effect: "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy models.", restrictions: "" },
                    { name: "The Realm of Chaos", cp: 1, type: "Battle Tactic", when: "End of your opponent's turn.", target: "Up to two LEGIONES DAEMONICA units from your army that are within your army's Shadow of Chaos, or one other LEGIONES DAEMONICA unit from your army.", effect: "Remove the targeted units from the battlefield and place them into Strategic Reserves. They will arrive back on the battlefield in the Reinforcements step of your next Movement phase using the Deep Strike ability.", restrictions: "You cannot target units that are within Engagement Range of one or more enemy units with this Stratagem." },
                    { name: "Daemonic Invulnerability", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One LEGIONES DAEMONICA unit from your army that was selected as the target of one or more of that enemy unit's attacks.", effect: "Until the end of the phase, each time an invulnerable saving throw is made for a model in your unit, re-roll a saving throw of 1.", restrictions: "" },
                ]
            },
            {
                name: "Shadow Legion",
                flavour: "",
                rule: { name: "Thralls of the First Prince", flavour: "", text: "If your Army Faction is LEGIONES DAEMONICA, you can use this Shadow Legion Detachment rule.\n\nThralls of the First Prince: When mustering your army, you cannot include any DAEMON PRINCE, DAEMON PRINCE WITH WINGS or EPIC HERO units (excluding BE'LAKOR), but you can include the following HERETIC ASTARTES units:\n- CHAOS LORD\n- CHAOS LORD IN TERMINATOR ARMOUR\n- CHAOS LORD WITH JUMP PACK\n- CHAOS TERMINATOR SQUAD\n- CHOSEN\n- DAMNED units\n- DARK APOSTLE\n- HAVOCS\n- LEGIONARIES\n- MASTER OF POSSESSION\n- POSSESSED\n- RAPTORS\n- SORCERER\n- SORCERER IN TERMINATOR ARMOUR\n- WARP TALONS\nThe combined points value of such units depends on your battle size, as shown below.\n- Incursion: Up to 500 pts\n- Strike Force: Up to 1000 pts\n- Onslaught: Up to 1500 pts\n\nKeywords: BE'LAKOR and HERETIC ASTARTES units from your army gain the SHADOW LEGION and UNDIVIDED keywords. LEGIONES DAEMONICA units from your army gain the SHADOW LEGION keyword.\n\nFirst Prince of Chaos: Elevated to the status of Daemon Prince by the combined might of the four Dark Gods of Chaos, Be'lakor exudes unimaginable power. Units from your army have the relevant abilities presented below.\n\nMurderer's Cowl (SHADOW LEGION KHORNE units only): This unit is eligible to shoot and declare a charge in a turn in which it Advanced.\n\nPenumbral Puppetry (SHADOW LEGION TZEENTCH units only): Each time an attack targets this unit, subtract 1 from the Hit roll.\n\nGloam Rot (SHADOW LEGION NURGLE units only): Each time an attack targets this unit, if the Strength characteristic of that attack is greater than this unit's Toughness characteristic, subtract 1 from the Wound roll.\n\nShadow's Caress (SHADOW LEGION SLAANESH units only): Enemy units cannot use the Fire Overwatch Stratagem to shoot at this unit.\n\nDisciples of Be'lakor (SHADOW LEGION UNDIVIDED units only):\n- This unit has the Dark Pacts army rule, and can use it as described in Codex: Chaos Space Marines, even though your Army Faction is not HERETIC ASTARTES. If this unit is BE'LAKOR, it automatically passes the Leadership test required for Dark Pacts.\n- SHADOW LEGION HERETIC ASTARTES models in this unit have the Deep Strike ability.", restrictions: "" },
                enhancements: [
                    { name: "Leaping Shadows", cost: 25, restriction: "SHADOW LEGION model only.", text: "Seen only in flashes, this warrior traverses the darkness with supernatural speed and stealth, emerging where least expected.\n\nModels in the bearer's unit have the Scouts 9\" ability." },
                    { name: "Mantle of Gloom (Aura)", cost: 20, restriction: "SHADOW LEGION model only.", text: "This warrior is mantled in the dread energies of the immaterium. With but a thought, they can extrude from their gloaming mantle coils of grasping darkness, the chill touch of which is enough to erode the confidence of even the mightiest champion.\n\nWhile an enemy unit is within Engagement Range of the bearer's unit, subtract 1 from the Objective Control characteristic of models in that enemy unit." },
                    { name: "Fade to Darkness", cost: 30, restriction: "SHADOW LEGION model only.", text: "Having slaughtered their prey, this thrall of the Dark Master opens a twilit gate, returning to the gloom and preparing for their next assault.\n\nAt the end of the Fight phase, if the bearer's unit destroyed one or more enemy units this phase and is not within Engagement Range of one or more enemy units, you can remove the bearer's unit from the battlefield and place it into Strategic Reserves." },
                    { name: "Malice Made Manifest", cost: 25, restriction: "SHADOW LEGION model only.", text: "This champion of Chaos weaponises their own twisted and blackened spirit, projecting talons wrought of concentrated madness and fury that rake through mind, body and soul.\n\nAt the start of the Fight phase, select one enemy unit within Engagement Range of the bearer's unit and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds." },
                ],
                stratagems: [
                    { name: "Spiteful Demise", cp: 1, type: "Strategic Ploy", when: "Any phase, just after a SHADOW LEGION unit from your army is destroyed, before removing the last model in that unit from the battlefield and before rolling any dice for the Deadly Demise ability.", target: "That SHADOW LEGION unit. You can use this Stratagem on that unit even though it was just destroyed.", effect: "Roll one D6 for each enemy unit that is within Engagement Range of the last model in your unit, adding 2 to the result if your unit has the SLAANESH keyword: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds.", restrictions: "" },
                    { name: "Channelled Wrath", cp: 1, type: "Strategic Ploy", when: "Fight phase.", target: "One SHADOW LEGION unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, melee weapons equipped by models in your unit have the [Lance] ability. If your unit has the KHORNE keyword, until the end of the phase, improve the Armour Penetration characteristic of those weapons by 1 as well.", restrictions: "" },
                    { name: "Death Denied", cp: 1, type: "Battle Tactic", when: "Your Command phase.", target: "One SHADOW LEGION unit from your army.", effect: "One model in your unit regains up to 3 lost wounds. In addition, if your unit has the TZEENTCH keyword, return up to one destroyed model (excluding CHARACTER models) to your unit with its full wounds remaining.", restrictions: "" },
                    { name: "Encroaching Darkness", cp: 1, type: "Battle Tactic", when: "Your Shooting phase.", target: "Up to one SHADOW LEGION HERETIC ASTARTES unit from your army and up to one SHADOW LEGION LEGIONES DAEMONICA unit from your army. You can only select units that arrived from Reserves this turn.", effect: "Until the end of the phase, weapons equipped by models in your selected units have the [Ignores Cover] ability.", restrictions: "" },
                    { name: "Shade Path", cp: 2, type: "Battle Tactic", when: "Your opponent's Charge phase, just after an enemy unit declares a charge.", target: "One SHADOW LEGION unit from your army that was selected as a target of that charge.", effect: "Until the end of the phase, subtract 2 from Charge rolls made for that enemy unit. In addition, if your unit has the NURGLE keyword, that enemy unit must take a Battle-shock test.", restrictions: "" },
                    { name: "Binding Shadow", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "Up to one SHADOW LEGION HERETIC ASTARTES unit from your army and up to one SHADOW LEGION LEGIONES DAEMONICA unit from your army. You can only select units that are not within Engagement Range of one or more enemy units.", effect: "Remove those selected units from the battlefield and place them into Strategic Reserves.", restrictions: "" },
                ]
            },
            {
                name: "Blood Legion",
                flavour: "The daemon legions of Khorne burst into realspace like blood from an artery. Bloodcrushers pound the ground as they lead the charge, slamming into the enemy lines with avalanche force. Behind them come snarling Flesh Hounds and gore-slick Bloodletters, the bellow of brazen war horns sounding their massed charge. Through the clangour of blades and screams, a new sound cuts the air as flaming skulls whistle down to explode amongst the enemy, spat from the maws of Skull Cannons to inflict maximum slaughter. Then, the dark shadow of outstretched wings spreads over the foe. Roaring bloody murder, the Bloodthirsters of Khorne slam down from on high to unleash carnage beyond the imaginings of mortal warriors. As severed heads tumble and blood falls like monsoon rain, crimson doom engulfs the enemy altogether.",
                rule: { name: "Murdercall", flavour: "The daemons of Khorne are physical manifestations of rage, hate and the desperate need to shed blood. For as long as their physical forms remain in realspace, they will never cease their murderous rampage.", text: "Each time an enemy unit (excluding AIRCRAFT) ends a Normal or Advance move within 6\" of one or more LEGIONES DAEMONICA KHORNE units from your army, one of those LEGIONES DAEMONICA KHORNE units can make a Surge move towards that enemy unit. To do so, roll one D6: models in your unit move a number of inches up to this result, but your unit must end that move as close as possible to that enemy unit. When doing so, those models can be moved within Engagement Range of that enemy unit. A unit cannot make a Surge move while it is within Engagement Range of one or more enemy units.\n\nBlood Tainted: At the end of a phase in which a LEGIONES DAEMONICA KHORNE unit from your army destroyed an enemy unit that was within range of an objective marker at the start of the phase, if your unit has a higher Level of Control over that objective marker, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.", restrictions: "" },
                enhancements: [
                    { name: "Slaughterthirst (Aura)", cost: 25, restriction: "LEGIONES DAEMONICA KHORNE model only.", text: "This servant of Khorne is a walking nexus of bloodthirst, its mere presence whetting the keen edges of daemonic blades and appetites alike for slaughter.\n\nWhile a friendly LEGIONES DAEMONICA KHORNE unit (excluding MONSTERS) is within 6\" of the bearer, weapons equipped by models in that unit have the [Lance] ability." },
                    { name: "Fury's Cage", cost: 20, restriction: "LEGIONES DAEMONICA KHORNE MONSTER model only.", text: "The Bloodthirster bound within this weapon offers the wielder immense power but seeks every way to turn its towering wrath upon its jailer.\n\nEach time the bearer is selected to fight, it can use this Enhancement. If it does, the bearer suffers D3+1 mortal wounds, and until the end of the phase, each time it makes an attack, you can re-roll the Hit roll and you can re-roll the Wound roll." },
                    { name: "Brazenmaw", cost: 15, restriction: "LEGIONES DAEMONICA KHORNE model only.", text: "This daemon's maw and throat are forged from burning brass, transforming its war cries into a deafening clarion that calls the Blood Legion to war.\n\nAdd 2 to Charge rolls made for the bearer's unit." },
                    { name: "Gateway Unto Damnation", cost: 10, restriction: "LEGIONES DAEMONICA KHORNE MONSTER model only.", text: "Concealed within this daemon's form is a portal into the depths of Khorne's realm. Anointed with gore and thrown wide by the daemon's corporeal demise, it expands like a bloody singularity to drag everything in reach into the screaming maelstrom of the Warp.\n\nThe bearer's Deadly Demise ability inflicts mortal wounds on a D6 roll of 2+ instead of on a 6. In addition, if the bearer has destroyed one or more enemy units this battle, the bearer has the Deadly Demise D3+3 ability, instead of any other Deadly Demise ability on its datasheet." },
                ],
                stratagems: [
                    { name: "Wrath Undeniable", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One LEGIONES DAEMONICA KHORNE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time a model in your unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.", restrictions: "" },
                    { name: "Gore-hungry Onslaught", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One LEGIONES DAEMONICA KHORNE unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.", restrictions: "" },
                    { name: "Skulls Beget Blood", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One LEGIONES DAEMONICA KHORNE INFANTRY or LEGIONES DAEMONICA KHORNE MOUNTED unit from your army (excluding units that Fell Back this turn) that is not within Engagement Range of one or more enemy units.", effect: "Select one enemy unit that is not within Engagement Range of one or more units from your army and is within 8\" of and visible to your unit. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                    { name: "Blood Begets Skulls", cp: 1, type: "Strategic Ploy", when: "Your Charge phase.", target: "One LEGIONES DAEMONICA KHORNE unit from your army that has not been selected to charge this phase.", effect: "Until the end of the phase, your unit is eligible to declare a charge in a turn in which it Advanced.", restrictions: "" },
                    { name: "Fools' Flight", cp: 2, type: "Strategic Ploy", when: "Your opponent's Movement phase, just after an enemy unit Falls Back.", target: "One LEGIONES DAEMONICA KHORNE unit from your army that is within 6\" of that enemy unit and would be eligible to declare a charge against that enemy unit.", effect: "Your unit now declares a charge that targets only that enemy unit, and you resolve that charge. Note that even if that charge is successful, your unit does not receive any Charge bonus this turn.", restrictions: "" },
                    { name: "Sheathed in Brass", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.", target: "One LEGIONES DAEMONICA KHORNE unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, models in your unit have a Save characteristic of 3+.", restrictions: "" },
                ]
            },
            {
                name: "Legion of Excess",
                flavour: "The legions of Slaanesh surge into battle like a blood-spattered carnival run mad. It is a revel where every swathe of diaphanous silk is braided with screaming souls, and every beautiful smile stretches into a needle-fanged leer of cruellest hunger. The presence of these entities is enough to drive mortals mad as the horrific evidence of their eyes wars with forbidden desire welling inside them like bile. Engulfed in intoxicating mists, they struggle to raise weapons against Daemonettes and Fiends whose every caress bears a razor's edge. Wailing in blissful torment, they drop to their knees before towering Keepers of Secrets, pleading for gifts of agony the daemons gladly dole out. Willingly, they hurl themselves beneath the hooves of Seekers and the threshing blades of Hellflayers. Against such insidious foes, what hope of victory can there be?",
                rule: { name: "Beguiling Aura", flavour: "The daemons of the Dark Prince can bewitch the minds of their foes, appearing in one moment as their true and nightmarish selves and in the next as the object of their foes' most forbidden desires or devoted affections. Enemies are left foundering and bewildered as the daemons weave their sinuous dances around them and trill their nerve-shredding siren songs.", text: "LEGIONES DAEMONICA SLAANESH units from your army are eligible to declare a charge in a turn in which they Fell Back.\n\nSeductive Gambit: Temptation is a deadly weapon in the arsenal of the daemons of Slaanesh. To tease warriors' pride with visions of martial glory or to lure the deluded and desperate into a bladed embrace, they delight in dangling themselves like bait or feigning helpless weakness, then striking with savage release at their overextended foes. LEGIONES DAEMONICA SLAANESH units from your army have the following ability:\nSeductive Gambit: Each time this unit ends a Charge move, you can declare it will perform a Seductive Gambit. If you do, until the end of the turn, this unit does not have the Fights First ability, but instead, each time a model in this unit makes an attack, you can re-roll the Hit roll and you can re-roll a Wound roll of 1.", restrictions: "" },
                enhancements: [
                    { name: "False Majesty (Aura)", cost: 30, restriction: "LEGIONES DAEMONICA SLAANESH model only.", text: "Dripping poisonous finery and stalking across the battlefield with regal arrogance, this daemon evokes in its fellows the jealous need to outshine its magnificence.\n\nWhile a friendly LEGIONES DAEMONICA SLAANESH unit (excluding MONSTERS) is within 6\" of the bearer, each time a model in that unit makes a melee attack, add 1 to the Wound roll." },
                    { name: "Dreaming Crown (Aura)", cost: 30, restriction: "LEGIONES DAEMONICA SLAANESH model only.", text: "This gilded circlet fills mortal minds with waking dreams potent enough to intoxicate and distract even the most disciplined or alien combatants, leaving them easy prey for the daemons of Slaanesh.\n\nWhile a friendly LEGIONES DAEMONICA SLAANESH unit (excluding MONSTERS) is within 6\" of the bearer, each time a model in that unit makes a melee attack, add 1 to the Hit roll." },
                    { name: "Avatar of Perfection", cost: 15, restriction: "LEGIONES DAEMONICA SLAANESH MONSTER model only.", text: "This entity is the corporeal embodiment of selfish arrogance, fighting best when it fights alone.\n\nAt the start of each phase, if there are no other friendly units within 6\" of the bearer, you can: re-roll Advance rolls made for the bearer; re-roll Charge rolls made for the bearer; ignore any or all modifiers to its Move characteristic and to any Advance and/or Charge rolls made for the bearer." },
                    { name: "Soul Glutton", cost: 10, restriction: "LEGIONES DAEMONICA SLAANESH MONSTER model only.", text: "This daemon lord guzzles souls, its bloated corporeality reknitting with each fresh morsel.\n\nAt the end of the Fight phase, if one or more enemy models were destroyed this phase as a result of one or more of the bearer's attacks, it can use this Enhancement. If it does, it regains up to D3 lost wounds." },
                ],
                stratagems: [
                    { name: "Thieves of Pain", cp: 1, type: "Strategic Ploy", when: "Any phase, just after an attack or mortal wound is allocated to a model in a LEGIONES DAEMONICA SLAANESH unit from your army (excluding MONSTERS and VEHICLES).", target: "That LEGIONES DAEMONICA SLAANESH unit.", effect: "Select one other friendly LEGIONES DAEMONICA SLAANESH unit that is within 9\" of and visible to your unit. Until the end of the phase, while the selected unit is on the battlefield, each time a model in your unit would lose a wound, inflict 1 mortal wound on the selected unit instead.", restrictions: "" },
                    { name: "Archagonists", cp: 2, type: "Battle Tactic", when: "Fight phase.", target: "One LEGIONES DAEMONICA SLAANESH MONSTER unit or up to two LEGIONES DAEMONICA SLAANESH units (excluding MONSTERS) from your army that have not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in one of those units makes an attack, add 1 to the Wound roll.", restrictions: "" },
                    { name: "Sensory Excruciation", cp: 1, type: "Strategic Ploy", when: "Your Command phase.", target: "One LEGIONES DAEMONICA SLAANESH MONSTER unit from your army that is on the battlefield.", effect: "Each unit on the battlefield that is within your army's Shadow of Chaos must take a Battle-shock test, subtracting 1 from that test if they are Below Half-strength.\n\nDesigner's Note: This Stratagem forces all friendly and enemy units alike within your army's Shadow of Chaos to take a Battle-shock test. This can allow a Chaos Daemons player to heal units from their army through the Daemonic Terror army rule, at the risk of causing some of their own units to become Battle-shocked.", restrictions: "" },
                    { name: "Phantasmal Longing", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One LEGIONES DAEMONICA SLAANESH unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.", restrictions: "" },
                    { name: "Cavalcade of Blades", cp: 1, type: "Battle Tactic", when: "Your Charge phase, just after a LEGIONES DAEMONICA SLAANESH unit from your army ends a Charge move.", target: "That LEGIONES DAEMONICA SLAANESH unit.", effect: "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit, or roll six D6 instead if your unit is a MONSTER unit: for each 4+, that enemy unit suffers 1 mortal wound.", restrictions: "" },
                    { name: "Overwhelming Excess", cp: 1, type: "Battle Tactic", when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.", target: "One LEGIONES DAEMONICA SLAANESH unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.", restrictions: "" },
                ]
            },
            {
                name: "Plague Legion",
                flavour: "One moment, reality is a place of rationality. The next, the veil separating realspace from the Warp strains, then bursts like a fatted boil and from the suppurating rent spill the daemon legions of Nurgle. Despair spreads before them like vomit soaking into pristine silk. Miasmal clouds engulf the foe, causing flesh to blister and slough, metal to fur with rust, and hope itself to rot away into dread misery. Already disoriented and gripped by gloom, the enemy now faces rank upon rank of rotted horrors as Plaguebearers slouch toward them, shepherded by the mountainous bulks of Great Unclean Ones. With tittering tides of Nurglings flowing like sharp-fanged effluent about their legs, Beasts of Nurgle bounding through their lines like living boulders, and malevolent Plague Drones thrumming down from above, the enemy's nightmare is just beginning.",
                rule: { name: "Melancholic Miasma", flavour: "To fight the daemons of Nurgle is to endure their entropic assaults upon both the physical and spiritual battlefields. The horror of inevitable decay claws at the souls of their victims even as the daemons' splintered talons rake their flesh, heralding nightmarish putrefaction and impending doom.", text: "While an enemy unit is within 9\" of one or more LEGIONES DAEMONICA NURGLE units from your army, that enemy unit is within your army's Shadow of Chaos. In each player's Command phase, select one enemy unit within your army's Shadow of Chaos. That unit must take a Battle-shock test.", restrictions: "" },
                enhancements: [
                    { name: "Cankerblight", cost: 15, restriction: "LEGIONES DAEMONICA NURGLE model only.", text: "The mere presence of this corrosive monstrosity is enough to rot the very stuff of reality and all who inhabit it.\n\nEach time an enemy unit (excluding MONSTERS and VEHICLES) that is within 6\" of the bearer fails a Battle-shock test, the bearer can use this Enhancement. If it does, one model in that unit is destroyed (chosen by its controlling player). Each time the bearer uses this Enhancement, no mortal wounds are inflicted by your army's Daemonic Terror rule." },
                    { name: "Maggot Maws", cost: 15, restriction: "LEGIONES DAEMONICA NURGLE model only.", text: "This daemon's flesh is pocked with foul mouths that mumble curses to rot the minds of all who hear them.\n\nIn your Shooting phase, select one enemy unit within 6\" of the bearer; that enemy unit must take a Battle-shock test. Then roll one D6: on a 3+, that enemy unit suffers D3 mortal wounds. Each time the bearer uses this Enhancement, no mortal wounds are inflicted by your army's Daemonic Terror rule." },
                    { name: "Droning Shroud (Aura)", cost: 35, restriction: "LEGIONES DAEMONICA NURGLE MONSTER model only.", text: "This sentient cowl of daemonic plague flies roars and whirls with cyclonic force, obscuring even the most hulking and bloated daemonic bearer.\n\nWhile a friendly LEGIONES DAEMONICA NURGLE unit is within 6\" of the bearer, that unit can only be targeted by a ranged attack if the attacking model is within 18\"." },
                    { name: "Font of Spores (Aura)", cost: 20, restriction: "LEGIONES DAEMONICA NURGLE MONSTER model only.", text: "This entity's foul breath expels clouds of rust pox spores, which gnaw into all they settle upon.\n\nWhile a friendly LEGIONES DAEMONICA NURGLE unit is within 6\" of the bearer, improve the Armour Penetration characteristic of weapons equipped by models in that unit by 1." },
                ],
                stratagems: [
                    { name: "Seeping Virulence", cp: 1, type: "Battle Tactic", when: "Fight phase.", target: "One LEGIONES DAEMONICA NURGLE unit from your army that has not been selected to fight this phase.", effect: "Until the end of the phase, each time a model in that unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.", restrictions: "" },
                    { name: "Fever Visions", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One LEGIONES DAEMONICA NURGLE unit from your army that has not been selected to shoot or fight this phase.", effect: "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. After your unit has finished making its attacks, select one enemy unit hit by one or more of those attacks; that enemy unit must take a Battle-shock test.", restrictions: "" },
                    { name: "Foetid Resurgence", cp: 2, type: "Strategic Ploy", when: "Your Command phase.", target: "One LEGIONES DAEMONICA NURGLE unit from your army that is on the battlefield.", effect: "Return up to 1 destroyed model to your unit, or up to D3 destroyed models instead if your unit is a BATTLELINE unit, with their full wounds remaining. If it is a MONSTER unit, one model in your unit regains up to D3+1 lost wounds instead.", restrictions: "" },
                    { name: "Rot and Renewal", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One LEGIONES DAEMONICA NURGLE unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.", restrictions: "" },
                    { name: "Murkshadows", cp: 1, type: "Battle Tactic", when: "Your Movement phase.", target: "One LEGIONES DAEMONICA NURGLE INFANTRY unit from your army.", effect: "Until the end of the phase, each time your unit makes a Normal move, add 5\" to the Move characteristic of models in your unit.", restrictions: "" },
                    { name: "Plague of Woes", cp: 1, type: "Strategic Ploy", when: "Your opponent's Command phase, before selecting any targets for the Melancholic Miasma Detachment rule.", target: "One LEGIONES DAEMONICA NURGLE unit from your army.", effect: "Until the end of the phase, after an enemy unit takes a Battle-shock test as a result of the Melancholic Miasma Detachment rule, select one other enemy unit within 9\" of your unit; that enemy unit must take a Battle-shock test.", restrictions: "" },
                ]
            },
            {
                name: "Scintillating Legion",
                flavour: "Capering and cackling in an endless flux of transmogrifying change, the daemonic legions of Tzeentch unleash kaleidoscopic madness upon their enemies. Malevolent Lords of Change robed in sanity-blasting unhues wield raw magic with the ease of breathing. They marshal their bedlam hordes even as they transform screaming mortals into mounds of mutant flesh or set light to reality itself. Pink, Blue and Brimstone Horrors dance amidst the leaping flames, their sorceries unleashed in scintillating bombardments alongside the mutagenic blasts of bounding Flamers. Blade-finned Screamers flit through the skies in spiteful shoals, wheeling around the Burning Chariots that streak into the enemy lines like multicoloured comets, while all around them, reality itself distorts into screaming insanity.",
                rule: { name: "Fates in Flux", flavour: "With every chance for change seized, every new fraying of fate's weave, the daemons and their foes alike fuel the power of Tzeentch, however inadvertently.", text: "You start the battle with three Flux tokens (we recommend using a dice to track how many Flux tokens you have). You can spend one Flux token just after an Advance roll, Hit roll, Wound roll, Damage roll, saving throw or Hazardous test is made for a LEGIONES DAEMONICA TZEENTCH model or LEGIONES DAEMONICA TZEENTCH unit from your army to re-roll the result of that roll, throw or test. Flux tokens can also be spent to enhance the effect of some Stratagems. Each time you spend a Flux token, reduce the number of Flux tokens you have by one and your opponent gains one Flux token.\n\nWhenever your opponent has one or more Flux tokens, they can spend one Flux token after an Advance roll, Hit roll, Wound roll or saving throw is made for a model or unit from their army, to re-roll the result of that roll or throw. If they do, they reduce the number of Flux tokens they have by one and you gain one Flux token. This is ignored if your opponent has the Fates in Flux Detachment rule.\n\nIn your Command phase, if your opponent has one or more Flux tokens, you gain one Flux token.\n\nDesigner's Note: When using fast dice rolling, this rule can be used to spend any number of Flux tokens (up to the amount you have), to re-roll a number of dice up to the amount spent, after rolling multiple rolls or saving throws at once.", restrictions: "" },
                enhancements: [
                    { name: "Inescapable Eye", cost: 10, restriction: "LEGIONES DAEMONICA TZEENTCH model only.", text: "This gem reveals the myriad paths of the future.\n\nIn your Command phase, if the bearer is on the battlefield, if your opponent has one or more Flux tokens, you gain one additional Flux token." },
                    { name: "Infernal Puppeteer", cost: 25, restriction: "LEGIONES DAEMONICA TZEENTCH MONSTER model only.", text: "To this mighty entity, lesser daemons are but prisms through which its power shines.\n\nIn your Shooting phase, the bearer can use this Enhancement. If it does, until the end of the phase, you can select one other friendly visible LEGIONES DAEMONICA TZEENTCH unit within 9\" of the bearer. If you do, when selecting targets for ranged weapons equipped by the bearer, you can measure range and determine visibility from one model of your choice in the selected unit instead.\n\nDesigner's Note: When determining if a unit with the Lone Operative ability can be selected as the target, the range is determined from the model of your choice in the selected unit." },
                    { name: "Neverblade", cost: 20, restriction: "LEGIONES DAEMONICA TZEENTCH MONSTER model only.", text: "This bizarre daemon weapon makes a mockery of even the most determined defence.\n\nImprove the Strength characteristic of melee weapons equipped by the bearer by 2, improve the Attacks and Armour Penetration characteristics of melee weapons equipped by the bearer by 1, and each time the bearer makes a melee attack, add 1 to the Hit roll." },
                    { name: "Improbable Shield (Aura)", cost: 30, restriction: "LEGIONES DAEMONICA TZEENTCH model only.", text: "Complex convolutions of fate wind about this entity.\n\nWhile a friendly LEGIONES DAEMONICA TZEENTCH unit is within 6\" of the bearer, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds." },
                ],
                stratagems: [
                    { name: "Impossible Eclipse", cp: 1, type: "Strategic Ploy", when: "Any phase.", target: "One LEGIONES DAEMONICA TZEENTCH MONSTER unit from your army that is on the battlefield.", effect: "Select No Man's Land or your opponent's deployment zone, or spend one Flux token and select both. Until the end of the phase, the selected areas of the battlefield are within your army's Shadow of Chaos.", restrictions: "" },
                    { name: "Pyrogenesis", cp: 1, type: "Battle Tactic", when: "Your Shooting phase or the Fight phase.", target: "One LEGIONES DAEMONICA TZEENTCH unit from your army that has not been selected to shoot or fight that phase.", effect: "Until the end of the phase, add 2 to the Strength characteristic of weapons equipped by models in your unit, or spend one Flux token and add 3 to the Strength characteristic of those weapons and improve the Armour Penetration characteristic of those weapons by 1 instead.", restrictions: "" },
                    { name: "Flickering Reality", cp: 1, type: "Strategic Ploy", when: "Fight phase, just after an enemy unit has selected its targets.", target: "One LEGIONES DAEMONICA TZEENTCH unit from your army that was selected as the target of one or more of the attacking unit's attacks.", effect: "Roll one D6, then you can spend one Flux token to re-roll the result: until the end of the phase, each time an attack targets your unit, on an unmodified Hit roll (after any re-roll) of that result, the attack sequence ends, even if the original Hit roll would have been a Critical Hit.\n\nExample: If you roll a 2 and choose to spend one Flux token to re-roll the result, and the re-roll is a 6, then until the end of the phase, each time an attack targets your unit, on an unmodified Hit roll of 6 the attack sequence ends, that attack fails to hit and no Critical Hit effects (e.g. Lethal Hits) are resolved.", restrictions: "" },
                    { name: "Fateborne Nightmares", cp: 1, type: "Strategic Ploy", when: "Your Movement phase or your Charge phase.", target: "One LEGIONES DAEMONICA TZEENTCH unit from your army.", effect: "Until the end of the phase, each time a model in your unit makes a move, it can move through terrain features.", restrictions: "" },
                    { name: "Ficklefire", cp: 1, type: "Strategic Ploy", when: "Your Shooting phase.", target: "One LEGIONES DAEMONICA TZEENTCH unit from your army that is within Engagement Range of one or more enemy units.", effect: "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets for, and resolving attacks with, ranged weapons. Until the end of the phase, each time an enemy model is destroyed while its unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 mortal wound after the attacking unit has finished making its attacks.", restrictions: "" },
                    { name: "Delirium Unmade", cp: 1, type: "Strategic Ploy", when: "End of your opponent's Fight phase.", target: "One LEGIONES DAEMONICA TZEENTCH unit from your army that is not within Engagement Range of one or more enemy units. Alternatively, you can spend one Flux token when you use this Stratagem and target up to two LEGIONES DAEMONICA TZEENTCH units from your army instead (including those within Engagement Range of one or more enemy units).", effect: "Remove your units from the battlefield and place them into Strategic Reserves.", restrictions: "" },
                ]
            }
        ],
        units: [
                {
                        "id": "cd-belakor",
                        "name": "Be’lakor",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 375
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Betraying Shades – witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Betraying Shades – focused witchfire",
                                                "range": "18\"",
                                                "a": 12,
                                                "bs": "2+",
                                                "s": 6,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "The Blade of Shadows – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "The Blade of Shadows – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -3,
                                                "d": 1,
                                                "keywords": [
                                                        "Sustained Hits 1"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deadly Demise D6",
                                        "Deep Strike",
                                        "Stealth"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Wreathed in Shadows",
                                        "Pall of Despair",
                                        "Shadow Lord",
                                        "The Dark Master",
                                        "Shadow Form"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Be’lakor"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Be’lakor – EPIC HERO This model is equipped with: Betraying Shades; the Blade of Shadows. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll. SUPREME COMMANDER If this model is in your army, it must be your Warlord."
                },
                {
                        "id": "cd-bloodmaster",
                        "name": "Bloodmaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "5+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Blade of blood",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bloodmaster",
                                        "A Gory Path"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodmaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Bloodletters.",
                        "compositionText": "1 Bloodmaster This model is equipped with: blade of blood."
                },
                {
                        "id": "cd-bloodthirster",
                        "name": "Bloodthirster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 305
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bloodflail",
                                                "range": "12\"",
                                                "a": 1,
                                                "bs": "2+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Devastating Wounds"
                                                ]
                                        },
                                        {
                                                "name": "Hellfire breath",
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
                                                "name": "Lash of Khorne",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": []
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Axe of Khorne – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 14,
                                                "ap": -4,
                                                "d": "D3+1",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Axe of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 16,
                                                "ws": "2+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great axe of Khorne – strike",
                                                "range": "Melee",
                                                "a": 7,
                                                "ws": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Great axe of Khorne – sweep",
                                                "range": "Melee",
                                                "a": 14,
                                                "ws": "2+",
                                                "s": 10,
                                                "ap": -2,
                                                "d": 2,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Khorne",
                                        "Relentless Carnage",
                                        "Greater Daemon of Khorne"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodthirster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Bloodthirster This model is equipped with: hellfire breath; great axe of Khorne DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-changecaster",
                        "name": "Changecaster",
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
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arcane Fireball – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Arcane Fireball – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
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
                                                "name": "Herald combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Changecaster",
                                        "Storm of Mutating Sorcery"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Changecaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following units: Blue Horrors; Pink Horrors.",
                        "compositionText": "1 Changecaster This model is equipped with: Arcane Fireball; Herald combat weapon."
                },
                {
                        "id": "cd-contorted-epitome",
                        "name": "Contorted Epitome",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Coiled tentacles",
                                                "range": "Melee",
                                                "a": "D6",
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Ravaging claws",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
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
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Swallow Energy",
                                        "Horrible Fascination"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Slaanesh",
                                "Contorted Epitome"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Contorted Epitome This model is equipped with: coiled tentacles; ravaging claws."
                },
                {
                        "id": "cd-daemon-prince-of-chaos",
                        "name": "Daemon Prince of Chaos",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 190
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemonic Lord",
                                        "Prince of Darkness",
                                        "Unholy Vigour"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince Of Chaos"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Daemon Prince of Chaos This model is equipped with: infernal cannon; hellforged weapons. DAEMONIC ALLEGIANCE When you select this model to include in your army, you must select one of the following keywords for it to gain: KHORNE TZEENTCH NURGLE SLAANESH The keyword you select will also affect some of this model’s characteristics, as stated overleaf."
                },
                {
                        "id": "cd-daemon-prince-of-chaos-with-wings",
                        "name": "Daemon Prince of Chaos with Wings",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Malefic Destruction",
                                        "Harbinger of Death"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Daemon Prince Of Chaos With Wings"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Daemon Prince of Chaos with Wings This model is equipped with: infernal cannon; hellforged weapons. DAEMONIC ALLEGIANCE When you select this model to include in your army, you must select one of the following keywords for it to gain: KHORNE TZEENTCH NURGLE SLAANESH The keyword you select will also affect some of this model’s characteristics, as stated overleaf."
                },
                {
                        "id": "cd-epidemius",
                        "name": "Epidemius",
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
                                "sv": "6+",
                                "w": 8,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Balesword and Nurgling attendants",
                                                "range": "Melee",
                                                "a": "D6+3",
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blessed by the Plague God",
                                        "Tally of Pestilence"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Epidemius"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Epidemius – EPIC HERO This model is equipped with: balesword and Nurgling attendants."
                },
                {
                        "id": "cd-exalted-flamer",
                        "name": "Exalted Flamer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 65
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 6,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fire of Tzeentch – blue fire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Fire of Tzeentch – pink fire",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flamer mouths",
                                                "range": "Melee",
                                                "a": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blazing Warpfire",
                                        "Flames of Change"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Exalted Flamer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Flamers.",
                        "compositionText": "1 Exalted Flamer This model is equipped with: Fire of Tzeentch; Flamer mouths."
                },
                {
                        "id": "cd-fateskimmer",
                        "name": "Fateskimmer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 7,
                                "sv": "6+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arcane Fireball – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Arcane Fireball – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
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
                                                "name": "Herald combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Screamer bites",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fateskimmer",
                                        "Rider of the Immaterial Winds"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Fateskimmer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Screamers.",
                        "compositionText": "1 Fateskimmer This model is equipped with: Arcane Fireball; Herald combat weapon; Screamer bites."
                },
                {
                        "id": "cd-fluxmaster",
                        "name": "Fluxmaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Arcane Fireball – witchfire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 5,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Arcane Fireball – focused witchfire",
                                                "range": "18\"",
                                                "a": 3,
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
                                                "name": "Herald combat weapon",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Fluxmaster",
                                        "Altered Reality"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Fluxmaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following units: Blue Horrors; Pink Horrors.",
                        "compositionText": "1 Fluxmaster This model is equipped with: Arcane Fireball; Herald combat weapon."
                },
                {
                        "id": "cd-great-unclean-one",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Nurgle",
                                        "Daemon Lord of Nurgle",
                                        "Nurgle’s Rot"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Great Unclean One"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Great Unclean One This model is equipped with: plague flail; putrid vomit; bilesword. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-horticulous-slimux",
                        "name": "Horticulous Slimux",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 10,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Acidic maw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 7,
                                                "ap": -4,
                                                "d": 3,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Lopping shears",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Beast Handler",
                                        "Seed the Garden of Nurgle"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Horticulous Slimux"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Beasts of Nurgle.",
                        "compositionText": "1 Horticulous Slimux – EPIC HERO This model is equipped with: acidic maw; lopping shears."
                },
                {
                        "id": "cd-infernal-enrapturess",
                        "name": "Infernal Enrapturess",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Heartstring lyre – cacophonous melody",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 6,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        },
                                        {
                                                "name": "Heartstring lyre – euphonic blast",
                                                "range": "24\"",
                                                "a": 1,
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -3,
                                                "d": "D6+1",
                                                "keywords": [
                                                        "Assault"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Ravaging claws",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
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
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Harmonic Alignment",
                                        "Discordant Disruption"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Infernal Enrapturess"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Infernal Enrapturess This model is equipped with: heartstring lyre; ravaging claws."
                },
                {
                        "id": "cd-kairos-fateweaver",
                        "name": "Kairos Fateweaver",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 295
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "6+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal Gateway – witchfire",
                                                "range": "24\"",
                                                "a": "D6+3",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": "D3",
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Gateway – focused witchfire",
                                                "range": "24\"",
                                                "a": "D3+6",
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Staff of Tomorrow",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -2,
                                                "d": "2D3",
                                                "keywords": [
                                                        "Psychic"
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Tzeentch",
                                        "One Head Looks Forward",
                                        "One Head Looks Back"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Kairos Fateweaver"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Kairos Fateweaver – EPIC HERO This model is equipped with: Infernal Gateway; Staff of Tomorrow. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-karanak",
                        "name": "Karanak",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Scalding roar",
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
                                                "name": "Soul-rending fangs",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Character 3+",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Pack Leader",
                                        "Prey of the Blood God",
                                        "Brass Collar of Bloody Vengeance"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Karanak"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Flesh Hounds.",
                        "compositionText": "1 Karanak – EPIC HERO This model is equipped with: scalding roar; soul-rending fangs; Brass Collar of Bloody Vengeance."
                },
                {
                        "id": "cd-keeper-of-secrets",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Slaanesh",
                                        "Mesmerising Form",
                                        "Greater Daemon of Slaanesh",
                                        "Shining Aegis"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Keeper Of Secrets"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Keeper of Secrets This model is equipped with: Phantasmagoria; snapping claws; witstealer sword. DAMAGED: 1-6 WOUNDS REMAINING While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-lord-of-change",
                        "name": "Lord of Change",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 285
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 10,
                                "sv": "6+",
                                "w": 18,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Rod of sorcery",
                                                "range": "18\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Bolt of Change – witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Bolt of Change – focused witchfire",
                                                "range": "18\"",
                                                "a": 9,
                                                "bs": "2+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Hazardous",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Baleful sword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Staff of Tzeentch",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": [
                                                        "Psychic"
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Daemon Lord of Tzeentch",
                                        "Master of Magicks",
                                        "Greater Daemon of Tzeentch"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Fly",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Lord Of Change"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Lord of Change This model is equipped with: Bolt of Change; staff of Tzeentch. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-poxbringer",
                        "name": "Poxbringer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Foul balesword",
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
                                        "Deep Strike",
                                        "Feel No Pain 5+",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Poxbringer",
                                        "Feculent Despair"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Poxbringer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Poxbringer This model is equipped with: foul balesword."
                },
                {
                        "id": "cd-rendmaster-on-blood-throne",
                        "name": "Rendmaster on Blood Throne",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 165
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Attendants’ hellblades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Blade of blood",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Blood Throne",
                                        "Champion Slayer"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Rendmaster On Blood Throne"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Rendmaster on Blood Throne This model is equipped with: attendants’ hellblades; blade of blood."
                },
                {
                        "id": "cd-rotigus",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Nurgle",
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
                                "Daemon",
                                "Nurgle",
                                "Rotigus"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Rotigus – EPIC HERO This model is equipped with: streams of brackish filth; gnarlrod. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-shalaxi-helbane",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Slaanesh",
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
                                "Slaanesh",
                                "Shalaxi Helbane"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Shalaxi Helbane – EPIC HERO This model is equipped with: lash of Slaanesh; Pavane of Slaanesh; snapping claws; soulpiercer. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                },
                {
                        "id": "cd-skarbrand",
                        "name": "Skarbrand",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 305
                                }
                        ],
                        "stats": {
                                "m": "10\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 20,
                                "ld": "6+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Bellow of endless fury",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 8,
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
                                                "name": "Slaughter and Carnage – strike",
                                                "range": "Melee",
                                                "a": 8,
                                                "ws": "2+",
                                                "s": 16,
                                                "ap": -4,
                                                "d": 6,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Slaughter and Carnage – sweep",
                                                "range": "Melee",
                                                "a": 16,
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
                                        "Deadly Demise D6",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Greater Daemon of Khorne",
                                        "Rage Embodied",
                                        "Murderlust"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skarbrand"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Skarbrand – EPIC HERO This model is equipped with: bellow of endless fury; Slaughter and Carnage. DAMAGED: 1-7 WOUNDS REMAINING While this model has 1-7 wounds remaining, add 2 to the Attacks characteristic of this model’s Slaughter and Carnage."
                },
                {
                        "id": "cd-skullmaster",
                        "name": "Skullmaster",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
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
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Blade of blood",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Juggernaut’s bladed horn",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance"
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Skullmaster’s Fury",
                                        "Devastating Charge"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skullmaster"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Bloodcrushers.",
                        "compositionText": "1 Skullmaster This model is equipped with: blade of blood; Juggernaut’s bladed horn."
                },
                {
                        "id": "cd-skulltaker",
                        "name": "Skulltaker",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 85
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "4+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "The Slayer Sword",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 3,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Lord of Decapitations",
                                        "Skulls for Khorne"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skulltaker"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Bloodletters.",
                        "compositionText": "1 Skulltaker – EPIC HERO This model is equipped with: the Slayer Sword."
                },
                {
                        "id": "cd-sloppity-bilepiper",
                        "name": "Sloppity Bilepiper",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 55
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Marotter",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Jolly Gutpipes",
                                        "Disease of Mirth"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Sloppity Bilepiper"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Sloppity Bilepiper This model is equipped with: marotter."
                },
                {
                        "id": "cd-spoilpox-scrivener",
                        "name": "Spoilpox Scrivener",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "5\"",
                                "t": 5,
                                "sv": "7+",
                                "w": 5,
                                "ld": "6+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Disgusting sneezes",
                                                "range": "6\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Plaguesword and distended maw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 5,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Keep Counting!",
                                        "Meet Your Quota!"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Spoilpox Scrivener"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Plaguebearers.",
                        "compositionText": "1 Spoilpox Scrivener This model is equipped with: disgusting sneezes; plaguesword and distended maw."
                },
                {
                        "id": "cd-syllesske",
                        "name": "Syll’esske",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 120
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 6,
                                "sv": "6+",
                                "w": 9,
                                "ld": "6+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Cacophonic choir – witchfire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Cacophonic choir – focused witchfire",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Psychic",
                                                        "Hazardous",
                                                        "Ignores Cover",
                                                        "Devastating Wounds",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Scourging whip",
                                                "range": "9\"",
                                                "a": 6,
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
                                                "name": "Axe of Dominion",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 7,
                                                "ap": -2,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Scourging whip",
                                                "range": "Melee",
                                                "a": 6,
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
                                        "Deep Strike",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Prince of Slaanesh",
                                        "Delightful Agonies"
                                ]
                        },
                        "keywords": [
                                "Monster",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Syll’esske"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Syll’Esske – EPIC HERO This model is equipped with: Cacophonic Choir; scourging whip; Axe of Dominion."
                },
                {
                        "id": "cd-the-blue-scribes",
                        "name": "The Blue Scribes",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 75
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 4,
                                "sv": "6+",
                                "w": 6,
                                "ld": "8+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Sharp quills",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "5+",
                                                "s": 2,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": [
                                                        "Anti-Psyker 2+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "P’tarix’s Sorcerous Syphon",
                                        "Xirat’p’s Sorcerous Barrages"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "The Blue Scribes"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 The Blue Scribes – EPIC HERO This model is equipped with: sharp quills."
                },
                {
                        "id": "cd-the-changeling",
                        "name": "The Changeling",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 90
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 5,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Infernal Flames – witchfire",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        },
                                        {
                                                "name": "Infernal Flames – focused witchfire",
                                                "range": "12\"",
                                                "a": "D6+3",
                                                "bs": "N/A",
                                                "s": 6,
                                                "ap": -1,
                                                "d": "D3",
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Hazardous",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "The Trickster’s Staff",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "4+",
                                                "s": 4,
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
                                        "Lone Operative",
                                        "Stealth"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Formless Horror",
                                        "Mischief and Confusion"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "The Changeling"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 The Changeling – EPIC HERO This model is equipped with: Infernal Flames; the Trickster’s Staff."
                },
                {
                        "id": "cd-the-masque-of-slaanesh",
                        "name": "The Masque of Slaanesh",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Serrated claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
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
                                        "Deep Strike",
                                        "Fights First",
                                        "Lone Operative"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "The Eternal Dance",
                                        "Dazzling Acrobatics"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Epic Hero",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "The Masque Of Slaanesh"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 The Masque of Slaanesh – EPIC HERO This model is equipped with: serrated claws."
                },
                {
                        "id": "cd-tormentbringer",
                        "name": "Tormentbringer",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "14\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 12,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "12\"",
                                                "a": 6,
                                                "bs": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Seeker tongues",
                                                "range": "Melee",
                                                "a": 4,
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
                                                "a": 8,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tormentbringer",
                                        "Hysterical Frenzy"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Tormentbringer"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Hellflayers.",
                        "compositionText": "1 Tormentbringer This model is equipped with: lashes of torment; Seeker tongues; slashing claws."
                },
                {
                        "id": "cd-tranceweaver",
                        "name": "Tranceweaver",
                        "role": "character",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 60
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Ravaging claws",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "2+",
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
                                        "Fights First",
                                        "Leader"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Tranceweaver",
                                        "Symphony of Pain"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Character",
                                "Psyker",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Tranceweaver"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "leaderText": "This model can be attached to the following unit: Daemonettes.",
                        "compositionText": "1 Tranceweaver This model is equipped with: ravaging claws."
                },
                {
                        "id": "cd-bloodletters",
                        "name": "Bloodletters",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 110
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hellblade",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bane of Cowards",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Battleline",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodletters"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Bloodreaper 9 Bloodletters Every model is equipped with: hellblade."
                },
                {
                        "id": "cd-blue-horrors",
                        "name": "Blue Horrors",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 125
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "8+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Coruscating Blue Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Coruscating Yellow Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Blue claws",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Yellow claws",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Deep Strike",
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Split",
                                        "Sullen Malevolence",
                                        "Exploding Horrors"
                                ]
                        },
                        "keywords": [
                                "Legiones Daemonica"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "10 Blue Horrors Every Blue Horror is equipped with: Coruscating Blue Flames; blue claws. Every Brimstone Horror added to this unit using the Split ability is equipped with: Coruscating Yellow Flames; yellow claws. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, CHAOS, DAEMON, TZEENTCH, HORRORSBLUE HORRORS: BLUEBRIMSTONE HORRORS: BRIMSTONE: FACTION"
                },
                {
                        "id": "cd-daemonettes",
                        "name": "Daemonettes",
                        "role": "battleline",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "9\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
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
                                        "The Shadow of Chaos"
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
                                "Slaanesh",
                                "Daemonettes"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Alluress 9 Daemonettes Every model is equipped with: slashing claws."
                },
                {
                        "id": "cd-nurglings",
                        "name": "Nurglings",
                        "role": "battleline",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Mischief Makers"
                                ]
                        },
                        "keywords": [
                                "Swarm",
                                "Battleline",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Nurglings"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "3-6 Nurgling Swarms Every model is equipped with: diseased claws and teeth."
                },
                {
                        "id": "cd-pink-horrors",
                        "name": "Pink Horrors",
                        "role": "infantry",
                        "points": [
                                {
                                        "models": 10,
                                        "cost": 140
                                }
                        ],
                        "stats": {
                                "m": "6\"",
                                "t": 3,
                                "sv": "7+",
                                "w": 1,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Coruscating Pink Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Coruscating Blue Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "4+",
                                                "s": 3,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Coruscating Yellow Flames",
                                                "range": "18\"",
                                                "a": 2,
                                                "bs": "5+",
                                                "s": 2,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Pistol",
                                                        "Psychic"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Pink claws",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "4+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Blue claws",
                                                "range": "Melee",
                                                "a": 1,
                                                "ws": "5+",
                                                "s": 3,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Yellow claws",
                                                "range": "Melee",
                                                "a": 2,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Split",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Legiones Daemonica"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "10 Pink Horrors Every Pink Horror is equipped with: Coruscating Pink Flames; pink claws. Every Blue Horror added to this unit using the Split ability is equipped with: Coruscating Blue Flames; blue claws. Every Brimstone Horror added to this unit using the Split ability is equipped with: Coruscating Yellow Flames; yellow claws. HORRORS ARE PINK. HORRORS ARE BLUE. WHEREONCE THERE WAS ONE, NOW THERE ARE TWO. If, at any point, this unit contains no PINK HORROR models, use the BLUE HORRORS datasheet for this unit. Designer’s Note: While this unit contains one or more PINK HORROR models, the Sullen Malevolence and Exploding Horrors abilities from the BLUE HORRORS datasheet do not apply to this unit. KEYWORDS – ALL MODELS: INFANTRY, BATTLELINE, CHAOS, DAEMON, TZEENTCH, HORRORSPINK HORRORS: PINKBLUE HORRORS: BLUEBRIMSTONE HORRORS: BRIMSTONE: FACTION"
                },
                {
                        "id": "cd-plaguebearers",
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
                                        "The Shadow of Chaos"
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
                                "Daemon",
                                "Nurgle",
                                "Plaguebearers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Plagueridden 9 Plaguebearers Every model is equipped with: plaguesword."
                },
                {
                        "id": "cd-feculent-gnarlmaw",
                        "name": "Feculent Gnarlmaw",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 100
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 9,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Shroud of Flies",
                                        "Diseased Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Feculent Gnarlmaw"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Feculent Gnarlmaw This model is equipped with: nothing."
                },
                {
                        "id": "cd-skull-altar",
                        "name": "Skull Altar",
                        "role": "fortification",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 105
                                }
                        ],
                        "stats": {
                                "m": "-",
                                "t": 12,
                                "sv": "3+",
                                "w": 10,
                                "ld": "7+",
                                "oc": 0
                        },
                        "weapons": {
                                "ranged": [],
                                "melee": []
                        },
                        "abilities": {
                                "core": [
                                        "Infiltrators"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Shadow of Khorne",
                                        "Cover",
                                        "Fortification"
                                ]
                        },
                        "keywords": [
                                "Fortification",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skull Altar"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Skull Altar This model is equipped with: nothing."
                },
                {
                        "id": "cd-beasts-of-nurgle",
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Grotesque Regeneration"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Daemon",
                                "Nurgle",
                                "Beasts Of Nurgle"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1-2 Beasts of Nurgle Every model is equipped with: putrid appendages."
                },
                {
                        "id": "cd-bloodcrushers",
                        "name": "Bloodcrushers",
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
                                "m": "10\"",
                                "t": 7,
                                "sv": "3+",
                                "w": 4,
                                "ld": "7+",
                                "oc": 2
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Hellblade",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Juggernaut’s bladed horn",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Extra Attacks",
                                                        "Lance"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Brass Stampede",
                                        "Daemonic Icon",
                                        "Instrument of Chaos"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Bloodcrushers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Bloodhunter 2-5 Bloodcrushers Every model is equipped with: hellblade; Juggernaut’s bladed horn."
                },
                {
                        "id": "cd-burning-chariot",
                        "name": "Burning Chariot",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 115
                                }
                        ],
                        "stats": {
                                "m": "12\"",
                                "t": 8,
                                "sv": "7+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Fire of Tzeentch – blue fire",
                                                "range": "18\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -3,
                                                "d": 3,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic"
                                                ]
                                        },
                                        {
                                                "name": "Fire of Tzeentch – pink fire",
                                                "range": "12\"",
                                                "a": "2D6",
                                                "bs": "N/A",
                                                "s": 5,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flamer mouths",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "4+",
                                                "s": 5,
                                                "ap": 0,
                                                "d": 1,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Screamer bites",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+",
                                                        "Extra Attacks"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Eldritch Flames"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Burning Chariot"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Burning Chariot This model is equipped with: Fire of Tzeentch; Flamer mouths; Screamer bites."
                },
                {
                        "id": "cd-fiends",
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
                                        "The Shadow of Chaos"
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
                                "Slaanesh",
                                "Fiends"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Blissbringer 2-5 Fiends Every model is equipped with: barbed tail and dissecting claws."
                },
                {
                        "id": "cd-flamers",
                        "name": "Flamers",
                        "role": "infantry",
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
                                "m": "9\"",
                                "t": 4,
                                "sv": "7+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Flickering Flames",
                                                "range": "12\"",
                                                "a": "D6",
                                                "bs": "N/A",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 1,
                                                "keywords": [
                                                        "Ignores Cover",
                                                        "Psychic",
                                                        "Torrent"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Flamer mouths",
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Bounding Leaps"
                                ]
                        },
                        "keywords": [
                                "Infantry",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Flamers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Pyrocaster 2-5 Flamers Every model is equipped with: Flickering Flames; Flamer mouths."
                },
                {
                        "id": "cd-flesh-hounds",
                        "name": "Flesh Hounds",
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
                                "t": 4,
                                "sv": "7+",
                                "w": 2,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "5+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Burning roar",
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
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Gore-drenched fangs",
                                                "range": "Melee",
                                                "a": 3,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Hunters from the Warp",
                                        "Collar of Khorne"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Flesh Hounds"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Gore Hound 4-9 Flesh Hounds The Gore Hound is equipped with: burning roar; gore-drenched fangs; collar of Khorne. Every Flesh Hound is equipped with: gore-drenched fangs; collar of Khorne."
                },
                {
                        "id": "cd-hellflayers",
                        "name": "Hellflayers",
                        "role": "mounted",
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
                                "m": "14\"",
                                "t": 6,
                                "sv": "5+",
                                "w": 7,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "12\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Assault",
                                                        "Pistol"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Lashes of torment",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 4,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Infantry 3+",
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Seeker tongues",
                                                "range": "Melee",
                                                "a": 4,
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
                                                "a": 8,
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
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Cutting Down the Foe"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Slaanesh",
                                "Hellflayers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1-2 Hellflayers Every model is equipped with: lashes of torment; Seeker tongues; slashing claws."
                },
                {
                        "id": "cd-plague-drones",
                        "name": "Plague Drones",
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
                                        "The Shadow of Chaos"
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
                                "Daemon",
                                "Nurgle",
                                "Plague Drones"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Plaguebringer 2-5 Plague Drones Every model is equipped with: death’s heads; foul mouthparts; plaguesword."
                },
                {
                        "id": "cd-screamers",
                        "name": "Screamers",
                        "role": "infantry",
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
                                "sv": "6+",
                                "w": 3,
                                "ld": "7+",
                                "oc": 1
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [],
                                "melee": [
                                        {
                                                "name": "Lamprey bite",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
                                                "s": 6,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Anti-Monster 4+",
                                                        "Anti-Vehicle 4+"
                                                ]
                                        }
                                ]
                        },
                        "abilities": {
                                "core": [
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Slashing Dive"
                                ]
                        },
                        "keywords": [
                                "Beast",
                                "Fly",
                                "Chaos",
                                "Daemon",
                                "Tzeentch",
                                "Screamers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "3-6 Screamers Every model is equipped with: lamprey bite."
                },
                {
                        "id": "cd-seekers",
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
                                        "The Shadow of Chaos"
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
                                "Slaanesh",
                                "Seekers"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Heartseeker 4-9 Seekers Every model is equipped with: lashing tongue; slashing claws."
                },
                {
                        "id": "cd-skull-cannon",
                        "name": "Skull Cannon",
                        "role": "mounted",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 95
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 9,
                                "sv": "4+",
                                "w": 9,
                                "ld": "7+",
                                "oc": 3
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Skull cannon",
                                                "range": "48\"",
                                                "a": "D6+2",
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Attendants’ hellblades",
                                                "range": "Melee",
                                                "a": 4,
                                                "ws": "3+",
                                                "s": 5,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Biting maw",
                                                "range": "Melee",
                                                "a": 2,
                                                "ws": "4+",
                                                "s": 6,
                                                "ap": 0,
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
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Skulls of the Fallen"
                                ]
                        },
                        "keywords": [
                                "Mounted",
                                "Chaos",
                                "Daemon",
                                "Khorne",
                                "Skull Cannon"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Skull Cannon This model is equipped with: skull cannon; attendants’ hellblades; biting maw."
                },
                {
                        "id": "cd-soul-grinder",
                        "name": "Soul Grinder",
                        "role": "vehicle",
                        "points": [
                                {
                                        "models": 1,
                                        "cost": 180
                                }
                        ],
                        "stats": {
                                "m": "8\"",
                                "t": 11,
                                "sv": "3+",
                                "w": 14,
                                "ld": "7+",
                                "oc": 5
                        },
                        "invuln": "4+",
                        "weapons": {
                                "ranged": [
                                        {
                                                "name": "Harvester cannon",
                                                "range": "36\"",
                                                "a": 3,
                                                "bs": "3+",
                                                "s": 10,
                                                "ap": -1,
                                                "d": 3,
                                                "keywords": []
                                        },
                                        {
                                                "name": "Torrent of burning blood",
                                                "range": "12\"",
                                                "a": "2D6",
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
                                                "name": "Phlegm bombardment",
                                                "range": "36\"",
                                                "a": "D6+1",
                                                "bs": "3+",
                                                "s": 7,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Blast",
                                                        "Indirect Fire",
                                                        "Lethal Hits"
                                                ]
                                        },
                                        {
                                                "name": "Scream of despair",
                                                "range": "24\"",
                                                "a": 6,
                                                "bs": "3+",
                                                "s": 9,
                                                "ap": -2,
                                                "d": 2,
                                                "keywords": [
                                                        "Devastating Wounds",
                                                        "Sustained Hits 1"
                                                ]
                                        },
                                        {
                                                "name": "Warp gaze",
                                                "range": "48\"",
                                                "a": "D3",
                                                "bs": "3+",
                                                "s": 12,
                                                "ap": -2,
                                                "d": "D6+2",
                                                "keywords": [
                                                        "Blast"
                                                ]
                                        }
                                ],
                                "melee": [
                                        {
                                                "name": "Iron claw",
                                                "range": "Melee",
                                                "a": 5,
                                                "ws": "3+",
                                                "s": 16,
                                                "ap": -3,
                                                "d": "D6+2",
                                                "keywords": []
                                        },
                                        {
                                                "name": "Warpclaw",
                                                "range": "Melee",
                                                "a": 6,
                                                "ws": "3+",
                                                "s": 8,
                                                "ap": -1,
                                                "d": 2,
                                                "keywords": [
                                                        "Extra Attacks"
                                                ]
                                        },
                                        {
                                                "name": "Warpsword",
                                                "range": "Melee",
                                                "a": 3,
                                                "ws": "3+",
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
                                        "Deadly Demise D3",
                                        "Deep Strike"
                                ],
                                "faction": [
                                        "The Shadow of Chaos"
                                ],
                                "wargear": [],
                                "other": [
                                        "Scuttling Walker"
                                ]
                        },
                        "keywords": [
                                "Vehicle",
                                "Walker",
                                "Chaos",
                                "Daemon",
                                "Soul Grinder"
                        ],
                        "factionKeywords": [
                                "Legiones Daemonica"
                        ],
                        "compositionText": "1 Soul Grinder This model is equipped with: harvester cannon; iron claw; warpsword. DAMAGED: 1-5 WOUNDS REMAINING While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
                }
        ]
    };

    window.W40K_FACTIONS = window.W40K_FACTIONS || { "10th": [], "11th": [] };
    window.W40K_FACTIONS["10th"].push(cd);
})();
